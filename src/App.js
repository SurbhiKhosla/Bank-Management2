<<<<<<< HEAD
import React from 'react';
import EmploymentForm from './form'

import MainForm from './MainForm.jsx'

function App() {
    return (
        <div className="App">
            {/* <AxiosT /> */}
            <EmploymentForm />
            <MainForm/>
        </div>
    );
=======
import './App.css';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage/>} />
      </Routes>

  );
>>>>>>> c5dc9e920848be0aa8c68a950d2090cdc2b79c68
}

export default App;
