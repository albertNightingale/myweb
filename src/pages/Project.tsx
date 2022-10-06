import { Box, Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material';
import React from 'react';

class Project extends React.Component {

    getCardContent(project: string) {
        return (
            <React.Fragment>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {project}
                    </Typography>
                    <Typography variant="h5" component="div">
                        hi
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        look
                    </Typography>
                    <Typography variant="body2">
                        well meaning and kindly.
                        <br />
                        {'"a benevolent smile"'}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </React.Fragment>
        );
    }

    getGrid() {
        const projectList = ["tank war", "nightingale-ai", "portfolio", "LoneLand", "mailchimpUploader"]
        
        const grid_arr = projectList.map((project) => {
            return (
                <Grid item xs={6} sm={6} md={6}>
                    <Card variant="outlined">
                        {this.getCardContent(project)}
                    </Card>
                </Grid>
            )
        });
        
        return grid_arr;
    }


    render() {
        return (
            <Grid container spacing={{ xs: 6, md: 6 }} columns={{ xs: 6, sm: 8, md: 12 }}>
                {this.getGrid()}
            </Grid>
        );
    }
}

export default Project;