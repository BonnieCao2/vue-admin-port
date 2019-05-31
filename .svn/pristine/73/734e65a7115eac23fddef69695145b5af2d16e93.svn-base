<template>
  <div>
    <div class="block">
      <span class="demonstration" v-show="false">完整功能</span>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pageData.currentPage"
        :page-sizes="pageData.pageSizes"
        :page-size="pageData.pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="pageData.total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "pagination",
  methods: {
    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`);
      this.$emit('pageSize',val)
    },
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`);
      this.$emit('curPage',val)
    }
  },
  props: {
    pageData: {
      currentPage: Number,
      pageSizes: Array,
      pagesize: Number,
      total: Number
    }
  },
  data() {
    return {
      /*currentPage: 1,
      pageSizes: [10, 20, 30, 50],
      pagesize: 20,
      total: 80*/
    };
  }
}
</script>

<style scoped>

</style>
