import { createStore } from "redux";
import { initialState, personsReducer } from "./reducers";

export interface ApplicationState {
  name: string;
  age: number;
}

export const store = createStore(personsReducer, initialState as any);
