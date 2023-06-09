import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { About, Home, Prediction, Contact, Info } from "./pages";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/predictions',
        element: <Prediction />
    },
    {
        path: '/contact',
        element: <Contact />
    },
    {
        path: '/info',
        element: <Info />
    }
]);

const MainRouter = () => {
    return <RouterProvider router={router} />;
}

export default MainRouter;