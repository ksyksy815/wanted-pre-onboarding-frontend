import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  checkEmailValidity,
  checkPasswordValidity,
} from "../../utils/validationHelpers";
import ValidationMessage from "./ValidationMessage";
import { signup } from "../../api/api";
import { UserLogIn } from "../../types/user";

type SignInFormProps = {
  pageMode: "signIn" | "signUp";
};

const SignInForm = ({ pageMode }: SignInFormProps) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const buttonText = pageMode === "signIn" ? "로그인" : "회원가입";
  const buttonTestId =
    pageMode === "signIn" ? "signin-button" : "signup-button";

  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);

  const validateEmail = (value: string) => {
    setIsValidEmail(checkEmailValidity(value));
  };

  const validatePassword = (value: string) => {
    setIsValidPassword(checkPasswordValidity(value));
  };

  const onEmailInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    validateEmail(e.target.value);
  };

  const onPasswordInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    validatePassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (pageMode === "signUp") {
      const userData: UserLogIn = { email, password };
      const result = await signup(userData);

      if (result) navigate(`/todo`);
      else console.log(result);
    } else {
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            data-testid="email-input"
            placeholder={`Email`}
            value={email}
            onChange={(e) => onEmailInputChange(e)}
          />
        </div>
        {!isValidEmail && (
          <ValidationMessage message="올바른 이메일 형식을 작성해주세요" />
        )}
      </div>
      <div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            data-testid="password-input"
            placeholder={`Password`}
            value={password}
            onChange={(e) => onPasswordInputChange(e)}
          />
        </div>
        {!isValidPassword && (
          <ValidationMessage message="비밀번호는 8자 이상 작성해주세요" />
        )}
      </div>
      <div>
        <button
          type="submit"
          data-testid={buttonTestId}
          disabled={!isValidEmail || !isValidPassword}>
          {buttonText}
        </button>
      </div>
    </form>
  );
};

export default SignInForm;
