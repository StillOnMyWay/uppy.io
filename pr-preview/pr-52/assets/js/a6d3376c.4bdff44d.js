"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[1948],{5162:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(7294),i=a(6010);const l="tabItem_Ymn6";function r(e){let{children:t,hidden:a,className:r}=e;return n.createElement("div",{role:"tabpanel",className:(0,i.Z)(l,r),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(7462),i=a(7294),l=a(6010),r=a(2389),o=a(7392),s=a(7094),p=a(2466);const u="tabList__CuJ",d="tabItem_LNqP";function m(e){const{lazy:t,block:a,defaultValue:r,values:m,groupId:c,className:h}=e,k=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=m??k.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),y=(0,o.l)(f,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===r?r:r??k.find((e=>e.props.default))?.props.value??k[0].props.value;if(null!==b&&!f.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:g}=(0,s.U)(),[w,C]=(0,i.useState)(b),v=[],{blockElementScrollPositionUntilNextRender:S}=(0,p.o5)();if(null!=c){const e=N[c];null!=e&&e!==w&&f.some((t=>t.value===e))&&C(e)}const T=e=>{const t=e.currentTarget,a=v.indexOf(t),n=f[a].value;n!==w&&(S(t),C(n),null!=c&&g(c,String(n)))},U=e=>{let t=null;switch(e.key){case"Enter":T(e);break;case"ArrowRight":{const a=v.indexOf(e.currentTarget)+1;t=v[a]??v[0];break}case"ArrowLeft":{const a=v.indexOf(e.currentTarget)-1;t=v[a]??v[v.length-1];break}}t?.focus()};return i.createElement("div",{className:(0,l.Z)("tabs-container",u)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},h)},f.map((e=>{let{value:t,label:a,attributes:r}=e;return i.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>v.push(e),onKeyDown:U,onClick:T},r,{className:(0,l.Z)("tabs__item",d,r?.className,{"tabs__item--active":w===t})}),a??t)}))),t?(0,i.cloneElement)(k.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function c(e){const t=(0,r.Z)();return i.createElement(m,(0,n.Z)({key:String(t)},e))}},3068:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7294),i=a(814),l=a(3612);const r=JSON.parse('{"name":"uppy-io","version":"0.0.0","private":true,"scripts":{"build":"docusaurus build","clear":"docusaurus clear","deploy":"docusaurus deploy","dev":"docusaurus start","lint:js":"eslint . --cache","lint:md":"run-s --continue-on-error remark:md remark:mdx","lint":"run-s --continue-on-error lint:js lint:md prettier:check","prepare":"husky install","prettier:check":"prettier -c .","prettier:fix":"prettier -w .","remark:md":"remark . -qf","remark:mdx":"remark . -e mdx -u mdx -qf","serve":"docusaurus serve","swizzle":"docusaurus swizzle","typecheck":"tsc --noEmit","write-heading-ids":"docusaurus write-heading-ids","write-translations":"docusaurus write-translations"},"lint-staged":{"*.{js,jsx,ts,tsx}":["eslint --fix --cache","prettier --write"],"*.md":["remark -qf --","prettier --write"],"*.mdx":["remark -u mdx -qf --","prettier --write"],"*.{css,html,json,yml}":"prettier --write"},"browserslist":{"production":[">0.5%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"dependencies":{"@docusaurus/core":"^2.0.1","@docusaurus/preset-classic":"^2.0.1","@mdx-js/react":"^1.6.22","clsx":"^1.1.1","prism-react-renderer":"^1.2.1","react":"^17.0.1","react-dom":"^17.0.1"},"devDependencies":{"@docusaurus/eslint-plugin":"^2.0.1","@docusaurus/module-type-aliases":"^2.0.1","@tsconfig/docusaurus":"^1.0.4","eslint":"^8.19.0","eslint-config-prettier":"^8.5.0","eslint-plugin-markdown":"^3.0.0","eslint-plugin-mdx":"^2.0.4","husky":"^8.0.1","lint-staged":"^13.0.3","mdast-comment-marker":"^2.1.0","npm-run-all":"^4.1.5","prettier":"2.8.1","remark-cli":"^11.0.0","remark-directive":"^2.0.1","remark-frontmatter":"^4.0.0","remark-gfm":"^3.0.1","remark-lint":"^9.0.0","remark-lint-final-newline":"^2.0.0","remark-lint-hard-break-spaces":"^3.0.0","remark-lint-list-item-bullet-indent":"^4.0.0","remark-lint-list-item-indent":"^3.0.0","remark-lint-no-blockquote-without-marker":"^5.0.0","remark-lint-no-duplicate-definitions":"^3.0.0","remark-lint-no-heading-content-indent":"^4.0.0","remark-lint-no-inline-padding":"^4.0.0","remark-lint-no-literal-urls":"^3.0.0","remark-lint-no-shortcut-reference-image":"^3.0.0","remark-lint-no-shortcut-reference-link":"^3.0.0","remark-lint-no-undefined-references":"^4.0.0","remark-lint-no-unused-definitions":"^3.0.0","remark-lint-ordered-list-marker-style":"^3.0.0","remark-mdx":"^2.1.2","remark-preset-lint-consistent":"^5.1.1","remark-preset-lint-markdown-style-guide":"^5.1.2","remark-preset-prettier":"^2.0.1","remark-retext":"^5.0.0","retext-english":"^4.0.0","retext-equality":"^6.2.0","retext-profanities":"^7.1.0","retext-quotes":"^5.0.0","retext-simplify":"^7.0.0","retext-syntax-mentions":"^3.1.0","typescript":"^4.6.2","unified":"^10.0.0","unified-message-control":"^4.0.0"},"packageManager":"yarn@3.3.1+sha224.1c866bd0fca5cf439c5b6a019f1653906d5e7ea807b01a9c7b18adab"}'),{version:o}=r;function s(e){let{children:t,uppyCssName:a="uppy.min.css",uppyJsName:r="uppy.min.js"}=e,s=[];n.Children.toArray(t).forEach((e=>{s=[...s,...String(e).trim().split("\n").map((e=>e.trim()))]}));const p=s.map((e=>`  ${e}`)).join("\n"),u=`https://releases.transloadit.com/uppy/v${o}/${r}`,d=`\x3c!-- 1. Add CSS to \`<head>\` --\x3e\n<link href="https://releases.transloadit.com/uppy/v${o}/${a}" rel="stylesheet">\n\n\x3c!-- 2. Initialize --\x3e\n<div id="uppy"></div>\n\n<script type="module">\n${p.replace(/{{UPPY_JS_URL}}/g,u)}\n<\/script>\n`;return n.createElement(n.Fragment,null,n.createElement(l.Z,{type:"caution"},n.createElement("p",null,"The bundle consists of most Uppy plugins, so this method is not recommended for production, as your users will have to download all plugins when you are likely using only a few."),n.createElement("p",null,"It can be useful to speed up your development environment, so don't hesitate to use it to get you started.")),n.createElement(i.Z,{language:"html"},d))}},2068:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>m});var n=a(7462),i=(a(7294),a(3905)),l=a(5488),r=a(5162),o=a(3068);const s={sidebar_position:4},p="AWS S3 Multipart",u={unversionedId:"uploader/aws-s3-multipart",id:"uploader/aws-s3-multipart",title:"AWS S3 Multipart",description:"The @uppy/aws-s3-multipart plugin can be used to upload files directly to an S3 bucket (or S3-compatible provider)",source:"@site/docs/uploader/aws-s3-multipart.mdx",sourceDirName:"uploader",slug:"/uploader/aws-s3-multipart",permalink:"/uppy.io/pr-preview/pr-52/docs/uploader/aws-s3-multipart",draft:!1,editUrl:"https://github.com/transloadit/uppy.io/tree/main/docs/uploader/aws-s3-multipart.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"AWS S3",permalink:"/uppy.io/pr-preview/pr-52/docs/uploader/aws-s3"},next:{title:"XHR",permalink:"/uppy.io/pr-preview/pr-52/docs/uploader/xhr"}},d={},m=[{value:"When should I use it?",id:"when-should-i-use-it",level:2},{value:"Install",id:"install",level:2},{value:"Use",id:"use",level:2},{value:"Setting up your S3 bucket",id:"setting-up-your-s3-bucket",level:3},{value:"Use with your own server",id:"use-with-your-own-server",level:3},{value:"Use with Companion",id:"use-with-companion",level:3},{value:"API",id:"api",level:2},{value:"Options",id:"options",level:3},{value:"<code>limit</code>",id:"limit",level:4},{value:"<code>companionUrl</code>",id:"companionurl",level:4},{value:"<code>companionHeaders</code>",id:"companionheaders",level:4},{value:"<code>companionCookiesRule</code>",id:"companioncookiesrule",level:4},{value:"<code>retryDelays</code>",id:"retrydelays",level:4},{value:"<code>getChunkSize(file)</code>",id:"getchunksizefile",level:4},{value:"<code>createMultipartUpload(file)</code>",id:"createmultipartuploadfile",level:4},{value:"<code>listParts(file, { uploadId, key })</code>",id:"listpartsfile--uploadid-key-",level:4},{value:"<code>signPart(file, partData)</code>",id:"signpartfile-partdata",level:4},{value:"<code>abortMultipartUpload(file, { uploadId, key })</code>",id:"abortmultipartuploadfile--uploadid-key-",level:4},{value:"<code>completeMultipartUpload(file, { uploadId, key, parts })</code>",id:"completemultipartuploadfile--uploadid-key-parts-",level:4},{value:"<code>allowedMetaFields: null</code>",id:"allowedmetafields-null",level:4},{value:"<code>prepareUploadParts(file, partData)</code>",id:"prepareuploadpartsfile-partdata",level:4}],c={toc:m};function h(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"aws-s3-multipart"},"AWS S3 Multipart"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"@uppy/aws-s3-multipart")," plugin can be used to upload files directly to an S3 bucket (or S3-compatible provider)\nusing S3\u2019s Multipart uploader."),(0,i.kt)("h2",{id:"when-should-i-use-it"},"When should I use it?"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Not sure which uploader is best for you? Read \u201c",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/choosing-uploader"},"Choosing the uploader you need"),"\u201d.")),(0,i.kt)("p",null,"You can use this plugin when you prefer a ",(0,i.kt)("em",{parentName:"p"},"client-to-storage")," over a ",(0,i.kt)("em",{parentName:"p"},"client-to-server-to-storage")," (such as ",(0,i.kt)("a",{parentName:"p",href:"/docs/upload-strategies/transloadit"},"Transloadit")," or ",(0,i.kt)("a",{parentName:"p",href:"/docs/upload-strategies/tus"},"Tus"),") setup.\nThis may in some cases be preferable, for instance, to reduce costs or the complexity of running a server and load balancer with ",(0,i.kt)("a",{parentName:"p",href:"/docs/upload-strategies/tus"},"Tus"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"@uppy/aws-s3-multipart")," starts to become valuable for larger files (100","\xa0","MB+) as it uploads a single object as a set of parts.\nThis has certain benefits, such as improved throughput (uploading parts in parallel) and quick recovery from network issues (only the failed parts need to be retried).\nThe downside is request overhead, as it needs to do creation, signing, and completion requests besides the upload requests.\nFor example, if you are uploading files that are only a couple kilobytes with a 100ms roundtrip latency,\nyou are spending 400ms on overhead and only a few milliseconds on uploading."),(0,i.kt)("p",null,"If you are uploading large files (100","\xa0","MB+), we recommend ",(0,i.kt)("inlineCode",{parentName:"p"},"@uppy/aws-s3-multipart"),", otherwise ",(0,i.kt)("a",{parentName:"p",href:"/docs/upload-strategies/aws-s3"},(0,i.kt)("inlineCode",{parentName:"a"},"@uppy/aws-s3")),"."),(0,i.kt)("h2",{id:"install"},"Install"),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"npm",label:"NPM",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @uppy/aws-s3-multipart\n"))),(0,i.kt)(r.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @uppy/aws-s3-multipart\n"))),(0,i.kt)(r.Z,{value:"cdn",label:"CDN",mdxType:"TabItem"},(0,i.kt)(o.Z,{mdxType:"UppyCdnExample"},'\n        import { Uppy, AwsS3Multipart } from "{{UPPY_JS_URL}}"\n        new Uppy().use(AwsS3Multipart, { /* see options */ })\n      '))),(0,i.kt)("h2",{id:"use"},"Use"),(0,i.kt)("h3",{id:"setting-up-your-s3-bucket"},"Setting up your S3 bucket"),(0,i.kt)("p",null,"To use this plugin with S3 we need to setup a bucket with the right permissions and CORS settings."),(0,i.kt)("p",null,"S3 buckets do not allow public uploads for security reasons.\nTo allow Uppy and the browser to upload directly to a bucket, its CORS permissions need to be configured."),(0,i.kt)("p",null,"CORS permissions can be found in the ",(0,i.kt)("a",{parentName:"p",href:"https://console.aws.amazon.com/s3/home"},"S3 Management Console"),".\nClick the bucket that will receive the uploads, then go into the ",(0,i.kt)("inlineCode",{parentName:"p"},"Permissions")," tab and select the ",(0,i.kt)("inlineCode",{parentName:"p"},"CORS configuration")," button.\nA JSON document will be shown that defines the CORS configuration. (AWS used to use XML but now only allow JSON).\nMore information about the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.amazonaws.cn/en_us/AmazonS3/latest/userguide/ManageCorsUsing.html"},"S3 CORS format here"),"."),(0,i.kt)("p",null,"The configuration required for Uppy and Companion is this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "AllowedOrigins": ["https://my-app.com"],\n        "AllowedMethods": ["GET", "PUT"],\n        "MaxAgeSeconds": 3000,\n        "AllowedHeaders": [\n            "Authorization",\n            "x-amz-date",\n            "x-amz-content-sha256",\n            "content-type"\n        ],\n        "ExposeHeaders": ["ETag"]\n    },\n    {\n        "AllowedOrigins": ["*"],\n        "AllowedMethods": ["GET"],\n        "MaxAgeSeconds": 3000\n    }\n]\n')),(0,i.kt)("p",null,"A good practice is to use two CORS rules: one for viewing the uploaded files, and one for uploading files.\nThis is done above where the first object in the array defines the rules for uploading, and the second for viewing.\nThe example above ",(0,i.kt)("strong",{parentName:"p"},"makes files publically viewable"),". You can change it according to your needs."),(0,i.kt)("p",null,"If you are using an IAM policy to allow access to the S3 bucket, the policy must have at least the ",(0,i.kt)("inlineCode",{parentName:"p"},"s3:PutObject")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"s3:PutObjectAcl")," permissions scoped to the bucket in question.\nIn-depth documentation about CORS rules is available on the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonS3/latest/dev/cors.html"},"AWS documentation site"),"."),(0,i.kt)("h3",{id:"use-with-your-own-server"},"Use with your own server"),(0,i.kt)("p",null,"The recommended approach is to integrate ",(0,i.kt)("inlineCode",{parentName:"p"},"@uppy/aws-s3-multipart")," with your own server.\nYou will need to do the following things:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#setting-up-your-s3-bucket"},"Setup up a S4 bucket")),(0,i.kt)("li",{parentName:"ol"},"Create endpoints in your server. You can create them as edge functions (such as AWS Lambdas),\ninside Next.js as an API route, or wherever your server runs",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"POST")," > ",(0,i.kt)("inlineCode",{parentName:"li"},"/uppy/s3"),": create the multipart upload"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GET")," > ",(0,i.kt)("inlineCode",{parentName:"li"},"/uppy/s3/:id"),": get the uploaded parts"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GET")," > ",(0,i.kt)("inlineCode",{parentName:"li"},"/uppy/s3/:id/:partNumber"),": sign the part and return a pre-signed URL"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"POST")," > ",(0,i.kt)("inlineCode",{parentName:"li"},"/uppy/s3/:id/complete"),": complete the multipart upload"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DELETE")," > ",(0,i.kt)("inlineCode",{parentName:"li"},"/uppy/s3/:id"),": abort the multipart upload"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/transloadit/uppy/blob/main/examples/aws-nodejs/public/index.html"},"Setup Uppy"))),(0,i.kt)("h3",{id:"use-with-companion"},"Use with Companion"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/companion"},"Companion")," has S3 routes built-in for a plug-and-play experience with Uppy."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Generally it\u2019s better for access control, observability, and scaling to integrate ",(0,i.kt)("inlineCode",{parentName:"p"},"@uppy/aws-s3-multipart"),"\nwith your own server. You may want to use ",(0,i.kt)("a",{parentName:"p",href:"/docs/companion"},"Companion")," for creating, signing,\nand completing your S3 uploads if you already need Companion for remote files (such as from Google Drive).\nOtherwise it\u2019s not worth the hosting effort.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"{10} showLineNumbers","{10}":!0,showLineNumbers:!0},"import Uppy from '@uppy/core';\nimport Dashboard from '@uppy/dashboard';\nimport AwsS3Multipart from '@uppy/aws-s3-multipart';\n\nimport '@uppy/core/dist/style.min.css';\nimport '@uppy/dashboard/dist/style.min.css';\n\nconst uppy = new Uppy()\n    .use(Dashboard, { inline: true, target: 'body' })\n    .use(AwsS3Multipart, { companionUrl: 'http://companion.uppy.io' });\n")),(0,i.kt)("h2",{id:"api"},"API"),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("h4",{id:"limit"},(0,i.kt)("inlineCode",{parentName:"h4"},"limit")),(0,i.kt)("p",null,"The maximum amount of files to upload in parallel (",(0,i.kt)("inlineCode",{parentName:"p"},"number"),", default: ",(0,i.kt)("inlineCode",{parentName:"p"},"6"),")."),(0,i.kt)("p",null,"Note that the amount of files is not the same as the amount of concurrent connections.\nMultipart uploads can use many requests per file. For example, for a 100 MB file with a part size of 5 MB:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"1 creation request"),(0,i.kt)("li",{parentName:"ul"},"100/5 = 20 sign requests"),(0,i.kt)("li",{parentName:"ul"},"100/5 = 20 upload requests"),(0,i.kt)("li",{parentName:"ul"},"1 complete request")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Unless you have a good reason and are well informed about the average internet speed of your users,\ndo not set this higher. S3 uses HTTP/1.1, which means a limit to concurrent connections\nand your uploads may expire before they are uploaded.")),(0,i.kt)("h4",{id:"companionurl"},(0,i.kt)("inlineCode",{parentName:"h4"},"companionUrl")),(0,i.kt)("p",null,"URL to a ",(0,i.kt)("a",{parentName:"p",href:"/docs/companion"},"Companion")," instance (",(0,i.kt)("inlineCode",{parentName:"p"},"string"),", default: ",(0,i.kt)("inlineCode",{parentName:"p"},"null"),")."),(0,i.kt)("h4",{id:"companionheaders"},(0,i.kt)("inlineCode",{parentName:"h4"},"companionHeaders")),(0,i.kt)("p",null,"Custom headers that should be sent along to ",(0,i.kt)("a",{parentName:"p",href:"/docs/companion"},"Companion")," on every request (",(0,i.kt)("inlineCode",{parentName:"p"},"Object"),", default: ",(0,i.kt)("inlineCode",{parentName:"p"},"{}"),")."),(0,i.kt)("h4",{id:"companioncookiesrule"},(0,i.kt)("inlineCode",{parentName:"h4"},"companionCookiesRule")),(0,i.kt)("p",null,"This option correlates to the ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Request/credentials"},"RequestCredentials value")," (",(0,i.kt)("inlineCode",{parentName:"p"},"string"),", default: ",(0,i.kt)("inlineCode",{parentName:"p"},"'same-origin'"),")."),(0,i.kt)("p",null,"This tells the plugin whether to send cookies to ",(0,i.kt)("a",{parentName:"p",href:"/docs/companion"},"Companion"),"."),(0,i.kt)("h4",{id:"retrydelays"},(0,i.kt)("inlineCode",{parentName:"h4"},"retryDelays")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"retryDelays")," are the intervals in milliseconds used to retry a failed chunk (",(0,i.kt)("inlineCode",{parentName:"p"},"array"),", default: ",(0,i.kt)("inlineCode",{parentName:"p"},"[0, 1000, 3000, 5000]"),")."),(0,i.kt)("p",null,"This is also used for ",(0,i.kt)("a",{parentName:"p",href:"#signpartfile-partdata"},(0,i.kt)("inlineCode",{parentName:"a"},"signPart()")),".\nSet to ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," to disable automatic retries, and fail instantly if any chunk fails to upload."),(0,i.kt)("h4",{id:"getchunksizefile"},(0,i.kt)("inlineCode",{parentName:"h4"},"getChunkSize(file)")),(0,i.kt)("p",null,"A function that returns the minimum chunk size to use when uploading the given file."),(0,i.kt)("p",null,"The S3 Multipart plugin uploads files in chunks.\nChunks are sent in batches to have presigned URLs generated with ",(0,i.kt)("a",{parentName:"p",href:"#signpartfile-partdata"},(0,i.kt)("inlineCode",{parentName:"a"},"signPart()")),".\nTo reduce the amount of requests for large files, you can choose a larger chunk size, at the cost of having to re-upload more data if one chunk fails to upload."),(0,i.kt)("p",null,"S3 requires a minimum chunk size of 5MB, and supports at most 10,000 chunks per multipart upload.\nIf ",(0,i.kt)("inlineCode",{parentName:"p"},"getChunkSize()")," returns a size that\u2019s too small, Uppy will increase it to S3\u2019s minimum requirements."),(0,i.kt)("h4",{id:"createmultipartuploadfile"},(0,i.kt)("inlineCode",{parentName:"h4"},"createMultipartUpload(file)")),(0,i.kt)("p",null,"A function that calls the S3 Multipart API to create a new upload."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"file")," is the file object from Uppy\u2019s state. The most relevant keys are ",(0,i.kt)("inlineCode",{parentName:"p"},"file.name")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"file.type"),"."),(0,i.kt)("p",null,"Return a Promise for an object with keys:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"uploadId")," - The UploadID returned by S3."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"key")," - The object key for the file. This needs to be returned to allow it to be different from the ",(0,i.kt)("inlineCode",{parentName:"li"},"file.name"),".")),(0,i.kt)("p",null,"The default implementation calls out to Companion\u2019s S3 signing endpoints."),(0,i.kt)("h4",{id:"listpartsfile--uploadid-key-"},(0,i.kt)("inlineCode",{parentName:"h4"},"listParts(file, { uploadId, key })")),(0,i.kt)("p",null,"A function that calls the S3 Multipart API to list the parts of a file that have already been uploaded."),(0,i.kt)("p",null,"Receives the ",(0,i.kt)("inlineCode",{parentName:"p"},"file")," object from Uppy\u2019s state, and an object with keys:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"uploadId")," - The UploadID of this Multipart upload."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"key")," - The object key of this Multipart upload.")),(0,i.kt)("p",null,"Return a Promise for an array of S3 Part objects, as returned by the S3 Multipart API. Each object has keys:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"PartNumber")," - The index in the file of the uploaded part."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Size")," - The size of the part in bytes."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ETag")," - The ETag of the part, used to identify it when completing the multipart upload and combining all parts into a single file.")),(0,i.kt)("p",null,"The default implementation calls out to Companion\u2019s S3 signing endpoints."),(0,i.kt)("h4",{id:"signpartfile-partdata"},(0,i.kt)("inlineCode",{parentName:"h4"},"signPart(file, partData)")),(0,i.kt)("p",null,"A function that generates a signed URL for the specified part number. The ",(0,i.kt)("inlineCode",{parentName:"p"},"partData")," argument is an object with the keys:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"uploadId")," - The UploadID of this Multipart upload."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"key")," - The object key in the S3 bucket."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"partNumber")," - can\u2019t be zero."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"body")," \u2013 The data that will be signed."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"signal")," \u2013 An ",(0,i.kt)("inlineCode",{parentName:"li"},"AbortSignal")," that may be used to abort an ongoing request.")),(0,i.kt)("p",null,"This function should return a object, or a promise that resolves to an object, with the following keys:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"url")," \u2013 the presigned URL, as a ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"headers")," \u2013 ",(0,i.kt)("strong",{parentName:"li"},"(Optional)")," Custom headers to send along with the request to S3 endpoint.")),(0,i.kt)("p",null,"An example of what the return value should look like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "url": "https://bucket.region.amazonaws.com/path/to/file.jpg?partNumber=1&...",\n    "headers": { "Content-MD5": "foo" }\n}\n')),(0,i.kt)("h4",{id:"abortmultipartuploadfile--uploadid-key-"},(0,i.kt)("inlineCode",{parentName:"h4"},"abortMultipartUpload(file, { uploadId, key })")),(0,i.kt)("p",null,"A function that calls the S3 Multipart API to abort a Multipart upload, and removes all parts that have been uploaded so far."),(0,i.kt)("p",null,"Receives the ",(0,i.kt)("inlineCode",{parentName:"p"},"file")," object from Uppy\u2019s state, and an object with keys:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"uploadId")," - The UploadID of this Multipart upload."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"key")," - The object key of this Multipart upload.")),(0,i.kt)("p",null,"This is typically called when the user cancels an upload. Cancellation cannot fail in Uppy, so the result of this function is ignored."),(0,i.kt)("p",null,"The default implementation calls out to Companion\u2019s S3 signing endpoints."),(0,i.kt)("h4",{id:"completemultipartuploadfile--uploadid-key-parts-"},(0,i.kt)("inlineCode",{parentName:"h4"},"completeMultipartUpload(file, { uploadId, key, parts })")),(0,i.kt)("p",null,"A function that calls the S3 Multipart API to complete a Multipart upload, combining all parts into a single object in the S3 bucket."),(0,i.kt)("p",null,"Receives the ",(0,i.kt)("inlineCode",{parentName:"p"},"file")," object from Uppy\u2019s state, and an object with keys:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"uploadId")," - The UploadID of this Multipart upload."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"key")," - The object key of this Multipart upload."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"parts")," - S3-style list of parts, an array of objects with ",(0,i.kt)("inlineCode",{parentName:"li"},"ETag")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"PartNumber")," properties. This can be passed straight to S3\u2019s Multipart API.")),(0,i.kt)("p",null,"Return a Promise for an object with properties:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"location")," - ",(0,i.kt)("strong",{parentName:"li"},"(Optional)")," A publically accessible URL to the object in the S3 bucket.")),(0,i.kt)("p",null,"The default implementation calls out to Companion\u2019s S3 signing endpoints."),(0,i.kt)("h4",{id:"allowedmetafields-null"},(0,i.kt)("inlineCode",{parentName:"h4"},"allowedMetaFields: null")),(0,i.kt)("p",null,"Pass an array of field names to limit the metadata fields that will be added to upload as query parameters."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Set this to ",(0,i.kt)("inlineCode",{parentName:"li"},"['name']")," to only send the ",(0,i.kt)("inlineCode",{parentName:"li"},"name")," field."),(0,i.kt)("li",{parentName:"ul"},"Set this to ",(0,i.kt)("inlineCode",{parentName:"li"},"null")," (the default) to send ",(0,i.kt)("em",{parentName:"li"},"all")," metadata fields."),(0,i.kt)("li",{parentName:"ul"},"Set this to an empty array ",(0,i.kt)("inlineCode",{parentName:"li"},"[]")," to not send any fields.")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Deprecated options"),(0,i.kt)("h4",{id:"prepareuploadpartsfile-partdata"},(0,i.kt)("inlineCode",{parentName:"h4"},"prepareUploadParts(file, partData)")),(0,i.kt)("p",null,"A function that generates a batch of signed URLs for the specified part numbers."),(0,i.kt)("p",null,"Receives the ",(0,i.kt)("inlineCode",{parentName:"p"},"file")," object from Uppy\u2019s state. The ",(0,i.kt)("inlineCode",{parentName:"p"},"partData")," argument is an object with keys:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"uploadId")," - The UploadID of this Multipart upload."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"key")," - The object key in the S3 bucket."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"parts")," - An array of objects with the part number and chunk (",(0,i.kt)("inlineCode",{parentName:"li"},"Array<{ number: number, chunk: blob }>"),"). ",(0,i.kt)("inlineCode",{parentName:"li"},"number")," can\u2019t be zero.")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"prepareUploadParts")," should return a ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise")," with an ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")," with keys:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"presignedUrls")," - A JavaScript object with the part numbers as keys and the presigned URL for each part as the value."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"headers")," - ",(0,i.kt)("strong",{parentName:"li"},"(Optional)")," Custom headers to send along with every request per part (",(0,i.kt)("inlineCode",{parentName:"li"},"{ 1: { 'Content-MD5': 'hash' }}"),").\nThese are (1-based) indexed by part number too so you can for instance send the MD5 hash validation for each part to S3.")),(0,i.kt)("p",null,"An example of what the return value should look like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "presignedUrls": {\n        "1": "https://bucket.region.amazonaws.com/path/to/file.jpg?partNumber=1&...",\n        "2": "https://bucket.region.amazonaws.com/path/to/file.jpg?partNumber=2&...",\n        "3": "https://bucket.region.amazonaws.com/path/to/file.jpg?partNumber=3&..."\n    },\n    "headers": {\n        "1": { "Content-MD5": "foo" },\n        "2": { "Content-MD5": "bar" },\n        "3": { "Content-MD5": "baz" }\n    }\n}\n')),(0,i.kt)("p",null,"If an error occured, reject the ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise")," with an ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")," with the following keys:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{ "source": { "status": 500 } }\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"status")," is the HTTP code and is required for determining whether to retry the request. ",(0,i.kt)("inlineCode",{parentName:"p"},"prepareUploadParts")," will be retried if the code is ",(0,i.kt)("inlineCode",{parentName:"p"},"0"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"409"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"423"),", or between ",(0,i.kt)("inlineCode",{parentName:"p"},"500")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"600"),".")))}h.isMDXComponent=!0}}]);