<template>
    <div id="bookSta">
      <div id="pie">
        <span class="grey">Booking Statistics</span>
        <div id="pieDetail">

        </div>
      </div>
      <div id="detail">
        <div class="wordWrap">
          <div class="wordDiv grey">
            <span class="black">11</span><br>
            Total
          </div>
        </div>
        <div class="wordWrap">
          <div class="wordDiv grey">
            <span class="black">11</span><br>
            Pending <span class="red">11</span>
          </div>
          <div class="wordDiv grey">
            <span class="black">11</span><br>
            Completed <span class="red">11</span>
          </div>
        </div>
        <div class="wordWrap">
          <div class="wordDiv grey">
            <span class="black">11</span><br>
            Executing <span class="red">11</span>
          </div>
          <div class="wordDiv grey">
            <span class="black">11</span><br>
            Closed <span class="red">11</span>
          </div>
        </div>
        <div class="wordWrap">
          <div class="wordDiv grey">
            <span class="black">11</span><br>
            Executed <span class="red">11</span>
          </div>
          <div class="wordDiv grey">
            <span class="black">11</span><br>
            Expired <span class="red">11</span>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import echarts from 'echarts'
import resize from '@/utils/resizeEcharts'

export default {
  name: "book-sta",
  mixins: [resize],
  data () {
    return {
      myChart: '',
      option: {}
    }
  },
  mounted () {
    this.initPie ()
  },
  methods: {
    initPie () {
      this.myChart = echarts.init(document.getElementById('pieDetail'));
      this.option = {
        backgroundColor:'#fff',

        tooltip: {
        },

        series: [{
          name: '申请注销',
          type: 'pie',
          radius: ['50%', '72%'],
          center:['50%','50%'],
          color:'#9D97F5',
          label: {
            normal: {
              position: 'center'
            }
          },
          data: [{
            value: 18,
            name: '申请注销数',

            label: {
              normal: {
                formatter: '{d} %',
                textStyle: {
                  fontSize: 18
                }
              }
            },
            tooltip:{
              trigger: 'item',
              formatter: "{a} <br/>计算公式:占比率=({b}/注销总数)*100%<br/> 申请注销数 : {c}"
            }
          }, {
            value: 86,
            name: '其他类型数',
            label: {
              normal: {
                formatter: '\nCompletion Rate',
                textStyle: {
                  color: '#555',
                  fontSize: 13
                }
              }
            },
            itemStyle: {
              normal: {
                color: '#F7F7F7'
              },
              emphasis: {
                color: '#F7F7F7'
              }
            },
          }]
        }]
      };
      this.myChart.setOption(this.option);
    }
  }
}
</script>

<style scoped>
  #pie{
    width: 30%;
    height: 100%;
    float: left;
  }
  #detail{
    width: 70%;
    height: 100%;
    float: right;
  }
  #pie>span{
    width: 100%;
    height: 30px;
    line-height: 40px;
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    display: inline-block;
  }
  #pieDetail{
    width: 100%;
    height: 88%;
    background-color: #fff;
  }
  .wordWrap{
    width: 25%;
    height: 100%;
    float: left;
  }
  .wordDiv{
    width: 100%;
    height: 50%;
    padding: 20% 0 20% 0;
  }
  .red{
    color: #FF7D6C;
  }
  .grey{
    color: #BBB8B5;
  }
  .black{
    color: #333;
  }
</style>
