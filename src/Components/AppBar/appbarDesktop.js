import {
  AppBar,
  Box,
  Button,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { BoxNav, MyList } from "../../styles/appbar";
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./actionsdesktop";
import { useUIContext } from "../../context/ui";
import { Colors } from "../../styles/theme";
import { textPopUpTop } from "../../animation";
import { Link } from "react-router-dom";

const AppBarDesktop = ({ matches }) => {
  const { setShowSearchBox } = useUIContext();
  return (
    <AppBar sx={{ background: "#5f2c3e" }}>
      <Toolbar>
        <Typography
          sx={{
            padding: "4px",
            flexGrow: 1,
            fontSize: "2.5em",
            fontFamily: '"Montez", "cursive"',
            color: Colors.secondary,
            "&:hover": {
              animation: `${textPopUpTop} 0.5s cubic-bezier(0.455, 0.030, 0.515, 0.955) both`,
            },
            cursor: "pointer",
          }}
        >
          Cake Tú
        </Typography>
        <Box sx={{ flexGrow: 2, display: { xs: "none", md: "flex" } }}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <BoxNav>Trang chủ</BoxNav>
          </Link>

          <Link to="/shop" style={{ textDecoration: "none" }}>
            <BoxNav>Shop</BoxNav>
          </Link>

          <Link to="/about" style={{ textDecoration: "none" }}>
            <BoxNav>Giới thiệu</BoxNav>
          </Link>

          <Link to="/contact" style={{ textDecoration: "none" }}>
            <BoxNav>Liên hệ</BoxNav>
          </Link>

          <Link to="/blog" style={{ textDecoration: "none" }}>
            <BoxNav>Blog</BoxNav>
          </Link>
          <Link to="#" style={{ textDecoration: "none" }}>
            <BoxNav
              sx={{
                justifyContent: "center",
              }}
              onClick={() => setShowSearchBox(true)}
            >
              <SearchIcon />
            </BoxNav>
          </Link>
        </Box>
        <Actions matches={matches} />
      </Toolbar>
    </AppBar>
   
  );
};

export default AppBarDesktop;
