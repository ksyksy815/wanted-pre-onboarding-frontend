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

const authHeaders = {
  headers: {
    Authorization: `Bearer ${getAccessToken()}`,
  },
};

export const signup = (loginData: UserLogIn) => {
  return apiRequest(api.post(USER_SIGNUP_URL, loginData));
};

export const signin = (loginData: UserLogIn) => {
  return apiRequest(api.post(USER_SIGNIN_URL, loginData));
};

export const createTodo = (todo: string) => {
  return apiRequest(api.post(TODO_CREATE_URL, { todo }));
};

export const getTodoList = () => {
  return apiRequest(api.get(TODO_GET_URL, authHeaders));
};

export const deleteTodo = (todoId: number) => {
  return apiRequest(api.delete(TODO_DELETE_URL(todoId), authHeaders));
};

export const editTodo = (todoId: number, data: TodoEditDto) => {
  return apiRequest(api.put(TODO_EDIT_URL(todoId), data, authHeaders));
};
