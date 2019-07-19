<template>
  <div class="scroll-list" :style="`nopadding ? 'padding: 0;width: 100%;height:100%;' : 'width: calc(100%);height: calc(100%)';line-height:${mHeight}`">
    <ul class="list-wrapper" style="overflow:visible;height:auto;">
      <li class="header-wrapper">
        <div class="header-tab" v-for="(ele, index) in header" :style="`flex:${ele.flex};color:#66dffb;background:rgba(28,79,122,.8);line-height:${mHeight}`" :key="index">
          {{ele.des}}
        </div>
      </li>
    </ul>
    <ul class="list-wrapper" :id="formId" @mousemove="stopScroll" @mouseout="doScroll">
      <li class="list-item" v-for="(item, index) in source" :key="index" @click="recordClick(item)">
        <div :title="des" class="header-tab list-row" :class="des == '低' ? 'green' : des == '高' ? 'red' : ''" v-for="(des, cIndex) in item.textArr" :key="cIndex" :style="`flex:${header[cIndex].flex};color:${index % 2 > 0 ? '#3e90f7' : '#8ec0ff'};background:${index % 2 > 0 ? 'none' : bgColor};`">
          {{formatValue(cIndex,des)}}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  props: {
    formId:{
      type: String,
      default: 'list-body'
    },
    colorDic: {
      type: Object,
      default: () => {
        return {
          '1': '#a3152e',
          '2': '#ff5bf5',
          '3': '#ffdd60'
        }
      }
    },
    bgColor: {
      default:'none'
    },
    mHeight: {
      default:'31px'
    },
    header: {
      type: Array,
      default: () => {
        return [
          { des: '日期', flex: 2, color: '#fff' },
          { des: '标题', flex: 2, color: '#fff' },
          { des: '区域', flex: 3, color: '#fff' },
          { des: '风险评估', flex: 4, color: '#fff' },
        ]
      }
    },
    source: {
      type: Array,
      default: () => [
        {
          textArr: ['新增:区地税局领导慰问社区低保户', '文峰街道第一网格朝晖小区8幢第一单元', '大联动公众版'], level: 1, "msg": [
            { "des": "邻里", "content": "文本标签" },
            { "des": "议事地点", "content": "学田区第一网格" },
            { "des": "议事时间", "content": "2017-08-08 14:25" },
            { "des": "录入时间", "content": "2017-08-08 14:25" },
            { "des": "议事类型", "content": "矛盾纠纷排解" },
            { "des": "具体事项", "content": "矛盾纠纷排解矛盾纠纷排解排解矛盾纠纷排解矛盾纠纷排解矛盾纠纷排解矛盾纠纷排解矛盾纠纷排解矛盾纠纷排解矛盾纠纷排解矛盾纠纷排解矛盾纠纷排解矛盾纠纷排解" },
            { "des": "与会人员", "content": "老王、齐雪松、高晓松" }
          ]
        },
      ]
    },
    nopadding: {
      type: Boolean,
      default: false
    },
    formatValue: {
      type: Function,
      default: (index, value) => {
        return value
      }
    }
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
          listWrapper.scrollTop += 1
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
    const listWrapper = document.getElementById(this.formId)
    setTimeout(() =>requestAnimationFrame(() => this.autoScroll(startTimeTemp, listWrapper, this.allowScroll)), 500)
  }
  
}
</script>

<style scoped>
.scroll-list {
  display: flex;
  flex-direction: column;
  padding: 10px;
  overflow: hidden;
  height: 100%;
}

.list-wrapper {
  height: 100%;
  overflow: hidden;
}

.header-wrapper {
  display: flex;
  width: 100%;
}

.header-tab {
  background-color: #007ee4;
  margin-left: 3px;
  color: #fff;
  /* line-height: 28px; */
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  align-items: center; 
  justify-content: center; 
}

.list-item {
  display: flex;
  /* height: 31px; */
  /* line-height: 31px; */
}

.list-item:hover {
  cursor: pointer;
}
.red {
  color:rgb(255,102,67) !important;
}
.green {
  color:rgb(62,247,92) !important;
}
.list-row {
  font-size: 14px;
  background: transparent;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
</style>
