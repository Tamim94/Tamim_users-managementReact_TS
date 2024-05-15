
import React, { useEffect, useCallback, useState } from 'react'; // Added useState import
import { Grid, Box, CardContent, Typography } from '@mui/material';
import UsersCard from '../components/UsersCard';
import { usersApi } from "../API/users-api";
import {User} from "../types/User";
import DashboardLayout from "../layouts/Dashboard";

interface UserCardProps {
    user: User;
}

const Users = (): JSX.Element => {
    const [users, setUsers] = useState<User[]>([]);

    const getUsers = useCallback(async () => {
        try {
            const usersResponse = await usersApi.getUsers();
            setUsers(usersResponse);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    }, []);

    useEffect(() => {
        getUsers();
    }, [getUsers]);

    return (
        <DashboardLayout>
            < Box   sx={{
                backgroundImage: 'linear-gradient(to right, blue, white, red)',
                backgroundSize: '100% 100%',
                backgroundRepeat: 'no-repeat',
            }}>
                <Grid container spacing={4}>
                    <Grid item md={2} />
                    <Grid item>
                        <Grid item container md={8} spacing={2}> {}
                            {users.map((user, index) => (
                                <Grid item key={user.id}> {}
                                    <UsersCard user={user} />
                                </Grid>
                            ))}
                        </Grid>
                        <Grid item md={2} />
                    </Grid>
                </Grid>
            </Box>
        </DashboardLayout>

    );
};

export default Users;
