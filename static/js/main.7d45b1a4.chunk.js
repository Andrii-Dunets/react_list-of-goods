(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{15:function(e,t,s){},17:function(e,t,s){"use strict";s.r(t);var n,r=s(4),c=s.n(r),a=s(5),i=s(6),o=s(9),l=s(7),u=s(8),h=s(1),d=s.n(h),b=s(2),p=s.n(b),j=(s(14),s(15),s(0)),N=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(e){e[e.NONE=0]="NONE",e[e.ALPHABET=1]="ALPHABET",e[e.LENGTH=2]="LENGTH"}(n||(n={}));var v=function(e){Object(o.a)(s,e);var t=Object(l.a)(s);function s(){var e;Object(a.a)(this,s);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={isReversed:!1,sortType:n.NONE},e.handleAlphabetSort=function(){e.setState({sortType:n.ALPHABET})},e.handleLengthSort=function(){e.setState({sortType:n.LENGTH})},e.handleReverse=function(){e.setState((function(e){return{isReversed:!e.isReversed}}))},e.handleReset=function(){e.setState({isReversed:!1,sortType:n.NONE})},e}return Object(i.a)(s,[{key:"render",value:function(){var e=this.state,t=e.sortType,s=e.isReversed,r=function(e,t){var s=t.sortType,r=t.isReversed,c=Object(u.a)(e);return s!==n.NONE&&c.sort((function(e,t){switch(s){case n.LENGTH:return e.length-t.length;case n.ALPHABET:return e.localeCompare(t);default:return 0}})),r&&c.reverse(),c}(N,{sortType:t,isReversed:s});return Object(j.jsxs)("div",{className:"section content",children:[Object(j.jsxs)("div",{className:"buttons",children:[Object(j.jsx)("button",{type:"button",className:p()("button","is-success",{"is-light":t!==n.ALPHABET}),onClick:this.handleAlphabetSort,children:"Sort alphabetically"}),Object(j.jsx)("button",{type:"button",className:p()("button","is-success",{"is-light":t!==n.LENGTH}),onClick:this.handleLengthSort,children:"Sort by length"}),Object(j.jsx)("button",{type:"button",className:p()("button","is-warning",{"is-light":!s}),onClick:this.handleReverse,children:"Reverse"}),(t!==n.NONE||!0===s)&&Object(j.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:this.handleReset,children:"Reset"})]}),Object(j.jsx)("ul",{children:Object(j.jsx)("ul",{children:r.map((function(e){return Object(j.jsx)("li",{"data-cy":"Good",children:e},e)}))})})]})}}]),s}(d.a.Component);c.a.render(Object(j.jsx)(v,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.7d45b1a4.chunk.js.map