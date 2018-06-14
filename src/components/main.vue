<template>
    <div id="main" class="main container d-flex flex-column">
        <Header></Header>
        <Body class="flex-grow-1"></Body>
    </div>
</template>
<script>
import Header from './main/header.vue'
import Body from './main/content.vue'
export default {
  name: "index",
  components:{
      Header,
      Body
  }
};
</script>
<style>
    .main {
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        background-color: rgb(23, 27, 46);
        width: 100%;
        height: 100%;
    }
</style>

