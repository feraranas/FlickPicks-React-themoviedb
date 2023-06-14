import { Home, MyFavorites, NowPlaying, Popular, TopRated, Show} from "pages";
import { RouteObject, createBrowserRouter } from "react-router-dom";
import PublicRouter from "./PublicRouter";
import { ROUTES } from "./constants";

const routes: RouteObject[] = [
    {
        path: ROUTES.HOME, element: <PublicRouter />,
        children: [
            {index: true, element: <Home />},
            {path: ROUTES.POPULAR, element: <Popular />},
            {path: ROUTES.TOP_RATED, element: <TopRated />},
            {path: ROUTES.NOW_PLAYING, element: <NowPlaying />},
            {path: ROUTES.MY_FAVORITES, element: <MyFavorites />},
            {path: ROUTES.SHOW_ID, element:<Show />},
        ]
    },
];

export const router = createBrowserRouter(routes);