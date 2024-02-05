import { Box } from "@mui/material";

const PostLoading = (Component : any) => {
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
