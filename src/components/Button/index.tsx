import { ReactNode } from "react";
import { Box, Button, Typography } from "@mui/material";
interface IButtonLinlProps {
  title: string;
  link: string;
  children: ReactNode
  aviso?: string;
}

export const ButtonLink = ({ title, link, children, aviso }: IButtonLinlProps) => {
  return (
    <Box>
      <Button 
        variant="outlined"
        size="large"
        sx={{
          width: "380px",
          height: "60px",
        }}
        href={link}
      >
        {children}
        {title}
        <Typography variant="subtitle2" color="darkred" marginLeft='10px'>{aviso}</Typography>
      </Button>
    </Box>
  );
};
