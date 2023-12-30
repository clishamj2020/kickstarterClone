// GridBlock.tsx
import React, { ReactNode } from 'react';
import { Grid } from '@mui/material';
import GridItem from './gridItemComponent';

interface GridBlockProps {
    children: ReactNode;
}

const GridBlock: React.FC<GridBlockProps> = ({ children }) => {
    return (
        <Grid item xs={6}>
            <GridItem>{children}</GridItem>
        </Grid>
    );
};

export default GridBlock;
