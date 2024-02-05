import { Box } from "@mui/material";
import { GitHubIcon, LinkedInIcon } from "../../../assets/icons/icons";
import { Button } from "../../shared/buttons/Button";

export const Github = () => {
  return <Button variant="text" endIcon={<GitHubIcon />} />;
};

export const LinkedIn = () => {
  return <Button variant="text" endIcon={<LinkedInIcon />} />;
};

export const HeaderSocial = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        ":li": { margin: "1rem 0" },
      }}
    >
      <Github />
      <LinkedIn />
    </Box>
  );
};
