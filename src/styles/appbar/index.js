import { List, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import { Colors } from "../theme";

export const AppbarContainer = styled(Box)(() => ({
    display: 'flex',
    marginTop: 4,
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2px 8px'
}));

export const AppbarHeader = styled(Typography)(() => ({
    padding: "4px",
    flexGrow: 1,
    fontSize: "2.5em",
    fontFamily: '"Montez", "cursive"',
    color: Colors.secondary,
    // "&:hover": {
    //     animation: `${textPopUpTop} 0.5s cubic-bezier(0.455, 0.030, 0.515, 0.955) both`,
    // },
}));

export const MyList = styled(List)(({ type }) => ({
    display: type === "row" ? "flex" : "block",
    flexGrow: 3,
    justifyContent: "center",
    alignItems: "center",
}));

export const ActionIconsContainerMobile = styled(Box)(() => ({
    display: 'flex',
    background: Colors.shaft,
    position: "fixed",
    bottom: 0,
    left: 0,
    width: '100%',
    alignItems: 'center',
    zIndex: 99,
    borderTop: `1px solid ${Colors.border}`
}));

export const ActionIconsContainerDesktop = styled(Box)(() => ({
    flexGrow: 0,
}));

export const LinkRouter = styled(Link)(({ to }) => ({
    to:to,
    textDecoration: "none",
}));

export const BoxNav = styled(Box)((theme) => ({
    padding: "1em",
    fontSize:"1em",
    color:Colors.white,
    "&:hover": {
        color: Colors.dove_gray
    },
}));






