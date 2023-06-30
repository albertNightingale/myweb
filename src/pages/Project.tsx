import React, { useState } from 'react';
import ProjectGrids from './Project/ProjectGrids';
import ProjectDetailPopUp from './Project/PopUp/';
import { Project } from '../types';

export default () => {
  const [popupProject, setPopUpProject] = useState(null as null | Project);

  if (popupProject !== null) {
    return (
      <div>
        <ProjectDetailPopUp project={popupProject} closeProjectCB={() => setPopUpProject(null)} />
        <ProjectGrids popUpProjectSetter={setPopUpProject as React.Dispatch<React.SetStateAction<null | Project>>} />
      </div>
    );
  }

  return <ProjectGrids popUpProjectSetter={setPopUpProject as React.Dispatch<React.SetStateAction<null | Project>>} />;
};
