export const BASKET_LOADING = 'BASKET_LOADING';
export const BASKET_LOADED = 'BASKET_LOADED';
export const BASKET_ADD_ITEM = "BASKET_ADD_ITEM";

export function loadBasket() {
    return async (dispatch, _, config) => {
        dispatch({ type: BASKET_LOADING });

        const response = await fetch(config.cartApi, { method: 'POST', body: JSON.stringify({}) });
        const basket = await response.json();

        dispatch({
            type: BASKET_LOADED,
            ...basket,
        })
    };
}
export function addToBasket(product, itemAdded) {

  return {
    type: BASKET_ADD_ITEM,
    item: product
  };
}
