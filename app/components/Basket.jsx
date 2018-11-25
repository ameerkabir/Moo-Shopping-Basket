import React from "react";

class Basket extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { basket } = this.props;
    return (
      <div className="mr-4">
        <h2>Your Basket</h2>
        {basket.itemAdded.map((item, i) => (
          <ul key={i} className="list-group">
            <li className="list-group-item d-flex justify-content-between">
              <span className=""> {item.name} </span>
              <span> £{item.price}</span>
            </li>
          </ul>
        ))}
      </div>
    );
  }
}

export default Basket;
