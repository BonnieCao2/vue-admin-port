<template>
  <div class="app-container">
    <el-tree class="filter-tree" 
      :data="treeData" 
      :props="defaultProps" 
      default-expand-all 
      :expand-on-click-node="false"
      @node-click="nodeClick"
      :show-checkbox="showCheckbox"
      :default-checked-keys="defaultChecked"
      node-key="id"
      ref="commonTree">
    </el-tree>

  </div>
</template>

<script>
export default {
  name: 'tree',
  props:{
    treeData: {
      type: Array,
      default: []
    },
    showCheckbox: {
      type: Boolean,
      default: false
    }
  },
  data (){
    return {
      defaultChecked: [],
      defaultProps: {
        children: 'children',
        label: 'text',
        id: 'id'
      }
    }
  },
  watch: {
    treeData (val){
      this.defaultChecked =  this.findChecked(val, [])
    }
  },
  created (){
    this.defaultChecked =  this.findChecked(this.treeData, [])
  },
  methods: {
    nodeClick (data, vNode, self){
      // console.log(vNode)
      this.$emit('nodeClick', data)
    },
    getCheckedNodes (){
      return this.$refs.commonTree.getCheckedNodes()
    },
    findChecked (data, arr){
      data.forEach(element => {
        element.checked && arr.push(element.id)
        element.children && element.children.length > 0 && this.findChecked(element.children, arr)
      });
      return arr
    }
  },
  mounted (){
  }
}
</script>

