$(function () {
  var EquippedProfessionalData = {
    names: [
      '秀峰区', '七星区', ' 象山区', '雁山区', '永福区', '灵川县', '临桂区',
      '灌阳县', '龙胜县', '全州县', '兴安县', '资源县', '乐平县', '阳朔县', '荔浦县'
    ],
    series: {
      bar: [{
        name: '人数',
        data: [100, 150, 180, 50, 230, 160, 100, 150, 180, 50, 230, 160, 100, 130, 140],
        color: ['#8edaf3', '#35bfeb'],
      }]
    },
  };
  barAndLineChartFun($('#EquippedProfessional'), EquippedProfessionalData);
  //饼状图
  var professionalRatioData = {
    echartData: [{
        value: 2154,
        name: "男性",
      },
      {
        value: 3854,
        name: "女性"
      },
      {
        value: 3854,
        name: "女性"
      },
      {
        value: 3854,
        name: "女性"
      }
    ],
    rich: {
      yellow: {
        color: "#ffc72b",
        fontSize: 30,
        padding: [5, 4],
        align: "center"
      },
      total: {
        color: "#41a9c2",
        fontSize: 36,
        align: "center"
      },
      hr: {
        borderColor: '#69d8f8',
        width: '100%',
        borderWidth: 1,
        height: 0,
      },
      white: {
        color: "#fff",
        lineHeight: 30,
        fontSize: 18,

      },
      blue: {
        color: "#b48a39",
        fontSize: 16,
        lineHeight: 30,
      }
    },
    subtext: '占比',
    text: '类型',
    color: ["#69d8f8", "#8fffbc", "#ffcb4f", "#ff8e45", "#9fb2ff", "#ff6666", "#d4d4d4", "#69d8f8"]
  }
  pieEchats("professionalRatio", professionalRatioData)

  var securityRatioData = {
    echartData: [{
        value: 2154,
        name: "男性",
      },
      {
        value: 3854,
        name: "女性"
      },
      {
        value: 3854,
        name: "女性"
      },
      {
        value: 3854,
        name: "女性"
      }
    ],
    rich: {
      yellow: {
        color: "#ffc72b",
        fontSize: 30,
        padding: [5, 4],
        align: "center"
      },
      total: {
        color: "#41a9c2",
        fontSize: 36,
        align: "center"
      },
      hr: {
        borderColor: '#69d8f8',
        width: '100%',
        borderWidth: 1,
        height: 0,
      },
      white: {
        color: "#fff",
        lineHeight: 30,
        fontSize: 18,

      },
      blue: {
        color: "#b48a39",
        fontSize: 16,
        lineHeight: 30,
      }
    },
    subtext: '占比',
    text: '类型',
    color: ["#69d8f8", "#8fffbc", "#ffcb4f", "#ff8e45", "#9fb2ff", "#ff6666", "#d4d4d4", "#69d8f8"]
  }
  pieEchats("securityRatio", securityRatioData)
});
//饼状图

function pieEchats(dom, chartData) {
  var pieEChart = echarts.init(document.getElementById(dom));
  var scale = 1;
  let option = {
    backgroundColor: "",
    title: {
      text: chartData.text,
      left: "center",
      top: "37%",
      padding: [24, 0],
      textStyle: {
        color: "#fff",
        fontSize: 24 * scale,
        align: "center",
        fontWeight: 400
      },
      subtext: chartData.subtext,
      left: "center",
      top: "37%",
      padding: [24, 0],
      subtextStyle: {
        color: "#fff",
        fontSize: 24 * scale,
        align: "center"
      }
    },
    series: [{
      name: "总考生数量",
      type: "pie",
      radius: ["32%", "58%"],
      hoverAnimation: true,
      label: {
        normal: {
          padding: [0, -50],
          formatter: function (params, ticket, callback) {
            var total = 0; //考生总数量
            var percent = 0; //考生占比
            chartData.echartData.forEach(function (value, index, array) {
              total += value.value;
            });
            percent = (params.value / total * 100).toFixed(1);
            return "{white|" + params.name + "}\n{blue|" + percent + "%}";
          },
          rich: chartData.rich
        }
      },
      labelLine: {
        normal: {
          length: 32 * scale,
          length2: 50,
          lineStyle: {
            color: "#71d9fb"
          }
        }
      },
      data: chartData.echartData,
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        },
        normal: {
          color: function (params) {
            //自定义颜色
            var colorList = chartData.color;
            return colorList[params.dataIndex]
          }

        }
      }
    }]
  };
  pieEChart.setOption(option);
}
