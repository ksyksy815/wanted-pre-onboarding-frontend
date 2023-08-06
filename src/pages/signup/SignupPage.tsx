import Page from "../../components/Page";
import SignInForm from "../../components/signin/SignInForm";

const SignupPage = () => {
  return (
    <Page>
      <SignInForm pageMode="signUp" />
    </Page>
  );
};

export default SignupPage;
