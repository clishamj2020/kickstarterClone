// GridItem.js
import { styled, Paper } from '@mui/material';

const GridItem = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#5D5D81' : '#5D5D81',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: '#BFCDE0',
    minHeight: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    wordWrap: 'break-word', // Ensure content wraps within the GridItem
}));

export default GridItem;
