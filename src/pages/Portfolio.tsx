import { Box, Link, Typography, Grid } from "@mui/material";
import { portfolio } from "../data";
import { motion } from "framer-motion";
import { Button } from "../components/shared/buttons/Button";
import { Colors } from "../constants/colors";

const Portfolio = () => {
  return (
    <Box sx={{ width: { xs: "90%", md: "80%" }, margin: "2rem auto" }}>
      {portfolio.map(({ id, title, image, github, demo, body }) => {
        return (
          <motion.div key={id}>
            <Box
              sx={{
                textAlign: "left",
                display: { xs: "initial", md: "flex" },
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: { xs: "4rem", md: "6rem" },
              }}
            >
              <Grid
                container
                columnGap={2}
                rowGap={4}
                alignItems={"center"}
                justifyContent={"space-between"}
                sx={{ flexDirection: id % 2 === 0 ? "row-reverse" : "row" }}
              >
                <Grid item md={6}>
                  <Box
                    component="img"
                    src={image}
                    sx={{
                      width: "100%",
                      height: "350px",
                      objectFit: "cover",
                      borderRadius: "1rem",
                      flexBasis: "40%",
                      display: { xs: "none", md: "initial" },
                    }}
                  />
                </Grid>
                <Grid item md={5}>
                  <Box
                    sx={{
                      padding: "1rem",
                      flexBasis: "50%",
                      borderTop: {md: `1px solid ${Colors.Grundge}`},
                      borderBottom: `1px solid ${Colors.Grundge}`,
                      paddingBottom: { xs: "4rem", md: "2rem" },
                    }}
                  >
                    <Typography variant="h4">{title}</Typography>
                    <Typography variant="body1" sx={{ margin: "2rem 0" }}>
                      {body}
                    </Typography>

                    <Box
                      sx={{
                        display: "flex",
                        // justifyContent: { xs: "space-between", md: "initial" },
                      }}
                    >
                      <Button
                        variant="contained"
                        component={Link}
                        href={demo}
                        sx={{ marginRight: { xs: "1rem", md: "1.5rem" } }}
                      >
                        Live Demo
                      </Button>
                      <Button variant="outlined" component={Link} href={github}>
                        Github
                      </Button>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </motion.div>
        );
      })}
    </Box>
  );
};

export default Portfolio;
