import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./page/Home/Home";
import SignIn from './page/Signin/SignIn';
import SignUp from './page/Signup/SignUp';
import Product from "./page/Product/Product";
const routes = createBrowserRouter (
[
  {
    path: '/',
    element:<Home />
  },
  {
    path:'/signIn',
    element:<SignIn />
  },
  {
    path:'/signUp',
    element:<SignUp />
  },
  {
    path:'product',
    element:<Product />
  }
]
)
export default function App() {
  return <RouterProvider router={routes}>App</RouterProvider>;
}
