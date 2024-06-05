import React from 'react';
import DashboardLayout from '../layouts/Dashboard';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Grid from '@mui/material/Grid'; // Import Grid for layout
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Paper } from '@mui/material';

const About: React.FC = () => {
    return (
        <DashboardLayout>
            <Box sx={{
                backgroundImage: 'linear-gradient(to right, blue, white, red)',
                backgroundRepeat: 'no-repeat',
                minHeight: '100vh',
                padding: '2rem',
            }}>

                <Paper elevation={3} sx={{ padding: '2rem', width: '100%', maxWidth: '800px' }}>
                    <Grid container spacing={3} justifyContent="center" alignItems="center">
                    <Typography variant="h4" gutterBottom align="center">
                            Welcome to Wanted ( by Tamim student in Web & Mobile Development  )
                        </Typography>
                        <Typography variant="body1" paragraph align="center">
                          J'ai crée ce projet avec un API sur https://fakeapi.platzi.com/en/rest/users/ pour la gestion des utilisateurs.
                        </Typography>
                        <Typography variant="body1" paragraph align="center">
                           A partir de site web Wanted, vous pouvez créer un compte, se connecter, voir les utilisateurs, les modifier, les supprimer et les ajouter. Mais pour ça il faudra d'abord log in (j'ai mis un exemple fonctionnel normalement si vous voulez pas crée de user) Le contact page ne fais rien je l'ai juste aujouter pour faire beau.
                        </Typography>

                        <Typography variant="h6" gutterBottom align="center" sx={{ mt: 3 }}>
                            Why Choose Wanted?
                        </Typography>
                        <List>
                            <ListItem>
                                <ListItemText primary="Intuitive Interface: Our user-friendly design makes it easy to navigate and find what you need." />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Powerful Matching Algorithm: We leverage advanced technology to connect you with the most relevant opportunities." />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Diverse Opportunities: Explore a wide range of career paths, freelance gigs, and project collaborations." />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Community-Driven: Join a thriving community of professionals who support and inspire each other." />
                            </ListItem>
                        </List>
                    </Grid>
                </Paper>
            </Box>
        </DashboardLayout>
    );
}

export default About;
