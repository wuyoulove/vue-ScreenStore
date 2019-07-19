$(function() {
  //矛盾纠纷排查处理情况柱状图
  var contradictionData = {
    names: [
      '秀峰区', '七星区', ' 象山区', '雁山区', '永福区', '灵川县', '临桂区',
      '灌阳县', '龙胜县', '全州县', '兴安县', '资源县', '乐平县', '阳朔县', '荔浦县'
    ],
    series: {
      bar: [{
        name: '排查总数',
        data: [100, 150, 180, 50, 230, 160, 100, 150, 180, 50, 230, 160, 100, 130, 140],
        color: ['#8edaf3', '#36bfeb'],
      }, {
        name: '调处数',
        data: [100, 150, 180, 50, 230, 160, 100, 150, 180, 50, 230, 160, 100, 130, 140],
        color: ['#ffdd8d', '#ffc949'],
      }, {
        name: '调处成功数',
        data: [100, 150, 180, 50, 230, 160, 100, 150, 180, 50, 230, 160, 100, 130, 140],
        color: ['#a7f8a9', '#58ee7a'],
      },{
        name: '调处未成功数',
        data: [100, 150, 180, 50, 230, 160, 100, 150, 180, 50, 230, 160, 100, 130, 140],
        color: ['#ffb995', '#ff8e44'],
      }]
    },
  };
 barAndLineChartFun($('#contradiction'), contradictionData,{legendType: 'bottomCenter'});
 //线形图
 var DisputeInvestigationData = {
    names: [
      '2018年1月','2018年2月','2018年3月','2018年4月','2018年5月','2018年6月',
      '2018年7月','2018年8月','2018年9月','2018年10月','2018年11月','2018年12月',
    ],
    legendShow: false,
    series: [{
      name: '人数',
      data: [300, 450, 540, 150, 690, 480, 300, 450, 540, 150, 690, 480],
      // color: ['#245570','#041122'],
    }],
  };
  waveformChartFun($('#DisputeInvestigation'), DisputeInvestigationData);
});
