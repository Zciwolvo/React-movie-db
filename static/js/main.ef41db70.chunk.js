(window["webpackJsonpReact-movie-db"]=window["webpackJsonpReact-movie-db"]||[]).push([[0],{105:function(e,t,n){},113:function(e,t,n){e.exports=n(169)},119:function(e,t,n){},163:function(e,t,n){},165:function(e,t,n){e.exports=n.p+"static/media/empty_heart.21d11d00.png"},166:function(e,t,n){e.exports=n.p+"static/media/full_heart.d9c9e48e.png"},167:function(e,t,n){e.exports=n.p+"static/media/tv_empty.494d6b45.png"},168:function(e,t,n){e.exports=n.p+"static/media/tv_full.ba1ca5fb.png"},169:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(34),o=n.n(i),c=n(2),l=n(42),s=n(30),u=n(5),d=n(14),m=n(7),p=(n(119),n(90),n(91),n(92),function(e){var t=e.term,n=e.handleInput;return r.a.createElement("div",{className:"relative"},r.a.createElement("div",{className:"search-input"},r.a.createElement("input",{type:"text",name:"search",value:t,onChange:n,placeholder:"Szukaj..."})))}),f=n(8),v=n(60),h=n.n(v);function g(){var e=Object(u.a)(["\n  width: 24px;\n  height: 24px;\n  top: 10px;\n  margin: 0;\n  padding: 0;\n  display: inline-block;\n  position: absolute;\n  right: 15px;\n  transition: all 0.3s ease-in;\n"]);return g=function(){return e},e}function b(){var e=Object(u.a)(["\ntransition: all 0.3s ease-in;\ndisplay: block;\nz-index: 1;\ndiv {\n  transition: all 0.5s;\n  box-shadow: -4px 8px 6px #0000001f;\n  z-index: 2;\n  height: 50px;\n  background-color: grey;\n  padding: 0;\n  padding-left: 20px;\n  z-index: 5;\n  p{\n    padding: 3px 10px;\n        background: transparent;\n        border: 0;\n        border-bottom: 1px solid #03ce76;\n        color: #03ce76;\n        font-size: 20px;\n  }\n  &:last-child {\n    border-radius: 0 0 10px 10px;\n  }\n}\n"]);return b=function(){return e},e}function E(){var e=Object(u.a)(["\n  display: inline-block;\n  height: 100%;\n  width: 100%;\n  background-color: grey;\n  vertical-align: middle;\n  font-family: Rubik;\n  font-size: 1em;\n  z-index: 6;\n  transition: all 0.5s;\n"]);return E=function(){return e},e}function x(){var e=Object(u.a)(["\n  transition: all 0.5s;  \n  box-shadow: -4px 8px 6px #0000001f;\n  width: 220px;\n  height: 48px;\n  border-radius: 10px;\n  position: relative;\n  z-index: 15;\n  margin: 1em auto 0 auto;\n  @media (max-width: 800px) {\n      width: ","px;\n      text-align: left;\n      margin: 1em 0 0 0;\n    }\n"]);return x=function(){return e},e}function y(){var e=Object(u.a)(["\n  transition: all 0.5s;\n  width: 220px;\n  height: 48px;\n  position: absolute;\n  background-color: grey;\n  z-index: 12;\n  border-color: black;\n  border-radius: 10px;\n  p{\n    padding: 10px 10px;\n    background: transparent;\n    border: 0;  \n    color: #03ce76;\n    font-size: 20px;\n  }\n  @media (max-width: 800px) {\n      width: ","px;\n      text-align: left;\n    }\n"]);return y=function(){return e},e}var j=window.innerWidth,k=f.a.div(y(),.7*j),O=f.a.div(x(),.7*j),w=f.a.div(E()),A=f.a.div(b()),S=f.a.img(g()),N=function(e){var t=e.Select,n=e.setGenre,i=Object(a.useState)(!1),o=Object(c.a)(i,2),l=o[0],s=o[1],u=function(e){s(!e)},d=Object(a.useState)("Wybierz Gatunek"),m=Object(c.a)(d,2),p=m[0],f=m[1];return r.a.createElement(O,{props:function(e){t(p)},onClick:function(){return u(l)},style:{borderRadius:l?"10px 10px 0 0":"10px"}},r.a.createElement(k,{onClick:function(){return u(l)},style:{borderRadius:l?"10px 10px 0 0":"10px"}},r.a.createElement(S,{src:h.a,style:{transform:l?"rotate(-180deg)":"rotate(0)"}}),r.a.createElement("p",null,p)),r.a.createElement(w,{style:{borderRadius:l?"10px 10px 0 0":"10px"}},r.a.createElement("p",null,p)),r.a.createElement(A,{style:{transform:l?"translateY(0em)":"translateY(-3em)",visibility:l?"visible":"hidden"}},[{id:28,name:"Akcja"},{id:12,name:"Przygodowy"},{id:16,name:"Animacja"},{id:35,name:"Komedia"},{id:80,name:"Krymina\u0142"},{id:99,name:"Dokumentalny"},{id:18,name:"Dramat"},{id:10751,name:"Familijny"},{id:14,name:"Fantasy"},{id:36,name:"Historyczny"},{id:27,name:"Horror"},{id:10402,name:"Muzyczny"},{id:10749,name:"Romans"},{id:878,name:"SciFi"},{id:53,name:"Thriller"},{id:10752,name:"Wojenny"},{id:37,name:"Western"}].map((function(e){return r.a.createElement("div",{style:{height:l?"48px":"0"},key:e.id,onClick:function(){return t=e.name,a=e.id,f(t),void n(a);var t,a}},r.a.createElement("p",{style:{visibility:l?"visible":"hidden"}},e.name))}))))};function L(){var e=Object(u.a)(["\n  width: 24px;\n  height: 24px;\n  top: 10px;\n  margin: 0;\n  padding: 0;\n  display: inline-block;\n  position: absolute;\n  right: 15px;\n  transition: all 0.3s ease-in;\n"]);return L=function(){return e},e}function P(){var e=Object(u.a)(["\ntransition: all 0.3s ease-in;\ndisplay: block;\nz-index: 1;\ndiv {\n  transition: all 0.5s;\n  box-shadow: -4px 8px 6px #0000001f;\n  z-index: 2;\n  height: 50px;\n  background-color: grey;\n  padding: 0;\n  padding-left: 20px;\n  z-index: 5;\n  p{\n    padding: 3px 10px;\n        background: transparent;\n        border: 0;\n        border-bottom: 1px solid #03ce76;\n        color: #03ce76;\n        font-size: 20px;\n  }\n  &:last-child {\n    border-radius: 0 0 10px 10px;\n  }\n}\n"]);return P=function(){return e},e}function R(){var e=Object(u.a)(["\n  display: inline-block;\n  height: 100%;\n  width: 100%;\n  background-color: grey;\n  vertical-align: middle;\n  font-family: Rubik;\n  font-size: 1em;\n  z-index: 6;\n  transition: all 0.5s;\n"]);return R=function(){return e},e}function I(){var e=Object(u.a)(["\n  transition: all 0.5s;  \n  box-shadow: -4px 8px 6px #0000001f;\n  width: 220px;\n  height: 48px;\n  border-radius: 10px;\n  position: relative;\n  z-index: 10;\n  margin: 1em auto 0 auto;\n  @media (max-width: 800px) {\n      width: ","px;\n      text-align: left;\n      margin: 1em 0 0 0;\n    }\n"]);return I=function(){return e},e}function C(){var e=Object(u.a)(["\n  transition: all 0.5s;\n  width: 220px;\n  height: 48px;\n  position: absolute;\n  background-color: grey;\n  z-index: 12;\n  border-color: black;\n  border-radius: 10px;\n  p{\n    padding: 10px 10px;\n    background: transparent;\n    border: 0;  \n    color: #03ce76;\n    font-size: 20px;\n  }\n  @media (max-width: 800px) {\n      width: ","px;\n      text-align: left;\n    }\n"]);return C=function(){return e},e}var F=window.innerWidth,z=f.a.div(C(),.7*F),Y=f.a.div(I(),.7*F),T=f.a.div(R()),D=f.a.div(P()),G=f.a.img(L()),W=function(e){var t=e.Select,n=e.setYear,i=Object(a.useState)(!1),o=Object(c.a)(i,2),l=o[0],s=o[1],u=function(e){s(!e)},d=Object(a.useState)("Wybierz Rok"),m=Object(c.a)(d,2),p=m[0],f=m[1];return r.a.createElement(Y,{props:function(e){t(p)},onClick:function(){return u(l)},style:{borderRadius:l?"10px 10px 0 0":"10px"}},r.a.createElement(z,{onClick:function(){return u(l)},style:{borderRadius:l?"10px 10px 0 0":"10px"}},r.a.createElement(G,{src:h.a,style:{transform:l?"rotate(-180deg)":"rotate(0)"}}),r.a.createElement("p",null,p)),r.a.createElement(T,{style:{borderRadius:l?"10px 10px 0 0":"10px"}},r.a.createElement("p",null,p)),r.a.createElement(D,{style:{transform:l?"translateY(0em)":"translateY(-3em)",visibility:l?"visible":"hidden"}},[{year:"2022"},{year:"2021"},{year:"2020"},{year:"2019"},{year:"2018"},{year:"2017"},{year:"2016"},{year:"2015"},{year:"2014"},{year:"2013"},{year:"2012"},{year:"2011"},{year:"2010"},{year:"2009"},{year:"2008"},{year:"2007"},{year:"2006"},{year:"2005"},{year:"2004"},{year:"2003"},{year:"2002"},{year:"2001"},{year:"1999"},{year:"1998"},{year:"1997"},{year:"1996"}].map((function(e){return r.a.createElement("div",{style:{height:l?"48px":"0"},key:e.year,onClick:function(){return t=e.year,f(t),void n(t);var t}},r.a.createElement("p",{style:{visibility:l?"visible":"hidden"}},e.year))}))))},B=n(171),U={colors:{text:"#01d277",primary:"#555"}};function H(){var e=Object(u.a)(["\ndisplay: flex;\nflex-direction: row;\n"]);return H=function(){return e},e}function V(){var e=Object(u.a)([""]);return V=function(){return e},e}function Z(){var e=Object(u.a)(["\n    margin: auto;\n    width: 40vw;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    @media screen and (max-width: 800px) {\n        flex-direction: column;\n    }\n"]);return Z=function(){return e},e}function J(){var e=Object(u.a)(["\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n"]);return J=function(){return e},e}function K(){var e=Object(u.a)(["\n    list-style: none;\n    text-decoration: none;\n    font-weight: 700;\n    font-size: 18px;\n    color: #01d277;\n    border: 1px solid #555;\n    border-radius: 2px;\n    background-color: #555;\n    padding: 7px;\n    transition: ease-in .2s;\n    &:hover, &:focus {\n        cursor: pointer;\n    }\n"]);return K=function(){return e},e}function q(){var e=Object(u.a)(["\n    padding: 30px;\n    text-align: center;\n"]);return q=function(){return e},e}function X(){var e=Object(u.a)(["\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    @media screen and (max-width: 800px) {\n        flex-direction: column;\n    }\n"]);return X=function(){return e},e}var Q,M,_=d.a.div(X()),$=d.a.div(q()),ee=d.a.button(K()),te=d.a.div(J()),ne=d.a.div(Z()),ae=d.a.div(V()),re=d.a.div(H()),ie=function(e){var t=e.setYear,n=e.setGenreID,a=e.showGenre,i=e.changePage,o=e.handleInput,c=e.term,l=e.scrollTop,u=e.clearSearch,d=e.showTopRated,f=e.showLatest,v=e.showFavorite,h=e.showWatchlist;return r.a.createElement("header",null,r.a.createElement(B.a,{theme:U},r.a.createElement(_,null,r.a.createElement(ae,null,r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/React-movie-db"},r.a.createElement(p,{changePage:i,handleInput:o,term:c,scrollTop:l})))),r.a.createElement(re,null,r.a.createElement($,null,r.a.createElement(m.b,{to:"/React-movie-db",onClick:u},r.a.createElement(ee,null,"Home"))),r.a.createElement($,null,r.a.createElement(m.b,{to:"/React-movie-db",onClick:h},r.a.createElement(ee,null,"Do obejrzenia"))),r.a.createElement($,null,r.a.createElement(m.b,{to:"/React-movie-db",onClick:v},r.a.createElement(ee,null,"Ulubione"))))),r.a.createElement(te,null,r.a.createElement($,null,r.a.createElement(m.b,{to:"/React-movie-db",onClick:u},r.a.createElement(ee,null,"Popularno\u015b\u0107"))),r.a.createElement($,null,r.a.createElement(m.b,{to:"/React-movie-db",onClick:f},r.a.createElement(ee,null,"Najnowsze"))),r.a.createElement($,null,r.a.createElement(m.b,{to:"/React-movie-db",onClick:d},r.a.createElement(ee,null,"Najlepiej oceniane")))),r.a.createElement(ne,null,r.a.createElement(N,{setGenre:n,showGenre:a}),r.a.createElement(W,{setYear:t}),r.a.createElement($,null,r.a.createElement(m.b,{to:"/React-movie-db",onClick:a},r.a.createElement(ee,null,"Zaaplikuj filtry"))))))},oe=n(4),ce=n(9),le=n(3),se=document.querySelector("html"),ue="07110192b3fd8b432cc796b4c48dd507",de=(Q=0,M=20,Math.floor(Math.random()*(M-Q+1)+Q)),me=function(){function e(){Object(oe.a)(this,e),this.popular=[],this.loaded=!1,this.searchResults=[],this.term="",this.currentPage=1}return Object(ce.a)(e,[{key:"fetchPopular",value:function(e,t){var n=this;Object(le.n)((function(){n.loaded=!1})),fetch("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(ue,"&language=pl-PL&page=").concat(t)).then((function(e){return e.json()})).then((function(e){return n.setPopular(e),n.popular.results[de]?se.style.background="url(https://image.tmdb.org/t/p/w1280".concat(n.popular.results[de].backdrop_path,") \n              center center / cover no-repeat fixed"):null}))}},{key:"fetchGenre",value:function(e,t,n){var a=this;Object(le.n)((function(){a.loaded=!1})),fetch("https://api.themoviedb.org/3/discover/movie?api_key=".concat(ue,"&language=pl-PL&page=").concat(n,"&with_genres=").concat(e,"&primary_release_year=").concat(t)).then((function(e){return e.json()})).then((function(e){return a.setPopular(e),a.popular.results[de]?se.style.background="url(https://image.tmdb.org/t/p/w1280".concat(a.popular.results[de].backdrop_path,") \n              center center / cover no-repeat fixed"):null}))}},{key:"fetchByYear",value:function(e,t){var n=this;Object(le.n)((function(){n.loaded=!1})),fetch("https://api.themoviedb.org/3/discover/movie?api_key=".concat(ue,"&language=pl-PL&primary_release_year=").concat(e,"&page=").concat(t)).then((function(e){return e.json()})).then((function(e){return n.setPopular(e),n.popular.results[de]?se.style.background="url(https://image.tmdb.org/t/p/w1280".concat(n.popular.results[de].backdrop_path,") \n              center center / cover no-repeat fixed"):null}))}},{key:"fetchSearch",value:function(e,t){var n=this;Object(le.n)((function(){n.loaded=!1,n.currentPage=1})),fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(ue,"&language=pl-PL&query=").concat(e,"&page=").concat(t,"&include_adult=false")).then((function(e){return e.json()})).then((function(e){n.setSearch(e)}))}},{key:"setPopular",value:function(e){this.popular=e,this.loaded=!0,console.log("popular",this.popular)}},{key:"setSearch",value:function(e){this.searchResults=e,this.loaded=!0}}]),e}();Object(le.h)(me,{popular:le.m,search:le.m,currentPage:le.m,term:le.m,setPopular:le.d,setSearch:le.d,loaded:le.m});var pe=new me,fe=n(65),ve=n(47),he=function(e){var t=pe.popular,n=pe.loaded,a=e.changePage,i=e.scrollTop;return r.a.createElement("section",null,n?r.a.createElement("div",{className:"movies-grid"},t.results.map((function(e){var t=e.id,n=e.poster_path,a=e.original_title,o=e.release_date,c=e.vote_average;return r.a.createElement("div",{className:"movie-item infos-container",key:t},r.a.createElement(m.b,{to:"/React-movie-db/movie/".concat(t),onClick:i},r.a.createElement("img",{src:n?"https://image.tmdb.org/t/p/w500".concat(n):"".concat(ve),alt:"Movie Poster"}),r.a.createElement("div",{className:"infos-box"},r.a.createElement("div",{className:"infos-one"},o),r.a.createElement("div",{className:"infos-two"},a),r.a.createElement("div",{className:"infos-three"},c))))}))):r.a.createElement("div",{className:"loading"},"Loading..."),r.a.createElement("div",{className:"paginator"},r.a.createElement(fe.a,{total:t.total_results,pageSize:20,onChange:a})))},ge=n(47),be=function(e){var t=pe.loaded,n=e.scrollTop,i=JSON.parse(localStorage.getItem("FavoriteList")),o=Object(a.useState)(!0),l=Object(c.a)(o,2),s=l[0],u=l[1];return Object(a.useEffect)((function(){console.log(i);try{i.hasOwnProperty(0)&&u(!1)}catch(e){u(!0)}})),r.a.createElement("section",null,s?r.a.createElement("div",{className:"loading"},"Jeszcze nie masz \u017cadnych polubionych film\xf3w..."):r.a.createElement("div",null,t?r.a.createElement("div",{className:"movies-grid"},i.map((function(e){var t=e.id,a=e.poster_path,i=e.original_title,o=e.release_date,c=e.vote_average;return r.a.createElement("div",{className:"movie-item infos-container",key:t},r.a.createElement(m.b,{to:"React-movie-db/movie/".concat(t),onClick:n},r.a.createElement("img",{src:a?"https://image.tmdb.org/t/p/w500".concat(a):"".concat(ge),alt:"Movie Poster"}),r.a.createElement("div",{className:"infos-box"},r.a.createElement("div",{className:"infos-one"},o),r.a.createElement("div",{className:"infos-two"},i),r.a.createElement("div",{className:"infos-three"},c))))}))):r.a.createElement("div",{className:"loading"},"Loading...")))},Ee=n(47),xe=function(e){var t=pe.loaded,n=e.scrollTop,i=JSON.parse(localStorage.getItem("WatchList")),o=Object(a.useState)(!0),l=Object(c.a)(o,2),s=l[0],u=l[1];return Object(a.useEffect)((function(e,t){console.log(i);try{i.hasOwnProperty(0)&&u(!1)}catch(n){u(!0)}})),r.a.createElement("section",null,s?r.a.createElement("div",{className:"loading"},"Jeszcze nie masz \u017cadnych film\xf3w do obejrzenia..."):r.a.createElement("div",null,t?r.a.createElement("div",{className:"movies-grid"},i.map((function(e){var t=e.id,a=e.poster_path,i=e.original_title,o=e.release_date,c=e.vote_average;return r.a.createElement("div",{className:"movie-item infos-container",key:t},r.a.createElement(m.b,{to:"/React-movie-db/movie/".concat(t),onClick:n},r.a.createElement("img",{src:a?"https://image.tmdb.org/t/p/w500".concat(a):"".concat(Ee),alt:"Movie Poster"}),r.a.createElement("div",{className:"infos-box"},r.a.createElement("div",{className:"infos-one"},o),r.a.createElement("div",{className:"infos-two"},i),r.a.createElement("div",{className:"infos-three"},c))))}))):r.a.createElement("div",{className:"loading"},"Loading...")))},ye=n(47),je=Object(l.a)((function(e){var t=pe.searchResults,n=pe.loaded,a=e.changePage,i=e.scrollTop;return r.a.createElement("section",null,n?r.a.createElement("div",{className:"movies-grid"},t.results.map((function(e){var t=e.id,n=e.poster_path,a=e.release_date,o=e.original_title,c=e.vote_average;return r.a.createElement("div",{className:"movie-item infos-container",key:t},r.a.createElement(m.b,{to:"/movie/".concat(t),onClick:i},r.a.createElement("img",{src:n?"https://image.tmdb.org/t/p/w500".concat(n):"".concat(ye),alt:"Movie Poster"}),r.a.createElement("div",{className:"infos-box"},r.a.createElement("div",{className:"infos-one"},a),r.a.createElement("div",{className:"infos-two"},o),r.a.createElement("div",{className:"infos-three"},c))))}))):r.a.createElement("div",{className:"loading"},"Loading..."),r.a.createElement("div",{className:"paginator"},r.a.createElement(fe.a,{total:t.total_results,pageSize:20,onChange:a})))})),ke=function(e){var t=e.Watchlist,n=e.Favorite,a=e.term;return!1===t?!1===n?r.a.createElement("div",{className:"relative"},0===a.length?r.a.createElement(he,e):r.a.createElement(je,e)):r.a.createElement("div",{className:"relative"},0===a.length?r.a.createElement(be,e):r.a.createElement(je,e)):r.a.createElement("div",{className:"relative"},0===a.length?r.a.createElement(xe,e):r.a.createElement(je,e))},Oe=n(19),we=n(13),Ae=n(17),Se=document.querySelector("html"),Ne="07110192b3fd8b432cc796b4c48dd507",Le=function(){function e(){Object(oe.a)(this,e),this.details=[],this.credits=[],this.loaded=!1,this.recommendations=[]}return Object(ce.a)(e,[{key:"fetchAll",value:function(e){var t=this;Object(le.n)((function(){t.loaded=!1})),fetch("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(Ne,"&language=pl-PL")).then((function(e){return e.json()})).then((function(e){return t.setDetails(e),t.details?Se.style.background="url(https://image.tmdb.org/t/p/w1280".concat(t.details.backdrop_path,") \n                center center / cover no-repeat fixed"):null})),fetch("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(Ne)).then((function(e){return e.json()})).then((function(e){t.setCredits(e)})),fetch("https://api.themoviedb.org/3/movie/".concat(e,"/recommendations?api_key=").concat(Ne,"&language=pl-PL&page=1")).then((function(e){return e.json()})).then((function(e){return t.setRecommendations(e)}))}},{key:"setDetails",value:function(e){this.details=e}},{key:"setCredits",value:function(e){this.credits=e}},{key:"setRecommendations",value:function(e){this.recommendations=e,this.loaded=!0}}]),e}();Object(le.h)(Le,{details:le.m,credits:le.m,loaded:le.m,recommendations:le.m,setDetails:le.d,setCredits:le.d,setRecommendations:le.d});var Pe=new Le,Re=(n(163),n(12)),Ie=n(21);function Ce(){var e=Object(u.a)(["\n  width: 3em;\n  height: 3em;\n"]);return Ce=function(){return e},e}var Fe,ze=n(165),Ye=n(166),Te=f.a.img(Ce()),De=function(e){var t=Object(Ie.d)(Ge),n=Pe.details;return r.a.createElement("div",null,r.a.createElement(Te,{onClick:!1===e.inFavorite?function(){e.setinFavorite(!e.inFavorite),t((function(e){return[].concat(Object(Re.a)(e),[{id:n.id,poster_path:n.poster_path,release_date:n.release_date,original_title:n.title,vote_average:n.vote_average,isComplete:!1}])}))}:function(){e.setinFavorite(!e.inFavorite);var a=Object(Re.a)(e.favoriteList),r=a.findIndex((function(e){return e.id===n.id}));console.log("index ",r),a.splice(r,1),t(a)},src:!1===e.inFavorite?ze:Ye}))},Ge=Object(Ie.b)({key:"FavoriteState",default:[],effects:[(Fe="FavoriteList",function(e){var t=e.setSelf,n=e.onSet,a=localStorage.getItem(Fe);null!=a&&t(JSON.parse(a)),n((function(e,t,n){n?localStorage.removeItem(Fe):localStorage.setItem(Fe,JSON.stringify(e))}))})]}),We=function(e){var t=Object(Ie.c)(Ge),n=Pe.details,i=Object(a.useState)(!1),o=Object(c.a)(i,2),l=o[0],s=o[1];return Object(a.useEffect)((function(){t.map((function(e){return n.id===e.id})).indexOf(!0)>-1&&s(!0),console.log("List1 ",typeof t),console.log("inFavorite ",l)}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(De,{setinFavorite:s,inFavorite:l,favoriteList:t}))};function Be(){var e=Object(u.a)(["\n  width: 3em;\n  height: 3em;\n"]);return Be=function(){return e},e}var Ue=n(167),He=n(168),Ve=f.a.img(Be()),Ze=function(e){var t=Object(Ie.d)(Je),n=Pe.details;return r.a.createElement("div",null,r.a.createElement(Ve,{onClick:!1===e.inWatchList?function(){e.setinWatchList(!e.inWatchList),t((function(e){return[].concat(Object(Re.a)(e),[{id:n.id,poster_path:n.poster_path,release_date:n.release_date,original_title:n.title,vote_average:n.vote_average,isComplete:!1}])}))}:function(){e.setinWatchList(!e.inWatchList);var a=Object(Re.a)(e.watchList),r=a.findIndex((function(e){return e.id===n.id}));console.log("index ",r),a.splice(r,1),t(a)},src:!1===e.inWatchList?Ue:He}))},Je=Object(Ie.b)({key:"WatchlistState",default:[],effects:[function(e){return function(t){var n=t.setSelf,a=t.onSet,r=localStorage.getItem(e);null!=r&&n(JSON.parse(r)),a((function(t,n,a){a?localStorage.removeItem(e):localStorage.setItem(e,JSON.stringify(t))}))}}("WatchList")]}),Ke=function(e){var t=Object(Ie.c)(Je),n=Object(a.useState)(!1),i=Object(c.a)(n,2),o=i[0],l=i[1],s=Pe.details;return Object(a.useEffect)((function(){t.map((function(e){return s.id===e.id})).indexOf(!0)>-1&&l(!0),console.log("List1 ",t),console.log("List2 ",t.map((function(e){return t.findIndex((function(t){return t===e}))})))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(Ze,{watchList:t,inWatchList:o,setinWatchList:l}))};function qe(){var e=Object(u.a)(["\n    display: flex;\n    flex-direction: row;\n    width: 10em;\n    justify-content: space-around;\n"]);return qe=function(){return e},e}var Xe=n(47),Qe=f.a.div(qe()),Me=Object(l.a)(function(e){function t(){return Object(oe.a)(this,t),Object(Oe.a)(this,Object(we.a)(t).apply(this,arguments))}return Object(Ae.a)(t,e),Object(ce.a)(t,[{key:"componentDidMount",value:function(){Pe.fetchAll(this.props.id)}},{key:"render",value:function(){var e=Pe.loaded,t=Pe.details,n=Pe.credits,a=(Pe.recommendations,n.crew?n.crew.filter((function(e){return"Director"===e.job})):null),i=n.crew?a[0]:null,o=i?i.name:null;return r.a.createElement("div",{className:"relative"},e&&0!==t.length&&0!==n.length?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"movie-grid"},r.a.createElement("div",{className:"movie-poster"},r.a.createElement("img",{src:t.poster_path?"https://image.tmdb.org/t/p/w500".concat(t.poster_path):"".concat(Xe),alt:"Movie poster"})),r.a.createElement("div",{className:"infos-grid"},r.a.createElement("div",{className:"movie-title relative"},t.title),r.a.createElement("div",{className:"movie-infos"},r.a.createElement("span",{className:"movie-date"},t.release_date),r.a.createElement("span",{className:"movie-vote"},t.vote_average),r.a.createElement("span",{className:"movie-runtime"},Math.floor(t.runtime/60),"h ",t.runtime%60,"m")),r.a.createElement("div",{className:"movie-genres"},t.genres?t.genres.map((function(e,n){var a=e.id,i=e.name;return r.a.createElement("span",{key:a},n!==t.genres.length-1?"".concat(i,", "):" ".concat(i))})):null),r.a.createElement("div",{className:"movie-tagline"},t.tagline?t.tagline:null),r.a.createElement("div",{className:"movie-overview"},t.overview),r.a.createElement("div",{className:"movie-director"},r.a.createElement("span",{className:"director-job"},"Re\u017cyser"),r.a.createElement("span",{className:"director-name"},o)),r.a.createElement("div",null,r.a.createElement("span",{className:"main-cast"},"Obsada"),e?n.cast.map((function(e,t){return t<11?r.a.createElement("span",{key:e.cast_id},10!==t?"".concat(e.name,", "):"".concat(e.name)):null})):null),r.a.createElement(Ie.a,null,r.a.createElement(Qe,null,r.a.createElement(We,null),r.a.createElement(Ke,null)))))):r.a.createElement("div",{className:"loading"},"Loading"))}}]),t}(a.Component)),_e=(n(105),Object(l.a)((function(e){Object(a.useEffect)((function(){console.log("Pop",e.store.popular),e.store.fetchPopular("popular",e.store.currentPage),I("popular")}),[]);var t=function(t){var n=e.store.term=t.target.value;0===n?e.store.fetchPopular("popular",e.store.currentPage):e.store.fetchSearch(n,e.store.currentPage)},n=function(t){e.store.currentPage=t,console.log("page",t),0===e.store.term.length?e.store.fetchPopular(R,e.store.currentPage):e.store.fetchSearch(e.store.term,e.store.currentPage),i()},i=function(){window.scrollTo(0,0)},o=Object(a.useState)(""),l=Object(c.a)(o,2),u=l[0],d=l[1],m=Object(a.useState)(""),p=Object(c.a)(m,2),f=p[0],v=p[1],h=e.store,g=h.popular,b=h.searchResults,E=h.loaded,x=h.term,y=Object(a.useState)(!1),j=Object(c.a)(y,2),k=j[0],O=j[1],w=Object(a.useState)(!1),A=Object(c.a)(w,2),S=A[0],N=A[1],L=Object(a.useState)("popular"),P=Object(c.a)(L,2),R=P[0],I=P[1];return r.a.createElement("div",{className:"relative"},r.a.createElement(B.a,{theme:U},r.a.createElement(ie,{setCurrent:I,showByYear:function(){e.store.term="",e.store.currentPage=1,N(!1),O(!1),e.store.fetchByYear(f,e.store.currentPage)},setYear:v,setGenreID:d,showGenre:function(){e.store.term="",e.store.currentPage=1,N(!1),O(!1),e.store.fetchGenre(u,f,e.store.currentPage)},showWatchlist:function(){e.store.term="",e.store.currentPage=1,N(!0),O(!1)},showFavorite:function(){e.store.term="",e.store.currentPage=1,O(!0),N(!1)},handleInput:t,changePage:n,term:x,clearSearch:function(){e.store.term="",O(!1),N(!1),e.store.currentPage=1,e.store.fetchPopular("popular",e.store.currentPage),I("popular")},showTopRated:function(){e.store.term="",e.store.currentPage=1,e.store.fetchPopular("top_rated",e.store.currentPage),O(!1),N(!1),I("top_rated")},showLatest:function(){e.store.term="",e.store.currentPage=1,e.store.fetchPopular("upcoming",e.store.currentPage),O(!1),N(!1),I("latest")}})),r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/React-movie-db"},r.a.createElement(ke,{changePage:n,handleInput:t,term:e.store.term,scrollTop:i,Favorite:k,Watchlist:S}))),r.a.createElement(s.c,null," ",E?x?b.results.map((function(e){return r.a.createElement(s.a,{path:"/React-movie-db/movie/".concat(e.id),key:e.id},r.a.createElement(Me,{id:e.id,scrollTop:i}))})):g.results.map((function(e){return r.a.createElement(s.a,{path:"/React-movie-db/movie/".concat(e.id),key:e.id},r.a.createElement(Me,{id:e.id,scrollTop:i}))})):null))})));o.a.render(r.a.createElement(m.a,null,r.a.createElement(_e,{store:pe})),document.getElementById("root"))},47:function(e,t,n){e.exports=n.p+"static/media/nullw500.182fefd9.png"},60:function(e,t){e.exports="data:image/png;base64,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"},90:function(e,t,n){},92:function(e,t,n){}},[[113,1,2]]]);
//# sourceMappingURL=main.ef41db70.chunk.js.map