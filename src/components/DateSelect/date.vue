<template>
<div>
  <div id="wrap">
    <span id="last" @click="lastMon">&lt;</span>
    <input id="date" :class="dateTimeFormat" :value="dateTime"/>
    <span id="next" @click="nextMon">></span>
  </div>
</div>
</template>

<script>
export default {
  name: "date",
  data () {
    return {
      dateTime : '',
      dateTimeFormat: '',
      dateMonthEn : ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec']
    }
  },
  mounted () {
    let dateArr = this.getOneYearPeriod()
    // console.log(dateArr)
    this.dateTimeFormat = dateArr[11]
    this.dateTime =  this.dateMonthEn[parseInt(dateArr[11].substr(4,2))] +'-'+ dateArr[11].substring(0,4)
  },
  watch: {
    dateTime(val, oldVal){
      // console.log("dateTime: "+val);
    },
    dateTimeFormat(val, oldVal){
      // console.log("dateTime: "+val);
      this.$emit('dateTimeFormat',val)
    }
  },
  computed : {

  },
  methods : {
    //获取从当月起往前推12个月的月份
    getOneYearPeriod () {
      var monList = [];
      var d = new Date();
      var currYear = d.getFullYear();
      var currMon = d.getMonth()+1;
      for(var i = 0; i < 12; i++){
        if(currMon < 10){
          monList.unshift("" + currYear + "0" + currMon);
        }else{
          monList.unshift("" + currYear + "" + currMon);
        }
        currMon -= 1; // 获取上一个月份
        if(currMon == 0){
          currYear -= 1;
          currMon = 12;
        }
      }
      return monList;
    },

    lastMon () {
      let curIndex = this.getOneYearPeriod().indexOf(this.dateTimeFormat)
      if(curIndex>0){
        let lastmonth = this.getOneYearPeriod()[curIndex-1]
        this.dateTimeFormat = lastmonth
        this.dateTime =  this.dateMonthEn[parseInt(lastmonth.substr(4,2))-1] +'-'+ lastmonth.substring(0,4)
        // console.log(lastmonth,lastmonth)
        // console.log(this.dateTime);
      }
    },
    nextMon () {
      let curIndex = this.getOneYearPeriod().indexOf(this.dateTimeFormat)
      if(curIndex<11){
        let nextmonth = this.getOneYearPeriod()[curIndex+1]
        this.dateTimeFormat = nextmonth
        this.dateTime =  this.dateMonthEn[parseInt(nextmonth.substr(4,2))-1] +'-'+ nextmonth.substring(0,4)
        // console.log(nextmonth,nextmonth)
        // console.log(this.dateTime);
      }
    }
  }
}
</script>

<style scoped>
#wrap{
  width: 150px;
  height: 40px;
  text-align: center;
  line-height: 20px;
}
  #last,#next{
    display: inline-block;
    width: 20px;
    height: 20px;
    background: #6E747F;
    font-size: 18px;
    color: #fff;
    cursor: pointer;
  }
  #date{
    display: inline-block;
    width: 80px;
    height: 20px;
    color: #333;
    border: 0;
  }

</style>
