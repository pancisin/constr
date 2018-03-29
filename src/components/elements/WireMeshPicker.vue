<template>
  <div class="brick-picker">
    <brick-selector :bricks="meshes" v-model="mesh" />

    <div class="form-group mt-3" v-show="mesh.custom">
      <label>Dimensions</label> 
      <div class="input-group">
        <input 
          class="form-control form-control-sm text-center"  
          placeholder="Width"
          v-model="mesh.width">
        <div class="input-group-prepend">
          <div class="input-group-text">x</div>
        </div>
        <input 
          class="form-control form-control-sm text-center"  
          placeholder="Height"
          v-model="mesh.height">
        <div class="input-group-prepend">
          <div class="input-group-text">x</div>
        </div>
        <input 
          class="form-control form-control-sm text-center"  
          placeholder="Depth"
          v-model="mesh.depth">
      </div>
    </div>
  </div>
</template>

<script>
import WireMeshes from '../../services/maps/wireMeshes.map';
import BrickSelector from './BrickSelector';
export default {
  name: 'wire-mesh-picker',
  data () {
    return {
      mesh: {
        width: 0,
        depth: 0
      }
    };
  },
  components: {
    BrickSelector
  },
  computed: {
    meshes () {
      return [...WireMeshes, { name: 'Custom', custom: true }];
    }
  },
  watch: {
    mesh: {
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
