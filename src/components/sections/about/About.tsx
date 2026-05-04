import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Element } from "react-scroll";

const About = () => {
  return (
    <Element name="about">
      <Box
        sx={{
          padding: { xs: "4rem 2rem", md: "8rem 4rem" },
          backgroundColor: "#1A1A1A",
          color: "#FAFAFA",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <Typography
            variant="h3"
            sx={{
              maxWidth: "1000px",
              fontFamily: "'Inter', -apple-system, sans-serif",
              fontStyle: "normal",
              lineHeight: 1.3,
              textAlign: "left",
            }}
          >
            I am a frontend engineer driven by a passion for <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", color: "#e2dcd0" }}>exceptional user experiences</span>. My approach merges a deep understanding of modern web technologies with an editorial eye for design. I build interfaces that don't just work, they make an impact.
          </Typography>
        </motion.div>
      </Box>
    </Element>
  );
};

export default About;
