import { Home, MyFavorites, NowPlaying, Popular, TopRated, Show} from "pages";
import { RouteObject, createBrowserRouter } from "react-router-dom";
import PrivateRouter from "./PrivateRouter";
import PublicRouter from "./PublicRouter";
import { ROUTES } from "./constants";

const routes: RouteObject[] = [
    {
        path: '/', element: <PrivateRouter />,
        children: [
            {index: true, element: <Home />},
            {path: ROUTES.POPULAR, element: <Popular />},
            {path: ROUTES.TOP_RATED, element: <TopRated />},
            {path: ROUTES.NOW_PLAYING, element: <NowPlaying />},
            {path: ROUTES.MY_FAVORITES, element: <MyFavorites />},
            {path: ROUTES.SHOW_ID, element:<Show />},
        ]
    },
    {
        path: '/admin', element: <PublicRouter />,
        children: [
            {path: '/admin', element: <Home />}
        ]
    },
];

export const router = createBrowserRouter(routes);