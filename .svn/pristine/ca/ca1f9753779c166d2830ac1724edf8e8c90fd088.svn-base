<template>
  <div><!--Query page-->
    <div class="wrap">
      <datePicker class="datePicker"></datePicker>
      <dropDown1 class="dropDown" :dropDownName = "dropDownName1" :options = "options1"></dropDown1>
      <dropDown2 class="dropDown" :dropDownName = "dropDownName2" :options = "options2"></dropDown2>
      <inputBox1 class="input" :inputName = "inputName1" :inputBox = "input1"></inputBox1>
      <inputBox2 class="input" :inputName = "inputName2" :inputBox = "input2"></inputBox2>
      <dropDown6 class="dropDown" :dropDownName = "dropDownName6" :options = "options6"></dropDown6>
      <dropDown7 class="dropDown" :dropDownName = "dropDownName7" :options = "options7"></dropDown7>
      <dropDown8 class="dropDown" :dropDownName = "dropDownName8" :options = "options8"></dropDown8>
      <searchBtn class="searchBtn"></searchBtn>
    </div>
    <!--<tableBox1></tableBox1>-->
    <div class="tableWrap">
      <t1 id="t1" :tableData="t1data"></t1>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import datePicker from '@/components/DateSelect/datePicker'
import dropDown1 from '@/components/DropDown/dropDown'
import dropDown2 from '@/components/DropDown/dropDown'
import dropDown3 from '@/components/DropDown/dropDown'
import dropDown4 from '@/components/DropDown/dropDown'
import dropDown5 from '@/components/DropDown/dropDown'
import inputBox1 from '@/components/Input/inputBox'
import inputBox2 from '@/components/Input/inputBox'
import dropDown6 from '@/components/DropDown/dropDown'
import dropDown7 from '@/components/DropDown/dropDown'
import dropDown8 from '@/components/DropDown/dropDown'
import searchBtn from '@/components/Button/btn'
// import tableBox1 from '@/components/Table/table'
import t1 from './components/t1'

