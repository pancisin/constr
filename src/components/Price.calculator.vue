<template>
  <div class="price-calculator">
    <b>Price</b>
    <div class="form-group">
      <label>Price/m<sup>3</sup></label>
      <input type="number" name="bh" class="form-control form-control-sm" v-model="price">
    </div>

    <div class="card border-success">
      <div class="card-body text-center text-success">
        <b>{{ finalPrice }}</b> €
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'price-calculator',
  props: {
    items: Number
  },
  data () {
    return {
      price: 0
    };
  },
  computed: {
    finalPrice () {
      return (this.items * this.price || 0).toFixed(2);
    }
  }
};
</script>

<style>

</style>
