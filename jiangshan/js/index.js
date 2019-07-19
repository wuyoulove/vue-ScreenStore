//饼图
var chart1 = echarts.init(document.getElementById("chart1"));
let scaleData = [
  {
    name: "综治工作",
    value: 8425
  },
  {
    name: "综合执法",
    value: 2704
  },
  {
    name: "市场监管",
    value: 925
  },
  {
    name: "便民服务",
    value: 11852
  }
];
let placeHolderStyle = {
  normal: {
    label: {
      show: false
    },
    labelLine: {
      show: false
    },
    color: "rgba(0, 0, 0, 0)",
    borderColor: "rgba(0, 0, 0, 0)",
    borderWidth: 0
  }
};
let legendData = [];
let data = [];
let color = ["#EEF173", "#F3C990", "#71C7E8", "#8CF0CA"];
for (var i = 0; i < scaleData.length; i++) {
  data.push(
    {
      value: scaleData[i].value,
      name: scaleData[i].name,
      itemStyle: {
        normal: {
          borderWidth: 5,
          shadowBlur: 20,
          borderColor: color[i],
          shadowColor: color[i]
        }
      },
      textStyle: {
        color: color[i]
      }
    },
    {
      value: 1500,
      name: "",
      itemStyle: placeHolderStyle
    }
  );
}

for (let n in scaleData) {
  scaleData[n]["name"] = scaleData[n]["name"];
  legendData.push({
    name: scaleData[n]["name"],
    textStyle: {
      color: color[n]
    }
  });
}

let seriesObj = [
  {
    name: "",
    type: "pie",
    radius: [80, 85],
    center: ["30%", "50%"],
    hoverAnimation: false,
    startAngle: 135,
    avoidLabelOverlap: false,
    itemStyle: {
      normal: {
        label: {
          show: false,
          position: "center",
          color: "#ddd"
          // formatter: "{b}: {d}"
        },
        labelLine: {
          length: 30,
          length2: 100,
          show: false,
          color: "#00ffff"
        }
      }
    },
    emphasis: {
      label: {
        show: true,
        align: "center",
        rich: {
          a: {
            fontSize: 20,
            lineHeight: 35,
            color: "#fff"
          },
          b: {
            fontSize: 36,
            color: "#f2f375"
          }
        },
        formatter: function(data) {
          let arr = ["{a|" + data.name + "}", "{b|" + data.value + "}"];
          return arr[0] + "\n" + arr[1];
        }
      }
    },
    data: data
  }
];
let option = {
  color: ["#EEF173", "#F3C990", "#71C7E8", "#8CF0CA"],
  // backgroundColor: '#04243E',
  tooltip: {
    show: true
  },
  legend: {
    show: true,
    right: "21px",
    top: "center",
    orient: "vertical",
    itemWidth: 14,
    itemHeight: 14,
    itemGap: 26,
    textStyle: {
      color: "#FBFBFB",
      rich: {
        a: {
          fontSize: 16
        },
        b: {
          fontSize: 16,
          color: "#fff",
          width: 88,
          // backgroundColor: 'green',
          align: "center"
        }
      }
    },
    data: legendData,
    formatter: function(name) {
      let total = 0;
      let target;
      for (let i = 0, l = data.length; i < l; i++) {
        total += data[i].value;
        if (data[i].name === name) {
          target = data[i].value;
        }
      }
      let arr = [
        "{b|" + name + "}",
        "{a|" + ((target / total) * 100).toFixed(2) + "%}"
      ];
      return arr.join("");
    }
  },
  toolbox: {
    show: true
  },
  series: seriesObj
};
chart1.setOption(option);

