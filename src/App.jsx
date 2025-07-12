import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './pages/SıgnPage';
import Dashboard from './pages/Dashboard';
import UnderConstruction from './pages/UnderConstruction';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path='/construction' element={<UnderConstruction />}/>
      </Routes>
    </Router>
  );
}

export default App;