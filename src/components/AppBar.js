import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function SearchAppBar() {
  return (
    // <Box sx={{ flexGrow: 1 }}>
    <Box>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            marginLeft={5}
            marginRight={5}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "spaceBetween",
            }}
          >
            <Box marginRight={5}>
              <RouterLink to="/" className="nav-link">
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  underline="none"

                  // sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
                >
                  TOURMONKEY
                </Typography>
              </RouterLink>
            </Box>
            <Box marginRight={5}>
              <RouterLink to="Tour" className="nav-link">
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  // sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
                >
                  Niagara
                </Typography>
              </RouterLink>
            </Box>
            <Box marginRight={25}>
              <RouterLink to="/Tour" className="nav-link">
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  // sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
                >
                  Las Vegas
                </Typography>
              </RouterLink>
            </Box>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
