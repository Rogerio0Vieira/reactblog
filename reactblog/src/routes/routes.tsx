import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import { UserList } from '../components/UserList/UserList';
import ArticleDetails from '../components/Article/ArticleDetails/ArticleDetails';


const RoutesApp = () => (
  <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Home/>} />
        
      </Routes>
    </BrowserRouter>
);