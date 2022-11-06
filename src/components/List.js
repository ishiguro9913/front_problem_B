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
          <button onClick={() => this.props.deleteMemo(memo.id)}>X</button>  
          {memo.content}
        </li>
      );
    });
    return (
      <div class='list'>
        {list}
      </div>
    );
  }
}

export default List;