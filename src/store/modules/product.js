export default {
  namespaced: true,
  state() {
    return {
      products: [
        {
          productId: 'p1',
          title: 'Book 1',
          description: 'A good book',
          price: 9.99,
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCp1EK5V6_Uf2znMD5DZBd5msa4CrXJ8RIdQ&s',
        },
        {
          productId: 'p2',
          title: 'Book 2',
          description: 'A good book',
          price: 9.99,
          image:
            'https://i0.wp.com/megandowdlambert.com/wp-content/uploads/Reading-Picture-Books-with-Children-EXPANDED_FNL_CVR_300-2-scaled.jpg?fit=2098%2C2560&ssl=1',
        },
        {
          productId: 'p3',
          title: 'Book 3',
          description: 'A good book',
          price: 9.99,
          image:
            'https://m.media-amazon.com/images/I/519RMZAEW3L._AC_UF1000,1000_QL80_.jpg',
        },
      ],
    };
  },
  getters: {
    products(state) {
      return state.products;
    },
  },
};
