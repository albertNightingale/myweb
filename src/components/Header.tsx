import React from 'react';
import { AppBar, Avatar, Button, Typography, Toolbar, Box, Link } from '@mui/material';

class Header extends React.Component {
  getOtherPanels() {
    const navItems = ['Project', 'Blog', 'About'];
    const linkStyle = {
      textDecoration: 'none',
      color: 'white',
    };
    const listOfNavs = navItems.map((item, index) => (
      <Button key={item}>
        <Link href={`/${item.toLowerCase()}`} sx={linkStyle}>
          <Typography variant="caption">{item.toLowerCase()}</Typography>
        </Link>
      </Button>
    ));
    return <Box>{listOfNavs}</Box>;
  }

  getNavBar() {
    const boxStyle = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    };

    const linkStyle = {
      textDecoration: 'none',
      color: 'white',
    };
    return (
      <Box sx={boxStyle}>
        <Link href="/" sx={linkStyle}>
          <Avatar alt="profile img" src={`${process.env.PUBLIC_URL}/img/profile.JPG`} />
          <Typography component="div">Albert Liu</Typography>
        </Link>
      </Box>
    );
  }

  render() {
    const appBarStyle = {
      position: 'relative',
      width: '100%',
      height: '20%',
    };

    return (
      <AppBar component="nav" sx={appBarStyle}>
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          {this.getNavBar()}
          {this.getOtherPanels()}
        </Toolbar>
      </AppBar>
    );
  }
}
export default Header;
