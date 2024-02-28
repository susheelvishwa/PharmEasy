import "./App.css";
import SignUp from "./components/signup.jsx";
import Login from "./components/login.jsx";
import Cart from "./components/cart.jsx";
import AddToCart from "./components/addcart.jsx";

function App() {
  

  return (
    <>
      <h1>PharmEas</h1>
      <div></div>
      <p>this is a navigation bar</p>
      <SignUp />
      <Login />
      <Cart />
      <AddToCart />
    </>
  );
}

export default App;
