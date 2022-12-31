import SectionTitle from "../../components/SectionTitle";
import recommendationList, { Recommendation } from "../../data/recommendations";

type PropType = {
  recommendation: Recommendation;
};

function RecommendationCard({ recommendation: rec }: PropType) {
  const recKey = `${rec.recommender}@${rec.role}@${rec.company}`;

  return (
    <div
      key={recKey}
      className="flex p-l-5 flex-col bg-red-300 px-1 py-1 rounded-lg"
    >
      <div className="text-2xl">{rec.recommender}</div>
      <div className="text-xl text-zinc-700">{`${rec.role} at ${rec.company}`}</div>
      <div className="text-base">{rec.recommendation}</div>
    </div>
  );
}

export default function RecommendationSection(props: any) {
  const recommendationComponentList = recommendationList.map(
    (rec: Recommendation) => {
      return <RecommendationCard recommendation={rec} />;
    }
  );
  return (
    <div className="flex flex-col bg-sky-800">
      <SectionTitle sectionName="Recommendations" />
      <div className="grid grid-cols-2 gap-4">
        {recommendationComponentList}
      </div>
    </div>
  );
}

/* 
<Grid item xs={12} sm={12} md={12}>
<Typography variant="h4" sx={{ color: "white" }}>
  Recommendations
</Typography>
</Grid> 
*/
