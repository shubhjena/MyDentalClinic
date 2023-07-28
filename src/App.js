import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Gallery from "./pages/Gallery";
import AboutUs from "./pages/AboutUs";
import RootLayout from "./layouts/RootLayout";
import Treatments from "./pages/Treatments/Treatments";
import Contacts from "./pages/Contacts";
import DentalHygiene from "./pages/Home/DentalHygiene";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />}></Route>
      <Route path="article" element={<DentalHygiene />} />
      <Route path="about" element={<AboutUs />} />
      <Route path="treatments" element={<Treatments />} />
      <Route path="gallery" element={<Gallery />} />
      <Route path="contact" element={<Contacts />} />
    </Route>
  )
);
function App() {
  return (
    <div className="font-sans">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
