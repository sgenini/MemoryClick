(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(e){e.exports=[{id:1,image:"https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/230px-SpongeBob_SquarePants_character.svg.png",wasClicked:!1},{id:2,image:"https://vignette3.wikia.nocookie.net/vsbattles/images/8/80/Mr._Krabs.png/revision/latest?cb=20150919162131",wasClicked:!1},{id:3,image:"https://vignette2.wikia.nocookie.net/fictionalcharacters/images/a/ac/Squidward.png/revision/latest?cb=20131121012626",wasClicked:!1},{id:4,image:"https://s-media-cache-ak0.pinimg.com/originals/fe/32/49/fe32495d45283cd6860ae122f0aeaad9.png",wasClicked:!1},{id:5,image:"https://vignette4.wikia.nocookie.net/vsbattles/images/3/39/Courage-0.png/revision/latest?cb=20160719055423",wasClicked:!1},{id:6,image:"https://vignette1.wikia.nocookie.net/doug/images/3/3b/Doug001.gif/revision/latest?cb=20110807170511",wasClicked:!1},{id:7,image:"https://vignette2.wikia.nocookie.net/deathbattlefanon/images/2/2b/Bugs_Bunny.png/revision/latest?cb=20151206010607",wasClicked:!1},{id:8,image:"http://vignette3.wikia.nocookie.net/p__/images/9/9a/Johnny_Bravo.png/revision/latest?cb=20131031233339&path-prefix=protagonist",wasClicked:!1},{id:9,image:"https://vignette4.wikia.nocookie.net/uncyclopedia/images/e/e4/Tommy_Pickles.png/revision/latest?cb=20110530102641",wasClicked:!1},{id:10,image:"http://vignette3.wikia.nocookie.net/rockosmodernlife/images/9/9e/Rockos-modern-life-4e582a8f06a41.png/revision/latest?cb=20130522173416",wasClicked:!1},{id:11,image:"http://vignette2.wikia.nocookie.net/dragon-rap-battles/images/b/b6/Captain_Planet.png/revision/latest?cb=20160911200836",wasClicked:!1},{id:12,image:"http://static.tvtropes.org/pmwiki/pub/images/ickis.png",wasClicked:!1}]},10:function(e,t,a){e.exports=a(18)},16:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var i=a(0),c=a.n(i),n=a(3),r=a.n(n),o=a(7),s=a(4),l=a(5),g=a(8),m=a(6),d=a(9);var h=function(e){return c.a.createElement("div",{className:"container rounded py-1",style:{backgroundColor:"rgba(0,0,0,.1)"}},c.a.createElement("div",{className:"text-center my-4"},c.a.createElement("h1",{className:"title",style:{fontSize:50}},"MemoryClick"),c.a.createElement("h5",null,c.a.createElement("small",null,"A React.js Memory Game")),c.a.createElement("p",null,"Click each image ",c.a.createElement("strong",null,"only once"),"! Good luck!"),c.a.createElement("h5",{className:"score-counter text-uppercase"},"Current Score: ",e.score," | High Score: ",e.highScore)))};a(16);var u=function(e){return c.a.createElement("div",{className:"jumbotron col-lg-7 mt-4"},e.children)};a(17);var k=function(e){return c.a.createElement("div",{className:""},c.a.createElement("img",{className:"click-item",alt:e.name,src:e.image,id:e.id,onClick:function(){return e.setClicked(e.id)}}))},p=a(1),v=function(e){function t(){var e,a;Object(s.a)(this,t);for(var i=arguments.length,c=new Array(i),n=0;n<i;n++)c[n]=arguments[n];return(a=Object(g.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={score:0,highScore:0,clickedArray:[],clicky:p},a.shuffleArray=function(e){var t,a,i;for(t=e.length-1;t>0;t--)a=Math.floor(Math.random()*(t+1)),i=e[t],e[t]=e[a],e[a]=i;return e},a.setHighScore=function(){a.state.score>=0&&a.state.score>=a.state.highScore&&a.setState({highScore:a.state.score})},a.setClicked=function(e){!1===a.state.clickedArray.includes(e)?a.setState({score:a.state.score+1,clickedArray:[].concat(Object(o.a)(a.state.clickedArray),[e]),clicky:a.shuffleArray(p)}):(a.setState({score:0,clickedArray:[]}),a.setHighScore())},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"container-fluid memoryclick",style:{minHeight:"100vh",backgroundImage:"url('https://images.unsplash.com/photo-1533279443086-d1c19a186416?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80')",paddingTop:25}},c.a.createElement(h,{score:this.state.score,highScore:this.state.highScore}),c.a.createElement(u,null,p.map(function(t){return c.a.createElement(k,{score:e.score,highScore:e.highScore,id:t.id,image:t.image,setClicked:e.setClicked})})))}}]),t}(c.a.Component);r.a.render(c.a.createElement(v,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.a73b7b02.chunk.js.map