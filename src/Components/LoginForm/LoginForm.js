import React from "react";
import { useNavigate } from "react-router-dom";

import { useRef, useContext, useState } from "react";

import { UserContext } from "../../context/user";

import styles from "./styles.module.scss";

export default function LoginForm() {
  const { user, setIsLoggedIn, isLoggedIn } = useContext(UserContext);
  const [formMessage, setFormMessage] = useState("");
  const navigate = useNavigate();

  const usernameRef = useRef();
  const passwordRef = useRef();

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", true);
    setFormMessage("You are logged in");

    navigate("/dashboard");
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.setItem("isLoggedIn", false);
    setFormMessage("You are logged out");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!isLoggedIn) {
      usernameRef.current.value === user.username &&
      passwordRef.current.value === user.password
        ? handleLogin()
        : setFormMessage("Invalid credentials, please try again");
    }

    if (isLoggedIn) {
      handleLogout();
    }
  };

  return (
    <div className={styles["login-form"]}>
      <form className={styles["login-form__form"]}>
        {!isLoggedIn && (
          <>
            <legend className={styles["login-form__legend"]}>Login</legend>
            <label htmlFor="username" className={styles["login-form__label"]}>
              username
            </label>
            <input
              ref={usernameRef}
              type="text"
              name="username"
              id="username"
              className={styles["login-form__input"]}
            />
            <label htmlFor="password" className={styles["login-form__label"]}>
              username
            </label>
            <input
              ref={passwordRef}
              type="password"
              name="password"
              id="password"
              className={styles["login-form__input"]}
            />
          </>
        )}
        <button
          className={styles["login-form__submit"]}
          onClick={handleSubmit}
          type="submit"
        >
          {isLoggedIn ? "Logout" : "Login"}
        </button>
      </form>
      <div className="login-form__message">
        <p>{formMessage}</p>
      </div>
    </div>
  );
}
