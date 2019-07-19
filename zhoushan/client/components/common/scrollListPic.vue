<template>
    <div class="pic-wrap">
        <div class="clr pic-title">
            <span v-for="item in dataTitle">{{item}}</span>
        </div>
        <ul id="picScroll" @mousemove="stopScroll" @mouseout="doScroll">
            <li v-for="(item,index) in dataList" :key="index">
                <div>NO.{{index+1}}</div>
                <div :title="item.address">{{item.address}}</div>
                <div :title="item.condition">{{item.condition}}</div>
                <div>{{item.name}}</div>
                <div class="pic">
                    <img v-for="pic in item.pic" :src="pic" alt="">
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props: {
        dataTitle: {
            type: Array,
            default: () => ['排名','地址','情况','走访人','照片']
        },
        dataList: {
            default: () => [
                { address: '普陀区普陀街道普陀区普陀街道', condition: '上门走访',name:'张三', pic: ['http://img.mp.sohu.com/upload/20170713/d2b996a0e67a4c25975d129edf3b7491_th.png','http://img.mp.sohu.com/upload/20170713/d2b996a0e67a4c25975d129edf3b7491_th.png','http://img.mp.sohu.com/upload/20170713/d2b996a0e67a4c25975d129edf3b7491_th.png'] },
                { address: '舟山市舟山街道', condition: '上门走访',name:'张三', pic: ['http://img.mp.sohu.com/upload/20170713/d2b996a0e67a4c25975d129edf3b7491_th.png','http://img.mp.sohu.com/upload/20170713/d2b996a0e67a4c25975d129edf3b7491_th.png','http://img.mp.sohu.com/upload/20170713/d2b996a0e67a4c25975d129edf3b7491_th.png'] },
                { address: '普陀区普陀街道普陀区普陀街道', condition: '上门走访',name:'张三', pic: ['http://img.mp.sohu.com/upload/20170713/d2b996a0e67a4c25975d129edf3b7491_th.png','http://img.mp.sohu.com/upload/20170713/d2b996a0e67a4c25975d129edf3b7491_th.png','http://img.mp.sohu.com/upload/20170713/d2b996a0e67a4c25975d129edf3b7491_th.png'] },
                { address: '舟山市舟山街道', condition: '上门走访',name:'张三', pic: ['http://img.mp.sohu.com/upload/20170713/d2b996a0e67a4c25975d129edf3b7491_th.png','http://img.mp.sohu.com/upload/20170713/d2b996a0e67a4c25975d129edf3b7491_th.png','http://img.mp.sohu.com/upload/20170713/d2b996a0e67a4c25975d129edf3b7491_th.png'] },
                { address: '普陀区普陀街道普陀区普陀街道', condition: '上门走访',name:'张三', pic: ['http://img.mp.sohu.com/upload/20170713/d2b996a0e67a4c25975d129edf3b7491_th.png','http://img.mp.sohu.com/upload/20170713/d2b996a0e67a4c25975d129edf3b7491_th.png','http://img.mp.sohu.com/upload/20170713/d2b996a0e67a4c25975d129edf3b7491_th.png'] },
                { address: '舟山市舟山街道', condition: '上门走访', name:'张三',pic: ['http://img.mp.sohu.com/upload/20170713/d2b996a0e67a4c25975d129edf3b7491_th.png','http://img.mp.sohu.com/upload/20170713/d2b996a0e67a4c25975d129edf3b7491_th.png','http://img.mp.sohu.com/upload/20170713/d2b996a0e67a4c25975d129edf3b7491_th.png'] },
                { address: '普陀区普陀街道普陀区普陀街道', condition: '上门走访',name:'张三', pic: ['http://img.mp.sohu.com/upload/20170713/d2b996a0e67a4c25975d129edf3b7491_th.png','http://img.mp.sohu.com/upload/20170713/d2b996a0e67a4c25975d129edf3b7491_th.png','http://img.mp.sohu.com/upload/20170713/d2b996a0e67a4c25975d129edf3b7491_th.png'] },
                { address: '普陀区普陀街道普陀区普陀街道', condition: '上门走访',name:'张三', pic: ['http://img.mp.sohu.com/upload/20170713/d2b996a0e67a4c25975d129edf3b7491_th.png','http://img.mp.sohu.com/upload/20170713/d2b996a0e67a4c25975d129edf3b7491_th.png','http://img.mp.sohu.com/upload/20170713/d2b996a0e67a4c25975d129edf3b7491_th.png'] },
                { address: '舟山市舟山街道', condition: '上门走访',name:'张三', pic: ['http://img.mp.sohu.com/upload/20170713/d2b996a0e67a4c25975d129edf3b7491_th.png','http://img.mp.sohu.com/upload/20170713/d2b996a0e67a4c25975d129edf3b7491_th.png','http://img.mp.sohu.com/upload/20170713/d2b996a0e67a4c25975d129edf3b7491_th.png'] },
                { address: '普陀区普陀街道普陀区普陀街道', condition: '上门走访',name:'张三', pic: ['http://img.mp.sohu.com/upload/20170713/d2b996a0e67a4c25975d129edf3b7491_th.png','http://img.mp.sohu.com/upload/20170713/d2b996a0e67a4c25975d129edf3b7491_th.png','http://img.mp.sohu.com/upload/20170713/d2b996a0e67a4c25975d129edf3b7491_th.png'] },
                { address: '舟山市舟山街道', condition: '上门走访',name:'张三', pic: ['http://img.mp.sohu.com/upload/20170713/d2b996a0e67a4c25975d129edf3b7491_th.png','http://img.mp.sohu.com/upload/20170713/d2b996a0e67a4c25975d129edf3b7491_th.png','http://img.mp.sohu.com/upload/20170713/d2b996a0e67a4c25975d129edf3b7491_th.png'] },
                { address: '普陀区普陀街道普陀区普陀街道', condition: '上门走访',name:'张三', pic: ['http://img.mp.sohu.com/upload/20170713/d2b996a0e67a4c25975d129edf3b7491_th.png','http://img.mp.sohu.com/upload/20170713/d2b996a0e67a4c25975d129edf3b7491_th.png','http://img.mp.sohu.com/upload/20170713/d2b996a0e67a4c25975d129edf3b7491_th.png'] },
                { address: '舟山市舟山街道', condition: '上门走访',name:'张三', pic: ['http://img.mp.sohu.com/upload/20170713/d2b996a0e67a4c25975d129edf3b7491_th.png','http://img.mp.sohu.com/upload/20170713/d2b996a0e67a4c25975d129edf3b7491_th.png','http://img.mp.sohu.com/upload/20170713/d2b996a0e67a4c25975d129edf3b7491_th.png'] },
                { address: '普陀区普陀街道普陀区普陀街道', condition: '上门走访',name:'张三', pic: ['http://img.mp.sohu.com/upload/20170713/d2b996a0e67a4c25975d129edf3b7491_th.png','http://img.mp.sohu.com/upload/20170713/d2b996a0e67a4c25975d129edf3b7491_th.png','http://img.mp.sohu.com/upload/20170713/d2b996a0e67a4c25975d129edf3b7491_th.png'] },
                { address: '普陀区普陀街道普陀区普陀街道', condition: '上门走访',name:'张三', pic: ['http://img.mp.sohu.com/upload/20170713/d2b996a0e67a4c25975d129edf3b7491_th.png','http://img.mp.sohu.com/upload/20170713/d2b996a0e67a4c25975d129edf3b7491_th.png','http://img.mp.sohu.com/upload/20170713/d2b996a0e67a4c25975d129edf3b7491_th.png'] },
                { address: '舟山市舟山街道', condition: '上门走访',name:'张三', pic: ['http://img.mp.sohu.com/upload/20170713/d2b996a0e67a4c25975d129edf3b7491_th.png','http://img.mp.sohu.com/upload/20170713/d2b996a0e67a4c25975d129edf3b7491_th.png','http://img.mp.sohu.com/upload/20170713/d2b996a0e67a4c25975d129edf3b7491_th.png'] },
                { address: '普陀区普陀街道普陀区普陀街道', condition: '上门走访',name:'张三', pic: ['http://img.mp.sohu.com/upload/20170713/d2b996a0e67a4c25975d129edf3b7491_th.png','http://img.mp.sohu.com/upload/20170713/d2b996a0e67a4c25975d129edf3b7491_th.png','http://img.mp.sohu.com/upload/20170713/d2b996a0e67a4c25975d129edf3b7491_th.png'] },
                { address: '舟山市舟山街道', condition: '上门走访',name:'张三', pic: ['http://img.mp.sohu.com/upload/20170713/d2b996a0e67a4c25975d129edf3b7491_th.png','http://img.mp.sohu.com/upload/20170713/d2b996a0e67a4c25975d129edf3b7491_th.png','http://img.mp.sohu.com/upload/20170713/d2b996a0e67a4c25975d129edf3b7491_th.png'] },
                { address: '普陀区普陀街道普陀区普陀街道', condition: '上门走访',name:'张三', pic: ['http://img.mp.sohu.com/upload/20170713/d2b996a0e67a4c25975d129edf3b7491_th.png','http://img.mp.sohu.com/upload/20170713/d2b996a0e67a4c25975d129edf3b7491_th.png','http://img.mp.sohu.com/upload/20170713/d2b996a0e67a4c25975d129edf3b7491_th.png'] },
                { address: '舟山市舟山街道', condition: '上门走访',name:'张三', pic: ['http://img.mp.sohu.com/upload/20170713/d2b996a0e67a4c25975d129edf3b7491_th.png','http://img.mp.sohu.com/upload/20170713/d2b996a0e67a4c25975d129edf3b7491_th.png','http://img.mp.sohu.com/upload/20170713/d2b996a0e67a4c25975d129edf3b7491_th.png'] },
                { address: '普陀区普陀街道普陀区普陀街道', condition: '上门走访',name:'张三', pic: ['http://img.mp.sohu.com/upload/20170713/d2b996a0e67a4c25975d129edf3b7491_th.png','http://img.mp.sohu.com/upload/20170713/d2b996a0e67a4c25975d129edf3b7491_th.png','http://img.mp.sohu.com/upload/20170713/d2b996a0e67a4c25975d129edf3b7491_th.png'] },
            ],
        },
    },   
  data() {
    return {
      allowScroll: true,
      hasScroll: false
    }
  },
  methods: {
    recordClick(item) {
      this.$emit('click', item)
    },
    stopScroll() {
      this.allowScroll = false
    },
    doScroll() {
      this.allowScroll = true
    },
    autoScroll(startTimeTemp, listWrapper, flag = true) {
        
      let maxHeight = listWrapper.scrollHeight
      let currentTimeTemp = new Date().getTime()
      if (currentTimeTemp - startTimeTemp > 50 && flag) {
        if ((listWrapper.scrollTop + listWrapper.offsetHeight) < (maxHeight - 1)) {
          listWrapper.scrollTop += 1;
        } else {
          listWrapper.scrollTop = 0
        }
        startTimeTemp = new Date().getTime()
      }
      requestAnimationFrame(() => this.autoScroll(startTimeTemp, listWrapper, this.allowScroll))
    }
  },
  mounted() {
    let startTimeTemp = new Date().getTime()
    const listWrapper = document.getElementById('picScroll')
    setTimeout(() =>requestAnimationFrame(() => this.autoScroll(startTimeTemp, listWrapper, this.allowScroll)), 500)
  }
}
</script>

<style lang="scss" scoped>
    .pic-wrap{
        padding: 20px;
        line-height: 38px;
        .pic-title {
            display: flex;
            span {
                background: #093e79;
                color: #66dffb;
                font-size: 16px;
                margin: 0 1px;
            }
        }
        ul {
            height: 480px;
            overflow: hidden;
        }
        li {
            display: flex;
            font-size: 14px;
            div {
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
                img {
                    width: 35px;
                    height: 30px;
                    padding: 0 5px;
                }
            }
            .pic {
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }
    }
    li:nth-child(2n) {
        color: #3e90f7;
    }
    li:nth-child(2n+1) {
        color: #8ec0ff;
    }
    .pic-title span:nth-child(1),li div:nth-child(1) {
        flex:3;
    }
    .pic-title span:nth-child(2),li div:nth-child(2) {
        flex:5;
    }
    .pic-title span:nth-child(3),li div:nth-child(3) {
        flex:5;
    }
    .pic-title span:nth-child(4),li div:nth-child(4) {
        flex:4;
    }
    .pic-title span:nth-child(5),li div:nth-child(5) {
        flex:6;
    }
</style>

