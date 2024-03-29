import { useContext, useRef, useState } from "react";
import Loader from "react-js-loader";
import { useNavigate } from "react-router-dom";
import { ContextAPI } from "../../../context/index.jsx";
import { Input } from "../../Generic/index.jsx";
import { Form, Remember, Submit } from "./style.js";

const SignIn = () => {
  const navigate = useNavigate();
  const { token, setToken } = useContext(ContextAPI);
  const email = useRef(null);
  const password = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  const setTokenToStorage = (token) => {
    localStorage.setItem("token", token);
    setToken(token);
  };

  const submit = () => {
    let request = email.current.value && password.current.value;
    const reqData = {
      email: email.current.value,
      password: password.current.value,
    };
    console.log(reqData);
    if (request)
      fetch("http://localhost:8081/api/public/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reqData),
      })
        .then((data) => data.json())
        .then((res) => {
          if (res.authenticationToken) {
            console.log(res);
            setIsLoading(false);
            request && setTokenToStorage(res.authenticationToken);
          } else alert("Unknown error");
        })
        .catch((error) => {
          setIsLoading(false);
          alert(
            error.toString().includes("SyntaxError")
              ? `Email or password incorrect`
              : "Unknown error"
          );
        });
    reqData.email && reqData.password && setIsLoading(true);
  };
  console.log("loading", isLoading);

  const forgot = () => {
    let email = prompt("Enter current email");
    email &&
      fetch(
        `https://houzing-app.herokuapp.com/api/public/forgot-password?email=${email}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((data) => data.json())
        .then((res) => {
          console.log(res, JSON.stringify({ email }));
          alert(res.success ? res.message : "Unknown error");
        });
  };

  return token ? (
    navigate("/profile")
  ) : (
    <Form>
      <h2>Sign in</h2>
      <Input
        name="email_login"
        theme="classic"
        type="text"
        placeholder="Email"
        ref={email}
      />
      <Input
        name="password_login"
        theme="classic"
        type="password"
        placeholder="Password"
        className="mb16"
        ref={password}
      />
      <Remember>
        <span className="check">
          <input type="checkbox" name="remember" id="remember" />
          <label htmlFor="remember">Remember me</label>
        </span>
        <span className="forgot">
          <span onClick={forgot}>Forgot</span>
        </span>
      </Remember>
      <Submit onClick={submit}>Login</Submit>
      {isLoading && (
        <Loader
          type="hourglass"
          bgColor={"var(--colorPrimary)"}
          title={"Getting Data..."}
          color={"var(--colorPrimary)"}
          size={100}
        />
      )}
    </Form>
  );
};

export default SignIn;
