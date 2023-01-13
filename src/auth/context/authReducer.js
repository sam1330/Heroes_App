import { TYPES } from "../types/types";

const initialState = {
  logged: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.login:
      return {
        ...state,
        logged: true,
        user: action.payload,
      };

    case TYPES.logout:
      return {
        logged: false,
      };

    default:
      return state;
  }
};
