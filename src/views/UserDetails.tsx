import React, { useCallback, useEffect, useState } from "react";
import DashboardLayout from "../layouts/Dashboard";
import {Alert, Avatar, Box, Card, Stack, TextField, Typography} from "@mui/material";
import { useParams,useNavigate } from "react-router-dom";
import { User } from "../types/User";
import { usersApi } from "../API/users-api";
import Button from "@mui/material/Button";
import {Error} from "../types/Error";

const UserDetails: React.FC = () => {
    let navigate = useNavigate();
    const { id } = useParams();
    const [isEditUser, setIsEditUser] = useState(false);
    const [errorObj,setErrorObj] = useState<Error>({
     error:false,
     message:'',
    });

    const [user, setUser] = useState<User>({
        email: "",
        id: 0,
        name: "",
        avatar: "",
        role: "",
    });

    const handleEditUser = async () => {
        setIsEditUser((prevIsEditUser) => !prevIsEditUser);
        if (isEditUser && user.id) {
            try {
               const userResponse = await usersApi.updateUser(user.id,user);
              if('error' in userResponse && userResponse.error) {
                  setErrorObj({
                      error: userResponse.error,
                      message: userResponse.message
                  });

              }
            } catch(e){
                console.log('testttttttttttt')

            }
            await usersApi.updateUser(user.id, user);
        }
        console.log("Edit clicked");
    };

    const handleDeleteUser = async () => {
        if (user.id) {
            await usersApi.deleteUser(user.id);
            console.log("Delete clicked");
            navigate('/users');
        }

    };

    const getUser = useCallback(async () => {
        if (id) {
            try {
                const userResponse = await usersApi.getUserById(id);
                setUser(userResponse);
            } catch (error) {
                console.error("Error fetching user details:", error);
            }
        }
    }, [id]);

    useEffect(() => {
        getUser();
    }, [getUser]);

    return (
        <DashboardLayout>
            <Box display="flex" justifyContent="center">
                <Stack display="flex" justifyContent="center" margin="auto">
                    <Stack spacing={2}>
                        {
                            errorObj.error &&(
                                <Alert severity={"error"}>{errorObj.message}</Alert>
                            )
                        }

                        <Card
                            sx={{
                                width: 500,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                border: "6px solid",
                                borderLeftColor: "blue",
                                borderTopColor: "white",
                                borderBottomColor: "white",
                                borderRightColor: "red",
                            }}
                        >
                            <Avatar
                                alt={user.name}
                                src={user.avatar}
                                sx={{ width: 100, height: 100, margin: "auto", display: "flex" }}
                            />
                            <Typography variant="h6" gutterBottom>
                                <strong>ID:</strong> {user.id}
                            </Typography>
                            <Typography variant="h6" gutterBottom>
                                <strong>Username:</strong>
                                {isEditUser ? (
                                    <TextField
                                        size="small"
                                        variant="outlined"
                                        value={user.name}
                                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                            setUser({ ...user, name: event.target.value });
                                        }}
                                    />
                                ) : (
                                    user.name
                                )}
                            </Typography>
                            <Typography variant="h6" gutterBottom>
                                <strong>Email:</strong> {user.email}
                            </Typography>
                            <Typography variant="h6" gutterBottom>
                                <strong>Role:</strong> {user.role}
                            </Typography>
                        </Card>
                        <Stack direction="row" justifyContent="center" spacing={2}>
                            <Button
                                variant="contained"
                                onClick={handleEditUser}
                                sx={{ backgroundColor: "blue" }}
                            >
                                {isEditUser ? "Save" : "Edit"}
                            </Button>
                            <Button
                                variant="contained"
                                onClick={handleDeleteUser}
                                sx={{ backgroundColor: "red" }}
                            >
                                Delete
                            </Button>
                        </Stack>
                    </Stack>
                </Stack>
            </Box>
        </DashboardLayout>
    );
};

export default UserDetails;
