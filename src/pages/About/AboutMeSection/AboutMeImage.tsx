import React from 'react';

export default function AboutMeProfile() {
  return (
    <div className="-ml-8 basis-1/5 mt-px mb-px">
      <div className="rounded-r-[4.5rem] border-t-[40px] border-r-[40px] border-b-[30px] bg-theme0 border-solid border-theme0">
        <img src={`${process.env.PUBLIC_URL}/img/profile.JPG`} alt="profile" className="rounded-r-[3rem]" />
      </div>
    </div>
  );
}
