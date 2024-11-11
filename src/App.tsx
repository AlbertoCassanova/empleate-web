// React
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Views
import Login from './views/Login';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
