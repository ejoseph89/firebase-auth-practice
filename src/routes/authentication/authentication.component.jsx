import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import "./authentication.styles.scss";

const Authentication = () => {
  return (
    <section className="authentication-container">
      <div className="authentication-form-container">
        <SignInForm />
        <SignUpForm />
      </div>
    </section>
  );
};
export default Authentication;
