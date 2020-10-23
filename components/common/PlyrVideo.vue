<template>
  <div
    ref="plyr"
    data-plyr-provider="vimeo"
    :data-plyr-embed-id="id"
  ></div>
</template>

<script>
import plyr from "plyr";
export default {
  props: {
    id: {
      type: String,
      require: true
    }
  },
  mounted() {
    this.player = new plyr(this.$refs.plyr);
  }
};
</script>

<style>
@import url('~/node_modules/plyr/dist/plyr.css');
</style>
