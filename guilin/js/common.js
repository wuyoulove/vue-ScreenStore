$(function() {
  var $myselect = $("#myselect");
  var guilinScreen = {
    $times: $('#times'),
    getDateFn: function() {
      // 获取当天日期时间
      var _this = this,
        add0 = function(num) {
          return num < 10 ? '0' + num : num;
        },
        setDateHtml = function() {
          var date = new Date(),
            nYear = date.getFullYear(),
            nMonth = add0(date.getMonth() + 1),
            nDate = add0(date.getDate()),
            nHours = add0(date.getHours()),
            nMinutes = add0(date.getMinutes()),
            nSeconds = add0(date.getSeconds());
          _this.$times.find('.year').html(nYear).end()
            .find('.month').html(nMonth).end()
            .find('.day').html(nDate).end()
            .find('.hour').html(nHours).end()
            .find('.minute').html(nMinutes).end()
            .find('.second').html(nSeconds)
        };
      setDateHtml();
      setInterval(function() {
        setDateHtml();
      }, 1000);
    },
    init: function() {
      this.getDateFn(); // 显示时间
      $('.item-cont').on('click', ' .tab-box .tab-item', function () {
        var $this = $(this);
        $this.addClass('active').siblings().removeClass('active');
      });
    }
  };

  /**
   * 初始化插件
   */
  $myselect.goSelectInput({
      height: 40,
      width: 230
  });

  /**
   * 获取两者的值
   */
  !function() {
    var requestUrl = GetRequest();
    var $_select_input = $('._select-input');
    if(requestUrl) {
      if (requestUrl.inds == 1) {
        $_select_input.text('事件统计分析')
      } else if (requestUrl.inds == 2) {
        $_select_input.text('户籍人口数据云图分析')
      } else if (requestUrl.inds == 3) {
        alert('暂无页面')
      } else if (requestUrl.inds == 4) {
        $_select_input.text('特殊人群数据云图分析')
      } else if (requestUrl.inds == 5) {
        $_select_input.text('重点青少年数据云图分析')
      } else if (requestUrl.inds == 6) {
        $_select_input.text('两新组织数据云图分析')
      } else if (requestUrl.inds == 7) {
        $_select_input.text('治安管理排查统计云图分析')
      } else if (requestUrl.inds == 8) {
        $_select_input.text('矛盾排查纠纷调处云图分析')
      }
      
    }
  }()
  $("._htools-selec-box").on('click', 'li', function() {
    var $this = $(this), ind = $this.attr('ind')
    var nsmes = $myselect.find("option:selected").text()
    if (ind == 1) {
      window.location.href = './eventStatistics.html'+'?inds=' + ind
    } else if (ind == 2) {
      window.location.href = './registPopulation.html'+'?inds=' + ind
    } else if (ind == 3) {
      alert('暂无页面')
    } else if (ind == 4) {
      window.location.href = './specialCrowd.html'+'?inds=' + ind
    } else if (ind == 5) {
      window.location.href = './teenager.html'+'?inds=' + ind
    } else if (ind == 6) {
      window.location.href = './lx_last.html'+'?inds=' + ind
    } else if (ind == 7) {
      window.location.href = './fenxiyuntu.html'+'?inds=' + ind
    } else if (ind == 8) {
      window.location.href = './maodunpaicha.html'+'?inds=' + ind
    }
    // console.log($(this).text())
  })
  guilinScreen.init();
});


function GetRequest() {  // 获取问号后面的值
  var url = location.search; //获取url中"?"符后的字串 
  var theRequest = new Object(); 
  if (url.indexOf("?") != -1) { 
     var str = url.substr(1); 
     strs = str.split("&"); 
     for(var i = 0; i < strs.length; i ++) { 
        theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]); 
     } 
  } 
  return theRequest; 
}
/** 
 * echarts 柱状和折线的混合图
 */
