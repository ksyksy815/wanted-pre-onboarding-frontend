export const BASE_URL = "https://www.pre-onboarding-selection-task.shop/";

/* Login & out */
export const USER_SIGNUP_URL = `/auth/signup`;
export const USER_SIGNIN_URL = `/auth/signin`;

/* Todo */
export const TODO_CREATE_URL = `/todos`;
export const TODO_GET_URL = `/todos`;
export const TODO_EDIT_URL = (id: number) => `/todos/${id}`;
export const TODO_DELETE_URL = (id: number) => `/todos/${id}`;
