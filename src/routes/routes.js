import { createBrowserRouter } from "react-router-dom";
import BillingPage from "../Components/Billing/BillingPage";
import Layout from "../Components/Layout/Layout";


const routes = createBrowserRouter(
    [
        {
            path: '/',
            element: <Layout body={<BillingPage />} />,
        }
    ]
)


export default routes;