//柱状图
let chart3 = echarts.init(document.getElementById("chart3"));
let lightBlue = {
  type: "linear",
  x: 0,
  y: 0,
  x2: 0,
  y2: 1,
  colorStops: [
    {
      offset: 0,
      color: "#69bbe2" // 0% 处的颜色
    },
    {
      offset: 1,
      color: "#96fcd8" // 100% 处的颜色
    }
  ],
  globalCoord: false // 缺省为 false
};
let option3_1 = {
  tooltip: {
    show: false
  },
  grid: {
    top: "10%",
    left: "2%",
    right: "2%",
    bottom: "15%"
    // backgroundColor: 'yellow',
    // show: true,
  },
  xAxis: {
    data: [
      "双塔",
      "虎山",
      "上余",
      "四都",
      "清湖",
      "新塘边",
      "贺村",
      "碗窑",
      "凤林",
      "峡口",
      "保安",
      "大陈",
      "坛石",
      "大桥",
      "石门",
      "长台",
      "甘八都",
      "塘源口",
      "张村"
    ],
    offset: 0,
    axisTick: {
      show: false
    },
    axisLine: {
      lineStyle: {
        color: "#63B5D3"
      }
    },
    axisLabel: {
      color: "#fff",
      fontSize: 12,
      interval: 0
    }
  },
  yAxis: {
    min: 0,
    max: 100,
    splitLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    axisLine: {
      show: false
    },
    axisLabel: {
      show: false
    }
  },
  series: [
    {
      type: "bar",
      label: {
        show: true,
        position: [-18, -25],
        padding: 10,
        color: "#B1B3BC",
        fontSize: 14,
        formatter: "{c}%"
      },
      itemStyle: {
        color: lightBlue
      },
      barWidth: "45%",
      data: [
        100,
        100,
        100,
        100,
        100,
        100,
        87,
        100,
        100,
        95,
        100,
        90,
        100,
        100,
        100,
        100,
        100,
        100,
        100
      ],
      z: 10
    },
    {
      type: "bar",
      barGap: "-100%",
      itemStyle: {
        opacity: 0.05
      },
      barWidth: "45%",
      //   itemStyle: {
      //     color: 'red',
      //   },
      data: [100, 100, 100, 100],
      z: 5
    },
    {
      type: "bar",
      barGap: "-100%",
      itemStyle: {
        color: "#1a3052",
        opacity: 0.5
      },
      barWidth: "45%",

      data: [
        100,
        100,
        100,
        100,
        100,
        100,
        100,
        100,
        100,
        100,
        100,
        100,
        100,
        100,
        100,
        100,
        100,
        100,
        100
      ],
      z: 5
    }
  ]
};
let option3_2 = {
  tooltip: {
    show: false
  },
  grid: {
    top: "10%",
    left: "2%",
    right: "2%",
    bottom: "15%"
    // backgroundColor: 'yellow',
    // show: true,
  },
  xAxis: {
    data: [
      "06.21",
      "06.22",
      "06.23",
      "06.24",
      "06.25",
      "06.26",
      "06.27",
      "06.28",
      "06.29",
      "06.30",
      "07.01",
      "07.02",
      "07.03"
    ],
    offset: 0,
    axisTick: {
      show: false
    },
    axisLine: {
      lineStyle: {
        color: "#63B5D3"
      }
    },
    axisLabel: {
      color: "#fff",
      fontSize: 12,
      interval: 0
    }
  },
  yAxis: {
    min: 0,
    max: 100,
    splitLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    axisLine: {
      show: false
    },
    axisLabel: {
      show: false
    }
  },
  series: [
    {
      type: "line",
      label: {
        show: true,
        position: [-18, -25],
        padding: 10,
        color: "#B1B3BC",
        fontSize: 14,
        formatter: "{c}%"
      },
      itemStyle: {
        color: lightBlue
      },
      barWidth: "45%",
      data: [
        100,
        100,
        100,
        80,
        100,
        95,
        90,
        100,
        90,
        85,
        70,
        75,
        100,
        100,
        100,
        100,
        90,
        90,
        100
      ],
      z: 10
    }
  ]
};
let option3_3 = {
  tooltip: {
    show: false
  },
  grid: {
    top: "10%",
    left: "2%",
    right: "2%",
    bottom: "15%"
    // backgroundColor: 'yellow',
    // show: true,
  },
  xAxis: {
    data: [
      "06.21",
      "06.22",
      "06.23",
      "06.24",
      "06.25",
      "06.26",
      "06.27",
      "06.28",
      "06.29",
      "06.30",
      "07.01",
      "07.02",
      "07.03"
    ],
    offset: 0,
    axisTick: {
      show: false
    },
    axisLine: {
      lineStyle: {
        color: "#63B5D3"
      }
    },
    axisLabel: {
      color: "#fff",
      fontSize: 12,
      interval: 0
    }
  },
  yAxis: {
    min: 0,
    max: 100,
    splitLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    axisLine: {
      show: false
    },
    axisLabel: {
      show: false
    }
  },
  series: [
    {
      type: "line",
      label: {
        show: true,
        position: [-18, -25],
        // position: ['100%', '100%'],
        padding: 10,
        color: "#B1B3BC",
        fontSize: 14,
        formatter: "{c}%"
      },
      itemStyle: {
        color: lightBlue
      },
      barWidth: "45%",
      data: [
        80,
        75,
        90,
        85,
        70,
        75,
        80,
        90,
        95,
        80,
        80,
        70,
        100,
        90,
        95,
        75,
        90,
        100,
        70
      ],
      z: 10
    }
  ]
};
let option3_4 = {
  tooltip: {
    show: false
  },
  grid: {
    top: "10%",
    left: "2%",
    right: "2%",
    bottom: "15%"
    // backgroundColor: 'yellow',
    // show: true,
  },
  xAxis: {
    data: [
      "双塔",
      "虎山",
      "上余",
      "四都",
      "清湖",
      "新塘边",
      "贺村",
      "碗窑",
      "凤林",
      "峡口",
      "保安",
      "太陈",
      "坛石",
      "大桥",
      "石门",
      "长台",
      "甘八都",
      "塘源口",
      "张村"
    ],
    offset: 0,
    axisTick: {
      show: false
    },
    axisLine: {
      lineStyle: {
        color: "#63B5D3"
      }
    },
    axisLabel: {
      color: "#fff",
      fontSize: 12,
      interval: 0
    }
  },
  yAxis: {
    min: 0,
    max: 100,
    splitLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    axisLine: {
      show: false
    },
    axisLabel: {
      show: false
    }
  },
  series: [
    {
      type: "bar",
      label: {
        show: true,
        position: [-18, -25],
        // position: ['100%', '100%'],
        padding: 10,
        color: "#B1B3BC",
        fontSize: 14,
        formatter: "{c}%"
      },
      itemStyle: {
        color: lightBlue
      },
      barWidth: "45%",
      data: [
        100,
        100,
        100,
        100,
        100,
        100,
        100,
        100,
        100,
        100,
        100,
        100,
        100,
        100,
        100,
        100,
        100,
        100,
        100
      ],
      z: 10
    },
    {
      type: "bar",
      barGap: "-100%",
      itemStyle: {
        opacity: 0.05
      },
      barWidth: "45%",
      //   itemStyle: {
      //     color: 'red',
      //   },
      data: [100, 100, 100, 100],
      z: 5
    },
    {
      type: "bar",
      barGap: "-100%",
      itemStyle: {
        color: "#1a3052",
        opacity: 0.5
      },
      barWidth: "45%",

      data: [
        100,
        100,
        100,
        100,
        100,
        100,
        100,
        100,
        100,
        100,
        100,
        100,
        100,
        100,
        100,
        100,
        100,
        100,
        100
      ],
      z: 5
    }
  ]
};
let option3_5 = {
  tooltip: {
    show: false
  },
  grid: {
    top: "10%",
    left: "2%",
    right: "2%",
    bottom: "15%"
    // backgroundColor: 'yellow',
    // show: true,
  },
  xAxis: {
    data: [
      "双塔",
      "虎山",
      "上余",
      "四都",
      "清湖",
      "新塘边",
      "贺村",
      "碗窑",
      "凤林",
      "峡口",
      "保安",
      "太陈",
      "坛石",
      "大桥",
      "石门",
      "长台",
      "甘八都",
      "塘源口",
      "张村"
    ],
    offset: 0,
    axisTick: {
      show: false
    },
    axisLine: {
      lineStyle: {
        color: "#63B5D3"
      }
    },
    axisLabel: {
      color: "#fff",
      fontSize: 12,
      interval: 0
    }
  },
  yAxis: {
    min: 0,
    max: 100,
    splitLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    axisLine: {
      show: false
    },
    axisLabel: {
      show: false
    }
  },
  series: [
    {
      type: "bar",
      label: {
        show: true,
        position: [-18, -25],
        // position: ['100%', '100%'],
        padding: 10,
        color: "#B1B3BC",
        fontSize: 14,
        formatter: "{c}%"
      },
      itemStyle: {
        color: lightBlue
      },
      barWidth: "45%",
      data: [
        100,
        100,
        100,
        100,
        100,
        100,
        100,
        100,
        100,
        100,
        100,
        100,
        100,
        100,
        100,
        100,
        100,
        100,
        100
      ],
      z: 10
    },
    {
      type: "bar",
      barGap: "-100%",
      itemStyle: {
        opacity: 0.05
      },
      barWidth: "45%",
      //   itemStyle: {
      //     color: 'red',
      //   },
      data: [100, 100, 100, 100],
      z: 5
    },
    {
      type: "bar",
      barGap: "-100%",
      itemStyle: {
        color: "#1a3052",
        opacity: 0.5
      },
      barWidth: "45%",

      data: [
        100,
        100,
        100,
        100,
        100,
        100,
        100,
        100,
        100,
        100,
        100,
        100,
        100,
        100,
        100,
        100,
        100,
        100,
        100
      ],
      z: 5
    }
  ]
};
chart3.setOption(option3_1);

