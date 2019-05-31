<template>
  <div>
    <chart2 :chartData="chartData"></chart2>
  </div>
</template>

<script>
import chart2 from './chart'
export default {
  name: "chart-by-month",
  components: {
    chart2
  },
  data () {
    return {
      chartData:{
        chartId: 'chart2',
        width: '100%',
        height: '400px',
        title: '',
        legend: ['Begining Inventory','Ending Inventory','Output','Input'],
        dataX: ['APC','APL','AVA','SN','CKS','FA','HZA','HJS','LC','GXG'],
        seriesX: [],
        seriesX2: [],
        seriesY: [],
        seriesY2: [],
      }
    }
  },
  mounted () {
    // this.$nextTick( ()=> {
    //
    // })

    function random() {
      let arr = []
      for(let i=0; i<10; i++){
        let num = (Math.random() *100).toFixed(2)
        arr.push(num)
      }
      return arr
    }
    this.chartData.chartId = 'chart2'
    this.chartData.width = '100%'
    this.chartData.height = '400px'
    this.chartData.title = ''
    this.chartData.legend = ['Begining Inventory','Ending Inventory','Output','Input']
    this.chartData.dataX = ['APC','APL','AVA','SN','CKS','FA','HZA','HJS','LC','GXG']
    this.chartData.seriesX = random()
    this.chartData.seriesX2 = random()
    this.chartData.seriesY = random()
    this.chartData.seriesY2 = random()
  },
}
</script>

<style scoped>

</style>
