<template>
  <div>
    <div ref="dom" :id="chartData.chartId" :style="chartData.style"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
import resize from '@/utils/resizeEcharts'

export default {
  name: "pie-chart",
  mixins: [resize],
  props: {
    chartData: {
      chartId: String,
      style: {
        width: String,
        height: String
      },
      title: String,
      legend: Array,
      name: String,
      data: Array
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
        color: ['#37A2DA','#32C5E9','#9FE6B8','#FFDB5C','#FF9F7F','#FB7293','#E7BCF3','#8378EA'],
        title : {
          text: this.chartData.title,
          x:'center'
        },
        tooltip : {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        /*legend: {
          x : 'center',
          y : 'bottom',
          data: this.chartData.legend
        },*/
        calculable : true,
        series : [
          {
            name: this.chartData.name,
            type:'pie',
            radius : [30, 80],
            center : ['50%', '50%'],
            roseType : 'area',
            label: {
              normal: {
                show: true,
                formatter: "{b} : {c} ({d}%)"
              },
              emphasis: {
                show: true
              }
            },
            data: this.chartData.data
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
