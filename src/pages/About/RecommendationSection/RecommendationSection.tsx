import SectionTitle from "../../../components/SectionTitle";
import recommendationList, { Recommendation } from "../../../data/recommendations";
import { RecommendationCard } from "./RecommendationCard";

export default function RecommendationSection() {
  const recommendationComponentList = recommendationList.map(
    (rec: Recommendation) => {
      return <RecommendationCard recommendation={rec} />;
    }
  );
  return (
    <div className="flex flex-col bg-theme">
      <SectionTitle sectionName="Recommendations" />
      <div className="px-3 pb-3 grid grid-cols-3 gap-4">
        {recommendationComponentList}
      </div>
    </div>
  );
}
