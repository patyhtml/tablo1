import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './index.css';
import Home from './pages/home'
import JoinUs from './pages/join-us'
import LogIn from './pages/log-in'
import NewProject from './pages/new-project'
import CreatePainPoint from './pages/create-pain-point'
import Board from './pages/board';
import Pricing from './pages/pricing';
import Payment from './pages/payment';



export default function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/joinus" element={<JoinUs />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/newproject" element={<NewProject />} />
          <Route path="/createpainpoint" element={<CreatePainPoint />} />
          <Route path="/board" element={<Board />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
    </Router>
  );
}