import React from 'react';
import CoursePage from '../src/app/components/CoursePage';
import jsonData from '../src/app/components/data/info.json'; 
import '../src/app/components/CoursePage.module.css';
import '@fortawesome/fontawesome-free/css/all.css';
const HomePage = () => {
    console.log(jsonData);
  return (
    <div>
      <CoursePage data={jsonData}  />
    
    </div>
  );
};

export default HomePage;

