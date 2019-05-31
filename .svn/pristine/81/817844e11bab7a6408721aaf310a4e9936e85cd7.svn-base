<template>
    <div>
      <div class="box" :style="boxStyle">
        <div :id="boxNum.id" class="boxNum" :style="boxNum.style">
          {{boxNum.text}}
          <span :style="boxNum.span">mins</span>
        </div>
        <div :id="boxTitle.id" class="boxTitle" :style="boxTitle.style">{{boxTitle.text}}</div>
      </div>
    </div>
</template>

<script>
export default {
  name: "data-box",
  props: {
    boxStyle: {
      // width: String,
      // height: String,
      border: String
    },
    boxNum: {
      id: String,
      text: String,
      style: {
        background: String,
      },
      span: {
        display: String
      }
    },
    boxTitle: {
      id: String,
      text: String,
      style: {
        color: String
      }
    },
  }

}
</script>

<style scoped>
  .box{
    width: 100%;
    height: 100%;
    font-weight: bold;
    float: left;
    margin-right: 10px;
    border-radius: 3px;
  }
  .boxNum{
    width: 100%;
    height: 82%;
    color: #fff;
    font-size: 36px;
    text-align: center;
    /*background-color: blue;*/
    display:flex;
    align-items:center;
    justify-content:center;
  }
  .boxNum>span{
    font-size: 16px;
    position: relative;
    top: 15px;
    left: 7px;
  }
  .boxTitle{
    width: 100%;
    height: 18%;
    padding-left: 5%;
    font-size: 16px;
    background-color: #fff;
    /*color: blue;*/
    display:flex;
    align-items:center;
  }
</style>
