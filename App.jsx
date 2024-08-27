import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Signup from './components/Signup';

import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    
    fetch('http://localhost:8080/signup') 
      .then((response) => response.text())
      .then((data) => setMessage(data))
      .catch((error) => console.error('Error:', error));
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/signup" element={<Signup />} />
          {/* Add other routes here */}
          <Route path="/" element={<h1>{message ? message : 'Loading...'}</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
