<template>
  <div class="plate-calculator">
    <b>Concrete plate</b>

    <div class="form-group">
      <label>Plate height</label>
      <input 
        type="number"
        class="form-control"
        v-model.number="plate.height">
    </div>

    <div class="form-group">
      <label>Wire mesh</label>
      <wire-mesh-picker v-model="mesh" />
    </div>

    <div class="card border-success mt-2">
      <div class="card-body text-center text-success">
        <volume :value="result" />
        <hr />
        <b>{{ wireMeshesCount }}</b> pieces of wire mesh
        <hr />
        mesh volume: <volume :value="meshVolume" />
      </div>
    </div>
  </div>
</template>

<script>
import ConcreateCalc from '../services/calc/concrete.calc';
import SteelCalc from '../services/calc/steel.calc';
import { Volume, WireMeshPicker } from './elements';
import { mapGetters } from 'vuex';

export default {
  name: 'concrete-plate-calculator',
  data () {
    return {
      plate: {
        height: 0
      },
      mesh: {}
    }
  },
  components: {
    Volume,
    WireMeshPicker
  },
  computed: {
    ...mapGetters(['building']),
    result () {
      return ConcreateCalc.plate(
        this.building.width,
        this.building.depth,
        this.plate.height
      ) || 0
    },
    meshVolume () {
      return SteelCalc.wireMesh.volume(this.mesh) || 0
    },
    wireMeshesCount () {
      return SteelCalc.wireMesh.count(this.building.width, this.building.depth, this.mesh) || 0
    }
  }
}
</script>
