import {
  Breadcrumbs,
  Button,
  Container,
  FormControl,
  Grid,
  IconButton,
  OutlinedInput,
  Paper,
  Tooltip,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { Colors } from "../../styles/theme";
import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  removeItemFromCart,
} from "../../Redux/Actions/cartActions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MetaData from "../../Components/MetaData";
import Breadcrumb from "../../Components/Breadcrumb";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: Colors.dove_gray,
  ...theme.typography.body2,
  padding: theme.spacing(1),
  //textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const ProductImageShopingCard = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  width: "4rem",
  height: "4rem",
  background: Colors.light_gray,

  // [theme.breakpoints.down("md")]: {
  //     width: "80%",
  //     padding: '24px'
  // }
}));

const ShopingCart = () => {
  const [value, setValue] = useState(1);
  const clamp = (min, max) => (v) => v <= min ? min : v >= max ? max : v;
  const clampV = clamp(0, 10);
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const increaseQty = (id, quantity, stock) => {
    const newQty = clampV(quantity + 1);

    if (newQty > stock) return;

    dispatch(addItemToCart(id, newQty));
  };

  const decreaseQty = (id, quantity) => {
    const newQty = clampV(quantity - 1);

    if (newQty === 0) return dispatch(removeItemFromCart(id));

    dispatch(addItemToCart(id, newQty));
  };
  const removeCartItemHandler = (id) => {
    dispatch(removeItemFromCart(id));
    toast.success("Delete success !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  return (
    <Container>
      <MetaData title="Giỏ hàng" />
      <ToastContainer />
      <Paper
        elevation={3}
        sx={{
          pl: 2,
          pr: 2,
          mt: 11,
          mb: 6,
        }}
      >
        <Breadcrumb title="Giỏ hàng" />
        <Box
          sx={{
            // background: Colors.shaft,
            //color: Colors.white,
            pb: 3,
            // flexGrow: 1
            // fontSize: { xs: '12px', md: '14px' }
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={8} md={8}>
              {cartItems.length === 0 ? (
                <Box display="flex" justifyContent="center" alignItems="center">
                  <Typography
                    sx={{
                      p: 3,
                      fontSize: "1.5rem",
                      fontWeight: 700,
                    }}
                    variant="body1"
                  >
                    Giỏ hàng trống
                  </Typography>
                </Box>
              ) : (
                <Fragment>
                  <Grid container>
                    <Grid item xs={5} md={6}>
                      <Typography variant="h6">Sản phẩm</Typography>
                    </Grid>
                    <Grid item xs={3} md={2}>
                      <Typography variant="h6" align="center">
                        Số lượng
                      </Typography>
                    </Grid>
                    <Grid item xs={3} md={3}>
                      <Typography variant="h6" align="center">
                        Tạm tính
                      </Typography>
                    </Grid>
                    <Grid item xs={1} md={1}>
                      <Typography variant="h6" align="center"></Typography>
                    </Grid>
                  </Grid>
                  <Divider />
                  {cartItems.map((item) => (
                    <Fragment>
                      <Grid
                        container
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        sx={{ mt: 0.5 }}
                      >
                        {/* xs={12} sm={8} md={8} */}
                        <Grid item xs={5} md={6}>
                          <Grid
                            container
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                          >
                            <Grid item xs={6}>
                              <ProductImageShopingCard
                                src={item.image}
                                alt={item.image}
                              />
                            </Grid>
                            <Grid item xs={6}>
                              <Typography
                                variant="subtitle1"
                                sx={{
                                  fontSize: "1.2rem",
                                }}
                              >
                                {item.name}
                              </Typography>
                              <Typography
                                variant="subtitle1"
                                sx={{
                                  fontSize: "1rem",
                                }}
                              >
                                {item.price.toLocaleString("vi", {
                                  style: "currency",
                                  currency: "VND",
                                })}
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item xs={3} md={2}>
                          <Box
                            display="Flex"
                            alignItems="center"
                            justifyContent="space-between"
                          >
                            <IconButton
                              sx={{
                                borderRadius: 1,
                                // background: Colors.primary,
                                color: Colors.black,
                                "&:hover": {
                                  background: Colors.secondary,
                                  color: Colors.black,
                                },
                              }}
                              onClick={() =>
                                decreaseQty(item.product, item.quantity)
                              }
                            >
                              <RemoveIcon />
                            </IconButton>

                            <Typography
                              variant="body1"
                              sx={{
                                border: "none",
                                pt: 1,
                                pb: 1,
                              }}
                            >
                              {item.quantity}
                            </Typography>

                            <IconButton
                              sx={{
                                borderRadius: 1,
                                // background: Colors.primary,
                                color: Colors.black,
                                "&:hover": {
                                  background: Colors.secondary,
                                  color: Colors.black,
                                },
                              }}
                              onClick={() =>
                                increaseQty(
                                  item.product,
                                  item.quantity,
                                  item.stock
                                )
                              }
                            >
                              <AddIcon />
                            </IconButton>
                          </Box>
                        </Grid>
                        <Grid item xs={3} md={3}>
                          <Typography
                            variant="subtitle1"
                            align="center"
                            sx={{
                              fontSize: "1rem",
                            }}
                          >
                            {(item.price * item.quantity).toLocaleString("vi", {
                              style: "currency",
                              currency: "VND",
                            })}
                          </Typography>
                        </Grid>
                        <Grid item xs={1} md={1}>
                          <IconButton
                            onClick={() => removeCartItemHandler(item.product)}
                            aria-label="delete"
                          >
                            <Tooltip placement="left" title="Xóa khỏi giỏ hàng">
                              <DeleteIcon
                                sx={{
                                  color: Colors.black,
                                  "&:hover": {
                                    color: "red",
                                  },
                                }}
                              />
                            </Tooltip>
                          </IconButton>
                        </Grid>
                      </Grid>
                      <Divider />
                    </Fragment>
                  ))}
                </Fragment>
              )}
              <Box display="flex" justifyContent="center" alignItems="center">
                <Box>
                  <Link to="/shop" style={{ textDecoration: "none" }}>
                    <Button
                      type="submit"
                      color="primary"
                      variant="contained"
                      sx={{
                        mt: 2,
                      }}
                    >
                      Tiếp tục mua hàng
                    </Button>
                  </Link>
                </Box>
              </Box>
            </Grid>

            <Grid item md={4} sm={4} xs={12}>
              <Item>
                <Typography variant="h6" align="center">
                  Thông tin đơn hàng
                </Typography>
                <Divider />
                <Grid
                  container
                  sx={{
                    mt: 2,
                    ml: 2,
                  }}
                >
                  <Grid item xs={4}>
                    <Typography
                      variant="body1"
                      //align='center'
                      fontWeight="700"
                      color="#111"
                    >
                      Số lượng:
                    </Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        color: Colors.black,
                      }}
                      //align='center'
                    >
                      {cartItems.reduce(
                        (acc, item) => acc + Number(item.quantity),
                        0
                      )}{" "}
                      (sản phẩm)
                    </Typography>
                  </Grid>
                </Grid>
                <Grid
                  sx={{
                    mb: 1,
                    ml: 2,
                  }}
                  container
                >
                  <Grid item xs={4}>
                    <Typography variant="body1" fontWeight="700" color="#111">
                      Tạm tính:
                    </Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        color: Colors.black,
                      }}
                    >
                      {cartItems
                        .reduce(
                          (acc, item) => acc + item.quantity * item.price,
                          0
                        )
                        .toLocaleString("vi", {
                          style: "currency",
                          currency: "VND",
                        })}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid
                  display="flex"
                  justifyContent="center"
                  alignItem="center"
                  container
                >
                  <Grid item xs={8}>
                    <FormControl
                      sx={{
                        width: "26ch",
                        ml: 2,
                        mb: 1,
                      }}
                    >
                      <OutlinedInput placeholder="Nhập mã giảm giá" />
                    </FormControl>
                  </Grid>
                  <Grid item xs={4}>
                    <Button
                      type="submit"
                      color="primary"
                      variant="contained"
                      style={{ margin: "8px -1rem" }}
                      fullWidth
                    >
                      Áp dụng
                    </Button>
                  </Grid>
                </Grid>

                <Link to="/shipping">
                  <Button
                    type="submit"
                    color="primary"
                    variant="contained"
                    style={{ margin: "4px 0" }}
                    fullWidth
                  >
                    Tiến hành thanh toán
                  </Button>
                </Link>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
};

export default ShopingCart;
