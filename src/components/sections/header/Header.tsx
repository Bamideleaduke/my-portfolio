import { Box, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import ControlBtn from "./ControlBtn";
import { HeaderSocial } from "./Socials";
import { Element } from "react-scroll";
import { ScrollToSectionButton } from "../nav/ScrollToSection";
import ProfileImg from "../../../assets/b2.jfif";

const Header = () => {
  return (
    <Element name="header">
      <Box sx={{ textAlign: "center", margin: "2rem 0" }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <Typography>Hello I'm</Typography>
          <Typography variant="h2">Bamidele Barakat</Typography>
          <Typography variant="body2">Software Engineer</Typography>
        </motion.div>

        <ControlBtn />

        <Grid
          container
          sx={{
            justifyContent: "flex-end",
            alignItems: "flex-end",
            position: "relative",
            height: { md: "initial", lg: "40vh" },
          }}
        >
          <Grid item md={4}>
            <HeaderSocial />
          </Grid>
          <Grid item md={4}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Box
                component="img"
                src={ProfileImg}
                sx={{
                  width: "100%",
                  height: { sm: "200px", md: "200px", lg: "250px" },
                  // backgroundColor: "blue",
                  borderRadius: "12rem 12rem 0 0",
                  objectFit: "cover",
                }}
              ></Box>
            </motion.div>
          </Grid>
          <Grid item md={4}>
            <ScrollToSectionButton
              sectionId="contact"
              button={
                <Typography
                  variant="body2"
                  color="primary"
              
                  sx={{
                    display: "inline-block",
                    transform: "rotate(90deg)",
                    fontWeight: "300",
                    fontSize: "0.9rem",
                    textDecoration: "none",
                    padding: "0 0 4rem 0",
                  }}
                >
                  Scroll Down
                </Typography>
              }
            ></ScrollToSectionButton>
          </Grid>
        </Grid>
      </Box>
    </Element>
  );
};

export default Header;