export default {
  name: "query",
  components: {
    datePicker,
    dropDown1,
    dropDown2,

    inputBox1,
    inputBox2,
    dropDown6,
    dropDown7,
    dropDown8,
    searchBtn,
    // tableBox1,
    t1,
  },
  data () {
    return {
      dropDownName1: 'Job Type',
      options1: [{
        value: 'Washing',
        label: 'Washing'
      }, {
        value: 'Repair',
        label: 'Repair'
      }],
      dropDownName2: 'Status',
      options2: [{
        value: 'Pending',
        label: 'Pending'
      }, {
        value: 'Executing ',
        label: 'Executing '
      }, {
        value: 'Completed ',
        label: 'Completed '
      }],

      inputName1: 'Lessor',
      input1: '',
      inputName2: 'Container Nos',
      input2: '',

      dropDownName6: 'Size',
      options6: [{
        value: '20',
        label: '20'
      }, {
        value: '40',
        label: '40'
      }, {
        value: '50',
        label: '50'
      }],
      dropDownName7: 'Type',
      options7: [{
        value: 'GP',
        label: 'GP'
      }, {
        value: 'GH',
        label: 'GH'
      }, {
        value: 'HT',
        label: 'HT'
      }, {
        value: '选项4',
        label: 'OT'
      }, {
        value: '选项5',
        label: 'RF'
      },{
        value: '选项6',
        label: 'RH'
      }, {
        value: '选项7',
        label: 'TK'
      }, {
        value: '选项8',
        label: 'FR'
      }],
      dropDownName8: 'Grade',
      options8: [{
        value: 'X',
        label: 'X'
      }, {
        value: '选项2',
        label: 'F'
      }, {
        value: '选项3',
        label: 'G'
      }, {
        value: '选项4',
        label: 'M'
      }, {
        value: '选项5',
        label: 'P'
      },{
        value: '选项1',
        label: 'B'
      }],


      t1data:[{
        JobType: 'Washing',
        Status: 'Pending',
        BeiningTime: '2018/06/07 08:00:00',
        EndingTime: '2018/06/07 18:00:00',
        OperationTime: '6',
        ContainerNos: 'TCLU1868888',
        Size: '20',
        Type: 'HC',
        Grade: 'G',
        Lessor: 'APL',
      },{
        JobType: 'Washing',
        Status: 'Pending',
        BeiningTime: '2018/06/07 08:00:00',
        EndingTime: '2018/06/07 18:00:00',
        OperationTime: '6',
        ContainerNos: 'TCLU1868888',
        Size: '20',
        Type: 'HC',
        Grade: 'G',
        Lessor: 'APL',
      },{
        JobType: 'Washing',
        Status: 'Pending',
        BeiningTime: '2018/06/07 08:00:00',
        EndingTime: '2018/06/07 18:00:00',
        OperationTime: '6',
        ContainerNos: 'TCLU1868888',
        Size: '20',
        Type: 'HC',
        Grade: 'G',
        Lessor: 'APL',
      },{
        JobType: 'Washing',
        Status: 'Pending',
        BeiningTime: '2018/06/07 08:00:00',
        EndingTime: '2018/06/07 18:00:00',
        OperationTime: '6',
        ContainerNos: 'TCLU1868888',
        Size: '20',
        Type: 'HC',
        Grade: 'G',
        Lessor: 'APL',
      },{
        JobType: 'Washing',
        Status: 'Pending',
        BeiningTime: '2018/06/07 08:00:00',
        EndingTime: '2018/06/07 18:00:00',
        OperationTime: '6',
        ContainerNos: 'TCLU1868888',
        Size: '20',
        Type: 'HC',
        Grade: 'G',
        Lessor: 'APL',
      },{
        JobType: 'Washing',
        Status: 'Pending',
        BeiningTime: '2018/06/07 08:00:00',
        EndingTime: '2018/06/07 18:00:00',
        OperationTime: '6',
        ContainerNos: 'TCLU1868888',
        Size: '20',
        Type: 'HC',
        Grade: 'G',
        Lessor: 'APL',
      },{
        JobType: 'Washing',
        Status: 'Pending',
        BeiningTime: '2018/06/07 08:00:00',
        EndingTime: '2018/06/07 18:00:00',
        OperationTime: '6',
        ContainerNos: 'TCLU1868888',
        Size: '20',
        Type: 'HC',
        Grade: 'G',
        Lessor: 'APL',
      },{
        JobType: 'Washing',
        Status: 'Pending',
        BeiningTime: '2018/06/07 08:00:00',
        EndingTime: '2018/06/07 18:00:00',
        OperationTime: '6',
        ContainerNos: 'TCLU1868888',
        Size: '20',
        Type: 'HC',
        Grade: 'G',
        Lessor: 'APL',
      },{
        JobType: 'Washing',
        Status: 'Pending',
        BeiningTime: '2018/06/07 08:00:00',
        EndingTime: '2018/06/07 18:00:00',
        OperationTime: '6',
        ContainerNos: 'TCLU1868888',
        Size: '20',
        Type: 'HC',
        Grade: 'G',
        Lessor: 'APL',
      },],

    }
  },
  mounted () {

  }
}
</script>

<style scoped>
  .wrap:before,.wrap:after {
    content: "";
    display: block;
    clear: both;
    margin-bottom: 10px;
  }
  .datePicker{
    float: left;
    margin-top: 18px;
    margin-right: 15px;
  }
  .dropDown{
    float: left;
    margin-right: 15px;
    width: 120px;
  }
  .input{
    display: block;
    float: left;
    margin-right: 15px;
    width: 120px;
  }
  .searchBtn{
    float: left;
    margin-top: 18px;
    margin-left: 20px;
  }
  .tableWrap{
    width: 100%;
    height: 700px;
  }
  #t1{
    width: 100%;
    height: 100%;
    float: left;
  }

</style>
