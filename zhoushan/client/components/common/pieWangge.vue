<template>
  <div class='pie-container' :id='sid' />
</template>
<script>
export default {
  props: {
    sid: {
      type: String,
      default: () => "pieChart"
    },
    lineLength: {
      type: Number,
      default: 1
    },
    source: {
      type: [Array, Object],
      default: () => [
        { name: "刑满释放人员", value: 3445 },
        { name: "社区矫正人员", value: 3313 },
        { name: "重点青少年", value: 3213 },
        { name: "吸毒人员", value: 1213 },
        { name: "艾滋病危险人员", value: 1213 }
      ]
    },
    side: {
      type: [Array, Object],
      default: () => ["40%", "60%"]
    },
    inner: {
      type: [Array, Object],
      default: () => ["0%", "40%"]
    },
    orient: {
      default: 'vertical'
    },
    colorDic: {
      type: Object,
      default: () => {
        return {
          fillColor: [
            "#a51650",
            "#a8208b",
            "#772cbc",
            "#2650b7",
            "#1574b3",
            "#158f85",
            "#b33355"
          ]
        };
      }
    },
    title: {
      type: String,
      default: "网格员分布"
    },
    hasLegend: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      chart: null
    };
  },
  watch: {
    source(newVal) {
      if (this.chart === null) {
        this.initChart();
      }
      this.updateChart(newVal);
    }
  },
  mounted() {
    this.chart = this.initChart();
    this.updateChart(this.source);
    var count = 0;
    app.timeTicket = setInterval(() => {
      this.chart.dispatchAction({
        type: "downplay",
        seriesIndex: 0
      });
      this.chart.dispatchAction({
        type: "highlight",
        seriesIndex: 0,
        dataIndex: count++ % 5
      });
    }, 3000);
  },
  methods: {
    initChart() {
      const el = document.getElementById(this.sid);
      const _chart = this.$echarts.init(el);
      return _chart;
    },
    initData(source) {
      if (Object.prototype.toString.call(source) === "[object Object]") {
        const _rst = [];
        Object.entries(source).forEach(([key, value]) => {
          _rst.push({
            name: key,
            value: value
          });
        });
        return _rst;
      } else if (Object.prototype.toString.call(source) === "[object Array]") {
        return source;
      }
      return source;
    },
    getTextFormat(str) {
      const startIndex = 0;
      const maxStrLen = 8;
      if (str.length > maxStrLen) {
        return `${str.slice(startIndex, maxStrLen)}...`;
      }
      return str;
    },
    updateChart(source) {
      const data = this.initData(source);
      const legend = [];
      const _colorDicLen = 7;
      const _fixedNum = 0;
      source.forEach(ele => legend.push({ name: ele.name }));
      let postion = ["40%", "50%"];
      let radius = {
        outside: this.side,
        inner: this.inner
      };
      let options = {};
      if (this.hasLegend) {
        options["legend"] = {
          type: "scroll",
          show: true,
          zlevel: -1,
          orient: this.orient,
          bottom: 10,
          right: 0,
          data: legend,
          textStyle: {
            color: "#fff"
          },
          pageIconColor: "#fff",
          pageIconInactiveColor: "#0051ff",
          pageTextStyle: {
            color: "#fff"
          }
        };
        // postion = ['40%', '50%']
        // radius = {
        //   outside: ['40%', '60%'],
        //   inner: ['40%', '40%'],
        // }
      }
      options = Object.assign({}, options, {
        tooltip: {
          formatter: "{b}  <br/> {c} ( {d}% )"
        },
        series: [
          {
            type: "pie",
            zlevel: 1,
            avoidLabelOverlap: true,
            minAngle: 30,
            radius: radius.outside,
            center: postion,
            data: data,
            labelLine: {
              normal: {
                length: this.lineLength
              }
            },
            itemStyle: {
              normal: {
                color: params =>
                  this.colorDic.fillColor[params.dataIndex % _colorDicLen],
                borderColor: "#1e2239",
                borderWidth: 1.5
                // },
              },
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            },
            label: {
              normal: {
                formatter: params =>
                  [
                    `{a|${this.getTextFormat(params.data.sour)}} \n ${
                      params.data.value
                    } {b|(${params.percent.toFixed(_fixedNum)}%)}`
                  ].join("\n"),
                rich: {
                  b: {
                    color: "#e1be45",
                    lineHeight: 25,
                    fontSize: 14
                  }
                }
              }
            }
          },
          {
            type: "pie",
            zlevel: 0,
            silent:true,
            // hoverAnimation: false,
            // selectedMode: "single",
            radius: radius.inner,
            center: postion,
            label: {
              normal: {
                show: true,
                position: "center",
                formatter: this.title,
                textStyle: {
                  fontSize: "14",
                  color: "#7fd6ff"
                }
              }
            },
            // labelLine: {
            //   normal: {
            //     show: false
            //   }
            // },
            // itemStyle: {
            //   normal: {
            //     color: "transparent"
            //   }
            // },
            data: [{ value: "", name: "" }]
          }
        ]
      });
      this.chart.setOption(options);
    }
  }
};
</script>
<style lang='scss' scoped>
.pie-container {
  width: 100%;
  height: 100%;
}
</style>

