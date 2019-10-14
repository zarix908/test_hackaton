import {
  ACTIONS,
  IAction,
  IChangeAgePayload,
  IChangeNamePayload
} from "./types";

export const changeName = ({ newName }: IChangeNamePayload): IAction => ({
  type: ACTIONS.CHANGE_NAME,
  payload: { newName }
});

export const changeAge = ({ newAge }: IChangeAgePayload): IAction => ({
  type: ACTIONS.CHANGE_AGE,
  payload: { newAge }
});
