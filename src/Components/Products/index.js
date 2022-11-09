import { Box, Button, Container, Grid, useMediaQuery } from '@mui/material'
import React from 'react'
import { useTheme } from "@mui/material/styles";
import SingleProduct from './SingleProduct';
import SingleProductDesktop from './SingleProductDesktop';
import { useSelector } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress'

const Products = () => {

    const { loading, products, error, productsCount, resPerPage, filteredProductsCount } = useSelector(state => state.products)

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"));

    const renderProducts = products.map((product) => (
        <Grid item key={product._id} xs={2} sm={4} md={4} display="flex" flexDirection={'column'} alignItems="center">
            {matches ? (
                <SingleProduct product={product} matches={matches} />
            ) : (
                <SingleProductDesktop product={product} matches={matches} />
            )}
        </Grid>
    ))

    return (
        <Container>
            <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                justifyContent="center"
                sx={{ 
                    margin: `40px 4px 40px 4px`,
                    p:7,
                    
                }}
                columns={{ xs: 4, sm: 8, md: 12 }}
            >
                {loading ? (
                    <Box sx={{

                        display: 'flex',
                        justifyContent: "center",
                        alignItems: "center",
                        mt:10,
                        mb:7

                    }}>
                        <CircularProgress />
                    </Box>
                ) :
                    <>
                        {renderProducts}
                    </>
                }

            </Grid>
        </Container>
    )
}

export default Products