export default {
  data () {
    return {
      myChart: '',
      option: {},
      state: this.$store.state.btnStattus
    }
  },
  mounted () {
    this.$nextTick( _ => {
      this.resize()
    })
  },
  methods: {
    resize () {
      const _this = this
      window.onresize = function () {
        if(_this.myChart){
          // console.log("resize")
          // console.log(_this.$store.state.btnStattus)
          _this.myChart.resize();
        }
      }
    }
  },
  watch: {
    state: function () {
      console.log('watch')
      const _this = this
      window.onresize = function () {
        if(_this.myChart){
          _this.myChart.resize();
        }
      }
    }
  }
}
