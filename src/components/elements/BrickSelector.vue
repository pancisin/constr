<template>
  <div 
    class="brick-selector">

    <input 
      type="text" 
      class="form-control"
      :value="selected.name" 
      placeholder="Select brick"
      @focus="focusChange"
      @blur="focusChange"/>

    <div 
      class="brick-selector-options" 
      v-show="showOptions">

      <div 
        class="option" 
        v-for="(brick, index) in bricks" 
        :key="index"
        @click="select(brick)">

        <img :src="brick.image">

        {{ brick.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'brick-selector',
  props: {
    bricks: Array
  },
  data () {
    return {
      showOptions: false,
      selected: {}
    };
  },
  methods: {
    focusChange (event) {
      if (event.type === 'focus') {
        this.showOptions = true;
      }
    },
    select (brick) {
      this.showOptions = false;
      this.selected = brick;
      this.$emit('input', brick);
    }
  }
};
</script>

<style lang="less">
.brick-selector {
  position: relative;

  .brick-selector-options {
    position: absolute;
    z-index: 1;
    background-color: #fff;
    width: 100%;
    // border: 1px solid #ccc;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);

    .option {
      cursor: pointer;
      padding: 7px 10px;
      transition: background-color 0.3s ease;

      img {
        width: 32px;
        margin-right: 10px;
      }

      &:hover {
        background-color: #eee;
      }

      & ~ .option {
        border-top: 1px solid #eee;
      }
    }
  }
}
</style>
