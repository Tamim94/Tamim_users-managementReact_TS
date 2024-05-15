import React, { useCallback, useEffect, useState } from "react";
import DashboardLayout from "../layouts/Dashboard";
import { Avatar, Box, Card, Stack, TextField, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { User } from "../types/User";
import { usersApi } from "../API/users-api";
import Button from "@mui/material/Button";

const UserDetails: React.FC = () => {
    const { id } = useParams();
    const [isEditUser, setIsEditUser] = useState(false);

    const [user, setUser] = useState<User>({
        email: "",
        id: 0,
        name: "",
        avatar: "",
        role: "",
    });

    const handleEditUser = () => {
        setIsEditUser((prevIsEditUser) => !prevIsEditUser);
        console.log("Edit clicked");
    };

    const handleDeleteUser = () => {
        console.log("Delete clicked");
    };

    const getUser = useCallback(async () => {
        if (id) {
            try {
                const userResponse = await usersApi.getUsersById(id);
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
