import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Home from "./pages/Home"; 
import Gallery from "./pages/Gallery"; 
import AboutUs from "./pages/AboutUs"; 
import RootLayout from "./layouts/RootLayout";
import Treatments from "./pages/Treatments";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<Home/>} />
      <Route path="about" element={<AboutUs/>} />
      <Route path="treatments" element={<Treatments/>} />
      <Route path="gallery" element={<Gallery/>} />

    </Route>
  )
)
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
