import { AxiosResponse, AxiosError } from "axios";

export const apiRequest = async <T>(
  request: Promise<AxiosResponse<T>>
): Promise<T> => {
  try {
    const response = await request;
    return response.data;
  } catch (error: any) {
    handleApiError(error);
    throw error;
  }
};

const handleApiError = (error: AxiosError) => {
  console.error("API Error: ", error);
};
