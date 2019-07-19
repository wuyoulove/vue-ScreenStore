<template>
    <div>
       <div class="select">
           <div class="selected cl" tabindex = "1" @blur="flag=false">
               <div @click="flag=true">
                    <span>{{city}}</span>
                    <img src="../../assets/img/select.png" alt="">
               </div>     
               <ul class="option" v-show="flag">
                    <li v-for="(item,index) in cityArr" @click="selected(item)" :key="index">{{item}}</li>
               </ul>
           </div>
           <img class="exit" src="../../assets/img/qiehuan.png" alt="" @click="exit" >
           
       </div>
    </div>
</template>
<script>
export default {
  props: {
    cityArr: {
      default: () => ["舟山市", "普陀区", "定海区"]
    }
  },
  data() {
    return {
      flag: false,
      city: "舟山市"
    };
  },
  mounted() {
    // this.aaa()
  },
  methods: {
    selected(e) {
      this.flag = false;
      this.city = e;
    },
    exit:() => {
      this.city = '123';
    }
  }
};
</script>

<style lang="scss" scoped>
.select {
  color: #5bccfe;
  font-size: 20px;
  position: relative;
  height: 30px;
  line-height: 30px;
  width: 220px;
  .selected {
    cursor: pointer;
    display: inline-block;
    margin-right: 40px;
    vertical-align: middle;
  }
  .selected:focus {
      outline: none;
  }
  .exit {
    vertical-align: middle;
  }
  span {
    display: inline-block;
    width: 100px;
    text-align: center;
  }
  .option {
    position: absolute;
    top: 35px;
    min-width: 130px;
    left: 10px;
    border: 2px solid #5bccfe;
    z-index: 33;
    background: rgba(19, 27, 71, 0.8);
    padding: 10px 0;
    cursor: pointer;
    li:hover {
      color: #d0f1ff;
    }
  }
}
</style>

