import { Navigate, Outlet } from "react-router";

export default function AuthMiddleware() {
    const token = localStorage.getItem("token");
    if (!token) {
        return <Navigate to="/Auth" replace />;
    }

    return <Outlet />;

}
