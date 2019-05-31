<template>
  <div>
    <el-table
      :data="tableData"
      border
      style="width: 100%">
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
        prop="Direction"
        label="Direction">
      </el-table-column>
      <el-table-column
        prop="Location"
        label="Location">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "t2",
  props: {
    tableData: Array
  },
  data() {
    return {
      /*tableData: [{
        ContainerNos: 'TCLU1868238',
        Size: '20',
        Type: 'HC',
        Grade: 'X',
        Direction: 'Left',
        Location: 'Front'
      }]*/
    }
  }
}
</script>

<style scoped>

</style>
