<template>
  <div class="rounded-lg bg-white shadow-lg p-4">
    <product-item
      v-for="prod in products"
      :key="prod.productId"
      :image="prod.image"
      :title="prod.title"
      :description="prod.description"
      :price="prod.price"
      :prod-id="prod.productId"
    ></product-item>
  </div>
</template>

<script>
import ProductItem from '../components/UI/ProductItem.vue';

export default {
  components: {
    ProductItem,
  },
  data() {
    return {};
  },
  computed: {
    products() {
      return this.$store.getters['products/products'];
    },
  },
};
</script>

<style scoped>
.wrap-search {
  height: 29px;
  border-radius: 42px;
  background-color: #f5f4f9;
  padding: 0 8px;
  width: 217px;
}

.wrap-search input {
  font-family: 'DM Sans', sans-serif;
  font-size: 12px;
}

.selectbox-custom {
  background-color: #f5f4f9;
  height: 27px;
  /* width: 97px; */
  font-size: 12px;
  color: #777777;
  border-radius: 5px;
}

table thead {
  background-color: #f4faff;
}
</style>
