<template>
<!-- <div class="plyr__video-embed " ref="plyr">
  <iframe
    :src="`https://player.vimeo.com/video/${id}?loop=false&amp;byline=false&amp;portrait=false&amp;title=false&amp;speed=true&amp;transparent=1&amp;gesture=media`"
    allowfullscreen
    allowtransparency
    allow="autoplay"
  ></iframe>
</div> -->
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
    const controls =['play-large','rewind', 'play','fast-forward', 'progress', 'current-time', 'mute', 'volume',  'settings', 'pip', 'airplay', 'fullscreen']
    // const controls =['play-large']
    
    this.player = new plyr(this.$refs.plyr,{
      controls,
      vimeo:{
        responsive:true
      }
    });

  }
};
</script>

<style>
@import url('~/node_modules/plyr/dist/plyr.css');
  
</style>
