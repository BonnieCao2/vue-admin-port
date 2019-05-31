<template>
  <div>
    <chart1 :chartData="chartData"></chart1>
  </div>
</template>

<script>
import chart1 from './chart'
export default {
  name: "chart-by-month",
  components: {
    chart1
  },
  data () {
    return {
      chartData:{
        chartId: 'chart1',
        width: '100%',
        height: '800px',
        title: '',
        legend: ['WISHING','REPAIR'],
        dataX: ['APC','APL','AVA','SN','CKS','FA','HZA','HJS','LC','GXG'],
        seriesY: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5],
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
    this.chartData.height = '800px'
    this.chartData.title = ''
    this.chartData.legend = ['WISHING','REPAIR']
    this.chartData.dataX = ['APC','APL','AVA','SN','CKS','FA','HZA','HJS','LC','GXG']
    this.chartData.seriesY = random()
    this.chartData.seriesY2 = random()
  },
}
</script>

<style scoped>

</style>
