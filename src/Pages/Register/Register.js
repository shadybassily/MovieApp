import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../Login/Login.css";
export default function Register() {
  // userinfo
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",

  });

  //errors
  const [errors, setErrors] = useState({
    usernameErr: "",
    emailErr: "",

    passwordErr: "",
  });

  //when user start entering data
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i;
  const usernameRegex = /^[a-zA-Z]+$/i;

  const changeData = (e) => {
    if (e.target.name == "email") {
      setUserData({
        ...userData,
        email: e.target.value,
      });
      setErrors({
        ...errors,
        emailErr: !e.target.value.match(emailRegex) ? "Invalid Email" : null,
      });

    } else if (e.target.name == "username") {
      setUserData({
        ...userData,
        username: e.target.value,
      });
      setErrors({
        ...errors,
        usernameErr: (e.target.value.length < 8 && "Minimum Length is 8 characters") || (!e.target.value.match(usernameRegex) ? "Invalid Username" : null), 
        
      });

    }  else if (e.target.name == "password") {
      setUserData({
        ...userData,
        password: e.target.value,
      });
      setErrors({
        ...errors,
        passwordErr: e.target.value.length < 5 ? "Minimum Length is 8 characters" : null,
      });
    }
  };

  const history = useHistory();
  //on submit
  const submitUserDataForm = (e) => {
    e.preventDefault();
    if (!errors.emailErr && !errors.passwordErr) {
      history.push("/movies");
    }
  };

  return (
    <form
      className="col-xl-4 col-sm-8 col-md-6 m-auto my-5 p-5 login--card"
      onSubmit={(e) => submitUserDataForm(e)}
    >
      {/* username */}
      <label htmlFor="exampleInputEmail1" className="form-label ">
        Username
      </label>
      <input
        type="text"
        value={userData.username}
        name="username"
        onChange={(e) => changeData(e)}
        className={`form-control ${errors.usernameErr && "border-danger"}`}
      />
      <div id="emailHelp" className="form-text text-danger">
        {errors.usernameErr}{" "}
      </div>

      {/* email */}
      <label htmlFor="exampleInputEmail1" className="form-label ">
        Email address
      </label>
      <input
        type="email"
        value={userData.email}
        name="email"
        onChange={(e) => changeData(e)}
        className={`form-control ${errors.emailErr && "border-danger"}`}
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
      />
      <div id="emailHelp" className="form-text text-danger">
        {errors.emailErr}{" "}
      </div>

      
      {/* password */}
      <label htmlFor="exampleInputPassword1" className="form-label">
        Password
      </label>
      <input
        type="password"
        value={userData.password}
        name="password"
        onChange={(e) => changeData(e)}
        className={`form-control ${errors.passwordErr && "border-danger"}`}
        id="exampleInputPassword1"
      />
      <div id="emailHelp" className="form-text text-danger">
        {errors.passwordErr}{" "}
      </div>
      <p className="my-2 ">
        <a href="#">Forgot your password?</a>
      </p>

      {/* disable submit if there is an error, or fields are empty */}
      <button
        type="submit"
        className="btn btn-primary"
        disabled={
          //if errors
          errors.usernameErr ||
          errors.emailErr ||
          errors.passwordErr ||
          //if fields are empty
          userData.username === "" ||
          userData.email === "" ||
          userData.password === ""
        }
      >
        Register
      </button>
    </form>
  );
}
