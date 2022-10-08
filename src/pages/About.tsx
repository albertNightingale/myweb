import { Card, CardContent, CardHeader, Grid, Stack, Typography } from '@mui/material';
import React from 'react';

import recommendations, {Recommendation} from '../data/recommendations';

class About extends React.Component {

    getRecommendaions() {

        const recommendationsHTMLList = recommendations.map((recommendation: Recommendation) => {
            return (
                <Grid item xs={12} sm={6} md={4}>
                    <Card sx={{maxWidth: 345}}>
                        <CardHeader 
                            title={recommendation.recommender}
                            subheader={`${recommendation.role} at ${recommendation.company}`}
                            />
                        <CardContent>
                            <Typography variant="body2" sx={{fontSize: 12}}>
                                {recommendation.recommendation}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            );
        });

        return recommendationsHTMLList;
    }


    render() {
        return (
            <Stack 
                sx={{backgroundColor: 'black'}} >

                <Typography variant="h4" sx={{color: 'white'}}>
                    About Me
                </Typography>

                <Grid container 
                    spacing={{ xs: 3, sm: 3, md: 3 }}
                    columns={{ xs: 12, sm: 12, md: 12}} >
                    <Grid item 
                        xs={12} sm={12} md={12} >
                        <Typography variant="h4" sx={{color: 'white'}}>
                            Recommendations
                        </Typography>
                    </Grid>                    
                    {this.getRecommendaions()}
                </Grid>

            </Stack>
        );
    }
}

export default About;
