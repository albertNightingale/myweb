import React from 'react';
import { 
    AppBar, 
    Avatar, 
    Button, 
    Typography, 
    Toolbar,
    Box,
    Link
} from '@mui/material';

class Header extends React.Component {


    getOtherPanels() {
        const navItems = ["About", "Project", "Resume", "Contact"];
        const linkStyle = {
            textDecoration: 'none',
            color: 'white',
        };
        const listOfNavs = navItems.map(
            (item, index) => 
            <Button key={item} >
                <Link 
                href={item.toLowerCase()} 
                sx={linkStyle}>
                    <Typography variant="caption" >
                        {item.toLowerCase()}
                    </Typography>
                </Link>
            </Button>
        );
        return (<Box>
                {listOfNavs}
            </Box>);
    }

    render() {


        return (
            <Box sx={{ display: "flex" }}>
                <AppBar component="nav"  >
                    <Toolbar 
                    sx={{
                        display: 'flex', 
                        justifyContent: 'space-between'
                    }}>     
                        <Box sx={{
                            display: 'flex', 
                            flexDirection: 'column', 
                            alignItems: 'center'}}>
                            <Avatar />
                            <Typography
                                component="div"
                            >
                                Albert Liu
                            </Typography>
                        </Box>

                        {this.getOtherPanels()}
                    </Toolbar>
                </AppBar>
          </Box>
        );
    }
}
export default Header;