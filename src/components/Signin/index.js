import React, { useState } from "react";
import "./styles.scss";
import Button from "../Forms/Button";
import { signInWithGoogle, auth } from "./../../firebase/utils";
import FormInput from "../FormInput";

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

  return (
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
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
