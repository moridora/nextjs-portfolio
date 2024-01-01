// components/Header.tsx
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ['Home', 'Profile', 'Career', 'Publications', 'Awards', 'Scholarships'];

export function Header(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const drawer = (
    <Box sx={{ textAlign: 'center', background: 'linear-gradient(135deg, #467eea, #76dba2)', color: '#fff', minHeight: '100%' }}>
      <List>
        {navItems.map((item) => (
          <Link href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} key={item} passHref>
            <ListItemButton component="a" sx={{ textAlign: 'center', color: 'white', textDecoration: 'none', '&:hover': { backgroundColor: 'transparent' } }}>
              <Typography variant="h6" fontWeight="bold" sx={{ textDecoration: 'none', fontFamily: 'Poppins, sans-serif' }}>
                {item.toUpperCase()}
              </Typography>
            </ListItemButton>
          </Link>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ background: 'linear-gradient(135deg, #467eea, #76dba2)' }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            {navItems.map((item) => (
              <Link href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} key={item} passHref>
                <Button color="inherit" sx={{ textTransform: 'none', fontWeight: 'bold', color: '#ffffff' }}>
                  <Typography
                    variant="h5"
                    component="div"
                    fontWeight="bold"
                    sx={{
                      flexGrow: 1,
                      display: { xs: 'none', md: 'block' },
                      fontFamily: 'Poppins, sans-serif', // フォントを指定
                    }}>{item.toUpperCase()}</Typography>
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 0 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}
