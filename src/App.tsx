import { useSelector } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import { selectColorMode } from "./utils/redux/features/colorModeSlice";
import { Box } from "@mui/material";
import { darkTheme, lightTheme } from "./utils/material-themes";
import ToggleColorModeButton from "./components/ToggleColorModeButton";
// import LanguageSelection from "./components/LanguageSelection";
import { motion } from "framer-motion";
import AppRoutes from "./components/containers/AppRoutes";
import { Link } from "react-router-dom";
import { RouteList } from "./constants/route";
import { Colors } from "./constants/colors";

function App() {
  const colorMode = useSelector(selectColorMode);

  const theme = colorMode === "dark" ? darkTheme : lightTheme;
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          bgcolor: "background.default",
          color: "text.primary",
        }}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -10 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "right",
              padding: "1rem 3rem",
            }}
          >
            <Box
              component={Link}
              to={RouteList.HOME}
              sx={{ marginRight: "1rem", textDecoration: "none", color:Colors.MustardYellow }}
            >
              Home
            </Box>
            <Box
              component={Link}
              to={RouteList.PORTFOLIO}
              sx={{ marginRight: "1rem", textDecoration: "none", color:Colors.MustardYellow }}
            >
              Projects
            </Box>
            {/* <LanguageSelection /> */}
            <ToggleColorModeButton />
          </Box>
        </motion.div>
        <AppRoutes />
      </Box>
    </ThemeProvider>
  );
}

export default App;
