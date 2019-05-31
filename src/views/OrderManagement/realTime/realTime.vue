<template>
    <div id="realTime"><!--Real-Time page-->
      <div id="box">
        <book-sta id="book-sta"></book-sta>
        <book-top id="book-top"></book-top>
      </div>
      <book-line id="book-line"></book-line>
    </div>
</template>

<script>
import bookSta from './components/bookSta'
import bookTop from './components/bookTop'
import bookLine from './components/lineEchart'

export default {
  name: "real-time",
  components: {
    bookSta,
    bookTop,
    bookLine
  },
}
</script>

<style scoped>
  #box{
    width: 100%;
    height: 35%;
  }
  #book-sta,#book-top{
    box-sizing: border-box;
    width: 48%;
    margin: 1%;
    background-color: #fff;
    height: 90%;
    float: left;
  }
  #book-line{
    box-sizing: border-box;
    width: 98%;
    background-color: #fff;
    margin: 0 1% 0 1%;
    height: 63%;
  }
</style>
