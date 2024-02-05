import { Box, Grid, IconButton, Typography } from "@mui/material";
import { VerifiedIcon } from "../../../assets/icons/icons";
import { Colors } from "../../../constants/colors";

const skills = [
  { skill: "HTMl", level: "Experienced" },
  { skill: "CSS", level: "Experienced" },
  { skill: "Javascript", level: "Experienced" },
  { skill: "Typescript", level: "Experienced" },
  { skill: "Reactjs", level: "Experienced" },
  { skill: "Nextjs", level: "Experienced" },
  { skill: "Redux toolkit", level: "Experienced" },
  { skill: "Git/Github", level: "Experienced" },
  { skill: "Material Ui", level: "Experienced" },
  { skill: "Tailwind", level: "Experienced" },
];

const CoreSkills = () => {
  return (
    <Box
      sx={{
        width: { md: "70%" },
        margin: "4rem auto",
        backgroundColor: Colors.cardGreen,
        borderRadius: "2rem",
        padding: "2rem 0",
      }}
    >
      <Typography
        variant="h5"
        sx={{ marginBottom: "2rem", color: Colors.White }}
      >
        Core Skills
      </Typography>
      <Grid container sx={{ padding: "0 2rem" }}>
        {skills.map((item) => {
          return (
            <Grid item md={6} key={item.skill}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  marginBottom: "2rem",
                  color: Colors.White,
                }}
              >
                <IconButton>
                  <VerifiedIcon
                    sx={{ fontSize: "1rem", color: Colors.MustardYellow }}
                  />
                </IconButton>
                <Box sx={{ textAlign: "left" }}>
                  <Typography variant="h6">{item.skill}</Typography>
                  <Typography variant="body2" sx={{ color: Colors.OffWhite }}>
                    {item.level}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default CoreSkills;
