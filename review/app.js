const dbObject=firebase.database().ref().child("records");function operateFormatter(e,t,a){return['<a class="delete" href="javascript:void(0)" title="delete">','<i class="operation-icon-danger fas fa-redo"></i>',"</a>  "].join("")}function reset(e){const t=firebase.database().ref("records/"+e);var a=new Date;t.update({createdAt:a,updatedAt:a,reviewDates:getReviewDates(a)})}function getReviewDates(e){let t=new Map;return[1,3,7,15,30].forEach(a=>{var r=new Date;r.setDate(e.getDate()+a),t[r]=!1}),t}dbObject.on("value",e=>{var t=e.val(),a=document.getElementById("badge"),r=0,s=[],n=new Date;for(var i in t)if(t.hasOwnProperty(i)){var o=t[i].reviewDates;for(var d in o){var c=new Date(d);n.setHours(0,0,0,0)==c.setHours(0,0,0,0)&&1!=t[i].reviewDates[d]&&(r+=1)}}function l(e,t,a){for(var r in t)if(t.hasOwnProperty(r)){var s=new Date(e),i=new Date(r),o=(i.getTime()-s.getTime())/864e5;if(a==Math.round(o))return 1==t[r]?"<i class='fas fa-check' style='color:#449d44;  padding-left: 15px'></i>":i.setHours(0,0,0,0)<n.setHours(0,0,0,0)?"<i class='fas fa-times' style='color:#d9534f; padding-left: 16px'></i>":""}}function f(e){return"<a href='https://www.leetcode.com/problems/"+e+"/'>"+e.split("-").map(e=>e[0].toUpperCase()+e.substring(1)).join(" ")+"</a>"}a.innerText=r;var v=1;for(var i in t)t.hasOwnProperty(i)&&(output={id:v,name:f(i),createdAt:t[i].createdAt.substring(0,10),day1:l(t[i].createdAt,t[i].reviewDates,1),day3:l(t[i].createdAt,t[i].reviewDates,3),day7:l(t[i].createdAt,t[i].reviewDates,7),day15:l(t[i].createdAt,t[i].reviewDates,15),day30:l(t[i].createdAt,t[i].reviewDates,30)},v+=1,s.push(output));var p=$("#table");$(function(){var e=s;p.bootstrapTable({data:e,loadingFontSize:"12px",iconSize:"sm"})}),window.operateEvents={"click .delete":function(e,t,a,r){p.bootstrapTable("remove",{field:"name",values:[a.name]}),console.log("deleting: "+a.name.split("/")[4]),reset(a.name.split("/")[4])}}});