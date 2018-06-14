<template>
    <div class="border-container d-flex flex-column">
        <Positions v-if="contentType==0"></Positions>
    </div>
</template>
<script>
import Positions from './person-positions.vue'
export default {
  name: "border",
  props: {
    contentType: Number
  },
  components:{
      Positions
  },
  data: function() {
    return {};
  }
};
</script>
<style scoped>
    .border-container{
        border: 5px solid transparent;
        -moz-border-image:url('../../assets/imgs/content-border.png') 5 5 5 round;	/* Old Firefox */
        -webkit-border-image:url('../../assets/imgs/content-border.png') 5 5 5 round;	/* Safari and Chrome */
        -o-border-image:url('../../assets/imgs/content-border.png') 5 5 5 round;
        border-image:url('../../assets/imgs/content-border.png') 5 5 5 round;
    }
</style>


