export const state = () => ({
  cart: []
})

export const getters = {
  cartItemCount: (state) => {
    return state.cart.length;
  },

  totalAmount: (state) => {

    let totalPrice = '0';

    state.cart.map((item) => {
      totalPrice = parseFloat(totalPrice) + parseFloat(item.product.price * item.quantity);
    })

    return totalPrice;

  }
}

export const mutations = {
  ADD_TO_CARD: (state, {product, quantity}) => {

    let productInCart = state.cart.find(item => {
      return item.product.id === product.id;
    });

    if (productInCart) {
      productInCart.quantity += quantity;
      return;
    }

    state.cart.push({
      product,
      quantity,
    })

  },
}

export const actions = {

  addToCart({commit}, {product, quantity}) {


    /*console.log(product,'product');
    console.log(quantity,'quantity');*/

    commit('ADD_TO_CARD', {product, quantity});

  }

}
