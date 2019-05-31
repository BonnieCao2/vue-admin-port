<template>
  <el-menu class="navbar" mode="horizontal">
    <hamburger class="hamburger-container" :toggleClick="toggleSideBar" :isActive="sidebar.opened"></hamburger>
    <breadcrumb></breadcrumb>
    <div class="international">
      <el-select v-model="value" placeholder="请选择" @change="selectedV(value)"><!--size="mini" -->
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>

    <el-dropdown class="avatar-container" trigger="click">
      <div class="avatar-wrapper">
        <img class="user-avatar" :src="avatar+'?imageView2/1/w/80/h/80'">
        <i class="el-icon-caret-bottom"></i>
      </div>
      <el-dropdown-menu class="user-dropdown" slot="dropdown">
        <router-link class="inlineBlock" to="/">
          <el-dropdown-item>
            {{$t('navbar.home')}}
          </el-dropdown-item>
        </router-link>
        <el-dropdown-item divided>
          <span @click="logout" style="display:block;">{{$t('navbar.logOut')}}</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-menu>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'
import English from '@/lang/en.js'
import Chinese from '@/lang/zh.js'

const indexName = 'components.searchBtn'

export default {
  components: {
    Breadcrumb,
    Hamburger
  },
  data () {
    return {
      options: [{
        value: 'en',
        label: 'English'
      }, {
        value: 'zh',
        label: '中文'
      }],
      value: ''
    }
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar'
    ]),
    ...mapState(['lang'])
  },
  created() {
    if (!this.$i18n.getLocaleMessage('en')[indexName]) {
      this.$i18n.mergeLocaleMessage('en', English)
      this.$i18n.mergeLocaleMessage('zh', Chinese)
    }
  },
  mounted () {
    this.value = this.lang
    this.$i18n.locale = this.lang
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('ToggleSideBar')
    },
    logout() {
      this.$store.dispatch('LogOut').then(() => {
        location.reload() // 为了重新实例化vue-router对象 避免bug
      })
    },
    selectedV(val) {
      this.$store.dispatch('setLang', val)
      this.$i18n.locale = val
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.navbar {
  height: 50px;
  line-height: 50px;
  border-radius: 0px !important;
  .hamburger-container {
    line-height: 58px;
    height: 50px;
    float: left;
    padding: 0 10px;
  }
  .screenfull {
    position: absolute;
    right: 90px;
    top: 16px;
    color: red;
  }
  .international{
    width: 100px;
    display: inline-block;
    position: absolute;
    right: 95px;
  }
  .international >>> .el-input__inner{
    border: none !important;
  }
  .avatar-container {
    height: 50px;
    display: inline-block;
    position: absolute;
    right: 35px;
    .avatar-wrapper {
      cursor: pointer;
      margin-top: 5px;
      position: relative;
      .user-avatar {
        width: 40px;
        height: 40px;
        border-radius: 10px;
      }
      .el-icon-caret-bottom {
        position: absolute;
        right: -20px;
        top: 25px;
        font-size: 12px;
      }
    }
  }
}
</style>

