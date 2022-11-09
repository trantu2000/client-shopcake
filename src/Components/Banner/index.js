
import React, { useEffect, useState } from 'react'
import { BannerContainer, BannerContent, BannerDescription, BannerImage, BannerShopButton, BannerTitle } from '../../styles/banner'

const srcs = [
    {
        "src": "https://res.cloudinary.com/da5zt66t6/image/upload/v1664427313/products-cake/product-8_jsuhnb.jpg",
        "title": "Cupcake",
        "name": "",
        "description": "Cupcake là loại bánh nướng trong khuôn nhỏ nên có kích thích nhỏ, phục vụ khẩu phần 1 người ăn, cốt bánh mềm, trọng lượng nhẹ, vị ngọt, thường được phủ một lớp bông kem dày bên trên và trang trí bằng đa dạng các nguyên liệu."
    },
    {
        "src": "https://res.cloudinary.com/da5zt66t6/image/upload/v1664427313/products-cake/product-6_zgpipc.jpg",
        "title": "Cupcake",
        "name": "",
        "description": "Cupcake là loại bánh nướng trong khuôn nhỏ nên có kích thích nhỏ, phục vụ khẩu phần 1 người ăn, cốt bánh mềm, trọng lượng nhẹ, vị ngọt, thường được phủ một lớp bông kem dày bên trên và trang trí bằng đa dạng các nguyên liệu."
    },
    {
        "src": "https://res.cloudinary.com/da5zt66t6/image/upload/v1664427313/products-cake/product-5_bqk3kk.jpg",
        "title": "Cupcake",
        "name": "",
        "description": "Cupcake là loại bánh nướng trong khuôn nhỏ nên có kích thích nhỏ, phục vụ khẩu phần 1 người ăn, cốt bánh mềm, trọng lượng nhẹ, vị ngọt, thường được phủ một lớp bông kem dày bên trên và trang trí bằng đa dạng các nguyên liệu."
    }
];
const Banner = () => {

    const [Index, setIndex] = useState(0);

    useEffect(() => {

        const intervalId = setInterval(() => {
            setIndex((i) => (i + 1) % srcs.length);
        }, 5000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (

        <BannerContainer >
            <BannerImage src={srcs[Index].src} />
            <BannerContent>
                {/* <Typography variant="h6">Huge Collection</Typography> */}
                <BannerTitle variant="h2">
                    Cupcake
                </BannerTitle>

                <BannerDescription variant="subtitle">
                    Cupcake là loại bánh nướng trong khuôn nhỏ nên có kích thích nhỏ, phục vụ khẩu phần 1 người ăn, cốt bánh mềm, trọng lượng nhẹ, vị ngọt, thường được phủ một lớp bông kem dày bên trên và trang trí bằng đa dạng các nguyên liệu
                </BannerDescription>
                <BannerShopButton color="primary">Xem thêm</BannerShopButton>
            </BannerContent>
        </BannerContainer>
    )
}

export default Banner