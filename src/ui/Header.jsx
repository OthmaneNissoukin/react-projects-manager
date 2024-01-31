import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../features/user";
import { useNavigate } from "react-router";

function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const activeUser = useSelector((store) => store.userSlice.activeUser) || {};
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleLogout() {
    dispatch(logoutUser());
    navigate("/login", { replace: true });
  }

  return (
    <header className="bg-yellow-400">
      <nav className="m-auto px-5 py-2.5 flex items-center justify-between">
        <h1 className="text-xl font-semibold">WORKFLOW</h1>
        <div className="flex gap-2.5 items-center relative">
          <p className="font-semibold uppercase">{activeUser?.fullName}</p>
          <span onClick={() => setToggleMenu(!toggleMenu)} className="inline-block p-0.5 bg-stone-600 rounded-full">
            <img src={activeUser.img} alt="avatar" className="rounded-full h-10 w-10" />
          </span>
          {toggleMenu && (
            <div className="px-2 py-2.5 bg-yellow-600 absolute right-0 top-14 min-w-32 text-center font-semibold">
              <ul>
                <li>
                  <button onClick={handleLogout}>Logout</button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
