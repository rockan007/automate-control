<template>
    <div class="reocrds-container">
        <div class="content-title">
            <img src="../../assets/imgs/work-records.png" />
        </div>
        <p>[庆云] "故障指示器" 频繁掉线 三天一掉线 2018/06/08 17：45：56</p>
        <p>[临清] "10kv林庄线01#"  日常巡视 无 2018/06/07 13：45：56</p>
        <p>[武城] "10kV新明线03#" 长时间离线 召唤不上线 2018/06/07 16：02：02</p>
    </div>
</template>
<script>
export default {
    name:'records',

}
</script>
<style scoped>
    .reocrds-container{
        text-align: left;
        padding: 8px 16px;
    }
    .content-title{
        padding: 8px 0 16px;
        margin-left: -16px;
    }
    p{
        color: #56fdff;
        line-height: 1.0;
    }
</style>