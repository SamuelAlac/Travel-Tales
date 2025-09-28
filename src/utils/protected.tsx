import { Navigate, Outlet } from "react-router";
import { useSelector } from "react-redux";
import type { RootState } from '../state/store';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { value: user, loading } = useSelector((state: RootState) => state.auth);

  if (loading) return <div className="">Loading...</div>;

  if(!user) return <Navigate to='/Login' replace/>

  return <>{children}</>
};

export default ProtectedRoute;