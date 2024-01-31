import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

function AdminRoute({ requireAdmin, children }) {
  const activeUser = useSelector((store) => store.userSlice.activeUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (!activeUser) navigate("/login");

    if (!activeUser.admin && requireAdmin) navigate("/auth-err");
  }, [activeUser, navigate]);

  return <>{children}</>;
}

export default AdminRoute;
