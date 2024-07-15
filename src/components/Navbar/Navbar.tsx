import React, { useState } from "react";
import NavbarLogo from "../../assets/Images/NavbarLogo.png";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {
  AppBar,
  Badge,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  Toolbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { AccountCircle } from "@mui/icons-material";
import { Link, NavLink, useNavigate } from "react-router-dom";

const navItems = ["Home", "Product", "Faq", "Contact"];
const drawerWidth = 240;

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const navbarHandler = (item:any)=> {
    if(item === 'Home') {
      navigate('/Home');
    }
    if(item === 'Product') {
      navigate('/Product');
    }
  }

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
        <Link to={'/'}>
      <img src={NavbarLogo} alt="Navbar Logo" />
        </Link>
      <Divider />
      <List>
        {navItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText sx={{ color: "#000" }} primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    
    </Box>
  );
  return (
    <Box sx={{ display: "flex", justifyContent: 'space-between',minWidth:'415px' }}>
      <AppBar position="sticky" component="nav" sx={{ boxShadow: "none" }}>
        <Toolbar sx={{ backgroundColor: "white",outline:'none'}}>
         
          <Box sx={{ flexGrow: 1, display: 'block' }}>
          <Link to={'/'}>
      <img src={NavbarLogo} alt="Navbar Logo" />
        </Link>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {/* {navItems.map((item) => (
              <NavLink  to={item} key={item} style={{ color: "#000",textDecoration:'none',margin:'20px' }}>
                {item}
              </NavLink>
            ))} */}
            {navItems.map((item) => (
              <Button onClick={()=>navbarHandler(item)} key={item} sx={{ color: "#000" }}>
                {item}
              </Button>
            ))}
          </Box>
          {/* Shopping Cart Icon */}
          <Link to="/cart">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon sx={{ color: "#737373" }} /> */}
            <Badge badgeContent={2} color="error">

            <ShoppingCartIcon sx={{color:'#737373'}} />
            </Badge>
          </IconButton>
          </Link>
        
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon sx={{ color: "#737373" }} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Navbar;
