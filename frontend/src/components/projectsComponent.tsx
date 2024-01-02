// import React, { ChangeEvent, useState } from 'react';

import { Grid } from '@mui/material';
import GridBlock from './gridBlockComponent';

export default function ProjectsComponent() {
    return (
        <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <GridBlock>Hi</GridBlock>
            <GridBlock>There</GridBlock>
            <GridBlock>A</GridBlock>
            <GridBlock>Test</GridBlock>
            <GridBlock>Hi</GridBlock>
            <GridBlock>There</GridBlock>
            <GridBlock>A</GridBlock>
            <GridBlock>Test</GridBlock>
        </Grid>
    );
}

