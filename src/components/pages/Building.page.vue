<template>
  <div class="container page">
    
    <div class="row">
      <div class="col-md-4">
        <b>Building</b>
        <div class="form-group">
          <label>Dimensions</label>
          <div 
            class="input-group">
            <input 
              class="form-control form-control-sm text-center"  
              placeholder="Width"
              v-model.number="buildingCopy.width">
            <div class="input-group-prepend">
              <div class="input-group-text">x</div>
            </div>
            <input 
              class="form-control form-control-sm text-center"  
              placeholder="Depth"
              v-model.number="buildingCopy.depth">
            <div class="input-group-prepend">
              <div class="input-group-text">x</div>
            </div>
            <input 
              class="form-control form-control-sm text-center"  
              placeholder="Height"
              v-model.number="buildingCopy.height" disabled>
          </div>
          <small class="form-text text-muted">
            Enter total building width & height without insulation depth.
          </small>
        </div>

        <button type="button" class="btn btn-block mb-3" @click="addFloor">
          Add floor
        </button>

        <floor-form v-for="(floor, index) in building.floors" :key="index" v-model="building.floors[index]" />
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
import FloorForm from '../Floor.form';
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'building-page',
  data () {
    return {
      buildingCopy: {}
    }
  },
  computed: {
    ...mapGetters(['building'])
  },
  watch: {
    buildingCopy: {
      handler (newVal) {
        this.setBuilding(newVal);
      },
      deep: true
    },
    building: {
      handler (newVal) {
        if (newVal.width !== this.buildingCopy.width || newVal.depth !== this.buildingCopy.depth || newVal.height !== this.buildingCopy.height) {
          this.buildingCopy = { ...newVal }
        }
      },
      deep: true
    }
  },
  created () {
    this.buildingCopy = { ...this.building }
  },
  methods: {
    ...mapActions(['setBuilding', 'addFloor'])
  },
  components: {
    BuildingForm,
    FloorForm
  }
}
</script>

<style>

</style>
