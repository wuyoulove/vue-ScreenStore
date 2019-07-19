


var doughnutChartDisplay = {
  names: [
    '其他','个体工商户','私营企业','外商经济控制企业','港澳台经济控制企业','非国有控股股份制企业',
    '非国有控股混合所有制企业'
  ],
  data: [{
    name: '其他',
    value: 110,
  },
  {
    name: '个体工商户',
    value: 521,
  },
  {
    name: '私营企业',
    value: 85,
  },
  {
    name: '外商经济控制企业',
    value: 98,
  },
  {
    name: '港澳台经济控制企业',
    value: 145,
  },
  {
    name: '非国有控股股份制企业',
    value: 356,
  },
  {
    name: '非国有控股混合所有制企业',
    value: 520,
  }],
  color: ['#69d8f8', '#8fffbc', '#ffcb4f', '#ff8e45', '#9fb2ff', '#ff6666', '#d4d4d4']
};


var barStyle = {  // 柱状图样式传入
  interval:0,
  rotate:55,
  legendShow: false
}
var funDepartEventsData = {
  names: [
    '农、林、牧、渔业','采矿业','制造业','电力、热力、燃气及水生产和供应业','建筑业','批发和零售业',
    '交通运输','仓储和邮政业','住宿和餐饮业','信息传输、软件和信息技术服务业','金融业','房地产业','租赁和商务服务业',
    '科学研究和技术服务业','水利、环境和公工设施管理业','居民服务、修理和其他服务业','教育','卫生和社会工作','文化、体育和社会工作',
    '公共管理、社会保障和社会组织','国际组织'
  ],
  series: {
    bar: [{
      name: '事件总数',
      data: [200, 300, 360, 100, 460, 320, 200, 300, 360, 100, 85, 320, 214, 235, 105, 236, 542, 102, 241, 154, 138],
      color: ['#34beeb', '#8fdaf3'],
    }]
  },
};

$(function(){
  pieChart("container_class", doughnutChartDisplay)

  barAndLineChartFun($('#lx_histogram'), funDepartEventsData, barStyle);
})