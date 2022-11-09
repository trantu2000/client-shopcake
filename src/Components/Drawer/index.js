import { Divider, Drawer, IconButton, List, ListItemButton, ListItemText, styled } from '@mui/material'
import React from 'react'
import { Colors, DrawerWidth } from '../../styles/theme';
import CloseIcon from "@mui/icons-material/Close";
import { lighten } from 'polished';
import { useUIContext } from '../../context/ui';

const MiddleDivider = styled((props) => (
    <Divider variant="middle" {...props} />
))``;


const DrawerCloseButton = styled(IconButton)(() => ({
    position: 'absolute',
    top: 10,
    left: DrawerWidth,
    zIndex: 1999,
}));

const AppDrawer = () => {
    const { drawerOpen, setDrawerOpen } = useUIContext();
    
    return (
        <>
            {drawerOpen && (
                <DrawerCloseButton onClick={() => setDrawerOpen(false)}>
                    <CloseIcon
                        sx={{
                            fontSize: "2.5rem",
                            color: Colors.white,
                        }}
                    />
                </DrawerCloseButton>
            )}
            <Drawer open={drawerOpen} >
                <List>
                    <ListItemButton>
                        <ListItemText>Trang chủ</ListItemText>
                    </ListItemButton>
                    <MiddleDivider />
                    <ListItemButton>
                        <ListItemText>Shop</ListItemText>
                    </ListItemButton>
                    <MiddleDivider />
                    <ListItemButton>
                        <ListItemText>Giới thiệu</ListItemText>
                    </ListItemButton>
                    <MiddleDivider />
                    <ListItemButton>
                        <ListItemText>Liên hệ</ListItemText>
                    </ListItemButton>
                    <MiddleDivider />
                    <ListItemButton>
                        <ListItemText>Blog</ListItemText>
                    </ListItemButton>
                </List>
            </Drawer>
        </>

    )
}

export default AppDrawer