(this.webpackJsonpui=this.webpackJsonpui||[]).push([[0],{13:function(e,t,a){},27:function(e,t,a){e.exports=a(43)},32:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(18),o=a.n(l),s=(a(32),a(6)),c=a(7),i=a(10),u=a(8),h=a(9),m=a(25),g=a(19),d=a(5),b=function(e){var t=Object.keys(e[0]),a=function(e,t){return e.reduce((function(e,a,n,r){return e+(n===r.length-1?"<"+t+">"+a+"</"+t+"></tr>":"<"+t+">"+a+"</"+t+">")}),"<tr>")};return"<table>"+e.reduce((function(e,n){return e+a(t.reduce((function(e,t){return e.concat(n[t])}),[]),"td")}),a(t,"th"))+"</table>"},y=function(e){var t=e.players,a=e.roles,n=e.calcBgs,r=void 0!==n&&n,l=e.bgRatio,o=void 0===l?.2:l,s=e.html,c=void 0!==s&&s;if(r){var i=Math.ceil(t.length*o);console.log("Caluclating number of BGs. \n Creating ...".concat(i," BGs"));for(var u=0;u<i;u++)a.push("BG")}for(console.log("Number of Roles: ".concat(a.length,", \nNumber of Player: ").concat(t.length)),a.length<t.length&&console.log("Creating ".concat(t.length-a.length," PJVs"));a.length<t.length;)a.push("PJV");t.sort((function(){return.5-Math.random()})),a.sort((function(){return.5-Math.random()}));for(var h=[];t.length;){var m=t.pop(),g=a.pop(),d={Player:m,Role:g};h.push(d),console.log(m+" gets "+g)}return c?b(h):h},p=a(20),f=a(47),v=a(45),E=a(22),R=a(48),O=a(44),B=a(46),C=(a(13),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={assignments:[]},a.createTable=a.createTable.bind(Object(d.a)(a)),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"createTable",value:function(e){return e&&e.length?e.map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,e.Player),r.a.createElement("td",null,e.Role))})):r.a.createElement("div",null)}},{key:"render",value:function(){var e=this.props.assignments,t=this.createTable(e);return e.length?r.a.createElement(O.a,null,r.a.createElement(v.a,null,r.a.createElement(E.a,null,r.a.createElement(B.a,{striped:!0,bordered:!0,hover:!0,variant:"dark",size:"sm",responsive:"true",width:"50%"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{className:"sortable",onClick:this.props.sortByPlayer},"Player"),r.a.createElement("th",{className:"sortable",onClick:this.props.sortByRole},"Game Role"))),r.a.createElement("tbody",null,t))))):r.a.createElement("div",null)}}]),t}(r.a.Component));a(16);function P(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function j(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?P(a,!0).forEach((function(t){Object(g.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):P(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var k=a(39),w="The currently entered number of Players/Roles is currently unsupported.\nThere must be at least as many players as there are roles.\nReach out to ZachariBarnes@yahoo.com if you wish this to be a supported feature.",x=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={players:[],roles:["Doctor","Seer","Mason","Mason","Hunter"],calcBgs:!0,bgRatio:.25,rolesGenerated:!1,assignments:[],postBody:void 0,sortOrder:{col:"role",order:"default"},error:!1},a.handlePlayersChange=a.handlePlayersChange.bind(Object(d.a)(a)),a.handleRolesChange=a.handleRolesChange.bind(Object(d.a)(a)),a.sortByRole=a.sortByRole.bind(Object(d.a)(a)),a.sortByPlayer=a.sortByPlayer.bind(Object(d.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(d.a)(a)),a.sortAssignmentsByProvidedRole=a.sortAssignmentsByProvidedRole.bind(Object(d.a)(a)),a.handleCalcBgChange=a.handleCalcBgChange.bind(Object(d.a)(a)),a.handleBGRatioChange=a.handleBGRatioChange.bind(Object(d.a)(a)),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"handlePlayersChange",value:function(e){var t=["lrn","lurne","laurne","lauren","larne","lorne","lorn","lurn"],a=e.target.value,n=this.state,r=n.roles,l=n.bgRatio,o=n.calcBgs,s=a.indexOf(",")>0?a.split(","):a.split("\n");s=s.map((function(e){return t.indexOf(e.trim().toLowerCase())>0?"Laurne Free-Wifi-at-the Hilton":e.trim()}));var c=r.length+(o?Math.ceil(s.length*l):0),i=!!(this.state.error&&s.length<c)&&w;this.setState(j({},this.state,{players:s,error:i}))}},{key:"handleRolesChange",value:function(e){var t=e.target.value,a=this.state,n=a.players,r=a.bgRatio,l=a.calcBgs,o=t.indexOf(",")>0?t.split(","):t.split("\n"),s=(o=o.map((function(e){return e.trim()}))).length+(l?Math.ceil(n.length*r):0),c=!!(this.state.error&&n.length<s)&&w;this.setState(j({},this.state,{roles:o,error:c}))}},{key:"sortByRole",value:function(){var e=this.state,t=e.assignments,a=e.sortOrder,n=a.col,r=a.order,l="player"===n||"default"===r||"desc"===r?1:-1;t.sort((function(e,t){return e.Role<t.Role?-1*l:e.Role>t.Role?1*l:0})),this.setState(j({},this.state,{assignments:t,sortOrder:{col:"role",order:l>0?"asc":"desc"},error:!1}))}},{key:"handleBGRatioChange",value:function(e){var t=e.target.value/100,a=this.state,n=a.players,r=a.roles,l=a.calcBgs,o=r.length+(l?Math.ceil(n.length*t):0);console.log("bgRatioChange -calcBgs:".concat(l,"  Roles: ").concat(o,", Players ").concat(n.length));var s=!!(this.state.error&&n.length<o)&&w;this.setState(j({},this.state,{bgRatio:t,error:s}))}},{key:"handleCalcBgChange",value:function(){var e=!this.state.calcBgs,t=this.state,a=t.players,n=t.roles,r=t.bgRatio,l=n.length+(e?Math.ceil(a.length*r):0);console.log("calcBgChange -calcBgs:".concat(e,"  Roles: ").concat(l,", Players ").concat(a.length));var o=!!(this.state.error&&a.length<l)&&w;this.setState(j({},this.state,{calcBgs:e,error:o}))}},{key:"sortByPlayer",value:function(){var e=this.state,t=e.assignments,a=e.sortOrder,n=a.col,r=a.order,l="role"===n||"default"===r||"desc"===r?1:-1;t.sort((function(e,t){return e.Player<t.Player?-1*l:e.Player>t.Player?1*l:0})),this.setState(j({},this.state,{assignments:t,sortOrder:{col:"player",order:l>0?"asc":"desc"}}))}},{key:"handleSubmit",value:function(){var e=this.state,t=e.players,a=e.roles,n=e.calcBgs,r=e.bgRatio;if(t.length&&a.length){var l=a.length+(n?Math.ceil(t.length*r):0);if(console.log("submit -calcBgs:".concat(n,"  Roles: ").concat(l,", Players ").concat(t.length)),l<=t.length){var o,s={players:t,roles:a,calcBgs:n,bgRatio:r};o=y(k(s)),o=this.sortAssignmentsByProvidedRole(o),this.setState(j({},this.state,{postBody:s,rolesGenerated:!0,assignments:o}))}else this.setState({error:w}),console.log("ERROR: ".concat(w))}else this.setState({error:w}),console.log("ERROR: ".concat(w))}},{key:"sortAssignmentsByProvidedRole",value:function(e){var t=this.state.roles,a=[];return t.forEach((function(t){var n=e.find((function(e){return e.Role===t}));a.push(n),e.splice(e.indexOf(a[a.length-1]),1)})),e.sort((function(e,t){return e.Role<t.Role?-1:e.Role>t.Role?1:0})),a.push.apply(a,Object(m.a)(e)),a}},{key:"render",value:function(){var e=this,t=this.state.players;return r.a.createElement("div",{className:"widthController"},r.a.createElement(p.Helmet,null,r.a.createElement("title",null,"Role Randomizer")),r.a.createElement(f.a,null,!!this.state.error&&r.a.createElement(v.a,null,r.a.createElement(E.a,null,r.a.createElement("div",{className:"error"},w))),r.a.createElement(v.a,null,r.a.createElement(E.a,null),r.a.createElement(E.a,null,r.a.createElement(f.a.Group,{controlId:"exampleForm.ControlTextarea1"},r.a.createElement(f.a.Label,null,"Players"),r.a.createElement(f.a.Control,{as:"textarea",label:"Players",multiline:"15",rows:"15",defaultValue:t.length?t:"Enter All Players Here",onChange:function(t){e.handlePlayersChange(t)},onClick:function(e){e.currentTarget.select()},isInvalid:this.state.error}),r.a.createElement(f.a.Control.Feedback,{type:"invalid"},"Player or role Count Invalid"))),r.a.createElement(E.a,null,r.a.createElement(f.a.Group,{controlId:"exampleForm.ControlTextarea1"},r.a.createElement(f.a.Label,null,"Roles"),r.a.createElement(f.a.Control,{as:"textarea",label:"Roles",multiline:"15",rows:"15",defaultValue:"Enter Roles Here, OR\nLeave blank to use:\nDoctor,\nSeer,\nMason,\nMason,\nHunter",onChange:function(t){e.handleRolesChange(t)},onClick:function(e){e.currentTarget.select()},isInvalid:this.state.error}))),r.a.createElement(E.a,null)),r.a.createElement(v.a,null,r.a.createElement(E.a,null,r.a.createElement(f.a.Check,{type:"switch",id:"default-checkbox",label:"Generate BG Roles",className:"sliderLabel",checked:this.state.calcBgs,onChange:this.handleCalcBgChange})))),r.a.createElement(v.a,null,r.a.createElement(E.a,null),r.a.createElement(E.a,{size:"sm"},r.a.createElement(f.a,{inline:"true",className:"inlineForm"},r.a.createElement("input",{className:"slider",type:"range",min:"0",max:"100",value:100*this.state.bgRatio,onChange:function(t){e.handleBGRatioChange(t)}}),r.a.createElement(f.a.Group,{controlId:"exampleForm.ControlTextarea1",inline:"true"},r.a.createElement(f.a.Control,{as:"input",type:"text",size:"sm",bsPrefix:"form-control",className:"smallTextBox",maxLength:"4",value:this.state.bgRatio,isInvalid:this.state.bgRatio>1||this.state.bgRatio<0,onChange:function(t){return e.setState(j({},e.state,{bgRatio:t.target.value}))}}),r.a.createElement(f.a.Label,{className:"smallerText",inline:"true"},"BG Ratio")))),r.a.createElement(E.a,null)),r.a.createElement(f.a,null,r.a.createElement(v.a,null,r.a.createElement(E.a,null,r.a.createElement(R.a,{type:"button",className:"btn",style:{marginBottom:20},onClick:this.handleSubmit},"Submit")))),r.a.createElement(C,{assignments:this.state.assignments,sortByRole:this.sortByRole,sortByPlayer:this.sortByPlayer}))}}]),t}(r.a.Component),S=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"header"},r.a.createElement("p",null,"Werewolf Randomizer ")),r.a.createElement("div",{className:"body"},r.a.createElement("div",{className:"topic"},"Use this tool in order to generate Randomized roles for your werewolf or Mafia game."),r.a.createElement("div",{className:"description"},"This tool will also fill remaining slots with PJVs (Plain Jane Villages) if the number of provided roles is less than the number or provided players Additonally this tool can caluclate and generate an appropriate number of BG (Bad Guys) for you game if given the proper parameters")),r.a.createElement(x,null))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[27,1,2]]]);
//# sourceMappingURL=main.e6e3aded.chunk.js.map