import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from "./App";
import "./css/index.css";

import Home from './pages/Home.jsx';
import Filmes from './pages/Filmes.jsx';
import Pesquisa from './pages/Pesquisa.jsx';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/Filmes/:id" element={<Filmes />} />
          <Route path="/pesquisa" element={<Pesquisa />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
