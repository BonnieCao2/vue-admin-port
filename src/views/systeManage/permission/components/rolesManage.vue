<template>
  <div class="app-container">
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

      <el-table-column align="center" label='角色名称' width="150">
        <template slot-scope="scope">
          {{scope.row.name}}
        </template>
      </el-table-column>

      <el-table-column label="是否启用" width="150" align="center">
        <template slot-scope="scope">
          {{scope.row.is_enable}}
        </template>
      </el-table-column>

      <el-table-column align="center" label="角色类型" width="150">
        <template slot-scope="scope">
          {{scope.row.type}}
        </template>
      </el-table-column>

      <el-table-column label="扩展码" width="150" align="center">
        <template slot-scope="scope">
          <span>{{scope.row.biz_code}}</span>
        </template>
      </el-table-column>

      <el-table-column label="创建人" width="150" align="center">
        <template slot-scope="scope">
          {{scope.row.username}}
        </template>
      </el-table-column>

      <el-table-column label="创建时间" width="150" align="center">
        <template slot-scope="scope">
          {{scope.row.create_time}}
        </template>
      </el-table-column>

      <el-table-column label="备注" align="center">
        <template slot-scope="scope">
          {{scope.row.remark}}
        </template>
      </el-table-column>

      <el-table-column label="授权" width="150" align="center">
        <template slot-scope="scope">
          <el-button type="danger" plain @click="grantBtn(scope.row)">授权</el-button>
        </template>
      </el-table-column>

      <el-table-column label="选择用户授权" width="150" align="center">
        <template slot-scope="scope">
          <el-button type="primary" plain @click="selectRoleBtn(scope.row)">选择用户</el-button>
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




    


    <!-- 新增按钮的模态框 -->
    <el-dialog title="新增参数" :visible.sync="isDialogShow">
      <el-form :rules="rules" 
        ref="dataForm" 
        :model="form" 
        label-position="left" 
        label-width="70px" 
        style='width: 400px; margin-left:50px;'>

        <el-form-item label="角色名称" prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>

        <el-form-item label="角色类型" prop="selectArr">
          <el-select class="filter-item" v-model="form.type" placeholder="Please select">
            <el-option v-for="(item, index) in  selectArr" 
              :key="index" 
              :label="item.value.dic_desc" 
              :value="item.field">
            </el-option>
          </el-select>
        </el-form-item>
        
        <el-form-item label="是否启用" prop="is_enable">
          <el-select class="filter-item" v-model="form.is_enable" placeholder="Please select">
            <el-option v-for="(item, index) in  enableSelect" 
              :key="index" 
              :label="item.name" 
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="对照码" prop="biz_code">
          <el-input v-model="form.biz_code"></el-input>
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
        
        <el-form-item label="角色名称" prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>

        <el-form-item label="角色类型" prop="selectArr">
          <el-select class="filter-item" v-model="form.type" placeholder="Please select">
            <el-option v-for="(item, index) in  selectArr" 
              :key="index" 
              :label="item.value.dic_desc" 
              :value="item.field">
            </el-option>
          </el-select>
        </el-form-item>
        
        <el-form-item label="是否启用" prop="is_enable">
          <el-select class="filter-item" v-model="form.is_enable" placeholder="Please select">
            <el-option v-for="(item, index) in  enableSelect" 
              :key="index" 
              :label="item.name" 
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="对照码" prop="biz_code">
          <el-input v-model="form.biz_code"></el-input>
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


    <!-- 授权按钮 -->
    <el-dialog title="新增授权" :visible.sync="isGrantDialogShow">
      <el-row>
        <el-col :span="12">
          <div>经办权限</div>
          <tree :treeData='treeData' :showCheckbox="true" ref="grantTree"></tree>
        </el-col>
        <el-col :span="12" v-if="dialogParams.manageTreeDialog">
          <div>管理权限</div>
          <tree :treeData='treeData2' :showCheckbox="true" ref="manageTree"></tree>
        </el-col>
      </el-row>
      
      <div slot="footer" class="dialog-footer">
        <el-button type="success" plain @click='grantSaveBtn'>保存</el-button>
        <el-button type="info" plain @click='isGrantDialogShow = false'>关闭</el-button>
      </div>
    </el-dialog>
    
    <!-- 选择用户 -->
    <el-dialog title="选择用户" :visible.sync="isChooseRoleDialogShow">
      <el-row>
        <el-col :span="6">
          <div>管理权限</div>
          <tree :treeData='treeData3' @nodeClick="treeNodeClick" ref="chooseRoleTree"></tree>
        </el-col>
        <el-col :span="18">
          <el-transfer
            filterable
            :filter-method="transferFilter"
            filter-placeholder="姓名或登录账号"
            :titles="['待选用户列表', '已选用户列表']"
            :props="{
              key: 'id',
              label: 'name'
            }"
            v-model="dialogParams.value"
            @change="transferChange"
            :data="dialogParams.data">
          </el-transfer>
        </el-col>
      </el-row>
    </el-dialog>
  </div>
</template>

<script>
import { getList, saveRole, deleteRole, updateRole, listValues,
 getTreeData, saveGrantInfo, getAdminTreeData, 
 getRoleTreeData, listUsers, listSelectedUsers,
 saveRoleUserGrantInfo, deleteRoleUserGrantInfo} from '@/api/systeManage/permission/rolesManage'
import Tree from '@/components/Tree'
import {handleTreeData} from '@/utils/tree'

