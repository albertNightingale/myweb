import { Box, Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material';
import React from 'react';

import { ProjectBriefing } from '../components/ProjectBriefing';

class Project extends React.Component {
    getGrid() {
        const projectList = ["tank war", "nightingale-ai", "portfolio", "LoneLand", "mailchimpUploader"]
        
        const grid_arr = projectList.map((project) => {
            return (
                <Grid item xs={6} sm={6} md={6}>
                    <ProjectBriefing project={project} />
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