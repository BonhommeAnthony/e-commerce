import React, { useState } from "react";
import "./styles.scss";

import { auth, handleUserProfile } from "./../../firebase/utils";

import FormInput from "../FormInput";
import Button from "../Forms/Button";

const Signup = () => {
  const [state, setstate] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
    errors: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setstate((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword, errors } = state;

    if (password !== confirmPassword) {
      const err = ["Password Don't match"];
      setstate((prevState) => ({ ...prevState, errors: err }));
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await handleUserProfile(user, { displayName });

      setstate({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
        errors: [],
      });
    } catch (err) {
      // console.log(err);
    }
  };

  const { displayName, email, password, confirmPassword, errors } = state;

  return (
    <div className="signup">
      <div className="wrap">
        <h2>Signup</h2>

        {errors.length > 0 && (
          <ul>
            {errors.map((err, index) => {
              return <li key={index}> {err}</li>;
            })}
          </ul>
        )}

        <div className="formWrap">
          <form onSubmit={handleFormSubmit}>
            <FormInput
              type="text"
              name="displayName"
              value={displayName}
              placeholder="Full Name"
              handleChange={handleChange}
            />
            <FormInput
              type="email"
              name="email"
              value={email}
              placeholder="Email"
              handleChange={handleChange}
            />
            <FormInput
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              handleChange={handleChange}
            />
            <FormInput
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              placeholder="Confirm Password"
              handleChange={handleChange}
            />

            <Button type="submit">Register</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
