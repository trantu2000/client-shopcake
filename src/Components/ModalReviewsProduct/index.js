// import * as React from "react";
// import PropTypes from "prop-types";
// import Button from "@mui/material/Button";
// import { styled } from "@mui/material/styles";
// import Dialog from "@mui/material/Dialog";
// import DialogTitle from "@mui/material/DialogTitle";
// import DialogContent from "@mui/material/DialogContent";
// import DialogActions from "@mui/material/DialogActions";
// import IconButton from "@mui/material/IconButton";
// import CloseIcon from "@mui/icons-material/Close";
// import Typography from "@mui/material/Typography";
// import { Box, Rating, TextField, TextareaAutosize } from "@mui/material";
// import { useState } from "react";


// const BootstrapDialog = styled(Dialog)(({ theme }) => ({
//   "& .MuiDialogContent-root": {
//     padding: theme.spacing(2),
//   },
//   "& .MuiDialogActions-root": {
//     padding: theme.spacing(1),
//   },
// }));

// function BootstrapDialogTitle(props) {
//   const { children, onClose, ...other } = props;
  

//   return (
//     <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
//       {children}
//       {onClose ? (
//         <IconButton
//           aria-label="close"
//           onClick={onClose}
//           sx={{
//             position: "absolute",
//             right: 8,
//             top: 8,
//             color: (theme) => theme.palette.grey[500],
//           }}
//         >
//           <CloseIcon />
//         </IconButton>
//       ) : null}
//     </DialogTitle>
//   );
// }

// BootstrapDialogTitle.propTypes = {
//   children: PropTypes.node,
//   onClose: PropTypes.func.isRequired,
// };

// export default function ModalReviewsProduct() {
//   const [open, setOpen] = React.useState(false);
//   const [rate, setRate] = useState(5);
//   const [comment, setComment] = useState("");
//   console.log(comment);
//   console.log(rate);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };
//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <div>
//       <Button
//         variant="outlined"
//         onClick={handleClickOpen}
//         sx={{ fontSize: 13 }}
//       >
//         Đánh giá ngay
//       </Button>
//       <BootstrapDialog
//         onClose={handleClose}
//         aria-labelledby="customized-dialog-title"
//         open={open}
//       >
//         <BootstrapDialogTitle
//           id="customized-dialog-title"
//           onClose={handleClose}
//           sx={{ fontSize: 13 }}
//         >
//           Đánh giá sản phẩm
//         </BootstrapDialogTitle>
//         <DialogContent dividers>
//           <Box
//             component="form"
//             sx={{
//               "& .MuiTextField-root": { m: 1, width: "25ch" },
//             }}
//             noValidate
//             autoComplete="off"
//           >
//             <Box sx={{ mb: 1 }}>
//               <Rating
//                 name="simple-controlled"
//                 value={rate}
//                 onChange={(event, newRate) => {
//                   setRate(newRate);
//                 }}
//               />
//             </Box>
//             <TextareaAutosize
//               aria-label="minimum height"
//               minRows={5}
//               placeholder="Nhập bình luận của bạn"
//               style={{ width: 400 }}
//               // value={comment}
//               // onChange={(e) => setComment(e.target.value)}
//             />
//           </Box>
//         </DialogContent>
//         <DialogActions sx={{ fontSize: 13 }}>
//           <Button autoFocus onClick={handleClose}>
//             Gửi
//           </Button>
//         </DialogActions>
//       </BootstrapDialog>
//     </div>
//   );
// }
