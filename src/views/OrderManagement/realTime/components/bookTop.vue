<template>
  <div id="bookTop">
    <div id="lineEchart">

    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
import resize from '@/utils/resizeEcharts'

export default {
  name: "book-top",
  mixins: [resize],
  data () {
    return {
      myChart: '',
      option: {}
    }
  },
  mounted () {
    this.initLine ()
  },
  methods: {
    initLine () {
      this.myChart = echarts.init(document.getElementById('lineEchart'));
      this.option = {
        backgroundColor:'#fff',
        title: {
          text: 'Booking Statistics by Lessor (TOP10)',
          textStyle: {
            color: '#BBB8B5'
          }
        },
        color: ['#89C3F9'],
        tooltip : {
          trigger: 'axis',
          axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '2%',
          bottom: '5%',
          containLabel: true
        },
        xAxis : [
          {
            type : 'category',
            data : ['APC', 'APL', 'AVA', 'SN', 'OKS', 'FA', 'HZA', 'HJS', 'LC', 'GXG'],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis : [
          {
            type : 'value',
            show: true,
          }
        ],
        series : [
          {
            // name:'直接访问',
            type:'bar',
            barWidth: '60%',
            data:[600, 520, 400, 334, 390, 330, 220,133,111,55],
            label: {
              show: true,
              position: 'top'
            }
          }
        ]
      };
      this.myChart.setOption(this.option);

      // axios({
      //   method: 'post',
      //   url: 'https://easy-mock.com/mock/5b2b67f075a11308f6accae5/oderTopByStatistics',
      //   // data: {
      //   // }
      // }).then(function (response) {
      //   console.log(response);
      // }).catch(function (error) {
      //   console.log(error);
      // });
    },


  }
}
</script>

<style scoped>
  #lineEchart{
    width: 100%;
    height: 100%;
  }
</style>
