import {createBrowserRouter} from "react-router-dom";
import Blogs from "../components/Blogs";
import Home from "../components/Home";
import ProjectDetails from "../components/ProjectDetails";
import Main from "../layout/Main";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/blogs",
                element: <Blogs></Blogs>
            },
            {
                path: "/projectdetails/:id",
                element: <ProjectDetails></ProjectDetails>,
                loader: async ({params}) => {
                    return params;
                },
            }
        ],
    },
]);

export default router;