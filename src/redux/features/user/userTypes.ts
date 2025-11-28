import { User } from "../../../types/user";

export enum UserActionType {
  LOGIN = "user/login",
  LOGOUT = "user/logout",
}

export type UserState = {
  user: User | null;
};

export type LoginAction = {
  type: UserActionType.LOGIN;
  payload: User;
};

export type LogoutAction = {
  type: UserActionType.LOGOUT;
};

export type UserAction = LoginAction | LogoutAction;
