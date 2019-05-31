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
            <el-button round @click="resetPsd">修改密码</el-button>

            <div style="display: inline-block">
              <el-form ref="form" :model="form" label-width="120px">
                <el-form-item label="登录账号|姓名">
                  <el-input v-model="listQuery.na" @keyup.enter.native="inputSearch"></el-input>
                </el-form-item>
              </el-form>
            </div>
          </div>



          <el-table :data="list" 
            v-loading.body="listLoading" 
            element-loading-text="Loading" 
            border fit highlight-current-row
            stripe
            @selection-change="handleSelectionChange">

            <el-table-column
              type="selection"
              width="55">
            </el-table-column>

            <el-table-column align="center" label='登录账号' width="150">
              <template slot-scope="scope">
                {{scope.row.account}}
              </template>
            </el-table-column>

            <el-table-column label="姓名" width="150" align="center">
              <template slot-scope="scope">
                {{scope.row.name}}
              </template>
            </el-table-column>

            <el-table-column label="所属组织" width="150" align="center">
              <template slot-scope="scope">
                <span>{{scope.row.org_name}}</span>
              </template>
            </el-table-column>

            <el-table-column label="所属角色" align="center">
              <template slot-scope="scope">
                {{scope.row.roles}}
              </template>
            </el-table-column>

            <el-table-column label="性别" align="center">
              <template slot-scope="scope">
                {{scope.row.sex}}
              </template>
            </el-table-column>

            <el-table-column label="用户状态" width="150" align="center">
              <template slot-scope="scope">
                {{scope.row.status}}
              </template>
            </el-table-column>

            <el-table-column label="用户类型" width="150" align="center">
              <template slot-scope="scope">
                {{scope.row.type}}
              </template>
            </el-table-column>

            <el-table-column label="皮肤" width="150" align="center">
              <template slot-scope="scope">
                {{scope.row.skin}}
              </template>
            </el-table-column>

             <el-table-column label="扩展码" width="150" align="center">
              <template slot-scope="scope">
                {{scope.row.biz_code}}
              </template>
            </el-table-column>

            <el-table-column label="选择角色" width="150" align="center">
              <template slot-scope="scope">
                <el-button type="primary" plain @click="getListRoles(scope.row)">选择角色</el-button>
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
    <el-dialog title="新增用户" :visible.sync="isDialogShow">
      <div class="dialogTitle">基础信息</div>
      <el-form 
        :rules="rules"
        :model="form"
        label-position="right"
        :inline="true"
        label-width="70px">

        <el-form-item label="所属部门" prop="org_name">
          <el-input v-model="form.org_name" :disabled="true"></el-input>
        </el-form-item>

        <el-form-item label="姓名" prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>

        <el-form-item label="登录账号" prop="account">
          <el-input v-model="form.account"></el-input>
        </el-form-item>

        <el-form-item label="登录密码" prop="password">
          <el-input v-model="form.password"></el-input>
        </el-form-item>

        <el-form-item label="电子邮件" prop="email">
          <el-input v-model="form.email"></el-input>
        </el-form-item>
        <el-form-item label="联系电话" prop="mobile">
          <el-input v-model="form.mobile"></el-input>
        </el-form-item>

        <el-form-item label="身份证号" prop="idno">
          <el-input v-model="form.idno"></el-input>
        </el-form-item>

        <el-form-item label="联系地址" prop="address">
          <el-input v-model="form.address"></el-input>
        </el-form-item>
      </el-form>


      <el-form 
      :rules="rules" 
      :model="form"
      :inline="true"
      label-position="right"
      label-width="70px">

      <el-form-item label="性别" prop="sexArr">
          <el-select class="filter-item" v-model="form.sex" placeholder="Please select">
            <el-option v-for="(item, index) in  sexArr" 
              :key="index" 
              :label="item.value.dic_desc" 
              :value="item.value.code">
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="用户类型" prop="userArr">
          <el-select class="filter-item" v-model="form.type" placeholder="Please select">
            <el-option v-for="(item, index) in  userArr" 
              :key="index" 
              :label="item.value.dic_desc" 
              :value="item.value.code">
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="用户状态" prop="statusArr">
          <el-select class="filter-item" v-model="form.status" placeholder="Please select">
            <el-option v-for="(item, index) in  statusArr" 
              :key="index" 
              :label="item.value.dic_desc" 
              :value="item.value.code">
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <el-form 
      :rules="rules" 
      :model="form"
      label-position="right"
      label-width="70px">

        <el-form-item label="备注" prop="remark">
           <el-input type="textarea" v-model="form.remark"></el-input>
        </el-form-item>

        <div class="dialogTitle">配置信息</div>

        <el-form-item label="界面皮肤" prop="skinArr">
          <el-select class="filter-item" v-model="form.skin" placeholder="Please select">
            <el-option v-for="(item, index) in  skinArr" 
              :key="index" 
              :label="item.value.dic_desc" 
              :value="item.value.code">
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="扩展码" prop="biz_code">
          <el-input v-model="form.biz_code"></el-input>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button type="success" plain @click='confirmBtn'>确认</el-button>
        <el-button type="info" plain @click='closeDialog'>取消</el-button>
      </div>
    </el-dialog>


    <!-- 编辑按钮的模态框 -->
    <el-dialog title="新增参数" :visible.sync="isEditDialogShow">
      <div class="dialogTitle">基础信息</div>
      <el-form 
        :rules="rules"
        :model="form"
        label-position="right"
        :inline="true"
        label-width="70px">

        <el-form-item label="所属部门" prop="org_name">
          <el-input v-model="form.org_name" :disabled="true">
            <el-button slot="append" icon="el-icon-search" @click="isOrgDialogShow = true"></el-button>
          </el-input>
        </el-form-item>
      </el-form>
      <el-form 
        :rules="rules"
        :model="form"
        label-position="right"
        :inline="true"
        label-width="70px">

        <el-form-item label="姓名" prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>

        <el-form-item label="登录账号" prop="account">
          <el-input v-model="form.account"></el-input>
        </el-form-item>

        <el-form-item label="电子邮件" prop="email">
          <el-input v-model="form.email"></el-input>
        </el-form-item>
        <el-form-item label="联系电话" prop="mobile">
          <el-input v-model="form.mobile"></el-input>
        </el-form-item>

        <el-form-item label="身份证号" prop="idno">
          <el-input v-model="form.idno"></el-input>
        </el-form-item>

        <el-form-item label="联系地址" prop="address">
          <el-input v-model="form.address"></el-input>
        </el-form-item>
      </el-form>


      <el-form 
      :rules="rules" 
      :model="form"
      :inline="true"
      label-position="right"
      label-width="70px">

      <el-form-item label="性别" prop="sexArr">
          <el-select class="filter-item" v-model="form.sex" placeholder="Please select">
            <el-option v-for="(item, index) in  sexArr" 
              :key="index" 
              :label="item.value.dic_desc" 
              :value="item.value.code">
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="用户类型" prop="userArr">
          <el-select class="filter-item" v-model="form.type" placeholder="Please select">
            <el-option v-for="(item, index) in  userArr" 
              :key="index" 
              :label="item.value.dic_desc" 
              :value="item.value.code">
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="用户状态" prop="statusArr">
          <el-select class="filter-item" v-model="form.status" placeholder="Please select">
            <el-option v-for="(item, index) in  statusArr" 
              :key="index" 
              :label="item.value.dic_desc" 
              :value="item.value.code">
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <el-form 
      :rules="rules" 
      :model="form"
      label-position="right"
      label-width="70px">

        <el-form-item label="备注" prop="remark">
           <el-input type="textarea" v-model="form.remark"></el-input>
        </el-form-item>

        <div class="dialogTitle">配置信息</div>

        <el-form-item label="界面皮肤" prop="skinArr">
          <el-select class="filter-item" v-model="form.skin" placeholder="Please select">
            <el-option v-for="(item, index) in  skinArr" 
              :key="index" 
              :label="item.value.dic_desc" 
              :value="item.value.code">
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="扩展码" prop="biz_code">
          <el-input v-model="form.biz_code"></el-input>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button type="success" plain @click='confirmEditBtn'>确认</el-button>
        <el-button type="info" plain @click='closeDialog'>取消</el-button>
      </div>
    </el-dialog>

    <el-dialog title="所属部门" :visible.sync="isOrgDialogShow">
      <tree :treeData='treeData' @nodeClick="orgSearch"></tree>            
    </el-dialog>

    <el-dialog title="重置密码" :visible.sync="isPwdDialogShow">
      <el-form 
      :rules="reset.rules"
      :model="reset"
      label-position="right"
      ref="psd"
      label-width="70px">

        <el-form-item label="新密码" prop="password">
           <el-input type="textarea" v-model="reset.password"></el-input>
        </el-form-item>
        <el-form-item label="确认新密码" prop="password_b">
           <el-input type="textarea" v-model="reset.password_b"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="success" plain @click='confirmResetBtn'>确认</el-button>
        <el-button type="info" plain @click='closeDialog'>取消</el-button>
      </div>
    </el-dialog>

    <el-dialog title="选择角色" :visible.sync="isChooseRoleDialogShow">
      <el-transfer
        filterable
        :filter-method="transferFilter"
        filter-placeholder="请输入角色名称"
        :titles="['待选角色', '已选角色']"
        :props="{
          key: 'id',
          label: 'name'
        }"
        v-model="transferData.value"
        @change="transferChange"
        :data="transferData.data">
      </el-transfer>
    </el-dialog>
  </div>
