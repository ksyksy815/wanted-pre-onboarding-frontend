import axios from "axios";
import {
  BASE_URL,
  USER_SIGNIN_URL,
  USER_SIGNUP_URL,
  TODO_CREATE_URL,
  TODO_DELETE_URL,
  TODO_EDIT_URL,
  TODO_GET_URL,
} from "./apiUrls";
import { UserLogIn } from "../types/user";
import { getAccessToken } from "../utils/helpers";
import { TodoEditDto } from "../types/todo";
import { apiRequest } from "../utils/apiHelpers";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const getAuthHeaders = () => {
  return {
    headers: {
      Authorization: `Bearer ${getAccessToken()}`,
    },
  };
};

export const signup = async (loginData: UserLogIn) => {
  return await apiRequest(api.post(USER_SIGNUP_URL, loginData));
};

export const signin = async (loginData: UserLogIn) => {
  return await apiRequest(api.post(USER_SIGNIN_URL, loginData));
};

export const createTodo = async (todo: string) => {
  return await apiRequest(
    api.post(TODO_CREATE_URL, { todo }, getAuthHeaders())
  );
};

export const getTodoList = async () => {
  return await apiRequest(api.get(TODO_GET_URL, getAuthHeaders()));
};

export const deleteTodo = async (todoId: number) => {
  return await apiRequest(
    api.delete(TODO_DELETE_URL(todoId), getAuthHeaders())
  );
};

export const editTodo = async (todoId: number, data: TodoEditDto) => {
  return await apiRequest(
    api.put(TODO_EDIT_URL(todoId), data, getAuthHeaders())
  );
};
