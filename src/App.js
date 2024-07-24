import React from 'react';
import {
  Routes,
  Route
} from 'react-router-dom';

import IndexPage from './pages/Index.js';
import StemLabPage from './pages/Stem_lab.js';

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
         
      <Route path="/stemlab" element={<StemLabPage />} />
    </Routes>
  );
}

export default App;
