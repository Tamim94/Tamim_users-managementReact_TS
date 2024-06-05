import React, {useState} from 'react';
import DashboardLayout from '../layouts/Dashboard';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {Button, Paper, Snackbar, TextField} from '@mui/material';




const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [snackbarOpen, setSnackbarOpen] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {

            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setSnackbarOpen(true);
                setFormData({ name: '', email: '', message: '' });
            } else {

                console.error('Error submitting form');
            }
        } catch (error) {
            console.error('Network error:', error);
        }
    };
    return (
        <DashboardLayout>
            <Box sx={{
                backgroundImage: 'linear-gradient(to right, blue, white, red)',
                backgroundRepeat: 'no-repeat',
                minHeight: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '2rem',
            }}>
                <Paper elevation={3} sx={{ padding: '2rem', width: '100%', maxWidth: '600px' }}> {/* White container */}
                    <Typography variant="h4" gutterBottom>
                        Contact Page
                    </Typography>

                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Name"
                        name="name"
                        fullWidth
                        margin="normal"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <TextField
                        label="Email"
                        name="email"
                        fullWidth
                        margin="normal"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <TextField
                        label="Message"
                        name="message"
                        multiline
                        rows={4}
                        fullWidth
                        margin="normal"
                        value={formData.message}
                        onChange={handleChange}
                    />
                    <Button type="submit" variant="contained" color="primary">
                        Send
                    </Button>
                </form>
                    </Paper>
            </Box>
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={6000}
                onClose={() => setSnackbarOpen(false)}
                message="Form submitted successfully"
            />
        </DashboardLayout>
    );
}

export default Contact;