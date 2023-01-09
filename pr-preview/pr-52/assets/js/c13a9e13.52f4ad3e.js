"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[2465],{5162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),r=a(6010);const s="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(s,l),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(7462),r=a(7294),s=a(6010),l=a(2389),i=a(7392),o=a(7094),u=a(2466);const d="tabList__CuJ",p="tabItem_LNqP";function m(e){const{lazy:t,block:a,defaultValue:l,values:m,groupId:c,className:h}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=m??f.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),b=(0,i.l)(k,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===l?l:l??f.find((e=>e.props.default))?.props.value??f[0].props.value;if(null!==y&&!k.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:v}=(0,o.U)(),[w,N]=(0,r.useState)(y),C=[],{blockElementScrollPositionUntilNextRender:x}=(0,u.o5)();if(null!=c){const e=g[c];null!=e&&e!==w&&k.some((t=>t.value===e))&&N(e)}const U=e=>{const t=e.currentTarget,a=C.indexOf(t),n=k[a].value;n!==w&&(x(t),N(n),null!=c&&v(c,String(n)))},S=e=>{let t=null;switch(e.key){case"Enter":U(e);break;case"ArrowRight":{const a=C.indexOf(e.currentTarget)+1;t=C[a]??C[0];break}case"ArrowLeft":{const a=C.indexOf(e.currentTarget)-1;t=C[a]??C[C.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,s.Z)("tabs-container",d)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":a},h)},k.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>C.push(e),onKeyDown:S,onClick:U},l,{className:(0,s.Z)("tabs__item",p,l?.className,{"tabs__item--active":w===t})}),a??t)}))),t?(0,r.cloneElement)(f.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function c(e){const t=(0,l.Z)();return r.createElement(m,(0,n.Z)({key:String(t)},e))}},3068:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),r=a(814),s=a(3612);const l=JSON.parse('{"name":"uppy-io","version":"0.0.0","private":true,"scripts":{"build":"docusaurus build","clear":"docusaurus clear","deploy":"docusaurus deploy","dev":"docusaurus start","lint:js":"eslint . --cache","lint:md":"run-s --continue-on-error remark:md remark:mdx","lint":"run-s --continue-on-error lint:js lint:md prettier:check","prepare":"husky install","prettier:check":"prettier -c .","prettier:fix":"prettier -w .","remark:md":"remark . -qf","remark:mdx":"remark . -e mdx -u mdx -qf","serve":"docusaurus serve","swizzle":"docusaurus swizzle","typecheck":"tsc --noEmit","write-heading-ids":"docusaurus write-heading-ids","write-translations":"docusaurus write-translations"},"lint-staged":{"*.{js,jsx,ts,tsx}":["eslint --fix --cache","prettier --write"],"*.md":["remark -qf --","prettier --write"],"*.mdx":["remark -u mdx -qf --","prettier --write"],"*.{css,html,json,yml}":"prettier --write"},"browserslist":{"production":[">0.5%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"dependencies":{"@docusaurus/core":"^2.0.1","@docusaurus/preset-classic":"^2.0.1","@mdx-js/react":"^1.6.22","clsx":"^1.1.1","prism-react-renderer":"^1.2.1","react":"^17.0.1","react-dom":"^17.0.1"},"devDependencies":{"@docusaurus/eslint-plugin":"^2.0.1","@docusaurus/module-type-aliases":"^2.0.1","@tsconfig/docusaurus":"^1.0.4","eslint":"^8.19.0","eslint-config-prettier":"^8.5.0","eslint-plugin-markdown":"^3.0.0","eslint-plugin-mdx":"^2.0.4","husky":"^8.0.1","lint-staged":"^13.0.3","mdast-comment-marker":"^2.1.0","npm-run-all":"^4.1.5","prettier":"2.8.1","remark-cli":"^11.0.0","remark-directive":"^2.0.1","remark-frontmatter":"^4.0.0","remark-gfm":"^3.0.1","remark-lint":"^9.0.0","remark-lint-final-newline":"^2.0.0","remark-lint-hard-break-spaces":"^3.0.0","remark-lint-list-item-bullet-indent":"^4.0.0","remark-lint-list-item-indent":"^3.0.0","remark-lint-no-blockquote-without-marker":"^5.0.0","remark-lint-no-duplicate-definitions":"^3.0.0","remark-lint-no-heading-content-indent":"^4.0.0","remark-lint-no-inline-padding":"^4.0.0","remark-lint-no-literal-urls":"^3.0.0","remark-lint-no-shortcut-reference-image":"^3.0.0","remark-lint-no-shortcut-reference-link":"^3.0.0","remark-lint-no-undefined-references":"^4.0.0","remark-lint-no-unused-definitions":"^3.0.0","remark-lint-ordered-list-marker-style":"^3.0.0","remark-mdx":"^2.1.2","remark-preset-lint-consistent":"^5.1.1","remark-preset-lint-markdown-style-guide":"^5.1.2","remark-preset-prettier":"^2.0.1","remark-retext":"^5.0.0","retext-english":"^4.0.0","retext-equality":"^6.2.0","retext-profanities":"^7.1.0","retext-quotes":"^5.0.0","retext-simplify":"^7.0.0","retext-syntax-mentions":"^3.1.0","typescript":"^4.6.2","unified":"^10.0.0","unified-message-control":"^4.0.0"},"packageManager":"yarn@3.3.1+sha224.1c866bd0fca5cf439c5b6a019f1653906d5e7ea807b01a9c7b18adab"}'),{version:i}=l;function o(e){let{children:t,uppyCssName:a="uppy.min.css",uppyJsName:l="uppy.min.js"}=e,o=[];n.Children.toArray(t).forEach((e=>{o=[...o,...String(e).trim().split("\n").map((e=>e.trim()))]}));const u=o.map((e=>`  ${e}`)).join("\n"),d=`https://releases.transloadit.com/uppy/v${i}/${l}`,p=`\x3c!-- 1. Add CSS to \`<head>\` --\x3e\n<link href="https://releases.transloadit.com/uppy/v${i}/${a}" rel="stylesheet">\n\n\x3c!-- 2. Initialize --\x3e\n<div id="uppy"></div>\n\n<script type="module">\n${u.replace(/{{UPPY_JS_URL}}/g,d)}\n<\/script>\n`;return n.createElement(n.Fragment,null,n.createElement(s.Z,{type:"caution"},n.createElement("p",null,"The bundle consists of most Uppy plugins, so this method is not recommended for production, as your users will have to download all plugins when you are likely using only a few."),n.createElement("p",null,"It can be useful to speed up your development environment, so don't hesitate to use it to get you started.")),n.createElement(r.Z,{language:"html"},p))}},1589:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>m});var n=a(7462),r=(a(7294),a(3905)),s=a(5488),l=a(5162),i=a(3068);const o={sidebar_position:4},u="Status bar",d={unversionedId:"user-interfaces/elements/status-bar",id:"user-interfaces/elements/status-bar",title:"Status bar",description:"The @uppy/status-bar plugin shows upload progress and speed, estimated time, pre- and post-processing information,",source:"@site/docs/user-interfaces/elements/status-bar.mdx",sourceDirName:"user-interfaces/elements",slug:"/user-interfaces/elements/status-bar",permalink:"/uppy.io/pr-preview/pr-52/docs/user-interfaces/elements/status-bar",draft:!1,editUrl:"https://github.com/transloadit/uppy.io/tree/main/docs/user-interfaces/elements/status-bar.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Informer",permalink:"/uppy.io/pr-preview/pr-52/docs/user-interfaces/elements/informer"},next:{title:"Progress bar",permalink:"/uppy.io/pr-preview/pr-52/docs/user-interfaces/elements/progress-bar"}},p={},m=[{value:"When should I use it?",id:"when-should-i-use-it",level:2},{value:"Install",id:"install",level:2},{value:"Use",id:"use",level:2},{value:"API",id:"api",level:2},{value:"Options",id:"options",level:3},{value:"<code>id</code>",id:"id",level:4},{value:"<code>target</code>",id:"target",level:4},{value:"<code>hideAfterFinish</code>",id:"hideafterfinish",level:4},{value:"<code>showProgressDetails</code>",id:"showprogressdetails",level:4},{value:"<code>hideUploadButton</code>",id:"hideuploadbutton",level:4},{value:"<code>hideRetryButton</code>",id:"hideretrybutton",level:4},{value:"<code>hidePauseResumeButton</code>",id:"hidepauseresumebutton",level:4},{value:"<code>hideCancelButton</code>",id:"hidecancelbutton",level:4},{value:"<code>doneButtonHandler</code>",id:"donebuttonhandler",level:4},{value:"<code>locale</code>",id:"locale",level:4}],c={toc:m};function h(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"status-bar"},"Status bar"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"@uppy/status-bar")," plugin shows upload progress and speed, estimated time, pre- and post-processing information,\nand allows users to control (pause/resume/cancel) the upload."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Try it out together with ",(0,r.kt)("a",{parentName:"p",href:"/docs/user-interfaces/drag-drop"},(0,r.kt)("inlineCode",{parentName:"a"},"@uppy/drag-drop")),"\nin ",(0,r.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/uppy-drag-drop-gyewzx?file=/src/index.js"},"CodeSandbox"))),(0,r.kt)("h2",{id:"when-should-i-use-it"},"When should I use it?"),(0,r.kt)("p",null,"When you use the ",(0,r.kt)("a",{parentName:"p",href:"/docs/user-interfaces/dashboard"},"Dashboard")," it\u2019s already included by default.\nThis plugin is published separately but made specifically for the Dashboard.\nYou can still use it without it but it may need some (CSS) tweaking for your use case."),(0,r.kt)("h2",{id:"install"},"Install"),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"npm",label:"NPM",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @uppy/status-bar\n"))),(0,r.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @uppy/status-bar\n"))),(0,r.kt)(l.Z,{value:"cdn",label:"CDN",mdxType:"TabItem"},(0,r.kt)(i.Z,{mdxType:"UppyCdnExample"},"\n        import { Uppy, StatusBar } from \"{{UPPY_JS_URL}}\"\n        const uppy = new Uppy()\n        uppy.use(StatusBar, { target: '#status-bar' })\n      "))),(0,r.kt)("h2",{id:"use"},"Use"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import Uppy from '@uppy/core';\nimport StatusBar from '@uppy/status-bar';\n\n// The `@uppy/status-bar` plugin includes some basic styles.\n// You can also choose not to use it and provide your own styles instead.\nimport '@uppy/core/dist/style.min.css';\nimport '@uppy/status-bar/dist/style.min.css';\n\n// Example of setting all the options to their defaults.\n// Not passing anything to `StatusBar` is therefor the same as the example below.\nnew Uppy().use(StatusBar, {\n    id: 'StatusBar',\n    target: null,\n});\n")),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("h3",{id:"options"},"Options"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"uppy.use(StatusBar, {\n    id: 'StatusBar',\n    target: 'body',\n    hideAfterFinish: true,\n    showProgressDetails: false,\n    hideUploadButton: false,\n    hideRetryButton: false,\n    hidePauseResumeButton: false,\n    hideCancelButton: false,\n    doneButtonHandler: null,\n    locale: {},\n});\n")),(0,r.kt)("h4",{id:"id"},(0,r.kt)("inlineCode",{parentName:"h4"},"id")),(0,r.kt)("p",null,"A unique identifier for this Status Bar (",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", default: ",(0,r.kt)("inlineCode",{parentName:"p"},"'StatusBar'"),")."),(0,r.kt)("p",null,"Use this if you need to add several StatusBar instances."),(0,r.kt)("h4",{id:"target"},(0,r.kt)("inlineCode",{parentName:"h4"},"target")),(0,r.kt)("p",null,"DOM element, CSS selector, or plugin to mount the Status Bar into (",(0,r.kt)("inlineCode",{parentName:"p"},"Element"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"UIPlugin"),", default: ",(0,r.kt)("inlineCode",{parentName:"p"},"'body'"),")."),(0,r.kt)("h4",{id:"hideafterfinish"},(0,r.kt)("inlineCode",{parentName:"h4"},"hideAfterFinish")),(0,r.kt)("p",null,"Hide the Status Bar after the upload is complete (",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),", default: ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),")."),(0,r.kt)("h4",{id:"showprogressdetails"},(0,r.kt)("inlineCode",{parentName:"h4"},"showProgressDetails")),(0,r.kt)("p",null,"Display remaining upload size and estimated time (",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),", default: ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),")"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"false"),": Uploading: 45%"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"true"),": Uploading: 45%\u30fb43 MB of 101 MB\u30fb8s left")),(0,r.kt)("h4",{id:"hideuploadbutton"},(0,r.kt)("inlineCode",{parentName:"h4"},"hideUploadButton")),(0,r.kt)("p",null,"Hide the upload button (",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),", default: ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),")."),(0,r.kt)("p",null,"Use this if you are providing a custom upload button somewhere, and using the ",(0,r.kt)("inlineCode",{parentName:"p"},"uppy.upload()")," API."),(0,r.kt)("h4",{id:"hideretrybutton"},(0,r.kt)("inlineCode",{parentName:"h4"},"hideRetryButton")),(0,r.kt)("p",null,"Hide the retry button (",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),", default: ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),")."),(0,r.kt)("p",null,"Use this if you are providing a custom retry button somewhere, and using the ",(0,r.kt)("inlineCode",{parentName:"p"},"uppy.retryAll()")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"uppy.retryUpload(fileID)")," API."),(0,r.kt)("h4",{id:"hidepauseresumebutton"},(0,r.kt)("inlineCode",{parentName:"h4"},"hidePauseResumeButton")),(0,r.kt)("p",null,"Hide pause/resume buttons (for resumable uploads, via ",(0,r.kt)("a",{parentName:"p",href:"http://tus.io"},"tus"),", for example) (",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),", default: ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),")."),(0,r.kt)("p",null,"Use this if you are providing custom cancel or pause/resume buttons somewhere, and using the ",(0,r.kt)("inlineCode",{parentName:"p"},"uppy.pauseResume(fileID)")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"uppy.removeFile(fileID)")," API."),(0,r.kt)("h4",{id:"hidecancelbutton"},(0,r.kt)("inlineCode",{parentName:"h4"},"hideCancelButton")),(0,r.kt)("p",null,"Hide the cancel button (",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),", default: ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),")."),(0,r.kt)("p",null,"Use this if you are providing a custom retry button somewhere, and using the ",(0,r.kt)("inlineCode",{parentName:"p"},"uppy.cancelAll()")," API."),(0,r.kt)("h4",{id:"donebuttonhandler"},(0,r.kt)("inlineCode",{parentName:"h4"},"doneButtonHandler")),(0,r.kt)("p",null,"Status Bar will render a \u201cDone\u201d button in place of pause/resume/cancel buttons, once the upload/encoding is done (",(0,r.kt)("inlineCode",{parentName:"p"},"Function"),", default: ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),")."),(0,r.kt)("p",null,"The behaviour of this \u201cDone\u201d button is defined by the handler function \u2014 can be used to close file picker modals or clear the upload state.\nThis is what the Dashboard plugin, which uses Status Bar internally, sets:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const doneButtonHandler = () => {\n    this.uppy.reset();\n    this.requestCloseModal();\n};\n")),(0,r.kt)("h4",{id:"locale"},(0,r.kt)("inlineCode",{parentName:"h4"},"locale")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n    strings: {\n        // Shown in the status bar while files are being uploaded.\n        uploading: 'Uploading',\n        // Shown in the status bar once all files have been uploaded.\n        complete: 'Complete',\n        // Shown in the status bar if an upload failed.\n        uploadFailed: 'Upload failed',\n        // Shown in the status bar while the upload is paused.\n        paused: 'Paused',\n        // Used as the label for the button that retries an upload.\n        retry: 'Retry',\n        // Used as the label for the button that cancels an upload.\n        cancel: 'Cancel',\n        // Used as the label for the button that pauses an upload.\n        pause: 'Pause',\n        // Used as the label for the button that resumes an upload.\n        resume: 'Resume',\n        // Used as the label for the button that resets the upload state after an upload\n        done: 'Done',\n        // When `showProgressDetails` is set, shows the number of files that have been fully uploaded so far.\n        filesUploadedOfTotal: {\n            0: '%{complete} of %{smart_count} file uploaded',\n            1: '%{complete} of %{smart_count} files uploaded',\n        },\n        // When `showProgressDetails` is set, shows the amount of bytes that have been uploaded so far.\n        dataUploadedOfTotal: '%{complete} of %{total}',\n        // When `showProgressDetails` is set, shows an estimation of how long the upload will take to complete.\n        xTimeLeft: '%{time} left',\n        // Used as the label for the button that starts an upload.\n        uploadXFiles: {\n            0: 'Upload %{smart_count} file',\n            1: 'Upload %{smart_count} files',\n        },\n        // Used as the label for the button that starts an upload, if another upload has been started in the past\n        // and new files were added later.\n        uploadXNewFiles: {\n            0: 'Upload +%{smart_count} file',\n            1: 'Upload +%{smart_count} files',\n        },\n        upload: 'Upload',\n        retryUpload: 'Retry upload',\n        xMoreFilesAdded: {\n            0: '%{smart_count} more file added',\n            1: '%{smart_count} more files added',\n        },\n        showErrorDetails: 'Show error details',\n    },\n};\n")))}h.isMDXComponent=!0}}]);