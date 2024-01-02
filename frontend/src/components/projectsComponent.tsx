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

/*
# Show git branch name
force_color_prompt=yes
color_prompt=yes
parse_git_branch() {
 git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/(\1)/'
}
if [ "$color_prompt" = yes ]; then
 PS1='${debian_chroot:+($debian_chroot)}\[\033[01;32m\]\u@\h\[\033[00m\]:\[\033[01;34m\]\w\[\033[01;31m\]$(parse_git_branch)\[\033[00m\]\$ '
else
 PS1='${debian_chroot:+($debian_chroot)}\u@\h:\w$(parse_git_branch)\$ '
fi
unset color_prompt force_color_prompt

*/
