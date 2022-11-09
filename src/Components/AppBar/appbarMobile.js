import { IconButton } from '@mui/material'
import React from 'react'
import { AppbarContainer, AppbarHeader } from '../../styles/appbar'
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { useUIContext } from '../../context/ui';
import ActionsMobile from './actionmoible';


const AppBarMobile = ({ matches }) => {
    const { setDrawerOpen,setShowSearchBox} = useUIContext();
    return (
        <AppbarContainer>
            <IconButton onClick={() => setDrawerOpen(true)}>
                <MenuIcon />
            </IconButton>
            <AppbarHeader textAlign={"center"} variant="h6">
                Cake Tú
            </AppbarHeader>
            <IconButton onClick={() => setShowSearchBox(true)}>
                <SearchIcon />
            </IconButton>
            <ActionsMobile matches={matches} />
        </AppbarContainer>
    )
}

export default AppBarMobile