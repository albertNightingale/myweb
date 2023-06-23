import React from 'react';
import AboutMeDescription from './AboutMeDescription';
import AboutMeProfile from './AboutMeImage';

export default function AboutMe() {
  return (
    <div className="flex flex-row bg-[#b5daff] pt-1 pb-1">
      <AboutMeProfile />
      <div className="basis-4/5	flex flex-col font-mono p-2 text-center">
        <div className="text-8xl font-bold text-zinc-900 tracking-widest ">Albert Liu</div>
        <div className="text-3xl text-[#808080]">Amazon SDE | University of Utah</div>
        <AboutMeDescription />
      </div>
    </div>
  );
}
