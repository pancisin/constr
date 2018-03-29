<template>
  <div class="building-form">
    <b>Building</b>
    <div class="form-group">
      <label>Dimensions</label>
      <div 
        class="input-group">
        <input 
          class="form-control form-control-sm text-center"  
          placeholder="Width"
          v-model.number="building.width">
        <div class="input-group-prepend">
          <div class="input-group-text">x</div>
        </div>
        <input 
          class="form-control form-control-sm text-center"  
          placeholder="Height"
          v-model.number="building.height">
        <div class="input-group-prepend">
          <div class="input-group-text">x</div>
        </div>
        <input 
          class="form-control form-control-sm text-center"  
          placeholder="Depth"
          v-model.number="building.depth">
      </div>
      <small class="form-text text-muted">
        Enter total building width & height without insulation depth.
      </small>
    </div>
  </div>
</template>

<script>
export default {
  name: 'building-form',
  data () {
    return {
      building: {
        width: 0,
        height: 0,
        depth: 0
      }
    };
  },
  watch: {
    building: {
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
