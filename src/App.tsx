import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Product from "./pages/Product";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import { useSelector } from "react-redux";
import { RootState } from "./store/Store";

const App = () => {
  const { user } = useSelector((state: RootState) => state.user);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/products" element={<Products />} />
      <Route path="/product/:id" element={<Product />} />

      {/* protected Routes */}
      <Route path="/cart/:id?" element={user ? <Cart /> : <Login />} />
    </Routes>
  );
};

export default App;
