import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  Typography,
  Box,
} from "@mui/material";
import SectionTitle from "../../components/SectionTitle";
import recommendationList, { Recommendation } from "../../data/recommendations";

type PropType = {
  recommendation: Recommendation;
};

function RecommendationCard({ recommendation: rec }: PropType) {
  return (
    <Grid
      item
      key={`${rec.recommender}@${rec.role}@${rec.company}`}
      xs={6}
      sm={6}
      md={6}
      sx={{ padding: "20px" }}
    >
      <Card sx={{ maxWidth: "100%" }}>
        <CardHeader
          title={rec.recommender}
          subheader={`${rec.role} at ${rec.company}`}
        />
        <CardContent>
          <Typography variant="body2" sx={{ fontSize: 20 }}>
            {rec.recommendation}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default function RecommendationSection(props: any) {
  const recommendationComponentList = recommendationList.map(
    (rec: Recommendation) => {
      return <RecommendationCard recommendation={rec} />;
    }
  );
  return (
    <Box>
      <SectionTitle sectionName="Recommendations" />
      <Grid container>{recommendationComponentList}</Grid>
    </Box>
  );
}

/* 
<Grid item xs={12} sm={12} md={12}>
<Typography variant="h4" sx={{ color: "white" }}>
  Recommendations
</Typography>
</Grid> 
*/
