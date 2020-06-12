import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

import { signInWithGoogle, auth } from "./../../firebase/utils";

import Button from "../Forms/Button";
import FormInput from "../FormInput";
import AuthWrapper from "../AuthWrapper";

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
  };

  const { email, password } = state;

  const configAuthWrapper = {
    headline: "LogIn",
  };

  return (
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
            </div>
          </div>
          <div className="links">
            <Link to="/recovery">Reset Password</Link>
          </div>
        </form>
      </div>
    </AuthWrapper>
  );
};

export default Signin;
