import React, { useState } from 'react';
import ProjectGrids from './Project/ProjectGrids';
import ProjectDetailPopUp from './Project/PopUp/';

export default function Project() {
  const [popupProject, setPopUpProject] = useState(null);

  if (popupProject !== null) {
    return (
      <div>
        <ProjectDetailPopUp project={popupProject} closeProjectCB={() => setPopUpProject(null)} />
        <ProjectGrids popUpProjectSetter={setPopUpProject as any} />
      </div>
    );
  }

  return <ProjectGrids popUpProjectSetter={setPopUpProject as any} />;
}
