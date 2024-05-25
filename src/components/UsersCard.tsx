
import React from 'react';
import { Card, CardContent, Typography, Avatar, Stack } from "@mui/material";
import { common } from "@mui/material/colors";
import { User } from "../types/User";
import {Link, useNavigate} from "react-router-dom";
interface UserCardProps {
    user: User;
}


const UserCard = ({ user }: UserCardProps): JSX.Element => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/users/${user.id}`);
    };
    return (
        <Card
            sx={{ cursor: 'pointer', minWidth: 275, maxWidth: 275, border: '4px solid', borderColor: 'secondary.main',borderRightColor: 'error.main',borderLeftColor: 'blue' ,borderBottomColor:'white',borderTopColor:'white'}}
            onClick={handleClick}
        >
            <CardContent>
                <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
                    <Avatar
                        sx={{ ml: -2, width: 70, height: 70 }}
                        src={user.avatar}
                    >
                        {user && user.name && user.name.charAt(0).toUpperCase()}
                    </Avatar>
                    <Stack direction="column" spacing={1}>
                        <Typography variant="h5" component="div">
                            {user.role}
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            {user.name}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            {user.email}
                        </Typography>
                        <Typography variant="body2">

                        </Typography>
                    </Stack>
                </Stack>
            </CardContent>
        </Card>
    );
};

export default UserCard; // Corrected export statement
