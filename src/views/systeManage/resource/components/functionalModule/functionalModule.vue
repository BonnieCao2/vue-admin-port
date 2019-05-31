<template>
  <div>
    <el-row>
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <tree></tree>            
          </div>
        </el-col>
        <el-col :span="16"><div class="grid-content bg-purple-light">s</div></el-col>
      </el-row>
  </div>
</template>

<script>
import Tree from '@/components/Tree'

export default {
  name: 'functionalModule',
  components: {
    Tree
  },
  // computed: {
  //   cachedViews() {
  //     return this.$store.state.tagsView.cachedViews
  //   }
  // }
}
</script>

<style lang='scss' scoped rel="stylesheet/scss" type="text/css">
 .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
    .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>
