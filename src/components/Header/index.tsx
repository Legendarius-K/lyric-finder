import { Box, Container, Typography } from "@mui/material";

const Header = () => {
    return (
        <Box
            sx={{
                bgcolor: 'primary.main',
                '&:hover': {
                    bgcolor: 'primary.main',
                },
            }}>
            <Typography color="white" align="center" variant="h1" fontSize="40px" fontWeight="700" p={4}>Lyric Finder</Typography>
        </Box>
    )
};

export default Header
