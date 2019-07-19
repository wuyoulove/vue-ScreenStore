<template>
    <div class="chart" :id="chartId" />
</template>
<script>
export default {
  props: {
    chartId: {
      type: String,
      default: "chart"
    },
    source: {
      type: Array,
      default: () => [
        { name: "舟山市", value: 233 },
        { name: "定海区", value: 233 },
        { name: "普陀区", value: 333 },
        { name: "岱山县", value: 233 },
        { name: "嵊泗县", value: 133 },
        { name: "新城管委", value: 233 },
        { name: "普朱管委", value: 233 }
      ]
    }
  },
  data() {
    return {
      chart: null
    };
  },
  mounted() {
    this.chart = this.initCharts();
    this.updatedCharts(this.source);
  },
  methods: {
    initCharts() {
      const el = document.getElementById(this.chartId);
      const charts = this.$echarts.init(el);
      return charts;
    },
    initData(source) {
      const xData = [];
      const yData = [];
      const maxData = [];
      source.forEach(element => {
        xData.push(element.name);
        yData.push(element.value);
      });
      const maxNum = Math.max(...yData);
      for (let i = 0; i < source.length; i++) {
        maxData.push(maxNum);
      }
      return { xData, yData, maxNum, maxData };
    },
    updatedCharts(source) {
      const info = this.initData(source);
      this.chart.setOption({
        tooltip: {
          trigger: "axis",
          axisPointer: {
            lineStyle: {
              color: "#57617B"
            }
          }
        },
        legend: {
          icon: "rect",
          itemWidth: 14,
          itemHeight: 5,
          itemGap: 13,
          data: ["低", "中", "高"],
          right: "4%",
          textStyle: {
            fontSize: 12,
            color: "#F1F1F3"
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          top: 20,
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            axisLine: {
              lineStyle: {
                color: "#57617B"
              }
            },
            data: [
              "13:00",
              "13:05",
              "13:10",
              "13:15",
              "13:20",
              "13:25",
              "13:30",
              "13:35",
              "13:40",
              "13:45",
              "13:50",
              "13:55"
            ]
          }
        ],
        yAxis: [
          {
            type: "value",
            axisTick: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: "#57617B"
              }
            },
            axisLabel: {
              margin: 10,
              textStyle: {
                fontSize: 14
              }
            },
            splitLine: {
              show: false,
              lineStyle: {
                color: "#57617B"
              }
            }
          }
        ],
        series: [
          {
            name: "低",
            type: "line",
            smooth: true,
            symbol: "circle",
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
              normal: {
                width: 3,
                color: "rgb(0,255,255)",
              }
            },
            areaStyle: {
              normal: {
                color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0, color: 'rgb(0,255,255)', // 0% 处的颜色
                }, {
                  offset: 1, color: 'rgba(8,47,162,.3)', // 100% 处的颜色
                }],
                globalCoord: false, // 缺省为 false
              },
                shadowColor: "rgba(0, 0, 0, 0.1)",
                shadowBlur: 10
              }
            },
            itemStyle: {
              normal: {
                color: "rgb(0,255,255)",
                borderColor: "rgba(137,189,2,0.27)",
                borderWidth: 12
              }
            },
            data: [220, 182, 191, 134, 150, 120, 110, 125, 145, 122, 165, 122]
          },
          {
            name: "中",
            type: "line",
            smooth: true,
            symbol: "circle",
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
              normal: {
                width: 3,
                color:'rgb(236,182,135)'
              }
            },
            areaStyle: {
              normal: {
                color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0, color: 'rgb(236,182,135)', // 0% 处的颜色
                }, {
                  offset: 1, color: 'rgba(8,47,162,.3)', // 100% 处的颜色
                }],
                globalCoord: false, // 缺省为 false
              },
                shadowColor: "rgba(0, 0, 0, 0.1)",
                shadowBlur: 10
              }
            },
            itemStyle: {
              normal: {
                color: "rgb(236,182,135)",
                borderColor: "rgba(0,136,212,0.2)",
                borderWidth: 12
              }
            },
            data: [120, 110, 125, 145, 122, 165, 122, 220, 182, 191, 134, 150]
          },
          {
            name: "高",
            type: "line",
            smooth: true,
            symbol: "circle",
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
              normal: {
                width: 3,
                color: 'rgb(209,28,125)',
              }
            },
            areaStyle: {
              normal: {
                color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0, color: 'rgb(209,28,125)', // 0% 处的颜色
                }, {
                  offset: 1, color: 'rgba(8,47,162,.3)', // 100% 处的颜色
                }],
                globalCoord: false, // 缺省为 false
              },
                shadowColor: "rgba(0, 0, 0, 0.1)",
                shadowBlur: 10
              }
            },
            itemStyle: {
              normal: {
                color: "rgb(209,28,125)",
                borderColor: "rgba(219,50,51,0.2)",
                borderWidth: 12
              }
            },
            data: [220, 182, 125, 145, 122, 191, 134, 150, 120, 110, 165, 122]
          }
        ]
      });
    }
  }
};
</script>
<style scoped>
.chart {
  width: 100%;
  height: 100%;
}
</style>
