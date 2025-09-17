import { useSelector } from "react-redux";
import type { RootState } from "../../state/store";

const ProfilePage = () => {
  const user = useSelector((state: RootState) => state.auth.value);

  return user ? (
    <div className="min-h-screen flex justify-center items-center">
      <h1 className="text-amber-950">Welcome, {user.displayName}</h1>
    </div>
  ) : (
    <p>Please log in.</p>
  );
};

export default ProfilePage