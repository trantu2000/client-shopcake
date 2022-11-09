import React, { useState } from 'react'
import { Product, ProductActionButton, ProductActionWrapper, ProductAddToCart, ProductFavButton, ProductImage } from '../../styles/product'
import ProductMeta from './ProductMeta'
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Stack, Tooltip } from '@mui/material';
import ShareIcon from "@mui/icons-material/Share";
import FitScreenIcon from "@mui/icons-material/FitScreen";
import useDialogModal from '../../hooks/useDialogModal';
import ProductDetail from '../ProductDetail';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addItemToCart } from '../../Redux/Actions/cartActions';
import { Link } from 'react-router-dom';

const SingleProductDesktop = ({ product, matches, match }) => {
    const [ProductDetailDialog, showProductDetailDialog] = useDialogModal(ProductDetail);


    const [showOptions, setShowOptions] = useState(false);
    const [quantity, setQuantity] = useState(1)
    const dispatch = useDispatch();

    const handleMouseEnter = () => {
        setShowOptions(true);
    }

    const handleMouseLeave = () => {
        setShowOptions(false)
    }
    //const { products,  productsCount, resPerPage, filteredProductsCount } = useSelector(state => state.products)
    //const { loading, error, product } = useSelector(state => state.productdetail);

    const addToCart = () => {
        dispatch(addItemToCart(product._id, quantity));
        toast.success('Item Added to Cart !', {
            position: toast.POSITION.TOP_RIGHT
        });
        // console.log(quantity);
        // console.log(match.params.id);
    }

    return (
        <>
            <Product onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <ProductImage src={product.images[0].url} />
                <ProductFavButton>
                    <FavoriteIcon />
                </ProductFavButton>
                {(showOptions || matches) && (
                    <ProductAddToCart
                        show={showOptions}
                        variant="contained"
                        disabled={product.stock === 0} onClick={addToCart}
                    >
                        Thêm vào giỏ hàng
                    </ProductAddToCart>
                )}
                <ProductActionWrapper show={showOptions || matches}>
                    <Stack direction={matches ? "row" : "column"}>
                        <ProductActionButton>
                            <Tooltip placement="left" title="chia sẻ">
                                <ShareIcon color="primary" />
                            </Tooltip>
                        </ProductActionButton>
                        <Link to={`/product/${product._id}`}
                        >
                            <ProductActionButton>
                                <Tooltip placement="left" title="chi tiết sản phẩm">
                                    <FitScreenIcon color="primary" />
                                </Tooltip>
                            </ProductActionButton>
                        </Link>


                    </Stack>
                </ProductActionWrapper>
            </Product>
            <ProductMeta product={product} />
            <ProductDetailDialog product={product} />
        </>
    )
}

export default SingleProductDesktop