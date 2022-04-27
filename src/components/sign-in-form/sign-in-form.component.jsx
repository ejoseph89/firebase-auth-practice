const SignInForm = () => {
  return (
    <article className="sign-in-container">
      <div>
        <h2>I already have an account</h2>
        <p>Sign in with your email and password</p>
        <form className="auth-form">
          <label htmlFor="email">email</label>
          <input type="email" name="" id="email" />
          <label htmlFor="password">password</label>
          <input type="password" name="" id="password" />
          <div className="auth-form-submit">
            <button type="submit">Sign In</button>
            <button type="button">Sign In with Google</button>
          </div>
        </form>
      </div>
    </article>
  );
}
export default SignInForm