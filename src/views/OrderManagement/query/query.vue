<template>
  <div><!--Query page-->
    <div class="wrap">
      <datePicker class="datePicker"  @timeSelect="timeSelect"></datePicker>
      <div v-show="false">
        <dropDown1 class="dropDown" @selectedValue="selectedValue1" :dropDownName = "dropDownName1" :options = "options1"></dropDown1>
      </div>
      <dropDown3 class="dropDown" @selectedValue="selectedValue3" :dropDownName = "dropDownName3" :options = "options3"></dropDown3>
      <dropDown2 class="dropDown" @selectedValue="selectedValue2" :dropDownName = "dropDownName2" :options = "options2"></dropDown2>
      <inputBox1 class="input" @inputValue="inputValue1" :inputName = "inputName1" :inputBox = "input1"></inputBox1>
      <inputBox2 class="input" @inputValue="inputValue2" :inputName = "inputName2" :inputBox = "input2"></inputBox2>
      <inputBox3 class="input" @inputValue="inputValue3" :inputName = "inputName3" :inputBox = "input3"></inputBox3>

    </div>
    <div class="wrap">
      <inputBox4 class="input" @inputValue="inputValue4" :inputName = "inputName4" :inputBox = "input4"></inputBox4>
      <div v-show="false">
        <inputBox5 class="input" @inputValue="inputValue5" :inputName = "inputName5" :inputBox = "input5"></inputBox5>
        <dropDown6 class="dropDown" @selectedValue="selectedValue6" :dropDownName = "dropDownName6" :options = "options6"></dropDown6>
        <dropDown7 class="dropDown" @selectedValue="selectedValue7" :dropDownName = "dropDownName7" :options = "options7"></dropDown7>
        <dropDown8 class="dropDown" @selectedValue="selectedValue8" :dropDownName = "dropDownName8" :options = "options8"></dropDown8>
      </div>
      <!--<dropDown9 class="dropDown" :dropDownName = "dropDownName9" :options = "options9"></dropDown9>-->
      <div class="searchBtn"  @click="searchClick()"><searchBtn></searchBtn></div>

    </div>
    <!--<tableBox1></tableBox1>-->
    <div class="tableWrap">
      <t1 id="t1" :tableData="t1data" @sortChange="sortChange" @clickBookId = "handleClickBookId"></t1>
      <t2 id="t2" :tableData="t2data"></t2>
    </div>
    <div>
      <paging :pageData="pageData" @pageSize="handlePageSize" @curPage="handleCurPage"></paging>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import datePicker from '@/components/DateSelect/datePicker'
import dropDown1 from '@/components/DropDown/dropDown'
import dropDown2 from '@/components/DropDown/dropDown'
import dropDown3 from '@/components/DropDown/dropDown'
import dropDown4 from '@/components/DropDown/dropDown'
import dropDown5 from '@/components/DropDown/dropDown'
import inputBox1 from '@/components/Input/inputBox'
import inputBox2 from '@/components/Input/inputBox'
import inputBox3 from '@/components/Input/inputBox'
import inputBox4 from '@/components/Input/inputBox'
import inputBox5 from '@/components/Input/inputBox'
import dropDown6 from '@/components/DropDown/dropDown'
import dropDown7 from '@/components/DropDown/dropDown'
import dropDown8 from '@/components/DropDown/dropDown'
import searchBtn from '@/components/Button/btn'
// import tableBox1 from '@/components/Table/table'
import t1 from './components/t1'
import t2 from './components/t2'
import paging from '@/components/Pagination/Pagination'
import { queryOrder, queryDetailByBookingId } from '@/api/orderManage/orderManage'