function barAndLineChartFun(dom, chartData, styles) { // style格式为对象 传入单独样式
  styles ? styles = styles : styles = {}
  styles.interval ? styles.interval : styles.interval = 0
  styles.rotate ? styles.rotate : styles.rotate = 0
  var legend = {
      show: false,
      data: [],
      textStyle: {
        color: '#c8f3ff',
      }
    },
    grid = {
      top: '10%',
      bottom: '10%',
      left: '3%',
      right: '3%',
      containLabel: true
    };
  if (styles.legendType === 'topRight') {
    legend.show = true;
    legend.top = '4%';
    legend.right = '3%';
    grid.top = '15%';
  } else if (styles.legendType === 'bottomCenter') {
    legend.show = true;
    legend.bottom = '4%';
    legend.left = 'center';
    grid.bottom = '15%';
  }
  var chart = echarts.init(dom.get(0));
  var chartOptions = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      },
      formatter: function(param) {
        var str = param[0].name + '<br>';
        param.map(function(item, index) {
          var value = item.value + (item.seriesType === 'line' ? '%' : ''),
            color = typeof item.color === "string" ? item.color : item.color.colorStops[0].color,
            marker = '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:' + color + ';"></span>';
          
          str += marker + item.seriesName + '：' + value + '<br>';
        });
        return str;
      },
    },
    legend: legend,
    grid: grid,
    xAxis: [{
      type: 'category',
      axisLabel: {
        color: '#fff',
        interval: styles.interval,
        rotate: styles.rotate // x轴倾斜角度
      },
      axisLine: {
        lineStyle: {
          color: '#42c7e3',
        }
      },
      axisTick: {
        show: false
      },
      data: [],
    }],
    yAxis: [{
      type: 'value',
      axisLabel: {
        color: '#fff',
      },
      axisLine: {
        show: false
      },
      splitLine: {
        // show: false,
        lineStyle: {
          color: 'rgba(255,255,255,0.4)'
        }
      }
    }, {
      type: 'value',
      axisLabel: {
        color: '#fff',
        formatter: '{value}%'
      },
      axisLine: {
        show: false
      },
      splitLine: {
        show: false,
      }
    }],
    series: []
  };
  var lineData = chartData.series.line || [],
    barData = chartData.series.bar || [];
  chartData.axisPointer ? chartOptions.tooltip.axisPointer.type = chartData.axisPointer : null;
  chartOptions.xAxis[0].data = chartData.names;
  barData.map(function(item, index) {
    chartOptions.legend.data.push(item.name);
    chartOptions.series.push({
      name: item.name,
      type: 'bar',
      barWidth: ((100 / barData.length) * 0.6).toFixed(1) + '%',
      itemStyle: {
        normal: {
          color: item.color ?
            item.color instanceof Array ? linearGradient(item.color) : item.color : linearGradient(['#34beeb', '#8fdaf3'])
        }
      },
      label: {
        normal: {
          show: !!item.showLabel,
          position: 'top',
          formatter: function(obj) {
            return [
              '{a|' + obj.value + '}',
            ].join('\n')
          },
          rich: {
            a: {
              align: 'center',
              color: '#35bfeb',
            }
          }
        }
      },
      data: item.data
    });
  });

  lineData.map(function (item, index) {
    chartOptions.legend.data.push(item.name);
    chartOptions.series.push({
      name: item.name,
      type: 'line',
      yAxisIndex: 1,
      stack: '',
      symbol: 'circle',
      symbolSize: 6,
      itemStyle: {
        normal: {
          color: item.color ?
            item.color instanceof Array ? linearGradient(item.color) : item.color : '#ffcb4f'
        }
      },
      data: item.data
    });
  });

  chart.clear();
  chart.setOption(chartOptions);
}
/** 
 * echarts 饼状图
 */
