import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { authenticateUser } from "../features/user";

function Login() {
  const users = useSelector((store) => store.userSlice.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login, setLogin] = useState("jane@test.ma");
  const [pwd, setPwd] = useState("246810");
  const [user, setUser] = useState(null);

  const [loginError, setLoginError] = useState(false);
  const [pwdError, setPwdError] = useState(false);
  const [error, setError] = useState(false);

  function handleLogin(e) {
    setLoginError(false);
    setPwdError(false);
    setError(false);
    e.preventDefault();
    if (!login) setLoginError(true);
    if (!pwd) setPwdError(true);
    if (!(login && pwd)) return;

    const findUser = users.find((user) => user.email === login && user.password === pwd);

    if (findUser) {
      setUser(findUser);
    } else setError(true);
  }

  useEffect(() => {
    if (user) {
      // console.log(user);
      dispatch(authenticateUser(user));
      navigate("/");
    }
  }, [user, dispatch, navigate]);

  return (
    <section>
      <div className="md:max-w-md max-w-sm m-auto px-5 py-10">
        <h1 className="font-semibold text-2xl mb-10 text-center">SIGN IN</h1>
        {error && (
          <p className="py-3 px-5 bg-red-400 bg-opacity-20 rounded-md my-2.5 text-red-600">
            Username or password is wrong!
          </p>
        )}
        <form onSubmit={handleLogin} className="space-y-5 font-semibold uppercase">
          <div className="flex flex-col">
            <label htmlFor="">E-mail Address</label>
            <input
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              type="text"
              placeholder="emailaddress@email.com"
              className="px-2.5 py-2 font-semibold outline-none"
            />
            {loginError && <span className="text-xs text-red-600">Username is required!</span>}
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Password</label>
            <input
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
              type="password"
              placeholder="********"
              className="px-2.5 py-2 font-semibold outline-none mb-1"
            />
            {pwdError && <span className="text-xs text-red-600 mb-4">Password is required!</span>}
            <Link className="lowercase text-blue-500 underline">Forgot Password?</Link>
          </div>
          <button className="w-full bg-emerald-700 text-emerald-100 px-2.5 py-2.5">SIGN IN</button>
          <p className="lowercase font-normal text-center">
            Dont have an account?{" "}
            <Link to="/sign-up" className=" text-blue-500 underline">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}

export default Login;
