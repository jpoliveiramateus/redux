import { User } from "../../../types/user";
import { UserActionType, LoginAction, LogoutAction } from "./userTypes";

export const login = (user: User): LoginAction => {
  return {
    type: UserActionType.LOGIN,
    payload: user,
  };
};

export const logout = (): LogoutAction => {
  return {
    type: UserActionType.LOGOUT,
  };
};
