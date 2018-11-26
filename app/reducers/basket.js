import {
  BASKET_LOADED,
  BASKET_ADD_ITEM,
  INCREASE_QUANTITY,
  DELETE_ITEM
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
      return {
        ...state,
        itemAdded: [...state.itemAdded, action.item]
      };
    case INCREASE_QUANTITY:
      return {
        ...state,
        itemAdded: action.updatedItems
      };
    case DELETE_ITEM:
      return {
        ...state,
        itemAdded: action.removeItem
      };
    default:
      return state;
  }
}

export default basketReducer;
