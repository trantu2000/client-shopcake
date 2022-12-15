import styled from "@emotion/styled";
import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { Colors } from "../../styles/theme";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getProductDetail } from "../../Redux/Actions/productActions";
import { addItemToCart } from "../../Redux/Actions/cartActions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

const BackgroundImageTeam = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  // backgroundImage: `url(${src})`,
  // backgroundRepeat: "no-repeat",
  // backgroundPosition: "center",
  width: "20rem",
  height: "22rem",
  borderRadius: "3rem",
  p: 3,
  // border: "1px solid black"
  // [theme.breakpoints.down("md")]: {
  //   width: "350px",
  // },
  [theme.breakpoints.down("sm")]: {
    width: "13rem",
    height: "14rem",
  },
}));

const ProductItem = ({ product,grid }) => {
  const dispatch = useDispatch();
  const [quantity] = useState(1);

  useEffect(() => {
    dispatch(getProductDetail(product._id));
  }, [dispatch, product._id, product]);
  const addToCart = () => {
    dispatch(addItemToCart(product._id, quantity));
    toast.success("Thêm vào giỏ hàng thành công !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  return (
    <Grid item xs={6}  sm={6} md={3}>
      <ToastContainer />

      <Box
        sx={{
          mb: 5,
          cursor: "pointer",
          "&:hover": {
            bgcolor: Colors.light_gray,
            borderRadius: "3rem",
          },
          p:2
          
        }}
      >
        <Box sx={{ position: "absolute", ml: 25, pt: 2, pr: 1 }}>
          <IconButton>
            <FavoriteIcon sx={{ fontSize: 25, color: Colors.primary }} />
          </IconButton>
        </Box>
        <Link to={`/product/${product._id}`}>
          <Box
            sx={{ width: "100%", height: "22rem", borderRadius: "10rem" }}
            display="flex"
            justifyContent="center"
          >
            <BackgroundImageTeam src={product.images[0].url} />
          </Box>
        </Link>
        <Box display="flex" justifyContent="center">
          <Typography
            sx={{
              pr: 2,
              pl: 2,

              bgcolor: Colors.white,
              color: Colors.black,
              fontSize: 14,
              position: "absolute",
              mt: -2,
              "&:hover": {
                bgcolor: Colors.primary,
                color: Colors.white,
              },
            }}
            variant="subtitle1"
          >
            {product.category}
          </Typography>
        </Box>
        <Box sx={{ pt: 2, pb: 1 }} display="flex" justifyContent="center">
          <Typography variant="h5">{product.name}</Typography>
        </Box>
        <Box display="flex" justifyContent="center">
          <Box>
            <Typography variant="h6">
              {product.price.toLocaleString("vi", {
                style: "currency",
                currency: "VND",
              })}
            </Typography>
          </Box>
          <Box>
            {product.discount !== 0 ? (
              <Typography
                sx={{ textDecoration: "line-through", ml: 1, color: "red" }}
                variant="subtitle1"
              >
                {(
                  product.price +
                  product.price * (product.discount / 100)
                ).toLocaleString("vi", {
                  style: "currency",
                  currency: "VND",
                })}
              </Typography>
            ) : (
              <></>
            )}
          </Box>
        </Box>
        <Box sx={{ pt: 1 }} display="flex" justifyContent="center">
          <Button
            sx={{
              fontSize: 11,
              "&:hover": {
                bgcolor: Colors.primary,
                color: Colors.white,
              },
            }}
            variant="outlined"
            disabled={product.stock === 0}
            onClick={addToCart}
          >
            Thêm vào giỏ hàng
          </Button>
        </Box>
      </Box>
    </Grid>
  );
};

export default ProductItem;
