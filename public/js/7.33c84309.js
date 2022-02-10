(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{a6d7:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("q-page",{staticClass:"q-mt-none",staticStyle:{"background-color":"#3E444E"}},[[r("div",[r("div",[r("q-bar",{staticStyle:{"background-color":"#3E444E"}},[r("q-btn",{attrs:{dense:"",flat:"",icon:"close",color:"white"},on:{click:function(e){return t.$router.push("/dashboard/schedules")}}}),r("div",{staticClass:"text-h6 text-white"},[t._v(t._s(t.isNewPage?"Add Daily Report":"Edit Daily Report"))])],1)],1),r("div",{staticClass:"q-px-md",staticStyle:{"background-color":"#3E444E"}},[r("q-form",{ref:"dailyReportForm",staticClass:"text-center q-px-md",staticStyle:{"max-width":"400px",width:"100%",margin:"auto"},attrs:{model:t.dailyReportForm},on:{submit:t.onSubmit}},[r("q-card",{staticStyle:{"background-color":"#3E444E","box-shadow":"none"}},[r("q-card-section",{staticClass:"text-left q-py-none"},[r("span",{staticClass:"text-white"},[t._v("Date")]),r("q-input",{staticClass:"q-py-none",attrs:{dense:"",outlined:"","bg-color":"white",color:"blue-7","input-class":"text-black"},scopedSlots:t._u([{key:"append",fn:function(){return[r("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event",color:"black"}},[r("q-popup-proxy",{ref:"qDateProxy",attrs:{"transition-show":"scale","transition-hide":"scale"}},[r("q-date",{attrs:{minimal:"",mask:"DD/MM/YY ddd",color:"blue-7","first-day-of-week":"1"},on:{input:t.onDailyReportDateChanged},model:{value:t.dailyReportDate,callback:function(e){t.dailyReportDate=e},expression:"dailyReportDate"}},[r("div",{staticClass:"row items-center justify-end q-gutter-sm"},[r("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{label:"OK",color:"blue-7",flat:""},on:{click:t.onDailyReportDateChanged}})],1)])],1)],1)]},proxy:!0}]),model:{value:t.dailyReportDate,callback:function(e){t.dailyReportDate=e},expression:"dailyReportDate"}})],1),r("q-card-section",{staticClass:"text-left q-py-none"},t._l(t.dailyReportForm.report_data,(function(e,a){return r("div",{key:e.route_id,staticClass:"q-pt-md"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-6 q-pr-sm"},[r("span",{staticClass:"text-white"},[t._v("Driver")]),r("q-select",{staticClass:"q-ma-none q-pb-md",attrs:{dense:"",outlined:"","use-input":"","hide-selected":"","fill-input":"",options:t.filteredDriverNames,"option-value":function(t){return null===t?null:t},"option-label":function(t){return null===t?"- Null -":t.driver_name},"label-color":"grey-7",behavior:"menu","bg-color":"white","input-class":"text-black",rules:[function(e){return t.checkDriverDuplicates(e)||"This record is duplicated"}],"hide-dropdown-icon":!0,color:"blue-7"},on:{filter:t.filterFnDrivers,input:t.addOption},scopedSlots:t._u([{key:"append",fn:function(){return[""!==e.driver_id?r("q-icon",{staticClass:"cursor-pointer",attrs:{name:"clear"},on:{click:function(e){return t.removeSelectedDriver(a)}}}):t._e()]},proxy:!0}],null,!0),model:{value:e.driver,callback:function(r){t.$set(e,"driver",r)},expression:"data.driver"}})],1),r("div",{staticClass:"col-6 q-pl-sm"},[r("span",{staticClass:"text-white"},[t._v("Route")]),r("q-input",{staticClass:"q-pb-md",attrs:{required:"",dense:"",outlined:"","bg-color":"blue-grey-4","input-class":"text-white q-pr-xl","label-color":"grey-3",color:"blue-7",value:e.route_number,disable:""}})],1)]),r("div",{staticClass:"row"},[r("div",{staticClass:"col-6 q-pr-sm"},[r("span",{staticClass:"text-white"},[t._v("Stops")]),r("q-input",{staticClass:"q-pb-md",attrs:{dense:"",outlined:"","bg-color":"white","input-class":"text-black q-pr-xl","label-color":"grey-3",color:"blue-7"},on:{input:function(r){return t.calcPayment(e)}},model:{value:e.stops,callback:function(r){t.$set(e,"stops",r)},expression:"data.stops"}})],1),r("div",{staticClass:"col-6 q-pl-sm"},[r("span",{staticClass:"text-white"},[t._v("Payment")]),r("q-input",{staticClass:"q-pb-md",attrs:{dense:"",outlined:"","bg-color":"white","input-class":"text-black q-pr-xl","label-color":"grey-3",color:"blue-7"},model:{value:e.payment,callback:function(r){t.$set(e,"payment",r)},expression:"data.payment"}})],1)]),a<t.dailyReportForm.report_data.length-1?r("q-separator",{attrs:{color:"grey-4"}}):t._e()],1)})),0),r("q-card-section",{staticClass:"text-left q-py-none"},[r("span",{staticClass:"text-white"},[t._v("Comments")]),r("q-input",{staticClass:"q-pb-md",attrs:{dense:"",outlined:"",type:"textarea","bg-color":"white",color:"blue-7","input-class":"text-black text-left"},model:{value:t.dailyReportForm.comments,callback:function(e){t.$set(t.dailyReportForm,"comments",e)},expression:"dailyReportForm.comments"}})],1),r("q-card-actions",{attrs:{align:"center"}},[r("div",{staticClass:"q-px-md"},[t.isNewPage?t._e():r("q-btn",{staticStyle:{width:"100px",height:"40px"},attrs:{"no-caps":"",dense:"",rounded:"",label:"Delete",color:"blue-7"},on:{click:function(e){return t.removeDaily(t.dailyReportForm.report_no)}}}),t._v("  \n                "),r("q-btn",{staticStyle:{width:"100px",height:"40px"},attrs:{color:"blue-7",label:t.isNewPage?"Add":"Update","no-caps":"",dense:"",rounded:"",type:"submit"}})],1)])],1)],1),r("q-dialog",{attrs:{persistent:"","transition-show":"scale","transition-hide":"scale"},model:{value:t.showEmptyConfirm,callback:function(e){t.showEmptyConfirm=e},expression:"showEmptyConfirm"}},[r("q-card",{staticStyle:{"background-color":"#3E444E","max-width":"500px","min-width":"352px"}},[r("q-bar",{staticStyle:{"background-color":"#272B33"}},[r("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{dense:"",flat:"",icon:"close",color:"white"}},[r("q-tooltip",{attrs:{"content-class":"bg-white text-black"}},[t._v("Close")])],1)],1),r("div",[r("q-card-section",{staticClass:"text-white"},[r("div",{staticClass:"text-h6 text-center"},[t._v("You did not provide the driver name of the routes "+t._s(t.checkEmptyDrivers().join(", "))+".")]),r("div",{staticClass:"text-h6 text-center"},[t._v("Do you want to continue?")])]),r("q-card-section",{staticClass:"text-center q-pt-none"},[r("q-btn",{staticClass:"q-mt-xs q-mx-xs",staticStyle:{width:"100px",height:"40px"},attrs:{color:"blue-7",label:"Back","no-caps":"",dense:"",rounded:""},on:{click:function(e){t.showEmptyConfirm=!1}}}),r("q-btn",{staticClass:"q-mt-xs q-mx-xs",staticStyle:{width:"100px",height:"40px"},attrs:{color:"blue-7",label:"Yes","no-caps":"",dense:"",rounded:""},on:{click:t.addDailyRecords}})],1)],1)],1)],1)],1)])]],2)},o=[],n=(r("c5f6"),r("7514"),r("a34a")),i=r.n(n),s=(r("96cf"),r("c973")),c=r.n(s),l=r("f508"),d=r("bd4c"),p=r("1e53"),u={name:"NewDaily",data:function(){return{isNewPage:!1,drivers:[],dailyReportDate:"",dailyReportForm:{report_date:"",report_title:"",report_no:"",user_id:"",report_data:[],comments:""},dailyRoutes:[],filteredDriverNames:[],is_mobile:"web",showEmptyConfirm:!1,dailyCreatedAt:""}},created:function(){var t=this;return c()(i.a.mark((function e(){return i.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.$store.commit("auth/pageTitle",t.$router.currentRoute.meta.title),t.isNew(),e.next=4,t.getRNCID();case 4:if(t.isNewPage){e.next=14;break}return e.next=7,t.getDriverList(t.dailyCreatedAt);case 7:return e.next=9,t.getRegularRoutes(t.dailyCreatedAt);case 9:return e.next=11,t.getReportInfo(t.dailyReportForm.report_no);case 11:t.dailyReportDate=d["b"].formatDate(d["b"].extractDate(t.dailyReportForm.report_date,"YYYY-MM-DD"),"DD/MM/YY ddd"),e.next=21;break;case 14:return e.next=16,t.getDriverList();case 16:return e.next=18,t.getRegularRoutes();case 18:t.dailyReportDate=d["b"].formatDate(new Date,"DD/MM/YY ddd"),t.onDailyReportDateChanged(),t.dailyReportForm.report_data=t.dailyRoutes.map((function(t){return{driver_id:"",driver:{},route_id:t.id,route_number:t.route_number,stops:"",payment:"",current_paytype:"fixed"}}));case 21:case"end":return e.stop()}}),e)})))()},computed:{user:{get:function(){return this.$store.state.auth.user}},userLevel:{get:function(){return this.$store.state.auth.userLevel}}},methods:{isNew:function(){null!==this.$router.currentRoute.params.reportNo&&void 0!==this.$router.currentRoute.params.reportNo&&""!==this.$router.currentRoute.params.reportNo?(this.isNewPage=!1,this.dailyReportForm.report_no=this.$router.currentRoute.params.reportNo):this.isNewPage=!0},onDailyReportDateChanged:function(){this.dailyReportForm.report_date=d["b"].formatDate(d["b"].extractDate(this.dailyReportDate,"DD/MM/YY ddd"),"YYYY-MM-DD"),this.dailyCreatedAt=this.dailyReportForm.report_date},getRNCID:function(){var t=c()(i.a.mark((function t(){var e;return i.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p["a"].getRNCID();case 3:e=t.sent,this.rnc_id=e.data.data,t.next=9;break;case 7:t.prev=7,t.t0=t["catch"](0);case 9:case"end":return t.stop()}}),t,this,[[0,7]])})));function e(){return t.apply(this,arguments)}return e}(),getDriverList:function(){var t=c()(i.a.mark((function t(e){var r;return i.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p["a"].getDriverList(e);case 3:r=t.sent,this.drivers=r.data.data,this.filteredDriverNames=this.drivers,t.next=10;break;case 8:t.prev=8,t.t0=t["catch"](0);case 10:case"end":return t.stop()}}),t,this,[[0,8]])})));function e(e){return t.apply(this,arguments)}return e}(),getRegularRoutes:function(){var t=c()(i.a.mark((function t(e){var r;return i.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p["a"].getRegularRoutes(e);case 3:r=t.sent,this.dailyRoutes=r.data.data,t.next=9;break;case 7:t.prev=7,t.t0=t["catch"](0);case 9:case"end":return t.stop()}}),t,this,[[0,7]])})));function e(e){return t.apply(this,arguments)}return e}(),getReportInfo:function(){var t=c()(i.a.mark((function t(e){var r;return i.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return l["a"].show(),t.prev=1,t.next=4,p["a"].getReportInfo(e);case 4:r=t.sent,l["a"].hide(),this.dailyReportForm.report_date=r.data.data[0].report_date,this.dailyReportForm.report_title=r.data.data[0].report_title,this.dailyReportForm.report_no=r.data.data[0].report_no,this.dailyReportForm.comments=r.data.data[0].comments,this.dailyCreatedAt=r.data.data[0].created_at,this.dailyReportForm.report_data=r.data.data.map((function(t){var e={id:t.id,driver:t.driver,driver_id:t.driver_id,route_id:t.route_id,route_number:t.route.route_number,stops:t.stops,payment:t.payment,current_paytype:t.current_paytype};return e})),t.next=17;break;case 14:t.prev=14,t.t0=t["catch"](1),l["a"].hide();case 17:case"end":return t.stop()}}),t,this,[[1,14]])})));function e(e){return t.apply(this,arguments)}return e}(),addDailyRecords:function(){var t=this;return c()(i.a.mark((function e(){var r,a,o;return i.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.dailyReportForm.report_data=t.dailyReportForm.report_data.map((function(e){var r={};return e.driver_id?(delete e.driver,r=e):(e.id&&(r.id=e.id),r.driver_id=t.rnc_id,r.route_id=e.route_id,r.stops=e.stops,r.payment=e.payment,r.current_paytype=e.current_paytype,console.log("current paytype",e.current_paytype)),r})),r={data:t.dailyReportForm},t.isNewPage){e.next=19;break}return r.conditions={report_no:t.dailyReportForm.report_no},l["a"].show(),e.prev=5,e.next=8,p["a"].updateReport(r);case 8:a=e.sent,l["a"].hide(),console.log("result",a.data),e.next=17;break;case 13:e.prev=13,e.t0=e["catch"](5),l["a"].hide(),console.log("error",e.t0);case 17:e.next=32;break;case 19:return l["a"].show(),e.prev=20,e.next=23,p["a"].createReport(r);case 23:o=e.sent,l["a"].hide(),console.log("result",o.data),e.next=32;break;case 28:e.prev=28,e.t1=e["catch"](20),l["a"].hide(),console.log("error",e.t1);case 32:t.$router.push("/dashboard/schedules");case 33:case"end":return e.stop()}}),e,null,[[5,13],[20,28]])})))()},onSubmit:function(){var t=this;return c()(i.a.mark((function e(){return i.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.checkEmptyDrivers().length?t.showEmptyConfirm=!0:t.addDailyRecords();case 1:case"end":return e.stop()}}),e)})))()},checkDriverDuplicates:function(t){var e=this;if(t){var r=this.dailyReportForm.report_data.map((function(t){return t.driver_id}));r=r.filter((function(t,r){return""!==t&&t!==e.rnc_id}));var a=r.filter((function(e,a){return e===t.id&&r.indexOf(e)!==a}));return!(a.length>0)}return!0},checkEmptyDrivers:function(){var t=this.dailyReportForm.report_data.filter((function(t,e){return""===t.driver_id})),e=t.map((function(t){return t.route_number}));return e},removeDaily:function(t){var e=this;this.$q.dialog({title:"Confirm",message:"Are you surely remove this report?",cancel:!0,persistent:!0,color:"blue-7"}).onOk(c()(i.a.mark((function r(){var a,o;return i.a.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a={conditions:{report_no:t}},l["a"].show(),r.prev=2,r.next=5,p["a"].removeReport(a);case 5:o=r.sent,l["a"].hide(),console.log("remove result",o),e.$q.notify({color:"positive",position:"top",message:"Report is removed successfully !"}),e.$router.push("/dashboard/schedules"),r.next=15;break;case 12:r.prev=12,r.t0=r["catch"](2),l["a"].hide();case 15:case"end":return r.stop()}}),r,null,[[2,12]])})))).onCancel((function(){})).onDismiss((function(){}))},filterFnDrivers:function(t,e,r){var a=this;e((function(){if(""===t)a.filteredDriverNames=[];else{var e=t.toLowerCase();a.filteredDriverNames=a.drivers.filter((function(t){return t.driver_name.toLowerCase().indexOf(e)>-1}))}}),(function(e){if(""!==t&&e.options.length>0){var r=e.options.find((function(e){return e.driver_name.toLowerCase()===t.toLowerCase()}));r&&e.add(r)}}))},calcPayment:function(t){"per_stop"==t.current_paytype&&(Number(t.stops)?t.payment=(Number(t.stops)*Number(t.driver_payment)).toFixed(2):t.payment="")},addOption:function(t){this.dailyReportForm.report_data.map((function(e){e.driver.id===t.id&&(e.driver_id=t.id,e.driver_payment=t.pay_amount,e.payment=Number(t.pay_amount).toFixed(2),e.current_paytype=t.pay_type,"per_stop"==e.current_paytype&&Number(e.stops)&&(e.payment=(Number(e.stops)*Number(e.driver_payment)).toFixed(2)))}))},removeSelectedDriver:function(t){this.dailyReportForm.report_data[t].driver_id="",this.dailyReportForm.report_data[t].driver=""}}},m=u,h=r("2877"),v=r("9989"),y=r("d847"),f=r("9c40"),b=r("0378"),x=r("f09f"),_=r("a370"),w=r("27f9"),g=r("0016"),D=r("7cbe"),R=r("52ee"),C=r("ddd8"),q=r("eb85"),k=r("4b7e"),F=r("24e8"),N=r("05c0"),E=r("7f67"),S=r("eebe"),Y=r.n(S),$=Object(h["a"])(m,a,o,!1,null,null,null);e["default"]=$.exports;Y()($,"components",{QPage:v["a"],QBar:y["a"],QBtn:f["a"],QForm:b["a"],QCard:x["a"],QCardSection:_["a"],QInput:w["a"],QIcon:g["a"],QPopupProxy:D["a"],QDate:R["a"],QSelect:C["a"],QSeparator:q["a"],QCardActions:k["a"],QDialog:F["a"],QTooltip:N["a"]}),Y()($,"directives",{ClosePopup:E["a"]})}}]);