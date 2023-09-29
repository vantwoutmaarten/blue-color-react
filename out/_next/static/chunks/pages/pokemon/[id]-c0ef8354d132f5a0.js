(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[465],{4778:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pokemon/[id]",function(){return r(8593)}])},8593:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return et},default:function(){return er}});var a=r(2729),o=r(5893),n=r(5296),i=r(3366),l=r(7462),d=r(7294),s=r(512),c=r(4780);let p=d.createContext();var u=r(7623),g=r(1093),h=r(1588),v=r(7621);function m(e){return(0,v.Z)("MuiTable",e)}(0,h.Z)("MuiTable",["root","stickyHeader"]);let y=["className","component","padding","size","stickyHeader"],f=e=>{let{classes:t,stickyHeader:r}=e;return(0,c.Z)({root:["root",r&&"stickyHeader"]},m,t)},b=(0,g.ZP)("table",{name:"MuiTable",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,r.stickyHeader&&t.stickyHeader]}})(({theme:e,ownerState:t})=>(0,l.Z)({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":(0,l.Z)({},e.typography.body2,{padding:e.spacing(2),color:(e.vars||e).palette.text.secondary,textAlign:"left",captionSide:"bottom"})},t.stickyHeader&&{borderCollapse:"separate"})),Z="table",x=d.forwardRef(function(e,t){let r=(0,u.Z)({props:e,name:"MuiTable"}),{className:a,component:n=Z,padding:c="normal",size:g="medium",stickyHeader:h=!1}=r,v=(0,i.Z)(r,y),m=(0,l.Z)({},r,{component:n,padding:c,size:g,stickyHeader:h}),x=f(m),w=d.useMemo(()=>({padding:c,size:g,stickyHeader:h}),[c,g,h]);return(0,o.jsx)(p.Provider,{value:w,children:(0,o.jsx)(b,(0,l.Z)({as:n,role:n===Z?null:"table",ref:t,className:(0,s.Z)(x.root,a),ownerState:m},v))})}),w=d.createContext();function k(e){return(0,v.Z)("MuiTableHead",e)}(0,h.Z)("MuiTableHead",["root"]);let T=["className","component"],j=e=>{let{classes:t}=e;return(0,c.Z)({root:["root"]},k,t)},R=(0,g.ZP)("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-header-group"}),C={variant:"head"},M="thead",H=d.forwardRef(function(e,t){let r=(0,u.Z)({props:e,name:"MuiTableHead"}),{className:a,component:n=M}=r,d=(0,i.Z)(r,T),c=(0,l.Z)({},r,{component:n}),p=j(c);return(0,o.jsx)(w.Provider,{value:C,children:(0,o.jsx)(R,(0,l.Z)({as:n,className:(0,s.Z)(p.root,a),ref:t,role:n===M?null:"rowgroup",ownerState:c},d))})});var N=r(1796);function $(e){return(0,v.Z)("MuiTableRow",e)}let _=(0,h.Z)("MuiTableRow",["root","selected","hover","head","footer"]),z=["className","component","hover","selected"],P=e=>{let{classes:t,selected:r,hover:a,head:o,footer:n}=e;return(0,c.Z)({root:["root",r&&"selected",a&&"hover",o&&"head",n&&"footer"]},$,t)},S=(0,g.ZP)("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,r.head&&t.head,r.footer&&t.footer]}})(({theme:e})=>({color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,[`&.${_.hover}:hover`]:{backgroundColor:(e.vars||e).palette.action.hover},[`&.${_.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,N.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity),"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:(0,N.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity)}}})),A=d.forwardRef(function(e,t){let r=(0,u.Z)({props:e,name:"MuiTableRow"}),{className:a,component:n="tr",hover:c=!1,selected:p=!1}=r,g=(0,i.Z)(r,z),h=d.useContext(w),v=(0,l.Z)({},r,{component:n,hover:c,selected:p,head:h&&"head"===h.variant,footer:h&&"footer"===h.variant}),m=P(v);return(0,o.jsx)(S,(0,l.Z)({as:n,ref:t,className:(0,s.Z)(m.root,a),role:"tr"===n?null:"row",ownerState:v},g))});var O=r(8216);function B(e){return(0,v.Z)("MuiTableCell",e)}let E=(0,h.Z)("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]),q=["align","className","component","padding","scope","size","sortDirection","variant"],F=e=>{let{classes:t,variant:r,align:a,padding:o,size:n,stickyHeader:i}=e,l={root:["root",r,i&&"stickyHeader","inherit"!==a&&`align${(0,O.Z)(a)}`,"normal"!==o&&`padding${(0,O.Z)(o)}`,`size${(0,O.Z)(n)}`]};return(0,c.Z)(l,B,t)},D=(0,g.ZP)("td",{name:"MuiTableCell",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,t[r.variant],t[`size${(0,O.Z)(r.size)}`],"normal"!==r.padding&&t[`padding${(0,O.Z)(r.padding)}`],"inherit"!==r.align&&t[`align${(0,O.Z)(r.align)}`],r.stickyHeader&&t.stickyHeader]}})(({theme:e,ownerState:t})=>(0,l.Z)({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:e.vars?`1px solid ${e.vars.palette.TableCell.border}`:`1px solid
    ${"light"===e.palette.mode?(0,N.$n)((0,N.Fq)(e.palette.divider,1),.88):(0,N._j)((0,N.Fq)(e.palette.divider,1),.68)}`,textAlign:"left",padding:16},"head"===t.variant&&{color:(e.vars||e).palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},"body"===t.variant&&{color:(e.vars||e).palette.text.primary},"footer"===t.variant&&{color:(e.vars||e).palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},"small"===t.size&&{padding:"6px 16px",[`&.${E.paddingCheckbox}`]:{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}},"checkbox"===t.padding&&{width:48,padding:"0 0 0 4px"},"none"===t.padding&&{padding:0},"left"===t.align&&{textAlign:"left"},"center"===t.align&&{textAlign:"center"},"right"===t.align&&{textAlign:"right",flexDirection:"row-reverse"},"justify"===t.align&&{textAlign:"justify"},t.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:(e.vars||e).palette.background.default})),W=d.forwardRef(function(e,t){let r;let a=(0,u.Z)({props:e,name:"MuiTableCell"}),{align:n="inherit",className:c,component:g,padding:h,scope:v,size:m,sortDirection:y,variant:f}=a,b=(0,i.Z)(a,q),Z=d.useContext(p),x=d.useContext(w),k=x&&"head"===x.variant,T=v;"td"===(r=g||(k?"th":"td"))?T=void 0:!T&&k&&(T="col");let j=f||x&&x.variant,R=(0,l.Z)({},a,{align:n,component:r,padding:h||(Z&&Z.padding?Z.padding:"normal"),size:m||(Z&&Z.size?Z.size:"medium"),sortDirection:y,stickyHeader:"head"===j&&Z&&Z.stickyHeader,variant:j}),C=F(R),M=null;return y&&(M="asc"===y?"ascending":"descending"),(0,o.jsx)(D,(0,l.Z)({as:r,ref:t,className:(0,s.Z)(C.root,c),"aria-sort":M,scope:T,ownerState:R},b))});function X(e){return(0,v.Z)("MuiTableBody",e)}(0,h.Z)("MuiTableBody",["root"]);let G=["className","component"],I=e=>{let{classes:t}=e;return(0,c.Z)({root:["root"]},X,t)},J=(0,g.ZP)("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-row-group"}),L={variant:"body"},V="tbody",K=d.forwardRef(function(e,t){let r=(0,u.Z)({props:e,name:"MuiTableBody"}),{className:a,component:n=V}=r,d=(0,i.Z)(r,G),c=(0,l.Z)({},r,{component:n}),p=I(c);return(0,o.jsx)(w.Provider,{value:L,children:(0,o.jsx)(J,(0,l.Z)({className:(0,s.Z)(p.root,a),as:n,ref:t,role:n===V?null:"rowgroup",ownerState:c},d))})});var Q=r(6829),U=r(1163);function Y(){let e=(0,a._)(["\n  margin: auto;\n  width: 800px;\n  paddingtop: 1rem;\n"]);return Y=function(){return e},e}let ee=Q.Z.div(Y());var et=!0,er=(0,U.withRouter)(e=>{let{pokemon:t}=e;return(0,o.jsxs)(ee,{children:[(0,o.jsx)(n.ZP,{}),t&&(0,o.jsxs)("div",{children:[(0,o.jsx)("h1",{children:t.name.english}),(0,o.jsxs)(x,{children:[(0,o.jsx)(H,{children:(0,o.jsxs)(A,{children:[(0,o.jsx)(W,{children:"Attribute"}),(0,o.jsx)(W,{children:"Value"})]})}),(0,o.jsx)(K,{children:Object.keys(t.base).map(e=>(0,o.jsxs)(A,{children:[(0,o.jsx)(W,{children:e}),(0,o.jsx)(W,{children:t.base[e]})]},e))})]})]})]})})},1163:function(e,t,r){e.exports=r(6885)}},function(e){e.O(0,[296,774,888,179],function(){return e(e.s=4778)}),_N_E=e.O()}]);