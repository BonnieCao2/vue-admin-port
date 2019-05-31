<template>
    <div>
      <div>{{dropDownName}}</div>
      <el-select v-model="value" @change="selectedV(value)" clearable :placeholder="$t('components.dropDownChoose')">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>
</template>

<script>
/*import English from '@/lang/en.js'
import Chinese from '@/lang/zh.js'

const dropDownChoose = 'components.dropDownChoose'*/

export default {
  name: "drop-down",
  props: {
    options: Array,
    dropDownName: String
  },
  data() {
    return {
      value: ''
    }
  },
/*  created() {
    if (!this.$i18n.getLocaleMessage('en')[dropDownChoose]) {
      this.$i18n.mergeLocaleMessage('en', English)
      this.$i18n.mergeLocaleMessage('zh', Chinese)
    }
  },*/
  mounted () {
    /*if(this.options.length > 0){
      this.value = this.options[0].label
    }*/
  },
  // watch: {
  //   value (curValue) {
  //     // console.log(curValue)
  //     this.$emit('selectedValue',curValue)
  //   }
  // },
  methods: {
    selectedV (curValue) {
      this.$emit('selectedValue',curValue)
    }
  }

}
</script>

<style scoped>

</style>
