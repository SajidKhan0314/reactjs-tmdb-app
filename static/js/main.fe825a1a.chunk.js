(this["webpackJsonpmovie-imdb"]=this["webpackJsonpmovie-imdb"]||[]).push([[0],{18:function(e,t,a){e.exports={App:"App_App__2bcEA",showMainData:"App_showMainData__1jjuD"}},2:function(e,t,a){e.exports={Main:"Details_Main__PTXoS",Row:"Details_Row__2XPAV",Column:"Details_Column__2xAyQ",MovieImg:"Details_MovieImg__3wNoG",Details:"Details_Details__3rt6-",MovieTitle:"Details_MovieTitle__2f4jv",MovieDetails:"Details_MovieDetails__1ZLjM",AdditionalDetails:"Details_AdditionalDetails__31GcF",TagLine:"Details_TagLine__1H12O",AdditionalDetailsTagline:"Details_AdditionalDetailsTagline__2QUj9"}},23:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),c=a(17),s=a.n(c),o=(a(23),a(6)),r=a.n(o),l=a(18),u=a.n(l),d=a(2),j=a.n(d),b=a(4),g=a(0),p={id:"",poster_path:"",backdrop_path:"",title:"",tagline:"",overview:"",genres:[],production_companies:[],release_data:"",runtime:"",revenue:"",vote_average:""},v=i.a.createContext(p),m=function(e){var t=Object(n.useState)(p),a=Object(b.a)(t,2),i=a[0],c=a[1],s="linear-gradient(rgba(0,0,0,.85) 15%,rgba(0,0,0,.2) 40%,#000 90%),url('".concat(i.backdrop_path,"')");document.body.style.backgroundImage=s;var o=Object(n.useCallback)((function(e){var t=Object.keys(e.genres).map((function(t){return e.genres[t].name})),a=Object.keys(e.production_companies).map((function(t){return e.production_companies[t].name}));c({id:e.id,poster_path:"https://image.tmdb.org/t/p/w500/".concat(e.poster_path),backdrop_path:"https://image.tmdb.org/t/p/original/".concat(e.backdrop_path),title:e.original_title,tagline:e.tagline,overview:e.overview,genres:t,production_companies:a,release_date:e.release_date,runtime:e.runtime,revenue:e.revenue,vote_average:e.vote_average})}),[]);return Object(g.jsx)(v.Provider,{value:{movieDetails:i,setMovieDetails:o},children:e.children})},_=function(e){var t=Object(n.useContext)(v).movieDetails;return Object(g.jsxs)("main",{className:j.a.Main,children:[Object(g.jsx)("img",{className:j.a.MovieImg,src:t.poster_path,alt:"Movie Name"}),Object(g.jsxs)("div",{className:j.a.Details,children:[Object(g.jsx)("span",{className:j.a.MovieTitle,children:t.title}),Object(g.jsx)("span",{className:j.a.TagLine,children:t.tagline}),Object(g.jsx)("p",{className:j.a.MovieDetails,children:t.overview}),Object(g.jsx)("br",{}),Object(g.jsx)("span",{className:j.a.TagLine,children:t.genres.join(", ")}),Object(g.jsx)("span",{className:j.a.AdditionalDetails,children:t.production_companies.join(", ")}),Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),Object(g.jsxs)("div",{className:j.a.Row,children:[Object(g.jsxs)("div",{className:j.a.Column,children:[Object(g.jsx)("span",{className:j.a.AdditionalDetailsTagline,children:"Original Release:"}),Object(g.jsx)("span",{className:j.a.TagLine,children:t.release_date}),Object(g.jsx)("br",{}),Object(g.jsx)("span",{className:j.a.AdditionalDetailsTagline,children:"Box Office:"}),Object(g.jsxs)("span",{className:j.a.TagLine,children:["$",t.revenue]})]}),Object(g.jsxs)("div",{className:j.a.Column,children:[Object(g.jsx)("span",{className:j.a.AdditionalDetailsTagline,children:"Running Time:"}),Object(g.jsxs)("span",{className:j.a.TagLine,children:[t.runtime," mins"]}),Object(g.jsx)("br",{}),Object(g.jsx)("span",{className:j.a.AdditionalDetailsTagline,children:"Vote Average:"}),Object(g.jsxs)("span",{className:j.a.TagLine,children:[t.vote_average," / 10"]})]}),Object(g.jsx)("div",{})]})]})]})},h=a.p+"static/media/logo.2065310e.svg",O=a(8),f=a.n(O),x=function(e){return Object(g.jsx)("div",{className:f.a.Logo,children:Object(g.jsx)("img",{className:f.a.LogoImg,src:h,alt:"Logo"})})},D=a(5),L=a.n(D),w=function(e){var t=Object(n.useContext)(v).setMovieDetails,a=Object(n.useState)(""),i=Object(b.a)(a,2),c=i[0],s=i[1],o=Object(n.useState)(""),l=Object(b.a)(o,2),u=l[0],d=l[1],j=Object(n.useState)(!0),p=Object(b.a)(j,2),m=p[0],_=p[1],h=Object(n.useState)([]),O=Object(b.a)(h,2),f=O[0],D=O[1],w=Object(n.useState)(0),N=Object(b.a)(w,2),k=N[0],M=N[1],T=Object(n.useRef)(null),A=Object(n.useRef)(null),C=Object(n.useCallback)((function(e){m&&f.length>0&&"ArrowDown"===e.key?M((function(e){return e+1>(f.length>5?5:f.length)?1:e+1})):m&&f.length>0&&"ArrowUp"===e.key&&M((function(e){return e-1<1?f.length>5?5:f.length:e-1}))}),[m,f.length]),y=Object(n.useCallback)((function(e){e.stopPropagation(),_(!0)}),[]),E=Object(n.useCallback)((function(){_(!1),M(0)}),[]);Object(n.useEffect)((function(){return window.addEventListener("keydown",C),function(){window.removeEventListener("keydown",C)}}),[C]),Object(n.useEffect)((function(){k&&A.current.children[k-1].children[0].focus()}),[k]),Object(n.useEffect)((function(){var e=T.current;return e.focus(),e.addEventListener("click",y),window.addEventListener("click",E),function(){e.removeEventListener("click",y),window.removeEventListener("click",E)}}),[y,E]),Object(n.useEffect)((function(){var e=setTimeout((function(){if(""!==c.trim()){var e=c.split(" ").join("+");r.a.get("https://api.themoviedb.org/3/search/movie?api_key=".concat("1115fb0436d21fc0905dbb235b1ae399","&query=").concat(e)).then((function(e){D(e.data.results)})).catch((function(e){console.log(e)}))}}),200);return function(){clearTimeout(e)}}),[c]),Object(n.useEffect)((function(){u&&r.a.get("https://api.themoviedb.org/3/movie/".concat(u,"?api_key=").concat("1115fb0436d21fc0905dbb235b1ae399")).then((function(e){t(e.data)})).catch((function(e){console.log(e)}))}),[u,t]);var I=Object(n.useCallback)((function(e){s(e.original_title),d(e.id)}),[]),S=null,H=[L.a.EmptyMovieList];if(f.length>0){H=[L.a.MovieList];var F=f.length>5?5:f.length;S=Object(g.jsx)("ul",{ref:A,className:H.join(" "),children:Object.keys(f).slice(0,F).map((function(e){return Object(g.jsx)("li",{onClick:function(){return I(f[e])},children:Object(g.jsx)("button",{children:f[e].original_title})},f[e].id)}))})}return Object(g.jsxs)("header",{className:L.a.Header,children:[Object(g.jsx)(x,{}),Object(g.jsxs)("div",{className:L.a.DropDown,children:[Object(g.jsx)("input",{className:L.a.SearchInput,value:c,placeholder:"Search Movie Title...",ref:T,onChange:function(e){return s(e.target.value)}}),m&&S]})]})};var N=function(){var e=Object(n.useContext)(v),t=e.movieDetails,a=e.setMovieDetails;return Object(n.useEffect)((function(){r.a.get("https://api.themoviedb.org/3/movie/343611?api_key=".concat("1115fb0436d21fc0905dbb235b1ae399")).then((function(e){a(e.data)})).catch((function(e){console.log(e)}))}),[a]),t.title.length<=0?null:Object(g.jsxs)("div",{className:u.a.App,children:[Object(g.jsx)(w,{}),Object(g.jsx)(_,{})]})},k=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,44)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),i(e),c(e),s(e)}))};s.a.render(Object(g.jsx)(i.a.StrictMode,{children:Object(g.jsx)(m,{children:Object(g.jsx)(N,{})})}),document.getElementById("root")),k()},5:function(e,t,a){e.exports={Header:"Header_Header__1gI8p",DropDown:"Header_DropDown__2p4Fx",SearchInput:"Header_SearchInput__1zC28",MovieList:"Header_MovieList__2v0YV",showList:"Header_showList__2F1eI"}},8:function(e,t,a){e.exports={Logo:"Logo_Logo__2o_j-",LogoImg:"Logo_LogoImg__2LxIO"}}},[[43,1,2]]]);
//# sourceMappingURL=main.fe825a1a.chunk.js.map