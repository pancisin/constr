<template>
  <div 
    class="volume"
    @mouseover="mouseOverChange"
    @mouseout="mouseOverChange">

    <span><b>{{ value }}</b> m<sup>3</sup></span>

    <transition name="fade">
      <div class="volume-detail text-dark" v-show="showDetail" :style="style">
        <dl class="dl-horizontal">
          <dt>
            Volume
          </dt>
          <dd>
            {{ value }} m<sup>3</sup>
          </dd>
        </dl>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'volume',
  props: {
    value: {
      type: Number | String,
      required: true,
      default () {
        return 0;
      }
    }
  },
  data () {
    return {
      showDetail: false,
      position: {},
      style: {}
    }
  },
  watch: {
    showDetail (newVal) {
      if(newVal) {
        this.style = {
          left: `${ this.position.x + 5 }px`,
          top: `${ this.position.y + 5 }px`
        }
      }
    }
  },
  methods: {
    mouseOverChange (event) {
      this.position = {
        x: event.layerX,
        y: event.layerY
      }
      this.showDetail = event.type === 'mouseover';
    }
  }
}
</script>

<style lang="less">
.volume {
  position: relative;

  .volume-detail {
    position: absolute;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    background: #fff;
    padding: 15px;
    // bottom: 0;
    // left: 100%;
    z-index: 1;
    min-width: 200px;
  }
}
</style>