//折线图
let chart2 = echarts.init(document.getElementById("chart2"));
var option2_1 = {
  grid: {
    top: 10,
    left: 0,
    bottom: 25,
    right: 0
    // show: true,
    // backgroundColor: 'yellow',
  },
  symbolSize: 60,
  tooltip: {
    trigger: "axis"
  },
  legend: {
    show: false
  },
  xAxis: [
    {
      type: "category",
      data: [
        "11.02",
        "11.09",
        "11.16",
        "11.21",
        "11.28",
        "12.01",
        "12.07",
        "12.14",
        "12.21",
        "12.28"
      ],
      axisTick: {
        show: false
      },
      splitLine: {
        show: false
      },
      axisLabel: {
        color: "#6871b9",
        fontSize: 12,
        interval: 0
      },
      axisLine: {
        lineStyle: {
          color: "#73c6fa"
        }
      }
    }
  ],
  yAxis: [
    {
      type: "value",
      name: "",
      min: 80,
      // max: 100,
      interval: 3,
      axisLabel: {
        formatter: "{value}"
      },
      axisTick: {
        show: false
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: "rgba(187, 173, 91, 0.3)"
        }
      },
      axisLabel: {
        color: "#6871b9"
      },
      nameTextStyle: {
        color: "#939bd8"
      },
      axisLine: {
        show: false,
        lineStyle: {
          color: "#73c6fa"
        }
      }
    }
  ],
  series: [
    {
      name: "应急联动事件（近7日）",
      type: "line",
      data: [92, 96, 94, 99, 92, 96, 94, 99, 90, 132],
      // data: [22.21, 16.21, 45.47, 19.56, 12.11, 16.53, 14.88, 39.36, 50.11, 10.21],
      barWidth: 5,
      itemStyle: {
        normal: {
          color: "#70C286"
        }
      },
      lineStyle: {
        color: "#70C286",
        width: 3,
        type: "solid"
      },
      symbolSize: 8,
      symbol: "circle"
    }
  ]
};

