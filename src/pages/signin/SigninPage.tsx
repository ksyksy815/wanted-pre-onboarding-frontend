import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SignInForm from "../../components/signin/SignInForm";
import Page from "../../components/Page";
import { UserLogIn } from "../../types/user";
import { signin } from "../../api/api";

const SigninPage = () => {
  const navigate = useNavigate();

  const goToSignUpPage = () => navigate("/signup");

  useEffect(() => {
    if (localStorage.getItem("access_token")) navigate("/todo");
  }, [navigate]);

  const loginUser = async (email: string, password: string) => {
    const reqDto: UserLogIn = { email, password };
    const result = await signin(reqDto);

    if (result) {
      localStorage.setItem("access_token", result["access_token"]);
      navigate("/todo");
    } else {
      alert("로그인이 실패했어요");
    }
  };

  return (
    <Page>
      <SignInForm pageMode="signIn" onSubmit={loginUser} />
      <span className="white_text_link" onClick={goToSignUpPage}>
        아직 회원이 아니신가요?
      </span>
    </Page>
  );
};

export default SigninPage;
