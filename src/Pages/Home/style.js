import { styled } from "@mui/system";
import { Colors } from "../../styles/theme";

export const TypographyTileIntro = styled("Typography")(({ theme }) => ({
    color: Colors.primary,
    fontSize: 19,
    fontWeight: 600,
    // border: "1px solid black"
    // [theme.breakpoints.down("md")]: {
    //   width: "350px",
    // },
    [theme.breakpoints.down("sm")]: {
      fontSize: 15,
    },
  }));
  
  export const TypographySubTileIntro = styled("Typography")(({ theme }) => ({
    color: Colors.black,
    fontSize: 43,
    fontWeight: 600,
    fontFamily: "Montez",
    mt: 2,
    mb: 2,
    // border: "1px solid black"
    // [theme.breakpoints.down("md")]: {
    //   width: "350px",
    // },
    [theme.breakpoints.down("sm")]: {
      fontSize: 25,
    },
  }));
  
  export const TypographyContentIntro = styled("Typography")(({ theme }) => ({
    mt: 3,
    color: Colors.black,
    fontSize: 16,
    fontWeight: 400,
    // border: "1px solid black"
    // [theme.breakpoints.down("md")]: {
    //   width: "350px",
    // },
    [theme.breakpoints.down("sm")]: {
      fontSize: 15,
    },
  }));