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
      background: String,
      height: String,
      title: String,
      legend: Array,
      dataX: Array,
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
        backgroundColor: this.chartData.background,
        color: ['#32C5E9','#FB7293'],
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: this.chartData.legend
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: this.chartData.dataX
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name:'WISHING',
            type:'line',
            stack: '总量',
            label: {
              show: true,
            },
            data: this.chartData.seriesY
          },
          {
            name:'REPAIR',
            type:'line',
            stack: '总量',
            label: {
              show: true,
            },
            data: this.chartData.seriesY2
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
