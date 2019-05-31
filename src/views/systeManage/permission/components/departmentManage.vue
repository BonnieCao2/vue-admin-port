<template>
  <div class="app-container">
    <el-row>
      <el-col :span="4">
        <div class="grid-content bg-purple">
          <el-switch
            v-model="listQuery.cascade"
            @change="cascadeChange"
            active-text="级联显示"
            inactive-text="级联隐藏">
          </el-switch>
          <tree :treeData='treeData' @nodeClick="treeNodeClick"></tree>            
        </div>
      </el-col>
      <!-- 右侧table -->
      <el-col :span="20">
        <div class="grid-content bg-purple-light">
          <div>
            <el-button round @click="btnAdd">新增</el-button>
            <el-button round @click="btnEdit">编辑</el-button>
            <el-button round @click="btnDelete">删除</el-button>

            <div style="display: inline-block">
              <el-form ref="form" :model="form" label-width="120px">
                <el-form-item label="角色名称">
                  <el-input v-model="listQuery.name" @keyup.enter.native="inputSearch"></el-input>
                </el-form-item>
              </el-form>
            </div>
          </div>



          <el-table :data="list" 
            v-loading.body="listLoading" 
            element-loading-text="Loading" 
            border fit highlight-current-row
            @selection-change="handleSelectionChange">

            <el-table-column
              type="selection"
              width="55">
            </el-table-column>

            <el-table-column align="center" label='部门名称' width="150">
              <template slot-scope="scope">
                {{scope.row.name}}
              </template>
            </el-table-column>

            <el-table-column label="排序号" width="150" align="center">
              <template slot-scope="scope">
                {{scope.row.sort_no}}
              </template>
            </el-table-column>

            <el-table-column label="图标" width="150" align="center">
              <template slot-scope="scope">
                <span>{{scope.row.icon_name}}</span>
              </template>
            </el-table-column>

            <el-table-column label="自动展开" align="center">
              <template slot-scope="scope">
                {{scope.row.is_auto_expand}}
              </template>
            </el-table-column>

            <el-table-column label="叶子节点" align="center">
              <template slot-scope="scope">
                {{scope.row.is_leaf}}
              </template>
            </el-table-column>

            <el-table-column label="部门类型" width="150" align="center">
              <template slot-scope="scope">
                {{scope.row.type}}
              </template>
            </el-table-column>

            <el-table-column label="扩展码" width="150" align="center">
              <template slot-scope="scope">
                {{scope.row.biz_code}}
              </template>
            </el-table-column>

            <el-table-column label="备注" width="150" align="center">
              <template slot-scope="scope">
                {{scope.row.remark}}
              </template>
            </el-table-column>

          </el-table>

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
        </div>
      </el-col>
      <!-- 右侧table end -->
    </el-row>
    




    


    <!-- 新增按钮的模态框 -->
    <el-dialog title="新增参数" :visible.sync="isDialogShow">
      <el-form :rules="rules" 
        ref="dataForm" 
        :model="form" 
        label-position="left" 
        label-width="70px" 
        style='width: 400px; margin-left:50px;'>

        <el-form-item label="上级部门" prop="parent_name">
          <el-input v-model="form.parent_name" :disabled="true"></el-input>
        </el-form-item>

        <el-form-item label="部门名称" prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>

        <el-form-item label="热键" prop="hotkey">
          <el-input v-model="form.hotkey"></el-input>
        </el-form-item>

        <el-form-item label="部门类型" prop="selectArr">
          <el-select class="filter-item" v-model="form.type" placeholder="Please select">
            <el-option v-for="(item, index) in  selectArr" 
              :key="index" 
              :label="item.value.dic_desc" 
              :value="item.field">
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="自动展开" prop="is_auto_expand">
          <el-select class="filter-item" v-model="form.is_auto_expand" placeholder="Please select">
            <el-option v-for="(item, index) in  enableSelect" 
              :key="index" 
              :label="item.name" 
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="图标" prop="icon_name">
          <el-input v-model="form.icon_name"></el-input>
        </el-form-item>

        <el-form-item label="扩展码" prop="biz_code">
          <el-input v-model="form.biz_code"></el-input>
        </el-form-item>

        <el-form-item label="排序号" prop="sort_no">
          <el-input v-model="form.sort_no"></el-input>
        </el-form-item>

        <el-form-item label="备注" prop="remark">
          <el-input type="textarea" v-model="form.remark"></el-input>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button type="success" plain @click='confirmBtn'>确认</el-button>
        <el-button type="info" plain @click='closeDialog'>取消</el-button>
      </div>
    </el-dialog>


    <!-- 编辑按钮的模态框 -->
    <el-dialog title="新增参数" :visible.sync="isEditDialogShow">
      <el-form :rules="rules" 
        ref="dataForm" 
        :model="form" 
        label-position="left" 
        label-width="70px" 
        style='width: 400px; margin-left:50px;'>

        <el-form-item label="部门名称" prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>

        <el-form-item label="热键" prop="hotkey">
          <el-input v-model="form.hotkey"></el-input>
        </el-form-item>

        <el-form-item label="部门类型" prop="selectArr">
          <el-select class="filter-item" v-model="form.type" placeholder="Please select">
            <el-option v-for="(item, index) in  selectArr" 
              :key="index" 
              :label="item.value.dic_desc" 
              :value="item.field">
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="自动展开" prop="is_auto_expand">
          <el-select class="filter-item" v-model="form.is_auto_expand" placeholder="Please select">
            <el-option v-for="(item, index) in  enableSelect" 
              :key="index" 
              :label="item.name" 
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="图标" prop="icon_name">
          <el-input v-model="form.icon_name"></el-input>
        </el-form-item>

        <el-form-item label="扩展码" prop="biz_code">
          <el-input v-model="form.biz_code"></el-input>
        </el-form-item>

        <el-form-item label="排序号" prop="sort_no">
          <el-input v-model="form.sort_no"></el-input>
        </el-form-item>

        <el-form-item label="备注" prop="remark">
          <el-input type="textarea" v-model="form.remark"></el-input>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button type="success" plain @click='confirmEditBtn'>确认</el-button>
        <el-button type="info" plain @click='closeDialog'>取消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import Tree from '@/components/Tree'
