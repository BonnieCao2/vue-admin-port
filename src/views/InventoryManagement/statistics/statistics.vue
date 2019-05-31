<template>
  <div>
    <!--Statistics page-->
    <date id="date"></date>
    <chartByMonth ></chartByMonth>
    <date2></date2>
    <chartByYear></chartByYear>
  </div>
</template>

<script>
import date from '@/components/DateSelect/date'
import chartByMonth from './components/chartByMonth'
import date2 from '@/components/DateSelect/date'
import chartByYear from './components/chartByYear'

export default {
  name: "statistics",
  components : {
    date,
    chartByMonth,
    chartByYear,
    date2
  }
}
</script>

<style scoped>

</style>
