"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[7199],{5162:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(7294),a=r(6010);const i={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:r,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(i.tabItem,l),hidden:r},t)}},4866:(e,t,r)=>{r.d(t,{Z:()=>w});var n=r(7462),a=r(7294),i=r(6010),l=r(2466),s=r(6550),o=r(1980),u=r(7392),p=r(12);function d(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function c(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??d(r);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:r}=e;const n=(0,s.k6)(),i=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,o._X)(i),(0,a.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(n.location.search);t.set(i,e),n.replace({...n.location,search:t.toString()})}),[i,n])]}function k(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,i=c(e),[l,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[o,u]=h({queryString:r,groupId:n}),[d,k]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,i]=(0,p.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:n}),f=(()=>{const e=o??d;return m({value:e,tabValues:i})?e:null})();(0,a.useLayoutEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),k(e)}),[u,k,i]),tabValues:i}}var f=r(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:r,selectedValue:s,selectValue:o,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),c=e=>{const t=e.currentTarget,r=p.indexOf(t),n=u[r].value;n!==s&&(d(t),o(n))},m=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=p.indexOf(e.currentTarget)+1;t=p[r]??p[0];break}case"ArrowLeft":{const r=p.indexOf(e.currentTarget)-1;t=p[r]??p[p.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},t)},u.map((e=>{let{value:t,label:r,attributes:l}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:c},l,{className:(0,i.Z)("tabs__item",g.tabItem,l?.className,{"tabs__item--active":s===t})}),r??t)})))}function y(e){let{lazy:t,children:r,selectedValue:n}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function b(e){const t=k(e);return a.createElement("div",{className:(0,i.Z)("tabs-container",g.tabList)},a.createElement(v,(0,n.Z)({},e,t)),a.createElement(y,(0,n.Z)({},e,t)))}function w(e){const t=(0,f.Z)();return a.createElement(b,(0,n.Z)({key:String(t)},e))}},3068:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(7294),a=r(814),i=r(3612);const l=JSON.parse('{"name":"uppy-io","version":"0.0.0","private":true,"scripts":{"build":"docusaurus build","clear":"docusaurus clear","deploy":"docusaurus deploy","dev":"docusaurus start","lint:js":"eslint . --cache","lint:md":"run-s --continue-on-error remark:md remark:mdx","lint":"run-s --continue-on-error lint:js lint:md format:check-diff","prepare":"husky install","format:show-diff":"git stash push -q; prettier . -w --loglevel silent && git --no-pager diff && git reset --hard; git stash pop -q","format:check":"prettier -c .","format:check-diff":"yarn format:check || yarn format:show-diff","format":"prettier -w .","remark:md":"remark . -qf","remark:mdx":"remark . -e mdx -u mdx -qf","serve":"docusaurus serve","swizzle":"docusaurus swizzle","typecheck":"tsc --noEmit","write-heading-ids":"docusaurus write-heading-ids","write-translations":"docusaurus write-translations"},"lint-staged":{"*.{js,jsx,ts,tsx}":["eslint --fix --cache","prettier --write"],"*.md":["remark -qf --","prettier --write"],"*.mdx":["remark -u mdx -qf --","prettier --write"],"*.{css,html,json,yml}":"prettier --write"},"browserslist":{"production":[">0.5%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"dependencies":{"@docusaurus/core":"^2.0.1","@docusaurus/preset-classic":"^2.0.1","@mdx-js/react":"^1.6.22","@uppy/audio":"latest","@uppy/box":"latest","@uppy/core":"latest","@uppy/dashboard":"latest","@uppy/dropbox":"latest","@uppy/google-drive":"latest","@uppy/image-editor":"latest","@uppy/instagram":"latest","@uppy/locales":"latest","@uppy/onedrive":"latest","@uppy/react":"latest","@uppy/remote-sources":"latest","@uppy/screen-capture":"latest","@uppy/tus":"latest","@uppy/unsplash":"latest","@uppy/url":"latest","@uppy/webcam":"latest","clsx":"^1.1.1","prism-react-renderer":"^1.2.1","react":"^17.0.1","react-dom":"^17.0.1"},"devDependencies":{"@docusaurus/eslint-plugin":"^2.0.1","@docusaurus/module-type-aliases":"^2.0.1","@tsconfig/docusaurus":"^1.0.4","@typescript-eslint/eslint-plugin":"^5.48.1","@typescript-eslint/parser":"^5.48.1","eslint":"^8.19.0","eslint-config-prettier":"^8.5.0","eslint-plugin-markdown":"^3.0.0","eslint-plugin-mdx":"^2.0.4","husky":"^8.0.1","lint-staged":"^13.0.3","mdast-comment-marker":"^2.1.0","npm-run-all":"^4.1.5","prettier":"2.8.1","remark-cli":"^11.0.0","remark-directive":"^2.0.1","remark-frontmatter":"^4.0.0","remark-gfm":"^3.0.1","remark-lint":"^9.0.0","remark-lint-final-newline":"^2.0.0","remark-lint-hard-break-spaces":"^3.0.0","remark-lint-list-item-bullet-indent":"^4.0.0","remark-lint-list-item-indent":"^3.0.0","remark-lint-no-blockquote-without-marker":"^5.0.0","remark-lint-no-duplicate-definitions":"^3.0.0","remark-lint-no-heading-content-indent":"^4.0.0","remark-lint-no-inline-padding":"^4.0.0","remark-lint-no-literal-urls":"^3.0.0","remark-lint-no-shortcut-reference-image":"^3.0.0","remark-lint-no-shortcut-reference-link":"^3.0.0","remark-lint-no-undefined-references":"^4.0.0","remark-lint-no-unused-definitions":"^3.0.0","remark-lint-ordered-list-marker-style":"^3.0.0","remark-mdx":"^2.1.2","remark-preset-lint-consistent":"^5.1.1","remark-preset-lint-markdown-style-guide":"^5.1.2","remark-preset-prettier":"^2.0.1","remark-retext":"^5.0.0","retext-english":"^4.0.0","retext-equality":"^6.2.0","retext-profanities":"^7.1.0","retext-quotes":"^5.0.0","retext-simplify":"^7.0.0","retext-syntax-mentions":"^3.1.0","typescript":"^4.6.2","unified":"^10.0.0","unified-message-control":"^4.0.0"},"packageManager":"yarn@3.3.1+sha224.1c866bd0fca5cf439c5b6a019f1653906d5e7ea807b01a9c7b18adab"}'),{version:s}=l;function o(e){let{children:t,uppyCssName:r="uppy.min.css",uppyJsName:l="uppy.min.js"}=e,o=[];n.Children.toArray(t).forEach((e=>{o=[...o,...String(e).trim().split("\n").map((e=>e.trim()))]}));const u=o.map((e=>`  ${e}`)).join("\n"),p=`https://releases.transloadit.com/uppy/v${s}/${l}`,d=`\x3c!-- 1. Add CSS to \`<head>\` --\x3e\n<link href="https://releases.transloadit.com/uppy/v${s}/${r}" rel="stylesheet">\n\n\x3c!-- 2. Initialize --\x3e\n<div id="uppy"></div>\n\n<script type="module">\n${u.replace(/{{UPPY_JS_URL}}/g,p)}\n<\/script>\n`;return n.createElement(n.Fragment,null,n.createElement(i.Z,{type:"caution"},n.createElement("p",null,"The bundle consists of most Uppy plugins, so this method is not recommended for production, as your users will have to download all plugins when you are likely using only a few."),n.createElement("p",null,"It can be useful to speed up your development environment, so don't hesitate to use it to get you started.")),n.createElement(a.Z,{language:"html"},d))}},9787:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>k,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var n=r(7462),a=(r(7294),r(3905)),i=r(4866),l=r(5162),s=r(3068);const o={sidebar_position:10},u="Golden Retriever",p={unversionedId:"golden-retriever",id:"golden-retriever",title:"Golden Retriever",description:"The @uppy/golden-retriever plugin saves selected files in your browser cache,",source:"@site/docs/golden-retriever.mdx",sourceDirName:".",slug:"/golden-retriever",permalink:"/uppy.io/pr-preview/pr-76/docs/golden-retriever",draft:!1,editUrl:"https://github.com/transloadit/uppy.io/tree/main/docs/golden-retriever.mdx",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Remote sources",permalink:"/uppy.io/pr-preview/pr-76/docs/presets/remote-sources"},next:{title:"Compressor",permalink:"/uppy.io/pr-preview/pr-76/docs/compressor"}},d={},c=[{value:"When should I use this?",id:"when-should-i-use-this",level:2},{value:"Install",id:"install",level:2},{value:"Use",id:"use",level:2},{value:"Enabling Service Worker",id:"enabling-service-worker",level:3},{value:"API",id:"api",level:2},{value:"Options",id:"options",level:3},{value:"<code>id</code>",id:"id",level:4},{value:"<code>expires</code>",id:"expires",level:4},{value:"<code>serviceWorker</code>",id:"serviceworker",level:4}],m={toc:c},h="wrapper";function k(e){let{components:t,...r}=e;return(0,a.kt)(h,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"golden-retriever"},"Golden Retriever"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"@uppy/golden-retriever")," plugin saves selected files in your browser cache,\nso that if the browser crashes, or the user accidentally closes the tab, Uppy\ncan restore everything and continue uploading as if nothing happened. You can\nread more about it\n",(0,a.kt)("a",{parentName:"p",href:"https://uppy.io/blog/2017/07/golden-retriever/"},"on our blog"),"."),(0,a.kt)("p",null,"The Golden Retriever uses three methods of browser data storage:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"LocalStorage")," to store file metadata and Uppy state only."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"IndexedDB")," for small files, usually under 5MiB."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Service Worker")," (",(0,a.kt)("em",{parentName:"li"},"optional"),") for ",(0,a.kt)("em",{parentName:"li"},"all")," files because, unlike ",(0,a.kt)("inlineCode",{parentName:"li"},"IndexedDB"),",\n",(0,a.kt)("inlineCode",{parentName:"li"},"Service Worker")," can keep references to large files. Service Worker storage is\n",(0,a.kt)("em",{parentName:"li"},"quite")," temporary though, and doesn\u2019t persist across browser crashes or\nrestarts. It works well, however, for accidental refreshes or closed tabs.")),(0,a.kt)("p",null,"Upon restore, the plugin first restores state from ",(0,a.kt)("inlineCode",{parentName:"p"},"LocalStorage")," and then\nchecks both file storages \u2014 ",(0,a.kt)("inlineCode",{parentName:"p"},"IndexedDB")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"ServiceWorker")," \u2014 merging the\nresults."),(0,a.kt)("p",null,"If restore is unsuccessful for certain files, they will be marked as \u201cghosts\u201d in\nthe Dashboard UI, and a message + button offering to re-select those files will\nbe displayed."),(0,a.kt)("h2",{id:"when-should-i-use-this"},"When should I use this?"),(0,a.kt)("p",null,"When you want extra insurance for the user-selected files. If you feel like\nusers might spend some time picking files, tweaking descriptions etc, and will\nnot appreciate having to do it over again if something crashes. Another use case\nmight be when you think user might want to pick a few files, navigate away to do\nsomething else in your app or otherwise, and then come back to the same\nselection."),(0,a.kt)("h2",{id:"install"},"Install"),(0,a.kt)(i.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"npm",label:"NPM",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @uppy/golden-retriever\n"))),(0,a.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @uppy/golden-retriever\n"))),(0,a.kt)(l.Z,{value:"cdn",label:"CDN",mdxType:"TabItem"},(0,a.kt)(s.Z,{mdxType:"UppyCdnExample"},'\n        import { Uppy, GoldenRetriever } from "{{UPPY_JS_URL}}"\n        new Uppy().use(GoldenRetriever)\n      '))),(0,a.kt)("h2",{id:"use"},"Use"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"{7} showLineNumbers","{7}":!0,showLineNumbers:!0},"import Uppy from '@uppy/core';\nimport Dashboard from '@uppy/dashboard';\nimport GoldenRetriever from '@uppy/golden-retriever';\n\nnew Uppy()\n  .use(Dashboard, {inline:true, target: '#dashboard')\n  .use(GoldenRetriever);\n")),(0,a.kt)("p",null,"By default, Golden Retriever will only use the ",(0,a.kt)("inlineCode",{parentName:"p"},"IndexedDB")," storage, which is\ngood enough for files up to 5 MiB (configurable). ",(0,a.kt)("inlineCode",{parentName:"p"},"Service Worker")," is optional\nand requires setup."),(0,a.kt)("h3",{id:"enabling-service-worker"},"Enabling Service Worker"),(0,a.kt)("p",null,"With the Service Worker storage, Golden Retriever will be able to temporary\nstore references to large files."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Bundle your own service worker ",(0,a.kt)("inlineCode",{parentName:"p"},"sw.js")," file with Uppy GoldenRetriever\u2019s\nservice worker."),(0,a.kt)("admonition",{parentName:"li",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"For Webpack, check out\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/oliviertassinari/serviceworker-webpack-plugin"},"serviceworker-webpack-plugin"),".")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="sw.js"',title:'"sw.js"'},"import('@uppy/golden-retriever/lib/ServiceWorker');\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Register it in your app\u2019s entry point:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// you app.js entry point\nuppy.use(GoldenRetriever, { serviceWorker: true });\n\nif ('serviceWorker' in navigator) {\n    navigator.serviceWorker\n        .register('/sw.js') // path to your bundled service worker with GoldenRetriever service worker\n        .then((registration) => {\n            console.log(\n                'ServiceWorker registration successful with scope: ',\n                registration.scope,\n            );\n        })\n        .catch((error) => {\n            console.log(`Registration failed with ${error}`);\n        });\n}\n")))),(0,a.kt)("p",null,"Voil\xe0, that\u2019s it. Happy retrieving!"),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("h3",{id:"options"},"Options"),(0,a.kt)("h4",{id:"id"},(0,a.kt)("inlineCode",{parentName:"h4"},"id")),(0,a.kt)("p",null,"A unique identifier for this plugin (",(0,a.kt)("inlineCode",{parentName:"p"},"string"),", default: ",(0,a.kt)("inlineCode",{parentName:"p"},"'GoldenRetriever'"),")."),(0,a.kt)("h4",{id:"expires"},(0,a.kt)("inlineCode",{parentName:"h4"},"expires")),(0,a.kt)("p",null,"How long to store metadata and files for. Used for ",(0,a.kt)("inlineCode",{parentName:"p"},"LocalStorage")," and\n",(0,a.kt)("inlineCode",{parentName:"p"},"IndexedDB")," (",(0,a.kt)("inlineCode",{parentName:"p"},"number"),", default: ",(0,a.kt)("inlineCode",{parentName:"p"},"24 * 60 * 60 * 1000")," // 24 hours)."),(0,a.kt)("h4",{id:"serviceworker"},(0,a.kt)("inlineCode",{parentName:"h4"},"serviceWorker")),(0,a.kt)("p",null,"Whether to enable ",(0,a.kt)("inlineCode",{parentName:"p"},"Service Worker")," storage (",(0,a.kt)("inlineCode",{parentName:"p"},"boolean"),", default: ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),")."))}k.isMDXComponent=!0}}]);