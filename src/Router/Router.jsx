
import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "./RootLayout";
import Home from '../Home/Home'

const router = createBrowserRouter([
    {
        path:'/',
        element:<RootLayout></RootLayout>,
        children:[
            {
                index:true,
                element:<Home/>
            }
        ]
        
    }
]);

const AppRouter = ()=>{
    return <RouterProvider router={router}/>
}

export default AppRouter