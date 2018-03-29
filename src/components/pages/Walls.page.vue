<template>
  <div>
    <h2>Enclosure walls</h2>
    <hr />

    <div class="row">
      <div class="col-lg">
        <div class="form-group">
          <label>Brick type</label>
          <wall-brick-picker v-model="brick" />
        </div>

        <div class="card border-success mt-2">
          <div class="card-body text-center text-success">
            <b>{{ bricks }}</b> pieces
          </div>
        </div>
      </div>
      <div class="col-lg">

      </div>
    </div>
  </div>
</template>

<script>
import BrickCalc from '../../services/calc/brick.calc'
import { WallBrickPicker } from '../elements'
import { mapGetters } from 'vuex'

export default {
  name: 'walls-page',
  data () {
    return {
      brick: {}
    };
  },
  components: {
    WallBrickPicker
  },
  computed: {
    ...mapGetters(['building']),
    bricks () {
      return (
        BrickCalc.enclosure(
          this.building.width,
          this.building.height,
          this.building.depth,
          this.brick
        ) || 0
      );
    }
  }
};
</script>
