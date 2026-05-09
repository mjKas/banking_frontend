import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {

    const navigate = useNavigate();

    const handleLogout = () => {

        // Remove token
        localStorage.removeItem("token");

        // Redirect to login page
        navigate("/");

    };

    return (

        <div className="bg-light min-vh-100">

            {/* Navbar */}

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">

                <div className="container-fluid px-4">

                    <span className="navbar-brand fw-bold fs-3">
                        Secure Bank
                    </span>

                    <button
                        className="btn btn-outline-light"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>

                </div>

            </nav>


            {/* Main Dashboard */}

            <div className="container py-5">

                {/* Welcome Section */}

                <div className="mb-5">

                    <h1 className="fw-bold text-dark">
                        Welcome Back 👋
                    </h1>

                    <p className="text-muted fs-5">
                        Manage your finances securely and efficiently.
                    </p>

                </div>


                {/* Balance Cards */}

                <div className="row g-4 mb-5">

                    <div className="col-md-4">

                        <div className="card border-0 shadow rounded-4 h-100">

                            <div className="card-body p-4">

                                <p className="text-muted mb-2">
                                    Total Balance
                                </p>

                                <h2 className="fw-bold text-success">
                                    $12,450.00
                                </h2>

                                <small className="text-muted">
                                    Updated just now
                                </small>

                            </div>

                        </div>

                    </div>


                    <div className="col-md-4">

                        <div className="card border-0 shadow rounded-4 h-100">

                            <div className="card-body p-4">

                                <p className="text-muted mb-2">
                                    Savings Account
                                </p>

                                <h2 className="fw-bold text-primary">
                                    $8,900.00
                                </h2>

                                <small className="text-muted">
                                    Interest Active
                                </small>

                            </div>

                        </div>

                    </div>


                    <div className="col-md-4">

                        <div className="card border-0 shadow rounded-4 h-100">

                            <div className="card-body p-4">

                                <p className="text-muted mb-2">
                                    Credit Limit
                                </p>

                                <h2 className="fw-bold text-warning">
                                    $5,000.00
                                </h2>

                                <small className="text-muted">
                                    Available credit
                                </small>

                            </div>

                        </div>

                    </div>

                </div>


                {/* Quick Actions */}

                <div className="card border-0 shadow rounded-4 mb-5">

                    <div className="card-body p-4">

                        <h3 className="fw-bold mb-4">
                            Quick Actions
                        </h3>

                        <div className="row g-3">

                            <div className="col-md-3">

                                <button className="btn btn-primary w-100 py-3 rounded-4">
                                    Add Funds
                                </button>

                            </div>

                            <div className="col-md-3">

                                <button className="btn btn-success w-100 py-3 rounded-4">
                                    Transfer Money
                                </button>

                            </div>

                            <div className="col-md-3">

                                <button className="btn btn-dark w-100 py-3 rounded-4">
                                    Check Balance
                                </button>

                            </div>

                            <div className="col-md-3">

                                <button className="btn btn-outline-secondary w-100 py-3 rounded-4">
                                    Pay Bills
                                </button>

                            </div>

                        </div>

                    </div>

                </div>


                {/* Recent Transactions */}

                <div className="card border-0 shadow rounded-4">

                    <div className="card-body p-4">

                        <div className="d-flex justify-content-between align-items-center mb-4">

                            <h3 className="fw-bold">
                                Recent Transactions
                            </h3>

                            <button className="btn btn-sm btn-outline-primary">
                                View All
                            </button>

                        </div>

                        <div className="table-responsive">

                            <table className="table align-middle">

                                <thead className="table-light">

                                    <tr>

                                        <th>Date</th>
                                        <th>Description</th>
                                        <th>Status</th>
                                        <th>Amount</th>

                                    </tr>

                                </thead>

                                <tbody>

                                    <tr>

                                        <td>2026-05-09</td>

                                        <td>
                                            Amazon Purchase
                                        </td>

                                        <td>
                                            <span className="badge bg-danger">
                                                Debit
                                            </span>
                                        </td>

                                        <td className="fw-semibold">
                                            - $120.00
                                        </td>

                                    </tr>

                                    <tr>

                                        <td>2026-05-08</td>

                                        <td>
                                            Salary Deposit
                                        </td>

                                        <td>
                                            <span className="badge bg-success">
                                                Credit
                                            </span>
                                        </td>

                                        <td className="fw-semibold">
                                            + $3,500.00
                                        </td>

                                    </tr>

                                    <tr>

                                        <td>2026-05-07</td>

                                        <td>
                                            Electricity Bill
                                        </td>

                                        <td>
                                            <span className="badge bg-danger">
                                                Debit
                                            </span>
                                        </td>

                                        <td className="fw-semibold">
                                            - $80.00
                                        </td>

                                    </tr>

                                    <tr>

                                        <td>2026-05-06</td>

                                        <td>
                                            Netflix Subscription
                                        </td>

                                        <td>
                                            <span className="badge bg-danger">
                                                Debit
                                            </span>
                                        </td>

                                        <td className="fw-semibold">
                                            - $15.00
                                        </td>

                                    </tr>

                                </tbody>

                            </table>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );
}

export default Dashboard;