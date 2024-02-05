import { Box, Link } from "@mui/material";
import { Button } from "../../shared/buttons/Button";
import { ScrollToSectionButton } from "../nav/ScrollToSection";

const ControlBtn = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "1rem 0",
      }}
    >
      <Button
        component={Link}
        href="https://drive.google.com/file/d/16x37hWfnafem53hmJ7fHUrVBF89nWQxV/view?usp=sharing"
      >
        Download Resume
      </Button>
      <ScrollToSectionButton
        sectionId="contact"
        button={
          <Button variant="outlined" sx={{ marginLeft: "1.5rem" }}>
            Lets Talk
          </Button>
        }
      ></ScrollToSectionButton>
    </Box>
  );
};

export default ControlBtn;
