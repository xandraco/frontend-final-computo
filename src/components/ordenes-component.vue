<template>
  <v-container fluid style="height: 100vh; max-height: 100vh; overflow-y: scroll;">
    <v-row>
      <v-col v-for="product in products" :key="product.id" cols="12" md="4">
        <v-card class="mb-3">
          <v-row>
            <v-col cols="12" class="d-flex justify-center align-center">
              <img src="@/assets/imgs/logo.png" height="100" class="rounded-top" />
            </v-col>
          </v-row>
          <v-card-title>{{ product.data.name }}</v-card-title>
          <v-card-text>{{ product.data.description }}</v-card-text>
          <v-card-actions>
            <v-row no-gutters>
              <v-col cols="6" class="d-flex justify-center align-center">
                <v-btn @click="decreaseQuantity()" color="primary">-</v-btn>
              </v-col>
              <v-col cols=6 class="d-flex justify-center align-center">
                <v-btn @click="increaseQuantity()" color="primary">+</v-btn>
              </v-col>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  data() {
    return {
      quantity: 0
    };
  },
  computed: {
    ...mapGetters(['getProducts']),
    products() {
      return this.getProducts;
    }
  },
  methods: {
    ...mapActions(['fetchProducts']),
    ...mapMutations(['INCREASE_PRODUCT_QUANTITY']),
    ...mapMutations(['DECREASE_PRODUCT_QUANTITY']),
    increaseQuantity() {
      this.INCREASE_PRODUCT_QUANTITY()
    },
    decreaseQuantity() {
      this.DECREASE_PRODUCT_QUANTITY()
    }
  },
  created() {
    this.fetchProducts()
  }

};
</script>