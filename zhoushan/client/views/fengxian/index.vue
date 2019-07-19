<template>
  <div class="page">
    <!-- <img src="../../assets/img/title3.png" alt=""> -->
    <div class="home-date">
        <home-date />
    </div>
    <div class="handle">
        <select-exit />
    </div>
    <div class="container">
      <div class="left fl">
        <div class="chunk">
          <box-border  :title="'基础信息'" :english="'basic information'" :bgType="require('../../assets/img/border2.png')" :num="'01'">
          <ul>
            <li>
              <div class="child-title ct1">出租房</div>
              <div class="left-chunk">
                <pie-wangge :source="gridSource" :colorDic='colorDic' :title="'出租屋'" :lineLength="1" :side="side1" :sid="'pie1'" />
              </div>
            </li>
            <li>
              <div class="child-title ct1">消防隐患</div>
              <div class="left-chunk">
                <pie-wangge :source="gridSource" :colorDic='colorDic' :title="'消防隐患'" :lineLength="0" :side="side1" :sid="'pie2'" />
              </div>
            </li>
            <li>
              <div class="child-title ct1">出租房地区分布</div>
              <div class="left-chunk">
                <default-bar :rotX="'30'" :barW="'10'" />
              </div>
            </li>
            <li>
              <div class="child-title ct1">消防隐患处置单位</div>
              <div class="left-chunk">
                <default-bar :chartId="'bar2'" />
              </div>
            </li>
            <li>
              <div class="child-title ct1">中小学幼儿园</div>
              <div class="left-chunk map map1" id="map1"></div>
            </li>
            <li>
              <div class="child-title ct1">重点消防隐患</div>
              <div class="left-chunk map map2" id="map2"></div>
            </li>
          </ul>
          </box-border>
        </div>
      </div>
      <div class="middle fl">
        <div class="chunk">
          <box-border  :title="'网格巡查'" :english="'Grid inspection'" :bgType="require('../../assets/img/border2.png')" :num="'02'">
          <ul class="clr mt">
            <li class="fl">
              <span>
                <count-up
                :startVal="startVal"
                :endVal="endVal"
                :decimals="decimals"
                :duration="duration" />
              </span>
              <img src="../../assets/img/xuncha.png" alt="">
              <p>风险总量</p>
            </li>
            <li class="fl">
              <span>
                <count-up
                :startVal="startVal"
                :endVal="endVal"
                :decimals="decimals"
                :duration="duration" />
              </span>
              <img src="../../assets/img/xuncha.png" alt="">
              <p>已整治</p>
            </li>
            <li class="fl">
              <span>
                <count-up
                :startVal="startVal"
                :endVal="endVal"
                :decimals="decimals"
                :duration="duration" />
              </span>
              <img src="../../assets/img/xuncha.png" alt="">
              <p>月增量</p>
            </li>
          </ul>
          <div class="child-title mt1">风险分类</div>
          <div class="midell-pie">
            <pie-wangge :source="gridSource" :colorDic='colorDic' :title="'消防隐患'" :lineLength="20" :side="side1" :sid="'pie3'" />
          </div>
          <div class="child-title mt2">风险量</div>
          <div class="table-scroll">
            <table-scroll :header="dynamicInfo.header" :source="dynamicInfo.list" :nopadding="true" class="dynamics" :bgColor="'rgba(9,62,121,0.38)'" :mHeight="'37px'"></table-scroll>
          </div>
          </box-border>
        </div>
      </div>
      <div class="right fl">
        <div class="chunk-right">
          <box-border  :title="'矛盾纠纷'" :english="'Conflict disputes'" :bgType="require('../../assets/img/border.png')" :num="'03'">
          <ul class="clr">
            <li class="fl">
              <div class="child-title">综治工作</div>
              <pie-wangge :orient="'horizontal'" :source="gridSource" :colorDic='colorDic' :title="'消防隐患'" :lineLength="1" :side="side4" :sid="'pie4'" />
            </li>
            <li class="fl">
              <div class="child-title">市场监督</div>
              <pie-wangge :source="gridSource" :colorDic='colorDic' :title="'消防隐患'" :lineLength="1" :side="side4" :sid="'pie5'" />
            </li>
          </ul>
          </box-border>
        </div>
        <div class="chunk-right">
          <box-border  :title="'城市管理'" :english="'City Management'" :bgType="require('../../assets/img/border.png')" :num="'04'">
          <ul class="clr">
            <li class="fl">
              <div class="child-title">综合执法</div>
              <default-bar :rotX="'30'" :barW="'10'" :chartId="'bar3'" />
            </li>
            <li class="fl">
              <div class="child-title">便民服务</div>
              <list-bar :listName="listName" :listNum="listNum" />
              <list-bar :listName="listName" :listNum="listNum" />
              <list-bar :listName="listName" :listNum="listNum" />
              <list-bar :listName="listName" :listNum="listNum" />
              <list-bar :listName="listName" :listNum="listNum" />
            </li>
          </ul>
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
import pieWangge from "components/common/pieWangge";
import tableScroll from 'components/common/tableScroll';
import defaultBar from "components/common/defaultBar";
import listBar from 'components/common/listBar';
import ICountUp from 'vue-countup-v2';
export default {
  components: {
    "home-date": homeDate,
    "select-exit": selectExit,
    'box-border': boxBorder,
    'pie-wangge': pieWangge,
    'table-scroll': tableScroll,
    'default-bar': defaultBar,
    'list-bar': listBar,
    'count-up': ICountUp
  },
  mounted() {
    let map1 = new BMap.Map("map1");
    let point = new BMap.Point(122.181326, 30.06752);
    map1.centerAndZoom(point, 10);
    map1.enableScrollWheelZoom(true);
    let data_info = [[122.181326, 30.06752,"地址：北京市东城区王府井大街88号乐天银泰百货八层"],
					 [122.201326, 30.06752,"地址：北京市东城区东华门大街"],
					 [122.181326, 30.16752,"地址：北京市东城区正义路甲5号"]
					];
	  let opts = {
      width : 150,     // 信息窗口宽度
      height: 40,     // 信息窗口高度
      title : "信息窗口" , // 信息窗口标题
      enableMessage:true//设置允许信息窗发送短息
		};
    for(let i=0;i<data_info.length;i++){
      let marker = new BMap.Marker(new BMap.Point(data_info[i][0],data_info[i][1]));  // 创建标注
      let content = data_info[i][2];
      map1.addOverlay(marker);               // 将标注添加到地图中
      addClickHandler(content,marker);
    }
    function addClickHandler(content,marker){
      marker.addEventListener("click",function(e){
        openInfo(content,e)}
      );
    }
    function openInfo(content,e){
      let p = e.target;
      let point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
      let infoWindow = new BMap.InfoWindow(content,opts);  // 创建信息窗口对象 
      map1.openInfoWindow(infoWindow,point); //开启信息窗口
    }
    // map1.setMapStyle({style:'midnight'});
    let map2 = new BMap.Map("map2");
    let point2 = new BMap.Point(122.181326, 30.06752);
    map2.centerAndZoom(point2, 10);
    map2.enableScrollWheelZoom(true);
    map2.setMapStyle({style:'midnight'});
    setInterval(() => {
      this.endVal = Math.floor(Math.random()*(10000-1+1)+1);
    },5000)
  },
  data() {
    return {
      listNum: 123,
      listName: '便民服务',
      side1: ['40%','60%'],
      side4: ['30%','50%'],
      gridSource: [
        { sour: "城市管理", value: 1234, name: "1" },
        { sour: "城市管理", value: 1234, name: "2" },
        { sour: "城市管理", value: 1234, name: "3" },
        { sour: "城市管理", value: 1234, name: "4" },
        { sour: "城市管理", value: 1234, name: "5" }
      ],
      colorDic: {
        fillColor: [
          // "rgb(185,89,42)",
          // "rgb(113,173,103)",
          "rgb(93,188,233)",
          "rgb(199,103,100)",
          "rgb(197,181,86)",
          "rgb(67,123,176)",
          "rgb(76,111,233)"
        ]
      },
      dynamicInfo:{
			"header": [
				{ "des": "日期", "flex": 5, "color": "#66dffb" },
				{ "des": "标题", "flex": 5, "color": "#66dffb" },
				{ "des": "区域", "flex": 5, "color": "#66dffb" },
			],
			"list": [
				{"textArr": ["公共安全", "结案", "安全隐患排查"]},
				{"textArr": ["公共安全", "办理中", "安全隐患排查"]},
				{"textArr": ["公共安全", "已分派", "安全隐患排查"]},
				{"textArr": ["公共安全", "已分派", "安全隐患排查"]},
				{"textArr": ["公共安全", "办理中", "安全隐患排查"]},
				{"textArr": ["公共安全", "已分派", "安全隐患排查"]},
				{"textArr": ["公共安全", "已分派", "安全隐患排查"]},
				{"textArr": ["公共安全", "已分派", "安全隐患排查"]},
				{"textArr": ["公共安全", "已分派", "安全隐患排查"]}
			]
			},
      numArr: [1234,3456,5678],
      startVal: 0,
      endVal: 1200,
      decimals: 0,
      duration: 1,
    }
  },
  methods: {
    // onReady: function(instance, CountUp) {
    //   const that = this;
    //   instance.update(that.endVal);
    // }
  }
}
</script>
<style lang="scss" scoped>
@import './index.scss'
</style>






