import Favorite from '@mui/icons-material/Favorite'
import { Stack, Tooltip } from '@mui/material'
import React, { useState } from 'react'
import { 
  Product, 
  ProductActionButton, 
  ProductActionWrapper, 
  ProductAddToCart, 
  ProductFavButton, 
  ProductImage 
} from '../../styles/product'
import ProductMeta from './ProductMeta'
import ShareIcon from "@mui/icons-material/Share";
import FitScreenIcon from "@mui/icons-material/FitScreen";
import useDialogModal from '../../hooks/useDialogModal'
import ProductDetail from '../ProductDetail'

const SingleProduct = ({ product, matches }) => {
  const [ProductDetailDialog, showProductDetailDialog] = useDialogModal(ProductDetail);

  const [ setShowOptions] = useState(false);
  const handleMouseEnter = () => {
    setShowOptions(true)
  }
  const handleMouseLeave = () => {
    setShowOptions(false);
  };
  return (
    <>
      <Product onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <ProductImage src={product.image} />
        <ProductMeta product={product} matches={matches} />
        <ProductActionWrapper>
          <Stack direction={matches ? "row" : "column"}>
            <ProductFavButton isfav={0}>
              <Favorite />
            </ProductFavButton>
            <ProductActionButton>
              <Tooltip placement="left" title="chia sẻ">
                <ShareIcon />
              </Tooltip>
            </ProductActionButton>
            <ProductActionButton onClick={() => showProductDetailDialog()}>
              <Tooltip placement="left" title="chi tiết sản phẩm">
                <FitScreenIcon color="primary"/>
              </Tooltip>
            </ProductActionButton>

          </Stack>
        </ProductActionWrapper>
        <ProductAddToCart variant='contained'>Thêm vào giỏ hàng</ProductAddToCart>
        
      </Product>
      <ProductDetailDialog product={product} />
    </>
  )
}

export default SingleProduct