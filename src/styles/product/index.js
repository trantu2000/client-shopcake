import styled from "@emotion/styled";
import { Button, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import { slideInBottom, slideInRight } from "../../animation";
import { Colors } from "../theme";

export const Product = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
        position: "relative",
    }

}))

export const ProductImage = styled('img')(({ src, theme }) => ({
    src: `url(${src})`,
    width: "100%",
    // height: "270px",
    background: Colors.light_gray,
    padding: "10px",
    [theme.breakpoints.down("md")]: {
        width: "80%",
        padding: '24px'
    }

}))

export const ProductMetaWrapper = styled(Box)(({ theme }) => ({
    padding: 4,
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
}))
export const ProductActionButton = styled(IconButton)(() => ({
    background: Colors.white,
    margin: 4,
}));
export const ProductFavButton = styled(ProductActionButton)(({ isfav, theme }) => ({
    color: isfav ? Colors.primary : Colors.light,
    padding:"0.5rem",
    marginTop:"1.5rem",
    marginRight:"1rem",
    [theme.breakpoints.up("md")]: {
        position: "absolute",
        right: 0,
        top: 0,
        
    },
}));

export const ProductActionWrapper = styled(Box)(({ show, theme }) => ({
    [theme.breakpoints.up("md")]: {
        display: show ? 'visible' : 'none',
        position: "absolute",
        right: 0,
        top: '20%',
        animation: show && `${slideInRight} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
    }
}))

export const ProductAddToCart = styled(Button, {
    shouldForwardProp: (prop) => prop !== "show",
})(({ show, theme }) => ({
    width: "170px",
    fontSize: "12px",
    [theme.breakpoints.up("md")]: {
        position: "absolute",
        bottom: "2%",
        width: "300px",
        padding: "10px 5px",
        animation:
            show &&
            `${slideInBottom} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
    },
    background: Colors.secondary,
    opacity: 0.9,
}));