<template>
   <div>
     <el-table
       :data="tableData"
       border
       style="width: 100%">
       <el-table-column
         prop="Status"
         label="Status">
       </el-table-column>
       <el-table-column
         prop="Exchange"
         label="Exchange">
       </el-table-column>
       <el-table-column
         prop="BusinessType"
         label="BusinessType">
       </el-table-column>
       <el-table-column
         prop="VehicleNos"
         label="Vehicle Nos">
       </el-table-column>
       <el-table-column
         prop="ContainerNos"
         label="Container Nos">
       </el-table-column>
       <el-table-column
         prop="ContainerStatus"
         label="Container Status">
       </el-table-column>
       <el-table-column
         prop="Roadway"
         label="Roadway">
       </el-table-column>
       <el-table-column
         prop="OperationTime"
         label="Operation Time">
       </el-table-column>
       <el-table-column
         prop="BeginingTime"
         label="Begining Time">
       </el-table-column>
       <el-table-column
         prop="Unit"
         label="Unit">
       </el-table-column>
       <el-table-column
         prop="ContainerStatus"
         label="Container Status">
       </el-table-column>
       <el-table-column
         prop="Block"
         label="Block">
       </el-table-column>
       <el-table-column
         prop="Slot"
         label="Slot">
       </el-table-column>
       <el-table-column
         prop="Row"
         label="Row">
       </el-table-column>
       <el-table-column
         prop="Tier"
         label="Tier">
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
