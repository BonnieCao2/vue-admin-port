<template>
    <div>
      <div class="blockWrap">
        <div class="blocks">
          <div class="block">Block-1</div>
          <div class="block">
            <span>Block-2</span>
            <div class="ftWrap">
              <div v-for="(item,index) of box" :style="btnWidth(item.size)">
                <el-tooltip placement="top" effect="light" style="width: 100%">
                  <div slot="content">
                    箱号：{{item.boxNo}}<br/>
                    客户编码：{{item.code}}<br/>
                    尺寸：{{item.size}}<br/>
                    箱型：{{item.kind}}<br/>
                    等级：{{item.level}}<br/>
                    箱状态：{{item.status}}<br/>
                    箱门方向：{{item.direction}}<br/>
                    存入时间：{{item.time}}<br/>
                  </div>
                  <el-button @click = "showBox(item)" :type="btnColor(item.size)">
                    TCLU1868888
                    <div class="boxTip" v-if="item.show">
                      存箱预约单号：<br/>
                      存箱车牌号：<br/>
                      时间：<br/>
                      事项：<br/>
                      入库：<br/>
                      出库：<br/>
                      清洗维修：<br/>
                      移库：<br/>
                    </div>
                  </el-button>
                </el-tooltip>
              </div>
          </div>
            <div></div>
          </div>
        </div>
        <div class="blocks">
          <div class="block">Block-3</div>
          <div class="block">Block-4</div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "slot-block",
  data () {
    return {
      box: [
        {
          boxNo: 'TCLU1868881',
          code: 'APL',
          size: '20',
          kind: 'HC',
          level: 'X',
          status: 'AV',
          direction: 'Left',
          time: '2018/3/8 10:10:10',
          show: false
        },
        {
          boxNo: 'TCLU1868882',
          code: 'APL',
          size: '40',
          kind: 'HC',
          level: 'X',
          status: 'AV',
          direction: 'Left',
          time: '2018/3/8 10:10:10',
          show: false
        },{
          boxNo: 'TCLU1868881',
          code: 'APL',
          size: '20',
          kind: 'HC',
          level: 'X',
          status: 'AV',
          direction: 'Left',
          time: '2018/3/8 10:10:10',
          show: false
        },
        {
          boxNo: 'TCLU1868883',
          code: 'APL',
          size: '45',
          kind: 'HC',
          level: 'X',
          status: 'AV',
          direction: 'Left',
          time: '2018/3/8 10:10:10',
          show: false
        },{
          boxNo: 'TCLU1868881',
          code: 'APL',
          size: '20',
          kind: 'HC',
          level: 'X',
          status: 'AV',
          direction: 'Left',
          time: '2018/3/8 10:10:10',
          show: false
        },
      ],
      flag: true,
      boxStatus: false,
    }
  },
  mounted () {

  },
  methods: {
    showBox (item) {
      // console.log(item)
      item.show = !item.show;
    },
    btnColor (size) {
      if(size){
        if(size == '20'){
          return 'primary'
        }else if(size == '40'){
          return 'success'
        }else if(size == '45'){
          return 'warning'
        }
      }
    },

    btnWidth (size) {
      if(size){
        if(size == '20'){
          return 'float: left; width: 25%;'
        }else if(size == '40'){
          return 'float: left; width: 50%;'
        }else if(size == '45'){
          return 'float: left; width: 75%;'
        }
      }
    }
  }

}
</script>

<style scoped>
  .blockWrap{
    width: 1000px;
    height: 500px;
    border: 1px solid #333;
    display: flex;
    justify-content: center;
  }
  .blocks{
    width: 50%;
    height: 100%;
  }
  .blocks+.blocks{
    border-left: 1px solid #333;
  }
  .block{
    width: 100%;
    height: 50%;
    font-size: 16px;
  }
  .block+.block{
    border-top: 1px solid #333;
  }
  .elBtn{
    position: relative
  }
  .boxTip{
    width: 200px;
    height: 200px;
    position: absolute;
    background-color: #fff;
    border-radius: 3px;
    box-shadow: 0 0 1px 1px #333;
    font-size: 12px;
    color: #333;
    line-height: 20px;
    z-index: 1;
  }
</style>
