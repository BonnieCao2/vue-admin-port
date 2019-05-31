<template>
   <chart :chartData="chartData"></chart>
</template>

<script>
import chart from '../../statistics/components/chart'
export default {
  name: "line-chart",
  components : {
    chart
  },
  data () {
    return {
      chartData:{
        chartId: '',
        width: '',
        height: '',
        background: '',
        title: '',
        legend: [],
        dataX: [],
        seriesY: [],
        seriesY2: [],
      }
    }
  },
  mounted () {
    function random() {
      let arr = []
      for(let i=0; i<10; i++){
        let num = (Math.random() *100).toFixed(2)
        arr.push(num)
      }
      return arr
    }

    this.chartData.chartId = 'chart1'
    this.chartData.width = '100%'
    this.chartData.height = '600px'
    this.chartData.background = '#fff'
    this.chartData.title = ''
    this.chartData.legend = ['WISHING','REPAIR']
    this.chartData.dataX = ['08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00']
    this.chartData.seriesY = random()
    this.chartData.seriesY2 = random()
  },
}
</script>

<style scoped>

</style>
