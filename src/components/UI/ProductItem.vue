<template>
  <div
    class="mb-5 flex flex-col bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl dark:border-gray-700"
  >
    <img
      class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
      :src="image"
      alt=""
    />
    <div class="flex flex-col p-4 leading-normal">
      <h5 class="mb-2 text-2xl font-bold tracking-tight">
        {{ title }}
      </h5>
      <span
        class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-green-900 dark:text-green-300"
        >${{ price }}</span
      >
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {{ description }}
      </p>
      <button
        type="button"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        @click="addToCart"
      >
        Add to cart
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['image', 'title', 'description', 'price', 'prodId'],
  methods: {
    addToCart() {
      this.$store.dispatch('cart/addToCart', {
        id: this.prodId,
      });
    },
  },
};
</script>
