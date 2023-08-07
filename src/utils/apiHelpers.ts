import { AxiosResponse } from "axios";

export const apiRequest = async <T>(
  request: Promise<AxiosResponse<T>>
): Promise<T | boolean> => {
  try {
    const response = await request;

    return response.data ? response.data : true;
  } catch (error: any) {
    const errorMessage = handleApiError(error);

    console.log(`에러메시지: `, errorMessage);

    return false;
  }
};

const handleApiError = (error: any) => {
  return (
    error.response?.data?.message || "이메일 또는 비밀번호를 다시 확인해주세요"
  );
};
