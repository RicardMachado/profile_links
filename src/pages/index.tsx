import Head from "next/head";
import { Box, Button, Stack, Typography } from "@mui/material";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { AppTheme } from "../themes";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import WebIcon from "@mui/icons-material/Web";
import { ButtonLink } from "../components/Button";

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
          
          <ButtonLink title="Linkedin" link="https://www.linkedin.com/in/ricardmachado">
            <LinkedInIcon fontSize="large" sx={{ marginRight: 2 }}/>
          </ButtonLink>

          <ButtonLink title="GitHub" link="https://github.com/RicardMachado">
            <GitHubIcon fontSize="large" sx={{ marginRight: 2 }}/>
          </ButtonLink>

          <ButtonLink title="Instagram" link="https://www.instagram.com/ricardo.machado.dev/">
            <InstagramIcon fontSize="large" sx={{ marginRight: 2 }}/>
          </ButtonLink>
          
          <ButtonLink title="Twitter" link="https://twitter.com/Ricard_Machado">
            <TwitterIcon fontSize="large" sx={{ marginRight: 2 }}/>
          </ButtonLink>

          <ButtonLink title="Meu Site" link="#" aviso="Em Breve">
            <WebIcon fontSize="large" sx={{ marginRight: 2 }}/>
          </ButtonLink>
        </Stack>
      </Box>
      <Footer />
    </>
  );
};

export default Home;
