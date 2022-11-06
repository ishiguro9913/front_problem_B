import React from "react";
import { render } from "react-dom";

import Form from "./components/Form";
import List from "./components/List";

class MemoApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      memos: []
    };
  }

  addMemo = content => {
    this.setState({
      memos: [...this.state.memos, { content: content }],
    });
  };

  render() {
    return (
      <div>
        <Form addMemo={this.addMemo} />
        <List memos={this.state.memos} />
      </div>
    );
  }
}

export default MemoApp;