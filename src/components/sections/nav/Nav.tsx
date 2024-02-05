import { Box } from "@mui/material";
import { Button } from "../../shared/buttons/Button";
import { ScrollToSectionButton } from "./ScrollToSection";
import { nav } from "../../../data";

const Nav = () => {
  return (
    <Box
      sx={{
        background: "rgba(0, 0, 0, .3)",
        width: "max-content",
        display: "block",
        padding: "0.7rem 1.7rem",
        position: "fixed",
        zIndex: "2",
        left: "50%",
        transform: "translateX(-50%)",
        bottom: "1rem",
        gap: ".8rem",
        borderRadius: "3rem",
        backdropFilter: "blur(1px)",
      }}
    >
      <Box sx={{ display: "flex" }}>
        {nav.map((item) => {
          return (
            <ScrollToSectionButton
              key={item.label}
              sectionId={item.label}
              button={
                <Button
                  variant="text"
                  color="primary"
                  startIcon={<item.icon />}
                />
              }
            ></ScrollToSectionButton>
          );
        })}
      </Box>
    </Box>
  );
};

export default Nav;
