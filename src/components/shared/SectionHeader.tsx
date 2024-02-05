import { Typography } from "@mui/material";
import { motion } from "framer-motion";

const SectionHeader = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <Typography variant="h6">{subtitle} </Typography>
      <Typography variant="h4">{title}</Typography>
    </motion.div>
  );
};

export default SectionHeader;
