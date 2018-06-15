<template>
    <ul class="nav justify-content-between align-items-center header-container">
        <ul class="nav align-items-center">
        <li class="nav-item">
            <a class="nav-link head-title" href="#" ></a>
        </li>
        <li class="nav-item">
            <a class="nav-link head-person"  href="http://139.129.240.27:8031/ZDHYW/Index_RY?navidF=13&navidT=3"></a>
        </li>
        <li class="nav-item">
            <a class="nav-link head-work-heavy" href="http://139.129.240.27:8031/ZDHYW?navidF=13&navidT=1"></a>
        </li>
        <li class="nav-item">
            <a class="nav-link head-work-detail" href="#"></a>
        </li>
        <li class="nav-item">
            <a class="nav-link head-error" href="http://139.129.240.27:8031/ZDHYW/DP_GZLX"></a>
        </li>
        </ul>
        <li class="nav-item">
            <a class="nav head-right justify-content-center align-items-center" href="#">
                <img  class="nav-item" src="../../assets/imgs/head-person-icon.png" style="width:24px;height:24px;margin:0 16px;">
                <img class="nav-item" src="../../assets/imgs/head-master.png" style="margin-right:16px;">
                <img class="nav-item" src="../../assets/imgs/head-power.png">
            </a>
        </li>
    </ul>
</template>
<script>
// import headTitle from '../../assets/imgs/head-title.png'
// import headPorsition from '../../assets/imgs/head-person.png'
export default {
  name: "Header",
  data: function() {
    return {
      //   headTitle:headTitle,
      //   headPorsition:headPorsition
    };
  }
};
</script>

<style scoped>
.header-container {
  background-image: url("../../assets/imgs/head-back.png");
}
.head-title {
  background: url("../../assets/imgs/head-title.png");
  width: 413px;
  height: 86px;
}
.head-person {
  background: url("../../assets/imgs/head-person.png");
}
.head-work-heavy {
  background-image: url("../../assets/imgs/head-work.png");
}
.head-work-detail {
  background-image: url("../../assets/imgs/head-work-detail.png");
}
.head-error {
  background-image: url("../../assets/imgs/head-error.png");
}
.head-person,
.head-work-detail,
.head-error {
  width: 217px;
  height: 63px;
}
.head-work-heavy {
  width: 205px;
  height: 63px;
}
.head-right {
  background-image: url("../../assets/imgs/head-right-back.png");
  background-size: contain;
  background-repeat: no-repeat;
  width: 290px;
  height: 86px;
}
</style>
