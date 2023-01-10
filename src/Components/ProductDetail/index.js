// import {
//     Dialog,
//     DialogTitle,
//     Slide,
//     Box,
//     IconButton,
//     DialogContent,
//     Typography,
//     Button,
//     Grid,
// } from "@mui/material";
// import React, { useState } from 'react'
// import { Colors } from '../../styles/theme';
// import CloseIcon from "@mui/icons-material/Close";
// import { useTheme } from "@mui/material/styles";
// import { useMediaQuery } from "@mui/material";
// import { ProductDetailInfoWrapper, ProductDetailWrapper } from "../../styles/productdetail";
// import { Product, ProductImage } from "../../styles/product";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import InstagramIcon from "@mui/icons-material/Instagram";

// import AddIcon from '@mui/icons-material/Add';
// import RemoveIcon from "@mui/icons-material/Remove";

// function SlideTransition(props) {
//     return <Slide direction="down" {...props} />;
// }
// const ProductDetail = ({ open, product, onClose }) => {
//     const theme = useTheme();
//     const matches = useMediaQuery(theme.breakpoints.down("md"));
//     const [value, setValue] = useState(1)
//     const clamp = (min, max) => (v) => v <= min ? min : v >= max ? max : v;
//     const clampV = clamp(1, 10);

//     return (
//         <Dialog
//             TransitionComponent={SlideTransition}
//             variant="permanant"
//             open={open}
//             fullScreen
//         >
//             <DialogTitle
//                 sx={{
//                     background: Colors.secondary,
//                 }}
//             >
//                 <Box
//                     display="flex"
//                     alignItems="center"
//                     justifyContent={"space-between"}
//                 >
//                     Chi tiết sản phẩm
//                     <IconButton onClick={onClose}>
//                         <CloseIcon />
//                     </IconButton>
//                 </Box>
//             </DialogTitle>
//             <Grid container spacing={2}>
//                 <Grid item xs={2}>

//                 </Grid>
//                 <Grid item xs={8}>
//                     <DialogContent>
//                         <ProductDetailWrapper display={"flex"} flexDirection={matches ? "column" : "row"}>
//                             <Product sx={{ mr: 4 }}>
//                                 <ProductImage src={product.image} />
//                             </Product>
//                             <ProductDetailInfoWrapper>
//                                 <Typography variant="subtitle">Mã: 123</Typography>
//                                 <Typography variant="subtitle">Có sẵn: 5 cái</Typography>
//                                 <Typography sx={{ lineHeight: 2 }} variant="h4">
//                                     {product.name}
//                                 </Typography>
//                                 <Typography variant="body">
//                                     {product.description}
//                                     {product.description}
//                                     {product.description}
//                                 </Typography>
//                                 <Box
//                                     sx={{ mt: 4 }}
//                                     display="flex"
//                                     alignItems="center"
//                                     justifyContent="space-between"
//                                 >
//                                     {/* <IncDec /> */}

//                                     <Box display="flex">
//                                         <IconButton
//                                             sx={{
//                                                 borderRadius: 0,
//                                                 background: Colors.secondary
//                                             }}
//                                             onClick={()=>setValue(clampV(value - 1))}
//                                         >
//                                             <RemoveIcon />
//                                         </IconButton>
//                                         <Typography
//                                             variant="h6"
//                                             sx={{
//                                                 border:`1px solid ${Colors.secondary}`,
//                                                 p:2
//                                             }}
//                                         >
//                                             {value}
//                                         </Typography>
//                                         <IconButton
//                                             sx={{
//                                                 borderRadius: 0,
//                                                 background: Colors.secondary
//                                             }}
//                                             onClick={()=>setValue(clampV(value + 1))}
//                                         >
//                                             <AddIcon />
//                                         </IconButton>

//                                     </Box>

//                                     <Button variant="contained">Thêm vào giỏ hàng</Button>
//                                 </Box>
//                                 <Box
//                                     display="flex"
//                                     alignItems="center"
//                                     sx={{ mt: 4, color: Colors.light }}
//                                 >
//                                     <FavoriteIcon sx={{ mr: 2 }} />
//                                     Thêm vào danh sách yêu thích
//                                 </Box>
//                                 <Box
//                                     sx={{
//                                         mt: 4,
//                                         color: Colors.dove_gray,
//                                     }}
//                                 >
//                                     <FacebookIcon />
//                                     <TwitterIcon sx={{ pl: 2 }} />
//                                     <InstagramIcon sx={{ pl: 2 }} />
//                                 </Box>
//                             </ProductDetailInfoWrapper>
//                         </ProductDetailWrapper>
//                     </DialogContent>
//                 </Grid>
//                 <Grid item xs={2}>

//                 </Grid>
//             </Grid>

//         </Dialog>
//     )
// }

// export default ProductDetail