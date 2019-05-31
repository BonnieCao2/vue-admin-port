<template>
    <div class="wrap">
      <pieChart1 :chartData="chartData1"></pieChart1>
      <pieChart2 :chartData="chartData2"></pieChart2>
      <pieChart3 :chartData="chartData3"></pieChart3>
      <pieChart4 :chartData="chartData4"></pieChart4>
    </div>
</template>

<script>
import pieChart1 from './pieChart'
import pieChart2 from './pieChart'
import pieChart3 from './pieChart'
import pieChart4 from './pieChart'

export default {
  name: "pie-charts",
  components : {
    pieChart1,
    pieChart2,
    pieChart3,
    pieChart4
  },
  data () {
    return {
      chartData1: {
        chartId: '',
        style: {
          width: '',
          height: ''
        },
        title: '',
        legend: [],
        name: '',
        data: []
      },
      chartData2: {
        chartId: '',
        style: {
          width: '',
          height: ''
        },
        title: '',
        legend: [],
        name: '',
        data: []
      },
      chartData3: {
        chartId: '',
        style: {
          width: '',
          height: ''
        },
        title: '',
        legend: [],
        name: '',
        data: []
      },
      chartData4: {
        chartId: '',
        style: {
          width: '',
          height: ''
        },
        title: '',
        legend: [],
        name: '',
        data: []
      }
    }
  },
  mounted () {
    this.chartData1 = {
      chartId: 'pie1',
      style: {
        width: '100%',
        height: '100%'
      },
      title: 'By container type',
      legend: ['GP','GH','HT','OT','RF','RH','TK','FR'],
      name: 'By container type',
      data: [
        {value:10, name:'GP'},
        {value:5, name:'GH'},
        {value:15, name:'HT'},
        {value:25, name:'OT'},
        {value:20, name:'RF'},
        {value:35, name:'RH'},
        {value:30, name:'TK'},
        {value:40, name:'FR'}
      ]
    }

    this.chartData2 = {
      chartId: 'pie2',
      style: {
        width: '100%',
        height: '100%'
      },
      title: 'By container Grade',
      legend: ['X','G','M','P','B'],
      name: 'By container Grade',
      data: [
        {value:10, name:'X'},
        {value:5, name:'G'},
        {value:15, name:'M'},
        {value:25, name:'P'},
        {value:20, name:'B'}
      ]
    }

    this.chartData3 = {
      chartId: 'pie3',
      style: {
        width: '100%',
        height: '100%'
      },
      title: 'By container Size',
      legend: ['20ft','40ft','45ft'],
      name: 'By container Size',
      data: [
        {value:10, name:'20ft'},
        {value:5, name:'40ft'},
        {value:15, name:'45ft'}
      ]
    }

    this.chartData4 = {
      chartId: 'pie4',
      style: {
        width: '100%',
        height: '100%'
      },
      title: 'By Container Status',
      legend: ['AV','WASHING','DW/DM','TBC'],
      name: 'By Container Status',
      data: [
        {value:10, name:'AV'},
        {value:5, name:'WASHING'},
        {value:15, name:'DW/DM'},
        {value:25, name:'TBC'}
      ]
    }
  }
}
</script>

<style scoped>
  .wrap{
    width: 100%;
    height: 250px;
  }
  .wrap>div{
    width: 25%;
    height: 100%;
    float: left;
  }
</style>
