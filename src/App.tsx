import React from 'react';

import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';

import Blog from './pages/Blog';
import Project from './pages/Project';
import About from './pages/About';
import { QueryClient, QueryClientProvider } from 'react-query';

function App() {
  const queryClient = new QueryClient();
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Header />
        <Routes>
          <Route path="/" element={<Project />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/project" element={<Project />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </QueryClientProvider>
    </div>
  );
}

export default App;
