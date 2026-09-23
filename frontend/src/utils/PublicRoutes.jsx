import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const PublicRoutes = () => {

    const { isAuthenticated, loading } = useAuth();

    // Wait for getUser() to finish
    if (loading) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center">
                <p className="text-sm text-gray-500 font-mono">
                    Loading...
                </p>
            </div>
        );
    }

    // Already logged in
    if (isAuthenticated) {
        return <Navigate to="/" replace />;
    }

    return <Outlet />;
};

export default PublicRoutes;