import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import tagsView from './modules/tagsView'
import user from './modules/user'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    tagsView,
    user
  },
  getters,
  state: {
    // btnStattus : {
    //   showRealTimeStatus: true,
    //   showStatisticsStatus: false,
    //   showQueryStatus: false,
    // },

    lang: localStorage.getItem('lang') || 'en'
  },
  actions: {
    // changeBtnStattus(ctx,btnStattus){
    //   ctx.commit('changeBtnStattus',btnStattus)
    // }

    setLang(ctx,lang){
      ctx.commit('setLang',lang)
    }
  },
  mutations: {
    // changeBtnStattus(state,btnStattus){
    //   state.btnStattus = {}
    //   state.btnStattus = btnStattus
    //   // console.log(btnStattus,'btnStattus')
    //   // console.log(state.btnStattus,'state.btnStattus')
    // },

    setLang(state,lang){
      localStorage.setItem('lang', lang)
      console.log(localStorage.getItem('lang'),'localStorage.lang')
    }
  }
})

export default store
