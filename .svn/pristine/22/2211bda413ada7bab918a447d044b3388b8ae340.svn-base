<template>
  <div class="app-container">
        
    <el-form ref="form" :model="form" label-width="120px" label-position="top" :inline="true">
      <el-form-item>
        <el-button type="primary" plain @click="addBtn">新增</el-button>
      </el-form-item>
    </el-form>

    <el-row :gutter="40">
      <el-col :span="12">
        <el-table :data="list" 
            v-loading.body="listLoading" 
            element-loading-text="Loading" 
            border fit highlight-current-row
            :row-style="rowStyle"
            @row-click="rowClick"
            @selection-change="handleSelectionChange">

          <!-- <el-table-column
            type="selection"
            width="55">
          </el-table-column> -->

          <el-table-column align="center" label='储存单元'>
            <template slot-scope="scope">
              {{scope.row.unit_name}}
            </template>
          </el-table-column>

          <el-table-column label="站台（南）" align="center">
            <template slot-scope="scope">
              {{scope.row.area_name_s}}
            </template>
          </el-table-column>

          <el-table-column align="center" label="站台（北）">
            <template slot-scope="scope">
              {{scope.row.area_name_n}}
            </template>
          </el-table-column>
        </el-table>
      </el-col>

      <!-- block -->
      <el-col :span="12">
        <el-table :data="blockList" 
            v-loading.body="blockListLoading" 
            element-loading-text="Loading" 
            border fit highlight-current-row>

          <el-table-column align="center" label='储存区'>
            <template slot-scope="scope">
              {{scope.row.block_name}}
            </template>
          </el-table-column>

          <el-table-column label="箱位" align="center">
            <template slot-scope="scope">
              {{scope.row.slot_num}}
            </template>
          </el-table-column>

          <el-table-column align="center" label="列">
            <template slot-scope="scope">
              {{scope.row.row_num}}
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>


    

    <!-- 分页 -->
    <div class="pagination-container">
      <el-pagination background 
        @size-change="handleSizeChange" 
        @current-change="handleCurrentChange" 
        :current-page="listQuery.startPage" 
        :page-sizes="[10,20,30, 50]" 
        :page-size="listQuery.limit" 
        layout="total, sizes, prev, pager, next, jumper" 
        :total="total">
      </el-pagination>
    </div>



    <el-dialog title="新增" :visible.sync="savePositionDialogShow">
       <el-form ref="form" :model="form" label-width="120px" label-position="top" :inline="true">

        <el-form-item label="单元名">
          <el-input v-model="form.unit_name"></el-input>
        </el-form-item>
        <el-form-item label="站台（北）">
          <el-input v-model="form.area_name_n"></el-input>
        </el-form-item>
        <el-form-item label="站台（南）">
          <el-input v-model="form.area_name_s"></el-input>
        </el-form-item>
      </el-form>

      <el-form ref="form" :model="form" label-width="120px" label-position="top" :inline="true">
        <el-form-item>
          <el-button icon="el-icon-plus" type="success" plain @click="addBlock">添加</el-button>
        </el-form-item>
      </el-form>
      <!-- 模态框内可编辑table -->
      <el-table :data="form.block" 
            v-loading.body="newBlockListLoading" 
            element-loading-text="Loading" 
            border fit highlight-current-row>

          <el-table-column label="储存区名">
            <template slot-scope="scope">
              <template v-if="scope.row.edit">
                <el-input size="small" v-model="scope.row.block_name"></el-input>
              </template>
              <span v-else>{{ scope.row.block_name }}</span>
            </template>
          </el-table-column>

          <el-table-column label="列" align="center">
            <template slot-scope="scope">
              <template v-if="scope.row.edit">
                <el-input size="small" v-model="scope.row.row_num"></el-input>
              </template>
              <span v-else>{{ scope.row.row_num }}</span>
            </template>
          </el-table-column>

          <el-table-column align="center" label="箱位区间" min-width="300px">
            <template slot-scope="scope">
              <template v-if="scope.row.edit">
                <el-input size="small" class="table-input" v-model="scope.row.slot_start_no" placeholder="开始"></el-input>
                -
                <el-input size="small" class="table-input" v-model="scope.row.slot_end_no" placeholder="结束"></el-input>
              </template>
              <span v-else>{{ `${scope.row.slot_start_no + '-' + scope.row.slot_end_no}` }}</span>
            </template>
          </el-table-column>

          <el-table-column align="center" label="操作" width="100px">
            <template slot-scope="scope">
              <el-button v-if="scope.row.edit" type="success" @click="confirmEdit(scope.row)" plain size="small" icon="el-icon-circle-check-outline">Ok</el-button>
              <el-button v-else type="primary" @click='openEdit(scope.row)' size="small" plain icon="el-icon-edit">Edit</el-button>
            </template>
          </el-table-column>
        </el-table>

      <div slot="footer" class="dialog-footer">
        <el-button type="success" plain @click='addUnit'>确认</el-button>
        <el-button type="info" plain @click='cancel'>取消</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
