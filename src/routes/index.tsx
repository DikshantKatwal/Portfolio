import { RouteObject } from 'react-router-dom';
import HomeBase from '../layout/home';
import publicRoutes from '../Public/routes';




const routes: RouteObject[] = [
    {
        path: '/',
        element: <HomeBase />,
        children: [
            ...publicRoutes,
        ]
    },

];

export { routes };