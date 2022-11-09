import { Box, IconButton, Slide, TextField } from '@mui/material'
import { styled } from '@mui/system'
import React from 'react'
import { useUIContext } from '../../context/ui'
import { Colors } from '../../styles/theme'
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

const SearchBoxContainer = styled(Box)(({ theme }) => ({
    position: "absolute",
    background: Colors.primary,
    zIndex: 9999,
    opacity: 0.9,
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}))
const SearchField = styled(TextField)(({ theme }) => ({
    ".MuiInputLabel-root": {
        color: Colors.secondary,
    },
    ".MuiInput-root": {
        fontSize: '1rem',
        [theme.breakpoints.up('md')]: {
            fontSize: '2rem',
        },
        color: Colors.secondary,
    },
    ".MuiInput-root::before": {
        borderBottom: `1px solid ${Colors.secondary}`,
    },
    padding: "0 0 0 40px",
}));

const SearchBox = () => {

    const { showSearchBox, setShowSearchBox } = useUIContext();
    //console.log(showSearchBox);
    return (
        <Slide direction="down" in={showSearchBox} timeout={500}>
            <SearchBoxContainer>
                <SearchField
                    color="secondary"
                    variant="standard"
                    fullWidth
                    placeholder="Tìm kiếm..."
                />
                <IconButton>
                    <SearchIcon sx={{ fontSize: { xs: '2rem', md: "3rem" } }} color="secondary" />
                </IconButton>
                <IconButton
                    sx={{
                        position: "absolute",
                        top:10,
                        right:10,
                    }}
                    onClick={()=>setShowSearchBox(false)}
                >
                    <CloseIcon sx={{ fontSize: "4rem" }} color="secondary" />
                </IconButton>
            </SearchBoxContainer>
        </Slide>
    )
}

export default SearchBox