import {products} from '~/static/data/products'

export const state = () => ({
  products: ''
})

export const getters = {}

export const mutations = {
  fetchProducts: (state, payload) => state.products = payload,
}

export const actions = {

  fetchProducts({commit}) {

    commit('fetchProducts', products);

  }

}
