"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[459],{8317:(n,e,t)=>{t.d(e,{W:()=>i});var o,r=t(168);const i=t(7924).ZP.div(o||(o=(0,r.Z)(["\n  width: 100%;\n  margin: 0 auto;\n  padding-left: 20px;\n  padding-right: 20px;\n\n  @media screen and (min-width: 375px) {\n    width: 375px;\n  }\n\n  @media screen and (min-width: 768px) {\n    width: 768px;\n    padding-left: 32px;\n    padding-right: 32px;\n  }\n\n  @media screen and (min-width: 1440px) {\n    width: 1440px;\n    padding-left: 96px;\n    padding-right: 96px;\n  }\n"])))},8459:(n,e,t)=>{t.r(e),t.d(e,{default:()=>V});var o=t(2791),r=t(6143),i=t(9891),a=t(8096),l=t(6131),d=t(9009),s=t(4280),c=t(5172),p=t(5403),x=t(3400),h=t(5130),u=t(763),g=t(5294);g.Z.defaults.baseURL="https://project-fitness-app-back.onrender.com/api/";var m,f=t(168),w=t(7924);const b=w.ZP.div(m||(m=(0,f.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n  margin-top: 40px;\n  margin-bottom: 28px;\n  width: 100%;\n\n  @media screen and (min-width: 768px) {\n    justify-content: start;\n    margin-top: 32px;\n  }\n\n  @media screen and (min-width: 1440px) {\n    margin-top: 68px;\n    justify-content: end;\n  }\n"])));var v=t(184);const y=["All","Recommended","Not recommended"],Z=n=>{let{value:e,onChange:t,options:o}=n;return(0,v.jsx)(a.Z,{sx:{".MuiInputLabel-root":{color:"rgba(255, 255, 255, 0.8)","&.Mui-focused":{color:"#E6533C"}},".MuiOutlinedInput-notchedOutline":{borderColor:"rgba(239, 237, 232, 0.30)",borderRadius:"12px"},".MuiOutlinedInput-input":{color:"rgba(255, 255, 255, 0.8)",fontSize:"16px",fontWeight:400,lineHeight:"24px"},".MuiSelect-icon":{color:"rgba(255, 255, 255, 0.8)"},"&:hover .MuiOutlinedInput-notchedOutline":{borderColor:"rgba(239, 237, 232, 0.30)"},"&.Mui-focused .MuiOutlinedInput-notchedOutline":{borderColor:"rgba(239, 237, 232, 0.30)"}},children:(0,v.jsx)(l.Z,{value:e,onChange:t,IconComponent:c.Z,MenuProps:{anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},PaperProps:{style:{maxHeight:276,maxWidth:164,marginTop:2,borderRadius:12,background:"#1C1C1C",color:"rgba(255, 255, 255, 0.8)"}}},sx:{width:194,height:52,"&:hover":{"& .MuiOutlinedInput-notchedOutline":{borderColor:"rgba(239, 237, 232, 0.30)"}}},children:null===o||void 0===o?void 0:o.map((n=>(0,v.jsx)(i.Z,{sx:{fontSize:"16px",fontWeight:"400",lineHeight:"24px",textTransform:"capitalize"},value:n,children:n},n)))})})},j=n=>{let{filters:e,onChangeFilters:t}=n;const[r,i]=(0,o.useState)(e.query),[a,l]=(0,o.useState)([]);(0,o.useEffect)((()=>{(async()=>{try{const n=await(async()=>{const{data:n}=await g.Z.get("categories");return n})();l(n)}catch(n){console.log(n)}})()}),[]);const c=(0,o.useCallback)((0,u.debounce)((n=>{t((e=>({...e,query:n})))}),500),[]);return(0,v.jsxs)(b,{children:[(0,v.jsx)(s.Z,{placeholder:"Search",variant:"outlined",value:r,onChange:n=>{i(n.target.value),c(n.target.value)},sx:{width:"335px","@media (min-width: 768px)":{width:"235px"},".MuiInputLabel-root":{color:"rgba(255, 255, 255, 0.8)","&.Mui-focused":{color:"#E6533C"}},".MuiOutlinedInput-notchedOutline":{borderColor:"rgba(239, 237, 232, 0.30)",borderRadius:"12px"},".MuiOutlinedInput-root":{color:"rgba(255, 255, 255, 0.8)",borderRadius:"12px","&:hover fieldset":{borderColor:"rgba(239, 237, 232, 0.30)"},"&.Mui-focused fieldset":{borderColor:"#E6533C"}},"& .MuiInputAdornment-root":{color:"rgba(239, 237, 232, 0.30)"}},size:"small",InputProps:{endAdornment:(0,v.jsxs)(d.Z,{position:"end",children:[e.query&&(0,v.jsx)(x.Z,{edge:"end",onClick:()=>{i(""),t((n=>({...n,query:""})))},sx:{color:"#E6533C"},children:(0,v.jsx)(h.Z,{})}),(0,v.jsx)(d.Z,{position:"end",children:(0,v.jsx)(p.Z,{sx:{color:"rgba(239, 237, 232, 0.30)"}})})]}),style:{height:52}}}),(0,v.jsx)(Z,{value:e.category,onChange:n=>{t((e=>({...e,category:n.target.value})))},options:a}),(0,v.jsx)(Z,{value:e.allowed,onChange:n=>{t((e=>({...e,allowed:n.target.value})))},options:y})]})};var C,k,P,M,O,I,z,S,A,R,q;const E=w.ZP.li(C||(C=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 98%;\n  height: 141px;\n  padding: 16px;\n  justify-content: center;\n  align-items: flex-start;\n  border-radius: 12px;\n  border: 1px solid rgba(239, 237, 232, 0.2);\n  background: rgba(239, 237, 232, 0.05);\n\n  @media screen and (min-width: 768px) {\n    max-width: 335px;\n  }\n\n  @media screen and (min-width: 1440px) {\n    max-width: 405px;\n  }\n"]))),N=w.ZP.label(k||(k=(0,f.Z)(["\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  margin-bottom: 27px;\n  justify-content: space-between;\n"]))),W=w.ZP.span(P||(P=(0,f.Z)(["\n  display: inline-flex;\n  padding: 5px 7.5px;\n  justify-content: center;\n  align-items: center;\n  border-radius: 4px;\n  background: rgba(239, 237, 232, 0.05);\n"]))),_=w.ZP.p(M||(M=(0,f.Z)(["\n  color: var(--white-color);\n  font-size: 12px;\n  font-weight: 700;\n  line-height: normal;\n  text-transform: uppercase;\n"]))),B=w.ZP.div(O||(O=(0,f.Z)(["\n  display: flex;\n  align-items: center;\n"]))),L=w.ZP.p(I||(I=(0,f.Z)(["\n  color: var(--white-color);\n  font-size: 12px;\n  line-height: 18px;\n  display: flex;\n  margin-right: 16px;\n  align-items: center;\n\n  &::before {\n    content: '';\n    display: block;\n    width: 14px;\n    height: 14px;\n    border-radius: 10px;\n    background: ",";\n    margin-right: 8px;\n  }\n"])),(n=>n.$recommended?"#419b09":"#E9101D")),H=w.ZP.button(z||(z=(0,f.Z)(["\n  background: transparent;\n  border: none;\n  color: var(--orange-color);\n  font-size: 16px;\n  line-height: 24px;\n  padding: 0;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n\n  &:hover,\n  &:focus {\n    color: var(--white-color);\n  }\n\n  &::after {\n    content: url(../../../../src/components/products/img/Icon.svg);\n    display: block;\n    width: 16px;\n    height: 16px;\n    margin-left: 8px;\n    margin-top: -3px;\n    &:hover,\n    &:focus {\n      fill: var(--white-color);\n    }\n  }\n"]))),F=w.ZP.h4(S||(S=(0,f.Z)(["\n  position: relative;\n  font-size: 24px;\n  line-height: 1.333;\n  color: var(--white-color);\n\n  margin-bottom: 8px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  padding-left: 40px;\n  max-width: 100%;\n  &::before {\n    content: url(../../../../src/components/products/img/run.svg);\n    position: absolute;\n    width: 24px;\n    height: 24px;\n    left: 0;\n    top: calc(50% - 12px);\n  }\n"]))),T=w.ZP.ul(A||(A=(0,f.Z)(["\n  display: flex;\n  flex-direction: row;\n  gap: 16px;\n"]))),$=w.ZP.li(R||(R=(0,f.Z)(["\n  width: 40%;\n  display: flex;\n  flex-direction: row;\n  gap: 4px;\n  color: rgba(239, 237, 232, 0.4);\n  font-size: 12px;\n  line-height: 18px;\n"]))),D=w.ZP.p(q||(q=(0,f.Z)(["\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  color: var(--white);\n  font-size: 12px;\n  line-height: 18px;\n"]))),U=n=>{let{title:e,calories:t,category:o,weight:r,groupBloodNotAllowed:i}=n;const a=Boolean(i[1]);return(0,v.jsxs)(E,{children:[(0,v.jsxs)(N,{children:[(0,v.jsx)(W,{children:(0,v.jsx)(_,{children:o})}),(0,v.jsxs)(B,{children:[(0,v.jsx)(w.LC,{children:(0,v.jsx)(L,{$recommended:a,children:a?"Recommended":"Not recommended"})}),(0,v.jsx)(H,{type:"button",children:"Add"})]})]}),(0,v.jsx)(F,{children:e||"title"}),(0,v.jsxs)(T,{children:[(0,v.jsx)($,{children:(0,v.jsxs)(D,{children:["Calories:",t]})}),(0,v.jsx)($,{children:(0,v.jsxs)(D,{children:["Category:",o]})}),(0,v.jsx)($,{children:(0,v.jsxs)(D,{children:["Weight:",r]})})]})]})};var G;const J=w.ZP.ul(G||(G=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  row-gap: 20px;\n  overflow-y: auto;\n  max-height: 80vh;\n\n  @media screen and (min-width: 768px) {\n    flex-direction: row;\n    flex-wrap: wrap;\n    column-gap: 16px;\n    row-gap: 32px;\n  }\n\n  @media screen and (min-width: 1440px) {\n    max-width: 850px;\n  }\n\n  &::-webkit-scrollbar {\n    width: 8px;\n  }\n\n  &::-webkit-scrollbar-thumb {\n    background-color: #ef8964;\n    border-radius: 4px;\n    height: 153px;\n  }\n\n  &::-webkit-scrollbar-track {\n    background-color: #efede81a;\n  }\n"]))),K=n=>{let{products:e}=n;return(0,v.jsx)(J,{children:e.map((n=>{let{_id:e,groupBloodNotAllowed:t,weight:o,calories:r,category:i,title:a}=n;return(0,v.jsx)(U,{weight:o,calories:r,category:i,title:a,groupBloodNotAllowed:t},e)}))})};var Q=t(8317);const V=()=>{const[n,e]=o.useState({query:"",category:"",allowed:""}),[t,i]=(0,o.useState)(!1),[a,l]=(0,o.useState)([]);return o.useEffect((()=>{(async()=>{try{i(!0);const e=await(async(n,e,t)=>{let o;"All"===n?o="all":"Not recommended"===n?o="false":"Recommended"===n&&(o="true");const{data:r}=await g.Z.get("products/blood",{params:{allowed:o||"all",category:e,query:t}});return r})(n.allowed,n.category,n.query);l(e.result)}catch(e){console.log(e)}finally{i(!1)}})()}),[n]),(0,v.jsxs)(Q.W,{children:[t&&(0,v.jsx)(r.Z,{}),(0,v.jsx)(j,{filters:n,onChangeFilters:n=>{e(n)}}),(0,v.jsx)(K,{products:a})]})}}}]);
//# sourceMappingURL=459.57a53d8c.chunk.js.map