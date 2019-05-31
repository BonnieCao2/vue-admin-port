<template>
  <div id="app">
    <!--<label for="locale">locale</label>-->
    <h1>aaaaaaa</h1>
    <select v-model="selOpt">
      <option>en</option>
      <option>zh</option>
    </select>
    <p>message: {{ $t('hello') }}</p>
  </div>
</template>

<script>
  import test from './test.js'
  const hello = 'hello'

  export default {
    name: "test",
    data () {
      return {
        selOpt: this.$store.state.lang
      }
    },
    created() {
      if (!this.$i18n.getLocaleMessage('en')[hello]) {
        this.$i18n.mergeLocaleMessage('en', test.en)
        this.$i18n.mergeLocaleMessage('zh', test.zh)
      }
    },
    mounted () {
      this.$i18n.locale = this.$store.state.lang
      console.log(this.$store.state.lang,'this.$store.state.lang')
    },
    watch: {
      selOpt (val) {
        console.log(val)
        this.$i18n.locale = val
        this.$store.dispatch('setLang', val)

        // console.log(localStorage.lang,'localStorage.lang')
      }
    }
  }
</script>

<style scoped>

</style>
