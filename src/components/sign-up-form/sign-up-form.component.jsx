const SignUpForm = () => {
  return (
    <article className="sign-up-container">
      <div>
        <h2>I dont have an account</h2>
        <p>Sign up with your email and password</p>
        <form className="auth-form">
          <label htmlFor="username">username</label>
          <input type="text" name="username" id="username" />
          <label htmlFor="sign-up-email">email</label>
          <input type="email" name="sign-up-email" id="sign-up-email" />
          <label htmlFor="sign-up-password">password</label>
          <input
            type="password"
            name="sign-up-password"
            id="sign-up-password"
          />
          <label htmlFor="confirm-password">confirm password</label>
          <input
            type="password"
            name="confirm-password"
            id="confirm-password"
          />
          <div className="auth-form-submit">
            <button type="submit">Sign Up</button>
          </div>
        </form>
      </div>
    </article>
  );
};
export default SignUpForm;
