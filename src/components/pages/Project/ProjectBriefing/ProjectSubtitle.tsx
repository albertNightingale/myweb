import React from 'react';

interface ProjectSubtitleProps {
  start: string;
  end: string | undefined;
  onGoing: boolean;
}

export default function ProjectSubtitle({ start, end, onGoing }: ProjectSubtitleProps) {
  const subtitle = `Start since ${start}` + (onGoing ? ' | On going' : `| Done by ${end}`);
  return <div className="text-base text-neutral-500 mt-1 mb-1">{subtitle}</div>;
}
