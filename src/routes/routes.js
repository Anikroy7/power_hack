import { createBrowserRouter } from "react-router-dom";
import BillingPage from "../Components/Billing/BillingPage";


const routes = createBrowserRouter(
    [
        {
            path: '/',
            element: <BillingPage />,
        }
    ]
)


export default routes;