import {createRoot} from "react-dom/client";
import {App} from "./components/App";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import React, {Suspense} from "react";
import {About} from "./pages/about";
import {Contact} from "./pages/contact";

const root = document.getElementById('root');

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/about',
                element: <Suspense fallback={'Loading'}><About /></Suspense>
            },
            {
                path: '/contact',
                element: <Suspense fallback={'Loading'}><Contact /></Suspense>
            }
        ]
    }
]);

if (!root) {
    throw new Error('Root not found');
}

const container = createRoot(root);

container.render(<RouterProvider router={router}/>);