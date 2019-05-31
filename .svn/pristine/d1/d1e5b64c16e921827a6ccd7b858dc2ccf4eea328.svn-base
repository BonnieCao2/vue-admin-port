<template>
    <div>
      <template>
        <el-table
          :data="tableData"
          border
          style="width: 100%" >
          <div v-for="item of tableHeaderData">
            <el-table-column
              prop="item.prop"
              label="item.label"
              width="180">
            </el-table-column>
          </div>

         <!-- <el-table-column
            prop="date"
            label="日期"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址">
          </el-table-column>-->
        </el-table>
      </template>
    </div>
</template>

<script>
    export default {
      name: "table",

      data() {
        return {
          tableHeaderData: [
            {prop: "date",label: "日期"},
            {prop: "name",label: "姓名"},
            {prop: "address",label: "地址"},
          ],
          tableData: []
        }
      },
      mounted () {
        this.$nextTick( ()=> {
          this.tableData = [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
        })


      }
    }
</script>

<style scoped>

</style>
