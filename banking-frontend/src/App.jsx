import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import VerifyOtp from "./pages/VerifyOtp";
import Dashboard from "./pages/Dashboard";
import VerifyEmail from "./pages/VerifyEmail";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

    return (
        <BrowserRouter>

            <Routes>

                <Route path="/" element={<Login />} />

                <Route path="/signup" element={<Signup />} />

                <Route path="/verifyUser" element={<VerifyEmail />} />

                <Route path="/verify-login" element={<VerifyOtp />} />

                <Route path="/dashboard" element={<Dashboard />} />

            </Routes>

        </BrowserRouter>
    );
}

export default App;