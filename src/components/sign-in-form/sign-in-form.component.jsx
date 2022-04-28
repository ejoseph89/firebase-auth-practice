import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignInForm = () => {
  const logGoogleUser = async () => {
    try {
      const { user } = await signInWithGooglePopup();
      const userDocRef = await createUserDocumentFromAuth(user);
    } catch (error) {
      alert("User closed authentication pop up");
    }
  };

  return (
    <article className="sign-in-container">
      <div>
        <h2>I already have an account</h2>
        <p>Sign in with your email and password</p>
        <form className="auth-form">
          <label htmlFor="email">email</label>
          <input type="email" name="" id="email" autoComplete="on" />
          <label htmlFor="password">password</label>
          <input type="password" name="" id="password" autoComplete="on" />
          <div className="auth-form-submit">
            <button type="submit">Sign In</button>
            <button type="button" onClick={logGoogleUser}>
              Sign In with Google
            </button>
          </div>
        </form>
      </div>
    </article>
  );
};
export default SignInForm;
