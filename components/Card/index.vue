<template>
  <div>
    <b-card
      :title="row.title"
      :img-src="`/images/${row.image_url}`"
      :img-alt="row.title"
      img-top
      tag="article"
      class="mb-2"
    >
      <b-card-text>
        {{ row.description }}
      </b-card-text>

      <b-button type="button" variant="primary" @click="addToCard">Add to Cart</b-button>
      <b-button type="button" variant="info"> {{ row.price }} BDT</b-button>
    </b-card>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "index",
  props: {
    row: {
      type: Object,
      required: true
    },
  },

  methods: {
    ...mapActions({
      addToCart: 'cart/addToCart'
    }),

    addToCard() {
      this.addToCart({
        product: this.row,
        quantity: 1
      });
    }
  }
}
</script>

<style scoped>

</style>
