import * as React from "react";
import { store } from "../../common";
import { Provider } from "react-redux";
import Form from "../Form/Form";

export function App() {
  return (
    <Provider store={store}>
      <Form />
    </Provider>
  );
}
