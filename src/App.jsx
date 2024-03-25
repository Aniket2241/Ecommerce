import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Register from "./Components/Register";
import Shop from "./Components/Shop";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Components/Contact";
import Electronics from "./Components/Electronics";
import Cart from "./Components/Cart";
import Kids from "./Components/Kids";

function App() {
  const [mycart, setmycart] = useState([]);
  const [rate, setRate] = useState(499);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Shop rate={rate} mycart={mycart} setmycart={setmycart} />
                <Register />
              </>
            }
          />
          <Route path="/electronics" element={<Electronics lo="20" />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart store={mycart} />} />
          <Route path="/kids" element={<Kids />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
