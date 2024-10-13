import './App.css'
import Login from "./components/Login.tsx";
import {Navigate, Route, Routes} from "react-router-dom";
import WelcomePage from "./components/WelcomePage.tsx";
import Register from "./components/Register.tsx";
import NavBar from "./components/NavBar.tsx";

function App() {

  return (
    <>
        <NavBar/>
        <Routes>
            <Route path="/" element={<Navigate to="/register"/>}/>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register/>}/>
            <Route path="/welcome" element={<WelcomePage/>}/>
        </Routes>
    </>
  )
}

export default App
