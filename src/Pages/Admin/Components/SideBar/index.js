import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import CakeIcon from "@mui/icons-material/Cake";
import AddBoxIcon from "@mui/icons-material/AddBox";
import StorefrontIcon from "@mui/icons-material/Storefront";
import PersonIcon from "@mui/icons-material/Person";
import GroupIcon from "@mui/icons-material/Group";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StarIcon from "@mui/icons-material/Star";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { Link } from "react-router-dom";
import { Colors } from "../../../../styles/theme";
import { useUIContext } from "../../../../context/ui";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function SideBar() {
  const { drawerOpen, setDrawerOpen } = useUIContext();

  const [openproduct, setOpenProduct] = React.useState(false);
  const [openuser, setOpenUser] = React.useState(false);

  const handleClickProduct = () => {
    setOpenProduct(!openproduct);
  };
  const handleClickUser = () => {
    setOpenUser(!openuser);
  };

  const handleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  return (
    <Drawer variant="permanent" open={drawerOpen} sx={{ zIndex: 10 }}>
      <DrawerHeader></DrawerHeader>
      <Divider />

      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: Colors.primary }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <Link to="/dashboard">
          <ListItemButton>
            <ListItemIcon>
              <HomeIcon sx={{ color: Colors.white }} />
            </ListItemIcon>
            <ListItemText primary="Trang chủ" sx={{ color: Colors.white }} />
          </ListItemButton>
        </Link>

        <ListItemButton onClick={handleClickProduct}>
          <ListItemIcon>
            <CakeIcon sx={{ color: Colors.white }} />
          </ListItemIcon>
          <ListItemText primary="Sản phẩm" sx={{ color: Colors.white }} />
          {openproduct ? (
            <ExpandLess sx={{ color: Colors.white }} />
          ) : (
            <ExpandMore sx={{ color: Colors.white }} />
          )}
        </ListItemButton>
        <Link to="/admin/products">
          <Collapse in={openproduct} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <StorefrontIcon sx={{ color: Colors.white }} />
                </ListItemIcon>
                <ListItemText primary="Tất cả" sx={{ color: Colors.white }} />
              </ListItemButton>
            </List>
          </Collapse>
        </Link>

        <Link to="/admin/product">
          <Collapse in={openproduct} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <AddBoxIcon sx={{ color: Colors.white }} />
                </ListItemIcon>
                <ListItemText
                  primary="Tạo sản phẩm mới"
                  sx={{ color: Colors.white }}
                />
              </ListItemButton>
            </List>
          </Collapse>
        </Link>

        <ListItemButton onClick={handleClickUser}>
          <ListItemIcon>
            <PersonIcon sx={{ color: Colors.white }} />
          </ListItemIcon>
          <ListItemText primary="Người dùng" sx={{ color: Colors.white }} />
          {openuser ? (
            <ExpandLess sx={{ color: Colors.white }} />
          ) : (
            <ExpandMore sx={{ color: Colors.white }} />
          )}
        </ListItemButton>

        <Link to="/admin/users">
          <Collapse in={openuser} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <GroupIcon sx={{ color: Colors.white }} />
                </ListItemIcon>
                <ListItemText primary="Tất cả" sx={{ color: Colors.white }} />
              </ListItemButton>
            </List>
          </Collapse>
        </Link>

        <Collapse in={openuser} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <PersonAddIcon sx={{ color: Colors.white }} />
              </ListItemIcon>
              <ListItemText
                primary="Tạo tài khoản"
                sx={{ color: Colors.white }}
              />
            </ListItemButton>
          </List>
        </Collapse>

        <Link to="/admin/orders">
          <ListItemButton>
            <ListItemIcon>
              <ShoppingCartIcon sx={{ color: Colors.white }} />
            </ListItemIcon>
            <ListItemText
              primary="Đơn đặt hàng"
              sx={{ opacity: drawerOpen ? 1 : 0, color: Colors.white }}
            />
          </ListItemButton>
        </Link>

        <ListItemButton>
          <ListItemIcon>
            <StarIcon sx={{ color: Colors.white }} />
          </ListItemIcon>
          <ListItemText
            primary="Đánh giá"
            sx={{ opacity: drawerOpen ? 1 : 0, color: Colors.white }}
          />
        </ListItemButton>

        <Box
          onClick={handleDrawer}
          display="flex"
          justifyContent="center"
          sx={{ color: Colors.white, fontSize: "2.5rem" }}
        >
          {drawerOpen === true ? (
            <ArrowCircleLeftIcon sx={{ fontSize: "2.5rem" }} />
          ) : (
            <ArrowCircleRightIcon sx={{ fontSize: "2.5rem" }} />
          )}
        </Box>
      </List>
    </Drawer>
  );
}
