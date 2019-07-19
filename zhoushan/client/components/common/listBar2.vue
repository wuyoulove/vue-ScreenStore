<template>
    <ul class="list-bar2 clr">
        <li v-for="(item,index) in listBarArr" :key="index">
            <span class="list-bar-name fl">{{item.name}}</span>
            <div class="fl"><i :style="`width:${item.num/listBarMax*100}%;background:linear-gradient(to right,rgb(67,126,194), rgb(101,211,205));display:inline-block;height:100%`"></i></div>
            <span class="list-bar-num fr">{{item.num}}</span>
        </li>    
    </ul>
</template>
<script>
export default {
  props: {
    listBarArr: {
      default: () => [
        { name: "社区活动", num: 12345 },
        { name: "上门服务", num: 23456 },
        { name: "网上服务", num: 56789 },
        { name: "其他方式", num: 34567 }
      ],
    },
    // listBarMax: {
    //     default: 0,
    // },
  },
  data() {
    return {
        listBarMax:0,
    };
  },
  mounted() {
    this.getMax();
  },
  methods: {
    getMax() {
      const listNum = [];
      this.listBarArr.forEach(element => {
        listNum.push(element.num);
      });
      this.listBarMax = Math.max(...listNum);
    }
  }
};
</script>
<style scoped>
.list-bar2 {
  width: 100%;
  height: 50px;
  position: relative;
  padding-top: 20px;
  line-height: 20px;
  color: #95fcf4;
  font-size: 14px;
  font-weight: 600;
  margin-top: -10px;
  margin-bottom: 15px;
}
.list-bar2 span {
  width: 100px;
  display: block;
  line-height: 30px;
}
li {
    height: 30px;
}
.list-bar2 div {
  width: calc(100% - 200px);
  height: 14px;
  text-align: left;
  background: rgba(28, 79, 122, 0.8);
  margin-top: 8px;
  border-radius: 3px;
  overflow: hidden;
}
</style>

