import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./utils/redux/store.ts";
// import {ThemeProvider } from "@mui/material";
// import { selectColorMode } from "./utils/redux/features/colorModeSlice.tsx";
// import GlobalTheme from "./utils/material-themes/index.ts";
// import { ThemeProvider } from "@mui/material";
import "./index.css";
import Wrapper from "./components/wrapper/Wrapper.tsx";
import { BrowserRouter } from "react-router-dom";


// const GlobalTheme = () => {
//   const colorMode = useSelector(selectColorMode);

//   const theme = createTheme({
//     palette: {
//       mode: colorMode,
//     },
//   });

//   return theme;
// };

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      {/* <ThemeProvider theme={GlobalTheme} >       */}
      <Wrapper>

      <App />
      </Wrapper>
   {/* </ThemeProvider> */}
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
