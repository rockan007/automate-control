<template>
    <div class="error-container flex-grow-1 d-flex flex-column">
        <div class="content-title d-flex justify-content-between align-items-center">
            <div></div>
            <img src="../../assets/imgs/error-style.png"/>
            <p  style="margin-bottom:0">
              <span v-on:click="period=0" v-bind:class='{"chose-period":period==0}'>月</span>
              <span style="color:white;">/</span>
              <span v-on:click="period=1" v-bind:class='{"chose-period":period==1}'>周</span>
            </p>
        </div>
        <div class="d-flex flex-grow-1">
        <div id="error-chart" class="error-chart flex-grow-1"></div>
        <select class="custom-select" style="width:80px;">
              <option value="0">全部</option>
              <option value="1">济宁</option>
            </select>
        </div>
    </div>
</template>
<script>
import utils from "../scripts/utils.js";
export default {
  name: "error",
  data: function() {
    return {
      errorStyles: "",
      period: 0, //月1周
      errorChart: ""
    };
  },
  mounted: function() {
    this.getErrorStyles();
  },
  watch: {
    errorStyles: function(newVal) {
      console.log("获取的错误类型信息：" + JSON.stringify(newVal));
      this.initEcharts();
    },
    period: function(newVal, oldVal) {
      this.initChartOptions();
    }
  },
  methods: {
    initResize: function() {
      window.addEventListener(
        "resize",
        function() {
          console.log("resize");
          if (this.errorChart) {
            this.errorChart.resize();
          }
        }.bind(this)
      );
    },
    initEcharts: function() {
      this.errorChart = echarts.init(document.getElementById("error-chart"));
      this.initChartOptions();
    },
    initChartOptions: function() {
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
            center: ["50%", "50%"],
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            data: this.period
              ? this.errorStyles.Week_Data
              : this.errorStyles.Month_Data,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ],
        color: [
          "#80cbeb",
          "#b2dee6",
          "#c0f7f7",
          "#83e7ff",
          "#86afff",
          "#8b9fff",
          "#c5a2ff",
          "#FCCE10",
          "#E87C25",
          "#60C0DD",
          "#F0805A",
          "#26C0C0"
        ]
      };
      this.errorChart.setOption(option);
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
.custom-select,
.custom-select option{
  background-color:  rgb(23, 27, 46);;
  border: none;
}
.custom-select{
  background-image: url("data:image/svg+xml;charset=utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'><path fill='#56fdff' d='M2 0L0 2h4zm0 5L0 3h4z'/></svg>") !important;
}
.custom-select,
.chose-period {
  color: #56fdff;
}
</style>