import { getTreeData, getList, saveOrg, updateOrg, deleteOrg, listValues} from '@/api/systeManage/permission/departmentManage'
import {handleTreeData} from '@/utils/tree'

export default {
  name: 'departmentManage',
  components: {
    Tree
  },
  data() {
    return {
      treeData: [],              //tree的参数
      list: null,
      listLoading: true,
      multipleSelection: [],
      form: {
        parent_id: '',             //他爸的id
        parent_name: '',           //他爸的名字
        name: '',                  //部门名称
        is_auto_expand: '1',       //自动展开
        icon_name: '',             //图标
        biz_code: '',              //扩展码
        sort_no: '',                //排序号
        hotkey: '',                  //热键
        type: '1',                  //部门类型
        remark: ''                  //备注
      },
      selectArr: [],
      enableSelect: [
          {
            name: "是",
            value: '1'
          },
          {
            name: "否",
            value: '0'
          }
        ],       //是否启用select
      //分页
      listQuery: {
        startPage: 1,     //起始页码
        limit: 10,        //每页多少条
        cascade_id: '0',   //我也不知道这玩意儿是干嘛的，反正要传给后台
        name: '',          //模块名称搜索框
        cascade: false,     //级联显示
        id: ''              //显示那一层的id
      },
      total: 0,
      //按钮组
      isDialogShow: false,
      isEditDialogShow: false,
      rules: {}
    }
  },
  async created() {
    await this.getTreeData()
    this.form.parent_id = this.treeData[0].id
    this.form.parent_name = this.treeData[0].text
    await this.fetchData(this.listQuery)

    listValues({
      key: 'org_type',
      type: 'hash'
    }).then(res =>{
      
      res.rows.map(v => {
        v.value = JSON.parse(v.value)
        return v
      })
      this.selectArr = res.rows
      console.log(res, "res")
    })
    
  },
  watch: {

  },
  methods: {
    async fetchData(options) {
      let obj = Object.assign({}, options);
      obj.startPage --
      obj.id = this.form.parent_id
      this.listLoading = true
      
      try {
        let response = await getList(obj)
        this.list = response.rows
        this.listLoading = false
        this.total = response.total
      } catch (error) {
        console.log(error)
        this.listLoading = false
      }

      this.initForm()
    },
    async getTreeData (){
      let res = await getTreeData()
      //对获得的数据做处理
      this.treeData = handleTreeData(res)
      // console.log(res)
    },
    treeNodeClick (data){
      // console.log(data)
      this.listQuery.cascade_id = data.a
      this.form.parent_id = data.id
      this.form.parent_name = data.text
      this.fetchData(this.listQuery)
    },
    cascadeChange (){
      this.fetchData(this.listQuery)
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
    btnAdd (){
      this.isDialogShow = true
      this.initForm()
    },
    btnEdit (){
      let multipleSelection = this.multipleSelection,
          len = multipleSelection.length,
          model = multipleSelection[0]

      if (len > 1){
        this.$message({
            message: '只能选中一个修改',
            type: 'warning',
            duration: 3 * 1000,
            showClose: true
        })
        return
      }
      else if (len === 0){
        this.$message({
            message: '请选中一条',
            type: 'warning',
            duration: 3 * 1000,
            showClose: true
        })
        return
      }

      this.isEditDialogShow = true
      this.form = Object.assign(this.form, model)
      // console.log(model)
    },
    async btnDelete (){
      let multipleSelection = this.multipleSelection,
          len = multipleSelection.length

      if (len === 0) return
      let obj = {
        aos_rows: multipleSelection.map( item =>{
          return item.id
        }).join()
      }
      
      try {
        let response = await this.btnDeleteConfirm()
        await deleteOrg(obj)
        await this.fetchData(this.listQuery)
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
        await this.getTreeData()
      } catch (err) {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });   
      }
    },
    btnDeleteConfirm (){
      return this.$confirm('此操作将永久删除这些文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
    },
    inputSearch (){
      let params = Object.assign({}, this.listQuery)
      this.fetchData(params)
    },
    closeDialog (){
      this.isDialogShow = false
      this.isEditDialogShow = false
    },
    /*新增按钮确认*/
    async confirmBtn (){
      // console.log(this.form)
      
      try {
        let response = await saveOrg(this.form)
        this.fetchData(this.listQuery)
      } catch (err){
        console.log(err)
      }

      this.getTreeData()

      this.closeDialog()
      this.initForm()
    },
    /*编辑按钮确认*/
    async confirmEditBtn (){
      try {
        let response = await updateOrg(this.form)
        this.fetchData(this.listQuery)
      } catch (err){
        console.log(err)
      }

      this.getTreeData()

      this.closeDialog()
      this.initForm()
    },
    initForm (){
      // 初始化
      this.form = Object.assign(this.form, {
        // parent_id: '',             //他爸的id
        // parent_name: '',           //他爸的名字
        name: '',                  //部门名称
        is_auto_expand: '1',       //自动展开
        icon_name: '',             //图标
        biz_code: '',              //扩展码
        sort_no: '',                //排序号
        hotkey: '',                  //热键
        type: '1',                  //部门类型
        remark: ''                  //备注
      })

      this.listQuery.name = ''
    }
  },
  mounted (){

  }
  
}
</script>
