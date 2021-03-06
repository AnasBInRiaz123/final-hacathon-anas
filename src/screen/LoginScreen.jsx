import React, { useState } from "react";
import styles from "./LoginCss.module.css";
import LoginPic from "../Images/logo.png";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const LogIn = () => {
  const [email, setEmail] = useState(null);
  const [password, setpassword] = useState(null);
  const history = useHistory();

  if (localStorage.getItem("uid")) {
    history.push("/requesttab");
  }
  const login = () => {
    console.log(email, password);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user.uid);
        console.log(user);
        if (user.uid) {
          localStorage.setItem("uid", user.uid);
          history.replace("/requesttab");
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <section className={styles.mainLoginBox}>
      <section className={styles.adminLoginBox}>
        <div className={styles.adminLoginimg}>
          <img src={LoginPic} width="100%" alt="" />
        </div>
        <div className={styles.adminLoginForm}>
          <div>
            <h1>Login as Administrator</h1>
          </div>
          <br />
          <div>
            <input
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="saylani@gmail.com"
            />
            <input
              type="password"
              onChange={(e) => {
                setpassword(e.target.value);
              }}
              placeholder="saylaniadmin"
            />
          </div>

          <div>
            <button onClick={login}>Login</button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default LogIn;
