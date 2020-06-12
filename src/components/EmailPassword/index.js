import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./styles.scss";

import { auth } from "../../firebase/utils";

import AuthWrapper from "./../AuthWrapper";
import FormInput from "./../FormInput";
import Button from "../Forms/Button";

const EmailPassword = () => {
  const [state, setstate] = useState({ email: "", errors: [] });

  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setstate((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { email } = state;

      const config = {
        url: "http://localhost:3000/login",
      };

      await auth
        .sendPasswordResetEmail(email, config)
        .then(() => {
          history.push("/login");
        })
        .catch(() => {
          const err = ["Email not found. Please try again"];

          setstate((prevState) => ({ ...prevState, errors: err }));
        });
    } catch (err) {
      console.log(err);
    }
  };

  const { email, errors } = state;

  const configAuthWrapper = {
    headline: "Email Password",
  };

  return (
    <AuthWrapper {...configAuthWrapper}>
      <div className="formWrap">
        {errors.length > 0 && (
          <ul>
            {errors.map((err, index) => {
              return <li key={index}>{err}</li>;
            })}
          </ul>
        )}

        <form onSubmit={handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            handleChange={handleChange}
          />
          <Button>Email Password</Button>
        </form>
      </div>
    </AuthWrapper>
  );
};

export default EmailPassword;
