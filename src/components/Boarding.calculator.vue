<template>
  <form class="boarding-calculator">
    <b>Boarding bricks</b>
    <div class="form-group">
      <label>Rows</label>
      <input 
        type="number" 
        name="height" 
        class="form-control form-control-sm" 
        v-model="boarding.rows">
      <small class="form-text text-muted">
        Set the overal height of boarding blocks height with rows count.
      </small>
    </div>

    <div class="form-group">
      <label>Brick type</label>
      <boarding-brick-picker v-model="boarding.brick" />
    </div>

    <div class="card border-success mt-2">
      <div class="card-body text-center text-success">
        <b>~ {{ result }}</b> pieces
        <hr />
        <b>~ {{ boardingVolume }}</b> m<sup>3</sup>
        <div> 
          <small>of concrete is needed to fill bricks.</small>
        </div>
        <hr />
        <b>~ {{ totalWeight }}</b> t
      </div>
    </div>
  </form>
</template>

<script>
import BrickCalculator from '../services/calc/brick.calc';
import { BoardingBrickPicker } from './elements';
export default {
  name: 'boarding-calculator',
  props: {
    fType: {
      type: String,
      required: true
    },
    building: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      boarding: {
        rows: 0,
        brick: {}
      }
    };
  },
  components: {
    BoardingBrickPicker
  },
  computed: {
    result () {
      const func = BrickCalculator.boarding[this.fType];

      let result =
        (func &&
          func(
            this.building.width,
            this.building.depth,
            this.boarding.brick,
            this.boarding.rows
          )) ||
        0;
      this.$emit('update', result);
      return result;
    },
    boardingVolume () {
      return (this.result * 0.0245).toFixed(2);
    },
    totalWeight () {
      return (this.result * this.boarding.brick.weight / 1000 || 0).toFixed(2);
    }
  }
};
</script>

<style>

</style>
