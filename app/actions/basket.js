export const BASKET_LOADING = "BASKET_LOADING";
export const BASKET_LOADED = "BASKET_LOADED";
export const BASKET_ADD_ITEM = "BASKET_ADD_ITEM";
export const INCREASE_QUANTITY = "INCREASE_QUANTITY";
export const DELETE_ITEM = "DELETE_ITEM";

export function loadBasket() {
  return async (dispatch, _, config) => {
    dispatch({ type: BASKET_LOADING });

    const response = await fetch(config.cartApi, {
      method: "POST",
      body: JSON.stringify({})
    });
    const basket = await response.json();

    dispatch({
      type: BASKET_LOADED,
      ...basket
    });
  };
}
export function addToBasket(product, itemAdded) {
  return {
    type: BASKET_ADD_ITEM,
    item: product
  };
}
export function increaseQuantity(id, items, value) {
  var updatedItems = [];
  items.forEach(item => {
    if (item.id === id) {
      const newItem = {
        id: item.id,
        price: item.actualPrice
          ? item.actualPrice * parseInt(value)
          : item.price * parseInt(value),
        name: item.name,
        actualPrice: item.actualPrice ? item.actualPrice : item.price
      };
      updatedItems.push(newItem);
    } else {
      const newItem = {
        id: item.id,
        price: item.price,
        name: item.name
      };
      updatedItems.push(newItem);
    }
  });
  return {
    type: INCREASE_QUANTITY,
    updatedItems
  };
}

export function deleteItem(id, itemAdded) {
  const removeItem = itemAdded.filter(item => item.id !== id);
  return {
    type: DELETE_ITEM,
    removeItem
  };
}