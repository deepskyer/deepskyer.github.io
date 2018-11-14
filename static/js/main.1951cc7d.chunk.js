(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,a){},102:function(e,t,a){},291:function(e,t,a){},293:function(e,t,a){},295:function(e,t,a){},301:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(14),o=a.n(i),l=(a(100),a(61)),s=a(7),c=a(8),u=a(10),d=a(9),h=a(11),m=a(304),p=a(302),g=a(303),f=(a(102),a(2)),b=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.nodirect()}},{key:"render",value:function(){var e=this.props,t=e.error,a=e.isLoaded,n=e.things;return t?r.a.createElement("div",null,"Error: ",t.message):a?0===n.length?r.a.createElement("div",{style:{margin:"300px auto",width:"200px"}},"No task, Please create one.",r.a.createElement(p.a,{to:"/create",onClick:this.props.onNew},r.a.createElement(f.FABButton,{colored:!0,ripple:!0,style:{position:"fixed",bottom:"20px",right:"20px"}},r.a.createElement(f.Icon,{name:"add"})))):r.a.createElement("div",{className:"task"},r.a.createElement("h4",null,"The list of all tasks."),r.a.createElement(f.DataTable,{shadow:0,rows:n.slice(0).reverse()},r.a.createElement(f.TableHeader,{name:"title",cellFormatter:function(e){return e.length>=10?e.substring(0,10)+"...":e},tooltip:"The task name"},"Task"),r.a.createElement(f.TableHeader,{name:"_id",cellFormatter:function(e){return r.a.createElement(p.a,{to:"/task/"+e},"Check")},tooltip:"The details of the task."},"Details"),r.a.createElement(f.TableHeader,{numeric:!0,name:"content",tooltip:"Content Prview"},"Content"),r.a.createElement(f.TableHeader,{numeric:!0,name:"rating",tooltip:"rating"},"Rating")),r.a.createElement(p.a,{to:"/create",onClick:this.props.onNew},r.a.createElement(f.FABButton,{colored:!0,ripple:!0,style:{position:"fixed",bottom:"20px",right:"20px"}},r.a.createElement(f.Icon,{name:"add"})))):r.a.createElement("div",{style:{margin:"300px auto",width:"200px"}},r.a.createElement(f.Spinner,null))}}]),t}(n.Component),E=a(92),v=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(u.a)(this,Object(d.a)(t).call(this))).state={error:null,isLoaded:!1,things:[],good:0,bad:0,unrated:0,limit:10},e}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://floating-bastion-48526.herokuapp.com/api/tasks").then(function(e){return e.json()}).then(function(t){e.setState({isLoaded:!0,things:t,good:t.filter(function(e){return e.rating>=3}).length,bad:t.filter(function(e){return e.rating<3&&0!==e.rating&&null!==e.rating}).length,unrated:t.filter(function(e){return null===e.rating}).length,limit:t.length})},function(t){e.setState({isLoaded:!0,error:t})})}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.isLoaded,n=e.things,i=e.good,o=e.bad,l=e.unrated,s={labels:["Good","Bad","Unrated"],datasets:[{label:"My tasks",backgroundColor:"rgba(255, 255, 255, 1)",borderColor:"rgba(255, 255, 255, 1)",borderWidth:0,hoverBackgroundColor:"rgba(255, 255, 255, 0.9)",hoverBorderColor:"rgba(255, 255, 255, 0.9)",data:[i,o,l]}]},c={scales:{yAxes:[{ticks:{beginAtZero:!0,fontSize:13,fontColor:"#fff",min:0,max:this.state.limit},gridLines:{display:!1}}],xAxes:[{ticks:{beginAtZero:!0,fontSize:13,fontColor:"#fff",min:0,max:6},gridLines:{display:!1}}]},layout:{padding:{left:10,right:0,top:0,bottom:0}},legend:{labels:{fontColor:"#fff"}},title:{fontColor:"#fff"}};return t?r.a.createElement("div",null,"Error: ",t.message):a?r.a.createElement("div",{style:{width:"80%",margin:"30px auto"}},r.a.createElement("h4",null,"This is an assessment of tasks"),r.a.createElement(f.Card,{shadow:0,style:{margin:"auto"}},r.a.createElement(f.CardTitle,{expand:!0,style:{color:"#fff",background:"#4a148c"}},r.a.createElement("div",{className:"barChart"},r.a.createElement(E.a,{data:s,width:50,height:50,options:c}))),r.a.createElement(f.CardText,{style:{textAlign:"left",height:"120px"}},"There are ",i," good tasks, there are ",o," bad tasks and ",l," unrated tasks.",r.a.createElement("br",null),r.a.createElement("h3",{style:{weight:"bold",color:"#000"}},n.length," Tasks"),r.a.createElement("br",null)))):r.a.createElement("div",{style:{margin:"300px auto",width:"200px"}},r.a.createElement(f.Spinner,null))}}]),t}(n.Component),k=a(23),C=(a(291),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={rating:"",message:a.props.rating?"Rated "+a.props.rating:"Not rate yet.",title:a.props.title,content:a.props.content,toTasklist:!1,style:{color:"black"}},a.handleChange=a.handleChange.bind(Object(k.a)(Object(k.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(k.a)(Object(k.a)(a))),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){null!==this.props.rating&&""!==this.props.rating||this.setState({style:{backgroundColor:"#ff2d70",color:"white"}})}},{key:"handleChange",value:function(e){this.setState({rating:e.target.value,style:{backgroundColor:"#eec168",color:"Black"},message:"Please save your rating."})}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),null===this.props.rating&&this.props.onRead(this.state.rating),this.setState({message:"You saved the rating to "+this.state.rating+".",style:{backgroundColor:"#6eb544",color:"white"}}),fetch("https://floating-bastion-48526.herokuapp.com/api/tasks/"+this.props.id,{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({title:this.state.title,content:this.state.content,rating:this.state.rating})}).then(function(e){return e.json()}).then(function(e){t.props.onUpdate(e)})}},{key:"render",value:function(){return r.a.createElement("div",{className:"rating"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("label",null,"Rate: "),r.a.createElement("input",{type:"radio",name:"pain",value:"1",defaultChecked:1===this.props.rating,onChange:this.handleChange}),"1",r.a.createElement("input",{type:"radio",name:"pain",value:"2",defaultChecked:2===this.props.rating,onChange:this.handleChange}),"2",r.a.createElement("input",{type:"radio",name:"pain",value:"3",defaultChecked:3===this.props.rating,onChange:this.handleChange}),"3",r.a.createElement("input",{type:"radio",name:"pain",value:"4",defaultChecked:4===this.props.rating,onChange:this.handleChange}),"4",r.a.createElement("input",{type:"radio",name:"pain",value:"5",defaultChecked:5===this.props.rating,onChange:this.handleChange}),"5",r.a.createElement(f.Button,{colored:!0},"Save")),r.a.createElement("br",null),r.a.createElement(f.Chip,{style:this.state.style},this.state.message)," ",r.a.createElement("br",null),r.a.createElement("br",null))}}]),t}(r.a.Component)),y=(a(293),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={error:null,isLoaded:!1,things:e.things,unrated:e.things.filter(function(e){return null===e.rating}).length},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentWillUnmount",value:function(){this.setState({things:[],unrated:0})}},{key:"componentDidMount",value:function(){var e=this;fetch("https://floating-bastion-48526.herokuapp.com/api/tasks").then(function(e){return e.json()}).then(function(t){e.setState({isLoaded:!0,things:t,unrated:t.filter(function(e){return null===e.rating}).length})},function(t){e.setState({isLoaded:!0,error:t})})}},{key:"render",value:function(){var e=this,t=this.state,a=t.error,n=t.isLoaded,i=t.things;if(a)return r.a.createElement("div",null,"Error: ",a.message);if(n){var o=this.props.onRead;return r.a.createElement("div",{className:"feedback",style:{width:"90%",margin:"auto"}},r.a.createElement("div",{style:{marginTop:"30px"}},r.a.createElement(f.Grid,null,i.slice(0).reverse().map(function(t){return r.a.createElement(f.Cell,{key:t._id,col:3},r.a.createElement(f.Card,{shadow:0,style:{width:"320px",height:"350px",margin:"15px"}},r.a.createElement(f.CardTitle,{expand:!0,style:{color:"#fff",background:"#4a148c"}},r.a.createElement(f.Icon,{name:"assignment",style:{marginRight:"9px"}}),t.title.length>=30?t.title.substring(0,30)+"...":t.title),r.a.createElement(f.CardText,{style:{color:"#565656",background:"#fff",textAlign:"left",height:"120px"}},t.content.length>=290?t.content.substring(0,290)+"...":t.content),r.a.createElement(f.CardActions,{border:!0},r.a.createElement(C,{name:t.title,rating:t.rating,id:t._id,title:t.title,content:t.content,onUpdate:e.props.onUpdate,onRead:o}))))}))))}return r.a.createElement("div",{style:{margin:"300px auto",width:"200px"}},r.a.createElement(f.Spinner,null))}}]),t}(n.Component)),j=a(305),w=(a(295),a(94)),O=a.n(w),T=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.toTasklist,a=e.onAdd,n=e.onTitleChange,i=e.onContentChange;return!0===t?r.a.createElement(j.a,{to:"/"}):r.a.createElement("div",{className:"welcome"},r.a.createElement(f.Card,{shadow:0,style:{margin:"auto"}},r.a.createElement(f.CardTitle,{style:{color:"#fff",height:"176px",background:"url(".concat(O.a,") left / cover")}},"New task"),r.a.createElement(f.CardText,null,"Please add a new task to review."),r.a.createElement("form",{id:"task",onSubmit:a},r.a.createElement(f.Textfield,{onChange:n,label:"Task Name",style:{width:"200px"}}),r.a.createElement("br",null),r.a.createElement(f.Textfield,{onChange:i,label:"Task Content",rows:3,style:{width:"200px"}}),r.a.createElement("br",null)),r.a.createElement(f.CardActions,null,r.a.createElement(f.Button,{raised:!0,colored:!0,type:"submit",form:"task",value:"Submit"},"Add")),r.a.createElement("br",null)))}}]),t}(n.Component),x=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(u.a)(this,Object(d.a)(t).call(this))).reviewHandler=function(t){e.setState({toReview:!0})},e.state={error:null,isLoaded:!1,thing:null,toReview:!1},e}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,t="https://floating-bastion-48526.herokuapp.com/api/tasks/"+this.props.match.params.id;fetch(t).then(function(e){return e.json()}).then(function(t){e.setState({isLoaded:!0,thing:t})},function(t){e.setState({isLoaded:!0,error:t})})}},{key:"render",value:function(){var e=this,t=this.state,a=t.error,n=t.isLoaded,i=t.thing,o=t.toReview;return this.props.toTasklist?r.a.createElement(j.a,{to:"/"}):o?r.a.createElement(j.a,{to:"/review"}):a?r.a.createElement("div",null,"Error: ",a.message):n?r.a.createElement("div",{className:"taskview"},r.a.createElement("h1",null,i.title),r.a.createElement("h4",null,"Created At: ",i.createdAt.substring(0,10)),r.a.createElement("h4",null,"Rating: ",i.rating),r.a.createElement("br",null),r.a.createElement("p",null,i.content),r.a.createElement("hr",null),r.a.createElement(f.Button,{onClick:function(){return e.props.onDelete(i)},raised:!0,ripple:!0,accent:!0},"Delete")," ",r.a.createElement(f.Button,{onClick:this.reviewHandler,raised:!0,colored:!0,ripple:!0,style:{marginLeft:"10px"}},"Review")):r.a.createElement("div",null,"Loading...")}}]),t}(r.a.Component),S=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(u.a)(this,Object(d.a)(t).call(this))).onRead=function(){e.setState({unrated:e.state.unrated-1})},e.updateRating=function(t){console.log(t);var a=e.state.things.filter(function(e){return e._id!==t._id});console.log("remain",a),e.setState({things:Object(l.a)(a).concat([t])})},e.handleDirect=function(t){e.setState({toTasklist:!1})},e.handleDelete=function(t){null===t.rating&&e.onRead();var a=e.state.things.filter(function(e){return e._id!==t._id});e.setState({toTasklist:!0,things:a}),fetch("https://floating-bastion-48526.herokuapp.com/api/tasks/"+t._id,{method:"DELETE"})},e.handleAdd=function(t){t.preventDefault(),fetch("https://floating-bastion-48526.herokuapp.com/api/tasks/",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({title:e.state.title,content:e.state.content})}).then(function(e){return e.json()}).then(function(t){var a=Object(l.a)(e.state.things).concat([t]);e.setState({isLoaded:!0,things:a,unrated:a.filter(function(e){return null===e.rating}).length,toTasklist:!0})})},e.handleTitleChange=function(t){e.setState({title:t.target.value})},e.handleContentChange=function(t){e.setState({content:t.target.value})},e.state={error:null,unrated:null,title:null,content:null,toTasklist:!1,isLoaded:!1,things:[]},e}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentWillUnmount",value:function(){this.setState({toTasklist:!1})}},{key:"componentDidMount",value:function(){var e=this;fetch("https://floating-bastion-48526.herokuapp.com/api/tasks").then(function(e){return e.json()}).then(function(t){e.setState({isLoaded:!0,things:t,unrated:t.filter(function(e){return null===e.rating}).length})},function(t){e.setState({isLoaded:!0,error:t})})}},{key:"render",value:function(){var e=this,t=this.state,a=t.error,n=t.isLoaded,i=t.unrated,o=t.toTasklist,l=t.things,s=t.title,c=t.content;return r.a.createElement(m.a,null,r.a.createElement("div",{className:"Nav"},r.a.createElement(f.Layout,null,r.a.createElement(f.Header,{title:"{ Tasks Review }",style:{color:"#fff",background:"#1e2c39"},scroll:!0},r.a.createElement(f.Navigation,null,r.a.createElement(p.a,{to:"/"},"Home"),r.a.createElement(p.a,{to:"/create"},"Create"),r.a.createElement(p.a,{to:"/review"},r.a.createElement(f.Badge,{text:null===this.state.unrated||0===this.state.unrated?null:this.state.unrated},"Review")),r.a.createElement(p.a,{to:"/statistic"},r.a.createElement(f.Icon,{name:"assessment",style:{marginRight:10}}),"Statistic"))),r.a.createElement(f.Drawer,{title:"{ Tasks Review }"},r.a.createElement(f.Navigation,null,r.a.createElement(p.a,{to:"/"},"Home"),r.a.createElement(p.a,{to:"/create"},"Create"),r.a.createElement(p.a,{to:"/review"},r.a.createElement(f.Badge,{text:null===this.state.unrated||0===this.state.unrated?null:this.state.unrated},"Review")),r.a.createElement(p.a,{to:"/statistic"},"Statistic"))),r.a.createElement(g.a,{exact:!0,path:"/",render:function(t){return r.a.createElement(b,Object.assign({},t,{error:a,isLoaded:n,things:l,toTasklist:o,nodirect:e.handleDirect}))}}),r.a.createElement(g.a,{path:"/create",render:function(t){return r.a.createElement(T,Object.assign({},t,{error:a,isLoaded:n,title:s,content:c,things:l,toTasklist:o,onAdd:e.handleAdd,onTitleChange:e.handleTitleChange,onContentChange:e.handleContentChange}))}}),r.a.createElement(g.a,{path:"/review",render:function(t){return r.a.createElement(y,Object.assign({},t,{unrated:i,things:l,onRead:e.onRead,onUpdate:e.updateRating}))}}),r.a.createElement(g.a,{path:"/statistic",component:v}),r.a.createElement(g.a,{path:"/task/:id",render:function(t){return r.a.createElement(x,Object.assign({},t,{onDelete:e.handleDelete,things:l,toTasklist:o}))}}))))}}]),t}(n.Component);a(298),a(300),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(S,null),document.getElementById("root"),document.querySelector("#app")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},94:function(e,t,a){e.exports=a.p+"static/media/welcome_card.7edb812a.jpg"},95:function(e,t,a){e.exports=a(301)}},[[95,2,1]]]);
//# sourceMappingURL=main.1951cc7d.chunk.js.map