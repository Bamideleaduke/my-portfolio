import { Box, Grid, Link, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Element } from "react-scroll";
import { portfolio } from "../../../data";
import { Button } from "../../shared/buttons/Button";
import SectionHeader from "../../shared/SectionHeader";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const RecentWork = () => {
  return (
    <Element name="portfolio">
      <SectionHeader title="Projects" subtitle="My Recent Work" />

      <motion.div
        className="container portfolio-container"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Grid
          container
          columnGap={2}
          rowGap={4}
          alignItems={"center"}
          justifyContent={"space-between"}
          sx={{
            margin: "4rem auto",
            // width: { md: "80%" },
          }}
        >
          {portfolio
            .slice(0, 3)
            .map(({ id, title, image, github, demo, body }) => {
              return (
                <Grid
                  item
                  key={id}
                  md={3.5}
                  sx={{
                    boxShadow: "2px 1px 9px 0px rgba(0,0,0,0.75)",
                    borderRadius: "1rem",
                    padding: "1rem 1rem 0 1rem",
                    width: "100%",
                    height: { md: "500px" },
                  }}
                >
                  <motion.div key={id}>
                    <Box sx={{ textAlign: "left" }}>
                      <Box
                        component="img"
                        src={image}
                        sx={{
                          width: "100%",
                          height: "200px",
                          objectFit: "cover",
                          borderRadius: "1rem",
                        }}
                      />

                      <Box sx={{ padding: "1rem" }}>
                        <Typography variant="h6">{title}</Typography>
                        <Typography variant="body1" sx={{ margin: "2rem 0" }}>
                          {body}
                        </Typography>

                        <Box sx={{ display: "flex" }}>
                          <Button
                            variant="contained"
                            component={Link}
                            href={demo}
                            sx={{ marginRight: "1.5rem" }}
                          >
                            Live Demo
                          </Button>
                          <Button
                            variant="outlined"
                            component={Link}
                            href={github}
                          >
                            Github
                          </Button>
                        </Box>
                      </Box>
                    </Box>
                  </motion.div>
                </Grid>
              );
            })}
        </Grid>
      </motion.div>
    </Element>
  );
};

export default RecentWork;
