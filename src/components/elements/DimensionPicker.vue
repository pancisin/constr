<template>
  <div 
    class="input-group">
    <input 
      class="form-control form-control-sm text-center"  
      placeholder="Width"
      v-model.number="dimenstion.width">
    <div class="input-group-prepend">
      <div class="input-group-text">x</div>
    </div>
    <input 
      class="form-control form-control-sm text-center"  
      placeholder="Depth"
      v-model.number="dimenstion.depth">
    <div class="input-group-prepend">
      <div class="input-group-text">x</div>
    </div>
      <input 
      class="form-control form-control-sm text-center"  
      placeholder="Height"
      v-model.number="dimenstion.height">
  </div>
</template>

<script>
export default {
  name: 'dimension-picker',
  data () {
    dimenstion: {}
  },
  watch: {
    dimenstion: {
      handler (newVal) {
        this.$emit('input', newVal);
      },
      deep: true
    }
  }
}
</script>

