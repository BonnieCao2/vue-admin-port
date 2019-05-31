<template>
  <div id="btn">
    <el-row>
      <el-button :type="btnTypeBG.realTime" @click="showRealTime">Real-Time</el-button>
      <el-button :type="btnTypeBG.statistics" @click="showStatistics" v-if="false">Statistics</el-button>
      <el-button :type="btnTypeBG.query" @click="showQuery">Query</el-button>
    </el-row>
  </div>
</template>

<script>
  /* eslint-disable */
  export default {
    name: "btn",
    data () {
      return {
        btnStattus : {
          showRealTimeStatus: false,
          showStatisticsStatus: false,
          showQueryStatus: false,
        },
        btnTypeBG : {
          realTime: 'success',
          statistics: 'info',
          query: 'info',
        }
      }
    },
    methods: {
      showRealTime () {
        this.btnStattus.showRealTimeStatus = true
        this.btnStattus.showStatisticsStatus = false
        this.btnStattus.showQueryStatus = false
        this.$emit('btnStattus',this.btnStattus)
        // this.$store.dispatch('changeBtnStattus',this.btnStattus)
        // this.$store.commit('changeBtnStattus',this.btnStattus)

        this.btnTypeBG.realTime = 'success'
        this.btnTypeBG.statistics = 'info'
        this.btnTypeBG.query = 'info'
      },
      showStatistics () {
        this.btnStattus.showRealTimeStatus = false
        this.btnStattus.showStatisticsStatus = true
        this.btnStattus.showQueryStatus = false
        this.$emit('btnStattus',this.btnStattus)
        // this.$store.dispatch('changeBtnStattus',this.btnStattus)
        // this.$store.commit('changeBtnStattus',this.btnStattus)

        this.btnTypeBG.realTime = 'info'
        this.btnTypeBG.statistics = 'success'
        this.btnTypeBG.query = 'info'
      },
      showQuery () {
        this.btnStattus.showRealTimeStatus = false
        this.btnStattus.showStatisticsStatus = false
        this.btnStattus.showQueryStatus = true
        this.$emit('btnStattus',this.btnStattus)
        // this.$store.dispatch('changeBtnStattus',this.btnStattus)
        // this.$store.commit('changeBtnStattus',this.btnStattus)

        this.btnTypeBG.realTime = 'info'
        this.btnTypeBG.statistics = 'info'
        this.btnTypeBG.query = 'success'
      }
    }
  }
</script>

<style scoped>

</style>
