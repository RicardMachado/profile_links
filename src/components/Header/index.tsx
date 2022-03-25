import { Avatar, Box, Typography } from "@mui/material"

export const Header = () => {
    return (
        <Box
            display='flex'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
            sx={{
                width: 300,
                height: 320,
            }}
        >
            <Avatar
                alt="Foto de Perfil de Ricardo Machado"
                src="/static/images/Ricardo.jpeg"
                sx={{
                    width: 120,
                    height: 120,
                    border: 2,
                    borderColor: '#fff',
                }}
            >

            </Avatar>
            <Typography 
                variant="h1" 
                sx={{ 
                    fontSize: 20,
                    paddingTop: 2,
                    color: 'white',
                }}>
                    Ricardo Machado
            </Typography>
            <Typography 
                variant="h2" 
                sx={{ 
                    fontSize: 16,
                    paddingTop: 1,
                    color: 'white',
                }}>
                    @ricardo.machado.dev
            </Typography>
        </Box>
    )
}