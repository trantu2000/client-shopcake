
import { Badge, Divider, ListItemButton, ListItemIcon } from '@mui/material'
import React from 'react'
import { ActionIconsContainerDesktop, ActionIconsContainerMobile, MyList } from '../../styles/appbar'
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
import { Colors } from '../../styles/theme';

const ActionsMobile = ({ matches }) => {

    const Component = matches ? ActionIconsContainerMobile : ActionIconsContainerDesktop;


    return (
        <Component>
            <MyList type="row">
                <ListItemButton
                    sx={{
                        justifyContent: "center",
                    }}
                >
                    <ListItemIcon
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            color: matches && Colors.secondary,
                        }}
                    >
                        <Badge badgeContent={4} color="secondary">
                            <ShoppingCartIcon />
                        </Badge>
                    </ListItemIcon>
                </ListItemButton>
                <Divider orientation="vertical" flexItem />
                <ListItemButton
                    sx={{
                        justifyContent: "center",
                    }}
                >
                    <ListItemIcon
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            color: matches && Colors.secondary,
                        }}
                    >
                        <Badge badgeContent={4} color="secondary">
                        <FavoriteIcon />
                        </Badge>
                    </ListItemIcon>
                </ListItemButton>
                <Divider orientation="vertical" flexItem />
                <ListItemButton
                    sx={{
                        justifyContent: "center",
                    }}
                >
                    <ListItemIcon
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            color: matches && Colors.secondary,
                        }}
                    >
                        <PersonIcon />
                    </ListItemIcon>
                </ListItemButton>
            </MyList>
        </Component>
    )
}

export default ActionsMobile