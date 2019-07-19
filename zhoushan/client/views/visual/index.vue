<template>
    <div class="page visual-wrap">
        <header>
            <!-- <img class="nav" src="../../assets/img/visualImg/nav.png" alt=""> -->
            <!-- <img src="../../assets/img/visualImg/title5.png" alt=""> -->
            <div class="time">
                <home-date />
            </div>
        </header>
        <div id="map"></div>
        <div class="container">
            <Input class="ser1" v-model="value1" icon="close-round" style="width: 530px;height:50px;" @on-click="value1 = ''"></Input>
            <Button class="btn1" type="primary" icon="ios-search" style="height:49px;width:70px;"></Button>
            <div class="ser-result">
                <span>{{screenCondition}}</span>
                <span>共{{screenNum}}条</span>
            </div>
            <div class="ser-select">
                <span>在线专职网格员</span>
                <span>专职网格员巡查</span>
            </div>
            <div class="ser-child">
                <Input class="ser1" v-model="value2" style="width: 390px;height:64px;" placeholder="请输入关键字"></Input>
                <Button class="btn1" type="primary" icon="ios-search" style="height:63px;width:66px;"></Button>
            </div>
            <div class="result-num">
                共找到{{resultNum}}条搜索结果
            </div>
            <ul class="result-list">
                <li v-for="(item,index) in resultList">
                    <div>
                        <img src="../../assets/img/visualImg/location.png" alt="">
                        <span>所属网格: {{item.adress}}</span>
                        <img src="../../assets/img/visualImg/service.png" alt="">
                    </div>
                    <h3>姓名: {{item.name}}</h3>
                    <h3>联系电话: {{item.tel}}</h3>
                </li>
            </ul>
            <Page :total="100" :page-size="5" class="paging"></Page>
            <div class="ser-city">
                <Input class="ser1" v-model="value3" style="width: 250px;height:64px;" @on-focus="cityShow = true" @on-blur="cityBlur"></Input>
                <Button class="btn1" type="primary" icon="ios-search" style="height:63px;width:70px;"></Button>
                <div class="ser-city-list clr" v-show="cityShow">
                    <span class="fl" v-for="(item,index) in cityList" @click="citySearch(item)">{{item}}</span>
                </div>
            </div>
            <div class="grid-detail">
                <div class="grid-msg clr">
                    <img class="fl user-pic" src="../../assets/img/cerebrumImg/onePeople.png" alt="">
                    <div class="msg fl">
                        <h3>姓名: {{gridMsg.name}}</h3>
                        <h3>所属区域: {{gridMsg.address}}</h3>
                        <h3>职务: {{gridMsg.duty}}</h3>
                        <div>
                            <span>电子网格员: {{online.user}}{{online.on ? '在线' : '离线'}}</span>
                            <img src="../../assets/img/visualImg/service.png" alt="" @mousemove="modalShow = true" @mouseout="modalShow = false">
                        </div>
                    </div>
                    <h2>服务轨迹</h2>
                    <div class="time-line">
                        <Timeline>
                            <TimelineItem v-for="(item,index) in serverRecord" :key="index">
                                <h4>{{item.explain}}</h4>
                                <h5>{{item.date}}</h5>
                                <span>{{item.state}}</span>
                            </TimelineItem>
                        </Timeline>
                    </div>
                    <div class="modal" v-show="modalShow">
                        <div class="modal-header">
                            <img src="../../assets/img/visualImg/service.png" alt="">
                            <span>你好,{{online.user}}为您提供服务</span>
                        </div>
                        <div class="server-track clr"  v-for="(item,index) in serverRecord">
                            <img class="fl" src="../../assets/img/visualImg/location.png" alt="">
                            <div class="fl">
                                <h4>{{item.explain}}</h4>
                                <h5>{{item.date}}</h5>
                                <span>{{item.state}}</span>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import homeDate from '../../components/common/homeDate'
export default {
    components: {
        'home-date': homeDate
    },
    mounted() {
    let map = new BMap.Map("map");
    let point = new BMap.Point(122.181326, 30.06752);
    map.centerAndZoom(point, 12);
    map.enableScrollWheelZoom(true);
    let navigationControl = new BMap.NavigationControl({
    anchor: BMAP_ANCHOR_BOTTOM_RIGHT,
    // LARGE类型
    type: BMAP_NAVIGATION_CONTROL_LARGE,
    // 启用显示定位
    // enableGeolocation: true
  });
    let pt = new BMap.Point(122.181326, 30.06752);
    let pt1 = new BMap.Point(122.281326, 30.06752);
    let pt2 = new BMap.Point(122.181326, 30.05752);
    let pt3 = new BMap.Point(122.181326, 30.06752);
    let pt4 = new BMap.Point(122.201326, 30.00752);
	let myIcon = new BMap.Icon(require("../../assets/img/visualImg/service.png"), new BMap.Size(300,157));
    let marker = new BMap.Marker(pt,{icon:myIcon});  // 创建标注
    let marker1 = new BMap.Marker(pt1,{icon:myIcon});  // 创建标注
    let marker2 = new BMap.Marker(pt2,{icon:myIcon});  // 创建标注
    let marker3 = new BMap.Marker(pt3,{icon:myIcon});  // 创建标注
    let marker4 = new BMap.Marker(pt4,{icon:myIcon});  // 创建标注
    map.addOverlay(marker);
    map.addOverlay(marker1);
    map.addOverlay(marker2);
    map.addOverlay(marker3);
    map.addOverlay(marker4);
    map.addControl(navigationControl);
  },
  data() {
      return {
          value1: '',
          value2: '',
          value3: '',
          modalShow: false,
          cityShow: false,
          screenCondition:'在线专职网格员',
          screenNum:35,
          resultNum: 987,
          resultList: [
              {
                  adress: '舟山市定海区',
                  name: '张三三',
                  tel: 13333333333,
              },
              {
                  adress: '舟山市定海区',
                  name: '张三三',
                  tel: 13333333333,
              },
              {
                  adress: '舟山市定海区',
                  name: '张三三',
                  tel: 13333333333,
              },
              {
                  adress: '舟山市定海区',
                  name: '张三三',
                  tel: 13333333333,
              },
              {
                  adress: '舟山市定海区',
                  name: '张三三',
                  tel: 13333333333,
              }
          ],
          cityList: [ '舟山市', '岱山县', '定海区', '普陀区', '新城管委会'],
          gridMsg: {
              name: 'XXX',
              address: '舟山市定海区定海区',
              duty: '专职网格员'
          },
          online: {
              user: 'XXX',
              on: 'true'
          },
          serverRecord: [
              {
              explain: '在舟山市定海区XX街道XX户拜访了陈大爷',
              date: '2018年4月23日 20:20:20',
              state: '已完成'
          },
          {
              explain: '在舟山市定海区XX街道XX户拜访了陈大爷',
              date: '2018年4月23日 20:20:20',
              state: '已完成'
          },
          {
              explain: '在舟山市定海区XX街道XX户拜访了陈大爷',
              date: '2018年4月23日 20:20:20',
              state: '已完成'
          },
          ],
      }
  },
  methods: {
      citySearch(e) {
          this.value3 = e;
      },
      cityBlur() {
          setTimeout(() => {
              this.cityShow = false;
          },100)
      }
  }
}
</script>


<style lang="scss">
@import './index.scss'
</style>