import * as API  from '@/api/inventoryManage/boxPositionRelation'

export default {
  name: 'timeInventorySearch',
  data() {
    return {
      form: {
        unit_name: '',      //unit 名字
        area_name_n: '',    //北
        area_name_s: '',    //南
        block: [{
          block_name: '',
          row_num: '',        //列
          slot_start_no: '',  //箱位开始
          slot_end_no: '',    //箱位结束
          edit: true
        }]
      },
      //表格
      list: [],
      multipleSelection: [],
      listLoading: false,
      //分页
      listQuery: {
        startPage: 1,     //起始页码
        limit: 10,        //每页多少条
      },
      total: 0,
      blockList: [],
      blockListLoading: false,
      newBlockListLoading: false,
      orderModel: {},          //保存被点开dialog的那一行数据
      //模态框
      savePositionDialogShow: false,
    }
  },
  filters: {
  },
  watch: {
  },
  created() {
    this.fetchData(this.listQuery)
  },
  methods: {
    async fetchData(options) {
      let obj = Object.assign({}, options);
      obj.startPage --
      this.listLoading = true
      
      try {
        let response = await API.getList(obj)
        this.list = response.rows
        this.listLoading = false
        this.total = response.total
      } catch (error) {
        console.log(error)
        this.listLoading = false
      }
      this.initForm()
    },
    addUnit (){
      API.savePosition(this.form).then( _ =>{
        this.cancel()
      })
    },
    addBlock (){
      this.form.block.push({
          block_name: '',
          row_num: '',        //列
          slot_start_no: '',  //箱位开始
          slot_end_no: '',    //箱位结束
          edit: true
        })
    },
    openEdit (row){
      row.edit = true
    },
    confirmEdit (row){
      // slot_start_no: '',  //箱位开始
      //     slot_end_no: '',    //箱位结束
      if (row.slot_start_no >= row.slot_end_no){
        this.$message({
          message: '箱位开始必须小于箱位结束',
          type: 'warning'
        })
        return
      }
      row.edit = false
    },
    cancel (){
      this.savePositionDialogShow = false
      this.initForm()
    },
    addBtn (){
      this.savePositionDialogShow = true
      this.initForm()
    },
    handleConfirm (msg, title = '提示'){
      return this.$confirm(msg, title, {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
    },
    rowClick (row, event, column){
      console.log(row)
      API.queryBlockByUnit({unit_id: row.unit_id}).then( res => {
        this.blockList = res
      })
    },
     /**选中变化事件**/
    handleSelectionChange (val){
      this.multipleSelection = val;
      // console.log(val)
    },
    handleSizeChange (val){
      this.listQuery.limit = val
      this.fetchData(this.listQuery)
    },
    handleCurrentChange (val){
      this.listQuery.startPage = val
      this.fetchData(this.listQuery)
    },
    rowStyle (){
      return {
        cursor: 'pointer'
      }
    },
    initForm (){
      // 初始化
      this.form = Object.assign(this.form, {
        unit_name: '',      //unit 名字
        area_name_n: '',    //北
        area_name_s: '',    //南
        block: [{
          block_name: '',
          row_num: '',        //列
          slot_start_no: '',  //箱位开始
          slot_end_no: '',    //箱位结束
          edit: true
        }]
      })
    }
  }
}
</script>

<style scoped>
.table-input{
  display: inline-block;
  width: 40%;
}
</style>

