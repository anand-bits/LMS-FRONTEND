import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

import { selectUserRole } from "../../Helpers/selectUserRole";


function RequireAuth({ allowedRoles }) {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const role = useSelector(selectUserRole); // Using the selector

  const location = useLocation();

  return isLoggedIn && allowedRoles.includes(role) ? (
    <Outlet />
  ) : isLoggedIn ? (
    <Navigate to="/denied" />
  ) : (
    <Navigate to="/login" />
  );
}

export default RequireAuth;
