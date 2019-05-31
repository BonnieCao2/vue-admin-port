<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px" label-position="top" :inline="true">
      <el-form-item label="日期选择">
        <el-date-picker
          v-model="datePickerValue"
          type="daterange"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :default-time="['00:00:00', '23:59:59']"
          value-format="yyyy-MM-dd HH:mm:ss">
        </el-date-picker>
      </el-form-item>

      <el-form-item label="客户编码">
        <el-input v-model="form.customer_code"></el-input>
      </el-form-item>
      <el-form-item label="车牌号">
        <el-input v-model="form.plate_number"></el-input>
      </el-form-item>
      <el-form-item label="箱号">
        <el-input v-model="form.container_code"></el-input>
      </el-form-item>
      
      <el-form-item label="业务类型">
        <el-select v-model="form.order_status" placeholder="please select your zone">
          <el-option v-for="(item, index) in  order_status" 
            :key="index" 
            :label="item.remark" 
            :value="item.code">
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="订单状态">
        <el-select v-model="form.order_type" placeholder="please select your zone">
           <el-option v-for="(item, index) in  order_type" 
            :key="index" 
            :label="item.remark" 
            :value="item.code">
          </el-option>
        </el-select>
      </el-form-item>
      
    </el-form>
    <el-form ref="form" :model="form" label-width="120px" label-position="top" :inline="true">
      <el-form-item>
        <el-button type="primary" plain @click="searchLIst">查询</el-button>
      </el-form-item>
    </el-form>


    <el-table :data="list" 
            v-loading.body="listLoading" 
            element-loading-text="Loading" 
            border fit highlight-current-row
            @selection-change="handleSelectionChange">

      <el-table-column
        type="selection"
        width="55">
      </el-table-column>

      <el-table-column align="center" label='状态' width="100">
        <template slot-scope="scope">
          {{scope.row.order_status}}
        </template>
      </el-table-column>

      <el-table-column label="业务类型" width="150" align="center">
        <template slot-scope="scope">
          {{scope.row.order_type}}
        </template>
      </el-table-column>

      <el-table-column align="center" label="客户编码" width="150">
        <template slot-scope="scope">
          {{scope.row.customer_code}}
        </template>
      </el-table-column>

      <el-table-column label="预约日期"  align="center">
        <template slot-scope="scope">
          <span>{{scope.row.order_start_time | orderDate}}</span>
        </template>
      </el-table-column>

      <el-table-column label="预约时间"  align="center">
        <template slot-scope="scope">
          {{ scope.row.order_start_time | orderTime }} - {{ scope.row.order_end_time | orderTime }}
        </template>
      </el-table-column>

      <el-table-column label="承运单位" width="100" align="center">
        <template slot-scope="scope">
          {{scope.row.hualier_code}}
        </template>
      </el-table-column>

      <el-table-column label="车牌号" width="100" align="center">
        <template slot-scope="scope">
          {{scope.row.plate_number}}
        </template>
      </el-table-column>

      <el-table-column label="集装箱数量" width="100" align="center">
        <template slot-scope="scope">
          <div @click="orderDetail(scope.row)"> {{scope.row.countContainer}}</div>
        </template>
      </el-table-column>

       <el-table-column label="预约单号" width="150" align="center">
        <template slot-scope="scope">
          <div @click="orderLog(scope.row)"> {{scope.row.booking_nos}}</div>
        </template>
      </el-table-column>

      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button type="success" plain @click="orderFinish(scope.row)" v-if="scope.row.order_status === 5">完成预约单</el-button>
          <el-button type="danger" plain @click="orderClose(scope.row)" v-if="scope.row.order_status === 3">关闭预约单</el-button>
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



    <el-dialog title="明细" :visible.sync="isOrderDialogShow">
      <el-table :data="orderList" 
            v-loading.body="orderListLoading" 
            element-loading-text="Loading" 
            border fit highlight-current-row>

        <el-table-column align="center" label='箱号'>
          <template slot-scope="scope">
            {{scope.row.container_code}}
          </template>
        </el-table-column>

        <el-table-column align="center" label='箱门方向'>
          <template slot-scope="scope">
            {{scope.row.container_direction}}
          </template>
        </el-table-column>

         <el-table-column align="center" label='集装箱等级'>
          <template slot-scope="scope">
            {{scope.row.container_grade}}
          </template>
        </el-table-column>

        <el-table-column align="center" label='集装箱尺寸'>
          <template slot-scope="scope">
            {{scope.row.container_size}}
          </template>
        </el-table-column>

        <el-table-column align="center" label='集装箱箱型'>
          <template slot-scope="scope">
            {{scope.row.container_type}}
          </template>
        </el-table-column>

        <el-table-column align="center" label='创建时间'>
          <template slot-scope="scope">
            {{scope.row.create_time}}
          </template>
        </el-table-column>

        <el-table-column label="更新时间" align="center">
          <template slot-scope="scope">
            {{scope.row.update_time}}
          </template>
        </el-table-column>

      </el-table>
    </el-dialog>



    <el-dialog title="单据LOG" :visible.sync="isLogDialogShow">
      <el-table :data="orderLogList" 
            v-loading.body="orderLogListLoading" 
            element-loading-text="Loading" 
            border fit highlight-current-row
            @selection-change="handleSelectionChange">

        <el-table-column
          type="selection"
          width="55">
        </el-table-column>

        <el-table-column align="center" label='时间'>
          <template slot-scope="scope">
            {{scope.row.create_time}}
          </template>
        </el-table-column>

         <el-table-column align="center" label='状态'>
          <template slot-scope="scope">
            {{scope.row.order_status}}
          </template>
        </el-table-column>
        

      </el-table>

      <!-- 分页 -->
      <div class="pagination-container">
        <el-pagination background 
          @size-change="orderSizeChange" 
          @current-change="orderCurrentChange" 
          :current-page="orderListQuery.startPage" 
          :page-sizes="[10,20,30, 50]" 
          :page-size="orderListQuery.limit" 
          layout="total, sizes, prev, pager, next, jumper" 
          :total="orderTotal">
        </el-pagination>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { getList, queryOrderDetail, listDic, queryOrderLog, overOrder, closeOrder } from '@/api/orderManage/reservationListSearch'

