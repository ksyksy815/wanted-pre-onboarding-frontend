export const getAccessToken = (): string | null => {
  return localStorage.getItem("access_token");
};

export const setAccessToken = (accessToken: string) => {
  localStorage.setItem("access_token", accessToken);
};