var option2_2 = {
  grid: {
    top: 10,
    left: 0,
    bottom: 25,
    right: 0
    // show: true,
    // backgroundColor: 'yellow',
  },
  symbolSize: 60,
  tooltip: {
    trigger: "axis"
  },
  legend: {
    show: false
  },
  xAxis: [
    {
      type: "category",
      data: [
        "11.02",
        "11.09",
        "11.16",
        "11.21",
        "11.28",
        "12.01",
        "12.07",
        "12.14",
        "12.21",
        "12.28"
      ],
      axisTick: {
        show: false
      },
      splitLine: {
        show: false
      },
      axisLabel: {
        color: "#6871b9",
        fontSize: 12,
        interval: 0
      },
      axisLine: {
        lineStyle: {
          color: "#73c6fa"
        }
      }
    }
  ],
  yAxis: [
    {
      type: "value",
      name: "",
      min: 80,
      max: 100,
      interval: 3,
      axisLabel: {
        formatter: "{value}"
      },
      axisTick: {
        show: false
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: "rgba(187, 173, 91, 0.3)"
        }
      },
      axisLabel: {
        color: "#6871b9"
      },
      nameTextStyle: {
        color: "#939bd8"
      },
      axisLine: {
        show: false,
        lineStyle: {
          color: "#73c6fa"
        }
      }
    }
  ],
  series: [
    {
      name: "平均响应时间",
      type: "line",
      data: [92, 96, 94, 99, 92, 96, 94, 99, 90, 100],
      // data: [22.21, 16.21, 45.47, 19.56, 12.11, 16.53, 14.88, 39.36, 50.11, 10.21],
      barWidth: 5,
      itemStyle: {
        normal: {
          color: "#70C286"
        }
      },
      lineStyle: {
        color: "#70C286",
        width: 3,
        type: "solid"
      },
      symbolSize: 8,
      symbol: "circle"
    }
  ]
};

