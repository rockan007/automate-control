<template>
    <div class="content-container row">
        <div class="col-7  d-flex flex-column  container-left" >
            <Border v-bind:contentType="0" class="flex-grow-1 "></Border>
            <div>你好</div>
        </div>
        <div class="col-5 d-flex flex-column container-right">
            <Border v-bind:contentType="1" class="flex-grow-1 "></Border>
            <Border v-bind:contentType="2" class="flex-grow-1 "></Border>
        </div>
    </div>
</template>
<script>
import Border from "./border-container.vue";
export default {
  name: "body",
  components: {
    Border
  },
  data: function() {
    return {};
  }
};
</script>
<style scoped>
.content-container {
  padding: 24px 32px;
}
</style>


