import { Box } from "@mui/material";
import Header from "../components/sections/header/Header";
import Nav from "../components/sections/nav/Nav";
import About from "../components/sections/about/About";
import Skills from "../components/sections/skills/Skills";
import Contact from "../components/sections/contact/Contact";
import RecentWork from "../components/sections/portfolio/RecentWork";
import PostLoadingComponent from "../PostLoading"

const HomePage = () => {
  const PostLoading = PostLoadingComponent(RecentWork)
  return (
    <Box>
      <Box sx={{ textAlign: "center", width: "90%", marginInline: "auto" }}>
        <Header />
        <About />
        <Skills />
        {/* <RecentWork /> */}
        <PostLoading isLoading={false} />
        <Contact />
        <Nav />
      </Box>
    </Box>
  );
};

export default HomePage;
