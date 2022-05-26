import Home from "../pages/Home/Home";

export const publicRoutes = [
    {
        path: '/',
        element: <Home/>
    }
];
export const privateRoutes = [
    {
        path: '/friends',
        element: <></>
    }
];