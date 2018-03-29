<template>
  <div class="floor-form card">
    <div class="card-header">
      Floor {{ value.index + 1 }}
    </div>
    <div class="card-body">

      <div class="form-group">
        <label>Height</label>
        <input type="number" v-model.number="floor.height" class="form-control">
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'floor-form',
  props: {
    value: Object
  },
  data () {
    return {
      floor: {
        height: 0
      }
    }
  },
  watch: {
    // value: {
    //   handler (newVal) {
    //     if (newVal != this.floor) {
    //       this.initialize();
    //     } 
    //   },
    //   deep: true
    // },
    floor: {
      handler (newVal) {
        this.$emit('input', newVal)
      },
      deep: true
    }
  },
  created () {
    this.initialize();
  },
  methods: {
    initialize () {
      this.floor = { ...this.value }
    }
  }
}
</script>

<style lang="less">
.floor-form {

  & ~ .floor-form {
    margin-top: 15px;
  }
}
</style>
