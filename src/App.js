import './App.css';
import Home from './Components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NewsLetter from './Components/Newsletter';
import About from './Components/About';
import Detail from './Components/Home/Details';
import { useState } from 'react';


function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/newsletter" element={<NewsLetter />} />
          <Route path="/coctail/:id" element={<Detail />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
