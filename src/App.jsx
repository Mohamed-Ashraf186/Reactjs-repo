import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About/Index";
import CounterAction from "./components/counter/CounterAction";
import Home from "./components/Home/Index";
import Navbar from "./components/Navbar/Index";
import Details from "./components/Shop/Details";
import Shop from "./components/Shop/Index";
import Cart from "./components/Cart";
import Singup from "./components/signUp/signUp";
import Login from "./components/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/counter" element={<CounterAction />} />
        <Route path="/shop/:id" element={<Details />} />
        <Route path="/Cart/" element={<Cart/>} />
        <Route path="/signup" element={<Singup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
