<template>
  <div>
    <div ref="dom" :id="chartData.chartId" :style="{width:chartData.width,height:chartData.height}"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
import resize from '@/utils/resizeEcharts'

export default {
  name: "chart",
  mixins: [resize],
  props: {
    chartData: {
      chartId: String,
      width: String,
      height: String,
      title: String,
      legend: Array,
      dataX: Array,
      seriesX: Array,
      seriesX2: Array,
      seriesY: Array,
      seriesY2: Array,
    }
  },
  data () {
    return {
      myChart: '',
      option: {},
    }
  },
  mounted () {
    this.$nextTick( ()=> {
      this.initChart ()
      // console.log(this.$refs.dom.getAttribute('id'))
    })
  },
  methods: {
    initChart () {
      this.myChart = echarts.init(document.getElementById(this.$refs.dom.getAttribute('id')));
      this.option = {
        title: {
          text: this.chartData.title,
          textStyle: {
            color: '#666'
          },
          left: '10%'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            }
          }
        },
        grid: {
          // top: '22%',
          left: '3%',
          right: '2%',
          bottom: '13%',
          containLabel: true
        },
        legend: {
          data: this.chartData.legend,
          // right: '10%'
        },
        xAxis: [
          {
            type: 'category',
            data: this.chartData.dataX,
            axisPointer: {
              type: 'shadow'
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '',
            axisLabel: {
              formatter: '{value}'
            }
          },
          {
            type: 'value',
            name: '',
            axisLabel: {
              formatter: '{value}'
            }
          }
        ],
        series: [
          {
            name:this.chartData.legend[0],
            type:'bar',
            data: this.chartData.seriesX,
            label: {
              show: true,
              //   position: 'top'
            },
            itemStyle: {
              color: '#89C3F9'
            }
          },
          {
            name:this.chartData.legend[1],
            type:'bar',
            data: this.chartData.seriesX2,
            label: {
              show: true,
              //   position: 'top'
            },
            itemStyle: {
              color: '#FF9696'
            }
          },
          {
            name:this.chartData.legend[2],
            type:'line',
            yAxisIndex: 1,
            data: this.chartData.seriesY,
            label: {
              show: true,
            },
            itemStyle: {
              color: '#97A3FF'
            }
          },
          {
            name:this.chartData.legend[3],
            type:'line',
            yAxisIndex: 1,
            data: this.chartData.seriesY2,
            label: {
              show: true,
            },
            itemStyle: {
              color: '#E791D1'
            }
          }
        ]
      }
      this.myChart.setOption(this.option);
      this.myChart.resize()
    }
  }
}
</script>

<style scoped>

</style>
