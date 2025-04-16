import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header.jsx';
import GradeBolos from './components/GradeBolos.jsx';
import Personalizacao from './components/Personalizacao.jsx';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<GradeBolos />} />
        <Route path="/personalizar" element={<Personalizacao />} />
      </Routes>
    </Router>
  );
}

export default App;
