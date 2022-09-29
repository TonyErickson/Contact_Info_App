import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Home from './components/Home';
import AddEditContacts from './components/AddEdit';
import About from './components/About';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/header';
import ReviewForm from './components/ReviewForm';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/add" element={<AddEditContacts/>} />
          <Route path="/update/:id" element={<AddEditContacts/>} />
          <Route path="/reviewform" element={<ReviewForm />} />
          <Route path="/about-us" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
<Home />

export default App;
