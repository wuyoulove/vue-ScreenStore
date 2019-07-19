$(function() {
  resetScreenSize()
  //数据总数效果滚动
  var leftNum = 0
  setInterval(function() {
    if(leftNum < 288) {
      leftNum += 96
      $('.numSum-cur').css('left', leftNum + 'px')
    } else {
      leftNum = 0
      $('.numSum-cur').css('left', leftNum + 'px')
    }
  }, 2000)
  //特殊人群
  var data = [{
            value: 335,
            name: '刑满释放人员'
          },
          {
            value: 310,
            name: '社区矫正人员'
          },
          {
            value: 234,
            name: '吸毒人员'
          },
          {
            value: 135,
            name: '精神障碍患者'
          },
          {
            value: 310,
            name: '危险品从业人员'
          },
          {
            value: 10,
            name: '精神障碍患者吧人'
          },
          {
            value: 10,
            name: '危险品从业人员吧人'
          }
        ] 
  var SpePopulation = echarts.init(document.getElementById('SpePopulation'));
  option = {

    tooltip: {
      trigger: 'item',
      show: false,
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    color: ['#c8f2fa', '#2774ab', '#55b4e6', '#fcba9e', '#fb7f61', '#9beff6', '#77cbf7'],
    legend: {
      type: 'scroll',
      orient: 'vertical',
      // x: 'right',
      right: 30,
      top: 'center',
      selectedMode: false,
      textStyle: {
        color: '#fff',
        fontSize: 12
      },
      data:data,
      formatter: function(name) {
//      debugger
//      var oa = option.series[0].data;
        var oa = data
//      var num = oa[0].value + oa[1].value + oa[2].value + oa[3].value;
        for(var i = 0; i < oa.length; i++) {
          if(name == oa[i].name) {
            //          return name + ' ' + (oa[i].value / num * 100).toFixed(2) + '人';
            return name + ' ' + oa[i].value + '人';
            //          return ;
          }
        }
      }
      
//   formatter:'{b}'
    },
    series: [{
        name: '签到比例分析',
        type: 'pie',
        radius: ['50%', '81%'],
        center: ['26%', '50%'],
        avoidLabelOverlap: false,
        label: {
          normal: {
            show: false,
            position: 'center',
            fontSize: 14,
            color: '#fff'
          },
          emphasis: {
            show: true,
            textStyle: {
              fontSize: '10',
              //                      fontWeight: 'bold'
            }
          }
        },
        data: [{
            value: 335,
            name: '刑满释放人员'
          },
          {
            value: 310,
            name: '社区矫正人员'
          },
          {
            value: 234,
            name: '吸毒人员'
          },
          {
            value: 135,
            name: '精神障碍患者'
          },
          {
            value: 310,
            name: '危险品从业人员'
          },
          {
            value: 10,
            name: '精神障碍患者吧人'
          },
          {
            value: 10,
            name: '危险品从业人员吧人'
          }
        ],
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        },
        itemStyle: {
          normal: {
            label: {
              show: false,
              formatter: '{d}%\n{b}'
            }
          },
          labelLine: {
            show: false
          }
        }
      },
      {
        name: '签到比例分析',
        type: 'pie',
        radius: ['47%', '48%'],
        center: ['26%', '50%'],
        hoverAnimation: false,
        data: [{
            value: 335,
            name: '准时',
            itemStyle: {
              normal: {
                color: '#b5dde8',
              }
            }
          },

        ],
        label: {
          normal: {
            show: false
          },
          emphasis: {
            show: false
          }
        },
        labelLine: {
          normal: {
            show: false
          },
          emphasis: {
            show: false
          }
        },
        tooltip: {
          show: false
        },
      }
    ]
  };
  SpePopulation.setOption(option)

  SpePopulation.dispatchAction({
    type: 'highlight',
    seriesIndex: 0,
    //显示高亮的下标 如果最大值默认高亮就把最大值的下标传进来
    dataIndex: 0
  });
  $('#SpePopulation').mouseenter(function() {
    SpePopulation.dispatchAction({
      type: 'downplay',
      seriesIndex: 0,
      dataIndex: 0
    });
  })

  $('#SpePopulation').mouseleave(function() {
    SpePopulation.dispatchAction({
      type: 'highlight',
      seriesIndex: 0,
      dataIndex: 0
    });
  })
  //事件类型占比图
  var eventType = echarts.init(document.getElementById('Event-type'));
  option = {
    tooltip: {
      trigger: 'item',
      show: false,
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
     color: ['#67dfb9', '#e7904c', '#fff5cd', '#2a65f5', '#6fa8fc'],
//  visualMap: {
//    show: false,
//    min: 80,
//    max: 600,
//    inRange: {
//      colorLightness: [0.4, 1]
//    }
//  },

    legend: {
      orient: 'horizontal',
//    x: 'center',
      left: 'center',
      bottom: 20,
      selectedMode: false,
      itemHeight: 6,
      itemWidth: 14,
//    width:'100%',
      icon: 'rect',
      textStyle: {
        color: '#cddafd',
        fontSize: 12,
        padding: [0, 31, 0, 0],
//      width:'90%',
        rich:{
          p:{
            width:'100%',
            height:1,
            backgroundColor: {
              image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAAAiCAYAAACTHwETAAAARklEQVR4nO3KMRHAIAAEwUcMAuIuKAB3EYAY0lLRJ7Pb3cwlAAAAAAAAAAAAAAAAAAAAAPAB5ZnrTtIPz0jStvb/7L9qaS/vFBkCXlVqqwAAAABJRU5ErkJggg=='
            }
          }
        }
//      backgroundColor: {
//        image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAAAiCAYAAACTHwETAAAARklEQVR4nO3KMRHAIAAEwUcMAuIuKAB3EYAY0lLRJ7Pb3cwlAAAAAAAAAAAAAAAAAAAAAPAB5ZnrTtIPz0jStvb/7L9qaS/vFBkCXlVqqwAAAABJRU5ErkJggg=='
//      }
      },
      padding: [0, 0, 0, 8],
      itemGap: 5,
      data: ['市容环境...', '突发事件', '宣传广告', '街面秩序...', '施工管理...'],
      formatter: function(name) {
        var oa = option.series[0].data;
        var num = 0
        for(var i = 0;i<oa.length;i++){
          num += oa[i].value
        }
//      var num = oa[0].value + oa[1].value + oa[2].value + oa[3].value;
        for(var i = 0; i < option.series[0].data.length; i++) {
          if(name == oa[i].name) {
//          name = name.length > 4 ? (name.slice(0, 4) + "...") : name;
////          return name + '     ' + (oa[i].value / num * 100).toFixed(2) + '%' + '  ';
//          return `${name}     ${(oa[i].value / num * 100).toFixed(2)}% \n {p|}`
            //          return ;
            if(name.length > 4){
              name = name.slice(0,4) + '...';
              return `${name}  ${(oa[i].value / num * 100).toFixed(2)}% \n {p|}`
            }else{
              return `${name}     ${(oa[i].value / num * 100).toFixed(2)}% \n {p|}`
            }
          }
        }
      }
    },
    series: [{
        name: '签到比例分析',
        type: 'pie',
        radius: ['20%', '62%'],
        center: ['50%', '35%'],
        avoidLabelOverlap: false,
        label: {
          normal: {
            show: false,
            position: 'center',
          },
          emphasis: {
            show: true,
            textStyle: {
              fontSize: '10',
              color: '#fff'
            }
          }
        },
        data: [{
            value: 300,
            name: '市容环境...',
          },
          {
            value: 300,
            name: '突发事件',
          },
          {
            value: 300,
            name: '宣传广告',
          },
          {
            value: 300,
            name: '街面秩序...',
          },
          {
            value: 300,
            name: '施工管理...',
          }
        ],
        roseType: 'radius',
        itemStyle: {
          normal: {
//          color: '#c5d8fe',
            label: {
              show: false,
              formatter: '{b}'
//            formatter:function(data){
//              console.log(data)
//            }
            }
          },
          labelLine: {
            show: false
          }
        },

      },
      {
        name: '签到比例分析',
        type: 'pie',
        radius: ['17%', '18%'],
        center: ['50%', '35%'],
        hoverAnimation: false,
        label: {
          normal: {
            show: false
          },
          emphasis: {
            show: false
          }
        },
        labelLine: {
          normal: {
            show: false
          },
          emphasis: {
            show: false
          }
        },
        tooltip: {
          show: false
        },
      }
    ]
  };
  eventType.clear();
  eventType.setOption(option)
  eventType.dispatchAction({
    type: 'highlight',
    seriesIndex: 0,
    //显示高亮的下标 如果最大值默认高亮就把最大值的下标传进来
    dataIndex: 0
  });
  $('#Event-type').mouseenter(function() {
    eventType.dispatchAction({
      type: 'downplay',
      seriesIndex: 0,
      dataIndex: 0
    });
  })

  $('#Event-type').mouseleave(function() {
    eventType.dispatchAction({
      type: 'highlight',
      seriesIndex: 0,
      dataIndex: 0
    });
  })

  //办理率
  var banli = echarts.init(document.getElementById('banli'));
  var dataStyle = {
    normal: {
      label: {
        show: false
      },
      labelLine: {
        show: false
      },
      shadowBlur: 40,
      shadowColor: 'rgba(40, 40, 40, 0.5)',
    }
  };
  var placeHolderStyle = {
    normal: {
      color: 'rgba(44,59,70,1)', //未完成的圆环的颜色
      label: {
        show: false
      },
      labelLine: {
        show: false
      }
    },
    emphasis: {
      color: 'rgba(44,59,70,1)' //未完成的圆环的颜色
    }
  };
  option = {
    title: {
      text: '75%',
      x: 'center',
      y: 'center',
      textStyle: {
        fontWeight: 'normal',
        color: "#fefefe",
        fontSize: 12
      }
    },
    color: ['#fcbda6', '#313443', '#fff'],
    tooltip: {
      show: false,
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
      show: false,
      itemGap: 12,
      data: ['01', '02']
    },
    toolbox: {
      show: false,
      feature: {
        mark: {
          show: true
        },
        dataView: {
          show: true,
          readOnly: false
        },
        restore: {
          show: true
        },
        saveAsImage: {
          show: true
        }
      }
    },
    series: [{
        name: 'Line 1',
        type: 'pie',
        clockWise: false,
        radius: ['60%', '75%'],
        itemStyle: dataStyle,
        hoverAnimation: false,
        data: [{
            value: 95,
            name: '01'
          }, {
            value: 5,
            name: 'invisible',
          }

        ]
      }

    ]
  };
  banli.setOption(option)

  //办结率
  var banjie = echarts.init(document.getElementById('banjie'));
  var dataStyle = {
    normal: {
      label: {
        show: false
      },
      labelLine: {
        show: false
      },
      shadowBlur: 40,
      shadowColor: 'rgba(40, 40, 40, 0.5)',
    }
  };
  var placeHolderStyle = {
    normal: {
      color: 'rgba(44,59,70,1)', //未完成的圆环的颜色
      label: {
        show: false
      },
      labelLine: {
        show: false
      }
    },
    emphasis: {
      color: 'rgba(44,59,70,1)' //未完成的圆环的颜色
    }
  };
  option = {
    title: {
      text: '75%',
      x: 'center',
      y: 'center',
      textStyle: {
        fontWeight: 'normal',
        color: "#fefefe",
        fontSize: 12
      }
    },
    color: ['#fcbda6', '#313443', '#fff'],
    tooltip: {
      show: false,
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
      show: false,
      itemGap: 12,
      data: ['01', '02']
    },
    toolbox: {
      show: false,
      feature: {
        mark: {
          show: true
        },
        dataView: {
          show: true,
          readOnly: false
        },
        restore: {
          show: true
        },
        saveAsImage: {
          show: true
        }
      }
    },
    series: [{
        name: 'Line 1',
        type: 'pie',
        clockWise: false,
        radius: ['60%', '75%'],
        itemStyle: dataStyle,
        hoverAnimation: false,
        data: [{
            value: 95,
            name: '01'
          }, {
            value: 5,
            name: 'invisible',
          }

        ]
      }

    ]
  };
  banjie.setOption(option)

  //矛盾纠纷排查
  var disputeLine = echarts.init(document.getElementById('disputeLine'));
  option = {
    title: {
      text: '',
      textStyle: {
        fontWeight: 'normal',
        fontSize: 12,
        color: '#F1F1F3'
      },
      left: '6%',

    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        lineStyle: {
          color: '#fff',
          width: 2
        }
      },
      //    formatter:"{b} <br/> {a0}: {c0} <br/> {a1}: {c1} <br/> {a2}:{c2}"
      //鼠标放上去的时候回调函数
      formatter: function(data) {
        if(data.length == 1){
           name1 = data[0].seriesName,
           name2 = '',
           name3 =''
           value1 = data[0].value,
           value2 = '',
           value3 = ''
        }else if(data.length == 2){
           name1 = data[0].seriesName,
           name2 = data[1].seriesName,
           name3 = ''
           value1 = data[0].value,
           value2 = data[1].value,
           value3 = ''
        }else{
           name1 = data[0].seriesName,
           name2 = data[1].seriesName,
           name3 = data[2].seriesName
           value1 = data[0].value,
           value2 = data[1].value,
           value3 = data[2].value
        }
         console.log(data)
        return `${name1} ${value1} <br/> ${name2} ${value2} <br/> ${name3} ${value3}`
      }
    },
    legend: {
      icon: "circle",
      itemWidth: 10,
      itemHeight: 10,
      borderRadius: 10,
      itemGap: 40,
      data: ['新增', '已办理', '已结案'],
      top: '7%',
      right: '4%',
      textStyle: {
        fontSize: 12,
        color: '#8fd4ec'
      },
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '5%',
      containLabel: true
    },
    xAxis: [{
      type: 'category',
      boundaryGap: false,
      axisLine: {
        show: false,
        lineStyle: {
          color: '#d7e3fc'
        }
      },
      data: ['1月', '2月', '3月', '4月', '5月']
    }],
    yAxis: [{
      type: 'value',
      axisTick: {
        show: false
      },
      axisLine: {
        show: false,
        lineStyle: {
          color: '#d7e3fc'
        }
      },
      axisLabel: {
        margin: 10,
        textStyle: {
          fontSize: 14
        }
      },
      splitLine: {
        lineStyle: {
          color: '#2b467e'
        }
      }
    }],
    series: [{
      name: '新增',
      type: 'line',
      showSymbol: false,
      smooth: true,
      lineStyle: {
        normal: {
          width: 2
        }
      },
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: 'rgba(251,122,105,0.1)'
          }, {
            offset: 0.8,
            color: 'rgba(251,122,105,0.1)'
          }], false),
        }
      },
      itemStyle: {
        normal: {
          color: '#fca880'
        }
      },
      data: [196.3, 96.4, 197.5, 95.6, 198.1]
    }, {
      name: '已办理',
      type: 'line',
      smooth: true,
      showSymbol: false,
      lineStyle: {
        normal: {
          width: 2
        }
      },
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: 'rgba(56,135,253, 0.1)'
          }, {
            offset: 0.8,
            color: 'rgba(56,135,253, 0.1)'
          }], false),
          shadowColor: 'rgba(0, 0, 0, 0.1)',
          shadowBlur: 10
        }
      },
      itemStyle: {
        normal: {
          color: '#f7ca6b  '
        }
      },
      data: [97.3, 199.2, 99.3, 200.0, 99.6]
    }, {
      name: '已结案',
      type: 'line',
      smooth: true,
      showSymbol: false,
      lineStyle: {
        normal: {
          width: 2
        }
      },
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: 'rgba(149,242,253, 0.1)'
          }, {
            offset: 0.8,
            color: 'rgba(149,242,253, 0.1)'
          }], false),
          shadowColor: 'rgba(0, 0, 0, 0.1)',
          shadowBlur: 10
        }
      },
      itemStyle: {
        normal: {
          color: '#3885f9'
        }
      },
      data: [84.2, 181.0, 67.5, 172.1, 43.7]
    }, ]
  };
  disputeLine.setOption(option)

})