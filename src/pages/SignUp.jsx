import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { registerUser } from "../features/user";
import { useState } from "react";
import { idGenerator } from "../utils/idGenerator";

function SignUp() {
  const dispatch = useDispatch();
  const users = useSelector((store) => store.userSlice.users);
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [fulleNameErr, setFullNameErr] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [confirmPasswordErr, setConfirmPasswordErr] = useState("");

  function handleRegister(e) {
    e.preventDefault();

    setFullNameErr("");
    setEmailErr("");
    setPasswordErr("");

    if (!fullName.trim()) setFullNameErr("Full name is required!");
    if (!email.trim()) setEmailErr("Email is required");
    if (!password) setPasswordErr("Password is required!");
    if (!confirmPassword) setConfirmPassword("Password confirmation is required!");
    if (!(fullName.trim() && email.trim() && password && confirmPassword)) return;

    if (password !== confirmPassword) {
      setPasswordErr("Password doesn't match confirmation!");
      return;
    }

    if (users.find((user) => user.email === email)?.id) {
      setFullNameErr("Email already exists!");
      return;
    }

    const randomID = idGenerator("U", 6);
    const newUser = {
      id: randomID,
      email,
      password,
      fullName,
      img: `https://ui-avatars.com/api/?name=${fullName}`,
      admin: false,
    };

    navigate("/login");
    dispatch(registerUser(newUser));

    return;
  }

  return (
    <section>
      <div className="md:max-w-md max-w-sm m-auto px-5 py-10">
        <h1 className="font-semibold text-2xl mb-10 text-center">SIGN UP</h1>
        <form onClick={handleRegister} className="space-y-5 font-semibold uppercase">
          <div className="flex flex-col">
            <label htmlFor="">Full Name</label>
            <input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              type="text"
              placeholder="your fullname"
              className="px-2.5 py-2 font-semibold outline-none"
            />
            {fulleNameErr && <span className="text-xs uppercase mt-1 ps-1 text-red-600">{fulleNameErr}</span>}
          </div>
          <div className="flex flex-col">
            <label htmlFor="">E-mail Address</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="emailaddress@email.com"
              className="px-2.5 py-2 font-semibold outline-none"
            />
            {emailErr && <span className="text-xs uppercase mt-1 ps-1 text-red-600">{emailErr}</span>}
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="********"
              className="px-2.5 py-2 font-semibold outline-none mb-1"
            />
            {passwordErr && <span className="text-xs uppercase mt-1 ps-1 text-red-600">{passwordErr}</span>}
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Confirm Password</label>
            <input
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              type="password"
              placeholder="********"
              className="px-2.5 py-2 font-semibold outline-none mb-1"
            />
            {confirmPasswordErr && (
              <span className="text-xs uppercase mt-1 ps-1 text-red-600">{confirmPasswordErr}</span>
            )}
          </div>
          <button onClick={handleRegister} className="w-full bg-emerald-700 text-emerald-100 px-2.5 py-2.5">
            SIGN UP
          </button>
          <p className="lowercase font-normal text-center">
            Already have an account?{" "}
            <Link to="/login" className=" text-blue-500 underline">
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}

export default SignUp;
