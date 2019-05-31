<template>
   <div>
     <el-table
       :data="tableData" height="100%"  @sort-change="sortChange"
       border
       style="width: 100%" @row-click="clickTr">
       <el-table-column
         prop="booking_id"
         label="booking_id" v-if="false">
       </el-table-column>
       <el-table-column
         prop="Status"
         label="Status">
       </el-table-column>
       <el-table-column
         prop="BusinessType"
         label="Business type">
       </el-table-column>
       <el-table-column
         prop="Lessor"
         label="Lessor">
       </el-table-column>
       <el-table-column
         prop="TimeslotDate"
         label="Timeslot Date" sortable="custom">
       </el-table-column>
       <el-table-column
         prop="Timeslot"
         label="Timeslot">
       </el-table-column>
       <el-table-column
         prop="HualierCode"
         label="Hualier Code">
       </el-table-column>
       <el-table-column
         prop="VehicleNos"
         label="Vehicle Nos">
       </el-table-column>
       <el-table-column
         prop="ContainerQty"
         label="Container Qty" sortable="custom">
       </el-table-column>
       <el-table-column
         prop="BookingNos"
         label="Booking Nos">
       </el-table-column>
     </el-table>
   </div>
</template>

<script>
export default {
  name: "t1",
  props: {
    tableData: Array
  },
  data() {
    return {
      /*tableData: [{
        Status: 'Executing',
        BusinessType: 'Collection',
        Lessor: 'APL',
        TimeslotDate: '2018/01/28',
        Timeslot: '09:00-09:59',
        HualierCode: 'ACS',
        VehicleNos: 'XE6014D',
        ContainerQty: '2',
        BookingNos: 'APLU0S7041122'
      }]*/
    }
  },
  methods:{
    sortChange(sort){
      // console.log(sort,'sort')
      this.$emit('sortChange',sort)
    },
    clickTr(row, event, column){
      //console.log(row["id"]) 跟下面效果一样
      // console.log(row.booking_id)//获取各行id的值
      this.$emit('clickBookId',row.booking_id)
    }
  }
}
</script>

<style scoped>

</style>
