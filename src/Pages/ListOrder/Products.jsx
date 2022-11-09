import styled from "@emotion/styled";
import { Box, Divider, Paper, Typography } from "@mui/material";
import React, { Fragment } from "react";
import { Colors } from "../../styles/theme";

const Products = ({ products, price, orderStatus, id }) => {


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

  return (
    <div>
      <Fragment>
        <Box>
          <Paper elevation={2} sx={{ mt: 3 }}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              sx={{
                p: 2,
              }}
            >
              <Box display="flex">
                <Box>
                  <Typography variant="h6">#ID: {id}</Typography>
                </Box>
              </Box>
              <Box display="flex">
                <Box sx={{ mr: 2 }}>
                  <Typography variant="h6">
                    {orderStatus &&
                    orderStatus &&
                    String(orderStatus).includes("Giao hàng thành công") ? (
                      <div style={{ color: "green" }}>{orderStatus}</div>
                    ) : (
                      <div style={{ color: "red" }}>{orderStatus}</div>
                    )}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    borderLeft: "1px solid black",
                    pl: 2,
                    color: "green",
                  }}
                >
                  <Typography variant="h6">Đã thanh toán</Typography>
                </Box>
              </Box>
            </Box>

            <Divider />

            {products.map((product) => (
              <>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  sx={{
                    p: 1,
                  }}
                >
                  <Box display="flex">
                    <Box
                      sx={{
                        mr: 2,
                        ml: 3,
                      }}
                    >
                      <ProductImageShopingCard
                        src={product.image}
                        alt={product.name}
                      />
                    </Box>
                    <Box>
                      <Typography variant="h6">{product.name}</Typography>
                      <Typography variant="subtitle1">
                        x {product.quantity}
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      mr: 3,
                    }}
                  >
                    <Typography>
                      {product.price.toLocaleString("vi", {
                        style: "currency",
                        currency: "VND",
                      })}
                    </Typography>
                  </Box>
                </Box>
                <Divider sx={{ ml: 3, mr: 3 }} />
              </>
            ))}
        

            <Box
              display="flex"
              justifyContent="end"
              sx={{
                p: 2,
              }}
            >
              <Box display="flex" alignItems="center">
                <Box>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      mr: 2,
                    }}
                  >
                    Tổng số tiền:
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "18px",
                      color: "red",
                    }}
                  >
                    {price.toLocaleString("vi", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Paper>
        </Box>
      </Fragment>
    </div>
  );
};

export default Products;
