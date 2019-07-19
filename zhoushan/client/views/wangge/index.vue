<template>
    <div class="page">
        <!-- <img src="../../assets/img/title2.png" alt=""> -->
        <div class="home-date">
            <home-date />
        </div>
        <div class="handle">
            <select-exit />
        </div>
        <div class="container">
            <div class="left fl">
                <div class="chunk">
                    <box-border  :title="'网格员信息'" :english="'Grid member information'" :bgType="require('../../assets/img/border2.png')" :num="'01'">
                        <div class="bar1">
                            <default-bar />
                        </div>
                        <div class="child-title ct1">业务分类</div>
                        <div class="classification">
                            <progress-list />
                        </div>
                        <div class="child-title ct2">数据质量分析</div>
                        <div class="analyze-pie">
                            <pie-wangge :source="gridSource" :colorDic='colorDic' :title="'质量分析'" :lineLength="15" :inner="inner1" :side="side1" :sid="'analyzePie'" />
                        </div>
                    </box-border>
                </div>
            </div>
            <div class="middle fl">
                <div class="chunk">
                    <box-border  :title="'网格巡查'" :english="'Grid inspection'" :bgType="require('../../assets/img/border2.png')" :num="'02'">
                    <div class="bar1">
                            <default-bar :chartId='middleBar' />
                        </div>
                        <div class="child-title ct1">走访记录</div>
                        <div class="scroll-list-pic">
                            <scroll-pic />
                        </div>
                    </box-border>
                </div>
            </div>
            <div class="right fl">
                <div class="chunk">
                <box-border  :title="'网格服务'" :english="'Grid service'" :bgType="require('../../assets/img/border2.png')" :num="'03'">
                <div class="pie">
                    <pie-wangge :source="gridSource" :colorDic='colorDic' :title="pieName" :lineLength="10" :inner="inner" :side="side" />
                </div>
                <div class="child-title ct1">服务方式</div>
                <div class="list-bar">
                    <list-bar />
                </div>
                <div class="child-title ct1 ctlast">服务满意度</div>
                <div class="line">
                    <one-line />
                </div>
                </box-border>
            </div>
            </div>
        </div>
    </div>
</template>
<script>
import homeDate from "components/common/homeDate";
import selectExit from "components/common/selectExit";
import boxBorder from "components/common/boxBorder";
import defaultBar from "components/common/defaultBar";
import pieWangge from "components/common/pieWangge";
import progressList from "components/common/progressList";
import scrollListPic from "components/common/scrollListPic";
import listBar from "components/common/listBar2";
import oneLine from "components/common/oneLine";
export default {
  components: {
    "home-date": homeDate,
    "select-exit": selectExit,
    "box-border": boxBorder,
    "default-bar": defaultBar,
    "pie-wangge": pieWangge,
    'progress-list': progressList,
    'scroll-pic': scrollListPic,
    'list-bar': listBar,
    'one-line': oneLine
  },
  data() {
    return {
      middleBar: "middleBar",
      pieName: '网格分布',
      side: ['50%','80%'],
      inner: ['0%','0%'],
      side1: ['40%','60%'],
      inner1: ['0%','0%'],
      listBarMax: 0,
      listName:[],
      listNum: [],
      listBarArr: [
          { name:'社区活动', num: 12345 },
          { name:'上门服务', num: 23456 },
          { name:'网上服务', num: 56789 },
          { name:'其他方式', num: 34567 }
      ],
      gridSource: [
        { sour: "城市管理", value: 1234, name: "1" },
        { sour: "城市管理", value: 1234, name: "2" },
        { sour: "城市管理", value: 1234, name: "3" },
        { sour: "城市管理", value: 1234, name: "4" },
        { sour: "城市管理", value: 1234, name: "5" },
        { sour: "城市管理", value: 1234, name: "6" },
        { sour: "城市管理", value: 1234, name: "7" }
      ],
      colorDic: {
        fillColor: [
          "rgb(185,89,42)",
          "rgb(113,173,103)",
          "rgb(93,188,233)",
          "rgb(199,103,100)",
          "rgb(197,181,86)",
          "rgb(67,123,176)",
          "rgb(76,111,233)"
        ]
      }
    };
  },
};
</script>
<style lang="sass" scoped>
@import './index.scss'
</style>


