import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Cart from './components/Cart/Cart';
import Home from './components/Home/Home';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Products from './components/Products/Products';

function App() {
  return (
    // <div className="App">
     <BrowserRouter>
     <Navbar />
     <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/cart' element={<Cart />} />
      <Route path='/products' element={<Products />} />
      <Route path='*' element={<PageNotFound />} />
     </Routes>
     </BrowserRouter>
    // </div>
  );
}

export default App;
