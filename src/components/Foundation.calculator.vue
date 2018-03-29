<template>
  <form class="concrete-calculator" @submit.prevent="calculate">
    <b>Foundation</b>
    <div class="form-group">
      <label>Building offset</label>
      <input 
        type="number"
        class="form-control"
        v-model.number="foundation.offset">
      <small class="form-text text-muted">
        Foundation outer size may differ from building dimensions. 
        You can set offset property here.
      </small>
    </div>

    <div class="row">
      <div class="col">
        <div class="form-group">
          <label>Width</label>
          <input 
            type="number" 
            placeholder="Width"
            class="form-control form-control-sm" 
            v-model="foundation.width">
        </div>
      </div>
      <div class="col">
        <div class="form-group">
          <label>Height</label>
          <input 
            type="number" 
            placeholder="Height"
            class="form-control form-control-sm" 
            v-model="foundation.height">
        </div>
      </div>
    </div>

    <div class="card border-success mt-2">
      <div class="card-body text-center text-success">
        <volume :value="result" />
      </div>
    </div>
  </form>
</template>

<script>
import ConcreteCalc from '../services/calc/concrete.calc';
import { Volume } from './elements';

export default {
  name: 'foundation-calculator',
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
      foundation: {
        width: null,
        height: null,
        offset: 10
      }
    };
  },
  components: {
    Volume
  },
  computed: {
    result () {
      const func = ConcreteCalc.foundation[this.fType];
      let result = 0;
      if (func) {
        const width = this.building.width + 2 * this.foundation.offset;
        const height = this.building.depth + 2 * this.foundation.offset;
        result = func(width, height, this.foundation.width, this.foundation.height) || 0
      }

      this.$emit('update', result);
      return result;
    }
  }
};
</script>

<style>

</style>
