import {
  BASKET_LOADED,
  BASKET_ADD_ITEM,
  INCREASE_QUANTITY
} from "../actions/basket";

const initialState = { items: {}, itemAdded: [] };

function basketReducer(state = initialState, action) {
  switch (action.type) {
    case BASKET_LOADED:
      return {
        ...state,
        id: action.cartId,
        items: action.cartItems
      };
    case BASKET_ADD_ITEM:
      // console.log({state})
      return {
        ...state,
        itemAdded: [...state.itemAdded, action.item]
      };
    case INCREASE_QUANTITY:
      return {
        ...state,
        itemAdded: action.updatedItems
      };
    default:
      return state;
  }
}

export default basketReducer;
