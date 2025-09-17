import { Navigate, Outlet } from "react-router";
import { useSelector } from "react-redux";
import type { RootState } from '../state/store';

const ProtectedRoute = () => {
  const user = useSelector((state: RootState) => state.auth.value);
  console.log("user", user);
  return user ? <Outlet/> : <Navigate to='/Login' replace/>
};

export default ProtectedRoute;