export default {
  name: 'reservationListSearch',
  data() {
    return {
      datePickerValue: [],
      form: {
       customer_code: '',        //客户编码
       plate_number: '',         //车牌号
       container_code: '',       //箱号
       order_start_time: '',
       order_end_time: '',
       order_status: '',        //业务类型
       order_type: ''           //订单状态
      },
      order_status: [],        //业务类型
      order_type: [],           //订单状态
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
      //订单log 模态框内的分页
      orderListQuery: {
        startPage: 1,     //起始页码
        limit: 10,        //每页多少条
      },
      orderTotal: 0,
      orderList: [],
      orderListLoading: false,
      orderLogList: [],
      orderLogListLoading: false,
      orderModel: {},          //保存被点开dialog的那一行数据
      //模态框
      isOrderDialogShow: false,
      isLogDialogShow: false
    }
  },
   filters: {  
    orderTime: value => {
      return value.split(' ')[1]
    },
    orderDate: value => {
      return value.split(' ')[0]
    }
  },
  watch: {
    datePickerValue (val){
      console.log(val)
      this.form.order_start_time = val[0]
      this.form.order_end_time = val[1]
    }
  },
  created() {
    this.fetchData(this.listQuery)
    this.getSelect('order_status').then( res =>{
      res.rows.push({remark: '全部', code: ''})
      this.order_status = res.rows
    })
    this.getSelect('order_type').then( res =>{
      res.rows.push({remark: '全部', code: ''})
      this.order_type = res.rows
    })
    
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
    searchLIst (){
      let obj = Object.assign({}, this.listQuery, this.form)
      for (let v in obj){
        !obj[v] && delete obj[v]
      }
      this.fetchData(obj)
    },
    getSelect (val){
      return listDic({
          dic_key: val,
          page:1,
          start:0,
          limit:50
        })
    },
    /*订单detail*/
    async orderDetail (model){
      this.orderListLoading = true
      this.orderModel = model
      this.isOrderDialogShow = true
      let options = Object.assign({}, {order_id: model.order_id})
      let res = await queryOrderDetail(options)
      this.orderList = res
      this.orderListLoading = false
    },
    /*订单log*/
    orderLog (model){
      this.orderModel = model
      this.isLogDialogShow = true
      this.orderLogListLoading = true
      let options = Object.assign({}, this.orderListQuery, {booking_nos: model.booking_nos})
      options.startPage --
      queryOrderLog(options).then ( res => {
        this.orderLogList = res.rows
        this.orderTotal = res.total
        this.orderLogListLoading = false
      })
    },
    async orderFinish (model){
      try {
        await this.handleConfirm('是否完成此预约单？')
        await overOrder({order_id: model.order_id})
        this.$message({
          type: 'success',
          message: '预约单已完成!'
        });
      } catch (err) {
        this.$message({
          type: 'info',
          message: '操作已取消'
        });   
      }
    },
    async orderClose (model){
      console.log(model)
      try {
        await this.handleConfirm('是否关闭此预约单？')
        await closeOrder({order_id: model.order_id})
        this.$message({
          type: 'success',
          message: '预约单已关闭!'
        });
      } catch (err) {
        this.$message({
          type: 'info',
          message: '操作已取消'
        });   
      }
    },
    handleConfirm (msg, title = '提示'){
      return this.$confirm(msg, title, {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
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
    orderSizeChange (val){
      this.orderListQuery.limit = val
      this.orderLog(this.orderModel)
    },
    orderCurrentChange (val){
      this.orderListQuery.startPage = val
      this.orderLog(this.orderModel)
    },
    initForm (){
      // 初始化
      this.form = Object.assign(this.form, {
        customer_code: '',        //客户编码
        plate_number: '',         //车牌号
        container_code: '',       //箱号
        order_start_time: '',
        order_end_time: ''
      })
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

