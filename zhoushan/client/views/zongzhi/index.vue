<template>
  <div class="page">
    <!-- <img src="../../assets/img/title1.png" alt=""> -->
    <div class="home-date">
      <home-date />
    </div>
    <div class="handle">
        <select-exit />
    </div>
    <div class="container clr">
      <div class="left fl">
        <div class="grid chunk">
          <box-border  :title="'网格信息'" :english="'Grid information'" :bgType="require('../../assets/img/border.png')" :num="'01'">
            <div class="num">
              <span class="all">{{gridAll | NumFormat}}</span>
              <span class="add">{{gridAdd | NumFormat}}</span>
            </div>
            <div class="chunk-detail clr">
              <div class="grid-classify fl">
                <div class="child-title">采集信息分类</div>
                <ul class="fl">
                  <li class="clr">
                    <div class="classify-icon fl">
                      <img src="../../assets/img/peoplenum.png" alt="图片加载失败">
                      <p>实有人口</p>
                    </div>
                    <div class="classify-num fl">
                      <span class="name">总量: </span>
                      <span>{{gridAll | NumFormat}}</span>
                      <br>
                      <span class="name">新增: </span>
                      <span>{{gridAll | NumFormat}}</span>
                    </div>
                  </li>
                  <li class="clr">
                    <div class="classify-icon fl">
                      <img src="../../assets/img/housenum.png" alt="图片加载失败">
                      <p>实有房屋</p>
                    </div>
                    <div class="classify-num fl">
                      <span class="name">总量: </span>
                      <span>{{gridAll | NumFormat}}</span>
                      <br>
                      <span class="name">新增: </span>
                      <span>{{gridAll | NumFormat}}</span>
                    </div>
                  </li>
                  <li class="clr">
                    <div class="classify-icon fl">
                      <img src="../../assets/img/orgnum.png" alt="图片加载失败">
                      <p>组织场所</p>
                    </div>
                    <div class="classify-num fl">
                      <span class="name">总量: </span>
                      <span>{{gridAll | NumFormat}}</span>
                      <br>
                      <span class="name">新增: </span>
                      <span>{{gridAll | NumFormat}}</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="grid-distribution fl">
                <div class="child-title">网格员分布</div>
                <div class="chart">
                  <pie-wangge :source="gridSource" :colorDic='colorDic' />
                </div>
              </div>
            </div>
          </box-border>
        </div>
        <div class="linkage chunk">
          <box-border  :title="'联动处置'" :english="'Linkage disposal'" :bgType="require('../../assets/img/border.png')" :num="'02'">
            <div class="num">
              <span class="all">{{gridAll | NumFormat}}</span>
              <span class="add">{{gridAdd | NumFormat}}</span>
            </div>
            <div class="chunk-detail clr">
              <div class="data-classify fl">
                <div class="child-title">业务分类</div>
                <list-bar :listName="listName" :listNum="listNum" />
                <list-bar :listName="listName" :listNum="listNum" />
                <list-bar :listName="listName" :listNum="listNum" />
                <list-bar :listName="listName" :listNum="listNum" />
              </div>
              <div class="data-source fl">
                <div class="child-title">任务来源</div>
                <ul class="clr">
                  <li class="fl">
                    <img src="../../assets/img/wanggeyuan.png" alt="">
                    <span>网格员</span>
                    <p>24579人</p>
                  </li>
                  <li class="fl">
                    <img src="../../assets/img/system.png" alt="">
                    <span>系统推送</span>
                    <p>24579人</p>
                  </li>
                  <li class="fl">
                    <img src="../../assets/img/xinfang.png" alt="">
                    <span>信访</span>
                    <p>24579人</p>
                  </li>
                  <li class="fl">
                    <img src="../../assets/img/shehui.png" alt="">
                    <span>社会公众</span>
                    <p>24579人</p>
                  </li>
                </ul>
              </div>
            </div>
            
          </box-border>
        </div>
      </div>
      <div class="middle fl">
        <div class="map">
          <c-map
            :mapInfo="currentDataMap"
            :getTipInfo="getTipInfo"
            @areaClick="areaClick"
            :id="'mapCont1'" />
        </div>        
      </div>
      <div class="right fl">
        <div class="data chunk">
          <box-border  :title="'数据纵览'" :english="'Data Overview'" :bgType="require('../../assets/img/border.png')" :num="'03'">
            <div class="num">
              <span class="all">{{gridAll | NumFormat}}</span>
              <span class="add">{{gridAdd | NumFormat}}</span>
            </div>
            <div class="chunk-detail">
              <div class="child-title">新增事件统计</div>
              <div class="chart-box">
                <default-bar />
              </div>
            </div>
          </box-border>
        </div>
        <div class="risk chunk">
          <box-border  :title="'风险隐患'" :english="'Hidden risks'" :bgType="require('../../assets/img/border.png')" :num="'04'">
            <div class="num">
              <span class="all">{{gridAll | NumFormat}}</span>
              <span class="add">{{gridAdd | NumFormat}}</span>
            </div>
            <div class="chunk-detail clr">
              <div class="risk-msg fl">
                <div class="child-title">风险隐患信息</div>
                <div class="line-chart">
                  <three-line :chartId="lineChart" />
                </div>
              </div>
              <div class="risk-assess fl">
                <div class="child-title">风险评估</div>
                <div class="table-box">
                  <table-scroll :header="dynamicInfo.header" :source="dynamicInfo.list" :nopadding="true" class="dynamics"></table-scroll>
                </div>
              </div>
            </div>
          </box-border>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import homeDate from 'components/common/homeDate'
