export default {
  namespaced: true,
  state() {
    return {
      items: [],
      total: 0,
      qty: 0,
    };
  },
  mutations: {
    addProductToCart(state, payload) {
      const productData = payload;
      const productInCartIndex = state.items.findIndex(
        (ci) => ci.id === productData.id,
      );
      if (productInCartIndex >= 0) {
        state.items[productInCartIndex].qty++;
      } else {
        const newItem = {
          productId: productData.id,
          title: productData.title,
          image: productData.image,
          price: productData.price,
          qty: 1,
        };
        state.items.push(newItem);
      }
      state.qty++;
      state.total += productData.price;
    },
    removeProductFromCart(state, payload) {
      const productId = payload.productId;
      const productInCartIndex = state.items.findIndex(
        (ci) => ci.id === productId,
      );
      const productData = state.items[productInCartIndex];
      state.items.splice(productInCartIndex, 1);
      state.qty -= productData.qty;
      state.total -= productData.price * productData.qty;
    },
  },
  actions: {
    addToCart(context, payload) {
      const prodId = payload.id;
      const products = context.rootGetters['products/products'];
      const product = products.find((prod) => prod.productId === prodId);
      context.commit('addProductToCart', product);
    },
    removeFromCart(context, payload) {
      context.commit('removeProductFromCart', payload);
    },
  },
  getters: {
    products(state) {
      return state.items;
    },
    totalSum(state) {
      return state.total;
    },
    quantity(state) {
      return state.qty;
    },
  },
};
