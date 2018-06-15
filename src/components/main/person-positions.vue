<template>
    <div class="positions-container d-flex flex-column flex-grow-1" >
         <div class="content-title">
             <img src="../../assets/imgs/person-position.png">
        </div> 
        <div id="g-map" class="col-12 flex-grow-1"></div>
        <div v-if="curInfo" class="person-info">
          <p>人员姓名：{{curInfo.UName}}</p>
          <p>位置：{{curInfo.address}} ({{curInfo.TS_Time}})</p>
          <p>所属项目组：{{curInfo.IdentityCard}}</p>
          <p>联系方式：{{curInfo.telInfo}}</p>
        </div>
    </div>
</template>
<script>
import utils from "../scripts/utils.js";
export default {
  name: "positions",
  props: {},
  data: function() {
    return {
      personPos: [],
      infoWs: [],
      gMap: "",
      curInfo: "",
      geocoder: ""
    };
  },
  mounted: function() {
    this.initMap();
    this.getPositions();
  },
  watch: {
    personPos: function(newVal) {
      this.setPositions();
    },
    curInfo: {
      deep: true,
      handler: function(newVal, oldVal) {
        if (newVal && newVal.TabIDstr != oldVal.TabIDstr) {
          this.getLocAddress();
        }
      }
    }
  },
  methods: {
    getLocAddress: function() {
      var latlng = { lat: this.curInfo.Lat, lng: this.curInfo.Lng };
      this.geocoder.geocode(
        {
          location: latlng
        },
        function(results, status) {
          if (status == "OK") {
            console.log(JSON.stringify(results));
            console.log(JSON.stringify(results[0]));
            this.$set(this.curInfo, "address", results[0].formatted_address);
          }
        }.bind(this)
      );
    },

    setPositions: function() {
      this.personPos.forEach(
        function(pos) {
          var marker = new google.maps.Marker({
            position: {
              lat: pos.Lat,
              lng: pos.Lng
            },
            icon: 'https://raw.githubusercontent.com/rockan007/photos/935704a37f1dfeb081a593bdc89226768a90ff54/javaweb/head-icon.png',
            // shape:this.getIcon(pos)[1],
            map: this.gMap
          });
          this.initMarkListener(marker, pos);
        }.bind(this)
      );
    },
    getIcon: function(pos) {
      var image = {
        url:pos.HeadImg,
        // This marker is 20 pixels wide by 32 pixels high.
        size: new google.maps.Size(20, 32),
        // The origin for this image is (0, 0).
        origin: new google.maps.Point(0, 0),
        // The anchor for this image is the base of the flagpole at (0, 32).
        anchor: new google.maps.Point(0, 32)
      };
      // Shapes define the clickable region of the icon. The type defines an HTML
      // <area> element 'poly' which traces out a polygon as a series of X,Y points.
      // The final coordinate closes the poly by connecting to the first coordinate.
      var shape = {
        coords: [1, 1, 1, 20, 18, 20, 18, 1],
        type: "poly"
      };
      return [image,shape];
    },
    initMarkListener: function(marker, info) {
      console.log("要放置的信息：" + JSON.stringify(info));
      marker.addListener(
        "click",
        function() {
          this.clearInfoWindows();
          console.log("click事件");
          this.curInfo = info;
          var infowindow = new google.maps.InfoWindow({
            content: this.getWinInfo(info),
            maxWidth: 300
          });
          infowindow.open(this.gMap, marker);
          this.infoWs.push(infowindow);
        }.bind(this)
      );
    },
    getWinInfo: function(info) {
      return (
        '<div class="info-container"><h6>' +
        info.UName +
        '</h6><p class="info-content">' +
        info.IdentityCard +
        '</p><p class="info-content">' +
        info.telInfo +
        '</p><p class="info-content">项目:' +
        info.SuoShuXiangMu +
        "</p><p>距离上次活动时间:" +
        info.TS_Time +
        "</p></div>"
      );
    },
    clearInfoWindows: function() {
      this.infoWs.forEach(function(infoW) {
        infoW.close();
      });
      this.infoWs = [];
    },
    initMap: function() {
      var dll = { lat: 36.674163, lng: 117.010899 };
      // document.getElementById("g-map").innerHTML="地图"
      this.gMap = new google.maps.Map(document.getElementById("g-map"), {
        zoom: 7,
        center: dll,
        mapTypeId: "hybrid"
      });
      this.geocoder = new google.maps.Geocoder();
    },
    getPositions: function() {
      utils.request(
        utils.URL + utils.PERSON_PERSITION,
        {
          UIDstr: "OTVCREZENjRCMkYzRDMxMQ"
        },
        function(response) {
          console.log("获取的位置信息：" + JSON.stringify(response));
          if (response.ResultCode == 200) {
            this.personPos = response.Data_Obj;
          }
        }.bind(this)
      );
    }
  }
};
</script>
<style scoped>
.content-title {
  padding: 8px 16px 16px;
}
.positions-container {
  padding: 8px 16px;
}
p {
  color: #56fdff;
}
.person-info {
  text-align: left;
  padding: 16px 16px 0;
  line-height: 1;
}
.info-container {
  line-height: 0.5;
}
</style>


