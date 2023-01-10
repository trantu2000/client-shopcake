import {
  Box,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../Redux/Actions/productActions";
import MetaData from "../../Components/MetaData";

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import ProductItem from "../../Components/ProductItem";
import Breadcrumb from "../../Components/Breadcrumb";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Route } from "react-router-dom";
import Search from "./Search";

const Shop = ({ match }) => {
  const {
    loading,
    products,
    error,
    productsCount,
    resPerPage,
    filteredProductsCount,
  } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [category, setCategory] = useState("");

  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  const keyword = match.params.keyword;

  // let count = productsCount;
  // if (keyword) {
  //   count = filteredProductsCount;
  // }

  useEffect(() => {
    dispatch(getProducts(keyword, currentPage, category));
  }, [dispatch, currentPage, keyword, category]);

  const handleChangeOption = (event) => {
    setCategory(event.target.value);
  };

  const categories = [
    "cupcake",
    "redvelvet",
    "biscuit",
    "butter",
    "donut",
    "cookie",
  ];


  return (
    <Container>
      <Box>
        <MetaData title="Bánh" />

        <Box sx={{mt:10}}>
          <Breadcrumb title="Bánh" />
        </Box>

        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{ mb: 4 }}
        >
          {/* Search */}
          <Route render={({ history }) => <Search history={history} />} />
        </Box>

        <Box>
          {loading ? (
            <Box sx={{ ml: "40rem", mb: "20rem", mt: "10rem" }}>
              <CircularProgress />
            </Box>
          ) : (
            <>
              {keyword ? (
                <>
                  <Grid container>
                    <Grid item md={3}>
                      <Box>
                        {/* <FormFilterCategory /> */}
                        <FormControl sx={{ m: 1, width: "14ch" }}>
                          <Select
                            value={category}
                            onChange={handleChangeOption}
                            displayEmpty
                            inputProps={{ "aria-label": "Without label" }}
                          >
                            <MenuItem value="">
                              <em>Tất cả</em>
                            </MenuItem>
                            {categories.map((item) => (
                              <MenuItem key={item} value={item}>
                                {item}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Box>
                    </Grid>
                    <Grid item md={9}>
                      <Grid container>
                        {products.map((product) => (
                          <ProductItem
                            key={product._id}
                            product={product}
                            grid={4}
                          />
                        ))}
                      </Grid>
                    </Grid>
                  </Grid>
                </>
              ) : (
                <Grid container>
                  {products &&
                    products.map((product) => (
                      <ProductItem key={product._id} product={product} grid={3}/>
                    ))}
                </Grid>
              )}
            </>
          )}
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{ mb: 3 }}
        >
          <Box>
            <Stack spacing={2}>
              <Typography>Trang: {currentPage}</Typography>
              <Pagination
                count={3}
                page={currentPage}
                onChange={handleChange}
                color="primary"
              />
            </Stack>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Shop;
