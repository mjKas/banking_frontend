import { useState } from "react";
import { verifyLoginOtp } from "../services/authService";
import { useNavigate } from "react-router-dom";

function VerifyOtp() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");

    const [error, setError] = useState("");

    const handleSubmit = async (e) => {

        e.preventDefault();

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            setError("Please enter a valid email");
            return;
        }

        // OTP validation
        if (otp.length < 4) {
            setError("Please enter a valid OTP");
            return;
        }

        setError("");

        try {

            const response = await verifyLoginOtp({
                email,
                verificationCode: otp
            });

            localStorage.setItem(
                "token",
                response.data.token
            );

            alert("Login verified successfully");

            navigate("/dashboard");

        } catch (error) {

            console.log(error);

            setError("OTP verification failed");
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
                                Login OTP Verification
                            </p>

                            <form onSubmit={handleSubmit}>

                                <div className="mb-3">

                                    <label className="form-label">
                                        Email Address
                                    </label>

                                    <input
                                        type="email"
                                        className={`form-control ${
                                            error &&
                                            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
                                                ? "is-invalid"
                                                : ""
                                        }`}
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                        required
                                    />

                                    <div className="invalid-feedback">
                                        Please enter a valid email address
                                    </div>

                                </div>

                                <div className="mb-4">

                                    <label className="form-label">
                                        OTP Code
                                    </label>

                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter OTP"
                                        value={otp}
                                        onChange={(e) =>
                                            setOtp(e.target.value)
                                        }
                                        required
                                    />

                                </div>

                                <div className="d-grid">

                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                    >
                                        Verify Login
                                    </button>

                                </div>

                            </form>

                            {error && (
                                <div className="alert alert-danger mt-3">
                                    {error}
                                </div>
                            )}

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default VerifyOtp;