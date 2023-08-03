import React from 'react';
import SectionTitle from '../../../SectionTitle';

function EmailForm() {
  return (
    <form className="text-lime-400 flex flex-row">
      <div className="flex flex-col">
        <div className="flex flex-row">
          <label className="">Name</label>
          <input className="" type="text" name="name" />
        </div>
        <div className="flex flex-row">
          <label className="">Email</label>
          <input className="" type="text" name="email" />
        </div>
      </div>
      <div className="">Submit it</div>
    </form>
  );
}

export default function ResumeSection(props: any) {
  return (
    <div className="flex flex-col">
      <SectionTitle sectionName="Resume Download" />
      <EmailForm />
    </div>
  );
}
