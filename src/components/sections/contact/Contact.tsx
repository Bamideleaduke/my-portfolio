// import { FormattedMessage } from 'react-intl';
import { Box, IconButton, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Colors } from "../../../constants/colors";
import ContactForm from "./ContactForm";
import { Element } from "react-scroll";
import SectionHeader from "../../shared/SectionHeader";
import { contacts } from "../../../data";

const Contact = () => {
  return (
    <Element name="contact">
      <SectionHeader title="Contact Me" subtitle="Get In Touch" />

      <Box
        sx={{
          width: { md: "60%" },
          margin: "4rem auto",
        }}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <Box>
            {contacts.map((item) => {
              return (
                <Box
                  key={item.platform}
                  sx={{
                    backgroundColor: Colors.cardGreen,
                    borderRadius: "1.2rem",
                    marginBottom: "2rem",
                    padding: "2rem 0",
                    color: Colors.White,
                  }}
                >
                  <IconButton>
                    <item.icon />
                  </IconButton>
                  <Typography>{item.platform}</Typography>
                  <Typography>{item.username}</Typography>
                  {/* <Link
                    href=""
                    sx={{ textDecoration: "none", color: Colors.MustardYellow }}
                  >
                    Send Message
                  </Link> */}
                </Box>
              );
            })}
          </Box>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 15 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <ContactForm />
        </motion.div>
      </Box>
      {/* <Typography
        sx={{
          // color: theme.palette.primary.main
        }}
      >Hi There !</Typography>
      <FormattedMessage
          id="app.channel.plug"
          defaultMessage="Click on the Vite and React logos to learn more"
          values={{ channelName: "Coding with chan" }}
        /> */}
    </Element>
  );
};

export default Contact;
