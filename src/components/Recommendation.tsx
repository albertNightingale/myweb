import { Grid, Card, CardHeader, CardContent, Typography } from "@mui/material";
import { Recommendation } from "../data/recommendations";

type PropType = {
  recommendation: Recommendation;
};

export default function RecommendationCard({ recommendation: rec }: PropType) {
  return (
    <Grid
      item
      key={`${rec.recommender}@${rec.role}@${rec.company}`}
      xs={12}
      sm={6}
      md={4}
    >
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          title={rec.recommender}
          subheader={`${rec.role} at ${rec.company}`}
        />
        <CardContent>
          <Typography variant="body2" sx={{ fontSize: 12 }}>
            {rec.recommendation}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
