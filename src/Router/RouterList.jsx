import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Auth/Login.jsx";
import Register from "../Pages/Auth/Register.jsx";
import AdminLayout from "../Layout/AdminLayout.jsx"; 
import Dashboard from "../Pages/Admin/Dashboard.jsx";
import Banjir from "../Pages/Admin/DataBanjir.jsx";
import ErrorPage from "../Pages/ErrorPage.jsx"; // Import komponen error
import EdukasiBanjir from "../Pages/Admin/EdukasiBanjir.jsx";

const RouteList = createBrowserRouter([
    {
        path: "/",
        element: <Login/>,
        errorElement: <ErrorPage/> // Tambahkan error handling di sini
    },
    {
        path: "/register",
        element: <Register/>,
        errorElement: <ErrorPage/> // Tambahkan error handling di sini
    },
    {
        path: "/admin",
        element: (<AdminLayout/>),
        errorElement: <ErrorPage/>, // Tambahkan error handling di sini
        children: [
            {
                index: true,
                element: <Dashboard/>,
                errorElement: <ErrorPage/> // Tambahkan error handling untuk child route
            },
            {
                path: "DataBanjir",
                element: <Banjir/>,
                errorElement: <ErrorPage/> // Tambahkan error handling untuk child route
            },
            {
                path: "EdukasiBanjir",
                element: <EdukasiBanjir/>,
                errorElement: <ErrorPage/> // Tambahkan error handling untuk child route
            },
        ]
    },
    {
        path: "*", // Untuk menangani rute yang tidak ditemukan
        element: <ErrorPage/> // Rute default ke halaman error
    }
]);

export default RouteList;
