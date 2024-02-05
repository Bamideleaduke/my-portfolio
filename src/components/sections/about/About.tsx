import { Box, Grid, IconButton, Typography } from "@mui/material";
import { motion } from "framer-motion";
import ProfilePic from "../../../assets/profile-img.jpg";
import { Colors } from "../../../constants/colors";
import { Element } from "react-scroll";
import SectionHeader from "../../shared/SectionHeader";
import { about } from "../../../data";

const About = () => {
  return (
    <Element name="about">
      <Box
        sx={{
          padding: "3rem 2rem",
        }}
      >
        <SectionHeader title="About Me" subtitle="Get To Know" />
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
          <Box sx={{ width: { xs: "100", md: "60%" }, margin: "4rem auto" }}>
            <Box
              component="img"
              src={ProfilePic}
              alt="about me image"
              sx={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
                borderRadius: "2rem",
              }}
            />
          </Box>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 15 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <Grid
            container
            sx={{ display: { xs: "initial", md: "flex" } }}
            columnGap={2}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            {about.map((item) => {
              return (
                <Grid
                  item
                  key={item.title}
                  md={3.5}
                  sx={{
                    backgroundColor: Colors.cardGreen,
                    color: "#fff",
                    // backgroundColor: "rgba(242, 192, 65, 1)",
                    // backgroundColor: "rgba(30, 133, 51, 3)",
                    padding: "1rem 2rem",
                    // borderRadius: "1rem",
                    borderRadius: "12rem 12rem 0 0",
                    marginBottom: { xs: "3rem" },
                  }}
                >
                  <IconButton>
                    <item.icon />
                  </IconButton>
                  <Typography sx={{ margin: "1rem 0" }}>
                    {item.title}
                  </Typography>
                  <Typography>{item.content}</Typography>
                </Grid>
              );
            })}
          </Grid>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 15 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <Typography
            variant="body1"
            sx={{ textAlign: "justify", margin: "1rem 0" }}
          >
            As a front-end engineer, I prioritize user experience design,
            showcasing a solid understanding of front-end technologies. My
            enthusiasm lies in creating interfaces that enhance the overall user
            experience. With proficiency in building sophisticated and
            responsive websites, I emphasize not only aesthetics but also
            outstanding performance. I am dedicated to staying updated on the
            latest industry trends, ensuring that each project adheres to the
            highest standards.
           
          </Typography>
        </motion.div>
      </Box>
    </Element>
  );
};

export default About;
