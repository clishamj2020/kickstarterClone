import { Box } from '@mui/material';

export default function ProjectImage(path: string) {
    return (
        <Box
            component="img"
            sx={{
                height: 233,
                width: 350,
                maxHeight: { xs: 233, md: 167 },
                maxWidth: { xs: 350, md: 250 },
            }}
            src={path}
        />
    );
}
