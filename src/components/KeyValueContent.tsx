import React from 'react';

type propType = {
  styleClass: string;
  fieldName: string;
  fieldValue: string;
};

export default function KeyValueContent({ styleClass, fieldName, fieldValue }: propType) {
  return (
    <div className={styleClass}>
      <span className="text-[#909090]">{fieldName}: </span>
      <span className="text-[#0f0f0f]">{fieldValue}</span>
    </div>
  );
}
