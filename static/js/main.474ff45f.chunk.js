(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{128:function(e,t,a){e.exports=a.p+"static/media/welcome_card.7edb812a.jpg"},129:function(e,t,a){e.exports=a(418)},134:function(e,t,a){},136:function(e,t,a){},325:function(e,t,a){},327:function(e,t,a){},413:function(e,t,a){},418:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(14),i=a.n(o),l=(a(134),a(9)),s=a(10),c=a(13),u=a(11),d=a(12),h=a(422),m=a(419),p=a(421),f=(a(136),a(3)),g=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).state={error:null,isLoaded:!1,things:[]},e}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentWillUnmount",value:function(){this.isCancelled=!0}},{key:"componentDidUpdate",value:function(){var e=this;fetch("https://floating-bastion-48526.herokuapp.com/api/tasks",{mode:"cors"}).then(function(e){return e.json()}).then(function(t){!e.isCancelled&&e.setState({isLoaded:!0,things:t})},function(t){e.setState({isLoaded:!0,error:t})})}},{key:"componentDidMount",value:function(){var e=this;fetch("https://floating-bastion-48526.herokuapp.com/api/tasks",{mode:"cors"}).then(function(e){return e.json()}).then(function(t){e.setState({isLoaded:!0,things:t})},function(t){e.setState({isLoaded:!0,error:t})})}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.isLoaded,n=e.things;return t?r.a.createElement("div",null,"Error: ",t.message):a?r.a.createElement("div",{className:"task"},r.a.createElement("h4",null,"This is the list of all task"),r.a.createElement(f.DataTable,{shadow:0,rows:n.slice(0).reverse()},r.a.createElement(f.TableHeader,{name:"title",cellFormatter:function(e){return e.length>=30?e.substring(0,30)+"...":e},tooltip:"The task name"},"Task"),r.a.createElement(f.TableHeader,{name:"_id",cellFormatter:function(e){return r.a.createElement(m.a,{to:"/task/"+e},"Check")},tooltip:"The details of the task."},"Details"),r.a.createElement(f.TableHeader,{name:"content",cellFormatter:function(e){return e.length>=150?e.substring(0,150)+"...":e},tooltip:"Comment of the task"},"Comment"),r.a.createElement(f.TableHeader,{numeric:!0,name:"rating",tooltip:"Out of 5"},"Rating")),r.a.createElement(m.a,{to:"/"},r.a.createElement(f.FABButton,{colored:!0,ripple:!0,style:{position:"fixed",bottom:"20px",right:"20px"}},r.a.createElement(f.Icon,{name:"add"})))):r.a.createElement("div",{style:{margin:"300px auto",width:"200px"}},r.a.createElement(f.Spinner,null))}}]),t}(n.Component),b=a(124),k=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).state={error:null,isLoaded:!1,things:[],good:0,bad:0,unrated:0,limit:10},e}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://floating-bastion-48526.herokuapp.com/api/tasks",{mode:"cors"}).then(function(e){return e.json()}).then(function(t){e.setState({isLoaded:!0,things:t,good:t.filter(function(e){return e.rating>=3}).length,bad:t.filter(function(e){return e.rating<3&&0!==e.rating&&null!==e.rating}).length,unrated:t.filter(function(e){return null===e.rating}).length,limit:t.length})},function(t){e.setState({isLoaded:!0,error:t})})}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.isLoaded,n=e.things,o=e.good,i=e.bad,l=e.unrated,s={labels:["Good","Bad","Unrated"],datasets:[{label:"My tasks",backgroundColor:"rgba(255, 255, 255, 1)",borderColor:"rgba(255, 255, 255, 1)",borderWidth:0,hoverBackgroundColor:"rgba(255, 255, 255, 0.9)",hoverBorderColor:"rgba(255, 255, 255, 0.9)",data:[o,i,l]}]},c={scales:{yAxes:[{ticks:{beginAtZero:!0,fontSize:16,fontColor:"#fff",min:0,max:this.state.limit},gridLines:{display:!1}}],xAxes:[{ticks:{beginAtZero:!0,fontSize:16,fontColor:"#fff",min:0,max:6},gridLines:{display:!1}}]},layout:{padding:{left:50,right:0,top:0,bottom:0}},legend:{labels:{fontColor:"#fff"}},title:{fontColor:"#fff"}};return t?r.a.createElement("div",null,"Error: ",t.message):a?r.a.createElement("div",{className:"task"},r.a.createElement("h4",null,"This is an assessment of tasks"),r.a.createElement(f.Card,{shadow:0,style:{width:"520px",height:"720px",margin:"auto"}},r.a.createElement(f.CardTitle,{expand:!0,style:{color:"#fff",background:"#4a148c"}},r.a.createElement("div",{className:"barChart"},r.a.createElement(b.a,{data:s,width:50,height:50,options:c}))),r.a.createElement(f.CardText,{style:{textAlign:"left",height:"120px"}},"There are ",o," good tasks, there are ",i," bad tasks and ",l," unrated tasks.",r.a.createElement("br",null),r.a.createElement("h1",{style:{weight:"bold",color:"#000"}},n.length," Tasks"),r.a.createElement("br",null)))):r.a.createElement("div",{style:{margin:"300px auto",width:"200px"}},r.a.createElement(f.Spinner,null))}}]),t}(n.Component),E=a(15),v=(a(325),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={rating:"",message:a.props.rating?"Rated "+a.props.rating:"Not rate yet.",title:a.props.title,content:a.props.content,toTasklist:!1,style:{color:"black"}},a.handleChange=a.handleChange.bind(Object(E.a)(Object(E.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(E.a)(Object(E.a)(a))),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){null!==this.props.rating&&""!==this.props.rating||this.setState({style:{backgroundColor:"#ff2d70",color:"white"}})}},{key:"handleChange",value:function(e){this.setState({rating:e.target.value,style:{backgroundColor:"#eec168",color:"Black"},message:"Please save your rating."}),console.log(e.target.value)}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.setState({message:"You saved the rating to "+this.state.rating+".",style:{backgroundColor:"#6eb544",color:"white"}}),console.log("you rate "+this.state.rating+" for this task."),fetch("https://floating-bastion-48526.herokuapp.com/api/tasks/"+this.props.id,{mode:"cors"},{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({title:this.state.title,content:this.state.content,rating:this.state.rating})})}},{key:"render",value:function(){return r.a.createElement("div",{className:"rating"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("label",null,"Rate: "),r.a.createElement("input",{type:"radio",name:"pain",value:"1",defaultChecked:1===this.props.rating,onChange:this.handleChange}),"1",r.a.createElement("input",{type:"radio",name:"pain",value:"2",defaultChecked:2===this.props.rating,onChange:this.handleChange}),"2",r.a.createElement("input",{type:"radio",name:"pain",value:"3",defaultChecked:3===this.props.rating,onChange:this.handleChange}),"3",r.a.createElement("input",{type:"radio",name:"pain",value:"4",defaultChecked:4===this.props.rating,onChange:this.handleChange}),"4",r.a.createElement("input",{type:"radio",name:"pain",value:"5",defaultChecked:5===this.props.rating,onChange:this.handleChange}),"5",r.a.createElement(f.Button,{colored:!0},"Save")),r.a.createElement("br",null),r.a.createElement(f.Chip,{style:this.state.style},this.state.message)," ",r.a.createElement("br",null),r.a.createElement("br",null))}}]),t}(r.a.Component)),C=(a(327),function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).state={error:null,isLoaded:!1,things:[]},e}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentWillUnmount",value:function(){this.isCancelled=!0}},{key:"componentDidUpdate",value:function(){var e=this;fetch("https://floating-bastion-48526.herokuapp.com/api/tasks",{mode:"cors"}).then(function(e){return e.json()}).then(function(t){!e.isCancelled&&e.setState({isLoaded:!0,things:t})},function(t){e.setState({isLoaded:!0,error:t})})}},{key:"componentDidMount",value:function(){var e=this;fetch("https://floating-bastion-48526.herokuapp.com/api/tasks",{mode:"cors"}).then(function(e){return e.json()}).then(function(t){e.setState({isLoaded:!0,things:t})},function(t){e.setState({isLoaded:!0,error:t})})}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.isLoaded,n=e.things;return t?r.a.createElement("div",null,"Error: ",t.message):a?r.a.createElement("div",{className:"feedback",style:{width:"90%",margin:"auto"}},r.a.createElement("div",null,r.a.createElement(f.Grid,null,n.slice(0).reverse().map(function(e){return r.a.createElement(f.Cell,{key:e._id,col:3},r.a.createElement(f.Card,{shadow:0,style:{width:"320px",height:"350px",margin:"10px"}},r.a.createElement(f.CardTitle,{expand:!0,style:{color:"#fff",background:"#4a148c"}},r.a.createElement(f.Icon,{name:"assignment",style:{marginRight:"9px"}}),e.title.length>=30?e.title.substring(0,30)+"...":e.title),r.a.createElement(f.CardText,{style:{color:"#565656",background:"#fff",textAlign:"left",height:"120px"}},e.content.length>=290?e.content.substring(0,290)+"...":e.content),r.a.createElement(f.CardActions,{border:!0},r.a.createElement(v,{name:e.title,rating:e.rating,id:e._id,title:e.title,content:e.content}))))})))):r.a.createElement("div",{style:{margin:"300px auto",width:"200px"}},r.a.createElement(f.Spinner,null))}}]),t}(n.Component)),y=a(420),j=a(126),O=a.n(j),w=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).clickhandler=function(e){e.preventDefault(),console.log(a.state.title+a.state.content),fetch("https://floating-bastion-48526.herokuapp.com/api/tasks/",{mode:"cors"},{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({title:a.state.title,content:a.state.content})}),a.setState({toTasklist:!0})},a.state={title:null,content:null,toTasklist:!1},a.clickhandler=a.clickhandler.bind(Object(E.a)(Object(E.a)(a))),a.handleTitleChange=a.handleTitleChange.bind(Object(E.a)(Object(E.a)(a))),a.handleContentChange=a.handleContentChange.bind(Object(E.a)(Object(E.a)(a))),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"handleTitleChange",value:function(e){this.setState({title:e.target.value})}},{key:"handleContentChange",value:function(e){this.setState({content:e.target.value})}},{key:"render",value:function(){return!0===this.state.toTasklist?r.a.createElement(y.a,{to:"/tasks"}):r.a.createElement("div",null,r.a.createElement("form",null,r.a.createElement(f.Textfield,{onChange:this.handleTitleChange,label:"Task Name",style:{width:"200px"}}),r.a.createElement("br",null),r.a.createElement(f.Textfield,{onChange:this.handleContentChange,label:"Task Content",rows:1,style:{width:"350px"}}),r.a.createElement("br",null),r.a.createElement(f.CardActions,null,r.a.createElement(O.a,{variant:"contained",color:"primary",onClick:this.clickhandler},"Add")),r.a.createElement("br",null)))}}]),t}(n.Component),x=(a(413),a(128)),S=a.n(x),T=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"welcome"},r.a.createElement(f.Card,{shadow:0,style:{width:"512px",margin:"auto"}},r.a.createElement(f.CardTitle,{style:{color:"#fff",height:"176px",background:"url(".concat(S.a,") center / cover")}},"New task"),r.a.createElement(f.CardText,null,"Please add a new task to review."),r.a.createElement(w,null)))}}]),t}(r.a.Component),L=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).deleteHandler=function(t){console.log("delete"),fetch("https://floating-bastion-48526.herokuapp.com/api/tasks/"+e.state.thing._id,{mode:"cors"},{method:"DELETE"}),e.setState({toTasklist:!0})},e.reviewHandler=function(t){e.setState({toReview:!0})},e.state={error:null,isLoaded:!1,thing:null,toTasklist:!1,toReview:!1},e}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,t="https://floating-bastion-48526.herokuapp.com/api/tasks/"+this.props.match.params.id;fetch(t,{mode:"cors"}).then(function(e){return e.json()}).then(function(t){e.setState({isLoaded:!0,thing:t})},function(t){e.setState({isLoaded:!0,error:t})})}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.isLoaded,n=e.thing,o=e.toTasklist,i=e.toReview;return o?r.a.createElement(y.a,{to:"/tasks"}):i?r.a.createElement(y.a,{to:"/review"}):t?r.a.createElement("div",null,"Error: ",t.message):a?r.a.createElement("div",{className:"taskview"},r.a.createElement("h1",null,n.title),r.a.createElement("h4",null,"Created At: ",n.createdAt.substring(0,10)),r.a.createElement("h4",null,"Rating: ",n.rating),r.a.createElement("br",null),r.a.createElement("p",null,"lea",n.content),r.a.createElement("hr",null),r.a.createElement(f.Button,{onClick:this.deleteHandler,raised:!0,ripple:!0,accent:!0},"Delete"),"  ",r.a.createElement(f.Button,{onClick:this.reviewHandler,raised:!0,colored:!0,ripple:!0},"Review")):r.a.createElement("div",null,"Loading...")}}]),t}(r.a.Component),D=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).state={error:null,unrated:null},e}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentWillUnmount",value:function(){this.isCancelled=!0}},{key:"componentDidUpdate",value:function(){var e=this;fetch("https://floating-bastion-48526.herokuapp.com/api/tasks",{mode:"cors"}).then(function(e){return e.json()}).then(function(t){!e.isCancelled&&e.setState({isLoaded:!0,things:t,unrated:t.filter(function(e){return null===e.rating}).length})},function(t){e.setState({isLoaded:!0,error:t})})}},{key:"componentDidMount",value:function(){var e=this;fetch("https://floating-bastion-48526.herokuapp.com/api/tasks",{mode:"cors"}).then(function(e){return e.json()}).then(function(t){e.setState({isLoaded:!0,things:t,unrated:t.filter(function(e){return null===e.rating}).length})},function(t){e.setState({isLoaded:!0,error:t})})}},{key:"render",value:function(){return r.a.createElement(h.a,null,r.a.createElement("div",null,r.a.createElement(f.Layout,{fixedHeader:!0},r.a.createElement(f.Header,{title:"{ Tasks Review }",style:{color:"#fff",background:"#1e2c39"}},r.a.createElement(f.Navigation,null,r.a.createElement(m.a,{to:"/"},"Home"),r.a.createElement(m.a,{to:"/tasks"},"Tasks"),r.a.createElement(m.a,{to:"/review"},r.a.createElement(f.Badge,{text:null===this.state.unrated||0===this.state.unrated?null:this.state.unrated},"Review")),r.a.createElement(m.a,{to:"/statistic"},r.a.createElement(f.Icon,{name:"assessment",style:{marginRight:10}}),"Statistic"))),r.a.createElement(p.a,{exact:!0,path:"/",component:T}),r.a.createElement(p.a,{path:"/tasks",component:g}),r.a.createElement(p.a,{path:"/review",component:C}),r.a.createElement(p.a,{path:"/statistic",component:k}),r.a.createElement(p.a,{path:"/task/:id",component:L}))))}}]),t}(n.Component);a(415),a(417),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(D,null),document.getElementById("root"),document.querySelector("#app")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[129,2,1]]]);
//# sourceMappingURL=main.474ff45f.chunk.js.map