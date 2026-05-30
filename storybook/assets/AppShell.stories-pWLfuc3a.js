import{n as e}from"./chunk-DnJy8xQt.js";import{o as t}from"./iframe-B-acGbMN.js";import{a as n,n as r,r as i,s as a,t as o}from"./ui-B3-m_yEa.js";function s({children:e,displayName:t,isSigningOut:r=!1,onSignOut:a,signedIn:s}){return(0,c.jsxs)(`div`,{className:`min-h-svh bg-white text-gray-800 antialiased dark:bg-black dark:text-gray-400`,children:[(0,c.jsx)(i,{className:`!py-0`,children:(0,c.jsx)(`nav`,{className:`my-4`,children:(0,c.jsxs)(`div`,{className:`flex flex-wrap items-center justify-between gap-5 md:gap-10 lg:flex-nowrap`,children:[(0,c.jsxs)(`div`,{className:`flex w-full items-center justify-between lg:w-auto`,children:[(0,c.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,c.jsx)(`span`,{className:`text-xl font-semibold tracking-tight text-brand-primary dark:text-white`,children:`Stronger`}),(0,c.jsx)(n,{pill:!0,children:`Planner`})]}),(0,c.jsx)(`div`,{className:`lg:hidden`,children:(0,c.jsx)(n,{pill:!0,children:s?`Live`:`Account`})})]}),(0,c.jsxs)(`div`,{className:`flex w-full flex-wrap items-center justify-between gap-3 lg:w-auto lg:flex-nowrap`,children:[(0,c.jsxs)(`div`,{className:`flex flex-wrap items-center gap-1`,children:[(0,c.jsx)(`span`,{className:`rounded-full px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-400`,children:`Tasks`}),(0,c.jsx)(`span`,{className:`rounded-full px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-400`,children:`Django API`})]}),s?(0,c.jsxs)(`div`,{className:`flex min-w-0 items-center gap-3`,children:[(0,c.jsxs)(`div`,{className:`hidden min-w-0 text-right text-sm sm:block`,children:[(0,c.jsx)(`p`,{className:`truncate font-medium text-gray-900 dark:text-white`,children:t||`Account`}),(0,c.jsx)(`p`,{className:`text-gray-500 dark:text-gray-500`,children:`Signed in`})]}),(0,c.jsx)(o,{className:`shrink-0`,onClick:a,disabled:r,children:r?`Signing out...`:`Sign out`})]}):(0,c.jsx)(`div`,{className:`hidden sm:block`,children:(0,c.jsx)(n,{pill:!0,children:`Sign in required`})})]})]})})}),(0,c.jsx)(`main`,{children:e}),(0,c.jsx)(i,{className:`mt-10 border-t border-gray-100 text-center text-sm text-gray-500 dark:border-gray-800 dark:text-gray-600`,children:`Stronger planner - Django-backed task workflow`})]})}var c,l=e((()=>{a(),c=t(),s.__docgenInfo={description:``,methods:[],displayName:`AppShell`,props:{children:{required:!0,tsType:{name:`ReactNode`},description:``},displayName:{required:!1,tsType:{name:`string`},description:``},isSigningOut:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},onSignOut:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},signedIn:{required:!0,tsType:{name:`boolean`},description:``}}}})),u,d,f,p,m;e((()=>{l(),a(),u=t(),d={title:`Components/AppShell`,component:s,parameters:{layout:`fullscreen`}},f={args:{children:null,signedIn:!1},render:()=>(0,u.jsx)(s,{signedIn:!1,children:(0,u.jsx)(i,{children:(0,u.jsxs)(r,{className:`p-6`,children:[(0,u.jsx)(n,{noMargin:!0,children:`Preview`}),(0,u.jsx)(`h1`,{className:`mt-2 text-3xl font-semibold tracking-tight text-brand-primary dark:text-white`,children:`Signed-out shell`}),(0,u.jsx)(`p`,{className:`mt-4 text-gray-500 dark:text-gray-400`,children:`Navigation, footer, spacing, and neutral Stablo styling without an authenticated user.`})]})})})},p={args:{children:null,displayName:`Alex Morgan`,signedIn:!0},render:()=>(0,u.jsx)(s,{displayName:`Alex Morgan`,signedIn:!0,onSignOut:()=>void 0,children:(0,u.jsx)(i,{children:(0,u.jsxs)(r,{className:`p-6`,children:[(0,u.jsx)(n,{noMargin:!0,color:`green`,children:`Preview`}),(0,u.jsx)(`h1`,{className:`mt-2 text-3xl font-semibold tracking-tight text-brand-primary dark:text-white`,children:`Signed-in shell`}),(0,u.jsx)(`p`,{className:`mt-4 text-gray-500 dark:text-gray-400`,children:`Shows account state and the same page chrome used by the app.`})]})})})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    children: null,
    signedIn: false
  },
  render: () => <AppShell signedIn={false}>
      <Container>
        <Card className="p-6">
          <Label noMargin>Preview</Label>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-brand-primary dark:text-white">
            Signed-out shell
          </h1>
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            Navigation, footer, spacing, and neutral Stablo styling without an
            authenticated user.
          </p>
        </Card>
      </Container>
    </AppShell>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    children: null,
    displayName: 'Alex Morgan',
    signedIn: true
  },
  render: () => <AppShell displayName="Alex Morgan" signedIn onSignOut={() => undefined}>
      <Container>
        <Card className="p-6">
          <Label noMargin color="green">
            Preview
          </Label>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-brand-primary dark:text-white">
            Signed-in shell
          </h1>
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            Shows account state and the same page chrome used by the app.
          </p>
        </Card>
      </Container>
    </AppShell>
}`,...p.parameters?.docs?.source}}},m=[`SignedOut`,`SignedIn`]}))();export{p as SignedIn,f as SignedOut,m as __namedExportsOrder,d as default};