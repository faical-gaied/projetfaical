import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logout, userCurrent } from "./JS/userSlice/userSlice";
import Profil from "./components/Profil";
import PrivateRoute from "./routes/PrivateRoute";
import Shop from './components/Pages/Shop';
import Footer from './components/Footer/Footer';
import SignUp from './components/Sign UP/SignUp';
import Homme from './components/Pages/Homme';
import Femme from './components/Pages/Femme';
import Enfant from './components/Pages/Enfant';
import Magazin from './components/Footer/Magazin';
import Contact from './components/Footer/Contact';
import Telephone from './components/Footer/Telephone';
import Administration from './components/Footer/Administration';
import Produit from './components/Footer/Produit';
import Apropos from './components/Footer/Apropos';
import Instagram from './components/Footer/Instagram';
import Navbar from './components/Navbar/Navbar'
import { getproduct } from "./JS/productSlice";
import { getcommande } from "./JS/commandeSlice";
import Listcart from "./components/Listcart";

function App() {
  const isAuth = localStorage.getItem("token");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuth) {
      dispatch(userCurrent());
    }
    dispatch(getproduct())
    dispatch(getcommande())
  }, []);
  return (
    <div className="App">
      {/* <div className="header">
        <h1>Auth workshop</h1>
        {isAuth ? (
          <button
            onClick={() => {
              dispatch(logout());
              navigate("/");
            }}
          >
            Logout
          </button>
        ) : null}
      </div> */}
<Navbar />
      <Routes>
      <Route path='/' element={<Shop/>}/>
        <Route path='/homme' element={<Homme/>}/> 
        <Route path='/femme' element={<Femme/>}/>
        <Route path='/enfant' element={<Enfant/>}/>
        <Route path='/cart' element={<Listcart/>}/>
        {/* <Route path='/product' element={<Product/>}/>
        <Route path=':productId' element={<Product/>}/> */}
        <Route path='/login' element={<SignUp/>}/>
        <Route path='/magazin' element={<Magazin/>}/>
        <Route path='/produit' element={<Produit/>}/>
        <Route path='/administration' element={<Administration/>}/>
        <Route path='/apropos' element={<Apropos/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/instagram' element={<Instagram/>}/>
        <Route path='/telephone' element={<Telephone/>}/>
        <Route exact path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profil" element={<Profil />} />
        </Route>{" "}
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
