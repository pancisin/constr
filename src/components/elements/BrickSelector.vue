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
  name: "brick-selelctor",
  props: {
    bricks: Array
  },
  data() {
    return {
      showOptions: false,
      selected: {}
    };
  },
  methods: {
    focusChange(event) {
      if (event.type === "focus") {
        this.showOptions = true;
      }
    },
    select(brick) {
      this.showOptions = false;
      this.selected = brick;
      this.$emit("input", brick);
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
    background: #fff;
    width: 100%;
    border: 1px solid #ccc;

    .option {
      cursor: pointer;
      padding: 7px 10px;
      transition: background 0.3s ease;

      img {
        width: 32px;
        margin-right: 10px;
      }

      &:hover {
        background: #eee;
      }

      & ~ .option {
        border-top: 1px solid #eee;
      }
    }
  }
}
</style>
