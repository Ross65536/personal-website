(this["webpackJsonppersonal-website"]=this["webpackJsonppersonal-website"]||[]).push([[0],{18:function(e,t,a){e.exports=a(32)},23:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(15),i=a.n(r),s=(a(23),a(24),a(4)),c=a(3),o={name:"Rostyslav Khoptiy"};function u(){return l.a.createElement("div",null,l.a.createElement("h2",null,"About"),"This website is running on ReactJS.")}a(25);var m=a(6),p=a(7),d=a(8),E=a(9),h=function(e){Object(E.a)(a,e);var t=Object(d.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"buildButton",value:function(e){return l.a.createElement("button",{type:"button",class:"btn btn-sm"},e)}},{key:"buildButtons",value:function(e){var t=this;return e.map((function(e){return t.buildButton(e)}))}},{key:"buildTypes",value:function(e,t){return l.a.createElement("li",{class:"list-group-item card-tags"},l.a.createElement("div",null,l.a.createElement("b",null,e)),l.a.createElement("div",null,this.buildButtons(t)))}},{key:"buildLinks",value:function(e){return e.map((function(e){return l.a.createElement("span",null,e)}))}},{key:"render",value:function(){return l.a.createElement("div",{class:"card"},l.a.createElement("div",{class:"card-body"},l.a.createElement("h2",{class:"card-title"},l.a.createElement("span",null,this.props.title," "),this.buildButtons(this.props.types)),l.a.createElement("p",{class:"card-text"},this.props.description)),l.a.createElement("ul",{class:"list-group list-group-flush"},this.buildTypes("Tech: ",this.props.technologies),this.buildTypes("Lang: ",this.props.languages)),l.a.createElement("div",{class:"card-body"},this.buildLinks(this.props.links)))}}]),a}(l.a.Component),b={github:l.a.createElement("i",{class:"fab fa-github"}),linkedin:l.a.createElement("i",{class:"fab fa-linkedin"}),email:l.a.createElement("i",{class:"fas fa-envelope"}),android_store:l.a.createElement("i",{class:"fab fa-google-play"})},f=function(e){Object(E.a)(a,e);var t=Object(d.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return l.a.createElement("a",{href:this.props.url},this.props.icon," ",this.props.name," ")}}]),a}(l.a.Component);function v(){return l.a.createElement("div",null,l.a.createElement("h2",null,"Projects"),"Here you can see some of the projects I have done.",l.a.createElement("div",{class:"card-columns"},l.a.createElement(h,{title:"RMixer",description:l.a.createElement("div",null,"Android app for mixing music. Can generate basic sounds like, sinewaves, mix multiple tracks and export music"),types:["Hobby","App"],technologies:["Xamarin","Android"],languages:["C#"],links:[l.a.createElement(f,{name:"Source",url:"https://github.com/Ross65536/MobileSoundMixer",icon:b.github}),l.a.createElement(f,{name:"App",url:"https://play.google.com/store/apps/details?id=com.Ros.Sound_Mixer&hl=en",icon:b.android_store})]}),l.a.createElement(h,{title:"Kivy Ballistics",description:l.a.createElement("div",null,"Android game. The player controls a turret stuck on a planet and tries to destroy other planets. Features realistic in-house space ballistics physics."),types:["Hobby","App"],technologies:["Kivy","Android"],languages:["Python"],links:[l.a.createElement(f,{name:"Source",url:"https://github.com/Ross65536/kivy-ballistics",icon:b.github})]})))}a(26);function g(){return l.a.createElement("div",null,l.a.createElement("h2",null,"Resume"),"I'm a software engineer mostly interested in web-development, systems software and security.",l.a.createElement("div",{id:"resume_pdf_link"},l.a.createElement("a",{href:"cv.pdf"},l.a.createElement("i",{class:"fas fa-file-pdf fa-lg"})," Download Resume (PDF)")),l.a.createElement("div",{class:"pdf_container"},l.a.createElement("embed",{src:"cv.pdf",type:"application/pdf",class:"resume_pdf"})))}var y=o.name;var k=function(){return l.a.createElement("div",{className:"App",id:"main"},l.a.createElement(s.a,null,l.a.createElement("header",{id:"header"},l.a.createElement("h1",{id:"name"},l.a.createElement(s.b,{to:"./"},y)),l.a.createElement("h3",{id:"profession"},"Software Engineer"),l.a.createElement("nav",{id:"top-bar"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(s.b,{to:"./"},"Projects")),l.a.createElement("li",null,l.a.createElement(s.b,{to:"resume"},"Resume")),l.a.createElement("li",null,l.a.createElement(s.b,{to:"about"},"About"))))),l.a.createElement("div",{id:"page-content"},l.a.createElement(c.c,null,l.a.createElement(c.a,{path:"*/about"},l.a.createElement(u,null)),l.a.createElement(c.a,{path:"*/resume"},l.a.createElement(g,null)),l.a.createElement(c.a,{exact:!0,path:"*/"},l.a.createElement(v,null)))),l.a.createElement("footer",{id:"footer"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(f,{name:"Github",url:"https://github.com/Ross65536",icon:b.github})),l.a.createElement("li",null,l.a.createElement(f,{name:"LinkedIn",url:"https://www.linkedin.com/in/rostyslav-khoptiy/",icon:b.linkedin})),l.a.createElement("li",null,l.a.createElement(f,{name:"E-Mail",url:"mailto:rk65536@protonmail.com",icon:b.email})),l.a.createElement("li",null,l.a.createElement(f,{name:"Android Store",url:"https://play.google.com/store/apps/developer?id=Ros+Software",icon:b.android_store}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.3952cdcb.chunk.js.map