function pieChart(dom, params) {
  var pieChart = echarts.init(document.getElementById(dom));
  var option = {
    tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
      show: false,
      orient: 'vertical',
      x: 'center',
      y: 'bottom',
      data: params.names
    },
    graphic:{
      type:'text',
      left: '51%',
      top: '48%',
      style:{
          text:'类型\n占比',
          textAlign:'center',
          fill:'#fff',
          fontSize: 26,
          width:30,
          height:30
      }
    },
    series: [
      {
        name:'访问来源',
        type:'pie',
        radius: ['50%', '70%'],
        center: ['55%', '55%'], // 饼状图位置
        avoidLabelOverlap: true, // 禁止牵引线文字重叠
        hoverAnimation:true,　　  //是否开启 hover 在扇区上的放大动画效果
        silent: false,
        labelLine:{  
            normal:{  
                length:30
            }  
        },
        label: { // 饼状图中间提示
          normal: {
            show: true,
            position: 'top',
            textStyle : {
              fontSize : 15 // 设置文字大小
            },
            formatter: '{b}:\n{d}%' //牵引线内容占比 '{b}: {c}({d}%)'
          },
          emphasis: {
            show: true,
            textStyle: {
              fontSize: 19, // hover文字大小
              fontWeight: 'bold'
            }
          }
        },
        data: params.data,
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          },
          normal: { // 注入颜色
            color: function(data) {
              var colorList = params.color;
              return colorList[data.dataIndex]
            },
          }
        },
      },
    ]
  };
  // 使用刚指定的配置项和数据显示图表。
  pieChart.setOption(option);
}
/* echarts 波形图 */
function waveformChartFun(dom, chartData) {
  var chart = echarts.init(dom.get(0)),
    colors = ['#69d8f8', '#ffcb4f', '#4cec73'],
    chartOptions = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross'
        },
      },
      legend: {
        data: [],
        top: '4%',
        right: '5%',
        textStyle: {
          color: '#c8f3ff',
        }
      },
      grid: {
        top: '15%',
        bottom: '10%',
        left: '3%',
        right: '5%',
        containLabel: true
      },
      xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisLabel: {
          color: '#fff',
          interval: 0,
        },
        axisLine: {
          lineStyle: {
            color: '#42c7e3',
          }
        },
        axisTick: {
          show: false
        },
        data: [],
      }],
      yAxis: [{
        type: 'value',
        axisLabel: {
          color: '#fff',
        },
        axisLine: {
          show: false
        },
        splitLine: {
          // show: false,
          lineStyle: {
            color: 'rgba(255,255,255,0.4)'
          }
        }
      }],
      series: []
    };
  chartData.axisPointer ? chartOptions.tooltip.axisPointer.type = chartData.axisPointer : null;
  if (chartData.legendShow === false) {
    chartOptions.legend.show =  false;
    chartOptions.grid.top = '10%';
  }
  chartOptions.xAxis[0].data = chartData.names;
  chartData.series.map(function (item, index) {
    chartOptions.legend.data.push(item.name);
    chartOptions.series.push({
      name: item.name,
      type: 'line',
      stack: '',
      smooth: true,
      symbol: 'circle',
      symbolSize: 6,
      itemStyle: {
        normal: {
          color: item.color ? 
                  item.color instanceof Array ? item.color[0] : item.color
                  : colors[index]
        }
      },
      areaStyle: {
        normal: {
          color: item.color ? 
                  item.color instanceof Array ? linearGradient(item.color) : item.color
                  : linearGradient([colors[index], hexToRgba(colors[index], 0)])
        }
      },
      data: item.data,
    });
  });

  chart.clear();
  chart.setOption(chartOptions);
}
/** 
* @description echats 渐变色
* @param arr 例如:['#f90', 'rgb(0,0,0)']
* @returns 
*/
function linearGradient(arr) {
  return new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
    offset: 0,
    color: arr[0]
  }, {
    offset: 1,
    color: arr[1]
  }])
}

/** 
 * @description 颜色 hex 转 rgba
 * @param hex 例如:"#23ff45" 必须为 7 位
 * @param opacity 透明度
 * @returns {string} 
 */
function hexToRgba(hex, opacity) {
  return "rgba(" + parseInt("0x" + hex.slice(1, 3)) + "," + parseInt("0x" + hex.slice(3, 5)) + "," + parseInt("0x" + hex.slice(5, 7)) + "," + opacity + ")";
}