export default {
  name: "query",
  components: {
    datePicker,
    dropDown1,
    dropDown2,
    dropDown3,
    dropDown4,
    dropDown5,
    inputBox1,
    inputBox2,
    inputBox3,
    inputBox4,
    inputBox5,
    dropDown6,
    dropDown7,
    dropDown8,
    searchBtn,
    // tableBox1,
    t1,
    t2,
    paging
  },
  data () {
    return {

      dropDownName1: 'Timeslot Date',
      options1: [{
        value: '08:00-08:59',
        label: '08:00-08:59'
      }, {
        value: '09:00-09:59',
        label: '09:00-09:59'
      }],
      dropDownName2: 'Business Type',
      options2: [{
        value: 'Return',
        label: 'Return'
      }, {
        value: 'Collection',
        label: 'Collection'
      }],

      dropDownName3: 'Status',
      options3: [{
        value: 'Pending',
        label: 'Pending'
      }, {
        value: 'Executing ',
        label: 'Executing '
      }, {
        value: 'Executed ',
        label: 'Executed '
      }, {
        value: 'Completed ',
        label: 'Completed '
      }, {
        value: 'Expired ',
        label: 'Expired '
      }],

      inputName1: 'Lessor',
      input1: '',
      inputName2: 'Hualier Code',
      input2: '',
      inputName3: 'Vehicle Nos',
      input3: '',
      inputName4: 'Booking Nos',
      input4: '',
      inputName5: 'Container Nos',
      input5: '',

      dropDownName6: 'Size',
      options6: [{
        value: '20',
        label: '20'
      }, {
        value: '40',
        label: '40'
      }, {
        value: '50',
        label: '50'
      }],
      dropDownName7: 'Type',
      options7: [{
        value: 'GP',
        label: 'GP'
      }, {
        value: 'GH',
        label: 'GH'
      }, {
        value: 'HT',
        label: 'HT'
      }, {
        value: '选项4',
        label: 'OT'
      }, {
        value: '选项5',
        label: 'RF'
      },{
        value: '选项6',
        label: 'RH'
      }, {
        value: '选项7',
        label: 'TK'
      }, {
        value: '选项8',
        label: 'FR'
      }],
      dropDownName8: 'Grade',
      options8: [{
        value: 'X',
        label: 'X'
      }, {
        value: 'F',
        label: 'F'
      }, {
        value: 'G',
        label: 'G'
      }, {
        value: 'M',
        label: 'M'
      }, {
        value: 'P',
        label: 'P'
      },{
        value: 'B',
        label: 'B'
      }],

      // t1data:[
      //   {
      //   Status: 'Executing',
      //   BusinessType: 'Collection',
      //   Lessor: 'APL',
      //   TimeslotDate: '2018/01/28',
      //   Timeslot: '09:00-09:59',
      //   HualierCode: 'ACS',
      //   VehicleNos: 'XE6014D',
      //   ContainerQty: '2',
      //   BookingNos: 'APLU0S7041122'
      // },
      //   {
      //     Status: 'Executing',
      //     BusinessType: 'Collection',
      //     Lessor: 'APL',
      //     TimeslotDate: '2018/06/28',
      //     Timeslot: '09:00-09:59',
      //     HualierCode: 'ACS',
      //     VehicleNos: 'XE6014D',
      //     ContainerQty: '1',
      //     BookingNos: 'APLU0S7041122'
      //   }
      // ],
      // t2data:[{
      //   ContainerNos: 'TCLU1868238',
      //   Size: '20',
      //   Type: 'HC',
      //   Grade: 'X',
      //   Direction: 'Left',
      //   Location: 'Front'
      // },
      //   {
      //     ContainerNos: 'TCLU1868238',
      //     Size: '20',
      //     Type: 'HC',
      //     Grade: 'X',
      //     Direction: 'Left',
      //     Location: 'Front'
      //   }],

      // pageData: {
      //   currentPage: 1,
      //   pageSizes: [10, 20, 30, 50],
      //   pagesize: 20,
      //   total: 80
      // },


      startTime: null,
      endTime: null,
      TimeslotDate: null,
      Status: null,
      BusinessType: null,
      Lessor: null,
      HualierCode: null,
      VehicleNos: null,

      BookingNos: null,
      ContainerNos: null,
      Size: null,
      Type: null,
      Grade: null,

      curPage: null,
      pageSize: null,
      sortField: null,
      sortOrder: null,

      pageData: {
        currentPage: 1,
        pageSizes: [10, 20, 30, 50],
        pagesize: 10,
        total: null
      },

      t1data: [],

      t2data:[]
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.init()
    })
  },
  methods: {
    handlePageSize (val) {
      this.pageSize = val
      console.log('PageSize: '+val)
      this.init()
    },
    handleCurPage (val) {
      this.curPage = val
      console.log('CurPage: '+val)
      this.init()
    },
    sortChange (val){
      if(val.order == 'ascending'){
        val.order = 'asce'
      }else if (val.order == 'descending'){
        val.order = 'desc'
      }
      this.sortField = val.prop
      this.sortOrder = val.order
      console.log(this.sortField,this.sortOrder)

      this.init()
    },

    timeSelect (time) {
      this.startTime = time[0]
      this.endTime = time[1]
      console.log(this.startTime,this.endTime)
    },

    selectedValue1 (val) {
      this.TimeslotDate = val
      console.log(val)
    },
    selectedValue3 (val) {
      this.Status = val
      console.log(val)
    },
    selectedValue2 (val) {
      this.BusinessType = val
      console.log(val)
    },
    selectedValue6 (val) {
      this.Size = val
      console.log(val)
    },
    selectedValue7 (val) {
      this.Type = val
      console.log(val)
    },
    selectedValue8 (val) {
      this.Grade = val
      console.log(val)
    },

    inputValue1 (val) {
      this.Lessor = val
      console.log(val)
    },
    inputValue2 (val) {
      this.HualierCode = val
      console.log(val)
    },
    inputValue3 (val) {
      this.VehicleNos = val
      console.log(val)
    },
    inputValue4 (val) {
      this.BookingNos = val
      console.log(val)
    },
    inputValue5 (val) {
      this.ContainerNos = val
      console.log(val)
    },

    searchClick () {
      this.init()
    },

    init () {
      if(!this.curPage){
        this.curPage = 0
      }
      if(this.curPage){
        this.curPage = this.curPage - 1
      }

      if(!this.pageSize){
        this.pageSize = 10
      }
      queryOrder (
        {
          "booking_start_time": this.startTime,
          "booking_end_time": this.endTime,
          // Status,
          "booking_status": this.Status,
          "booking_type": this.BusinessType,
          // Lessor,
          "customer_code": this.Lessor,
          "hualier_code": this.HualierCode,
          "truck_ID": this.VehicleNos,

          "booking_no": this.BookingNos,

          "sortField": this.sortField,
          "sortOrder": this.sortOrder,

          "limit": this.pageSize,
          "startPage": this.curPage
        }
      ).then(res => {
        this.pageData.total = res.content.total
        let data = res.content.data
        this.t1data = []

        for (let item of data) {
          let obj = {
            booking_id: item.booking_id,
            Status: item.booking_status,
            BusinessType: item.booking_type,
            Lessor: item.customer_code,
            TimeslotDate: timestampToTime(item.booking_start_time),
            Timeslot: '',
            HualierCode: item.hualier_code,
            VehicleNos: item.truck_id,
            ContainerQty: '',
            BookingNos: item.booking_no
          }
          this.t1data.push(obj)
        }

      }, err => {
        console.log(err)
      })

      function timestampToTime(timestamp) {
        let date = new Date(timestamp),//时间戳为10位需*1000，时间戳为13位的话不需乘1000
            Y = date.getFullYear() + '-',
            M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-',
            D = date.getDate() < 10 ? '0'+date.getDate() : date.getDate(),
            h = date.getHours() + ':',
            m = date.getMinutes() + ':',
            s = date.getSeconds();

        // return Y+M+D+h+m+s;
        return Y+M+D;
      }
    },

    handleClickBookId (booking_id) {
      this.initSonTable (booking_id)
    },

    initSonTable (booking_id) {
      queryDetailByBookingId ({"booking_id": booking_id}).then(res => {
        let data = res.content
        this.t2data = []

        for (let item of data) {
          let obj = {
            ContainerNos: item.container_no,
            Size: item.container_size,
            Type: item.container_type,
            Grade: item.container_grade,
            Direction: item.container_direction,
            Location: item.container_location
          }
          this.t2data.push(obj)
        }
      }, err => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>
  .wrap:before,.wrap:after {
    content: "";
    display: block;
    clear: both;
    margin-bottom: 10px;
  }
  .datePicker{
    float: left;
    margin-top: 18px;
    margin-right: 15px;
  }
  .dropDown{
    float: left;
    margin-right: 15px;
    width: 120px;
  }
  .input{
    display: block;
    float: left;
    margin-right: 15px;
    width: 120px;
  }
  .searchBtn{
    float: left;
    margin-top: 18px;
    margin-left: 20px;
  }
  .tableWrap{
    width: 100%;
    height: 700px;
  }
  #t1{
    width: 59%;
    height: 95%;
    float: left;
    margin-right: 1%;
  }
  #t2{
    width: 40%;
    height: 95%;
    float: left;
  }
  #t1>>>.el-table{
    height: 100%;
  }
</style>
