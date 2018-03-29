<template>
  <div class="brick-picker">
    <brick-selector :bricks="bricks" v-model="brick" />

    <div class="form-group mt-3" v-show="brick.custom">
      <label>Dimensions</label> 
      <div class="input-group">
        <input 
          class="form-control form-control-sm text-center"  
          placeholder="Width"
          v-model="brick.width">
        <div class="input-group-prepend">
          <div class="input-group-text">x</div>
        </div>
        <input 
          class="form-control form-control-sm text-center"  
          placeholder="Height"
          v-model="brick.height">
        <div class="input-group-prepend">
          <div class="input-group-text">x</div>
        </div>
        <input 
          class="form-control form-control-sm text-center"  
          placeholder="Depth"
          v-model="brick.depth">
      </div>
    </div>
  </div>
</template>

<script>
import BoardingBricks from '../../services/maps/boardingBricks.map';
import BrickSelector from './BrickSelector';
export default {
  name: 'brick-picker',
  data () {
    return {
      brick: {
        width: 0,
        height: 0,
        depth: 0
      }
    };
  },
  components: {
    BrickSelector
  },
  computed: {
    bricks () {
      return [...BoardingBricks, { name: 'Custom', custom: true }];
    }
  },
  watch: {
    brick: {
      handler (newVal) {
        this.$emit('input', newVal);
      },
      deep: true
    }
  }
};
</script>

<style>

</style>
