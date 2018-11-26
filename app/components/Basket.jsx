import React from "react";

class Basket extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { basket, increaseQuantity, deleteItem } = this.props;
    return (
      <div className="mr-4">
        <h2>Your Basket</h2>
         <span>
          Total Item..{basket.itemAdded.length > 0 && basket.itemAdded.length}
        </span>
        {basket.itemAdded.map((item, i) => (
          <ul key={i} className="list-group">
            <li className="list-group-item d-flex justify-content-between">
              <span className=""> {item.name} </span>
              <span> £{item.price}</span>
              <select
                onChange={e =>
                  increaseQuantity(item.id, basket.itemAdded, e.target.value)
                }
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
              </select>
              <button
                onClick={() => deleteItem(item.id, basket.itemAdded)}
                className="btn btn-outline-primary btn-sm"
                type="button"
              >
                X
              </button>
            </li>
          </ul>
        ))}
      </div>
    );
  }
}

export default Basket;
