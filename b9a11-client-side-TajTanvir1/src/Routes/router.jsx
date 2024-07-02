import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error/Error";
import RecommendMe from "../Pages/RecommendMe/RecommendMe";
import MyQueries from "../Pages/MyQueries/MyQueries";
import MyRecommend from "../Pages/MyRecommend/MyRecommend";
import Login from "../Login/Login";
import Register from "../Login/Register";
import AddQueries from "../Pages/MyQueries/AddQueries";
import AllQueries from "../Pages/Queries/AllQueries";
import QueriesDetails from "../Pages/QueriesDetails/QueriesDetails";
import UpdateQueries from "../Pages/MyQueries/UpdateQueries";
import PrivetRoutes from "./PrivetRoutes";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


const router = createBrowserRouter([
   {
     path: "/",
     element:<Root></Root>,
     errorElement: <Error></Error>,
     children: [
      {
         path: "/",
         element: <Home></Home>,
      },
      {
         path: "/allQueries",
         element: <AllQueries></AllQueries>,
      },
      {
         path: "/recommendMe",
         element: <PrivetRoutes><RecommendMe></RecommendMe></PrivetRoutes>,
      },
      {
         path: "/myQueries",
         element: <PrivetRoutes><MyQueries></MyQueries></PrivetRoutes>,
      },
      {
         path: "/addQueries",
         element: <PrivetRoutes><AddQueries></AddQueries></PrivetRoutes>,
      },
      {
         path: "/myRecommend",
         element: <PrivetRoutes><MyRecommend></MyRecommend></PrivetRoutes>,
      },
      {
         path: "/login",
         element: <Login></Login>,
      },
      {
         path: "/register",
         element: <Register></Register>,
      },
      {
         path: "/queriesDetails/:id",
         element: <PrivetRoutes><QueriesDetails></QueriesDetails></PrivetRoutes>,
         loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/queries/${params.id}`)
      },
      {
         path: "/updateQueries/:id",
         element: <PrivetRoutes><UpdateQueries></UpdateQueries></PrivetRoutes>,
         loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/queries/${params.id}`)
      }
     ]
   },
 ]);

 export default router;