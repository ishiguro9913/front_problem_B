import React from "react";
import { render } from "react-dom";

import Form from "./components/Form";
import List from "./components/List";

class MemoApp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>MemoApp</h2>
        <Form />
        <List />
      </div>
    );
  }
}

export default MemoApp;