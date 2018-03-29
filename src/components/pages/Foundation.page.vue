<template>
  <div>
    <h3>Foundation calculator</h3>
    <hr />

    <div class="row">
      <div class="col-md">
        <div class="form-group">
          <label>Foundation type</label>
          <select class="form-control" v-model="fType">
            <option 
              v-for="(type, index) in foundationTypes" 
              :key="index" 
              :value="type.code">

              {{ type.name }}
            </option> 
          </select>
        </div>
        <foundation-calculator 
          @update="update" 
          :fType="fType" 
          :building="building" /> 
      </div>
      <div class="col-md">
        <price-calculator :items="items" class="mt-3" />
        <boarding-calculator 
          class="mt-3"
          :fType="fType"
          :building="building" />
      </div>
    </div>
  </div>
</template>

<script>
import FoundationCalculator from '../Foundation.calculator';
import PriceCalculator from '../Price.calculator';
import BoardingCalculator from '../Boarding.calculator';
import FoundationTypes from '../../services/maps/foundationTypes.map';
import { mapGetters } from 'vuex';

export default {
  name: 'concrete',
  data () {
    return {
      items: 0,
      fType: 'typeA'
    };
  },
  computed: {
    ...mapGetters(['building']),
    foundationTypes () {
      return FoundationTypes;
    }
  },
  components: {
    FoundationCalculator,
    PriceCalculator,
    BoardingCalculator
  },
  methods: {
    update (volume) {
      this.items = volume / 1000000;
    }
  }
};
</script>
