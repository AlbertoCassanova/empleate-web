import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({isAllowed,redirectTo = "/",children,} : any) => {
    if (!isAllowed) {
        return <Navigate to={redirectTo} replace />;
    }
    return children ? children : <Outlet />;
};