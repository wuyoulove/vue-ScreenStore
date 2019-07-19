var InternalStaff = {
  axisPointer: 'cross',
  textStyle: { //数值样式
    color: 'black',
    fontSize: 16
  },
  names: [
    '秀峰区','七星区','象山区','叠彩区','雁山区','永福县',
    '灵川县','临桂区','灌阳县','恭城县','龙胜县','全州县','兴安县','资源县','乐平县','阳朔县','荔浦县'
  ],
  series: {
    bar: [
      {
        name: '总数',
        data: [Math.floor(Math.random()*(100 - 200) + 200), Math.floor(Math.random()*(100 - 200) + 200), Math.floor(Math.random()*(100 - 200) + 200),
          Math.floor(Math.random()*(100 - 200) + 200), Math.floor(Math.random()*(100 - 200) + 200), Math.floor(Math.random()*(100 - 200) + 200),
          Math.floor(Math.random()*(100 - 200) + 200), Math.floor(Math.random()*(100 - 200) + 200), Math.floor(Math.random()*(100 - 200) + 200),
          Math.floor(Math.random()*(100 - 200) + 200), Math.floor(Math.random()*(100 - 200) + 200), Math.floor(Math.random()*(100 - 200) + 200),
          Math.floor(Math.random()*(100 - 200) + 200),Math.floor(Math.random()*(100 - 200) + 200),Math.floor(Math.random()*(100 - 200) + 200),
          Math.floor(Math.random()*(100 - 200) + 200),Math.floor(Math.random()*(100 - 200) + 200)],
        showLabel: true,
        color: ['#36BFEB', '#8DDAF3'],
      },
      {
      name: '已帮扶数',
      data: [Math.floor(Math.random()*(1 - 100) + 100), Math.floor(Math.random()*(1 - 100) + 100), Math.floor(Math.random()*(1 - 100) + 100),
            Math.floor(Math.random()*(1 - 100) + 100), Math.floor(Math.random()*(1 - 100) + 100), Math.floor(Math.random()*(1 - 100) + 100),
            Math.floor(Math.random()*(1 - 100) + 100), Math.floor(Math.random()*(1 - 100) + 100), Math.floor(Math.random()*(1 - 100) + 100),
            Math.floor(Math.random()*(1 - 100) + 100), Math.floor(Math.random()*(1 - 100) + 100), Math.floor(Math.random()*(1 - 100) + 100),
            Math.floor(Math.random()*(1 - 100) + 100),Math.floor(Math.random()*(1 - 100) + 100),Math.floor(Math.random()*(1 - 100) + 100),
            Math.floor(Math.random()*(1 - 100) + 100),Math.floor(Math.random()*(1 - 100) + 100)],
      showLabel: true,
      color: ['#26D951', '#AFF9AD'],   
    }]
  },
};
var barStyle = {  // 柱状图样式传入
  legendType: 'bottomCenter'
}

!function() {
  barAndLineChartFun($('#special_crowd_body'), InternalStaff, barStyle);
}()