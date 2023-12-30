import { IconButton, Box, Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SettingsIcon from '@mui/icons-material/Settings';
import { ThemeProvider } from '@mui/material/styles';
import { navTheme } from '../themes/navTheme';

export default function NavTabs() {
    const navigate = useNavigate();

    const handleNavigate = (newValue: string) => {
        navigate(newValue);
    };

    return (
        <Grid rowSpacing={0} style={{ paddingBottom: '12px' }}>
            <ThemeProvider theme={navTheme}>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Box>
                        <Button onClick={() => handleNavigate('/home')}>
                            Home
                        </Button>
                        <Button onClick={() => handleNavigate('/projects')}>
                            Projects
                        </Button>
                        <Button onClick={() => handleNavigate('/about')}>
                            about
                        </Button>
                    </Box>
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
        </Grid>
    );
}
