<template>
  <div>
    <div ref="dom" :style="{width: chartData.width,height: chartData.height}"></div>
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
      width: String,
      height: String,
      title: String,
      legend: Array,
      dataX: Array,
      seriesData1: Array,
      seriesData2: Array
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
      let _this = this
      setTimeout(function () {
        _this.initChart ()
      },50)
    })
  },
  watch: {
    // seriesData2(){
    //   let _this = this
    //   setTimeout(function () {
    //     _this.initChart ()
    //   },500)
    // }
  },
  methods: {
    initChart () {
      this.myChart = echarts.init(this.$refs.dom);
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
            data: this.chartData.seriesData1,
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
            type:'line',
            yAxisIndex: 1,
            data: this.chartData.seriesData2,
            label: {
              show: true,
            },
            itemStyle: {
              color: '#FF8F8F'
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
