import React from 'react';

type sectionTitleProp = { sectionName: string };
export default function SectionTitle({ sectionName }: sectionTitleProp) {
  return <h1 className="font-bold text-4xl pl-6 py-3 text-slate-100">{sectionName}</h1>;
}
