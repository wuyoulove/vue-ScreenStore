<template>
    <div class="date">
        <span>{{year}}年</span>
        <span>{{month}}月</span>
        <span>{{day}}日</span>
        <span>{{hour}}:</span>
        <span>{{minute}}:</span>
        <span>{{seconds}}</span>
        <span style="margin-left:10px">星期{{week}}</span>
    </div>
</template>
<script>
export default {
  data() {
    return {
      year: "0",
      hour: "0",
      week: " ",
      month:"0",
      day: "0",
      minute: "0",
      seconds: "0",
    };
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      const dateArr = ["", "一", "二", "三", "四", "五", "六", "日"];
      setInterval(() => {
        let homeDate = new Date();
        this.year = homeDate.getFullYear();
        this.month = homeDate.getMonth()+1;
        this.day = homeDate.getDate();
        this.hour = homeDate.getHours() < 10 ? '0'+homeDate.getHours() : homeDate.getHours();
        this.minute = homeDate.getMinutes() < 10 ? '0'+homeDate.getMinutes() : homeDate.getMinutes();
        this.seconds = homeDate.getSeconds() < 10 ? '0'+homeDate.getSeconds() : homeDate.getSeconds();
        this.week = dateArr[homeDate.getDay()];       
      }, 1000);
    }
  }
};
</script>
<style scoped>
.date {
  width: 100%;
  height: 100%;
  color: #54bbeb;
  font-size: 18px;
  font-weight: 600;
}
</style>


