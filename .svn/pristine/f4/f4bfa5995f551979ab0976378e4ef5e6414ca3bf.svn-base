<template>
  <div>
    <div id="lineEchart2" ref="lineEchart2"></div>
  </div>

</template>

<script>
import echarts from 'echarts'
import resize from '@/utils/resizeEcharts'

export default {
    name: "line",
    mixins: [resize],
    data () {
      return {
        myChart: '',
        option: {}
      }
    },
    mounted () {
      this.$nextTick( _ => {
        this.initLine2 ()
      })

    },
    methods: {
      initLine2 () {
        // this.myChart = echarts.init(document.getElementById('lineEchart2'));
        this.myChart = echarts.init(this.$refs.lineEchart2);

        var xAxisData = [];
        var data1 = [];
        var data2 = [];

        for (var i = 0; i < 18; i++) {
          xAxisData.push('Class' + i);
          data1.push((-Math.random() * 2).toFixed(2));
          data2.push(-Math.random().toFixed(2));
        }

        var itemStyle = {
          normal: {
            color: '#333'
          }
        };

        this.option = {
          backgroundColor: '#fff',
          color: ['#00D661','#D9D9D9'],
          legend: {
            data: ['bar', 'bar2', 'bar3', 'bar4'],
            align: 'left',
            left: 10
          },
          tooltip: {},
          xAxis: {
            data: xAxisData,
            // name: 'X Axis',
            silent: false,
            axisLine: {onZero: true},
            splitLine: {show: false},
            splitArea: {show: false},
            axisLabel:{
              interval: 0  ,
              // rotate: '45',
            }
          },
          yAxis: {
            inverse: true,
            splitArea: {show: false}
          },
          grid: {
            left: '3%',
            right: '2%',
            bottom: '11%',
            containLabel: true
          },
          /*visualMap: {
              type: 'continuous',
              dimension: 1,
              text: ['High', 'Low'],
              inverse: true,
              itemHeight: 200,
              calculable: true,
              min: -2,
              max: 6,
              top: 60,
              left: 10,
              inRange: {
                  colorLightness: [0.4, 0.8]
              },
              outOfRange: {
                  color: '#bbb'
              },
              controller: {
                  inRange: {
                      color: '#2f4554'
                  }
              }
          },*/
          dataZoom: [
            {
              type: 'slider',
              show: true,
              xAxisIndex: [0],
              start: 9,
              end: 35
            }
          ],
          series: [
            {
              name: 'bar',
              type: 'bar',
              stack: 'one',
              itemStyle: {
                normal: {
                  color: '#66E1E3'
                },
                emphasis: {
                  barBorderWidth: 1,
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowOffsetY: 0,
                  shadowColor: 'rgba(0,0,0,0.5)'
                }
              },
              data: data1
            },
            {
              name: 'bar2',
              type: 'bar',
              stack: 'one',
              itemStyle: itemStyle,
              itemStyle: {
                normal: {
                  color: '#D9D9D9'
                },
                emphasis: {
                  barBorderWidth: 1,
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowOffsetY: 0,
                  shadowColor: 'rgba(0,0,0,0.5)'
                }
              },
              data: data2
            }
          ]
        };

        this.myChart.setOption(this.option);

      }
    }
}

</script>

<style scoped>
#lineEchart2{
  width: 100%;
  height: 100%;
}
</style>