var option2_3 = {
  grid: {
    top: 10,
    left: 0,
    bottom: 25,
    right: 0
    // show: true,
    // backgroundColor: 'red',
  },
  symbolSize: 60,
  tooltip: {
    trigger: "axis"
  },
  legend: {
    show: false
  },
  xAxis: [
    {
      type: "category",
      data: [
        "11.02",
        "11.09",
        "11.16",
        "11.21",
        "11.28",
        "12.01",
        "12.07",
        "12.14",
        "12.21",
        "12.28"
      ],
      axisTick: {
        show: false
      },
      splitLine: {
        show: false
      },
      axisLabel: {
        color: "#6871b9",
        fontSize: 12,
        interval: 0
      },
      axisLine: {
        lineStyle: {
          color: "#73c6fa"
        }
      }
    }
  ],
  yAxis: [
    {
      type: "value",
      name: "",
      min: 80,
      max: 100,
      interval: 3,
      axisLabel: {
        formatter: "{value}"
      },
      axisTick: {
        show: false
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: "rgba(187, 173, 91, 0.3)"
        }
      },
      axisLabel: {
        color: "#6871b9"
      },
      nameTextStyle: {
        color: "#939bd8"
      },
      axisLine: {
        show: false,
        lineStyle: {
          color: "#73c6fa"
        }
      }
    }
  ],
  series: [
    {
      name: "平均到场时间",
      type: "line",
      data: [92, 96, 94, 99, 92, 96, 94, 99, 90, 100],
      // data: [22.21, 16.21, 45.47, 19.56, 12.11, 16.53, 14.88, 39.36, 50.11, 10.21],
      barWidth: 5,
      itemStyle: {
        normal: {
          color: "#70C286"
        }
      },
      lineStyle: {
        color: "#70C286",
        width: 3,
        type: "solid"
      },
      symbolSize: 8,
      symbol: "circle"
    }
  ]
};

