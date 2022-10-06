import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './index.css';

import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import Blog from './pages/Blog';
import Project from './pages/Project';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
      <BrowserRouter> 
      <App >
        <Routes>
          <Route path="/" element={<Project />} />
          <Route path="blog" element={<Blog />} />
          <Route path="project" element={<Project />} />
          <Route path="contact" element={<Contact />}/>
          <Route path="resume" element={<Resume />}/>
        </Routes>
      </App>
      </BrowserRouter>
  </React.StrictMode>
);
