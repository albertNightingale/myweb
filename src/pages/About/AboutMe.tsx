import React from "react";

export default function AboutMe(props: any) {
  return (
    <div className="flex flex-row bg-red-500">
      <img
        src={`${process.env.PUBLIC_URL}/img/profile.JPG`}
        alt="profile"
        width="25%"
      />
      <div className="flex flex-col font-mono pl-2">
        <div className="text-8xl font-bold text-zinc-900 tracking-widest">
          Albert Liu
        </div>
        <div className="text-3xl text-zinc-600/100">
          Graduated from University of Utah
        </div>
        <div className="text-base">
          Some more description about me goes here
        </div>
      </div>
    </div>
  );
}
