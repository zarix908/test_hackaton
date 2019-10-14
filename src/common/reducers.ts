import { ApplicationState } from "./index";
import { ACTIONS, IAction, IChangeNamePayload } from "./types";

export const initialState = {
  name: "Vasya",
  age: 0
};

export const personsReducer = (
  state: ApplicationState = initialState,
  action: IAction
) => {
  switch (action.type) {
    case ACTIONS.CHANGE_NAME: {
      const { newName } = action.payload as IChangeNamePayload;
      return { ...state, name: newName };
    }
    default:
      return state;
  }
};
