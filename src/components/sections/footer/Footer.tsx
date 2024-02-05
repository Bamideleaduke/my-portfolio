import { Box, Typography } from "@mui/material";
import { Colors } from "../../../constants/colors";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <Box
      sx={{
        padding: "4rem 0",
        backgroundColor: Colors.MustardYellow,
        textAlign: "center",
      }}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <Typography sx={{ color: Colors.Grundge }}>
          &copy; Bamidele Barakat
        </Typography>
      </motion.div>
    </Box>
  );
};

export default Footer;
