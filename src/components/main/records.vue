<template>
    <div class="reocrds-container">
        <div class="content-title">
        <a  href="http://139.129.240.27:8031/ZDHYW/DP_YWJL_Page">
            <img src="../../assets/imgs/work-records.png" />
        </a>
        </div>
        <p  v-for="(record,index) in records" v-bind:key="index">[{{record.XianMuZu_Name}}] "{{record.XianLu_Name}}" {{record.GZ_Type_Name}} {{record.FangAn}} {{record.CreateTimeFormat}}</p>
        <!-- <p>[临清] "10kv林庄线01#"  日常巡视 无 2018/06/07 13：45：56</p>
        <p>[武城] "10kV新明线03#" 长时间离线 召唤不上线 2018/06/07 16：02：02</p> -->
    </div>
</template>
<script>
import utils from "../scripts/utils.js";
export default {
  name: "records",
  data: function() {
    return {
      records: []
    };
  },
  mounted: function() {
    this.getRecords();
  },
  watch: {
    records: function(newVal) {}
  },
  methods: {
    getRecords: function() {
      utils.request(
        utils.URL + utils.CONTROL_RECORDS,
        {
          UIDstr: "OTVCREZENjRCMkYzRDMxMQ"
        },
        function(response) {
          console.log("获取的维修记录：" + JSON.stringify(response));
          this.records = response.Data_Obj;
        }.bind(this)
      );
    }
  }
};
</script>
<style scoped>
.reocrds-container {
  text-align: left;
  padding: 8px 16px;
}
.content-title {
  padding: 8px 0 16px;
  margin-left: -16px;
}
p {
  color: #56fdff;
  line-height: 1;
}
</style>