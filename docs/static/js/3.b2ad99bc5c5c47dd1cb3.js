webpackJsonp([3,16,17,28],{"0JLb":function(t,n,o){var a=o("dZZs");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);o("rjj0")("2bbb6460",a,!0)},B3U0:function(t,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=o("xcDW"),e=o("Q03R"),r=o("ftUN"),s=o("PzwF"),i={name:"order-manage",components:{btn:a.a,realTime:e.default,statistics:r.default,query:s.default},data:function(){return{btnStatus:{showRealTimeStatus:!0,showStatisticsStatus:!1,showQueryStatus:!1}}},mounted:function(){this.$nextTick(function(){})},computed:{},methods:{handleBtnStattus:function(t){this.btnStatus=t}}},l={render:function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{attrs:{id:"orderManage"}},[o("btn",{attrs:{id:"btn"},on:{btnStattus:t.handleBtnStattus}}),t._v(" "),t.btnStatus.showRealTimeStatus?o("real-time",{attrs:{id:"realTime"}}):t._e(),t._v(" "),t.btnStatus.showStatisticsStatus?o("statistics"):t._e(),t._v(" "),t.btnStatus.showQueryStatus?o("query"):t._e()],1)},staticRenderFns:[]};var d=o("VU/8")(i,l,!1,function(t){o("yZmE")},"data-v-6dda58cb",null);n.default=d.exports},EMP2:function(t,n,o){(t.exports=o("FZ+f")(!1)).push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},PzwF:function(t,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=o("tmRj"),e=o("WKRI"),r=o("966E"),s=o("uYxI"),i={name:"query",components:{dropDown1:a.a,dropDown2:a.a,dropDown3:a.a,dropDown4:a.a,dropDown5:a.a,inputBox1:e.a,inputBox2:e.a,dropDown6:a.a,dropDown7:a.a,dropDown8:a.a,dropDown9:a.a,searchBtn:r.a,t1:s.default},data:function(){return{dropDownName1:"Unit",options1:[],dropDownName2:"Block",options2:[],dropDownName3:"Slot",options3:[],dropDownName4:"Row",options4:[],dropDownName5:"Tier",options5:[],inputName1:"Lessor",input1:"",inputName2:"Container Nos",input2:"",dropDownName6:"Size",options6:[{value:"20",label:"20"},{value:"40",label:"40"},{value:"50",label:"50"}],dropDownName7:"Type",options7:[{value:"GP",label:"GP"},{value:"GH",label:"GH"},{value:"HT",label:"HT"},{value:"选项4",label:"OT"},{value:"选项5",label:"RF"},{value:"选项6",label:"RH"},{value:"选项7",label:"TK"},{value:"选项8",label:"FR"}],dropDownName8:"Grade",options8:[{value:"X",label:"X"},{value:"选项2",label:"F"},{value:"选项3",label:"G"},{value:"选项4",label:"M"},{value:"选项5",label:"P"},{value:"选项1",label:"B"}],dropDownName9:"Container Status",options9:[{value:"AV",label:"AV"},{value:"选项2",label:"WASHING"},{value:"选项3",label:"DW/DM"},{value:"选项4",label:"TBC"}],t1data:[{Unit:"Unit-1",Block:"Block-1",Slot:"1",Row:"2",Tier:"6",Lessor:"APL",ContainerNos:"TCLU1868888",Size:"20",Type:"HC",Grade:"G",ContainerStatus:"AV",StorageTime:"2018/06/07 08:00:00"},{Unit:"Unit-1",Block:"Block-1",Slot:"1",Row:"2",Tier:"6",Lessor:"APL",ContainerNos:"TCLU1868888",Size:"20",Type:"HC",Grade:"G",ContainerStatus:"AV",StorageTime:"2018/06/07 08:00:00"},{Unit:"Unit-1",Block:"Block-1",Slot:"1",Row:"2",Tier:"6",Lessor:"APL",ContainerNos:"TCLU1868888",Size:"20",Type:"HC",Grade:"G",ContainerStatus:"AV",StorageTime:"2018/06/07 08:00:00"},{Unit:"Unit-1",Block:"Block-1",Slot:"1",Row:"2",Tier:"6",Lessor:"APL",ContainerNos:"TCLU1868888",Size:"20",Type:"HC",Grade:"G",ContainerStatus:"AV",StorageTime:"2018/06/07 08:00:00"},{Unit:"Unit-1",Block:"Block-1",Slot:"1",Row:"2",Tier:"6",Lessor:"APL",ContainerNos:"TCLU1868888",Size:"20",Type:"HC",Grade:"G",ContainerStatus:"AV",StorageTime:"2018/06/07 08:00:00"},{Unit:"Unit-1",Block:"Block-1",Slot:"1",Row:"2",Tier:"6",Lessor:"APL",ContainerNos:"TCLU1868888",Size:"20",Type:"HC",Grade:"G",ContainerStatus:"AV",StorageTime:"2018/06/07 08:00:00"},{Unit:"Unit-1",Block:"Block-1",Slot:"1",Row:"2",Tier:"6",Lessor:"APL",ContainerNos:"TCLU1868888",Size:"20",Type:"HC",Grade:"G",ContainerStatus:"AV",StorageTime:"2018/06/07 08:00:00"}]}},mounted:function(){}},l={render:function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",[o("div",{staticClass:"wrap"},[o("dropDown1",{staticClass:"dropDown",attrs:{dropDownName:t.dropDownName1,options:t.options1}}),t._v(" "),o("dropDown2",{staticClass:"dropDown",attrs:{dropDownName:t.dropDownName2,options:t.options2}}),t._v(" "),o("dropDown3",{staticClass:"dropDown",attrs:{dropDownName:t.dropDownName3,options:t.options3}}),t._v(" "),o("dropDown4",{staticClass:"dropDown",attrs:{dropDownName:t.dropDownName4,options:t.options4}}),t._v(" "),o("dropDown5",{staticClass:"dropDown",attrs:{dropDownName:t.dropDownName5,options:t.options5}})],1),t._v(" "),o("div",{staticClass:"wrap"},[o("inputBox1",{staticClass:"input",attrs:{inputName:t.inputName1,inputBox:t.input1}}),t._v(" "),o("inputBox2",{staticClass:"input",attrs:{inputName:t.inputName2,inputBox:t.input2}}),t._v(" "),o("dropDown6",{staticClass:"dropDown",attrs:{dropDownName:t.dropDownName6,options:t.options6}}),t._v(" "),o("dropDown7",{staticClass:"dropDown",attrs:{dropDownName:t.dropDownName7,options:t.options7}}),t._v(" "),o("dropDown8",{staticClass:"dropDown",attrs:{dropDownName:t.dropDownName8,options:t.options8}}),t._v(" "),o("dropDown9",{staticClass:"dropDown",attrs:{dropDownName:t.dropDownName9,options:t.options9}}),t._v(" "),o("searchBtn",{staticClass:"searchBtn"})],1),t._v(" "),o("div",{staticClass:"tableWrap"},[o("t1",{attrs:{id:"t1",tableData:t.t1data}})],1)])},staticRenderFns:[]};var d=o("VU/8")(i,l,!1,function(t){o("Q7RI")},"data-v-1d9432a3",null);n.default=d.exports},Q03R:function(t,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=o("pvze"),e=o("hJri"),r=o("gz8e"),s=o("mYjM"),i=o("tBLo"),l={name:"real-time",components:{block:a.default,slotBtn:e.default,pieCharts:r.default,linChart:s.default,slotBlocks:i.default},data:function(){return{slotStatus:{showChartDiv:!0,showSlotDiv:!1}}},methods:{handleSlotStatus:function(t){this.slotStatus=t}}},d={render:function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",[o("block"),t._v(" "),o("slotBtn",{on:{slotStatus:t.handleSlotStatus}}),t._v(" "),t.slotStatus.showChartDiv?o("div",[o("pieCharts"),t._v(" "),o("linChart")],1):t._e(),t._v(" "),t.slotStatus.showSlotDiv?o("div",[o("slotBlocks")],1):t._e()],1)},staticRenderFns:[]};var p=o("VU/8")(l,d,!1,function(t){o("orjz")},"data-v-d3b4b628",null);n.default=p.exports},Q7RI:function(t,n,o){var a=o("VAs0");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);o("rjj0")("40cce680",a,!0)},VAs0:function(t,n,o){(t.exports=o("FZ+f")(!1)).push([t.i,'\n.wrap[data-v-1d9432a3]:before,.wrap[data-v-1d9432a3]:after {\n  content: "";\n  display: block;\n  clear: both;\n  margin-bottom: 10px;\n}\n.dropDown[data-v-1d9432a3]{\n  float: left;\n  margin-right: 15px;\n  width: 120px;\n}\n.input[data-v-1d9432a3]{\n  display: block;\n  float: left;\n  margin-right: 15px;\n  width: 120px;\n}\n.searchBtn[data-v-1d9432a3]{\n  float: left;\n  margin-top: 18px;\n  margin-left: 20px;\n}\n.tableWrap[data-v-1d9432a3]{\n  width: 100%;\n  height: 700px;\n}\n#t1[data-v-1d9432a3]{\n  width: 100%;\n  height: 100%;\n  float: left;\n}\n\n',""])},dZZs:function(t,n,o){(t.exports=o("FZ+f")(!1)).push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},ftUN:function(t,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=o("vlAj"),e=o("gVYK"),r=o("z9aN"),s={name:"statistics",components:{date:a.a,chartByMonth:e.default,chartByYear:r.default,date2:a.a}},i={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("date",{attrs:{id:"date"}}),this._v(" "),n("chartByMonth"),this._v(" "),n("date2"),this._v(" "),n("chartByYear")],1)},staticRenderFns:[]};var l=o("VU/8")(s,i,!1,function(t){o("0JLb")},"data-v-c813dda2",null);n.default=l.exports},kqUG:function(t,n,o){(t.exports=o("FZ+f")(!1)).push([t.i,"\n#orderManage[data-v-6dda58cb]{\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  position: relative;\n  padding: 1%;\n  overflow-x: hidden;\n  width: 100%;\n  /*height: 57.5rem;*/\n  height: 61rem;\n}\n#btn[data-v-6dda58cb]{\n  position: absolute;\n  top: 5px;\n  right: 3%;\n}\n#realTime[data-v-6dda58cb]{\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  background-color: #E9EEF1;\n  margin-top: 2rem;\n  width: 100%;\n  height: 95%;\n}\n\n",""])},orjz:function(t,n,o){var a=o("EMP2");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);o("rjj0")("fe4060b6",a,!0)},yZmE:function(t,n,o){var a=o("kqUG");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);o("rjj0")("3a40380e",a,!0)}});