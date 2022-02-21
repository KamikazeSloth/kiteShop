<template>
  <div>
    <h1 class="heading">Alla våra kites</h1>
    <p class="paragraph">vi säljer kites från slingshot och även lokala märken som är av minst lika hög kvalitet</p>
    <div v-if="isLoading">...loading</div>
    <ProductContainer class="productContainer">
      <ProductCard
        v-for="kite in kites"
        :key="kite.id"
        :brand="kite.model"
        :name="kite.brand"
      />
    </ProductContainer>
  </div>
</template>

<script>
import ProductCard from "../components/ProductCard.vue";

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
  mounted() {
    fetch("http://localhost:3000/kites")
      .then((response) => response.json())
      .then((json) => {
        this.kites = json;
        this.isLoading = false;
      })
      .catch((e) => console.log("error", e));
  },
};
</script>

<style scoped lang="scss">
@import "../styles/css/typography.scss";

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
