import { useContext, useState } from "react";
import { ContextAPI } from "../../context";
import Dashboard from "./Dashboard/Dashboard";
import "./Profile.css";
import SignUp from "./SignUp/SignUp";
import SignIn from "./SignIn/SignIn";


const Profile = () => {
  const { token, setToken } = useContext(ContextAPI);
  let uniqueToken = localStorage.getItem("token");
  const [mode, setMode] = useState("login");
  const show = (mode) => setMode(mode);
  if (uniqueToken && uniqueToken !== token) setToken(uniqueToken);
  return token ? (
    <Dashboard token={token} />
  ) : (
    <div className="container _container">
      {mode === "reg" ? (
        <>
          <SignUp />
          <span id="navigateAnotherMode" onClick={() => show("login")}>
            I have registered!
          </span>
        </>
      ) : mode === "login" ? (
        <>
          <SignIn />
          <span id="navigateAnotherMode" onClick={() => show("reg")}>
            Aren't you a account?
          </span>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Profile;
