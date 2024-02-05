import { Box } from "@mui/material";
import { ElementType } from "react";

const PostLoading = (Component : ElementType) => {
  return function PostLoadingComponent({
    isLoading,
    ...props
  }: {
    isLoading: boolean;
  }) {
    if (!isLoading) return <Component {...props} />;
    return <Box>We are waiting for the data to load...</Box>;
  };
};

export default PostLoading;
