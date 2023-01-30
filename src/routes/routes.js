import { createBrowserRouter } from "react-router-dom";
import BillingPage from "../Components/Billing/BillingPage";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Login/Signup";
import ProtectedPage from "../utils/ProtectedPage";


const routes = createBrowserRouter(
    [
        {
            path: '/',
            element: (
                <ProtectedPage>
                    <BillingPage />
                </ProtectedPage>
            ),
        },
        {
            path: "/signup",
            element: <SignUp />,
        },
        {
            path: "/login",
            element: <Login />,
        },
    ]
)


export default routes;