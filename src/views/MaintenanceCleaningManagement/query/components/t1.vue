<template>
   <div>
     <el-table
       :data="tableData"
       border
       style="width: 100%">
       <el-table-column
         prop="JobType"
         label="Job Type">
       </el-table-column>
       <el-table-column
         prop="Status"
         label="Status">
       </el-table-column>
       <el-table-column
         prop="BeiningTime"
         label="Beining Time">
       </el-table-column>
       <el-table-column
         prop="EndingTime"
         label="Ending Time">
       </el-table-column>
       <el-table-column
         prop="OperationTime"
         label="Operation Time">
       </el-table-column>
       <el-table-column
         prop="ContainerNos"
         label="Container Nos">
       </el-table-column>
       <el-table-column
         prop="Size"
         label="Size">
       </el-table-column>
       <el-table-column
         prop="Type"
         label="Type">
       </el-table-column>
       <el-table-column
         prop="Grade"
         label="Grade">
       </el-table-column>
       <el-table-column
         prop="Lessor"
         label="Lessor">
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
  }
}
</script>

<style scoped>

</style>
