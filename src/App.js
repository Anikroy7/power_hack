import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";


function App() {
  return (
    <div>
      <RouterProvider router={routes} />
      <div><Toaster /></div>
    </div>
  );
}

export default App;
