<template>
    <div class="dadaboxs">
      <dataBox1
        :boxStyle="boxStyle1"
        :boxNum="boxNum1"
        :boxTitle="boxTitle1"
      ></dataBox1>
      <dataBox2
        :boxStyle="boxStyle2"
        :boxNum="boxNum2"
        :boxTitle="boxTitle2"
      ></dataBox2>
      <dataBox3
        :boxStyle="boxStyle3"
        :boxNum="boxNum3"
        :boxTitle="boxTitle3"
      ></dataBox3>
      <dataBox4
        :boxStyle="boxStyle4"
        :boxNum="boxNum4"
        :boxTitle="boxTitle4"
      ></dataBox4>
      <dataBox5
        :boxStyle="boxStyle5"
        :boxNum="boxNum5"
        :boxTitle="boxTitle5"
      ></dataBox5>
      <dataBox6
        :boxStyle="boxStyle6"
        :boxNum="boxNum6"
        :boxTitle="boxTitle6"
      ></dataBox6>
    </div>
</template>

<script>
import dataBox1 from './dataBox'
import dataBox2 from './dataBox'
import dataBox3 from './dataBox'
import dataBox4 from './dataBox'
import dataBox5 from './dataBox'
import dataBox6 from './dataBox'

export default {
  name: "data-boxs",
  components: {
    dataBox1,
    dataBox2,
    dataBox3,
    dataBox4,
    dataBox5,
    dataBox6,
  },
  data () {
    return {
      boxStyle1: {
        border: ''
      },
      boxNum1: {
        id: '',
        text: '',
        style: {
          background: '',
        },
        span: {
          display: ''
        }
      },
      boxTitle1: {
        id: '',
        text: '',
        style: {
          color: ''
        }
      },

      boxStyle2: {
        border: ''
      },
      boxNum2: {
        id: '',
        text: '',
        style: {
          background: '',
        },
        span: {
          display: ''
        }
      },
      boxTitle2: {
        id: '',
        text: '',
        style: {
          color: ''
        }
      },

      boxStyle3: {
        border: ''
      },
      boxNum3: {
        id: '',
        text: '',
        style: {
          background: '',
        },
        span: {
          display: ''
        }
      },
      boxTitle3: {
        id: '',
        text: '',
        style: {
          color: ''
        }
      },

      boxStyle4: {
        border: ''
      },
      boxNum4: {
        id: '',
        text: '',
        style: {
          background: '',
        },
        span: {
          display: ''
        }
      },
      boxTitle4: {
        id: '',
        text: '',
        style: {
          color: ''
        }
      },

      boxStyle5: {
        border: ''
      },
      boxNum5: {
        id: '',
        text: '',
        style: {
          background: '',
        },
        span: {
          display: ''
        }
      },
      boxTitle5: {
        id: '',
        text: '',
        style: {
          color: ''
        }
      },

      boxStyle6: {
        border: ''
      },
      boxNum6: {
        id: '',
        text: '',
        style: {
          background: '',
        },
        span: {
          display: ''
        }
      },
      boxTitle6: {
        id: '',
        text: '',
        style: {
          color: ''
        }
      },
    }
  },
  mounted () {
    this.boxStyle1 = {
      border: '1px solid #7987F2'
    }
    this.boxNum1 = {
      id: 'boxNum1',
      text: '200',
      style: {
        background: '#7987F2',
      },
      span: {
        display: 'none'
      }
    }
    this.boxTitle1 = {
      id: 'boxTitle1',
      text: 'Washing Job',
      style: {
        color: '#7987F2'
      }
    }

    this.boxStyle2 = {
      border: '1px solid #BD8DF0'
    }
    this.boxNum2 = {
      id: 'boxNum2',
      text: '200',
      style: {
        background: '#BD8DF0',
      },
      span: {
        display: 'none'
      }
    }
    this.boxTitle2 = {
      id: 'boxTitle2',
      text: 'Washing Completed Job',
      style: {
        color: '#BD8DF0'
      }
    }

    this.boxStyle3 = {
      border: '1px solid #89C3F8'
    }
    this.boxNum3 = {
      id: 'boxNum3',
      text: '200',
      style: {
        background: '#89C3F8',
      }
    }
    this.boxTitle3 = {
      id: 'boxTitle3',
      text: 'Washing Efficiency',
      style: {
        color: '#89C3F8'
      }
    }

    this.boxStyle4 = {
      border: '1px solid #FFA897'
    }
    this.boxNum4 = {
      id: 'boxNum2',
      text: '200',
      style: {
        background: '#FFA897',
      },
      span: {
        display: 'none'
      }
    }
    this.boxTitle4 = {
      id: 'boxTitle2',
      text: 'Repair Job',
      style: {
        color: '#FFA897'
      }
    }

    this.boxStyle5 = {
      border: '1px solid #FFBC82'
    }
    this.boxNum5 = {
      id: 'boxNum3',
      text: '200',
      style: {
        background: '#FFBC82',
      },
      span: {
        display: 'none'
      }
    }
    this.boxTitle5 = {
      id: 'boxTitle3',
      text: 'Repair Completed Job',
      style: {
        color: '#FFBC82'
      }
    }

    this.boxStyle6 = {
      border: '1px solid #E791D1'
    }
    this.boxNum6 = {
      id: 'boxNum2',
      text: '200',
      style: {
        background: '#E791D1',
      }
    }
    this.boxTitle6 = {
      id: 'boxTitle2',
      text: 'Repair Efficiency',
      style: {
        color: '#E791D1'
      }
    }
  }
}
</script>

<style scoped>
.dadaboxs>div{
  width: 16%;
  height: 100%;
  float: left;
  margin-right: 0.33%;
  margin-left: 0.33%;
}
</style>
