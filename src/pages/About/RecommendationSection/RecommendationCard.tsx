import { Recommendation } from '../../../data/recommendations';

type PropType = {
  recommendation: Recommendation;
};

export function RecommendationCard({ recommendation: rec }: PropType) {
  return (
    <div className="flex flex-col bg-[#b5daff] rounded-[3rem] ">
      <div className="font-semibold px-10 pt-4 text-2xl">{rec.recommender}</div>
      <div className="font-medium px-8 py-1 text-lg text-[#808080]">{`${rec.role} at ${rec.company}`}</div>
      <div className="px-8 py-1 pb-6 text-base">{rec.recommendation}</div>
    </div>
  );
}
