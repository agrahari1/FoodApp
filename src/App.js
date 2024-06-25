import "./App.css";
import Home from "./screens/Home";
import Login from "./screens/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css"; //npm i bootstrap-dark-5 boostrap
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Signup from "./screens/Signup.js";
import VerifyOtp from "./screens/VerifyOtp.js";
import { CardProvider } from "./components/ContextReducer.js";
import MyOrder from "./screens/MyOrder.js";
function App() {
  return (
    <CardProvider>
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/creatuser" element={<Signup />} />
            <Route exact path="/verifyotp" element={<VerifyOtp />} />
            <Route exact path="/myorder" element={<MyOrder />} />
          </Routes>
        </div>
      </Router>
    </CardProvider>
  );
}

export default App;

// import "./App.css";
// import Home from "./screens/Home";
// import Login from "./screens/Login";
// import Signup from "./screens/Signup";
// import VerifyOtp from "./screens/VerifyOtp";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "bootstrap-dark-5/dist/css/bootstrap-dark.min.css"; // Ensure this package is installed
// import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Only need to include the minified version
// import { CardProvider } from "./components/ContextReducer.js";
// //import { CartProvider } from "./components/ContextReducer";

// function App() {
//   return (
//     <CartProvider>
//       <Router>
//         <div>
//           <Routes>
//             <Route exact path="/" element={<Home />} />
//             <Route exact path="/login" element={<Login />} />
//             <Route exact path="/createuser" element={<Signup />} />
//             <Route exact path="/verifyotp" element={<VerifyOtp />} />
//           </Routes>
//         </div>
//       </Router>
//     </CartProvider>
//   );
// }

// export default App;
