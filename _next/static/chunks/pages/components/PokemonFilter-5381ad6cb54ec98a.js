(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[140],{3981:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/PokemonFilter",function(){return t(167)}])},1691:function(e,n,t){"use strict";var r=t(7294);let l=r.createContext({});n.Z=l},167:function(e,n,t){"use strict";t.r(n);var r=t(2729),l=t(5893),o=t(7294),i=t(6829),s=t(9034),a=t.n(s),u=t(1691),c=t(6616);function d(){let e=(0,r._)(["\n  width: 100%;\n  font-size: x-large;\n  padding: 0.2rem;\n"]);return d=function(){return e},e}let p=i.Z.input(d());n.default=()=>{let{state:{filter:e=""}={},dispatch:n}=(0,o.useContext)(u.Z);return(0,l.jsx)(p,{className:a().search,value:e,onChange:e=>n({type:c.ACTION.set_filter,payload:e.target.value})})}},7036:function(e,n,t){"use strict";t.r(n);var r=t(5893),l=t(7294),o=t(1691);n.default=()=>{let{state:{selectedPokemon:e=null}={}}=(0,l.useContext)(o.Z);return e?(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{children:null==e?void 0:e.name.english}),(0,r.jsx)("table",{children:Object.keys(null==e?void 0:e.base).map(n=>(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:n}),(0,r.jsx)("td",{children:null==e?void 0:e.base[n]})]},n))})]}):null}},7626:function(e,n,t){"use strict";t.r(n);var r=t(5893),l=t(3169),o=t(5697),i=t.n(o);t(6829);let s=e=>{var n;let{pokemon:t,onSelect:o}=e;return(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:null==t?void 0:null===(n=t.name)||void 0===n?void 0:n.english}),(0,r.jsx)("td",{children:null==t?void 0:t.type.join(", ")}),(0,r.jsx)(l.Z,{variant:"contained",color:"primary",onClick:()=>o(t),children:"More information!"})]},null==t?void 0:t.id)};s.propTypes={pokemon:i().shape({name:i().shape({english:i().string}),type:i().arrayOf(i().string),onSelect:i().func})},n.default=s},6203:function(e,n,t){"use strict";t.r(n);var r=t(5893),l=t(7294),o=t(7626),i=t(9034),s=t.n(i),a=t(1691),u=t(6616);n.default=()=>{let{state:{pokemon:e=[],filter:n=""}={},dispatch:t}=(0,l.useContext)(a.Z);return(0,r.jsxs)("table",{width:"100%",children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{className:s().propertyName,children:"Name"}),(0,r.jsx)("th",{className:s().propertyName,children:"Type"})]})}),(0,r.jsx)("tbody",{children:null==e?void 0:e.filter(e=>null==e?void 0:e.name.english.toLowerCase().includes(null==n?void 0:n.toLowerCase())).slice(0,20).map(e=>(0,r.jsx)(o.default,{pokemon:e,onSelect:e=>t({type:u.ACTION.set_selected_pokemon,payload:e})},null==e?void 0:e.id))})]})}},6616:function(e,n,t){"use strict";t.r(n),t.d(n,{ACTION:function(){return j},default:function(){return v}});var r=t(2729),l=t(5893),o=t(7294);t(9008),t(5675),t(4185),t(3657),t(3078),t(8344);var i=t(6829),s=t(7036),a=t(167),u=t(6203),c=t(1691);function d(){let e=(0,r._)(["\n  text-align: center;\n"]);return d=function(){return e},e}function p(){let e=(0,r._)(["\n  display: grid;\n  grid-template-columns: 70% 30%;\n  grid-column-gap: 1rem;\n"]);return p=function(){return e},e}function h(){let e=(0,r._)(["\n  margin: auto;\n  width: 800px;\n  paddingtop: 1rem;\n"]);return h=function(){return e},e}let f=i.Z.h1(d()),m=i.Z.div(p()),_=i.Z.div(h()),x=(e,n)=>{switch(n.type){case j.set_filter:return{...e,filter:n.payload};case j.set_pokemon:return{...e,pokemon:n.payload};case j.set_selected_pokemon:return{...e,selectedPokemon:n.payload};default:throw Error("No action")}},j={set_filter:"SET_FILTER",set_pokemon:"SET_POKEMON",set_selected_pokemon:"SET_SELECTED_POKEMON"};function v(){let[e,n]=(0,o.useReducer)(x,{pokemon:[],filter:"",selectedPokemon:null}),t="https://vantwoutmaarten.github.io/blue-color-react/pokemon.json";return o.useEffect(()=>{fetch(t).then(e=>e.json()).then(e=>{n({type:"SET_POKEMON",payload:e})})},[t]),(0,l.jsx)(c.Z.Provider,{value:{state:e,dispatch:n},children:(0,l.jsxs)(_,{children:[(0,l.jsx)(f,{children:"Pokemon Search"}),(0,l.jsxs)(m,{children:[(0,l.jsxs)("div",{children:[(0,l.jsx)(a.default,{}),(0,l.jsx)(u.default,{})]}),(0,l.jsx)(s.default,{})]})]})})}},9034:function(e){e.exports={title:"Home_title__hYX6j",propertyName:"Home_propertyName__WLW2d",search:"Home_search__6cQww"}}},function(e){e.O(0,[697,306,774,888,179],function(){return e(e.s=3981)}),_N_E=e.O()}]);