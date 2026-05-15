import{n as e}from"./chunk-DnJy8xQt.js";import{a as t,b as n,h as r,i,n as a,o,p as s,r as c,y as l}from"./iframe-Bctxwb12.js";import{r as u,s as d}from"./ui-nIK4J4V6.js";import{n as f,t as p}from"./AppShell-DSlcoM1D.js";import{a as m,i as h,n as g,r as _,t as v}from"./SignInForm-BAgstO2t.js";import{n as y,t as b}from"./TaskManager-DhAgewLA.js";function x(){let e=h(),t=m(e=>e.auth.token),n=m(e=>e.auth.user),[i,{isLoading:a}]=r(),o=n&&([n.first_name,n.last_name].filter(Boolean).join(` `)||n.email);return(0,S.jsx)(p,{displayName:o||void 0,isSigningOut:a,onSignOut:async()=>{try{await i().unwrap()}catch{e(l())}},signedIn:!!t,children:t?(0,S.jsx)(b,{}):(0,S.jsx)(u,{children:(0,S.jsx)(`div`,{className:`mx-auto max-w-115 py-8`,children:(0,S.jsx)(v,{})})})})}var S,C=e((()=>{s(),f(),g(),y(),n(),_(),d(),S=o(),x.__docgenInfo={description:``,methods:[],displayName:`App`}})),w,T,E,D;e((()=>{C(),a(),w={title:`App/App`,component:x,parameters:{layout:`fullscreen`}},T={decorators:[t({auth:i})]},E={decorators:[t({auth:c})]},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  decorators: [withStoryStore({
    auth: signedOutAuthState
  })]
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  decorators: [withStoryStore({
    auth: signedInAuthState
  })]
}`,...E.parameters?.docs?.source}}},D=[`SignedOut`,`SignedIn`]}))();export{E as SignedIn,T as SignedOut,D as __namedExportsOrder,w as default};