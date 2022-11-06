import React from "react";
import { render } from "react-dom";

class List extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const list = this.props.memos.map(memo => {
      return (
        <li>
          {memo.content}
        </li>
      );
    });
    return (
      <div>
        {list}
      </div>
    );
  }
}

export default List;