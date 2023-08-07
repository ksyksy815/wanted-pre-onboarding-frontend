import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "../../api/api";
import Page from "../../components/Page";
import SignInForm from "../../components/signin/SignInForm";
import { UserLogIn } from "../../types/user";

const SignupPage = () => {
  const navigate = useNavigate();

  const goToSignInPage = () => navigate("/signin");

  useEffect(() => {
    if (localStorage.getItem("access_token")) navigate("/todo");
  }, [navigate]);

  const signUpNewUser = async (email: string, password: string) => {
    const reqDto: UserLogIn = { email, password };
    const result = await signup(reqDto);
    console.log(result);
    if (result) {
      navigate("/signin");
    } else {
      alert("회원가입이 실패했어요");
    }
  };

  return (
    <Page>
      <SignInForm pageMode="signUp" onSubmit={signUpNewUser} />
      <span className="white_text_link" onClick={goToSignInPage}>
        이미 회원이신가요?
      </span>
    </Page>
  );
};

export default SignupPage;
