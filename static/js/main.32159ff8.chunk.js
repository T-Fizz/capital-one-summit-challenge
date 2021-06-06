(this["webpackJsonpmovies-app"]=this["webpackJsonpmovies-app"]||[]).push([[0],{10:function(e){e.exports=JSON.parse('{"movies":["The Wizard of Oz","The Great Gatsby","Jurassic Park","The Godfather","Schindler\'s List","The Matrix","Stargate","X-Men","Harry Potter and the Chamber of Secrets"]}')},17:function(e,t,s){},18:function(e,t,s){"use strict";s.r(t);var a=s(1),i=s.n(a),l=s(8),n=s.n(l),o=s(3),r=s(4),c=s(6),h=s(5),d=s(9),u=s.n(d),j=s(2),b=s(10),O="https://www.omdbapi.com/?apikey=dc24cbd7&type=movie",p=s(0),g=b.movies,m=function(e){Object(c.a)(s,e);var t=Object(h.a)(s);function s(e){var a;Object(o.a)(this,s),(a=t.call(this,e)).state={searchBarContainerClassName:"search-bar-container",isEmpty:!0,queryURI:"",isSubmitted:!1};var i=Math.floor(Math.random()*g.length);return a.exampleMovie=g[i],a.handleChange=a.handleChange.bind(Object(j.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(j.a)(a)),a}return Object(r.a)(s,[{key:"handleChange",value:function(e){var t=O+"&s="+e.target.value.trim().split(" ").join("+")+"&page=1";this.setState({isEmpty:0===e.target.value.trim().length,queryURI:t})}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.state.queryURI;!this.state.isEmpty&&this.props.onSubmit&&(this.props.onSubmit(t),console.log("passed uri using props function"),this.setState({searchBarContainerClassName:"search-bar-container-with-results"})),console.log(t)}},{key:"render",value:function(){return Object(p.jsx)("div",{className:this.state.searchBarContainerClassName,children:Object(p.jsx)("div",{className:"search-bar",children:Object(p.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(p.jsx)("label",{htmlFor:"search-query",children:"Movie Search"}),Object(p.jsx)("br",{}),Object(p.jsxs)("div",{className:"search-input-container",children:[Object(p.jsx)("input",{placeholder:this.exampleMovie,onChange:this.handleChange,value:this.state.query}),Object(p.jsx)("button",{children:"Search"})]})]})})})}}]),s}(i.a.Component),v=function(e){Object(c.a)(s,e);var t=Object(h.a)(s);function s(e){var a;return Object(o.a)(this,s),(a=t.call(this,e)).state={status:"false",data:{}},a.fetchAdditionalDetails(),a}return Object(r.a)(s,[{key:"fetchAdditionalDetails",value:function(){var e=this;console.log("getting details for "+this.props.title),fetch(O+"&i="+this.props.imdbID).then((function(e){return e.json()})).then((function(t){console.log(t),"false"===t.Response?e.setState({status:"error",details:{}}):(e.setState({status:"loading",details:t}),e.updateValuesToDisplay(),console.log("Details Obtained "+Date.now()))}),(function(e){console.log(e)}))}},{key:"updateValuesToDisplay",value:function(){var e=this.state.details;if(console.log(this.state.details),void 0===this.state.details)console.error("DETAILS IS UNDEFINED!");else{var t;if("N/A"!==this.state.details.Released){var s=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],a=this.state.details.Released.split(" "),i=a[0];console.log(a);var l=s.indexOf(a[1])+1>=10?s.indexOf(a[1]):"0"+s.indexOf(a[1]),n=a[2];t=new Date("".concat(n,"-").concat(l,"-").concat(i))}console.log("r: "+this.state.details.Released),e.Plot="N/A"!==this.state.details.Plot?this.state.details.Plot:"",e.Actors="N/A"!==this.state.details.Actors?this.state.details.Actors:"-",e.Production="N/A"!==this.state.details.Production?this.state.details.Production:"-",e.imdbRating="N/A"!==this.state.details.imdbRating?this.state.details.imdbRating:"-",e.Genre="N/A"!==this.state.details.Genre?this.state.details.Genre:"-",e.Rated="N/A"!==this.state.details.Rated?this.state.details.Rated:"-",e.Runtime="N/A"!==this.state.details.Runtime?this.state.details.Runtime:"-",e.Country="N/A"!==this.state.details.Country?this.state.details.Country:"-",e.Language="N/A"!==this.state.details.Language?this.state.details.Language:"-",e.Released="N/A"!==this.state.details.Released?t.toLocaleDateString():"-",this.setState({status:"true",details:e})}}},{key:"render",value:function(){return console.log("details render"),"true"===this.state.status?Object(p.jsxs)("div",{className:"details-container",children:[Object(p.jsx)("div",{className:"details-top",children:Object(p.jsx)("p",{className:"plot",id:"plot",children:this.state.details.Plot})}),Object(p.jsx)("div",{className:"details-bottom",children:Object(p.jsxs)("ul",{className:"details-list",children:[Object(p.jsxs)("li",{children:[Object(p.jsx)("p",{className:"detail-label",children:"Actors: "}),Object(p.jsx)("p",{children:this.state.details.Actors})]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("p",{className:"detail-label",children:"Studios: "}),Object(p.jsx)("p",{children:this.state.details.Production})]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("p",{className:"detail-label",children:"Premiered: "}),Object(p.jsx)("p",{children:this.state.details.Released})]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("p",{className:"detail-label",children:"IMDB Rating: "}),Object(p.jsx)("p",{children:this.state.details.imdbRating})]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("p",{className:"detail-label",children:"Genre: "}),Object(p.jsx)("p",{children:this.state.details.Genre})]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("p",{className:"detail-label",children:"Rating: "}),Object(p.jsx)("p",{children:this.state.details.Rated})]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("p",{className:"detail-label",children:"Length: "}),Object(p.jsx)("p",{children:this.state.details.Runtime})]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("p",{className:"detail-label",children:"Country: "}),Object(p.jsx)("p",{children:this.state.details.Country})]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("p",{className:"detail-label",children:"Language: "}),Object(p.jsx)("p",{children:this.state.details.Language})]})]})})]}):"loading"===this.state.status?Object(p.jsx)("div",{className:"details-container",children:Object(p.jsx)("p",{className:"details-loading",children:"Fetching details..."})}):Object(p.jsx)("div",{className:"details-container",children:Object(p.jsx)("p",{className:"details-error",children:"Something went wrong!"})})}}]),s}(i.a.Component),f=s.p+"static/media/img-placeholder.f9c8df69.png",x=function(e){Object(c.a)(s,e);var t=Object(h.a)(s);function s(e){var a;return Object(o.a)(this,s),(a=t.call(this,e)).titleStyles=["result-title-no-details","result-title-no-details-hovering"],a.state={wasClicked:!1,titleStyle:0},a.handleOnClick=a.handleOnClick.bind(Object(j.a)(a)),a.handleOnMouseOver=a.handleOnMouseOver.bind(Object(j.a)(a)),a.handleOnMouseOut=a.handleOnMouseOut.bind(Object(j.a)(a)),a}return Object(r.a)(s,[{key:"handleOnClick",value:function(e){e.preventDefault(),this.setState({wasClicked:!0})}},{key:"handleOnMouseOver",value:function(e){this.setState({titleStyle:1})}},{key:"handleOnMouseOut",value:function(e){this.setState({titleStyle:0})}},{key:"render",value:function(){var e=Object(p.jsx)("div",{className:"result-no-details-container",children:Object(p.jsxs)("div",{className:"result-no-details",onClick:this.handleOnClick,children:[Object(p.jsx)("div",{className:"result-title-no-details-container",children:Object(p.jsx)("button",{className:this.titleStyles[this.state.titleStyle],onMouseOver:this.handleOnMouseOver,onMouseOut:this.handleOnMouseOut,children:this.props.title})}),Object(p.jsx)("div",{className:"result-info-no-details-container",children:Object(p.jsxs)("p",{className:"result-info-no-details",children:["(",this.props.year,")"]})})]})});return!0===this.state.wasClicked&&(e=Object(p.jsxs)("div",{className:"result",onClick:this.handleOnClick,children:[Object(p.jsxs)("div",{className:"result-info",children:[Object(p.jsxs)("div",{className:"result-title-container",children:[Object(p.jsx)("div",{className:"result-title",children:Object(p.jsx)("p",{children:this.props.title})}),Object(p.jsx)("div",{className:"result-year",children:Object(p.jsxs)("p",{children:["(",this.props.year,")"]})})]}),this.state.wasClicked&&Object(p.jsx)(v,{img:this.props.img,title:this.props.title,type:this.props.type,year:this.props.year,imdbID:this.props.imdbID})]}),Object(p.jsx)("div",{className:"result-img-container",children:"N/A"===this.props.img?Object(p.jsx)("img",{className:"result-img",src:f,alt:"Movie Poster PlaceHolder"}):Object(p.jsx)("img",{className:"result-img",src:this.props.img,alt:"Movie Poster"})})]})),e}}]),s}(i.a.Component),y=function(e){Object(c.a)(s,e);var t=Object(h.a)(s);function s(e){var a;return Object(o.a)(this,s),(a=t.call(this,e)).buttonStyles=["show-more","show-more-hovering","show-more-invisible"],console.log("Show more was generated"),a.state={pagesRemaining:a.props.pagesRemaining,buttonStyle:0},a.handleOnClick=a.handleOnClick.bind(Object(j.a)(a)),a.handleOnMouseOver=a.handleOnMouseOver.bind(Object(j.a)(a)),a.handleOnMouseOut=a.handleOnMouseOut.bind(Object(j.a)(a)),a}return Object(r.a)(s,[{key:"handleOnClick",value:function(e){this.props.onClick&&this.props.onClick()}},{key:"handleOnMouseOver",value:function(e){this.setState({buttonStyle:1})}},{key:"handleOnMouseOut",value:function(e){this.setState({buttonStyle:0})}},{key:"render",value:function(){return Object(p.jsx)("div",{className:"show-more-container",children:Object(p.jsx)("button",{className:this.buttonStyles[this.state.buttonStyle],id:"show-more",onClick:this.handleOnClick,onMouseOver:this.handleOnMouseOver,onMouseOut:this.handleOnMouseOut,children:"(Show More Results)"})})}}]),s}(i.a.Component),N=function(e){Object(c.a)(s,e);var t=Object(h.a)(s);function s(e){var a;return Object(o.a)(this,s),(a=t.call(this,e)).state={resultsURI:"",currentPage:1,showMorePageIterator:0,fulfilled:!1,status:null,results:[],totalResults:0,canLoadMore:!1},a}return Object(r.a)(s,[{key:"goToPage",value:function(e){console.log(e);var t=e.selected+1;console.log("gotopage"+this.state.resultsURI);var s=this.state.resultsURI.split("&page=")[0]+"&page=".concat(t);console.log("pageURI"+s),this.setState({currentPage:t,results:[],status:"loading",showMorePageIterator:0}),console.log(s),this.getResults(s)}},{key:"getResults",value:function(e){var t=this,s=arguments.length>1&&void 0!==arguments[1]&&arguments[1];console.log("getting results for list"),console.log(e),fetch(e).then((function(e){return e.json()})).then((function(a){if(console.log(a),"False"===a.Response)t.setState({fulfilled:!1,status:a.Error,totalResults:0});else{console.log();var i,l,n,o=10*(t.state.currentPage+t.state.showMorePageIterator);i=o<a.totalResults,console.log("Current page:"+t.state.currentPage),console.log("page iter:"+t.state.showMorePageIterator),console.log(a.totalResults),console.log(o),console.log(i),!0===s?(l=t.state.results.concat(a.Search),n=t.state.showMorePageIterator):(l=a.Search,n=0),t.setState({fulfilled:!0,status:"Showing Results",results:l,totalResults:a.totalResults,resultsURI:e,canLoadMore:i,showMorePageIterator:n})}}),(function(e){console.log(e)}))}},{key:"onResults",value:function(){this.state.fulfilled&&this.props.onResults&&(this.props.onResults(this.state.fulfilled),console.log("Changed CSS file!"))}},{key:"showMore",value:function(){this.setState({status:"loading"});var e=this.state.showMorePageIterator+1;this.setState({showMorePageIterator:e}),console.log(e+":"+this.state.showMorePageIterator);var t=this.state.resultsURI.split("&page=")[0],s=this.state.currentPage+this.state.showMorePageIterator+1,a=t+("&page="+s);console.log(a),this.getResults(a,!0),Math.ceil(this.state.totalResults/10)-s<=0&&this.setState({canLoadMore:!1})}},{key:"render",value:function(){var e=this;return Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{className:"search-header",children:Object(p.jsx)(m,{onSubmit:function(t){return e.getResults(t)}})}),Object(p.jsx)("div",{className:"results-status-container",children:!0!==this.state.fulfilled&&Object(p.jsx)("h3",{className:"results-status",children:this.state.status})}),!0===this.state.fulfilled&&this.state.results.map((function(e){return Object(p.jsx)("div",{children:Object(p.jsx)(x,{img:e.Poster,title:e.Title,type:e.Type,year:e.Year,imdbID:e.imdbID})},e.imdbID)})),!0===this.state.canLoadMore&&Object(p.jsx)(y,{onClick:this.showMore.bind(this),canLoadMore:this.state.canLoadMore,pagesRemaining:Math.ceil(this.state.totalResults/10)-this.state.currentPage}),!0===this.state.fulfilled&&Object(p.jsx)("div",{className:"paginate-container",children:Object(p.jsx)(u.a,{containerClassName:"pagination",pageCount:Math.ceil(this.state.totalResults/10),pageRangeDisplayed:5,marginPagesDisplayed:2,onPageChange:this.goToPage.bind(this)})}),!0===this.state.fulfilled&&Object(p.jsx)("p",{id:"foot-note",children:'"-" represents unavailable information.'})]})}}]),s}(i.a.Component);var S=function(){return Object(p.jsx)("div",{children:Object(p.jsx)(N,{})})};s(17);n.a.render(Object(p.jsx)(S,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.32159ff8.chunk.js.map