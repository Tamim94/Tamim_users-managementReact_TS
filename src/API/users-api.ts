import axios, { AxiosRequestConfig } from 'axios';
import { User } from '../types/User';

class UsersApi {
    private async makeRequest(config: AxiosRequestConfig): Promise<any> {
        try {
            const response = await axios({
                ...config,
            });

            return response.data;
        } catch (e) {
            return new Error('Something went wrong!');
        }
    }

    async getUsers(): Promise<User[]> {
        return this.makeRequest({
            method: 'GET',
            url: 'https://api.escuelajs.co/api/v1/users',
        });
    }

    async getUsersById(id: string): Promise<User> {
        return this.makeRequest({
            method: 'GET',
            url: `https://api.escuelajs.co/api/v1/users/${id}`,
        });
    }
}

export const usersApi = new UsersApi();
