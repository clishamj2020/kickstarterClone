import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
// <meta name="viewport" content="initial-scale=1, width=device-width" />
import NavTabs from './components/navTabs';
import { Button, Grid } from '@mui/material';

function App() {
    const gridStyle = {
        border: '2px solid black', // Set the border style
        padding: '16px', // Add padding for better visibility
        textAlign: 'center',
    };

    return (
        <div>
            <NavTabs />
            <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                style={gridStyle}
                // alignItems="center"
                // justifyContent="center"
                // textAlign="center"
                // border="thick"
                // borderColor="black"
            >
                <Grid item xs={3}>
                    <Button>3</Button>
                </Grid>
                <Grid item xs={3}>
                    <Button>2</Button>
                </Grid>
                <Grid item xs={3}>
                    <Button>3</Button>
                </Grid>
                <Grid item xs={3}>
                    <Button>4</Button>
                </Grid>
            </Grid>
        </div>
    );
}

export default App;
