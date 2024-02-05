import React from "react";
import { Typography, IconButton } from "@mui/material";
import {
  selectColorMode,
  toggleColorMode,
} from "../utils/redux/features/colorModeSlice";
import { useDispatch, useSelector } from "react-redux";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const ToggleColorModeButton = () => {
  const dispatch = useDispatch();
  const colorMode = useSelector(selectColorMode);
  return (
      <Typography
        //   sx={{ border: "2px solid red" }}
      >
      {/* {colorMode} mode */}
      <IconButton
        sx={{ ml: 1, padding: "0" }}
        onClick={() => dispatch(toggleColorMode())}
        color="inherit"
      >
        {colorMode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Typography>
  );
};

export default ToggleColorModeButton;
