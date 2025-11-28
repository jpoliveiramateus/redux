import { UserActionType, UserState, UserAction } from "./userTypes";

const initialState: UserState = {
  user: null,
};

export const userReducer = (
  state = initialState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case UserActionType.LOGIN:
      return {
        ...state,
        user: action.payload,
      };
    case UserActionType.LOGOUT:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};
