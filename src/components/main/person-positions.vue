<template>
    <div class="positions-container d-flex flex-column flex-grow-1" >
         <div>
             <img src="../../assets/imgs/person-position.png">
        </div> 
        <div id="g-map" class="col-12 flex-grow-1"></div>
        <div class="person-info">
          <p>人员姓名：王树森</p>
          <p>位置：山东省济南市天桥区北坦街道济安新区银座购物广场(北坦店)</p>
          <p>所属项目组：null</p>
          <p>联系方式：15562617435</p>
        </div>
    </div>
</template>
<script>
export default {
  name: "positions",
  props: {},
  data: function() {
    return {};
  },
  mounted: function(){
      this.initMap();
  },
  methods: {
    initMap: function() {
      var dll = { lat: 36.674163, lng: 117.010899 };
      // document.getElementById("g-map").innerHTML="地图"
      var map = new google.maps.Map(document.getElementById("g-map"), {
        zoom: 7,
        center: dll
      });
      var marker = new google.maps.Marker({
        position: dll,
        map: map
      });
    }
  }
};
</script>
<style scoped>
  p {
    color: #56fdff;
  }
  .person-info{
    text-align: left;
  }
</style>


