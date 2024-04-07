import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import PersonalInfo from './components/PersonalInfo';
import EducationalBackground from './components/EducationalBackground';
import Projects from './components/Projects.js';
import WorkExperience from './components/WorkExperience.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PersonalInfo />
        <EducationalBackground />
        <Projects />
        <WorkExperience />
      </header>
    </div>
  );
}

export default App;
