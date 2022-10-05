import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

import './index.css';

import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import About from './components/pages/About';
import Project from './components/pages/Project';
import Contact from './components/pages/Contact';
import Resume from './components/pages/Resume';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
      <BrowserRouter> 
      <App >
        <Routes>
          <Route path="/" element={<Project />} />
          <Route path="about" element={<About />} />
          <Route path="project" element={<Project />} />
          <Route path="contact" element={<Contact />}/>
          <Route path="resume" element={<Resume />}/>
        </Routes>
      </App>
      </BrowserRouter>
  </React.StrictMode>
);