</template>

<script>
import Tree from '@/components/Tree'
import { getTreeData, getList, saveUser, updateUser, deleteUser, listValues, resetPassword, listRoles, listSelectedRoles, saveUserRoleGrantInfo, delUserRoleGrantInfo} from '@/api/systeManage/permission/usersManage'
import {handleTreeData} from '@/utils/tree'

export default {
  name: 'usersManage',
  components: {
    Tree
  },
  data() {
    const psdValidate = (rule, value, callback) => {
      if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.reset.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
    }
    return {
      treeData: [],              //tree的参数
      transferData: {           //穿梭框参数
        data: [],
        value: [],
        model: {}
      },          
      list: null,
      listLoading: true,
      multipleSelection: [],
      form: {
        org_id: '',             //他爸的id
        org_name: '',           //他爸的名字
        old_org_id: '',         //他以前爸爸的名字
        name: '',               //姓名
        account: '',            //登录账号
        password: '',           //密码
        sex: '3',                //性别
        email: '',              //电子邮件
        mobile: '',             //电话
        idno: '',              //身份证
        type: '1',               //用户类型
        status: '1',             //用户状态
        address: '',            //联系地址
        remark: '',             //备注
        skin: 'blue',               //皮肤
        biz_code: '',           //扩展码
      },
      reset: {
        password: '',
        password_b: '',
        rules: {
          password: [{required: true, message: '必填', trigger: 'blur'}],
          password_b: [{validator: psdValidate, required: true, trigger: 'blur'}],
        }
      },
      sexArr: [],
      userArr: [],
      statusArr: [],
      skinArr: [],
      //分页
      listQuery: {
        startPage: 1,       //起始页码
        limit: 10,          //每页多少条
        org_id: "0",        //我也不知道这玩意儿是干嘛的，反正要传给后台
        org_cascade_id: '', //显示那一层的id
        na: '',             //模块名称搜索框
        cascade: true,      //级联显示
      },
      total: 0,
      //按钮组
      isDialogShow: false,
      isEditDialogShow: false,
      isOrgDialogShow: false,
      isPwdDialogShow: false,
      isChooseRoleDialogShow: false,
      rules: {}
    }
  },
  async created() {
    await this.getTreeData()
    this.form.org_id = this.treeData[0].id
    this.form.org_name = this.treeData[0].text
    await this.fetchData(this.listQuery)

    listValues({
      key: 'sex',
      type: 'hash'
    }).then(res =>{
      res.rows.map(v => {
        v.value = JSON.parse(v.value)
        return v
      })
      this.sexArr = res.rows
    })
    listValues({
      key: 'user_type',
      type: 'hash'
    }).then(res =>{
      res.rows.map(v => {
        v.value = JSON.parse(v.value)
        return v
      })
      this.userArr = res.rows
      // console.log(res)
    })
    listValues({
      key: 'user_status',
      type: 'hash'
    }).then(res =>{
      res.rows.map(v => {
        v.value = JSON.parse(v.value)
        return v
      })
      this.statusArr = res.rows
    })
    listValues({
      key: 'skin',
      type: 'hash'
    }).then(res =>{
      res.rows.map(v => {
        v.value = JSON.parse(v.value)
        return v
      })
      this.skinArr = res.rows
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
      this.treeData = handleTreeData(res, 0)
      // console.log(res)
    },
    //穿梭框里面的数据
    async getListRoles (data){
      this.isChooseRoleDialogShow = true
      let res = await listRoles({
        page: 1,
        start: 0,
        limit: 999,
        user_id: data.id
      }),
      resSec = await listSelectedRoles({
        page: 1,
        start: 0,
        limit: 999,
        user_id: data.id
      })

      this.transferData.data = res.rows.concat(resSec.rows)
      this.transferData.model = data
      this.transferData.value = resSec.rows.map( v => v.id)

      console.log(this.transferData)
      console.log(res)
    },
    treeNodeClick (data){
      this.listQuery.org_id = data.id
      this.listQuery.org_cascade_id = data.a
      this.form.org_id = data.id
      this.form.org_name = data.text
      console.log(data)
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
    resetPsd (){
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

      this.reset = {
        password: '',
        password_b: ''
      }

      this.isPwdDialogShow = true
      this.form = Object.assign(this.form, model)
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
        await deleteUser(obj)
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
    orgSearch (data){
      console.log(data)
      this.form.old_org_id = this.form.org_id
      this.form.org_name = data.text
      this.form.org_id = data.id

      this.isOrgDialogShow = false

      // org_id: '',             //他爸的id
      //   org_name: '',           //他爸的名字
      //   old_org_id: '',         //他以前爸爸的名字
    },
    confirmResetBtn (){
      this.$refs.psd.validate((valid) => {
          if (!valid) return false

          let multipleSelection = this.multipleSelection,
          {password, password_b} = this.reset
          resetPassword({
            aos_rows: multipleSelection[0].id,
            password,
            password_b
          })
          this.isPwdDialogShow = false
          return true
        })
    },
    closeDialog (){
      this.isDialogShow = false
      this.isEditDialogShow = false
      this.isPwdDialogShow = false
    },
    /*新增按钮确认*/
    async confirmBtn (){
      // console.log(this.form)
      
      try {
        let response = await saveUser(this.form)
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
        let response = await updateUser(this.form)
        this.fetchData(this.listQuery)
      } catch (err){
        console.log(err)
      }

      this.getTreeData()

      this.closeDialog()
      this.initForm()
    },
    transferFilter (query, item){
      if (!query) return true
      return item.name.indexOf(query) > -1;
    },
    async transferChange (value, direction, movedKeys){
      // console.log(value, direction, movedKeys);
      let user_id = this.transferData.model.id
      if (direction === 'right'){
        await saveUserRoleGrantInfo({
          user_id,
          aos_rows: movedKeys.join()
        })
      }
      else {
        let aos_rows = this.transferData.data
        .filter(item => movedKeys.some( v => v === item.id))
        .map( v => v.user_role_id)
        .join()
        
        await delUserRoleGrantInfo({
          aos_rows
        })
      }
      await this.getListRoles(this.transferData.model)
    },
    initForm (){
      // 初始化
      this.form = Object.assign(this.form, {
        name: '',               //姓名
        account: '',            //登录账号
        password: '',           //密码
        sex: '3',                //性别
        email: '',              //电子邮件
        mobile: '',             //电话
        idno: '',              //身份证
        type: '1',               //用户类型
        status: '1',             //用户状态
        address: '',            //联系地址
        remark: '',             //备注
        skin: 'blue',               //皮肤
        biz_code: '',           //扩展码
      })

      this.listQuery.na = ''
    }
  },
  mounted (){

  }
  
}
</script>

<style lang='scss' scoped rel="stylesheet/scss" type="text/css">
    .dialogTitle{
      font-size: 18px;
      padding: 0 0 30px 0;
      font-weight: bold;
    }
</style>
