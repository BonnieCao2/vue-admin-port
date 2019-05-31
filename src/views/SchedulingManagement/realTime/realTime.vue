<template>
   <div>
     <div class="wrap">
       <exchange5 :chartData="chartData5"></exchange5>
       <exchange6 :chartData="chartData6"></exchange6>
       <exchange7 :chartData="chartData7"></exchange7>
       <exchange8 :chartData="chartData8"></exchange8>
     </div>
     <div class="center">Transfer Job （10）</div>
     <div class="wrap">
       <exchange1 :chartData="chartData1"></exchange1>
       <exchange2 :chartData="chartData2"></exchange2>
       <exchange3 :chartData="chartData3"></exchange3>
       <exchange4 :chartData="chartData4"></exchange4>
     </div>
   </div>

</template>

<script>
import exchange1 from './components/exchange'
import exchange2 from './components/exchange'
import exchange3 from './components/exchange'
import exchange4 from './components/exchange'
import exchange5 from './components/exchange'
import exchange6 from './components/exchange'
import exchange7 from './components/exchange'
import exchange8 from './components/exchange'
export default {
  name: "real-time",
  components: {
    exchange1,
    exchange2,
    exchange3,
    exchange4,
    exchange5,
    exchange6,
    exchange7,
    exchange8,
  },
  data () {
    return {
      // chartData: {}
      chartData1: {
        id: '',
        div: {
          style: {
            width: '',
            height: '',
          }
        },
        data1: [],
        data2: [],
        exchangeId: ''
      },
      chartData2: {
        id: '',
        div: {
          style: {
            width: '',
            height: '',
          }
        },
        data1: [],
        data2: [],
        exchangeId: ''
      },
      chartData3: {
        id: '',
        div: {
          style: {
            width: '',
            height: '',
          }
        },
        data1: [],
        data2: [],
        exchangeId: ''
      },
      chartData4: {
        id: '',
        div: {
          style: {
            width: '',
            height: '',
          }
        },
        data1: [],
        data2: [],
        exchangeId: ''
      },

      chartData5: {
        id: '',
        div: {
          style: {
            width: '',
            height: '',
          }
        },
        data1: [],
        data2: [],
        exchangeId: ''
      },
      chartData6: {
        id: '',
        div: {
          style: {
            width: '',
            height: '',
          }
        },
        data1: [],
        data2: [],
        exchangeId: ''
      },
      chartData7: {
        id: '',
        div: {
          style: {
            width: '',
            height: '',
          }
        },
        data1: [],
        data2: [],
        exchangeId: ''
      },
      chartData8: {
        id: '',
        div: {
          style: {
            width: '',
            height: '',
          }
        },
        data1: [],
        data2: [],
        exchangeId: ''
      }
    }
  },
  mounted () {
    var data1 = [239213, 342101, 0, 124444, 314284];
    var data1Max = Math.max.apply(Math, data1);
    var data2 = [];
    for (var i = 0; i < data1.length; i++) {
      data2.push(data1Max * 1.2)
    }

    this.chartData1 = {
      id: 'progressChart1',
      div: {
        style: {
          width: '100%',
          height: '100%',
        }
      },
      data1: data1,
      data2: data2,
      exchangeId: 'EXCHANGE 1'
    }

    this.chartData2 = {
      id: 'progressChart2',
      div: {
        style: {
          width: '100%',
          height: '100%',
        }
      },
      data1: data1,
      data2: data2,
      exchangeId: 'EXCHANGE 2'
    }

    this.chartData3 = {
      id: 'progressChart3',
      div: {
        style: {
          width: '100%',
          height: '100%',
        }
      },
      data1: data1,
      data2: data2,
      exchangeId: 'EXCHANGE 3'
    }

    this.chartData4 = {
      id: 'progressChart4',
      div: {
        style: {
          width: '100%',
          height: '100%',
        }
      },
      data1: data1,
      data2: data2,
      exchangeId: 'EXCHANGE 4'
    }

    this.chartData5 = {
      id: 'progressChart5',
      div: {
        style: {
          width: '100%',
          height: '100%',
        }
      },
      data1: data1,
      data2: data2,
      exchangeId: 'EXCHANGE 5'
    }

    this.chartData6 = {
      id: 'progressChart6',
      div: {
        style: {
          width: '100%',
          height: '100%',
        }
      },
      data1: data1,
      data2: data2,
      exchangeId: 'EXCHANGE 6'
    }

    this.chartData7 = {
      id: 'progressChart7',
      div: {
        style: {
          width: '100%',
          height: '100%',
        }
      },
      data1: data1,
      data2: data2,
      exchangeId: 'EXCHANGE 7'
    }

    this.chartData8 = {
      id: 'progressChart8',
      div: {
        style: {
          width: '100%',
          height: '100%',
        }
      },
      data1: data1,
      data2: data2,
      exchangeId: 'EXCHANGE 8'
    }

    // console.log(this.chartData,'this.chartData')

  }
}
</script>

<style scoped>
.wrap{
  width: 100%;
  height: 400px;
}
  .wrap>div{
    width: 24%;
    height: 100%;
    margin: 1% 0.5% 0 0.5%;
    float: left;
  }
  .center{
    width: 100%;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: bold;
    background-color: #fff;
  }
</style>
