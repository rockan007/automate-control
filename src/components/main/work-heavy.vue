<template>
    <div class="heavy-container flex-grow-1 d-flex flex-column">
        <div class="content-title">
            <img src="../../assets/imgs/work-heavy.png" alt="">
        </div>
        <div id="heavy-chart" class="flex-grow-1"></div>
    </div>
</template>
<script>
import utils from "../scripts/utils.js";
export default {
  name: "heavy",
  data: function() {
    return {
      heavyData: "",
      heavyChart:''
    };
  },
  mounted: function() {
    this.getWorkHeavy();
  },
  watch:{
      heavyData:function(newVal){
          this.initChart();
      }
  },
  methods: {
    initChart: function() {
      this.heavyChart = echarts.init(document.getElementById("heavy-chart"));
      var option = {
        xAxis: {
          type: "category",
          data: this.heavyData.XMZ
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: this.heavyData.Week_Data,
            type: "bar"
          }
        ]
      };
      this.heavyChart.setOption(option);
    },
    getWorkHeavy: function() {
      utils.request(
        utils.URL + utils.WORK_HEAVY,
        {
          UIDstr: "OTVCREZENjRCMkYzRDMxMQ"
        },
        function(response) {
          console.log("获取的工作比重结果：" + JSON.stringify(response));
          this.heavyData = response.Data_Obj;
        }.bind(this)
      );
    }
  }
};
</script>
<style scoped>
.heavy-container {
  padding: 8px 16px;
}
.content-title {
  padding: 8px 16px 16px;
}
</style>
