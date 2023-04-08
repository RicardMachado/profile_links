import { Box, Typography } from "@mui/material";

export const Footer = () => {
    return (
        <Box
            display="flex" 
            justifyContent="center"
            alignItems="center"
            width="100vw"
            height="10vh"
            sx={{
              backgroundColor: '#808080',  
            }}
        >
            <Typography variant="subtitle1">Copyright © 2022 - Ricardo Machado</Typography>
        </Box>
    ); 
}