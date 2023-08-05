export interface UserLogIn {
  email: string;
  password: string;
}

export type SignInResDto = {
  access_token: string;
};

export type UserData = (UserLogIn & SignInResDto) | null;

export type AuthContextType = {
  user: UserData;
  login: (userData: UserData) => vpod;
  logout: () => void;
};
