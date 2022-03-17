import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Registration from './pages/Registration';
import UserList from './pages/UserList';
import NotFound from './pages/NotFound';



export default () => {
    return(
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cadastro' element={<RequireAuth><Registration /></RequireAuth>} />
            <Route path='/lista-de-pacientes' element={<UserList />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    );
};