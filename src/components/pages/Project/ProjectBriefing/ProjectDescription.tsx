import React from 'react';

export default function ProjectDescription({ description }: { description: string }) {
  return <div className="text-sm">{description.length > 203 ? description.slice(0, 200) + '...' : description}</div>;
}
