import React, { useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Token } from '../../context';
import { privateRoutes, publicRoutes } from './Routes';
import Page404 from '../pages/Page404/Page404';

const Router = () => {
    const token = useContext(Token);

    return (
        <BrowserRouter>
            <Routes>
                {
                    token ?
                        privateRoutes.map(route => {
                            return (
                                <Route
                                    key={route.path}
                                    path={route.path}
                                    element={route.element}
                                />
                            );
                        }) :
                        publicRoutes.map(route => {
                            return (
                                <Route
                                    key={route.path}
                                    path={route.path}
                                    element={route.element}
                                />
                            );
                        })
                }
                <Route path='/*' element={<Page404 />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;