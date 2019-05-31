<template>
  <div>
    <span class="curInventory">Current Inventory:12000/14476</span>
    <div class="wrap">
      <div class="eachWrap">
        <div class="blocksWrap">
          <div class="blocks">
            <div class="block">BLOCK-1<br>800/1120</div>
            <div class="block">BLOCK-2<br>800/1120</div>
          </div>
          <div class="blocks">
            <div class="block">BLOCK-3<br>800/1120</div>
            <div class="block">BLOCK-4<br>800/1120</div>
          </div>
        </div>
        <div class="unit">UNIT-1（1600/2000）</div>
      </div>
      <div class="eachWrap">
        <div class="blocksWrap">
          <div class="blocks">
            <div class="block">BLOCK-5<br>800/1120</div>
            <div class="block">BLOCK-6<br>800/1120</div>
          </div>
          <div class="blocks">
            <div class="block">BLOCK-7<br>800/1120</div>
            <div class="block">BLOCK-8<br>800/1120</div>
          </div>
        </div>
        <div class="unit">UNIT-2（1600/2000）</div>
      </div>
      <div class="eachWrap">
        <div class="blocksWrap">
          <div class="blocks">
            <div class="block">BLOCK-9<br>800/1120</div>
            <div class="block">BLOCK-10<br>800/1120</div>
          </div>
          <div class="blocks">
            <div class="block">BLOCK-11<br>800/1120</div>
            <div class="block">BLOCK-12<br>800/1120</div>
          </div>
        </div>
        <div class="unit">UNIT-3（1600/2000）</div>
      </div>
      <div class="eachWrap">
        <div class="blocksWrap">
          <div class="blocks">
            <div class="block">BLOCK-13<br>800/1120</div>
            <div class="block">WASHING</div>
          </div>
          <div class="blocks">
            <div class="block">BLOCK-15<br>800/1120</div>
            <div class="block">REPAIR</div>
          </div>
        </div>
        <div class="unit">UNIT-4（1600/2000）</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "block",
  data () {
    return {
      blockData: {
        block1 : {
          name: 'BLOCK-1',
          value: '800/1120'
        }
      }
    }
  }
}
</script>

<style scoped>
  .curInventory{
    display: block;
    height: 30px;
    font-size: 18px;
    line-height: 30px;
  }
  .wrap{
    width: 100%;
    height: 270px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    border: 1px solid #333;
    border-bottom: none;
  }
  .eachWrap{
    width: 25%;
    height: 100%;
  }
  .eachWrap+.eachWrap{
    border-left: 1px solid #333;
  }
  .blocksWrap{
    width: 100%;
    height: 66.66%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #333;
  }
  .blocks{
    width: 50%;
    height: 100%;
  }
  .blocks+.blocks{
    border-left: 1px dashed #333;
  }
  .unit{
    width: 100%;
    height: 33.33%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .block{
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .block+.block{
    border-top: 1px dashed #333;
  }

</style>
