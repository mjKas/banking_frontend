import { useState } from "react";
import { signup } from "../services/authService";
import { useNavigate, Link } from "react-router-dom";

function Signup() {

    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

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

        // Password match validation
        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        setError("");

        try {

            await signup({
                username,
                email,
                password
            });

            alert("Signup successful. Verify OTP.");

            navigate("/verifyUser");

        } catch (error) {

            console.log(error);

            setError("Signup failed");
        }
    };

    return (

        <div className="container">

            <div className="row justify-content-center align-items-center vh-100">

                <div className="col-md-6 col-lg-5">

                    <div className="card shadow-lg border-0 rounded-4">

                        <div className="card-body p-5">

                            <h1 className="text-center fw-bold mb-3">
                                Banking Application
                            </h1>

                            <p className="text-center text-muted mb-4">
                                Create Your Secure Account
                            </p>

                            <form onSubmit={handleSubmit}>

                                <div className="mb-3">

                                    <label className="form-label">
                                        Username
                                    </label>

                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter username"
                                        value={username}
                                        onChange={(e) =>
                                            setUsername(e.target.value)
                                        }
                                        required
                                    />

                                </div>

                                <div className="mb-3">

                                    <label className="form-label">
                                        Email Address
                                    </label>

                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Enter email"
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
                                        placeholder="Enter password"
                                        value={password}
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                        required
                                    />

                                </div>

                                <div className="mb-4">

                                    <label className="form-label">
                                        Retype Password
                                    </label>

                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Retype password"
                                        value={confirmPassword}
                                        onChange={(e) =>
                                            setConfirmPassword(e.target.value)
                                        }
                                        required
                                    />

                                </div>

                                <div className="d-grid">

                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                    >
                                        Create Account
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
                                    Already have an account?
                                </p>

                                <Link
                                    to="/login"
                                    className="text-decoration-none fw-bold"
                                >
                                    Login Here
                                </Link>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Signup;