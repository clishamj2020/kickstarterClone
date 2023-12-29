import React, { ChangeEvent } from 'react';
import { Tabs, Tab, IconButton, Box, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import SettingsIcon from '@mui/icons-material/Settings';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { lime, pink, purple } from '@mui/material/colors';

export default function NavTabs() {
    const navigate = useNavigate();

    const handleNavigate = (newValue: string) => {
        navigate(newValue);
    };

    const theme = createTheme({
        palette: {
            primary: lime,
            secondary: pink,
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <ThemeProvider theme={theme}>
                    <Box>
                        <Button onClick={() => handleNavigate('/home')}>
                            Home
                        </Button>
                        <Button onClick={() => handleNavigate('/projects')}>
                            Projects
                        </Button>
                        <Button onClick={() => handleNavigate('/users')}>
                            users
                        </Button>
                    </Box>
                </ThemeProvider>
                <IconButton
                    color="primary"
                    aria-label="settings"
                    onClick={() => handleNavigate('/settings')}
                    style={{ marginLeft: 'auto' }}
                >
                    <SettingsIcon />
                </IconButton>
            </div>
        </ThemeProvider>
    );
}
