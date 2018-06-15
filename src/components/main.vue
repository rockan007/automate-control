<template>
    <div id="main" class="main container d-flex flex-column">
        <Header></Header>
        <Container class="flex-grow-1"></Container>
    </div>
</template>
<script>
import Header from './main/header.vue'
import Container from './main/content.vue'
export default {
  name: "index",
  components:{
      Header,
      Container
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

