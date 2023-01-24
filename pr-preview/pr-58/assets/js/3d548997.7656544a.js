"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[5356],{4852:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>u,toc:()=>h});var t=a(7462),p=(a(7294),a(3905)),o=a(5488),s=a(5162),i=a(3068);const l={},r="Unsplash",u={unversionedId:"sources/companion-plugins/unsplash",id:"sources/companion-plugins/unsplash",title:"Unsplash",description:"The @uppy/unsplash plugin lets users import files from their",source:"@site/docs/sources/companion-plugins/unsplash.mdx",sourceDirName:"sources/companion-plugins",slug:"/sources/companion-plugins/unsplash",permalink:"/uppy.io/pr-preview/pr-58/docs/sources/companion-plugins/unsplash",draft:!1,editUrl:"https://github.com/transloadit/uppy.io/tree/main/docs/sources/companion-plugins/unsplash.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"OneDrive",permalink:"/uppy.io/pr-preview/pr-58/docs/sources/companion-plugins/onedrive"},next:{title:"Import from URL",permalink:"/uppy.io/pr-preview/pr-58/docs/sources/companion-plugins/url"}},d={},h=[{value:"When should I use this?",id:"when-should-i-use-this",level:2},{value:"Use",id:"use",level:2},{value:"Use in Uppy",id:"use-in-uppy",level:3},{value:"Use in Companion",id:"use-in-companion",level:3},{value:"API",id:"api",level:2},{value:"Options",id:"options",level:3},{value:"<code>id</code>",id:"id",level:4},{value:"<code>title</code>",id:"title",level:4},{value:"<code>target</code>",id:"target",level:4},{value:"<code>companionUrl</code>",id:"companionurl",level:4},{value:"<code>companionHeaders</code>",id:"companionheaders",level:4},{value:"<code>companionAllowedHosts</code>",id:"companionallowedhosts",level:4},{value:"<code>companionCookiesRule</code>",id:"companioncookiesrule",level:4},{value:"<code>locale</code>",id:"locale",level:4}],m={toc:h};function c(e){let{components:n,...a}=e;return(0,p.kt)("wrapper",(0,t.Z)({},m,a,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"unsplash"},"Unsplash"),(0,p.kt)("p",null,"The ",(0,p.kt)("inlineCode",{parentName:"p"},"@uppy/unsplash")," plugin lets users import files from their\n",(0,p.kt)("a",{parentName:"p",href:"https://unsplash.com"},"Unsplash")," account."),(0,p.kt)("admonition",{type:"tip"},(0,p.kt)("p",{parentName:"admonition"},(0,p.kt)("a",{parentName:"p",href:"/examples"},"Try out the live example")," or take it for a spin in\n",(0,p.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/uppy-dashboard-xpxuhd"},"CodeSandbox"),".")),(0,p.kt)("h2",{id:"when-should-i-use-this"},"When should I use this?"),(0,p.kt)("p",null,"When you want to let users import files from their\n",(0,p.kt)("a",{parentName:"p",href:"https://unsplash.com"},"Unsplash")," account."),(0,p.kt)("p",null,"A ",(0,p.kt)("a",{parentName:"p",href:"/docs/companion"},"Companion")," instance is required for the Unsplash plugin to\nwork. Companion handles authentication with Unsplash, downloads the files, and\nuploads them to the destination. This saves the user bandwidth, especially\nhelpful if they are on a mobile connection."),(0,p.kt)("p",null,"You can self-host Companion or get a hosted version with any\n",(0,p.kt)("a",{parentName:"p",href:"https://transloadit.com/pricing/"},"Transloadit plan"),"."),(0,p.kt)(o.Z,{mdxType:"Tabs"},(0,p.kt)(s.Z,{value:"npm",label:"NPM",default:!0,mdxType:"TabItem"},(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @uppy/unsplash\n"))),(0,p.kt)(s.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @uppy/unsplash\n"))),(0,p.kt)(s.Z,{value:"cdn",label:"CDN",mdxType:"TabItem"},(0,p.kt)(i.Z,{mdxType:"UppyCdnExample"},'\n        import { Uppy, Unsplash } from "{{UPPY_JS_URL}}"\n        const uppy = new Uppy()\n        uppy.use(Unsplash, {\n          // Options\n        })\n      '))),(0,p.kt)("h2",{id:"use"},"Use"),(0,p.kt)("p",null,"Using Unsplash requires setup in both Uppy and Companion."),(0,p.kt)("h3",{id:"use-in-uppy"},"Use in Uppy"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-js",metastring:"{10-13} showLineNumbers","{10-13}":!0,showLineNumbers:!0},"import Uppy from '@uppy/core';\nimport Dashboard from '@uppy/dashboard';\nimport Unsplash from '@uppy/unsplash';\n\nimport '@uppy/core/dist/style.min.css';\nimport '@uppy/dashboard/dist/style.min.css';\n\nnew Uppy()\n    .use(Dashboard, { inline: true, target: '#dashboard' })\n    .use(Unsplash, {\n        target: Dashboard,\n        companionUrl: 'https://your-companion.com',\n    });\n")),(0,p.kt)("h3",{id:"use-in-companion"},"Use in Companion"),(0,p.kt)("p",null,"You can create a Unsplash App on the\n",(0,p.kt)("a",{parentName:"p",href:"https://unsplash.com/developers"},"Unsplash Developers site"),". You\u2019ll be\nredirected to the app page, this page lists the app key and app secret."),(0,p.kt)("p",null,"Configure the Unsplash key and secret. With the standalone Companion server,\nspecify environment variables:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},'export COMPANION_UNSPLASH_KEY="Unsplash API key"\nexport COMPANION_UNSPLASH_SECRET="Unsplash API secret"\n')),(0,p.kt)("p",null,"When using the Companion Node.js API, configure these options:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-js"},"companion.app({\n    providerOptions: {\n        unsplash: {\n            key: 'Unsplash API key',\n            secret: 'Unsplash API secret',\n        },\n    },\n});\n")),(0,p.kt)("h2",{id:"api"},"API"),(0,p.kt)("h3",{id:"options"},"Options"),(0,p.kt)("h4",{id:"id"},(0,p.kt)("inlineCode",{parentName:"h4"},"id")),(0,p.kt)("p",null,"A unique identifier for this plugin (",(0,p.kt)("inlineCode",{parentName:"p"},"string"),", default: ",(0,p.kt)("inlineCode",{parentName:"p"},"'Unsplash'"),")."),(0,p.kt)("h4",{id:"title"},(0,p.kt)("inlineCode",{parentName:"h4"},"title")),(0,p.kt)("p",null,"Title / name shown in the UI, such as Dashboard tabs (",(0,p.kt)("inlineCode",{parentName:"p"},"string"),", default:\n",(0,p.kt)("inlineCode",{parentName:"p"},"'Unsplash'"),")."),(0,p.kt)("h4",{id:"target"},(0,p.kt)("inlineCode",{parentName:"h4"},"target")),(0,p.kt)("p",null,"DOM element, CSS selector, or plugin to place the drag and drop area into\n(",(0,p.kt)("inlineCode",{parentName:"p"},"string")," or ",(0,p.kt)("inlineCode",{parentName:"p"},"Element"),", default: ",(0,p.kt)("inlineCode",{parentName:"p"},"null"),")."),(0,p.kt)("h4",{id:"companionurl"},(0,p.kt)("inlineCode",{parentName:"h4"},"companionUrl")),(0,p.kt)("p",null,"URL to a ",(0,p.kt)("a",{parentName:"p",href:"/docs/companion"},"Companion")," instance (",(0,p.kt)("inlineCode",{parentName:"p"},"string"),", default: ",(0,p.kt)("inlineCode",{parentName:"p"},"null"),")."),(0,p.kt)("h4",{id:"companionheaders"},(0,p.kt)("inlineCode",{parentName:"h4"},"companionHeaders")),(0,p.kt)("p",null,"Custom headers that should be sent along to ",(0,p.kt)("a",{parentName:"p",href:"/docs/companion"},"Companion")," on\nevery request (",(0,p.kt)("inlineCode",{parentName:"p"},"Object"),", default: ",(0,p.kt)("inlineCode",{parentName:"p"},"{}"),")."),(0,p.kt)("h4",{id:"companionallowedhosts"},(0,p.kt)("inlineCode",{parentName:"h4"},"companionAllowedHosts")),(0,p.kt)("p",null,"The valid and authorised URL(s) from which OAuth responses should be accepted\n(",(0,p.kt)("inlineCode",{parentName:"p"},"string")," or ",(0,p.kt)("inlineCode",{parentName:"p"},"RegExp")," or ",(0,p.kt)("inlineCode",{parentName:"p"},"Array"),", default: ",(0,p.kt)("inlineCode",{parentName:"p"},"companionUrl"),")."),(0,p.kt)("p",null,"This value can be a ",(0,p.kt)("inlineCode",{parentName:"p"},"string"),", a ",(0,p.kt)("inlineCode",{parentName:"p"},"RegExp")," pattern, or an ",(0,p.kt)("inlineCode",{parentName:"p"},"Array")," of both. This is\nuseful when you have your ",(0,p.kt)("a",{parentName:"p",href:"/docs/companion"},"Companion")," running on several hosts.\nOtherwise, the default value should do fine."),(0,p.kt)("h4",{id:"companioncookiesrule"},(0,p.kt)("inlineCode",{parentName:"h4"},"companionCookiesRule")),(0,p.kt)("p",null,"This option correlates to the\n",(0,p.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Request/credentials"},"RequestCredentials value"),"\n(",(0,p.kt)("inlineCode",{parentName:"p"},"string"),", default: ",(0,p.kt)("inlineCode",{parentName:"p"},"'same-origin'"),")."),(0,p.kt)("p",null,"This tells the plugin whether to send cookies to ",(0,p.kt)("a",{parentName:"p",href:"/docs/companion"},"Companion"),"."),(0,p.kt)("h4",{id:"locale"},(0,p.kt)("inlineCode",{parentName:"h4"},"locale")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n    strings: {\n        pluginNameUnsplash: 'Unsplash',\n    },\n};\n")))}c.isMDXComponent=!0}}]);