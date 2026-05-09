import { useState } from "react";
import { login } from "../services/authService";
import { useNavigate, Link } from "react-router-dom";

function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");

    const handleSubmit = async (e) => {

        e.preventDefault();

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            setError("Please enter a valid email");
            return;
        }

        // Password validation
        if (password.length < 8) {
            setError("Password must be at least 8 characters");
            return;
        }

        setError("");

        try {

            const response = await login({
                email,
                password
            });

            localStorage.setItem(
                "token",
                response.data.token
            );

            alert("Login successful");

            navigate("/verify-login");

        } catch (error) {

            console.log(error);

            setError("Invalid email or password");
        }
    };

    return (

        <div className="container">

            <div className="row justify-content-center align-items-center vh-100">

                <div className="col-md-5">

                    <div className="card shadow-lg border-0 rounded-4">

                        <div className="card-body p-5">

                            <h1 className="text-center mb-3 fw-bold">
                                Banking Application
                            </h1>

                            <p className="text-center text-muted mb-4">
                                Secure Login Portal
                            </p>

                            <form onSubmit={handleSubmit}>

                                <div className="mb-3">

                                    <label className="form-label">
                                        Email Address
                                    </label>

                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                        required
                                    />

                                </div>

                                <div className="mb-3">

                                    <label className="form-label">
                                        Password
                                    </label>

                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Enter your password"
                                        value={password}
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                        required
                                    />

                                </div>

                                <div className="d-grid">

                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                    >
                                        Login
                                    </button>

                                </div>

                            </form>

                            {error && (
                                <div className="alert alert-danger mt-3">
                                    {error}
                                </div>
                            )}

                            <div className="text-center mt-4">

                                <p className="mb-0">
                                    Don't have an account?
                                </p>

                                <Link
                                    to="/signup"
                                    className="text-decoration-none fw-bold"
                                >
                                    Create Account
                                </Link>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Login;