import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Perfume } from './darko-perfume';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { About } from './about';
import { Services } from './services';
import { Blog } from './blog';
import { FAQ } from './FAQ';
import { Contact } from './contact';
import { Shop } from './shop';
import { Page } from './page'
import { Blog2 } from './blog2';
import { Header } from './header';
import { Footer } from './footer';
import { Reg } from './reg';
import { Login } from './login';
import { Wishlist } from './wishlist';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Perfume />} />
      <Route index path='/darko-perfume' element={<Perfume />} />
      <Route index path='/wishlist/darko-perfume' element={<Perfume />} />
      <Route index path='/login/darko-perfume' element={<Perfume />} />
      <Route index path='/login/reg/darko-perfume' element={<Perfume />} />
      <Route path='/about' element={<About />} />
      <Route path='/services' element={<Services />} />
      <Route path='/blog' element={< Blog />} />
      <Route path='/FAQ' element={<FAQ />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/shop' element={<Shop />} />
      <Route path='/page' element={<Page />} />
      <Route path='/blog2' element={<Blog2 />} />
      <Route path='/login' element={<Login />} />
      <Route path='/login/reg' element={<Reg />} />
      <Route path='/wishlist' element={<Wishlist />} />
     
    </Routes>
    <Footer />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