import selectExit from "components/common/selectExit"
import cMap from 'components/common/cMap'
import boxBorder from 'components/common/boxBorder'
import pieWangge from 'components/common/pieWangge'
import listBar from 'components/common/listBar'
import defaultBar from 'components/common/defaultBar'
import threeLine from 'components/common/threeLine'
import tableScroll from 'components/common/tableScroll'
import { mapData } from '../../mock/map'
export default {
  components: {
    'box-border': boxBorder,
    "select-exit": selectExit,
    'pie-wangge': pieWangge,
    'list-bar': listBar,
    'default-bar': defaultBar,
    'three-line': threeLine,
    'table-scroll': tableScroll,
    'home-date': homeDate,
    'c-map': cMap
  },
  data() {
    return {
      gridAll: 1111111,
      gridAdd: 45667,
      currentDataMap:mapData,
      showAll: true,
      listNum: 123,
      listName: '便民服务',
      lineChart: 'lineChart',
      gridSource: [
        { sour: '城市管理', value: 1234, name: '1' },
        { sour: '城市管理', value: 1234, name: '2' },
        { sour: '城市管理', value: 1234, name: '3' },
        { sour: '城市管理', value: 1234, name: '4' },
        { sour: '城市管理', value: 1234, name: '5' },
        { sour: '城市管理', value: 1234, name: '6' },
        { sour: '城市管理', value: 1234, name: '7' },
      ],
      colorDic: {
        fillColor: [
          'rgb(185,89,42)',
          'rgb(113,173,103)',
          'rgb(93,188,233)',
          'rgb(199,103,100)',
          'rgb(197,181,86)',
          'rgb(67,123,176)',
          'rgb(76,111,233)',
        ],
      },
      dynamicInfo:{
			"header": [
				{ "des": "日期", "flex": 5, "color": "#66dffb" },
				{ "des": "标题", "flex": 5, "color": "#66dffb" },
				{ "des": "区域", "flex": 5, "color": "#66dffb" },
				{ "des": "风险评估", "flex": 8, "color": "#66dffb" }
			],
			"list": [
				{"textArr": ["公共安全", "结案", "安全隐患排查", "中"]},
				{"textArr": ["公共安全", "办理中", "安全隐患排查", "低"]},
				{"textArr": ["公共安全", "已分派", "安全隐患排查", "高"]},
				{"textArr": ["公共安全", "已分派", "安全隐患排查", "高"]},
				{"textArr": ["公共安全", "办理中", "安全隐患排查", "中"]},
				{"textArr": ["公共安全", "已分派", "安全隐患排查", "中"]},
				{"textArr": ["公共安全", "已分派", "安全隐患排查", "中"]},
				{"textArr": ["公共安全", "已分派", "安全隐患排查", "低"]},
				{"textArr": ["公共安全", "已分派", "安全隐患排查", "低"]}
			]
      },
      tipInfos:{}
    }
  },
  methods: {
    areaClick(info) {

    },
    getTipInfo(name) {
        let info = {
          header: { "text": `${name}`, "color": "orange" },
          list: [
            { "text": "吸毒人员数", "color": "green", "value": 0 },
            { "text": "社工数", "color": "orange", "value": 0 },
            { "text": "在线社工", "color": "red", "value": 0 },
            { "text": "工作任务数", "color": "blue", "value": 0 }
          ]
        };
        if ( this.tipInfos[name] ) {
          info = {
            header: { "text": `${name}`, "color": "orange" },
            list: [
              this.tipInfos[name][1],
              this.tipInfos[name][2],
              this.tipInfos[name][3],
              this.tipInfos[name][4]
            ]
          }
        }
        return info
      },
  }
}
</script>
<style lang='scss' scoped>
  @import './index.scss'
</style>