import React from 'react';
import {
  Routes,
  Route
} from 'react-router-dom';

import IndexPage from './pages/Index.js';
import StemLabPage from './pages/Stem_lab.js';
import SignUp from './pages/signup/index.js';
import RequestDemo from './pages/request-demo/index.js';


function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/request-demo" element={<RequestDemo />} />
    </Routes>
  );
}

export default App;
