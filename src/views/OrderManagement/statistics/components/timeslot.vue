<template>
    <chart
      :chartData = "chartData"
    >
    </chart>
</template>

<script>
import chart from './chart'
import { getLineChartByType } from '@/api/orderManage/orderManage'

export default {
  name: "timeslot",
  components: {
    chart
  },
  props: {
    dateMon: String
  },
  data () {
    return {
      chartData: {
        width: '',
        height: '',
        title: '',
        legend: [],
        dataX: [],
        seriesData1: [],
        seriesData2: [],
      }
    }
  },
  mounted () {
    // this.width = '100%'
    // this.height = '400px'
    //
    // this.title = 'By Timeslot'
    // this.legend = ['Booking','Enter Yard']
    // this.dataX = ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
    // this.seriesData1 = [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
    // this.seriesData2 = [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]

    // this.$nextTick( () => {
    //   this.init()
    // })
  },
  watch: {
    dateMon (val, oldVal) {
      this.init()
    }
  },
  methods: {
    init () {
      getLineChartByType ({
        "month": this.dateMon,
        "type": "1"
      }).then(res => {
        console.log(res)

        this.chartData = {
          width: '100%',
          height: '400px',
          title: 'By Timeslot',
          legend: ['Booking','Enter Yard'],
          dataX: [],
          seriesData1: [],
          seriesData2: [],
        }

        if(res.content > 0){
          let data = res.content
          let dataXarr = []

          for (let item of data) {
            let dataX = item.point
            let bookingNum = item.bookingNum
            let completeNum = item.completeNum

            dataXarr.push(dataX)
            this.chartData.seriesData1.push(bookingNum)
            this.chartData.seriesData2.push(completeNum)
          }

          this.chartData.dataX = formatDataX(dataXarr)
        }

        function formatDataX(dataXarr) {
          let dataXarrNew = []
          for(let i=0; i<dataXarr.length; i++){
            if((i+1)%2 != 0){
              let oddSortNum = dataXarr[i]
              oddSortNum = oddSortNum +'-'+ oddSortNum.substring(0,3) + '29'
              dataXarrNew.push(oddSortNum)
            }else if((i+1)%2 == 0){
              let evenSortNum = dataXarr[i]
              evenSortNum = evenSortNum +'-'+ evenSortNum.substring(0,3) + '59'
              dataXarrNew.push(evenSortNum)
            }
          }
          return dataXarrNew
        }
      }, err => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>

</style>
