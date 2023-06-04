import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { About, Home, Prediction, Contact } from "./pages";

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
    }
]);

const MainRouter = () => {
    return <RouterProvider router={router} />;
}

export default MainRouter;