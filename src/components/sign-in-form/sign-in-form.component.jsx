import React, { useState } from "react";

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithGooglePopup();
    } catch (error) {
      alert("User closed authentication pop up");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);

      resetFormFields();
    } catch (error) {
      alert(error.code);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  return (
    <article className="sign-in-container">
      <div>
        <h2>I already have an account</h2>
        <p>Sign in with your email and password</p>
        <form className="auth-form" onSubmit={handleSubmit}>
          <FormInput
            label="email"
            type="email"
            required
            autoComplete="on"
            name="email"
            onChange={handleChange}
            value={email}
          />
          <FormInput
            label="password"
            type="password"
            required
            autoComplete="on"
            name="password"
            onChange={handleChange}
            value={password}
          />
          <div className="auth-form-submit">
            <button type="submit">Sign In</button>
            <button type="button" onClick={signInWithGoogle}>
              Sign In with Google
            </button>
          </div>
        </form>
      </div>
    </article>
  );
};
export default SignInForm;
