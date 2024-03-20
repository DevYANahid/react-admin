import './components/assets/css/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Master from './components/layout/Master';
import Dashboard from './components/modules/Dashboard';
import { useState } from 'react';
import AuthLayout from './components/layout/AuthLayout';
import Login from './components/modules/auth/Login';






function App() {

    const [auth,setAuth] = useState(false)
  return (
    <BrowserRouter>
    <Routes>
        {auth? <Route element={<Master />}>
            <Route path="/" element={<Dashboard />} />
        </Route> : <Route element={<AuthLayout />}>
            <Route path="/" element={<Login />} />
        </Route>}
        
    </Routes>
</BrowserRouter>
  );
}

export default App;
