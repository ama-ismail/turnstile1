import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Turnstile from './Turnstile';
import Rules from './Rules';
import Game from './Game';
import NoPage from "./NoPage";
import L1 from './levels/L1';
import L2 from './levels/L2';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Turnstile />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/game" element={<Game />} />
        <Route path="/*" element={<NoPage />} />
        <Route path="/game/level1" element={<L1 />} />
        <Route path="/game/level2" element={<L2 />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
