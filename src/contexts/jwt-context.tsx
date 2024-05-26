import React, {createContext, useReducer, useEffect, useCallback} from 'react';
import type { FC, ReactNode } from 'react';
import { User } from '../types/User';
import {usersApi} from "../API/users-api";

interface State {
    isAuthenticated: boolean;
    isInitialized: boolean;
    user: User | null;
}

enum ActionType {
    INITIALIZE = 'INITIALIZE',
    LOGIN = 'LOGIN',
    LOGOUT = 'LOGOUT',
}

type InitializeAction = {
    type: ActionType.INITIALIZE,
    payload: {
        isAuthenticated: boolean;
        user: User | null;
    }
}

type LoginAction = {
    type: ActionType.LOGIN,
    payload: {
        user: User;
    }
}

type LogoutAction = {
    type: ActionType.LOGOUT;
};

type Action = InitializeAction | LoginAction | LogoutAction;

type Handler = (state: State, action: any) => State;

const initialState: State = {
    isAuthenticated: false,
    isInitialized: false,
    user: null,
};

const handlers: Record<ActionType, Handler> = {
    INITIALIZE: (state: State, action: InitializeAction): State => {
        const { isAuthenticated, user } = action.payload;

        return {
            ...state,
            isAuthenticated,
            isInitialized: true,
            user
        };
    },
    LOGIN: (state: State, action: LoginAction): State => {
        const { user } = action.payload;

        return {
            ...state,
            isAuthenticated: true,
            user
        };
    },
    LOGOUT: (state: State): State => ({
        ...state,
        isAuthenticated: false,
        user: null,
    }),
}

const reducer = (state: State, action: Action): State =>
    handlers[action.type] ? handlers[action.type](state, action) : state;

export interface AuthContextValue extends State {
    login:(email:string,password:string)=>Promise<void>;
    logout:()=>void;
}

export const AuthContext = createContext<AuthContextValue>({
    ...initialState,
    login: ()=>Promise.resolve(),
    logout:()=>Promise.resolve(),
});

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const initialize = useCallback(async () => {
        const accessToken = globalThis.localStorage.getItem('accessToken');
        if(accessToken){

            const user = await usersApi.getUserWithSession(accessToken);
            dispatch({
                type: ActionType.INITIALIZE,
                payload: {
                    isAuthenticated: true,
                    user
                }
            });
            console.log('Initialized user:', user);
        } else {
            dispatch({
                type: ActionType.INITIALIZE,
                payload: {
                    isAuthenticated: false,
                    user: null
                }
            });
            console.log('No user to initialize');
        }

    }, [dispatch]);

    useEffect(() => {
        initialize();
    }, [initialize]);

    const login = useCallback(async (email: string, password: string) => {
        try {
            console.log('Login called with email:', email, 'and password:', password);
            const response = await usersApi.login(email, password);
            console.log('Response from login request:', response);
            if (response.access_token) {
                globalThis.localStorage.setItem('accessToken',response.access_token);
                dispatch({
                    type: ActionType.LOGIN,
                    payload: {
                        user: response.user
                    }
                });
                console.log('Logged in user:', response.user);
            } else {
                throw new Error("User Login Failed! Check credentials and try again. Else create a account if you don't have one !");
            }
        } catch (error) {
            console.error('Error logging in:', error);
            throw error;
        }
    }, [dispatch]);

    const logout = useCallback(() => {
        globalThis.localStorage.removeItem('accessToken');
        dispatch({
            type: ActionType.LOGOUT
        });
    }, [dispatch]);

    return (
        <AuthContext.Provider
            value={{
                ...state,
                login,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};