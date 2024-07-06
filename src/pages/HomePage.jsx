import React from 'react';
import Navbar from '../components/Navbar';
import AboutUs from '../components/AboutUsCard';
import ApplyNow from '../components/ApplyNowButton';
import ReadDocText from '../components/DocumentsToReview';
import DocsToRead from '../components/DocsToRead';
import NeedHelp from '../components/NeedHelp';
import SomeText from '../components/SomeText';
import StartApplication from '../components/StartApplicationButton';
import Form from '../components/Form';
import ProgressBar from '../components/ProgressBar';
import '../css/startup.css';
import Dashboard from './Dashboard';
import OtpInput from '../components/OtpInput';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  return (
    <div>
      <div className="appContainer">
        <Navbar />
        {isLoggedIn ? (
          <Dashboard />
        ) : (
          <>
            <button onClick={() => navigate('/')} className="back-button">
              <i className="fas fa-arrow-left"></i> Back
            </button>
            <OtpInput />
            <AboutUs />
            <SomeText />
            <ApplyNow />
            <ReadDocText />
            <DocsToRead />
            <StartApplication />
            <NeedHelp />
            <br />
            <ProgressBar />
            <Form />
          </>
        )}
      </div>
    </div>
  );
}

export default HomePage;
