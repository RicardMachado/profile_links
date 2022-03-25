import Head from 'next/head';
import { Box, Button, Stack } from "@mui/material";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { AppTheme } from "../themes";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import WebIcon from "@mui/icons-material/Web";

const Home = () => {
  return (
    <>
      <Head>
        <title>Ricardo Machado</title>
      </Head>
      <Box
        width="100vw"
        height="90vh"
        bgcolor={AppTheme.palette.background.default}
      >
        <Box display="flex" justifyContent="center">
          <Header />
        </Box>
        <Stack direction="column" spacing={2} alignItems="center">
          <Button
            variant="outlined"
            size="large"
            sx={{
              width: "380px",
              height: "60px",
            }}
            href="https://www.linkedin.com/in/ricardmachado/"
          >
            <LinkedInIcon fontSize="large" sx={{ marginRight: 2 }} />
            LinkedIn
          </Button>

          <Button
            variant="outlined"
            size="large"
            sx={{
              width: "380px",
              height: "60px",
            }}
            href="https://github.com/RicardMachado"
          >
            <GitHubIcon fontSize="large" sx={{ marginRight: 2 }} />
            GitHub
          </Button>

          <Button
            variant="outlined"
            size="large"
            sx={{
              width: "380px",
              height: "60px",
            }}
            href="https://www.instagram.com/ricardo.machado.dev/"
          >
            <InstagramIcon fontSize="large" sx={{ marginRight: 2 }} />
            Instagram
          </Button>

          <Button
            variant="outlined"
            size="large"
            sx={{
              width: "380px",
              height: "60px",
            }}
          >
            <TwitterIcon fontSize="large" sx={{ marginRight: 2 }} />
            Twitter
          </Button>

          <Button
            variant="outlined"
            size="large"
            sx={{
              width: "380px",
              height: "60px",
            }}
          >
            <WebIcon fontSize="large" sx={{ marginRight: 2 }} />
            Meu Site
          </Button>
        </Stack>
      </Box>
      <Footer />
    </>
  );
};

export default Home;
