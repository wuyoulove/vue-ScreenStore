<template>
    <div class="chart" :id="chartId" />
</template>
<script>
export default {
  props: {
    chartId: {
      type: String,
      default: "chart",
    },
    source: {
      type: Array,
      default: () => [
        { name: '舟山市', value: 233 },
        { name: '定海区', value: 233 },
        { name: '普陀区', value: 333 },
        { name: '岱山县', value: 233 },
        { name: '嵊泗县', value: 133 },
        { name: '新城管委', value: 233 },
        { name: '普朱管委', value: 233 },
      ],
    },
    barW: {
      default: 20,
    },
    rotX: {
      default: 0,
    }
  },
  data() {
    return {
      chart: null
    };
  },
  mounted() {
    this.chart = this.initCharts()
    this.updatedCharts(this.source)
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
      for( let i = 0;i < source.length;i++){
        maxData.push(maxNum)
      };
      return {xData,yData,maxNum,maxData}
    },
    updatedCharts(source) {
      const info = this.initData(source);
      this.chart.setOption({
        tooltip: {
          show: true,
          formatter: function(params) {
            if (params.seriesName != "f") {
                return params.name+' '+ params.value;
            }
        },
        },
        grid: {
          left: "1%",
          right: "4%",
          bottom: "1%",
          top:15,
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            data: info.xData,
            axisLine: {
              show: true,
              lineStyle: {
                color: "#00c7ff",
                width: 1,
                type: "solid"
              }
            },
            axisTick: {
              show: true
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: "#00c7ff",
                fontSize:11,
              },
              rotate: this.rotX
            }
          },
          {
        type: 'category',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        splitArea: {
            show: false
        },
        splitLine: {
            show: false
        },
        data: info.xData,
    }
        ],
        yAxis: [
          {
            type: "value",
            max: info.maxNum,
            // axisLabel: value,
            axisLine: {
              show: true,
              lineStyle: {
                color: "#00c7ff",
                width: 1,
                type: "solid"
              }
            },
            axisTick: {
              show: true
            },
            splitLine: {
              show: false
            }
          }
        ],
        series: [
          {
            type: "bar",
            data: info.yData,
            barWidth: this.barW, //柱子宽度
            // barGap: 1, //柱子之间间距
            zlevel:2,
            itemStyle: {
              normal: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: 'rgb(102,214,206)' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgb(71,134,202)' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                },
            }
            }
          },
          
        {
            type: 'bar',
            name:'f',
            xAxisIndex: 1,
            zlevel: 1,
            barWidth: this.barW,
            itemStyle: {
                normal: {
                    color: 'rgba(28,79,122,.8)',
                }
            },
            data: info.maxData
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
