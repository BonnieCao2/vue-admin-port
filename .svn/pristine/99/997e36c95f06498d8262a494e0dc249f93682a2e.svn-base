<template>
  <div class="app-container">
    <div>
       <el-button round @click="btnAdd">新增</el-button>
       <el-button round @click="btnEdit">编辑</el-button>
       <el-button round @click="btnDelete">删除</el-button>
       <div style="display: inline-block">
         <el-form ref="form" :model="form" label-width="120px">
          <el-form-item label="字典分组">
            <el-select v-model="form.grouping" placeholder="please select your zone" @change="changeValue">
              <el-option v-for='(v, index) in selectArr' :label="v.value.dic_desc" :value="v.field" :key='index'></el-option>
            </el-select>
          </el-form-item>
        </el-form>
       </div>
       
       <div style="display: inline-block">
        <el-form ref="form" :model="form" label-width="120px">
          <el-form-item label="字典名称">
            <el-input v-model="form.where1" @keyup.enter.native="inputSearch"></el-input>
          </el-form-item>
        </el-form>
       </div>

       <div style="display: inline-block">
        <el-form ref="form" :model="form" label-width="120px">
          <el-form-item label="对照码">
            <el-input v-model="form.where2" @keyup.enter.native="inputSearch"></el-input>
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

      <el-table-column align="center" label='字典名称' width="150">
        <template slot-scope="scope">
          {{scope.row.name}}
        </template>
      </el-table-column>

      <el-table-column align="center" label="字典标识" width="150">
        <template slot-scope="scope">
          {{scope.row.dic_key}}
        </template>
      </el-table-column>

      <el-table-column label="对照码" width="150" align="center">
        <template slot-scope="scope">
          <span>{{scope.row.code}}</span>
        </template>
      </el-table-column>

      <el-table-column label="对照值" width="150" align="center">
        <template slot-scope="scope">
          {{scope.row.dic_desc}}
        </template>
      </el-table-column>

      <el-table-column label="排序号" width="150" align="center">
        <template slot-scope="scope">
          {{scope.row.sort_no}}
        </template>
      </el-table-column>

      <el-table-column label="是否启用" width="150" align="center">
        <template slot-scope="scope">
          {{scope.row.is_enable}}
        </template>
      </el-table-column>

      <el-table-column label="所属分组" width="150" align="center">
        <template slot-scope="scope">
          {{scope.row.dic_group}}
        </template>
      </el-table-column>

      <el-table-column label="备注" align="center">
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




    


    <!-- 新增按钮的模态框 -->
    <el-dialog title="新增参数" :visible.sync="isDialogShow">
      <el-form :rules="rules" 
        ref="dataForm" 
        :model="form" 
        label-position="left" 
        label-width="70px" 
        style='width: 400px; margin-left:50px;'>
        <el-form-item label="所属分组" prop="selectArr">
          <el-select class="filter-item" v-model="form.dic_group" placeholder="Please select">
            <el-option v-for="(item, index) in  selectArr" 
              :key="index" 
              :label="item.value.dic_desc" 
              :value="item.field">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="字典名称" prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="字典标识" prop="dic_key">
          <el-input v-model="form.dic_key"></el-input>
        </el-form-item>
        <el-form-item label="对照码" prop="code">
          <el-input v-model="form.code"></el-input>
        </el-form-item>
        <el-form-item label="对照值" prop="dic_desc">
          <el-input v-model="form.dic_desc"></el-input>
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
        <el-form-item label="排序号" prop="sort_no">
          <el-input-number v-model="form.sort_no" :min="0" label="排序号"></el-input-number>
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
        <el-form-item label="所属分组" prop="selectArr">
          <el-select class="filter-item" v-model="form.dic_group" placeholder="Please select">
            <el-option v-for="(item, index) in  selectArr" 
              :key="index" 
              :label="item.value.dic_desc"
              :value="item.field">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="字典名称" prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="字典标识" prop="dic_key">
          <el-input v-model="form.dic_key"></el-input>
        </el-form-item>
        <el-form-item label="对照码" prop="code">
          <el-input v-model="form.code"></el-input>
        </el-form-item>
        <el-form-item label="对照值" prop="dic_desc">
          <el-input v-model="form.dic_desc"></el-input>
        </el-form-item>
        <el-form-item label="是否启用" prop="enableSelect">
          <el-select class="filter-item" v-model="form.is_enable" placeholder="Please select">
            <el-option v-for="(item, index) in  enableSelect" 
              :key="index" 
              :label="item.name" 
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="排序号" prop="sort_no">
          <el-input-number v-model="form.sort_no" :min="0" label="排序号"></el-input-number>
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
import { getList, saveDic, deleteDic, updateDic, listValues } from '@/api/systeManage/resource/dataDictionary'

export default {
  name: 'dataDictionary',
  data() {
    return {
      list: null,
      listLoading: true,
      multipleSelection: [],
      form: {
        grouping: '',         //dialog里的select
        code: '',             //对照码
        dic_desc: '',         //对照值
        name: '',             //字典名称
        dic_key: '',          //字典标识
        sort_no: '',          //排序号
        is_enable: '0',        //是否启用
        dic_group: '',        //所属分组
        remark: '',           //备注
        where1: '',           //字典名称搜索框
        where2: '',           //对照码搜索框
        select: null
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
        startPage: 1,    //起始页码
        limit: 10,        //每页多少条
      },
      total: 0,
      //按钮组
      isDialogShow: false,
      isEditDialogShow: false,
      rules: {}
    }
  },
  created() {
    this.fetchData(this.listQuery)
    listValues({
      key: 'dic_group',
      type: 'hash'
    }).then(res =>{
      
      res.rows.map(v => {
        v.value = JSON.parse(v.value)
        return v
      })
      res.rows.push({
          field: '',
          value: {
          dic_desc: '全部'
        }
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
      obj.nkv = this.form.contrastCode
      obj.params_group = this.form.grouping

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
        await deleteDic(obj)
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
      let params = Object.assign({}, this.listQuery, this.form)
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
        let response = await saveDic(this.form)
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
        let response = await updateDic(this.form)
        this.fetchData(this.listQuery)
      } catch (err){
        console.log(err)
      }

      this.closeDialog()
      this.initForm()
    },
    initForm (){
      // 初始化
      this.form = Object.assign(this.form, {
        // grouping: '',         //dialog里的select
        code: '',             //对照码
        dic_desc: '',         //对照值
        name: '',             //字典名称
        dic_key: '',          //字典标识
        sort_no: '',          //排序号
        is_enable: '0',        //是否启用
        dic_group: '',        //所属分组
        remark: '',           //备注
        where1: '',           //字典名称搜索框
        where2: '',           //对照码搜索框
        select: null
      })
    }
  },
  mounted (){

  }
  
}
</script>
