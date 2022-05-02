<template>
  <div>
    <h1 class="heading">Alla våra kites</h1>
    <p class="paragraph">vi säljer kites från slingshot och även lokala märken som är av minst lika hög kvalitet</p>
    <div v-if="isLoading">...loading</div>
    <ProductContainer class="productContainer">
      <ProductCard v-for="kite in kites" 
        :key="kite.id"
        :onClick="addToCart.bind(null, kite)"
        :name="kite.model"
        :brand="kite.brand"
      />
    </ProductContainer>
  </div>
</template>
<script>
import ProductCard from "../components/ProductCard.vue";
import { addProductToCart } from "../store/mutationTypes";
import { store } from "../store/store"

export default {
  name: "Kites",
  components: {
    ProductCard,
  },
  data: function () {
    return {
      kites: [],
      isLoading: true,
    };
  },
  methods: {
    addToCart: function (product) {
    store.commit(addProductToCart, product)
    },
  },
  mounted() {
    // fetch("http://localhost:3000/kites")
    //   .then((response) => response.json())
    //   .then((json) => {
        const json = [
          {
            id: '123',
            brand: 'Slingshot',
            model: 'RPM'
          },
          {
            id: '456',
            brand: 'Slingshot',
            model: 'Fuel'
          },
          {
            id: '890',
            brand: 'Slingshot',
            model: 'Raptor'
          }
]
        this.kites = json;
        this.isLoading = false;
      // })
      // .catch((e) => console.log("error", e));
  },
};
</script>

<style scoped lang="scss">

.productContainer {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
}

@media only screen and (max-width: 992px) {
  .productContainer {
    grid-template-columns: 1fr;
  }
} 

</style>