export default {
  name: 'rolesManage',
  components: {
    Tree
  },
  data() {
    return {
      list: null,
      listLoading: true,
      treeData: [],
      treeData2:[],
      treeData3:[],
      multipleSelection: [],
      form: {
        grouping: '',            //dialog里的select
        biz_code: '',            //扩展码
        type: '1',               //角色类型
        name: '',                //角色名称
        is_enable: '0',          //是否启用
        remark: '',              //备注
        create_time: ''          //创建时间
      },
      dialogParams: {
        model: {},
        manageTreeDialog: false,
        value: [],
        data: [],
        cascade: true,            //级联
        selModel: []
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
        name: ''          //角色名称搜索框
      },
      total: 0,
      //按钮组
      isDialogShow: false,
      isEditDialogShow: false,
      isGrantDialogShow: false,       //授权按钮
      isChooseRoleDialogShow: false,  //选择用户按钮
      rules: {}
    }
  },
  created() {
    this.fetchData(this.listQuery)
    listValues({
      key: 'user_type',
      type: 'hash'
    }).then(res =>{
      
      res.rows.map(v => {
        v.value = JSON.parse(v.value)
        return v
      })
      this.selectArr = res.rows
      console.log(res, "sdasdasd")
    })
  },
  watch: {

  },
  methods: {
    async fetchData(options) {
      let obj = Object.assign({}, options);
      obj.startPage --

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
    /*select变化事件*/ 
    changeValue (val){
      this.fetchData(this.listQuery)
    },
    /**选中变化事件**/
    handleSelectionChange (val){
      this.multipleSelection = val;
      console.log(val)
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
      console.log(model)
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
        await deleteRole(obj)
        await this.fetchData(this.listQuery)
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
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
      console.log(params)
      this.fetchData(params)
    },
    async grantBtn (model){
      // console.log(model)
      this.dialogParams.model = model
      //是超级管理员那个账号就字显示一个tree
      this.dialogParams.manageTreeDialog = model.id == -1 ? false : true
      this.treeData = await getTreeData({
        role_id: model.id,
        grant_type: 1,
        node: 0
      })
      this.treeData2 = await getAdminTreeData({
        role_id: model.id,
        grant_type: 2,
        node: 0
      })
      
      this.isGrantDialogShow = true
    },
    grantSaveBtn (){
      this.isGrantDialogShow = false
      let model = this.dialogParams.model,
      CheckedNodes = this.$refs.grantTree.getCheckedNodes()
      console.log(CheckedNodes)
      saveGrantInfo({
        role_id: model.id,
        save_biz: true,
        save_admin: false,
        grant_rows: CheckedNodes.map( v => v.id).join()
      })
    },
    async selectRoleBtn (model){
      this.dialogParams.model = model
      console.log(model, "mmmmmmmmmmmm")
      let options = {
        role_id: model.id,
        cascade: this.dialogParams.cascade,
        page: 1,
        start: 0,
        limit: 50
      }

      let resTree = getRoleTreeData(),
      listU = listUsers(options),
      listSU = listSelectedUsers(options)
      this.treeData3 = handleTreeData(await resTree)

      this.dialogParams.data = (await listU).rows.concat((await listSU).rows)
      this.dialogParams.value = (await listSU).rows.map( v => v.id)
      this.dialogParams.selModel = (await listSU).rows

      this.isChooseRoleDialogShow = true
    },
    async transferChange (value, direction, movedKeys){
      console.log(value, direction, movedKeys);
      let role_id = this.dialogParams.model.id
      if (direction === 'right'){
        await saveRoleUserGrantInfo({
          role_id,
          aos_rows: movedKeys.join()
        })
      }
      else {
        let aos_rows = this.dialogParams.data
        .filter(item => movedKeys.some( v => v === item.id))
        .map( v => v.user_role_id)
        .join()
        
        await deleteRoleUserGrantInfo({
          aos_rows
        })
      }
      await this.selectRoleBtn(this.dialogParams.model)
    },
    transferFilter (query, item){
      if (!query) return true
      return item.name.indexOf(query) > -1;
    },
    closeDialog (){
      this.isDialogShow = false
      this.isEditDialogShow = false
    },
    /*新增按钮确认*/
    async confirmBtn (){
      // console.log(this.form)
      
      try {
        let response = await saveRole(this.form)
        this.fetchData(this.listQuery)
      } catch (err){
        console.log(err)
      }

      this.closeDialog()
      this.initForm()
    },
    /*编辑按钮确认*/
    async confirmEditBtn (){
      try {
        let response = await updateRole(this.form)
        this.fetchData(this.listQuery)
      } catch (err){
        console.log(err)
      }

      this.closeDialog()
      this.initForm()
    },
    async treeNodeClick (data){
      console.log(data)
      let res = await listUsers({
        role_id: -1,
        cascade: this.dialogParams.cascade,
        org_id: data.id,
        org_cascade_id: data.a,
        page:1,
        start:0,
        limit:50
      })
      console.log(res)
      this.dialogParams.data = res.rows.concat(this.dialogParams.selModel)
    },
    initForm (){
      // 初始化
      this.form = Object.assign(this.form, {
        grouping: '',         //dialog里的select
        biz_code: '',             //扩展码
        type: '1',             //角色类型
        name: '',             //角色名称
        is_enable: '0',        //是否启用
        remark: '',           //备注
        create_time: ''       //创建时间
      })

      this.listQuery.name = ''
    }
  },
  mounted (){

  }
  
}
</script>
