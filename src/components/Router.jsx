import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Autorization from './Autorization/Autorization';

const Router = (props) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Autorization />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;