var option2_4 = {
  grid: {
    top: 10,
    left: 0,
    bottom: 25,
    right: 0
    // show: true,
    // backgroundColor: 'yellow',
  },
  symbolSize: 60,
  tooltip: {
    trigger: "axis"
  },
  legend: {
    show: false
  },
  xAxis: [
    {
      type: "category",
      data: [
        "11.02",
        "11.09",
        "11.16",
        "11.21",
        "11.28",
        "12.01",
        "12.07",
        "12.14",
        "12.21",
        "12.28"
      ],
      axisTick: {
        show: false
      },
      splitLine: {
        show: false
      },
      axisLabel: {
        color: "#6871b9",
        fontSize: 12,
        interval: 0
      },
      axisLine: {
        lineStyle: {
          color: "#73c6fa"
        }
      }
    }
  ],
  yAxis: [
    {
      type: "value",
      name: "",
      min: 80,
      max: 100,
      interval: 3,
      axisLabel: {
        formatter: "{value}"
      },
      axisTick: {
        show: false
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: "rgba(187, 173, 91, 0.3)"
        }
      },
      axisLabel: {
        color: "#6871b9"
      },
      nameTextStyle: {
        color: "#939bd8"
      },
      axisLine: {
        show: false,
        lineStyle: {
          color: "#73c6fa"
        }
      }
    }
  ],
  series: [
    {
      name: "平均办结时间",
      type: "line",
      data: [92, 96, 94, 99, 92, 96, 94, 99, 90, 100],
      // data: [22.21, 16.21, 45.47, 19.56, 12.11, 16.53, 14.88, 39.36, 50.11, 10.21],
      barWidth: 5,
      itemStyle: {
        normal: {
          color: "#70C286"
        }
      },
      lineStyle: {
        color: "#70C286",
        width: 3,
        type: "solid"
      },
      symbolSize: 8,
      symbol: "circle"
    }
  ]
};
chart2.setOption(option2_1);

const option3 = [
  "chart3.setOption(option3_1)",
  "chart3.setOption(option3_2)",
  "chart3.setOption(option3_3)",
  "chart3.setOption(option3_4)",
  "chart3.setOption(option3_5)"
];
const option2 = [
  "chart2.setOption(option2_1)",
  "chart2.setOption(option2_2)",
  "chart2.setOption(option2_3)",
  "chart2.setOption(option2_4)"
];
//点击按钮，切换选项
function test(option, index) {
  eval(option[index]);
}
$(".top-button").click(function() {
  let index = $(".top-button").index(this);
  $(".top-button")
    .removeClass("linkage-active")
    .eq(index)
    .addClass("linkage-active");
  chart2.clear();
  test(option2, index);
});

$(".bottom-button").click(function() {
  let index = $(".bottom-button").index(this);
  $(".bottom-button")
    .removeClass("active2")
    .eq(index)
    .addClass("active2");
  $(".charts-desc")
    .removeClass("zindex")
    .eq(index)
    .addClass("zindex");
  chart3.clear();
  test(option3, index);
});

//列表滚动
jQuery(".events").slide({
  mainCell: ".events-list",
  autoPlay: true,
  effect: "topMarquee",
  vis: 6,
  interTime: 50
});
jQuery(".content-right").slide({
  mainCell: ".linkage-box",
  autoPlay: true,
  effect: "topMarquee",
  vis: 3,
  interTime: 50
});









// jQuery(".main-bottom").slide({
//   mainCell: ".main-bottom-inner-box",
//   autoPlay: true,
//   scroll: 1,
//   effect: "left",
//   vis: 12,
//   mouseOverStop:false,
//   delayTime: 500,
//   easing: "swing",
//   pnLoop: true
// });

