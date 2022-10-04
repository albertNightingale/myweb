import React from 'react';
import { 
    AppBar, 
    Avatar, 
    Button, 
    Typography, 
    Toolbar,
    Box
} from '@mui/material';

import { Link } from "react-router-dom";


class Header extends React.Component {
    render() {

        const navItems = ["About", "Project", "Resume", "Contact"];

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
                        <Box>
                        {navItems.map((item) => (
                            <Button key={item} sx={{ color: "#fff" }}>
                                {item}
                                <Link to={item.toLowerCase()} />
                            </Button>
                        ))}
                        </Box>
                    </Toolbar>
                </AppBar>
          </Box>
        );
    }
}

export default Header;