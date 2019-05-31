<template>
    <div>
      <div>{{inputName}}</div>
      <el-input v-model="input" @change="inputValue(input)" placeholder="" clearable></el-input>
    </div>
</template>

<script>
export default {
  name: "input",
  props: {
    inputName: String,
    inputBox: String
  },
  data () {
    return {
      input: ''
    }
  },
  // watch: {
  //   inputBox (val){
  //     // console.log(val)
  //     this.$emit('inputValue',val)
  //   }
  // },
  methods: {
    inputValue (val) {
      this.$emit('inputValue',val)
    }
  }
}
</script>

<style scoped>

</style>
