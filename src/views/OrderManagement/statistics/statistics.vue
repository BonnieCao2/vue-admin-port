<template>
  <div><!--Statistics page-->
    <date @dateTimeFormat="handleDateTimeFormat" id="date"></date>
    <timeslot :dateMon="dateMon" id="timeslot"></timeslot>
    <bydate :dateMon="dateMon" id="byDate"></bydate>
  </div>
</template>

<script>
  /* eslint-disable */
  import date from '@/components/DateSelect/date'
  import timeslot from './components/timeslot'
  import bydate from './components/bydate'

  export default {
    name: "statistics",
    components : {
      date,
      timeslot,
      bydate
    },
    data () {
      return {
        dateMon: ''
      }
    },
    mounted () {
    },
    methods: {
      handleDateTimeFormat (val) {
        val = val.substring(0,4) + '-' + val.substring(4,6)
        // console.log(val)
        this.dateMon = val
      }
    }
  }
</script>

<style scoped>
  #date{
    width: 100%;
    height: 60px;
  }
  #timeslot{
    width: 100%;
    height: 400px;
  }
  #byDate{
    width: 100%;
    height: 400px;
  }
</style>
