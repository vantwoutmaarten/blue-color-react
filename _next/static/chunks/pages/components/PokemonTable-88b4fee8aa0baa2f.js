(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[294],{1866:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/PokemonTable",function(){return t(6203)}])},1691:function(e,n,t){"use strict";var r=t(7294);let o=r.createContext({});n.Z=o},7626:function(e,n,t){"use strict";t.r(n);var r=t(5893),o=t(3169),i=t(5697),s=t.n(i);t(6829);let l=e=>{var n;let{pokemon:t,onSelect:i}=e;return(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:null==t?void 0:null===(n=t.name)||void 0===n?void 0:n.english}),(0,r.jsx)("td",{children:null==t?void 0:t.type.join(", ")}),(0,r.jsx)(o.Z,{variant:"contained",color:"primary",onClick:()=>i(t),children:"More information!"})]},null==t?void 0:t.id)};l.propTypes={pokemon:s().shape({name:s().shape({english:s().string}),type:s().arrayOf(s().string),onSelect:s().func})},n.default=l},6203:function(e,n,t){"use strict";t.r(n);var r=t(5893),o=t(7294),i=t(7626),s=t(9034),l=t.n(s),a=t(1691);n.default=()=>{let{pokemon:e,filter:n,selectedPokemonSet:t}=(0,o.useContext)(a.Z);return(0,r.jsxs)("table",{width:"100%",children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{className:l().propertyName,children:"Name"}),(0,r.jsx)("th",{className:l().propertyName,children:"Type"})]})}),(0,r.jsx)("tbody",{children:null==e?void 0:e.filter(e=>e.name.english.toLowerCase().includes(n.toLowerCase())).slice(0,20).map(e=>(0,r.jsx)(i.default,{pokemon:e,onSelect:e=>t(e)},e.id))})]})}},9034:function(e){e.exports={title:"Home_title__hYX6j",propertyName:"Home_propertyName__WLW2d",search:"Home_search__6cQww"}}},function(e){e.O(0,[697,774,888,179],function(){return e(e.s=1866)}),_N_E=e.O()}]);