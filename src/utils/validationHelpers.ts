export const checkEmailValidity = (value: string) => {
  return value.includes("@");
};

export const checkPasswordValidity = (value: string) => {
  return value.length >= 8;
};
