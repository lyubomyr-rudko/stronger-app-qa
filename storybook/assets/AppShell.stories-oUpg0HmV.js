import{n as e}from"./chunk-DnJy8xQt.js";import{o as t}from"./iframe-Bctxwb12.js";import{a as n,n as r,r as i,s as a}from"./ui-nIK4J4V6.js";import{n as o,t as s}from"./AppShell-DSlcoM1D.js";var c,l,u,d,f;e((()=>{o(),a(),c=t(),l={title:`Components/AppShell`,component:s,parameters:{layout:`fullscreen`}},u={args:{children:null,signedIn:!1},render:()=>(0,c.jsx)(s,{signedIn:!1,children:(0,c.jsx)(i,{children:(0,c.jsxs)(r,{className:`p-6`,children:[(0,c.jsx)(n,{noMargin:!0,children:`Preview`}),(0,c.jsx)(`h1`,{className:`mt-2 text-3xl font-semibold tracking-tight text-brand-primary dark:text-white`,children:`Signed-out shell`}),(0,c.jsx)(`p`,{className:`mt-4 text-gray-500 dark:text-gray-400`,children:`Navigation, footer, spacing, and neutral Stablo styling without an authenticated user.`})]})})})},d={args:{children:null,displayName:`Alex Morgan`,signedIn:!0},render:()=>(0,c.jsx)(s,{displayName:`Alex Morgan`,signedIn:!0,onSignOut:()=>void 0,children:(0,c.jsx)(i,{children:(0,c.jsxs)(r,{className:`p-6`,children:[(0,c.jsx)(n,{noMargin:!0,color:`green`,children:`Preview`}),(0,c.jsx)(`h1`,{className:`mt-2 text-3xl font-semibold tracking-tight text-brand-primary dark:text-white`,children:`Signed-in shell`}),(0,c.jsx)(`p`,{className:`mt-4 text-gray-500 dark:text-gray-400`,children:`Shows account state and the same page chrome used by the app.`})]})})})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f=[`SignedOut`,`SignedIn`]}))();export{d as SignedIn,u as SignedOut,f as __namedExportsOrder,l as default};