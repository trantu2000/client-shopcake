import {
  Avatar,
  Box,
  Breadcrumbs,
  Button,
  Container,
  Divider,
  Grid,
  IconButton,
  Paper,
  Rating,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import MetaData from "../../Components/MetaData";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Colors } from "../../styles/theme";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetail } from "../../Redux/Actions/productActions";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { addItemToCart } from "../../Redux/Actions/cartActions";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Products from "../../Components/Products";
import TextareaAutosize from "@mui/material/TextareaAutosize";
const ProductDetail = ({ match }) => {
  const [rate, setRate] = useState(5);

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  const { loading, error, product } = useSelector(
    (state) => state.productdetail
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductDetail(match.params.id));
  }, [dispatch, match.params.id, product]);
  const [quantity, setQuantity] = useState(1);
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const decreaseQty = () => {
    if (quantity <= 1) return;
    const qty = quantity - 1;
    setQuantity(qty);
  };

  const increaseQty = () => {
    if (quantity >= product.stock) return;
    const qty = quantity + 1;
    setQuantity(qty);
  };

  const addToCart = () => {
    dispatch(addItemToCart(match.params.id, quantity));
    toast.success("Thêm vào giỏ hàng thành công !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  return (
    <Container>
      <MetaData title="Chi tiết sản phẩm" />
      <ToastContainer />
      <Box
        display="flex"
        justifyContent="space-between"
        sx={{
          mt: 10,
        }}
      >
        <Box display="flex" justifyContent="flex-start">
          <Typography
            sx={{
              color: Colors.black,
              fontSize: "2rem",
              paddingTop: "1rem",
              fontWeight: 800,
            }}
          >
            Chi tiết sản phẩm
          </Typography>
        </Box>
        <Box display="flex" justifyContent="flex-end">
          <Breadcrumbs
            sx={{
              p: 1,
            }}
            aria-label="breadcrumb"
          >
            <Link to="#" underline="hover" color="inherit">
              Trang chủ
            </Link>
            <Link underline="hover" color="inherit" to="#">
              Chi tiết sản phẩm
            </Link>
            <Typography color="text.primary">Breadcrumbs</Typography>
          </Breadcrumbs>
        </Box>
      </Box>

      <Box>
        <Grid container>
          <Grid item xs={2}></Grid>
          <Grid item xs={8}>
            <Grid container>
              <Grid item xs={6}>
                <Box
                  sx={{
                    ml: -4,
                  }}
                >
                  <Carousel
                    width="430px"
                    time={2000}
                    autoPlay={true}
                    automatic={true}
                    infiniteLoop={true}
                  >
                    {product.images &&
                      product.images.map((image) => (
                        <div key={image.public_id}>
                          <img src={image.url} alt={product.name} />
                        </div>
                      ))}
                  </Carousel>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box sx={{ ml: 5 }}>
                  <Box>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontSize: "1.5rem",
                        fontWeight: 700,
                        mt: 1,
                        mb: 1,
                      }}
                    >
                      {product.name}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: "1.2rem",
                        fontWeight: 500,
                        mt: 1,
                      }}
                    >
                      Mã: {product._id}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: "1.2rem",
                        fontWeight: 500,
                        mt: 1,
                      }}
                    >
                      Có sẵn: {product.stock}
                    </Typography>

                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: "1.2rem",
                        fontWeight: 500,
                        mt: 1,
                      }}
                    >
                      Mô tả:
                    </Typography>
                    <Typography
                      type="number"
                      variant="subtitle1"
                      sx={{
                        fontSize: "1.2rem",
                        fontWeight: 400,
                        mb: 2,
                      }}
                    >
                      {product.description}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: "1.2rem",
                        fontWeight: 500,
                      }}
                    >
                      Giá:{" "}
                      {(product.price && (product.price).toLocaleString("vi", {
                        style: "currency",
                        currency: "VND",
                      }))}
                    </Typography>
                  </Box>

                  <Divider />
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    sx={{
                      mt: 2,
                      mb: 2,
                    }}
                  >
                    <Box
                      display="Flex"
                      sx={{
                        mr: 3,
                      }}
                    >
                      <IconButton
                        sx={{
                          borderRadius: 1,
                          background: Colors.primary,
                          color: Colors.white,
                          "&:hover": {
                            background: Colors.secondary,
                            color: Colors.black,
                          },
                        }}
                        onClick={decreaseQty}
                      >
                        <RemoveIcon />
                      </IconButton>

                      <Typography
                        variant="body1"
                        sx={{
                          border: "none",
                          pl: 2,
                          pr: 2,
                          pt: 1,
                          pb: 1,
                        }}
                      >
                        {quantity}
                      </Typography>

                      <IconButton
                        sx={{
                          borderRadius: 1,
                          background: Colors.primary,
                          color: Colors.white,
                          "&:hover": {
                            background: Colors.secondary,
                            color: Colors.black,
                          },
                        }}
                        disabled={product.stock === 0}
                        onClick={increaseQty}
                      >
                        <AddIcon />
                      </IconButton>
                    </Box>
                    <Box display="Flex">
                      <Button
                        color="primary"
                        variant="contained"
                        style={{ margin: "8px 0" }}
                        fullWidth
                        disabled={product.stock === 0}
                        onClick={addToCart}
                      >
                        Thêm vào giỏ hàng
                      </Button>
                    </Box>
                  </Box>
                  <Divider />
                  <Box
                    display="flex"
                    alignItems="center"
                    sx={{ mt: 2, color: Colors.light }}
                  >
                    <IconButton>
                      <FavoriteIcon />
                    </IconButton>
                    Thêm vào danh sách yêu thích
                  </Box>
                  <Box
                    sx={{
                      mt: 4,
                      color: Colors.dove_gray,
                    }}
                  >
                    <IconButton>
                      <FacebookIcon />
                    </IconButton>
                    <IconButton>
                      <TwitterIcon />
                    </IconButton>
                    <IconButton>
                      <InstagramIcon />
                    </IconButton>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          width: "100%",
          m: 3,
        }}
      >
        <Grid container>
          <Grid item xs={12}>
            <Box
              sx={{
                borderBottom: 1,
                borderColor: "divider",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                >
                  <Tab label="Mô tả" {...a11yProps(0)} />
                  <Tab label="Thông tin thêm" {...a11yProps(1)} />
                  <Tab label="Đánh giá(3)" {...a11yProps(2)} />
                </Tabs>
              </Box>
              <Box></Box>
            </Box>
          </Grid>
        </Grid>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box>
            <TabPanel value={value} index={0}>
              Cupcake là loại bánh nướng trong khuôn nhỏ nên có kích thích nhỏ,
              phục vụ khẩu phần 1 người ăn, cốt bánh mềm, trọng lượng nhẹ, vị
              ngọt, thường được phủ một lớp bông kem dày bên trên và trang trí
              bằng đa dạng các nguyên liệu.
            </TabPanel>
            <TabPanel value={value} index={1}>
              Thông thường, một cupcake truyền thống sẽ được tạo nên bằng cách
              đánh bông bơ với đường, rồi trộn trứng cùng các nguyên liệu khô
              khác như bột mỳ, bột nở…, có thể thêm thêm chất lỏng như whipping,
              sữa… nếu thích.
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Box>
                <Box sx={{ mt: 2, mb: 2 }}>
                  <Typography variant="h5">
                    Bình luận của bạn tại đây
                  </Typography>
                </Box>
                <Box sx={{ mt: 1, mb: 1 }}>
                  <Rating
                    name="simple-controlled"
                    value={rate}
                    onChange={(event, newRate) => {
                      setRate(newRate);
                    }}
                  />
                </Box>
                <Box component="form">
                  <TextareaAutosize
                    aria-label="minimum height"
                    minRows={3}
                    placeholder="Nhập bình luận của bạn"
                    style={{ width: 200 }}
                  />
                </Box>
                <Box sx={{ mt: 1, color: Colors.white }}>
                  <Link to="#">
                    <Button
                      type="submit"
                      color="primary"
                      variant="contained"
                      sx={{ color: Colors.white }}
                    >
                      Gửi
                    </Button>
                  </Link>
                </Box>
                <Divider sx={{ mt: 3, mb: 2 }} />
                <Box sx={{ mt: 1, mb: 1 }}>
                  <Typography variant="h6">Những bình luận khác</Typography>
                </Box>
                <Box sx={{ mt: 1, mb: 1 }}>
                  <Box display="flex">
                    <Box sx={{ mt: 1, mb: 1, p: 1 }}>
                      <Avatar
                        alt="Remy Sharp"
                        src="https://res.cloudinary.com/da5zt66t6/image/upload/v1664461361/products-cake/ta-2_fomhgd.jpg"
                      />
                    </Box>
                    <Box>
                      <Paper elevation={5} sx={{ p: 2 }}>
                        <Typography variant="h6">Trần Thanh Tú</Typography>
                        <Typography variant="body1">
                          Bánh khá là ngon ạ
                        </Typography>
                      </Paper>
                    </Box>
                  </Box>
                </Box>
                <Box sx={{ mt: 1, mb: 1 }}>
                  <Box display="flex">
                    <Box sx={{ mt: 1, mb: 1, p: 1 }}>
                      <Avatar
                        alt="Remy Sharp"
                        src="https://res.cloudinary.com/da5zt66t6/image/upload/v1664461361/products-cake/ta-2_fomhgd.jpg"
                      />
                    </Box>
                    <Box>
                      <Paper elevation={3} sx={{ p: 2 }}>
                        <Typography variant="h6">Trần Thanh Tú</Typography>
                        <Typography variant="body1">
                          Bánh khá là ngon ạ Bánh khá là ngon ạ Bánh khá là ngon
                          ạ Bánh khá là ngon ạ Bánh khá là ngon ạ Bánh khá là
                          ngon ạ Bánh khá là ngon ạ Bánh khá là ngon ạ Bánh khá
                          là ngon ạ Bánh khá là ngon ạ
                        </Typography>
                      </Paper>
                    </Box>
                  </Box>
                </Box>
                <Box sx={{ mt: 1, mb: 1 }}>
                  <Box display="flex">
                    <Box sx={{ mt: 1, mb: 1, p: 1 }}>
                      <Avatar
                        alt="Remy Sharp"
                        src="https://res.cloudinary.com/da5zt66t6/image/upload/v1664461361/products-cake/ta-2_fomhgd.jpg"
                      />
                    </Box>
                    <Box>
                      <Paper elevation={3} sx={{ p: 2 }}>
                        <Typography variant="h6">Trần Thanh Tú</Typography>
                        <Typography variant="body1">
                          Bánh khá là ngon ạ Bánh khá là ngon ạ Bánh khá là ngon
                          ạ Bánh khá là ngon ạ Bánh khá là ngon ạ Bánh khá là
                          ngon ạ Bánh khá là ngon ạ Bánh khá là ngon ạ Bánh khá
                          là ngon ạ Bánh khá là ngon ạ
                        </Typography>
                      </Paper>
                    </Box>
                  </Box>
                </Box>
                <Box sx={{ mt: 1, mb: 1 }}>
                  <Box display="flex">
                    <Box sx={{ mt: 1, mb: 1, p: 1 }}>
                      <Avatar
                        alt="Remy Sharp"
                        src="https://res.cloudinary.com/da5zt66t6/image/upload/v1664461361/products-cake/ta-2_fomhgd.jpg"
                      />
                    </Box>
                    <Box>
                      <Paper elevation={3} sx={{ p: 2 }}>
                        <Typography variant="h6">Trần Thanh Tú</Typography>
                        <Typography variant="body1">
                          Bánh khá là ngon ạ Bánh khá là ngon ạ Bánh khá là ngon
                          ạ Bánh khá là ngon ạ Bánh khá là ngon ạ Bánh khá là
                          ngon ạ Bánh khá là ngon ạ Bánh khá là ngon ạ Bánh khá
                          là ngon ạ Bánh khá là ngon ạ
                        </Typography>
                      </Paper>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </TabPanel>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography variant="h4">Các loại bánh khác</Typography>
        </Box>
      </Box>
      <Box>
        <Grid container>
          <Grid item xs={12}>
            <Products />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ProductDetail;
