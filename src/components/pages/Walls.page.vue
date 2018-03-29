<template>
  <div class="container page">
    <h2>Enclosure walls</h2>
    <hr />

    <div class="row">
      <div class="col-md">
        <building-form v-model="building" class="mb-3" />

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
      <div class="col-md">

      </div>
    </div>
  </div>
</template>

<script>
import BuildingForm from "../Building.form";
import BrickCalc from "../../services/calc/brick.calc";
import { WallBrickPicker } from "../elements";

export default {
  name: "walls-page",
  data() {
    return {
      building: {},
      brick: {}
    };
  },
  components: {
    BuildingForm,
    WallBrickPicker
  },
  computed: {
    bricks() {
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
