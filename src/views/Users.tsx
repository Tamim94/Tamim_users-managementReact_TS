import React, { useEffect, useCallback, useState } from 'react';
import { Grid, Box } from '@mui/material';
import UsersCard from '../components/UsersCard';
import { usersApi } from "../API/users-api";
import {User} from "../types/User";
import DashboardLayout from "../layouts/Dashboard";
import Button from "@mui/material/Button";
import CreateUserDialog from "../components/CreateUserDialog";
import {CreateUserError} from "../types/CreateUserError";

const Users = (): JSX.Element => {
    const [users, setUsers] = useState<User[]>([]);
    const [OpenUserDialog,setOpenUserDialog]=useState<boolean>(false);
    const handleOpenUserDialog=()=>{
        setOpenUserDialog(true);
    }
    const handleCloseUserDialog=(action?:string,user?:User | CreateUserError | undefined)=>{
        if(action==='created' && user && !('message' in user)){
            setUsers([...users,user as User]);
        }
        setOpenUserDialog(false);
    }

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
            <Box sx={{
                backgroundImage: 'linear-gradient(to right, blue, white, red)',
                backgroundSize: '100% 100%',
                backgroundRepeat: 'no-repeat',
            }}>
                <Grid container spacing={4}>
                    <Grid item md={2} />
                    <Grid item>
                        <Grid item container md={8}
                              spacing={2}
                              display={"flex"}
                              justifyContent={"center"}>
                            <Grid item container
                                  md={12}xs={12}
                                  display={"flex"}
                                  justifyContent={"center"}>
                                <Button
                                    variant="contained"
                                    onClick={handleOpenUserDialog}
                                    sx={{ backgroundColor: "red" }}
                                >
                                    Create
                                </Button>
                            </Grid>

                            {users.map((user, index) => (
                                <Grid item key={user.id}>
                                    <UsersCard user={user} />
                                </Grid>
                            ))}
                        </Grid>
                        <Grid item md={2} />
                    </Grid>
                </Grid>
            </Box>
            <CreateUserDialog open={OpenUserDialog} onClose={handleCloseUserDialog}/>
        </DashboardLayout>
    );
};

export default Users;