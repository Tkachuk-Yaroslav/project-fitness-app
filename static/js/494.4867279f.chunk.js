"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[494],{4188:(n,e,i)=>{i.d(e,{P:()=>s});const s=(0,i(7924).zo)("div")((()=>({marginTop:"66px",h1:{fontFamily:"RobotoBold",fontSize:"24px",lineHeight:1.17,marginBottom:"14px"},".main-descr":{fontFamily:"RobotoRegular",fontSize:"14px",lineHeight:1.29,marginBottom:"28px",opacity:"0.3"},input:{fontFamily:"RobotoRegular",fontSize:"14px",lineHeight:1.29,width:"100%",height:"46px",border:"1px solid rgba(239, 237, 232, 0.3)",borderRadius:"12px",backgroundColor:"transparent",color:"var(--white-color)",textIndent:"12px",outline:"none",paddingTop:"2px",transition:"border-color 250ms cubic-bezier(0.4, 0, 0.2, 1)","&:hover, &:focus":{borderColor:"var(--orange-color)"}},".inputs-cont":{display:"flex",flexDirection:"column",gap:"18px",marginBottom:"28px"},".eye-cont":{position:"relative"},".eye-btn":{position:"absolute",right:"10px",top:"12px",background:"none"},".eye":{width:"20px",height:"20px"},".input-error":{borderColor:"var(--error-color)"},".input-success":{borderColor:"var(--success-color)"},".notify-cont":{display:"flex",alignItems:"center",gap:"4px",marginTop:"4px"},".notify-descr":{fontFamily:"RobotoRegular",fontSize:"12px",letterSpacing:"0.01em"},".error":{color:"var(--error-color)"},".success":{color:"var(--success-color)"},".submit-btn":{fontSize:"16px",lineHeight:1.12,padding:"12px 40px",color:"var(--white-color)",borderRadius:"12px",marginBottom:"12px",backgroundColor:"var(--orange-color)",transition:"background-color 250ms cubic-bezier(0.4, 0, 0.2, 1)","&:hover, &:focus":{backgroundColor:"var(--light-orange-color)"},"&:disabled":{color:"rgba(239, 237, 232, 0.6)",cursor:"not-allowed"}},".navigate-cont":{display:"flex",fontSize:"12px"},".navigate-descr":{opacity:.6},".navigate-link":{textDecoration:"underline",transition:"color 250ms cubic-bezier(0.4, 0, 0.2, 1)","&:hover, &:focus":{color:"var(--light-orange-color)"}},"@media screen and (min-width: 768px)":{marginTop:"105px",h1:{fontSize:"32px",lineHeight:1.375,marginBottom:"16px"},".main-descr":{width:"496px",fontSize:"16px",lineHeight:1.5,marginBottom:"32px"},input:{fontSize:"16px",lineHeight:1.5,width:"364px",height:"52px"},".inputs-cont":{gap:"20px",marginBottom:"64px"},".eye-cont":{width:"fit-content"},".eye-btn":{top:"15px"},".submit":{fontSize:"20px",lineHeight:1.2,padding:"16px 60px"},".navigate-cont":{marginLeft:"5px"}},"@media screen and (min-width: 1440px)":{marginTop:"116px"}})))},9168:(n,e,i)=>{i.d(e,{Z:()=>k});var s,r=i(4420),a=i(7609),t=i(168),o=i(7924);const c=o.zo.div(s||(s=(0,t.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  .circle {\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n    background-color: var(--beige-color);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  .icon-svg {\n    width: 12px;\n    height: 12px;\n    fill: var(--white-color);\n  }\n  .content-wrapper {\n    display: flex;\n    align-items: end;\n    gap: 8px;\n  }\n  .value {\n    font-family: RobotoBold;\n    font-size: 24px;\n    line-height: 1;\n    letter-spacing: -0.01em;\n  }\n  .descr {\n    font-family: RobotoBold;\n    font-size: 12px;\n    line-height: 1.33;\n    opacity: 65%;\n  }\n  @media screen and (min-width: 768px) {\n    gap: 8px;\n    .circle {\n      width: 24px;\n      height: 24px;\n      border-radius: 12px;\n    }\n    .icon-svg {\n      width: 16px;\n      height: 16px;\n    }\n    .content-wrapper {\n      gap: 11px;\n    }\n    .value {\n      font-size: 48px;\n      line-height: 1.04;\n    }\n    .descr {\n      font-size: 16px;\n      line-height: 1.5;\n    }\n  }\n"])));var l=i(184);const d=()=>{const n=(0,r.v9)((n=>n.statistic.totalBurnedCalories));return(0,l.jsxs)(c,{children:[(0,l.jsx)("div",{className:"circle",children:(0,l.jsx)("svg",{className:"icon-svg",children:(0,l.jsx)("use",{href:"".concat(a.Z,"#icon-running-figure-white")})})}),(0,l.jsxs)("div",{className:"content-wrapper",children:[(0,l.jsx)("p",{className:"value",children:null!==n&&void 0!==n?n:0}),(0,l.jsx)("p",{className:"descr",children:"cal"})]})]})};var p;const x=o.zo.div(p||(p=(0,t.Z)(["\n  position: absolute;\n  background-color: var(--gray-color);\n  display: inline-block;\n  padding: 14px 18px;\n  border-radius: 12px;\n  &.calories {\n    background-color: var(--light-orange-color);\n    margin-top: 70px;\n    right: 0;\n  }\n  &.users {\n    margin-top: 150px;\n  }\n  &.hours {\n    background-color: var(--light-orange-color);\n    margin-top: 220px;\n    right: 0;\n  }\n  &.exercises {\n    margin-top: 300px;\n  }\n  @media screen and (min-width: 768px) {\n    padding: 20px 36px 20px 23px;\n    &.video {\n      margin-left: 230px;\n    }\n    &.calories {\n      padding: 14px 38px 14px 28px;\n      margin-top: 50px;\n      right: 30px;\n    }\n    &.users {\n      margin-top: 270px;\n    }\n    &.hours {\n      padding: 14px 38px 14px 28px;\n      margin-top: 130px;\n      right: 400px;\n    }\n    &.exercises {\n      margin-top: 220px;\n      right: 60px;\n    }\n  }\n  @media screen and (min-width: 1440px) {\n    &.video {\n      margin-left: 0;\n    }\n    &.calories {\n      margin-top: 80px;\n      right: 40px;\n    }\n    &.users {\n      margin-top: 430px;\n    }\n    &.hours {\n      margin-top: 190px;\n      right: unset;\n      left: 0;\n    }\n    &.exercises {\n      margin-top: 320px;\n      right: 40px;\n    }\n  }\n"]))),h=n=>{let{className:e,children:i}=n;return(0,l.jsx)(x,{className:e,children:i})};var m;const g=o.zo.div(m||(m=(0,t.Z)(["\n  display: flex;\n  min-width: 110px;\n  gap: 8px;\n  align-items: center;\n  .circle {\n    width: 30px;\n    height: 30px;\n    border-radius: 50%;\n    background-color: var(--light-orange-color);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  .icon-svg {\n    width: 20px;\n    height: 20px;\n    fill: var(--white-color);\n  }\n  .content-wrapper {\n    display: flex;\n    flex-direction: column;\n    gap: 4px;\n  }\n  .value {\n    font-family: RobotoBold;\n    font-size: 16px;\n    line-height: 1.125;\n  }\n  .descr {\n    font-family: RobotoRegular;\n    font-size: 12px;\n    line-height: 1.33;\n    opacity: 65%;\n  }\n  @media screen and (min-width: 768px) {\n    min-width: 147px;\n    gap: 12px;\n    .circle {\n      width: 40px;\n      height: 40px;\n      border-radius: 20px;\n    }\n    .icon-svg {\n      width: 25px;\n      height: 25px;\n    }\n    .content-wrapper {\n      gap: 8px;\n    }\n    .value {\n      font-size: 24px;\n      line-height: 1;\n    }\n    .descr {\n      font-size: 16px;\n      line-height: 1.5;\n    }\n  }\n"]))),u=()=>{const n=(0,r.v9)((n=>n.statistic.countVideos));return(0,l.jsxs)(g,{children:[(0,l.jsx)("div",{className:"circle",children:(0,l.jsx)("svg",{className:"icon-svg",children:(0,l.jsx)("use",{href:"".concat(a.Z,"#icon-triangle")})})}),(0,l.jsxs)("div",{className:"content-wrapper",children:[(0,l.jsx)("p",{className:"value",children:null!==n&&void 0!==n?n:0}),(0,l.jsx)("p",{className:"descr",children:"Video tutorial"})]})]})};var v;const f=o.zo.div(v||(v=(0,t.Z)(["\n  position: absolute;\n  top: 0;\n  left: 50%;\n  width: 280px;\n  height: 380px;\n  transform: translate(-140px, 590px);\n  @media screen and (min-width: 768px) {\n    width: 704px;\n    height: 380px;\n    transform: translate(-352px, 714px);\n  }\n  @media screen and (min-width: 1440px) {\n    left: 100%;\n    width: 638px;\n    height: 550px;\n    transform: translate(-670px, 200px);\n  }\n"]))),b=()=>{const n=(0,r.v9)((n=>n.statistic.countTotalUsers));return(0,l.jsxs)(g,{children:[(0,l.jsx)("div",{className:"circle",children:(0,l.jsx)("svg",{className:"icon-svg",children:(0,l.jsx)("use",{href:"".concat(a.Z,"#icon-user-stat")})})}),(0,l.jsxs)("div",{className:"content-wrapper",children:[(0,l.jsx)("p",{className:"value",children:null!==n&&void 0!==n?n:0}),(0,l.jsx)("p",{className:"descr",children:"Registered users"})]})]})},w=()=>{const n=(0,r.v9)((n=>n.statistic.totalExerciseDoneAllUsers));return(0,l.jsxs)(g,{children:[(0,l.jsx)("div",{className:"circle",children:(0,l.jsx)("svg",{className:"icon-svg",children:(0,l.jsx)("use",{href:"".concat(a.Z,"#icon-muscle-up")})})}),(0,l.jsxs)("div",{className:"content-wrapper",children:[(0,l.jsx)("p",{className:"value",children:null!==n&&void 0!==n?n:0}),(0,l.jsx)("p",{className:"descr",children:"Exercises performed"})]})]})},j=()=>{const n=(0,r.v9)((n=>n.statistic.totalSpentTimeExercise));return(0,l.jsxs)(c,{children:[(0,l.jsx)("div",{className:"circle",children:(0,l.jsx)("svg",{className:"icon-svg",children:(0,l.jsx)("use",{href:"".concat(a.Z,"#icon-stopwatch")})})}),(0,l.jsxs)("div",{className:"content-wrapper",children:[(0,l.jsx)("p",{className:"value",children:null!==n&&void 0!==n?n:0}),(0,l.jsx)("p",{className:"descr",children:"min"})]})]})};var y=i(2791),N=i(154);const k=()=>{const n=(0,r.I0)();return(0,y.useEffect)((()=>{n((0,N.b)())}),[n]),(0,l.jsxs)(f,{children:[(0,l.jsx)(h,{className:"video",children:(0,l.jsx)(u,{})}),(0,l.jsx)(h,{className:"calories",children:(0,l.jsx)(d,{})}),(0,l.jsx)(h,{className:"users",children:(0,l.jsx)(b,{})}),(0,l.jsx)(h,{className:"hours",children:(0,l.jsx)(j,{})}),(0,l.jsx)(h,{className:"exercises",children:(0,l.jsx)(w,{})})]})}},8489:(n,e,i)=>{i.d(e,{o:()=>x});var s=i(168),r=i(7924);const a=i.p+"static/media/training-bg-mob.c50c398dd76964dbc360.png",t=i.p+"static/media/training-bg-mob-2x.1ae52cb9d3848ee48f38.png",o=i.p+"static/media/training-bg-mob-dark.5dcced133b9b69160a47.png",c=i.p+"static/media/training-bg-mob-dark-2x.ba46f84e6ed4979b34f9.png",l=i.p+"static/media/training-bg-tab-desk.b8d14238f966d5b04404.png",d=i.p+"static/media/training-bg-tab-desk-2x.8623a1fa2a2fbe2e58ef.png";var p;const x=r.ZP.div(p||(p=(0,s.Z)(["\n  overflow: hidden;\n  &::before {\n    content: '';\n    position: fixed;\n    top: 0;\n    left: 100%;\n    width: 446px;\n    height: 669px;\n    background-image: url(",");\n    transform: translate(-298px, 241px);\n    background-size: 446px 669px;\n    z-index: -10;\n  }\n  &.pageSign {\n    &::before {\n      background-image: url(",");\n    }\n  }\n  &.page404 {\n    &::before {\n      transform: translate(-268px, 241px);\n    }\n  }\n  @media (min-device-pixel-ratio: 2),\n    (min-resolution: 192dpi),\n    (min-resolution: 2dppx) {\n    &::before {\n      width: 446px;\n      height: 669px;\n      background-image: url(",");\n    }\n    &.pageSign {\n      &::before {\n        background-image: url(",");\n      }\n    }\n  }\n  @media screen and (min-width: 768px) {\n    &::before {\n      width: 670px;\n      height: 1005px;\n      background-image: url(",");\n      transform: translate(-437px, 131px);\n      background-size: 670px 1005px;\n    }\n    &.pageSign {\n      &::before {\n        background-image: url(",");\n      }\n    }\n    &.page404 {\n      &::before {\n        transform: translate(-437px, 131px);\n      }\n    }\n    @media (min-device-pixel-ratio: 2),\n      (min-resolution: 192dpi),\n      (min-resolution: 2dppx) {\n      &::before {\n        width: 670px;\n        height: 1005px;\n        background-image: url(",");\n      }\n    }\n  }\n  @media screen and (min-width: 1440px) {\n    &::before {\n      background-image: url(",");\n      transform: translate(-670px, -152px);\n    }\n    &.page404 {\n      &::before {\n        transform: translate(-670px, -152px);\n      }\n    }\n    @media (min-device-pixel-ratio: 2),\n      (min-resolution: 192dpi),\n      (min-resolution: 2dppx) {\n      &::before {\n        width: 670px;\n        height: 1005px;\n        background-image: url(",");\n      }\n    }\n  }\n"])),a,o,t,c,l,l,d,l,d)},8317:(n,e,i)=>{i.d(e,{W:()=>a});var s,r=i(168);const a=i(7924).ZP.div(s||(s=(0,r.Z)(["\n  width: 100%;\n  margin: 0 auto;\n  padding-left: 20px;\n  padding-right: 20px;\n\n  @media screen and (min-width: 375px) {\n    width: 375px;\n  }\n\n  @media screen and (min-width: 768px) {\n    width: 768px;\n    padding-left: 32px;\n    padding-right: 32px;\n  }\n\n  @media screen and (min-width: 1440px) {\n    width: 1440px;\n    padding-left: 96px;\n    padding-right: 96px;\n  }\n"])))},4063:(n,e,i)=>{i.r(e),i.d(e,{default:()=>f});var s=i(8317),r=i(5705),a=i(1087),t=i(8007);const o=t.Ry().shape({name:t.Z_().required("Required"),email:t.Z_().matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,"Error email. Example: test@gmail.com").required("Required"),password:t.Z_().min(6,"Must be 6 or more characters").required("Required")});var c=i(4188),l=i(7609),d=i(2791),p=i(184);const x=n=>{let{registration:e}=n;const[i,s]=(0,d.useState)(!1),t=(0,r.TA)({initialValues:{name:"",email:"",password:""},validationSchema:o,onSubmit:async(n,i)=>{let{name:s,email:r,password:a}=n;e({name:s,email:r,password:a}),await new Promise((n=>setTimeout(n,1e3)))}});return(0,p.jsx)(c.P,{children:(0,p.jsxs)("div",{children:[(0,p.jsx)("h1",{children:"Sign Up"}),(0,p.jsx)("p",{className:"main-descr",children:"Thank you for your interest in our platform. To complete the registration process, please provide us with the following information."}),(0,p.jsxs)("form",{onSubmit:t.handleSubmit,children:[(0,p.jsxs)("div",{className:"inputs-cont",children:[(0,p.jsxs)("div",{children:[(0,p.jsx)("input",{autoComplete:"off",name:"name",type:"text",placeholder:"Name",value:t.values.name,onChange:t.handleChange,onBlur:t.handleBlur,className:t.errors.name&&t.touched.name&&t.values.name.length>0?"input-error":t.touched.name&&t.values.name.length>0?"input-success":""}),!t.errors.name&&t.touched.name&&t.values.name.length>0&&(0,p.jsxs)("div",{className:"notify-cont",children:[(0,p.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",children:(0,p.jsx)("use",{href:"".concat(l.Z,"#icon-checkbox-circle-fill")})}),(0,p.jsx)("p",{className:"notify-descr success",children:"Success name"})]}),t.errors.name&&t.touched.name&&t.values.name.length>0&&(0,p.jsxs)("div",{className:"notify-cont",children:[(0,p.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",children:(0,p.jsx)("use",{href:"".concat(l.Z,"#icon-red")})}),(0,p.jsx)("p",{className:"notify-descr error",children:t.errors.name})]})]}),(0,p.jsxs)("div",{children:[(0,p.jsx)("input",{autoComplete:"off",name:"email",type:"email",placeholder:"Email",value:t.values.email,onChange:t.handleChange,onBlur:t.handleBlur,className:t.errors.email&&t.touched.email&&t.values.email.length>0?"input-error":t.touched.email&&t.values.email.length>0?"input-success":""}),!t.errors.email&&t.touched.email&&t.values.email.length>0&&(0,p.jsxs)("div",{className:"notify-cont",children:[(0,p.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",children:(0,p.jsx)("use",{href:"".concat(l.Z,"#icon-checkbox-circle-fill")})}),(0,p.jsx)("p",{className:"notify-descr success",children:"Success email"})]}),t.errors.email&&t.touched.email&&t.values.email.length>0&&(0,p.jsxs)("div",{className:"notify-cont",children:[(0,p.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",children:(0,p.jsx)("use",{href:"".concat(l.Z,"#icon-red")})}),(0,p.jsx)("p",{className:"notify-descr error",children:t.errors.email})]})]}),(0,p.jsxs)("div",{className:"eye-cont",children:[(0,p.jsx)("input",{autoComplete:"off",name:"password",type:i?"text":"password",placeholder:"Password",value:t.values.password,onChange:t.handleChange,onBlur:t.handleBlur,className:t.errors.password&&t.touched.password&&t.values.password.length>0?"input-error":t.touched.password&&t.values.password.length>0?"input-success":""}),(0,p.jsx)("button",{type:"button",className:"eye-btn","aria-label":"toggle password visibility",onClick:()=>s((n=>!n)),onMouseDown:n=>{n.preventDefault()},children:(0,p.jsx)("svg",{className:"eye",children:(0,p.jsx)("use",{href:"".concat(l.Z,i?"#icon-eye-off":"#icon-eye")})})}),!t.errors.password&&t.touched.password&&t.values.password.length>0&&(0,p.jsxs)("div",{className:"notify-cont",children:[(0,p.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",children:(0,p.jsx)("use",{href:"".concat(l.Z,"#icon-checkbox-circle-fill")})}),(0,p.jsx)("p",{className:"notify-descr success",children:"Success password"})]}),t.errors.password&&t.touched.password&&t.values.password.length>0&&(0,p.jsxs)("div",{className:"notify-cont",children:[(0,p.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",children:(0,p.jsx)("use",{href:"".concat(l.Z,"#icon-red")})}),(0,p.jsx)("p",{className:"notify-descr error",children:t.errors.password})]})]})]}),(0,p.jsx)("button",{type:"submit",className:"submit-btn",disabled:t.isSubmitting,children:"Sign Up"}),(0,p.jsxs)("div",{className:"navigate-cont",children:[(0,p.jsxs)("p",{className:"navigate-descr",children:["Already have an account?","\xa0"]}),(0,p.jsx)(a.Link,{to:"/signin",className:"navigate-link",children:"Sign In"})]})]})]})})};var h=i(5218),m=i(4420),g=i(7967),u=i(8489),v=i(9168);const f=()=>{const n=(0,m.I0)();return(0,p.jsx)(u.o,{className:"pageSign",children:(0,p.jsxs)(s.W,{children:[(0,p.jsx)(x,{registration:async e=>{try{await n((0,g.ce)(e)).unwrap(),h.ZP.success("Login successful",{duration:3e3,position:"top-center"})}catch(i){h.ZP.error(i.message,{duration:3e3,position:"top-center"})}}}),(0,p.jsx)(v.Z,{})]})})}}}]);
//# sourceMappingURL=494.4867279f.chunk.js.map