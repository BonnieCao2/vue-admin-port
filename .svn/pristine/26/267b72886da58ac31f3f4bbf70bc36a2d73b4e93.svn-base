<template>
  <div>
    <block></block>
    <slotBtn @slotStatus="handleSlotStatus"></slotBtn>
    <div v-if="slotStatus.showChartDiv">
      <pieCharts></pieCharts>
      <linChart></linChart>
    </div>
    <div v-if="slotStatus.showSlotDiv">
      <slotBlocks></slotBlocks>
    </div>
  </div>
</template>

<script>
  import block from './components/block'
  import slotBtn from './components/slotBtn'
  import pieCharts from './components/pieCharts'
  import linChart from './components/lineChart'
  import slotBlocks from './components/slotBlocks'

  export default {
    name: "real-time",
    components: {
      block,
      slotBtn,
      pieCharts,
      linChart,
      slotBlocks
    },
    data () {
      return {
        slotStatus: {
          showChartDiv: true,
          showSlotDiv: false
        }
      }
    },
    methods: {
      handleSlotStatus (slotStatus) {
        this.slotStatus= slotStatus
      }
    }
  }
</script>

<style scoped>

</style>
