import './App.css';
import { useState, React } from 'react';
import Dashboard from './Components/Dashboard/Dashboard';
import Header from './Components/Common/Header';
import Footer from './Components/Common/Footer';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function App() {
  const [company, setCompany] = useState("SpyTech Cognitive Solutions");
  return (
    <div>
      <Header com={company}/>
      <Dashboard com={company}/>
      {/* <footer name={company}/> */}
      <Footer com={company}/>
    </div>
  );
}

export default App;
