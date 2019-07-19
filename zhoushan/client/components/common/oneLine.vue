<template>
    <div class="chart" :id="chartId" />
</template>
<script>
export default {
  props: {
    chartId: {
      type: String,
      default: "chartLine111"
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
              color: "#333"
            }
          }
        },
        grid: {
          left: "3%",
          right: "8%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            axisLine: {
              lineStyle: {
                color: "#5b7b80"
              }
            },
            axisLabel: {
              margin: 10,
              textStyle: {
                fontSize: 14,
                color: "#7fb5ff"
              }
            },
            data: [
              "非常满意",
              "满意",
              "一般",
              "不满意",
            ]
          }
        ],
        yAxis: [
          {
            type: "value",
            name: "",
            axisTick: {
              show: true,
              lineStyle: {
                color: "#5b7b80"
              }
            },
            axisLine: {
              lineStyle: {
                color: "#5b7b80"
              }
            },
            axisLabel: {
              margin: 10,
              formatter: '{value} %',
              textStyle: {
                fontSize: 14,
                color: "#7fb5ff"
              }
            },
            splitLine: {
              show: false
            }
          }
        ],
        series: [
          {
            name: "近6个月平均拜访次数",
            type: "line",
            smooth: true,
            symbol: "circle",
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
              normal: {
                width: 1
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
                  offset: 0, color: 'rgba(77,221,234,0.5)', // 0% 处的颜色
                }, {
                  offset: 1, color: 'rgba(116,214,147,0)', // 100% 处的颜色
                }],
                globalCoord: false, // 缺省为 false
              },
                // color: "rgba(77,221,234)",
                shadowColor: "rgba(77,221,234,1)",
                shadowBlur: 10
              }
            },
            itemStyle: {
              normal: {
                color: "rgb(0,136,212)",
                borderColor: "rgba(0,136,212,0.2)",
                borderWidth: 12
              }
            },
            data: [30, 10, 40, 20]
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
