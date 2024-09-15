import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';
import Header from './Components/Common/Header';
import Footer from './Components/Common/Footer';
import Services from './Components/Services/Services';
import Contact from './Components/Contact/Contact';

function App() {
  const [company, setCompany] = useState("SpyTech Cognitive Solutions");

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header com={company} />
        <main className="flex-grow mt-16">
          <Routes>
            <Route path="/" element={<Dashboard com={company} />} />
            <Route path="/services" element={<Services com={company} />} />
            <Route path="/services" element={<Services com={company} />} />
            <Route path="/contact" element={<Contact com={company} />} />
          </Routes>
        </main>
        <Footer com={company} />
      </div>
    </Router>
  );
}

export default App;
