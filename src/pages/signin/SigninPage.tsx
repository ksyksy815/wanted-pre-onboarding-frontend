import React from "react";
import SignInForm from "../../components/signin/SignInForm";
import Page from "../../components/Page";

const SigninPage = () => {
  return (
    <Page>
      <SignInForm pageMode="signIn" />
    </Page>
  );
};

export default SigninPage;
