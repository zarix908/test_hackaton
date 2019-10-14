export enum ACTIONS {
  CHANGE_NAME = "CHANGE_NAME",
  CHANGE_AGE = "CHANGE_AGE"
}

export interface IChangeNamePayload {
  newName: string;
}

export interface IChangeAgePayload {
  newAge: number;
}

export interface IAction {
  type: ACTIONS;
  payload: IChangeNamePayload | IChangeAgePayload;
}
