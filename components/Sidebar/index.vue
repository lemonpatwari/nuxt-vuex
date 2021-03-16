<template>
  <div>
    <div class="container">
      <b-navbar toggleable="lg" type="dark" variant="info" fixed="fixed">
        <b-navbar-brand href="#">NuxtVuex</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#">Home</b-nav-item>
            <b-nav-item href="#">About</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template #button-content>
                <em>Cart <sup>{{ cartItemCount }}</sup></em>
              </template>

              <template v-for="(cartItem,i) in cartItems">
                <b-dropdown-item :key="i" href="#"> {{ cartItem.product.vendor }} / {{ cartItem.quantity }} /
                  {{ cartItem.quantity * parseInt(cartItem.product.price) }}
                </b-dropdown-item>
              </template>

              <hr>
              <b-dropdown-item> Total = {{ totalAmount }}</b-dropdown-item>

            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapState} from "vuex";

export default {
  name: "index",
  computed: {
    ...mapState({
      cartItems: state => state.cart.cart,
    }),

    ...mapGetters({
      cartItemCount: "cart/cartItemCount",
      totalAmount: "cart/totalAmount",
    })
  }
}
</script>

<style scoped>

</style>
