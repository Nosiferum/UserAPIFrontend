import './App.css'
import Login from "./components/Login.tsx";
import {Route, Routes} from "react-router-dom";
import WelcomePage from "./components/WelcomePage.tsx";
import UserForm from "./components/UserForm.tsx";

function App() {

  return (
    <>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<UserForm/>}/>
            <Route path="/welcome" element={<WelcomePage/>}/>
        </Routes>
    </>
  )
}

export default App
