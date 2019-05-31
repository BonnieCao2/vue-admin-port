<template>
  <div ref="dom" :id="gaugeData.chartId" :style="gaugeData.style"></div>
</template>

<script>
import echarts from 'echarts'
import resize from '@/utils/resizeEcharts'

export default {
  name: "gauge-chart",
  mixins: [resize],
  props: {
    gaugeData: {
      chartId: String,
      style: {
        width: String,
        height: String
      },
      max: String,
      dataValue: String
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
        tooltip : {
          // formatter: "{a} <br/>{b} : {c}%"
          formatter: "{b} : {c}"
        },
        series: [
          {
            name: 'Throughput',
            type: 'gauge',
            max: 200,
            axisLine: {
              lineStyle: {
                color: [[0.8, '#2a66b4'], [1, '#fd8f34']],
                width: 20,
              }
            },
            detail: {formatter:'{value}'},
            data: [{value: 150, name: 'Throughput'}],
            title: {
              show: true,
              fontSize: '24',
            }
          }
        ]
      };
      this.myChart.setOption(this.option);
      this.myChart.resize()
    }
  }
}
</script>

<style scoped>

</style>
