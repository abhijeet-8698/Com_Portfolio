import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';
import Header from './Components/Common/Header';
import Footer from './Components/Common/Footer';
import Services from './Components/Services/Services';
import Contact from './Components/Contact/Contact';
import Lottie from "react-lottie";
import animationData from "../src/Components/Common/back.json";
import Subscribe from './Components/Subscribe/Sub';

function App() {
  const [company, setCompany] = useState("SpyTech Cognitive Solutions");

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className="relative flex flex-col min-h-screen">
      {/* Lottie Animation Background */}
      <div className="absolute inset-0 z-0">
        <Lottie options={defaultOptions} height="100vh" width="100vw" />
      </div>

      <Router>
        {/* App Content */}
        <div className="relative flex flex-col min-h-screen z-10 bg-transparent">
          <Header com={company} />
          <main className="flex-grow mt-16">
            <Routes>
              <Route path="/" element={<Dashboard com={company} />} />
              <Route path="/Services" element={<Services com={company} />} />
              <Route path="/Contact" element={<Contact com={company} />} />
            </Routes>
          </main>
          <Subscribe/>
          <Footer com={company} />
        </div>
      </Router>
    </div>
  );
}

export default App;
