import { ButtonProps, Button as MuiButton, styled } from "@mui/material";
import React from "react";
import { Colors } from "../../../constants/colors";

const StyledButton = styled(MuiButton)(({ variant,theme }) => ({
  borderRadius: "10px",
  // padding: "10px 40px",
  padding: theme.breakpoints.down("sm") ? "" : "10px 40px",
  textTransform: "none",
  //   boxShadow: `4px 4px 6px 0px ${Colors.MustardYellow}`,
  "&.MuiButton-containedPrimary": {
    background: Colors.MustardYellow,
    color: "primary",
    // background: Colors.Primary,
    border: `1px solid var(--shite-space, ${Colors.MustardYellow})`,
    ":hover": {
      background: Colors.MustardYellow,
    },
  },
  "&.Mui-disabled": {
    color: Colors.Grundge,
    background: Colors.TextGray,
    border: "1px solid var(--shite-space, #FFF)",
  },
  ...(variant === "text" && {
    padding: "2px 16px",
    boxShadow: "unset",
    fontWeight: 600,
  }),
  ...(variant === "outlined" && {
    boxShadow: "unset",
    fontWeight: 600,
    // background: Colors.White,
    color: Colors.MustardYellow,
    border: `1px solid var(--shite-space, ${Colors.MustardYellow})`,
    ":hover": {
      border: `1px solid var(--shite-space, ${Colors.MustardYellow})`,
    },
  }),
}));

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, color, ...restProp }, ref) => {
    // const theme = useTheme()
    return (
      <StyledButton
        color={color}
        variant={variant ?? "contained"}
        ref={ref}
        {...restProp}
      />
    );
  }
);
