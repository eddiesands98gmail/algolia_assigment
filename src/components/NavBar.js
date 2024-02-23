import { Box } from "@mui/joy";

const NavBar = (props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexGrow: 1,
        justifyContent: "space-between",
        py: 3,
        px: 2,
      }}
    >
      {props.children}
    </Box>
  );
};

export default NavBar;
