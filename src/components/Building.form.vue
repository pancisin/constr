<template>
  <div class="building-form">
    
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'building-form',
  data () {
    return {
      building: {
        width: 0,
        height: 0,
        depth: 0,
        floors: []
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
  },
  methods: {
   
  }
};
</script>

<style>

</style>
