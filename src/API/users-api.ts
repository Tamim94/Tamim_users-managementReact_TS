import axios, {AxiosRequestConfig} from 'axios';
import { User } from '../types/User';
import {Error} from "../types/Error";

class UsersApi {
    private async makeRequest(config: AxiosRequestConfig): Promise<any> {
        try {
            const response = await axios({
                ...config
            });

            return response.data;
        } catch (e:any) {
            console.log(e.response.data.message);
            return {
                error: true,
                message: e.response.data.message
            };
        }
    }

    async getUsers(): Promise<User[]> {
        return this.makeRequest({
            method: 'GET',
            url: 'https://api.escuelajs.co/api/v1/users'
        });
    }

    async getUserById(id: string): Promise<User> {
        return this.makeRequest({
            method: 'GET',
            url: `https://api.escuelajs.co/api/v1/users/${id}`
        });
    }

    async updateUser(id: number, user: User): Promise<User | Error> {
        return this.makeRequest({
            method: 'PUT',
            url: `https://api.escuelajs.co/api/v1/users/${id}`,
            data: user
        });
    }
    async createUser( user: User): Promise<User | Error> {
        return this.makeRequest({
            method: 'POST',
            url: `https://api.escuelajs.co/api/v1/users`,
            data: user
        });


    }

    async deleteUser(id: number): Promise<User | Error> {
        return this.makeRequest({
            method: 'DELETE',
            url: `https://api.escuelajs.co/api/v1/users/${id}`,
        });
    } async login(email: string, password: string): Promise<{access_token:string, user: User}> {
        const response = await this.makeRequest({
            method: 'POST',
            url: 'https://api.escuelajs.co/api/v1/auth/login',
            data: {
                email,
                password
            }
        });
        console.log('Response from login request:', response);

        if (!response.user) {
            console.error('User object is not returned in the login response'); // car l'avatar n'apparait pas dans le top bar c'est un probleme coté api
        }

        return response;
    }
    logout() {

        localStorage.removeItem('accessToken');
    }

    async getUserWithSession(accessToken:string): Promise<User> {
        return this.makeRequest({
            method: 'GET',
            url: 'https://api.escuelajs.co/api/v1/users/profile',
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
    }
}

export const usersApi = new UsersApi();









