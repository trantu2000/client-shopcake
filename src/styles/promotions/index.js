import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { Colors } from "../theme";

export const PromotionsContainer = styled(Box)(({ theme }) => ({
    [theme.breakpoints.up("md")]: {
        padding: "15px 0px 15px 0px",
    },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "12px 0px 12px 0px",
    overflow: "hidden",
    background: Colors.primary,
}));
export const MessageText = styled(Typography)(({ theme }) => ({
    fontFamily: '"Montez", "cursive"',
    [theme.breakpoints.up("md")]: {
        fontSize: "2rem",
    },
    color: Colors.white,
    fontSize: "1.3rem",
}));



