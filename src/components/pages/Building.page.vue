<template>
  <div class="container page">
    
    <div class="row">
      <div class="col-md-4">
        <building-form 
          v-model="building" 
          class="mb-3" />
      </div>
      <div class="col">
        <transition name="fade" mode="out-in">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import BuildingForm from '../Building.form'
import { mapActions } from 'vuex'
export default {
  name: 'building-page',
  data () {
    return {
      building: {}
    }
  },
  watch: {
    building: {
      handler (newVal) {
        this.setBuilding(newVal);
      },
      deep: true
    }
  },
  methods: {
    ...mapActions(['setBuilding'])
  },
  components: {
    BuildingForm
  }
}
</script>

<style>

</style>
