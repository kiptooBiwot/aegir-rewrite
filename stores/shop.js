// const { defineStore } = require("pinia");
import useBaseAPI from "@/composables/baseApiUrl.js"

export const useShopStore = defineStore('shop', {
  state: () => ({
    baseUrl: useBaseAPI(),
    products: [],
    product: null,
    cart: [],
    loading: false
  }),
  getters: {
    cartLength: (state) => {
      return state.cart.length
    },


    cartTotalPrice() {
      let total = 0

      this.cart.forEach((item) => {
        console.log('PRICE: ', item.product.price);
        total += item.product.price * item.quantity
      })
      console.log('STATE TOTAL: ', total)
      return total
    }
  },
  actions: {
    async getProducts() {
      // console.log('BASE URL:', this.baseUrl.baseAPIURL)
      this.loading = true
      try {
        const response = await $fetch('/products', {
          method: 'GET',
          baseURL: this.baseUrl.baseAPIURL,
          headers: {
            'Content-type': 'application/json',
          }
        })
        // console.log('RESPONSE: ', response)

        this.products = response
        this.loading = false
      } catch (error) {
        console.log(error)
      }
    },

    addProductToCart({ product, quantity }) {
      try {
        // console.log('DATA TO BE ADDED TO THE CART: ', { product, quantity });
        // Check if product exists in the cart aleady

        const productInCart = this.cart.find((item) => {
          item.product._id === product._id
        })

        // console.log('PRODUCT EXISTS: ', productInCart);
        if (productInCart) {

          productInCart.quantity += quantity
          return
        }

        this.cart.push({ product, quantity })
      } catch (error) {
        console.log(error)
      }
    }
  }
})