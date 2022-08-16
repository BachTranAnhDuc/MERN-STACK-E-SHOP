import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  Landing,
  Dashboard,
  ShareLayout,
  About,
  Error,
  Register,
} from './pages';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShareLayout></ShareLayout>}>
          <Route index element={<Landing></Landing>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>

          <Route path="*" element={<Error></Error>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
