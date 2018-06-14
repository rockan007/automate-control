<template>
    <div class="content-container row">
        <div class="col-7  d-flex flex-column  container-left" >
            <Border v-bind:contentType="0" class="flex-grow-1 "></Border>
            <Records></Records>
        </div>
        <div class="col-5 d-flex flex-column container-right">
            <Border style="height:0" v-bind:contentType="1" class="flex-grow-1 "></Border>
            <Border style="height:0" v-bind:contentType="2" class="flex-grow-1 "></Border>
        </div>
    </div>
</template>
<script>
import Border from "./border-container.vue";
import Records from "./records.vue";
export default {
  name: "body",
  components: {
    Border,
    Records
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


