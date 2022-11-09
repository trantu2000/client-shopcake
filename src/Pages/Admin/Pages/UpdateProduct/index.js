import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SideBar from "../../Components/SideBar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MetaData from "../../../../Components/MetaData";

import {
  Button,
  CircularProgress,
  Grid,
  MenuItem,
  Paper,
  TextareaAutosize,
  TextField,
} from "@mui/material";
import { Colors } from "../../../../styles/theme";

import { useUIContext } from "../../../../context/ui";
import {
  clearErrors,
  getAdminProducts,
  getProductDetail,
  updateProduct,
} from "../../../../Redux/Actions/productActions";
import {
  DELETE_PRODUCT_RESET,
  UPDATE_PRODUCT_RESET,
} from "../../../../Redux/Constants/productConstants";
import FileBase64 from "react-file-base64";
import { useState } from "react";
import styled from "@emotion/styled";

const categories = [
  "cupcake",
  "redvelvet",
  "biscuit",
  "butter",
  "donut",
  "cookie",
];

const ProductImageShopingCard = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  width: "5rem",
  height: "5rem",
  background: Colors.light_gray,

  // [theme.breakpoints.down("md")]: {
  //     width: "80%",
  //     padding: '24px'
  // }
}));

export default function UpdateProduct({ history, match }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState(0);
  const [seller, setSeller] = useState("");

  const [images, setImages] = useState([]);
  console.log(images);

  const [oldImages, setOldImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);

  const { error, product } = useSelector((state) => state.productdetail);
  const {
    loading,
    error: updateError,
    isUpdated,
  } = useSelector((state) => state.product);
  const { error: deleteError, isDeleted } = useSelector(
    (state) => state.product
  );
  const dispatch = useDispatch();

  const productId = match.params.id;

  useEffect(() => {
    dispatch(getAdminProducts());
    if (product && product._id !== productId) {
      dispatch(getProductDetail(productId));
    } else {
      setName(product.name);
      setPrice(product.price);
      setDiscount(product.discount);
      setDescription(product.description);
      setCategory(product.category);
      setSeller(product.seller);
      setStock(product.stock);
      setOldImages(product.images);
    }

    if (error) {
      toast.error(error, {
        position: toast.POSITION.TOP_RIGHT,
      });
      dispatch(clearErrors());
    }

    if (isUpdated) {
      history.push("/admin/products");
      toast.success("Cập nhật sản phẩm thành công !", {
        position: toast.POSITION.TOP_RIGHT,
      });

      dispatch({ type: UPDATE_PRODUCT_RESET });
    }
  }, [dispatch, error, isUpdated, history, updateError, product, productId]);

  const { drawerOpen } = useUIContext();

  const paperStyle = {
    padding: 5,
    height: "100%",
    width: "70rem",
    margin: "1rem auto 1rem auto",
  };

  const onChange = (e) => {
    setImagesPreview((oldArray) => [...oldArray, e.base64]);
    setImages((oldArray) => [...oldArray, e.base64]);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.set("name", name);
    formData.set("price", price);
    formData.set("discount", discount);
    formData.set("description", description);
    formData.set("category", category);
    formData.set("stock", stock);
    // formData.set('seller', seller);

    images.forEach((image) => {
      formData.append("images", image);
    });

    dispatch(updateProduct(product._id, formData));
  };

  return (
    <Box sx={{ display: "flex" }}>
      <MetaData title={"Cập nhật thông tin bánh"} />
      <ToastContainer />

      <SideBar />

      <Box
        component="main"
        sx={{ mt: 10, ml: 2 }}
        justifyContent="center"
        alignItems="center"
      >
        <Paper
          elevation={2}
          sx={{
            width: `${drawerOpen === true ? "94rem" : "107rem"}`,
            height: "100%",
          }}
        >
          <Box display="center" justifyContent="center">
            <Typography variant="h4" sx={{ p: 1 }}>
              Cập nhật thông tin bánh
            </Typography>
          </Box>
          <Box>
            {loading ? (
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                sx={{
                  p: 3,
                }}
              >
                <CircularProgress />
              </Box>
            ) : (
              <>
                <Box>
                  <Paper elevation={10} style={paperStyle}>
                    <Box
                      component="form"
                      sx={{
                        "& .MuiTextField-root": {
                          width: "maxWidth",
                          color: "#111",
                        },
                      }}
                      noValidate
                      autoComplete="off"
                      onSubmit={submitHandler}
                    >
                      <Box>
                        <Grid container>
                          <Grid item xs={6}>
                            <Box sx={{ pl: 3, pr: 3, pt: 3 }}>
                              <TextField
                                id="outlined-basic"
                                label="Nhập tên bánh"
                                type="text"
                                variant="outlined"
                                fullWidth
                                required
                                sx={{
                                  pb: 1,
                                  ".MuiInputLabel-root": {
                                    color: Colors.black,
                                    fontSize: 15,
                                  },
                                  ".MuiInputBase-root": {
                                    color: Colors.black,
                                    fontSize: 15,
                                  },
                                }}
                                value={name}
                                name="name"
                                onChange={(e) => setName(e.target.value)}
                              />
                            </Box>
                          </Grid>
                          <Grid item xs={6}>
                            <Box sx={{ pl: 3, pr: 3, pt: 3 }}>
                              <Box
                                component="form"
                                sx={{
                                  "& .MuiTextField-root": {},
                                }}
                                noValidate
                                autoComplete="off"
                              >
                                <TextField
                                  sx={{
                                    pb: 1,
                                    ".MuiInputLabel-root": {
                                      color: Colors.black,
                                      fontSize: 15,
                                    },
                                    ".MuiInputBase-root": {
                                      color: Colors.black,
                                      fontSize: 15,
                                    },
                                  }}
                                  id="outlined-select-currency"
                                  select
                                  label="Nhập loại bánh"
                                  value={category}
                                  name="category"
                                  onChange={(e) => setCategory(e.target.value)}
                                  // helperText="Please select your currency"
                                  fullWidth
                                >
                                  {categories.map((category) => (
                                    <MenuItem key={category} value={category}>
                                      {category}
                                    </MenuItem>
                                  ))}
                                </TextField>
                              </Box>
                            </Box>
                          </Grid>
                        </Grid>
                        <Grid container>
                          <Grid item xs={6}>
                            <Box sx={{ pl: 3, pr: 3, pt: 3 }}>
                              <TextField
                                id="outlined-basic"
                                label="Nhập số lượng"
                                type="number"
                                variant="outlined"
                                fullWidth
                                required
                                sx={{
                                  pb: 1,
                                  ".MuiInputLabel-root": {
                                    color: Colors.black,
                                    fontSize: 15,
                                  },
                                  ".MuiInputBase-root": {
                                    color: Colors.black,
                                    fontSize: 15,
                                  },
                                }}
                                value={stock}
                                name="stock"
                                onChange={(e) => setStock(e.target.value)}
                              />
                            </Box>
                          </Grid>
                          <Grid item xs={6}>
                            <Box sx={{ pl: 3, pr: 3, pt: 3 }}>
                              <TextField
                                sx={{
                                  pb: 1,
                                  ".MuiInputLabel-root": {
                                    color: Colors.black,
                                    fontSize: 15,
                                  },
                                  ".MuiInputBase-root": {
                                    color: Colors.black,
                                    fontSize: 15,
                                  },
                                }}
                                id="outlined-basic"
                                label="Nhập giá tiền"
                                type="number"
                                variant="outlined"
                                fullWidth
                                required
                                value={price}
                                name="price"
                                onChange={(e) =>
                                  setPrice(
                                    parseInt(e.target.value?.replace(/,/g, ""))
                                  )
                                }
                              />
                            </Box>
                          </Grid>
                        </Grid>
                        <Grid container>
                          <Grid item xs={6}>
                            <Box sx={{ pl: 3, pr: 3, pt: 3 }}>
                              <TextareaAutosize
                                aria-label="minimum height"
                                minRows={3}
                                placeholder="Nhập mô tả"
                                style={{ width: 400, fontSize: 16 }}
                                value={description}
                                name="description"
                                onChange={(e) => setDescription(e.target.value)}
                              />
                            </Box>
                          </Grid>
                          <Grid item xs={6}>
                            <Box sx={{ pl: 3, pr: 3, pt: 3 }}>
                              <TextField
                                id="outlined-basic"
                                label="Nhập % giảm giá"
                                type="text"
                                variant="outlined"
                                fullWidth
                                required
                                sx={{
                                  pb: 1,
                                  ".MuiInputLabel-root": {
                                    color: Colors.black,
                                    fontSize: 15,
                                  },
                                  ".MuiInputBase-root": {
                                    color: Colors.black,
                                    fontSize: 15,
                                  },
                                }}
                                name="discount"
                                value={discount}
                                onChange={(e) => setDiscount(e.target.value)}
                              />
                            </Box>
                          </Grid>
                        </Grid>
                        <Grid container>
                          <Grid item xs={12}>
                            <Box sx={{ pl: 3, pr: 3, pt: 3 }}>
                              <FileBase64
                                multiple={false}
                                onDone={onChange}
                                name="images"
                                value={images}
                                accept="image/*"
                                sx={{
                                  pb: 1,
                                  ".MuiInputLabel-root": {
                                    color: Colors.black,
                                    fontSize: 15,
                                  },
                                  ".MuiInputBase-root": {
                                    color: Colors.black,
                                    fontSize: 15,
                                  },
                                }}
                              />
                            </Box>
                          </Grid>
                        </Grid>
                      </Box>

                      <Grid container>
                        <Grid item xs={6}>
                          <Box sx={{ pl: 3, pr: 3, pt: 3 }}>
                            <Box
                              sx={{
                                p: 3,
                              }}
                            >
                              <Typography variant="h6">Ảnh cũ</Typography>
                            </Box>
                            <Box
                              sx={{
                                pl: 3,
                              }}
                            >
                              {oldImages &&
                                oldImages.map((img) => (
                                  <ProductImageShopingCard
                                    key={img}
                                    src={img.url}
                                    alt={img.name}
                                  />
                                ))}
                            </Box>
                          </Box>
                        </Grid>
                        <Grid item xs={6}>
                          <Box sx={{ pl: 3, pr: 3, pt: 3 }}>
                            <Box
                              sx={{
                                p: 3,
                              }}
                            >
                              <Typography variant="h6">Ảnh mới</Typography>
                            </Box>
                            <Box
                              sx={{
                                pl: 3,
                              }}
                            >
                              {imagesPreview.map((img) => (
                                <ProductImageShopingCard
                                  key={img}
                                  src={img}
                                  alt="Images Preview"
                                />
                              ))}
                            </Box>
                          </Box>
                        </Grid>
                      </Grid>

                      <Box
                        sx={{
                          pl: 30,
                          pr: 30,
                          pt: 2,
                          mb: 2,
                        }}
                      >
                        <Button
                          type="submit"
                          color="primary"
                          variant="contained"
                          style={{ margin: "5px 0" }}
                          fullWidth
                        >
                          Cập nhật
                        </Button>
                      </Box>
                    </Box>
                  </Paper>
                </Box>
              </>
            )}
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}
