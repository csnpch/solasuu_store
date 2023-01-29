import { createBrowserRouter } from "react-router-dom";
import Login from './pages/auth/login'
import Home from './pages/home/index';


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/:categorySlug',
        element: <Home />,
    },
    {
        path: '/auth',
        element: <Login />
    },
    {
        path: '*',
        element: <p className="w-full h-screen text-4xl center tracking-widest">404 Page Not Found</p>
    }
]);