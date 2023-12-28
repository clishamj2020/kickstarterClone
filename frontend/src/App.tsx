import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
// <meta name="viewport" content="initial-scale=1, width=device-width" />
import NavTabs from './components/navTabs';
import { Button, Grid } from '@mui/material';

function App() {
    const gridContainerStyle: React.CSSProperties = {
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    };

    const gridStyle: React.CSSProperties = {
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    };

    return (
        <div>
            <NavTabs />
            <Grid
                container
                // columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                style={gridContainerStyle}

                // textAlign="center"
                // border="thick"
                // borderColor="black"
            >
                <Grid style={gridStyle} item xs={3}>
                    <Button color="success">hi</Button>
                </Grid>
                <Grid style={gridStyle} item xs={3}>
                    <Button color="success">hi</Button>
                </Grid>
                <Grid style={gridStyle} item xs={3}>
                    <Button color="success">hi</Button>
                </Grid>
                <Grid style={gridStyle} item xs={3}>
                    <Button color="success">hi</Button>
                </Grid>
            </Grid>
        </div>
    );
}

export default App;
