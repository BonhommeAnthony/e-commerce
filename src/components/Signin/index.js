import React, { useState } from "react";
import "./styles.scss";
import Button from "../Forms/Button";
import { signInWithGoogle, auth } from "./../../firebase/utils";
import FormInput from "../FormInput";
<<<<<<< HEAD
import AuthWrapper from "../AuthWrapper";
=======
>>>>>>> d34a434b8969404e82589add63016405b9f27bc2

const Signin = () => {
  const [state, setstate] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setstate((prevstate) => ({
      ...prevstate,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = state;

    try {
      await auth.signInWithEmailAndPassword(email, password);

      setstate({ email: "", password: "" });
    } catch (err) {
      // ("console.log(err);");
    }
<<<<<<< HEAD
  };

  const { email, password } = state;

  const configAuthWrapper = {
    headline: "LogIn",
=======
>>>>>>> d34a434b8969404e82589add63016405b9f27bc2
  };

  const { email, password } = state;

  return (
<<<<<<< HEAD
    <AuthWrapper {...configAuthWrapper}>
      <div className="formWrap">
        <form onSubmit={handleSubmit}>
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
          <Button type="submit">Sign in </Button>

          <div className="socialSignin">
            <div className="row">
              <Button onClick={signInWithGoogle}>Sign in with Google</Button>
=======
    <div className="signin">
      <div className="wrap">
        <h2>Login</h2>
        <div className="formWrap">
          <form onSubmit={handleSubmit}>
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
            <Button type="submit">Sign in </Button>

            <div className="socialSignin">
              <div className="row">
                <Button onClick={signInWithGoogle}>Sign in with Google</Button>
              </div>
>>>>>>> d34a434b8969404e82589add63016405b9f27bc2
            </div>
          </div>
        </form>
      </div>
    </AuthWrapper>
  );
};

export default Signin;
