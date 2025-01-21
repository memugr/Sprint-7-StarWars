import { createBrowserRouter } from "react-router-dom";

import Starships from "./pages/Starships.jsx";

const router = createBrowserRouter([
    {
        path: '/starships',
        element: <Starships />
    }
])