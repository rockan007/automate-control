<template>
    <div class="error-container flex-grow-1 d-flex flex-column">
        <div class="content-title">
            <img src="../../assets/imgs/error-style.png"/>
        </div>
        <div id="error-chart" class="error-chart flex-grow-1"></div>
    </div>
</template>
<script>
import utils from "../scripts/utils.js";
export default {
  name: "error",
  data: function() {
    return {
      errorStyles: "",
      myChart: ""
    };
  },
  mounted: function() {
    this.getErrorStyles();
  },
  watch: {
    errorStyles: function(newVal) {
      console.log("获取的错误类型信息：" + JSON.stringify(newVal));
      this.initEcharts();
    }
  },
  methods: {
    initResize:function(){
      window.addEventListener('resize',function(){
        console.log("resize");
        if(this.myChart){
          this.myChart.resize();
        }
      }.bind(this));
    },
    initEcharts: function() {
      this.myChart = echarts.init(document.getElementById("error-chart"));
      var option = {
        title: {
          x: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series: [
          {
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            left:0,
            right:0,
            top:0,
            bottom:0,
            data:this.errorStyles.Week_Data,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      };
      this.myChart.setOption(option);
    },
    getErrorStyles: function() {
      utils.request(
        utils.URL + utils.ERROR_STYLES,
        {
          UIDstr: "OTVCREZENjRCMkYzRDMxMQ"
        },
        function(response) {
          console.log("获取的错误信息：" + JSON.stringify(response));
          this.errorStyles = response.Data_Obj;
        }.bind(this)
      );
    }
  }
};
</script>
<style scoped>
.error-container {
  padding: 8px 16px;
}
.content-title {
  padding: 8px 16px 16px;
}
</style>
