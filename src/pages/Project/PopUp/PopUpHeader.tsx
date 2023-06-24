import React from 'react';

interface PopUpHeaderProps {
  closeProjectCB: () => void;
  projectName: string;
}

export default function PopUpHeader({ closeProjectCB, projectName }: PopUpHeaderProps) {
  return (
    <div className="basis-1/12 flex flex-row justify-between bg-theme0 pl-3">
      <div className="text-xl pt-1">{projectName}</div>
      <button onClick={() => closeProjectCB()}>
        <img src="/img/close.jpeg" alt="close" className="w-10 h-10" />
      </button>
    </div>
  );
}
