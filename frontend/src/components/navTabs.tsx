import React, { ChangeEvent, useState } from 'react';
import { Tabs, Tab } from '@mui/material';

export default function NavTabs() {
    const [value, setValue] = useState('one');

    const handleChange = (event: ChangeEvent<{}>, newValue: string) => {
        setValue(newValue);
        console.log(newValue);
    };

    return (
        <div>
            <Tabs
                value={value}
                onChange={handleChange}
                textColor="primary"
                indicatorColor="primary"
                aria-label="primary tabs example"
                centered
            >
                <Tab value="localhost:3000/projects" label="Projects" />
                <Tab value="localhost:3000/users" label="Users" />
                <Tab value="localhost:3000/home" label="Home" />
            </Tabs>
        </div>
    );
}
