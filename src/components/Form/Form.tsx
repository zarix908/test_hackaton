import { IAction } from "../../common/types";
import { store, ApplicationState } from "../../common";
import { connect } from "react-redux";
import { App } from "../App/App";
import * as React from "react";
import { Input } from "@material-ui/core";
import { changeName } from "../../common/actions";

type StateProps = ReturnType<typeof mapStateToProps>;
interface DispatchProps {
  dispatch?: (action: IAction) => void;
}
type Props = StateProps & DispatchProps;

function Form(props: Props) {
  return (
    <React.Fragment>
      <Input
        onChange={e => store.dispatch(changeName({ newName: e.target.value }))}
      />
      <span>{props.name}</span>
    </React.Fragment>
  );
}

const mapStateToProps = (state: ApplicationState) => ({
  name: state.name,
  age: state.age
});

export default connect(
  mapStateToProps,
  App
)(Form);
