import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const ProtectedRoutes = () => {

    const { isAuthenticated, loading } = useAuth();

    // Wait until getUser() finishes
    if (loading) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center">
                <p className="text-sm text-gray-500 font-mono">
                    Loading...
                </p>
            </div>
        );
    }

    // Only redirect after authentication check is complete
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return <Outlet />;
};

export default ProtectedRoutes;