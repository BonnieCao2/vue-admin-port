<template>
  <div>
    <div ref="dom" id="lineChart1" style="width: 100%; height: 250px;"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
import resize from '@/utils/resizeEcharts'

export default {
  name: "line-chart",
  mixins: [resize],
  props: {

  },
  data () {
    return {
      myChart: '',
      option: {},

      chartData: {
        xAxisData: ['APC','APL','AVA','SN','CKS','FK','HZA','HJS','LC','GXG'],
        series20ftData: [320, 302, 301, 334, 390, 330, 320, 302, 301, 334],
        series40ftData: [120, 132, 101, 134, 90, 230, 210, 101, 134, 90],
        series45ftData: [220, 182, 191, 234, 290, 330, 310, 182, 191, 234],
        seriesLineData: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
      }
    }
  },
  mounted () {
    this.$nextTick( ()=> {
      this.initChart ()
    })
  },
  methods: {
    initChart() {
      this.myChart = echarts.init(document.getElementById(this.$refs.dom.getAttribute('id')));
      this.option = {
        color: ['#32C5E9','#9FE6B8','#FF9F7F','#8378EA'],
        title : {
          text: 'By Lessor (TOP10)',
          //   x:'left'
        },
        tooltip : {
          trigger: 'axis',
          axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          data: ['20ft', '40ft','45ft','Percent']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis:  {
          type: 'category',
          data: this.chartData.xAxisData
        },
        yAxis: [
          {type: 'value'},
          {type: 'value'},
        ],
        series: [
          {
            name: '20ft',
            type: 'bar',
            stack: '总量',
            label: {
              normal: {
                show: true,
                position: 'insideRight'
              }
            },
            data: this.chartData.series20ftData
          },
          {
            name: '40ft',
            type: 'bar',
            stack: '总量',
            label: {
              normal: {
                show: true,
                position: 'insideRight'
              }
            },
            data: this.chartData.series40ftData
          },
          {
            name: '45ft',
            type: 'bar',
            stack: '总量',
            label: {
              normal: {
                show: true,
                position: 'insideRight'
              }
            },
            data: this.chartData.series45ftData
          },
          {
            name:'Percent',
            type:'line',
            yAxisIndex: 1,
            label: {
              normal: {
                show: true,
                position: 'insideRight'
              }
            },
            data: this.chartData.seriesLineData
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
