import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

function ProtectedRoute({ children, requireAdmin }) {
  const navigate = useNavigate();
  const activeUser = useSelector((store) => store.userSlice.activeUser);

  useEffect(() => {
    console.log(activeUser);
    if (!activeUser) {
      navigate("/login", { replace: true });
      return;
    }

    if (!activeUser.admin && requireAdmin) {
      navigate("/auth-err", { replace: true });
      return;
    }
  }, [activeUser, navigate, requireAdmin]);

  return <>{children}</>;
}

export default ProtectedRoute;
