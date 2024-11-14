// React
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {APIProvider} from '@vis.gl/react-google-maps';

// Views
import Login from './views/Login';
import Home from './views/Home';
import { ProtectedRoute } from './components/ProtectedRoute';
import Navbar from './home/Navbar';

const GOOGLE_MAP_KEY : string = import.meta.env.VITE_MAP_KEY;

const App = () => {
  return (
    <BrowserRouter>
      {localStorage.getItem('token') && <Navbar />}
      <Routes>
        <Route element={<ProtectedRoute isAllowed={!localStorage.getItem('token')} redirectTo='/home' />}>
          <Route path='/' element={<Login/>}/>
        </Route>
        <Route element={<ProtectedRoute isAllowed={localStorage.getItem('token')} />}>
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

createRoot(document.getElementById('root')!).render(
  <APIProvider apiKey={GOOGLE_MAP_KEY} onLoad={() => console.log('Maps API has loaded.')}>
    <App/>
  </APIProvider>,
)
