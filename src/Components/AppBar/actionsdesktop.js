// import {
//   Avatar,
//   Badge,
//   Divider,
//   ListItemButton,
//   ListItemIcon,
//   ListItemText,
//   Menu,
//   MenuItem,
// } from "@mui/material";
// import React, { Fragment, useState } from "react";
// import {
//   ActionIconsContainerDesktop,
//   ActionIconsContainerMobile,
//   BoxNav,
//   LinkRouter,
//   MyList,
// } from "../../styles/appbar";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import { Colors } from "../../styles/theme";
// import Fade from "@mui/material/Fade";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { logout } from "../../Redux/Actions/userActions";

// const Actions = ({ matches }) => {
//   const Component = matches
//     ? ActionIconsContainerMobile
//     : ActionIconsContainerDesktop;
//   const { cartItems } = useSelector((state) => state.cart);

//   const { user } = useSelector((state) => state.auth);
//   const dispatch = useDispatch();

//   const [anchorEl, setAnchorEl] = useState(null);
//   const open = Boolean(anchorEl);

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const logoutHandler = () => {
//     dispatch(logout());
//     toast.success("Đăng xuất thành công.", {
//       position: toast.POSITION.TOP_RIGHT,
//     });
//   };

//   return (
//     <Fragment>
//       <Component>
//         <ToastContainer />
//         <MyList type="row">
//           <Link to="/shoping-cart" style={{ textDecoration: "none" }}>
//             <BoxNav>
//               <Badge badgeContent={cartItems.length} color="secondary">
//                 <ShoppingCartIcon />
//               </Badge>
//             </BoxNav>
//           </Link>
//           <Divider orientation="vertical" flexItem />
//           <Link to="/wisslist" style={{ textDecoration: "none" }}>
//             <BoxNav>
//               <Badge badgeContent={4} color="secondary">
//                 <FavoriteIcon />
//               </Badge>
//             </BoxNav>
//           </Link>
//           <Divider orientation="vertical" flexItem />

//           {user ? (
//             <Fragment>
//               <ListItemText
//                 sx={{
//                   padding: "0 10px 0 10px",
//                 }}
//               >
//                 {user.avatar && user.avatar.url ? (
//                   <Avatar
//                     alt="Remy Sharp"
//                     src="https://res.cloudinary.com/da5zt66t6/image/upload/v1664461361/products-cake/ta-2_fomhgd.jpg"
//                   />
//                 ) : (
//                   <Avatar
//                     alt="Remy Sharp"
//                     src={user.avatar && user.avatar.url}
//                   />
//                 )}
//               </ListItemText>
//               <ListItemText>Trần Thanh Tú</ListItemText>
//               <KeyboardArrowDownIcon
//                 id="fade-button"
//                 aria-controls={open ? "fade-menu" : undefined}
//                 aria-haspopup="true"
//                 aria-expanded={open ? "true" : undefined}
//                 onClick={handleClick}
//                 onClose={handleClose}
//                 sx={{
//                   color: Colors.white,
//                   cursor: "pointer",
//                 }}
//               />
//               <Menu
//                 id="fade-menu"
//                 MenuListProps={{
//                   "aria-labelledby": "fade-button",
//                 }}
//                 anchorEl={anchorEl}
//                 open={open}
//                 onClose={handleClose}
//                 TransitionComponent={Fade}
//               >
//                 <MenuItem>
//                   <Link to="/dashboard" style={{ textDecoration: "none" }}>
//                     Dashboard
//                   </Link>
//                 </MenuItem>

//                 <MenuItem>Trang cá nhân</MenuItem>
//                 <MenuItem>Đơn đặt hàng</MenuItem>
//                 <MenuItem onClick={logoutHandler}>Đăng xuất</MenuItem>
//               </Menu>
//             </Fragment>
//           ) : (
//             <Link to="/login" style={{ textDecoration: "none" }}>
//               <BoxNav>Đăng nhập</BoxNav>
//             </Link>
//           )}
//         </MyList>
//       </Component>
//     </Fragment>
//   );
// };

// export default Actions;
