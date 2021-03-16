<template>
  <div class="container">
    <div class="row">
      <div v-for="(product,i) in Products" :key="i" class="col-lg-4 col-md-4 col-sm-12 mt-2">
        <Card :row="product"/>
      </div>
    </div>
  </div>
</template>

<script>

import Card from '~/components/Card/index'

import {mapActions, mapState} from "vuex";

export default {
  name: "index",
  components: {
    Card
  },

  computed: {
    ...mapState({
      Products: state => state.products.products
    })
  },
  methods: {
    ...mapActions({
      fetchProducts: 'products/fetchProducts'
    }),

    fetchProductData() {
      this.fetchProducts();
    }
  },
  created() {
    this.fetchProductData()
  }
}
</script>

<style scoped>

</style>
