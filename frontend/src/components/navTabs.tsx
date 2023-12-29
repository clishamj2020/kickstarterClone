import React, { ChangeEvent, useState } from 'react';
import { Tabs, Tab } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

export default function NavTabs() {
    const [value, setValue] = useState('one');
    const navigate = useNavigate();

    const handleChange = (event: ChangeEvent<{}>, newValue: string) => {
        setValue(newValue);
        // Use navigate() to navigate to the new route
        navigate(newValue);
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
                {/* Wrap Tab components with Link and use to prop for routing */}
                <Link to="/home">
                    <Tab value="/home" label="Home" />
                </Link>
                <Link to="/projects">
                    <Tab value="/projects" label="Projects" />
                </Link>
                <Link to="/users">
                    <Tab value="/users" label="Users" />
                </Link>
            </Tabs>
        </div>
    );
}
