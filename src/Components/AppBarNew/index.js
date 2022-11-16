import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import CakeIcon from "@mui/icons-material/Cake";
import { Colors } from "../../styles/theme";
import { textPopUpTop } from "../../animation";
import { Link } from "react-router-dom";
import { BoxNav } from "../../styles/appbar";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Redux/Actions/userActions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const AppBarNew = () => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const { user, loading } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
    toast.success("Đăng xuất thành công.", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
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
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));

  return (
    <AppBar position="fixed" sx={{ zIndex: 1000 }}>
      <Container maxWidth="xl">
        <ToastContainer />
        <Toolbar disableGutters>
          <CakeIcon
            sx={{
              display: { xs: "none", md: "flex" },
              mr: 1,
              fontFamily: "Montez",
              color: Colors.white,
              "&:hover": {
                animation: `${textPopUpTop} 0.5s cubic-bezier(0.455, 0.030, 0.515, 0.955) both`,
              },
              cursor: "pointer",
            }}
          />
          <Typography
            sx={{
              padding: "4px",
              flexGrow: 1,
              fontSize: "2.5em",
              fontFamily: "Montez",
              color: Colors.white,
              "&:hover": {
                animation: `${textPopUpTop} 0.5s cubic-bezier(0.455, 0.030, 0.515, 0.955) both`,
              },
              cursor: "pointer",
            }}
          >
            Cake Trần Tú
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Link to="/">
              <BoxNav>Trang chủ</BoxNav>
            </Link>

            <Link to="/shop">
              <BoxNav>Bánh</BoxNav>
            </Link>

            <Link to="/about">
              <BoxNav>Giới thiệu</BoxNav>
            </Link>

            <Link to="/contact">
              <BoxNav>Liên hệ</BoxNav>
            </Link>

            <Link to="/blog">
              <BoxNav>Blog</BoxNav>
            </Link>
            <Box display="flex" justifyContent="center" alignItems="center">
              <Box
                sx={{
                  color: Colors.white,
                }}
              >
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Tìm kiếm…"
                    inputProps={{ "aria-label": "search" }}
                  />
                </Search>
              </Box>
            </Box>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Link to="/shoping-cart">
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                sx={{
                  color: Colors.white,
                }}
              >
                <Badge badgeContent={cartItems.length} color="error">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </Link>
          </Box>
          {user ? (
            <React.Fragment>
              <Box sx={{ flexGrow: 0 }}>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Box sx={{ pr: 2, color: Colors.white }}>
                    <Typography>{user && user.name}</Typography>
                  </Box>
                  <Box>
                    <Tooltip title="tài khoản">
                      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        {!user ? (
                          <Avatar
                            alt="Remy Sharp"
                            src="https://res.cloudinary.com/da5zt66t6/image/upload/v1664461361/products-cake/ta-2_fomhgd.jpg"
                          />
                        ) : (
                          <Avatar
                            alt="Remy Sharp"
                            src={user.avatar && user.avatar.url}
                          />
                        )}
                      </IconButton>
                    </Tooltip>
                  </Box>
                </Box>

                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {user && user.role === "admin" && (
                    <Link to="/dashboard">
                      <MenuItem onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">Dashboard</Typography>
                      </MenuItem>
                    </Link>
                  )}
                  <Link to="/me">
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">Trang cá nhân</Typography>
                    </MenuItem>
                  </Link>

                  <Link to="/orders/me">
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">Đơn đặt hàng</Typography>
                    </MenuItem>
                  </Link>

                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography onClick={logoutHandler} textAlign="center">
                      Đăng xuất
                    </Typography>
                  </MenuItem>
                </Menu>
              </Box>
            </React.Fragment>
          ) : (
            !loading && (
              <React.Fragment>
                <Box sx={{ flexGrow: 0 }}>
                  <Link to="/login">
                    <IconButton sx={{ color: Colors.white }}>
                      <Typography>Đăng nhập</Typography>
                    </IconButton>
                  </Link>
                </Box>
              </React.Fragment>
            )
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default AppBarNew;
