import { Card, CardContent, CardHeader, Stack, Typography } from '@mui/material';
import React from 'react';

import recommendations, {Recommendation} from '../data/recommendations';

class About extends React.Component {

    getRecommendaions() {

        const recommendationsHTMLList = recommendations.map((recommendation: Recommendation) => {
            return (
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
            );
        });

        return recommendationsHTMLList;
    }


    render() {
        return (
            <Stack 
                spacing={2}
                sx={{backgroundColor: 'black'}}
                >
                {this.getRecommendaions()}
            </Stack>
        );
    }
}

export default About;


/*



                    <CardHeader>
                        <Typography variant="subtitle2" sx={{ fontSize: 20 }} color="text.primary" >
                            {recommendation.recommender}
                        </Typography>
                        <Typography variant="h6" sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            {recommendation.role} at {recommendation.company}
                        </Typography>
                    </CardHeader>
*/