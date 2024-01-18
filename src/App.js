// import { Navigation } from "./Components/Navigation";
import { Home } from "./Components/Home";
import { Form } from "./Components/Form";
import { ProductsListing } from "./Components/ProductsList";
import { ProductDetails } from "./Components/ProductDetails";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import { Navigation } from "./Components/Navigation";
import { Footer } from "./Components/Footer";
import { ProductEditPage } from "./Components/ProductEditPage";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/reactify" element={<Home />} />
        <Route path="/products" element={<ProductsListing />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="/products/:productId&edit" element={<ProductEditPage />} />
        <Route path="/login" element={<Form />} />
      </Routes>
      <Outlet />
      <Footer />
    </Router>
  );
}

export default App;
