<template>
  <div>
    <!--Statistics page-->
    <date id="date"></date>
    <chartByMonth ></chartByMonth>
  </div>
</template>

<script>
import date from '@/components/DateSelect/date'
import chartByMonth from './components/chartByMonth'

export default {
  name: "statistics",
  components : {
    date,
    chartByMonth,
  }
}
</script>

<style scoped>

</style>
