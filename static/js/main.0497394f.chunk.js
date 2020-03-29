(this["webpackJsonppersonal-website"]=this["webpackJsonppersonal-website"]||[]).push([[0],{21:function(e,t,a){e.exports=a(38)},26:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(17),s=a.n(l),o=(a(26),a(27),a(28),a(8)),r=a(3),c=(a(29),{name:"Rostyslav Khoptiy"});function u(){return i.a.createElement("div",null,i.a.createElement("h2",null,"About"),"This website is running on ReactJS.")}var m=a(20),d=a(4),p=a(5),h=a(11),g=a(6),v=a(7),b=(a(30),a(10)),E=(a(31),function(e){Object(v.a)(a,e);var t=Object(g.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).handleButton=function(e){n.props.toggleActiveButtons(e,!n.props.activeButtons[e])},n.getTags().forEach((function(e){return n.props.toggleActiveButtons(e,!1)})),n}return Object(p.a)(a,[{key:"getTags",value:function(){var e,t,a=null!==(e=this.props.technologies)&&void 0!==e?e:[],n=null!==(t=this.props.dates)&&void 0!==t?t:[];return[].concat(Object(b.a)(this.props.types),Object(b.a)(this.props.languages),Object(b.a)(a),Object(b.a)(n))}},{key:"shouldHide",value:function(){var e=this.getTags(),t=Object.entries(this.props.activeButtons).filter((function(e){return!0===e[1]})).some((function(t){return!e.includes(t[0])}));return t}},{key:"buildButton",value:function(e){var t=this;return i.a.createElement("button",{key:e,type:"button",className:"btn btn-sm ".concat(this.props.activeButtons[e]?"active":""),onClick:function(){return t.handleButton(e)}},e)}},{key:"buildButtons",value:function(e){var t=this;return e.map((function(e){return t.buildButton(e)}))}},{key:"buildTypes",value:function(e,t){if(void 0!==t)return i.a.createElement("li",{class:"list-group-item card-tags"},i.a.createElement("div",null,i.a.createElement("b",null,e)),i.a.createElement("div",null,this.buildButtons(t)))}},{key:"buildLinks",value:function(e){return e.map((function(e){return i.a.createElement("span",null,e)}))}},{key:"render",value:function(){return this.shouldHide()?i.a.createElement("div",null):i.a.createElement("div",{class:"card",key:this.props.title},i.a.createElement("div",{class:"card-body"},i.a.createElement("h2",{class:"card-title"},i.a.createElement("span",null,this.props.title," "),i.a.createElement("br",null),this.buildButtons(this.props.types)),i.a.createElement("div",{class:"card-text"},this.props.description)),i.a.createElement("ul",{class:"list-group list-group-flush"},this.buildTypes("Date: ",this.props.dates),this.buildTypes("Tech: ",this.props.technologies),this.buildTypes("Lang: ",this.props.languages)),i.a.createElement("div",{class:"card-body"},this.props.links))}}]),a}(i.a.Component)),f={none:i.a.createElement("i",{class:"fas fa-link"}),github:i.a.createElement("i",{class:"fab fa-github"}),linkedin:i.a.createElement("i",{class:"fab fa-linkedin"}),email:i.a.createElement("i",{class:"fas fa-envelope"}),android_store:i.a.createElement("i",{class:"fab fa-google-play"}),wikipedia:i.a.createElement("i",{class:"fab fa-wikipedia-w"})},y=function(e){Object(v.a)(a,e);var t=Object(g.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return i.a.createElement("a",{key:this.props.url,href:this.props.url},this.props.icon," ",this.props.name," ")}}]),a}(i.a.Component),B=function(e){Object(v.a)(a,e);var t=Object(g.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={activeButtons:{}},n.toggleActiveButtons=n.toggleActiveButtons.bind(Object(h.a)(n)),n}return Object(p.a)(a,[{key:"toggleActiveButtons",value:function(e,t){var a=Object(m.a)({},this.state.activeButtons);a[e]=t,this.setState((function(e){return{activeButtons:a}}))}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h2",null,"Projects"),i.a.createElement("p",null,"Here you can see some of the projects I have done in my spare time and as well as for school and work. You can click on the card tags to filter."),i.a.createElement("div",null,i.a.createElement("h3",null,"Personal Projects"),i.a.createElement("p",null,"Here you can see my personal projects that I have done on my own time."),i.a.createElement("div",{class:"card-columns"},i.a.createElement(E,{title:"RMixer",description:i.a.createElement("div",null,"Android app for mixing music. Can generate basic sounds like, sinewaves, mix multiple tracks and export music"),types:["Mobile","Big"],dates:["2018"],technologies:["Xamarin","Android"],languages:["C#"],links:[i.a.createElement(y,{name:"Source",url:"https://github.com/Ross65536/MobileSoundMixer",icon:f.github}),i.a.createElement(y,{name:"App",url:"https://play.google.com/store/apps/details?id=com.Ros.Sound_Mixer&hl=en",icon:f.android_store})],activeButtons:this.state.activeButtons,toggleActiveButtons:this.toggleActiveButtons}),i.a.createElement(E,{title:"Kivy Ballistics",description:i.a.createElement("div",null,"Android game. The player controls a turret stuck on a planet and tries to destroy other planets. Features realistic in-house space ballistics physics."),types:["Mobile","Game","Big"],dates:["2017"],technologies:["Kivy","Android"],languages:["Python"],links:[i.a.createElement(y,{name:"Source",url:"https://github.com/Ross65536/kivy-ballistics",icon:f.github})],activeButtons:this.state.activeButtons,toggleActiveButtons:this.toggleActiveButtons}),i.a.createElement(E,{title:"Convay's Game of Life",description:i.a.createElement("div",null,"A Conway game of life implementation in the CLI using rust. Features CI and full unit testing. "),types:["CLI","Small"],dates:["2018","2019"],languages:["Rust"],links:[i.a.createElement(y,{name:"Source",url:"https://github.com/Ross65536/conway-game-of-life-rs",icon:f.github})],activeButtons:this.state.activeButtons,toggleActiveButtons:this.toggleActiveButtons}),i.a.createElement(E,{title:"Personal Website (Old)",description:i.a.createElement("div",null,"A personal website written in Django with a full backend. Features a custom design, on which this website is based."),types:["Web","Medium"],dates:["2018"],technologies:["Django","HTML","CSS","Docker"],languages:["Python","Javascript"],links:[i.a.createElement(y,{name:"Source",url:"https://github.com/Ross65536/PersonalBlog",icon:f.github})],activeButtons:this.state.activeButtons,toggleActiveButtons:this.toggleActiveButtons}),i.a.createElement(E,{title:"Brainfuck Interpreter",description:i.a.createElement("div",null,"An interpreter for the brainfuck esoteric language. Tested using a few sample source files and compared with expected outputs. Written in Rust"),types:["Systems","Small"],dates:["2019"],languages:["Rust"],links:[i.a.createElement(y,{name:"Source",url:"https://github.com/Ross65536/rbf",icon:f.github}),i.a.createElement(y,{name:"Brainfuck",url:"https://en.wikipedia.org/wiki/Brainfuck",icon:f.wikipedia})],activeButtons:this.state.activeButtons,toggleActiveButtons:this.toggleActiveButtons}),i.a.createElement(E,{title:"Giphy Frontend",description:i.a.createElement("div",null,"An SPA front-end for Giphy, a GIF search engine, written in ReactJS. Features gif search and bookmarking using browser local-storage."),types:["Web","Small"],dates:["2018"],technologies:["HTML","CSS","ReactJS"],languages:["Javascript"],links:[i.a.createElement(y,{name:"Source",url:"https://github.com/Ross65536/Giphy-React",icon:f.github}),i.a.createElement(y,{name:"Website",url:"https://ross65536.github.io/Giphy-React/",icon:f.none})],activeButtons:this.state.activeButtons,toggleActiveButtons:this.toggleActiveButtons})),i.a.createElement("div",{class:"mt-5"},i.a.createElement("h3",null,"Work Projects"),i.a.createElement("p",null,"Here you can see my work and internships projects. Some are internal and therefore the source code isn't available."),i.a.createElement("div",{class:"card-columns"},i.a.createElement(E,{title:"Linux Real-Time Schedulers",description:i.a.createElement("div",null,"An extension to the Linux kernel with real-time process schedulers meant to be run on a Raspberry Pi. Implemented as part of an internsip at CISTER. Complemented by test userland programs running a sensor+actuator system developed by my internship colleague."),types:["CISTER","Systems","Big"],dates:["2017"],technologies:["Linux"],languages:["C"],links:[i.a.createElement(y,{name:"Source",url:"https://github.com/Ross65536/linux_rPI_4_9",icon:f.github}),i.a.createElement(y,{name:"CISTER website",url:"http://www.cister.isep.ipp.pt/",icon:f.none})],activeButtons:this.state.activeButtons,toggleActiveButtons:this.toggleActiveButtons}),i.a.createElement(E,{title:"Invisible Collector API clients",description:i.a.createElement("div",null,"HTTP+JSON Clients developed for the API services provided by InvisibleCLoud for managing debt collection. Clients were developed in Java, C# and Go, each of which was thoroughly tested and validated through CI. Developed as part of internship and mantained as part of subsequent work."),types:["InvisibleCloud","Big"],dates:["2018","2019"],technologies:["CI"],languages:["C#","Java","Go"],links:[i.a.createElement(y,{name:"C# client",url:"https://github.com/invisiblecloud/InvisibleCollectorLib",icon:f.github}),i.a.createElement(y,{name:"Java client",url:"https://github.com/invisiblecloud/invisible-collector-java",icon:f.github}),i.a.createElement(y,{name:"Go client",url:"https://github.com/invisiblecloud/invisible-collector-go",icon:f.github}),i.a.createElement(y,{name:"API docs",url:"https://portal.invisiblecollector.com/docs/api/",icon:f.none})],activeButtons:this.state.activeButtons,toggleActiveButtons:this.toggleActiveButtons}),i.a.createElement(E,{title:"Invisible Collector Settler",description:i.a.createElement("div",null,"A web-page for communication between debtor and debtee. Developed a new RESTfull API backend, built on Dropwizard, and migrated and updated the old frontend design to a new SPA fontend built on Vue, customized for each company, and migrated to use the new API."),types:["InvisibleCloud","Big","Web"],dates:["2019"],technologies:["VueJS","Dropwizard","HTML","CSS","JWT"],languages:["Javascript","Java"],links:[i.a.createElement(y,{name:"Company page",url:"https://www.invisiblecollector.com/",icon:f.none})],activeButtons:this.state.activeButtons,toggleActiveButtons:this.toggleActiveButtons}))),i.a.createElement("div",{class:"mt-5"},i.a.createElement("h3",null,"School Projects"),i.a.createElement("p",null,"Here you can see my school (FEUP) and MOOC projects. The MOOC and their projects I have done on my own and not as part of my degree."),i.a.createElement("div",{class:"card-columns"},i.a.createElement(E,{title:"Crypto I",description:i.a.createElement("div",null,"A MOOC about applied cryptography by Dan Boneh. Learned about the workings of hashing and public and symmetric encryption."),types:["MOOC","Systems"],dates:["2019"],languages:["Python"],links:[i.a.createElement(y,{name:"Course Projects",url:"https://github.com/Ross65536/Crypto-I",icon:f.github}),i.a.createElement(y,{name:"Course page",url:"https://www.coursera.org/learn/crypto/",icon:f.none})],activeButtons:this.state.activeButtons,toggleActiveButtons:this.toggleActiveButtons}),i.a.createElement(E,{title:"PintOS (WIP)",description:i.a.createElement("div",null,"A MOOC about OS, with a big project involving implementing various OS features, such as schedulers, userlang syscalls, virtual memory, etc."),types:["MOOC","Systems"],dates:["2020"],languages:["C"],links:[i.a.createElement(y,{name:"Course Project",url:"https://github.com/Ross65536/PintOS",icon:f.github}),i.a.createElement(y,{name:"Course page",url:"https://cs.jhu.edu/~huang/cs318/fall19/index.html",icon:f.none})],activeButtons:this.state.activeButtons,toggleActiveButtons:this.toggleActiveButtons}),i.a.createElement(E,{title:"RJTorcher",description:i.a.createElement("div",null,"An android procedural platforming game. Developed as part of FEUP's LPOO class. Features unit-testing. Developed along with my project colleague."),types:["Mobile","Game","FEUP"],dates:["2017"],technologies:["libgdx","Android"],languages:["Java"],links:[i.a.createElement(y,{name:"Source",url:"https://github.com/Ross65536/FEUP-LPOO",icon:f.github}),i.a.createElement(y,{name:"App",url:"https://play.google.com/store/apps/details?id=ros.joao.rjtorcher",icon:f.android_store})],activeButtons:this.state.activeButtons,toggleActiveButtons:this.toggleActiveButtons})))))}}]),a}(i.a.Component);a(32);function k(){return i.a.createElement("div",null,i.a.createElement("h2",null,"Resume"),"I'm a software engineer mostly interested in web-development, systems software and security.",i.a.createElement("div",{id:"resume_pdf_link"},i.a.createElement("a",{href:"cv.pdf"},i.a.createElement("i",{class:"fas fa-file-pdf fa-lg"})," Download Resume (PDF)")),i.a.createElement("div",{class:"pdf_container"},i.a.createElement("embed",{src:"cv.pdf",type:"application/pdf",class:"resume_pdf"})))}var w=c.name;var A=function(){return i.a.createElement("div",{className:"App",id:"main"},i.a.createElement(o.a,null,i.a.createElement("header",{id:"header"},i.a.createElement("h1",{id:"name"},i.a.createElement(o.b,{to:"./"},w)),i.a.createElement("h3",{id:"profession"},"Software Engineer"),i.a.createElement("nav",{id:"top-bar"},i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(o.b,{to:"./"},"Projects")),i.a.createElement("li",null,i.a.createElement(o.b,{to:"resume"},"Resume")),i.a.createElement("li",null,i.a.createElement(o.b,{to:"about"},"About"))))),i.a.createElement("div",{id:"page-content"},i.a.createElement(r.c,null,i.a.createElement(r.a,{path:"*/about"},i.a.createElement(u,null)),i.a.createElement(r.a,{path:"*/resume"},i.a.createElement(k,null)),i.a.createElement(r.a,{exact:!0,path:"*/"},i.a.createElement(B,null)))),i.a.createElement("footer",{id:"footer"},i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(y,{name:"Github",url:"https://github.com/Ross65536",icon:f.github})),i.a.createElement("li",null,i.a.createElement(y,{name:"LinkedIn",url:"https://www.linkedin.com/in/rostyslav-khoptiy/",icon:f.linkedin})),i.a.createElement("li",null,i.a.createElement(y,{name:"E-Mail",url:"mailto:rk65536@protonmail.com",icon:f.email})),i.a.createElement("li",null,i.a.createElement(y,{name:"Android Store",url:"https://play.google.com/store/apps/developer?id=Ros+Software",icon:f.android_store}))))))};s.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(A,null)),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.0497394f.chunk.js.map