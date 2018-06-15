<template>
    <div class="heavy-container flex-grow-1 d-flex flex-column">
        <div class="content-title d-flex justify-content-between align-items-center">
            <div></div>
            <img src="../../assets/imgs/work-heavy.png"/>
            <p  style="margin-bottom:0">
              <span v-on:click="period=0" v-bind:class='{"chose-period":period==0}'>日</span>
              <span style="color:white;">/</span>
              <span v-on:click="period=1" v-bind:class='{"chose-period":period==1}'>周</span>
               <span style="color:white;">/</span>
              <span v-on:click="period=2" v-bind:class='{"chose-period":period==2}'>月</span>
            </p>
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
      heavyChart: "",
      period: 0
    };
  },
  mounted: function() {
    this.getWorkHeavy();
  },
  watch: {
    heavyData: function(newVal) {
      this.initChart();
    },
    period: function(newVal) {
      this.initChartOptions();
    }
  },
  methods: {
    initChart: function() {
      this.heavyChart = echarts.init(document.getElementById("heavy-chart"));
      this.initChartOptions();
    },
    initChartOptions: function() {
      var option = {
        xAxis: {
          type: "category",
          show: false,
          data: this.heavyData.XMZ,
          axisLine: {
            lineStyle: {
              color: "#56fdff" //坐标轴线颜色
            }
          }
        },
        yAxis: {
          type: "value",
          nameTextStyle: {
            color: "#56fdff" // x坐标轴名称文字样式
          },
          axisLine: {
            lineStyle: {
              color: "#56fdff" //坐标轴线颜色
            }
          }
        },
        series: [
          {
            data: this.getShowData(),
            type: "bar",
            itemStyle: {
              normal: {
                //好，这里就是重头戏了，定义一个list，然后根据所以取得不同的值，这样就实现了，
                color: function(params) {
                  // build a color map as your need.
                  var colorList = [
                    "#80cbeb",
                    "#b2dee6",
                    "#c0f7f7",
                    "#83e7ff",
                    "#86afff",
                    "#8b9fff",
                    "#c5a2ff",
                    "#94ede8",
                    "#97b0d4",
                    "#9ed1d1",
                    "#988cb8",
                    "#9cebbb",
                    "#c7c7c7"
                  ];
                  return colorList[params.dataIndex];
                }, //以下为是否显示，显示位置和显示格式的设置了
                label: {
                  show: true,
                  position: "top",
                  //                             formatter: '{c}'
                  formatter: "{b}\n{c}"
                }
              }
            }
          }
        ]
      };
      this.heavyChart.setOption(option);
    },
    getShowData: function() {
      switch (this.period) {
        case 0:
          return this.heavyData.Day_Data;
        case 1:
          return this.heavyData.Week_Data;
        case 2:
          return this.heavyData.Month_Data;
        default:
          return this.heavyData.Day_Data;
      }
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
.chose-period {
  color: #56fdff;
}
</style>
