import { createTheme } from '@mui/material/styles';
import { pink } from '@mui/material/colors';

export const navTheme = createTheme({
    palette: {
        primary: {
            main: '#BFCDE0',
        },
        secondary: pink,
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    backgroundColor: '#5D5D81', // Replace with your desired button background color
                    '&:hover': {
                        backgroundColor: '#000505', // Replace with your desired hover background color
                    },
                    marginRight: '8px',
                },
            },
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    backgroundColor: '#5D5D81', // Replace with your desired background color
                    '&:hover': {
                        backgroundColor: '#000505', // Replace with your desired hover background color
                    },
                },
            },
        },
    },
});
