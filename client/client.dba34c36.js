function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function s(t){t.forEach(n)}function o(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let a;function c(t,e){return a||(a=document.createElement("a")),a.href=e,t===a.href}function l(t,n,r,s){return t[1]&&s?e(r.ctx.slice(),t[1](s(n))):r.ctx}function u(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}function f(t){return null==t?"":t}let d,h,p=!1;function m(t,e,n,r){for(;t<e;){const s=t+(e-t>>1);n(s)<=r?t=s+1:e=s}return t}function g(t,e){if(p){for(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if("HEAD"===t.nodeName){const t=[];for(let n=0;n<e.length;n++){const r=e[n];void 0!==r.claim_order&&t.push(r)}e=t}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let s=0;for(let t=0;t<e.length;t++){const o=e[t].claim_order,i=(s>0&&e[n[s]].claim_order<=o?s+1:m(1,s,(t=>e[n[t]].claim_order),o))-1;r[t]=n[i]+1;const a=i+1;n[a]=t,s=Math.max(a,s)}const o=[],i=[];let a=e.length-1;for(let t=n[s]+1;0!=t;t=r[t-1]){for(o.push(e[t-1]);a>=t;a--)i.push(e[a]);a--}for(;a>=0;a--)i.push(e[a]);o.reverse(),i.sort(((t,e)=>t.claim_order-e.claim_order));for(let e=0,n=0;e<i.length;e++){for(;n<o.length&&i[e].claim_order>=o[n].claim_order;)n++;const r=n<o.length?o[n]:null;t.insertBefore(i[e],r)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);null!==t.actual_end_child&&void 0===t.actual_end_child.claim_order;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?void 0===e.claim_order&&e.parentNode===t||t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else e.parentNode===t&&null===e.nextSibling||t.appendChild(e)}function b(t,e,n){t.insertBefore(e,n||null)}function _(t,e,n){p&&!n?g(t,e):e.parentNode===t&&e.nextSibling==n||t.insertBefore(e,n||null)}function $(t){t.parentNode&&t.parentNode.removeChild(t)}function v(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function w(t){return document.createElement(t)}function y(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function E(t){return document.createTextNode(t)}function x(){return E(" ")}function T(){return E("")}function S(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function N(t){return function(e){return e.preventDefault(),t.call(this,e)}}function A(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function P(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const r in e)null==e[r]?t.removeAttribute(r):"style"===r?t.style.cssText=e[r]:"__value"===r?t.value=t[r]=e[r]:n[r]&&n[r].set?t[r]=e[r]:A(t,r,e[r])}function R(t){return Array.from(t.childNodes)}function I(t){void 0===t.claim_info&&(t.claim_info={last_index:0,total_claimed:0})}function L(t,e,n,r,s=!1){I(t);const o=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const o=t[r];if(e(o)){const e=n(o);return void 0===e?t.splice(r,1):t[r]=e,s||(t.claim_info.last_index=r),o}}for(let r=t.claim_info.last_index-1;r>=0;r--){const o=t[r];if(e(o)){const e=n(o);return void 0===e?t.splice(r,1):t[r]=e,s?void 0===e&&t.claim_info.last_index--:t.claim_info.last_index=r,o}}return r()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function H(t,e,n,r){return L(t,(t=>t.nodeName===e),(t=>{const e=[];for(let r=0;r<t.attributes.length;r++){const s=t.attributes[r];n[s.name]||e.push(s.name)}e.forEach((e=>t.removeAttribute(e)))}),(()=>r(e)))}function k(t,e,n){return H(t,e,n,w)}function O(t,e,n){return H(t,e,n,y)}function U(t,e){return L(t,(t=>3===t.nodeType),(t=>{const n=""+e;if(t.data.startsWith(n)){if(t.data.length!==n.length)return t.splitText(n.length)}else t.data=n}),(()=>E(e)),!0)}function C(t){return U(t," ")}function j(t,e,n){for(let r=n;r<t.length;r+=1){const n=t[r];if(8===n.nodeType&&n.textContent.trim()===e)return r}return t.length}function M(t,e){const n=j(t,"HTML_TAG_START",0),r=j(t,"HTML_TAG_END",n);if(n===r)return new J(void 0,e);I(t);const s=t.splice(n,r-n+1);$(s[0]),$(s[s.length-1]);const o=s.slice(1,s.length-1);for(const e of o)e.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new J(o,e)}function G(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function D(t,e){t.value=null==e?"":e}function B(t,e,n,r){null===n?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function q(){if(void 0===d){d=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(t){d=!0}}return d}function z(t,e){"static"===getComputedStyle(t).position&&(t.style.position="relative");const n=w("iframe");n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1;const r=q();let s;return r?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",s=S(window,"message",(t=>{t.source===n.contentWindow&&e()}))):(n.src="about:blank",n.onload=()=>{s=S(n.contentWindow,"resize",e)}),function(t,e){t.appendChild(e)}(t,n),()=>{(r||s&&n.contentWindow)&&s(),$(n)}}function W(t,e){const n=[];let r=0;for(const s of e.childNodes)if(8===s.nodeType){const e=s.textContent.trim();e===`HEAD_${t}_END`?(r-=1,n.push(s)):e===`HEAD_${t}_START`&&(r+=1,n.push(s))}else r>0&&n.push(s);return n}class K{constructor(t=!1){this.is_svg=!1,this.is_svg=t,this.e=this.n=null}c(t){this.h(t)}m(t,e,n=null){this.e||(this.is_svg?this.e=y(e.nodeName):this.e=w(e.nodeName),this.t=e,this.c(t)),this.i(n)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let e=0;e<this.n.length;e+=1)b(this.t,this.n[e],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach($)}}class J extends K{constructor(t,e=!1){super(e),this.e=this.n=null,this.l=t}c(t){this.l?this.n=this.l:super.c(t)}i(t){for(let e=0;e<this.n.length;e+=1)_(this.t,this.n[e],t)}}function V(t,e){return new t(e)}function F(t){h=t}function Y(){if(!h)throw new Error("Function called outside component initialization");return h}function X(t){Y().$$.on_mount.push(t)}function Q(t){Y().$$.after_update.push(t)}function Z(t){Y().$$.on_destroy.push(t)}const tt=[],et=[],nt=[],rt=[],st=Promise.resolve();let ot=!1;function it(t){nt.push(t)}const at=new Set;let ct=0;function lt(){if(0!==ct)return;const t=h;do{try{for(;ct<tt.length;){const t=tt[ct];ct++,F(t),ut(t.$$)}}catch(t){throw tt.length=0,ct=0,t}for(F(null),tt.length=0,ct=0;et.length;)et.pop()();for(let t=0;t<nt.length;t+=1){const e=nt[t];at.has(e)||(at.add(e),e())}nt.length=0}while(tt.length);for(;rt.length;)rt.pop()();ot=!1,at.clear(),F(t)}function ut(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(it)}}const ft=new Set;let dt;function ht(){dt={r:0,c:[],p:dt}}function pt(){dt.r||s(dt.c),dt=dt.p}function mt(t,e){t&&t.i&&(ft.delete(t),t.i(e))}function gt(t,e,n,r){if(t&&t.o){if(ft.has(t))return;ft.add(t),dt.c.push((()=>{ft.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}else r&&r()}function bt(t,e){const n={},r={},s={$$scope:1};let o=t.length;for(;o--;){const i=t[o],a=e[o];if(a){for(const t in i)t in a||(r[t]=1);for(const t in a)s[t]||(n[t]=a[t],s[t]=1);t[o]=a}else for(const t in i)s[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function _t(t){return"object"==typeof t&&null!==t?t:{}}function $t(t){t&&t.c()}function vt(t,e){t&&t.l(e)}function wt(t,e,r,i){const{fragment:a,after_update:c}=t.$$;a&&a.m(e,r),i||it((()=>{const e=t.$$.on_mount.map(n).filter(o);t.$$.on_destroy?t.$$.on_destroy.push(...e):s(e),t.$$.on_mount=[]})),c.forEach(it)}function yt(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Et(t,e){-1===t.$$.dirty[0]&&(tt.push(t),ot||(ot=!0,st.then(lt)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function xt(e,n,o,i,a,c,l,u=[-1]){const f=h;F(e);const d=e.$$={fragment:null,ctx:[],props:c,update:t,not_equal:a,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(f?f.$$.context:[])),callbacks:r(),dirty:u,skip_bound:!1,root:n.target||f.$$.root};l&&l(d.root);let m=!1;if(d.ctx=o?o(e,n.props||{},((t,n,...r)=>{const s=r.length?r[0]:n;return d.ctx&&a(d.ctx[t],d.ctx[t]=s)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](s),m&&Et(e,t)),n})):[],d.update(),m=!0,s(d.before_update),d.fragment=!!i&&i(d.ctx),n.target){if(n.hydrate){p=!0;const t=R(n.target);d.fragment&&d.fragment.l(t),t.forEach($)}else d.fragment&&d.fragment.c();n.intro&&mt(e.$$.fragment),wt(e,n.target,n.anchor,n.customElement),p=!1,lt()}F(f)}class Tt{$destroy(){yt(this,1),this.$destroy=t}$on(e,n){if(!o(n))return t;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const t=r.indexOf(n);-1!==t&&r.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const St=[];function Nt(e,n=t){let r;const s=new Set;function o(t){if(i(e,t)&&(e=t,r)){const t=!St.length;for(const t of s)t[1](),St.push(t,e);if(t){for(let t=0;t<St.length;t+=2)St[t][0](St[t+1]);St.length=0}}}return{set:o,update:function(t){o(t(e))},subscribe:function(i,a=t){const c=[i,a];return s.add(c),1===s.size&&(r=n(o)||t),i(e),()=>{s.delete(c),0===s.size&&(r(),r=null)}}}}const At={};var Pt={owner:"XYUSTAR",repo:"Upptime",sites:[{name:"Replit",url:"https://www.baidu.com"},{name:"Google",url:"https://www.google.com"},{name:"Wikipedia",url:"https://en.wikipedia.org"},{name:"Hacker News",url:"https://news.ycombinator.com"},{name:"Test Broken Site",url:"https://thissitedoesnotexist.koj.co"}],"status-website":{cname:"demo.upptime.js.org",baseUrl:"Upptime",logoUrl:"https://raw.githubusercontent.com/upptime/upptime.js.org/master/static/img/icon.svg",name:"Upptime",introTitle:"**Upptime** is the open-source uptime monitor and status page, powered entirely by GitHub.",introMessage:"This is a sample status page which uses **real-time** data from our [GitHub repository](https://github.com/upptime/upptime). No server required — just GitHub Actions, Issues, and Pages. [**Get your own for free**](https://github.com/upptime/upptime)",navbar:[{title:"Status",href:"/"},{title:"GitHub",href:"https://github.com/$OWNER/$REPO"}]},i18n:{activeIncidents:"活动事件",allSystemsOperational:"所有系统都可以正常运行",incidentReport:"事件 #$NUMBER 报告 →",activeIncidentSummary:"在 $DATE 打开，有 $POSTS 个帖子",incidentTitle:"事件 $NUMBER 的详细信息",incidentDetails:"事件详细信息",incidentFixed:"已修复",incidentOngoing:"正在进行",incidentOpenedAt:"开始于",incidentClosedAt:"结束于",incidentViewOnGitHub:"在 GitHub 上查看",incidentCommentSummary:"由 $AUTHOR 在 $DATE 发布",incidentBack:"← 返回所有事件",pastIncidents:"过去的事件",pastIncidentsResolved:"$POSTS 个问题在 $MINUTES 分钟内得到解决",liveStatus:"实时状态",overallUptime:"总体正常运行时间： $UPTIME",overallUptimeTitle:"总体正常运行时间",averageResponseTime:"平均响应时间: $TIMEms",averageResponseTimeTitle:"平均响应时间",sevelDayResponseTime:"7 天响应时间",responseTimeMs:"响应时间（毫秒）",up:"🟩 正常运行",down:"🟥 停机",degraded:"🟨 运行缓慢",ms:"毫秒",loading:"加载中",navGitHub:"GitHub",footer:"gd1214b保留所有权利。 Copyright © 2021 gd1214b. All Rights Reserved.",rateLimitExceededTitle:"超出速率限制",rateLimitExceededIntro:"您已超过一小时内可以执行的请求数，因此您必须等待才能再次访问此网站。或者，您可以添加 GitHub 个人访问令牌以继续使用本网站。",rateLimitExceededWhatDoesErrorMean:"这个错误是什么意思？本网站使用 GitHub API 访问有关我们网站状态的实时数据。默认情况下，GitHub 允许每个 IP 地址每小时 60 个请求，您已经消耗了这些请求。",rateLimitExceededErrorMeaning:"This website uses the GitHub API to access real-time data about our websites' status. By default, GitHub allows each IP address 60 requests per hour, which you have consumed.",rateLimitExceededErrorHowCanFix:"我该如何解决？",rateLimitExceededErrorFix:"您可以再等一个小时，您的 IP 地址限制将恢复。或者，您可以添加您的 GitHub 个人访问令牌，这将为您提供每小时额外 5,000 个请求。",rateLimitExceededGeneratePAT:"了解如何生成个人访问令牌",rateLimitExceededHasSet:"您有一个个人访问令牌集。",rateLimitExceededRemoveToken:"删除令牌",rateLimitExceededGitHubPAT:"GitHub 个人访问令牌",rateLimitExceededCopyPastePAT:"复制并粘贴您的令牌",rateLimitExceededSaveToken:"保存令牌",errorTitle:"发生错误",errorIntro:"尝试获取最新状态详细信息时出错。",errorText:"您可以稍后再试。",errorHome:"转到主页",pastScheduledMaintenance:"过去的预定维护",scheduledMaintenance:"定期维护",scheduledMaintenanceSummaryStarted:"从 $DATE 开始，持续 $DURATION 分钟",scheduledMaintenanceSummaryStarts:"从 $DATE 开始，持续 $DURATION 分钟",startedAt:"开始在",startsAt:"开始于",duration:"持续时间",durationMin:"$DURATION 分钟",incidentCompleted:"已完成",incidentScheduled:"已预定",incidentSubscribe:"订阅更新",url:"链接",status:"状态",history:"历史",responseTime:"响应时间",uptime:"正常运行时间",responseTimeGraphAlt:"响应时间图像",responseTimeDay:"24 小时响应时间",responseTimeWeek:"7 天正常运行时间",responseTimeMonth:"30天的正常运行时间",responseTimeYear:"1年的正常运行时间",uptimeDay:"24 小时正常运行时间",uptimeWeek:"7 天正常运行时间",uptimeMonth:"30天的正常运行时间",uptimeYear:"1年的正常运行时间",liveStatusHtmlComment:"<！ -实时状态- >",degradedPerformance:"🟨 性能降低",completeOutage:"🟥 全部停机",partialOutage:"🟧 部分停机"},path:"https://demo.upptime.js.org"};function Rt(t,e,n){const r=t.slice();return r[1]=e[n],r}function It(e){let n,r,s,o=Pt["status-website"]&&!Pt["status-website"].hideNavLogo&&function(e){let n,r;return{c(){n=w("img"),this.h()},l(t){n=k(t,"IMG",{alt:!0,src:!0,class:!0}),this.h()},h(){A(n,"alt",""),c(n.src,r=Pt["status-website"].logoUrl)||A(n,"src",r),A(n,"class","svelte-a08hsz")},m(t,e){_(t,n,e)},p:t,d(t){t&&$(n)}}}(),i=Pt["status-website"]&&!Pt["status-website"].hideNavTitle&&function(e){let n,r,s=Pt["status-website"].name+"";return{c(){n=w("div"),r=E(s)},l(t){n=k(t,"DIV",{});var e=R(n);r=U(e,s),e.forEach($)},m(t,e){_(t,n,e),g(n,r)},p:t,d(t){t&&$(n)}}}();return{c(){n=w("div"),r=w("a"),o&&o.c(),s=x(),i&&i.c(),this.h()},l(t){n=k(t,"DIV",{});var e=R(n);r=k(e,"A",{href:!0,class:!0});var a=R(r);o&&o.l(a),s=C(a),i&&i.l(a),a.forEach($),e.forEach($),this.h()},h(){A(r,"href",Pt["status-website"].logoHref||Pt.path),A(r,"class","logo svelte-a08hsz")},m(t,e){_(t,n,e),g(n,r),o&&o.m(r,null),g(r,s),i&&i.m(r,null)},p(t,e){Pt["status-website"]&&!Pt["status-website"].hideNavLogo&&o.p(t,e),Pt["status-website"]&&!Pt["status-website"].hideNavTitle&&i.p(t,e)},d(t){t&&$(n),o&&o.d(),i&&i.d()}}}function Lt(t){let e,n,r,s,o,i=t[1].title+"";return{c(){e=w("li"),n=w("a"),r=E(i),o=x(),this.h()},l(t){e=k(t,"LI",{});var s=R(e);n=k(s,"A",{"aria-current":!0,href:!0,target:!0,class:!0});var a=R(n);r=U(a,i),a.forEach($),o=C(s),s.forEach($),this.h()},h(){A(n,"aria-current",s=t[0]===("/"===t[1].href?void 0:t[1].href)?"page":void 0),A(n,"href",t[1].href.replace("$OWNER",Pt.owner).replace("$REPO",Pt.repo)),A(n,"target",t[1].target||"_self"),A(n,"class","svelte-a08hsz")},m(t,s){_(t,e,s),g(e,n),g(n,r),g(e,o)},p(t,e){1&e&&s!==(s=t[0]===("/"===t[1].href?void 0:t[1].href)?"page":void 0)&&A(n,"aria-current",s)},d(t){t&&$(e)}}}function Ht(e){let n,r,s,o,i,a=Pt["status-website"]&&Pt["status-website"].logoUrl&&It(),c=Pt["status-website"]&&Pt["status-website"].navbar&&function(t){let e,n=Pt["status-website"].navbar,r=[];for(let e=0;e<n.length;e+=1)r[e]=Lt(Rt(t,n,e));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=T()},l(t){for(let e=0;e<r.length;e+=1)r[e].l(t);e=T()},m(t,n){for(let e=0;e<r.length;e+=1)r[e].m(t,n);_(t,e,n)},p(t,s){if(1&s){let o;for(n=Pt["status-website"].navbar,o=0;o<n.length;o+=1){const i=Rt(t,n,o);r[o]?r[o].p(i,s):(r[o]=Lt(i),r[o].c(),r[o].m(e.parentNode,e))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(t){v(r,t),t&&$(e)}}}(e),l=Pt["status-website"]&&Pt["status-website"].navbarGitHub&&!Pt["status-website"].navbar&&function(e){let n,r,s,o=Pt.i18n.navGitHub+"";return{c(){n=w("li"),r=w("a"),s=E(o),this.h()},l(t){n=k(t,"LI",{});var e=R(n);r=k(e,"A",{href:!0,class:!0});var i=R(r);s=U(i,o),i.forEach($),e.forEach($),this.h()},h(){A(r,"href",`https://github.com/${Pt.owner}/${Pt.repo}`),A(r,"class","svelte-a08hsz")},m(t,e){_(t,n,e),g(n,r),g(r,s)},p:t,d(t){t&&$(n)}}}();return{c(){n=w("nav"),r=w("div"),a&&a.c(),s=x(),o=w("ul"),c&&c.c(),i=x(),l&&l.c(),this.h()},l(t){n=k(t,"NAV",{class:!0});var e=R(n);r=k(e,"DIV",{class:!0});var u=R(r);a&&a.l(u),s=C(u),o=k(u,"UL",{class:!0});var f=R(o);c&&c.l(f),i=C(f),l&&l.l(f),f.forEach($),u.forEach($),e.forEach($),this.h()},h(){A(o,"class","svelte-a08hsz"),A(r,"class","container svelte-a08hsz"),A(n,"class","svelte-a08hsz")},m(t,e){_(t,n,e),g(n,r),a&&a.m(r,null),g(r,s),g(r,o),c&&c.m(o,null),g(o,i),l&&l.m(o,null)},p(t,[e]){Pt["status-website"]&&Pt["status-website"].logoUrl&&a.p(t,e),Pt["status-website"]&&Pt["status-website"].navbar&&c.p(t,e),Pt["status-website"]&&Pt["status-website"].navbarGitHub&&!Pt["status-website"].navbar&&l.p(t,e)},i:t,o:t,d(t){t&&$(n),a&&a.d(),c&&c.d(),l&&l.d()}}}function kt(t,e,n){let{segment:r}=e;return t.$$set=t=>{"segment"in t&&n(0,r=t.segment)},[r]}class Ot extends Tt{constructor(t){super(),xt(this,t,kt,Ht,i,{segment:0})}}var Ut={"":["<em>","</em>"],_:["<strong>","</strong>"],"*":["<strong>","</strong>"],"~":["<s>","</s>"],"\n":["<br />"]," ":["<br />"],"-":["<hr />"]};function Ct(t){return t.replace(RegExp("^"+(t.match(/^(\t| )+/)||"")[0],"gm"),"")}function jt(t){return(t+"").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Mt(t,e){var n,r,s,o,i,a=/((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^``` *(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:!\[([^\]]*?)\]\(([^)]+?)\))|(\[)|(\](?:\(([^)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,6})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]|~~)/gm,c=[],l="",u=e||{},f=0;function d(t){var e=Ut[t[1]||""],n=c[c.length-1]==t;return e?e[1]?(n?c.pop():c.push(t),e[0|n]):e[0]:t}function h(){for(var t="";c.length;)t+=d(c[c.length-1]);return t}for(t=t.replace(/^\[(.+?)\]:\s*(.+)$/gm,(function(t,e,n){return u[e.toLowerCase()]=n,""})).replace(/^\n+|\n+$/g,"");s=a.exec(t);)r=t.substring(f,s.index),f=a.lastIndex,n=s[0],r.match(/[^\\](\\\\)*\\$/)||((i=s[3]||s[4])?n='<pre class="code '+(s[4]?"poetry":s[2].toLowerCase())+'"><code'+(s[2]?' class="language-'+s[2].toLowerCase()+'"':"")+">"+Ct(jt(i).replace(/^\n+|\n+$/g,""))+"</code></pre>":(i=s[6])?(i.match(/\./)&&(s[5]=s[5].replace(/^\d+/gm,"")),o=Mt(Ct(s[5].replace(/^\s*[>*+.-]/gm,""))),">"==i?i="blockquote":(i=i.match(/\./)?"ol":"ul",o=o.replace(/^(.*)(\n|$)/gm,"<li>$1</li>")),n="<"+i+">"+o+"</"+i+">"):s[8]?n='<img src="'+jt(s[8])+'" alt="'+jt(s[7])+'">':s[10]?(l=l.replace("<a>",'<a href="'+jt(s[11]||u[r.toLowerCase()])+'">'),n=h()+"</a>"):s[9]?n="<a>":s[12]||s[14]?n="<"+(i="h"+(s[14]?s[14].length:s[13]>"="?1:2))+">"+Mt(s[12]||s[15],u)+"</"+i+">":s[16]?n="<code>"+jt(s[16])+"</code>":(s[17]||s[1])&&(n=d(s[17]||"--"))),l+=r,l+=n;return(l+t.substring(f)+h()).replace(/^\n+|\n+$/g,"")}function Gt(t,e,n){const r=t.slice();return r[3]=e[n],r}function Dt(t,e,n){const r=t.slice();return r[3]=e[n],r}function Bt(t,e,n){const r=t.slice();return r[8]=e[n],r}function qt(e){let n;return{c(){n=w("link"),this.h()},l(t){n=k(t,"LINK",{rel:!0,href:!0}),this.h()},h(){A(n,"rel","stylesheet"),A(n,"href",`${Pt.path}/themes/${(Pt["status-website"]||{}).theme||"light"}.css`)},m(t,e){_(t,n,e)},p:t,d(t){t&&$(n)}}}function zt(e){let n;return{c(){n=w("link"),this.h()},l(t){n=k(t,"LINK",{rel:!0,href:!0}),this.h()},h(){A(n,"rel","stylesheet"),A(n,"href",(Pt["status-website"]||{}).themeUrl)},m(t,e){_(t,n,e)},p:t,d(t){t&&$(n)}}}function Wt(e){let n,r;return{c(){n=w("script"),this.h()},l(t){n=k(t,"SCRIPT",{src:!0}),R(n).forEach($),this.h()},h(){c(n.src,r=e[8].src)||A(n,"src",r),n.async=!!e[8].async,n.defer=!!e[8].async},m(t,e){_(t,n,e)},p:t,d(t){t&&$(n)}}}function Kt(e){let n;return{c(){n=w("link"),this.h()},l(t){n=k(t,"LINK",{rel:!0,href:!0,media:!0}),this.h()},h(){A(n,"rel",e[3].rel),A(n,"href",e[3].href),A(n,"media",e[3].media)},m(t,e){_(t,n,e)},p:t,d(t){t&&$(n)}}}function Jt(e){let n;return{c(){n=w("meta"),this.h()},l(t){n=k(t,"META",{name:!0,content:!0}),this.h()},h(){A(n,"name",e[3].name),A(n,"content",e[3].content)},m(t,e){_(t,n,e)},p:t,d(t){t&&$(n)}}}function Vt(e){let n,r,s,o,i,a,c,u,f,d,h,p,m,b,y,E,S,N,P=Mt(Pt.i18n.footer.replace(/\$REPO/,`https://github.com/${Pt.owner}/${Pt.repo}`))+"",I=(Pt["status-website"]||{}).customHeadHtml&&function(e){let n,r,s=(Pt["status-website"]||{}).customHeadHtml+"";return{c(){n=new J(!1),r=T(),this.h()},l(t){n=M(t,!1),r=T(),this.h()},h(){n.a=r},m(t,e){n.m(s,t,e),_(t,r,e)},p:t,d(t){t&&$(r),t&&n.d()}}}();let L=((Pt["status-website"]||{}).themeUrl?zt:qt)(e),H=(Pt["status-website"]||{}).scripts&&function(t){let e,n=(Pt["status-website"]||{}).scripts,r=[];for(let e=0;e<n.length;e+=1)r[e]=Wt(Bt(t,n,e));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=T()},l(t){for(let e=0;e<r.length;e+=1)r[e].l(t);e=T()},m(t,n){for(let e=0;e<r.length;e+=1)r[e].m(t,n);_(t,e,n)},p(t,s){if(0&s){let o;for(n=(Pt["status-website"]||{}).scripts,o=0;o<n.length;o+=1){const i=Bt(t,n,o);r[o]?r[o].p(i,s):(r[o]=Wt(i),r[o].c(),r[o].m(e.parentNode,e))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(t){v(r,t),t&&$(e)}}}(e),O=(Pt["status-website"]||{}).links&&function(t){let e,n=(Pt["status-website"]||{}).links,r=[];for(let e=0;e<n.length;e+=1)r[e]=Kt(Dt(t,n,e));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=T()},l(t){for(let e=0;e<r.length;e+=1)r[e].l(t);e=T()},m(t,n){for(let e=0;e<r.length;e+=1)r[e].m(t,n);_(t,e,n)},p(t,s){if(0&s){let o;for(n=(Pt["status-website"]||{}).links,o=0;o<n.length;o+=1){const i=Dt(t,n,o);r[o]?r[o].p(i,s):(r[o]=Kt(i),r[o].c(),r[o].m(e.parentNode,e))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(t){v(r,t),t&&$(e)}}}(e),U=(Pt["status-website"]||{}).metaTags&&function(t){let e,n=(Pt["status-website"]||{}).metaTags,r=[];for(let e=0;e<n.length;e+=1)r[e]=Jt(Gt(t,n,e));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=T()},l(t){for(let e=0;e<r.length;e+=1)r[e].l(t);e=T()},m(t,n){for(let e=0;e<r.length;e+=1)r[e].m(t,n);_(t,e,n)},p(t,s){if(0&s){let o;for(n=(Pt["status-website"]||{}).metaTags,o=0;o<n.length;o+=1){const i=Gt(t,n,o);r[o]?r[o].p(i,s):(r[o]=Jt(i),r[o].c(),r[o].m(e.parentNode,e))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(t){v(r,t),t&&$(e)}}}(e),j=Pt["status-website"].css&&function(e){let n,r,s=`<style>${Pt["status-website"].css}</style>`;return{c(){n=new J(!1),r=T(),this.h()},l(t){n=M(t,!1),r=T(),this.h()},h(){n.a=r},m(t,e){n.m(s,t,e),_(t,r,e)},p:t,d(t){t&&$(r),t&&n.d()}}}(),G=Pt["status-website"].js&&function(e){let n,r,s=`<script>${Pt["status-website"].js}<\/script>`;return{c(){n=new J(!1),r=T(),this.h()},l(t){n=M(t,!1),r=T(),this.h()},h(){n.a=r},m(t,e){n.m(s,t,e),_(t,r,e)},p:t,d(t){t&&$(r),t&&n.d()}}}(),D=(Pt["status-website"]||{}).customBodyHtml&&function(e){let n,r,s=(Pt["status-website"]||{}).customBodyHtml+"";return{c(){n=new J(!1),r=T(),this.h()},l(t){n=M(t,!1),r=T(),this.h()},h(){n.a=r},m(t,e){n.m(s,t,e),_(t,r,e)},p:t,d(t){t&&$(r),t&&n.d()}}}();p=new Ot({props:{segment:e[0]}});const B=e[2].default,q=function(t,e,n,r){if(t){const s=l(t,e,n,r);return t[0](s)}}(B,e,e[1],null);return{c(){I&&I.c(),n=T(),L.c(),r=w("link"),s=w("link"),o=w("link"),H&&H.c(),i=T(),O&&O.c(),a=T(),U&&U.c(),c=T(),j&&j.c(),u=T(),G&&G.c(),f=T(),d=x(),D&&D.c(),h=x(),$t(p.$$.fragment),m=x(),b=w("main"),q&&q.c(),y=x(),E=w("footer"),S=w("p"),this.h()},l(t){const e=W("svelte-fmspuk",document.head);I&&I.l(e),n=T(),L.l(e),r=k(e,"LINK",{rel:!0,href:!0}),s=k(e,"LINK",{rel:!0,type:!0,href:!0}),o=k(e,"LINK",{rel:!0,type:!0,href:!0}),H&&H.l(e),i=T(),O&&O.l(e),a=T(),U&&U.l(e),c=T(),j&&j.l(e),u=T(),G&&G.l(e),f=T(),e.forEach($),d=C(t),D&&D.l(t),h=C(t),vt(p.$$.fragment,t),m=C(t),b=k(t,"MAIN",{class:!0});var l=R(b);q&&q.l(l),l.forEach($),y=C(t),E=k(t,"FOOTER",{class:!0});var g=R(E);S=k(g,"P",{}),R(S).forEach($),g.forEach($),this.h()},h(){A(r,"rel","stylesheet"),A(r,"href",`${Pt.path}/global.css`),A(s,"rel","icon"),A(s,"type","image/svg"),A(s,"href",(Pt["status-website"]||{}).faviconSvg||(Pt["status-website"]||{}).favicon||"https://raw.githubusercontent.com/upptime/upptime/master/assets/upptime-icon.svg"),A(o,"rel","icon"),A(o,"type","image/png"),A(o,"href",(Pt["status-website"]||{}).favicon||"/logo-192.png"),A(b,"class","container"),A(E,"class","svelte-jbr799")},m(t,e){I&&I.m(document.head,null),g(document.head,n),L.m(document.head,null),g(document.head,r),g(document.head,s),g(document.head,o),H&&H.m(document.head,null),g(document.head,i),O&&O.m(document.head,null),g(document.head,a),U&&U.m(document.head,null),g(document.head,c),j&&j.m(document.head,null),g(document.head,u),G&&G.m(document.head,null),g(document.head,f),_(t,d,e),D&&D.m(t,e),_(t,h,e),wt(p,t,e),_(t,m,e),_(t,b,e),q&&q.m(b,null),_(t,y,e),_(t,E,e),g(E,S),S.innerHTML=P,N=!0},p(t,[e]){(Pt["status-website"]||{}).customHeadHtml&&I.p(t,e),L.p(t,e),(Pt["status-website"]||{}).scripts&&H.p(t,e),(Pt["status-website"]||{}).links&&O.p(t,e),(Pt["status-website"]||{}).metaTags&&U.p(t,e),Pt["status-website"].css&&j.p(t,e),Pt["status-website"].js&&G.p(t,e),(Pt["status-website"]||{}).customBodyHtml&&D.p(t,e);const n={};1&e&&(n.segment=t[0]),p.$set(n),q&&q.p&&(!N||2&e)&&function(t,e,n,r,s,o){if(s){const i=l(e,n,r,o);t.p(i,s)}}(q,B,t,t[1],N?function(t,e,n,r){if(t[2]&&r){const s=t[2](r(n));if(void 0===e.dirty)return s;if("object"==typeof s){const t=[],n=Math.max(e.dirty.length,s.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|s[r];return t}return e.dirty|s}return e.dirty}(B,t[1],e,null):function(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}(t[1]),null)},i(t){N||(mt(p.$$.fragment,t),mt(q,t),N=!0)},o(t){gt(p.$$.fragment,t),gt(q,t),N=!1},d(t){I&&I.d(t),$(n),L.d(t),$(r),$(s),$(o),H&&H.d(t),$(i),O&&O.d(t),$(a),U&&U.d(t),$(c),j&&j.d(t),$(u),G&&G.d(t),$(f),t&&$(d),D&&D.d(t),t&&$(h),yt(p,t),t&&$(m),t&&$(b),q&&q.d(t),t&&$(y),t&&$(E)}}}function Ft(t,e,n){let{$$slots:r={},$$scope:s}=e,{segment:o}=e;return t.$$set=t=>{"segment"in t&&n(0,o=t.segment),"$$scope"in t&&n(1,s=t.$$scope)},[o,s,r]}class Yt extends Tt{constructor(t){super(),xt(this,t,Ft,Vt,i,{segment:0})}}function Xt(t){let e,n,r=t[1].stack+"";return{c(){e=w("pre"),n=E(r)},l(t){e=k(t,"PRE",{});var s=R(e);n=U(s,r),s.forEach($)},m(t,r){_(t,e,r),g(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&G(n,r)},d(t){t&&$(e)}}}function Qt(e){let n,r,s,o,i,a,c,l,u,f=e[1].message+"";document.title=n=e[0];let d=e[2]&&e[1].stack&&Xt(e);return{c(){r=x(),s=w("h1"),o=E(e[0]),i=x(),a=w("p"),c=E(f),l=x(),d&&d.c(),u=T(),this.h()},l(t){W("svelte-1moakz",document.head).forEach($),r=C(t),s=k(t,"H1",{class:!0});var n=R(s);o=U(n,e[0]),n.forEach($),i=C(t),a=k(t,"P",{class:!0});var h=R(a);c=U(h,f),h.forEach($),l=C(t),d&&d.l(t),u=T(),this.h()},h(){A(s,"class","svelte-17w3omn"),A(a,"class","svelte-17w3omn")},m(t,e){_(t,r,e),_(t,s,e),g(s,o),_(t,i,e),_(t,a,e),g(a,c),_(t,l,e),d&&d.m(t,e),_(t,u,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&G(o,t[0]),2&e&&f!==(f=t[1].message+"")&&G(c,f),t[2]&&t[1].stack?d?d.p(t,e):(d=Xt(t),d.c(),d.m(u.parentNode,u)):d&&(d.d(1),d=null)},i:t,o:t,d(t){t&&$(r),t&&$(s),t&&$(i),t&&$(a),t&&$(l),d&&d.d(t),t&&$(u)}}}function Zt(t,e,n){let{status:r}=e,{error:s}=e;return t.$$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,s=t.error)},[r,s,false]}class te extends Tt{constructor(t){super(),xt(this,t,Zt,Qt,i,{status:0,error:1})}}function ee(t){let n,r,s;const o=[t[4].props];var i=t[4].component;function a(t){let n={};for(let t=0;t<o.length;t+=1)n=e(n,o[t]);return{props:n}}return i&&(n=V(i,a())),{c(){n&&$t(n.$$.fragment),r=T()},l(t){n&&vt(n.$$.fragment,t),r=T()},m(t,e){n&&wt(n,t,e),_(t,r,e),s=!0},p(t,e){const s=16&e?bt(o,[_t(t[4].props)]):{};if(i!==(i=t[4].component)){if(n){ht();const t=n;gt(t.$$.fragment,1,0,(()=>{yt(t,1)})),pt()}i?(n=V(i,a()),$t(n.$$.fragment),mt(n.$$.fragment,1),wt(n,r.parentNode,r)):n=null}else i&&n.$set(s)},i(t){s||(n&&mt(n.$$.fragment,t),s=!0)},o(t){n&&gt(n.$$.fragment,t),s=!1},d(t){t&&$(r),n&&yt(n,t)}}}function ne(t){let e,n;return e=new te({props:{error:t[0],status:t[1]}}),{c(){$t(e.$$.fragment)},l(t){vt(e.$$.fragment,t)},m(t,r){wt(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i(t){n||(mt(e.$$.fragment,t),n=!0)},o(t){gt(e.$$.fragment,t),n=!1},d(t){yt(e,t)}}}function re(t){let e,n,r,s;const o=[ne,ee],i=[];function a(t,e){return t[0]?0:1}return e=a(t),n=i[e]=o[e](t),{c(){n.c(),r=T()},l(t){n.l(t),r=T()},m(t,n){i[e].m(t,n),_(t,r,n),s=!0},p(t,s){let c=e;e=a(t),e===c?i[e].p(t,s):(ht(),gt(i[c],1,1,(()=>{i[c]=null})),pt(),n=i[e],n?n.p(t,s):(n=i[e]=o[e](t),n.c()),mt(n,1),n.m(r.parentNode,r))},i(t){s||(mt(n),s=!0)},o(t){gt(n),s=!1},d(t){i[e].d(t),t&&$(r)}}}function se(t){let n,r;const s=[{segment:t[2][0]},t[3].props];let o={$$slots:{default:[re]},$$scope:{ctx:t}};for(let t=0;t<s.length;t+=1)o=e(o,s[t]);return n=new Yt({props:o}),{c(){$t(n.$$.fragment)},l(t){vt(n.$$.fragment,t)},m(t,e){wt(n,t,e),r=!0},p(t,[e]){const r=12&e?bt(s,[4&e&&{segment:t[2][0]},8&e&&_t(t[3].props)]):{};147&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){r||(mt(n.$$.fragment,t),r=!0)},o(t){gt(n.$$.fragment,t),r=!1},d(t){yt(n,t)}}}function oe(t,e,n){let{stores:r}=e,{error:s}=e,{status:o}=e,{segments:i}=e,{level0:a}=e,{level1:c=null}=e,{notify:l}=e;var u,f;return Q(l),u=At,f=r,Y().$$.context.set(u,f),t.$$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,s=t.error),"status"in t&&n(1,o=t.status),"segments"in t&&n(2,i=t.segments),"level0"in t&&n(3,a=t.level0),"level1"in t&&n(4,c=t.level1),"notify"in t&&n(6,l=t.notify)},[s,o,i,a,c,r,l]}class ie extends Tt{constructor(t){super(),xt(this,t,oe,se,i,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const ae=[],ce=[{js:()=>Promise.all([import("./index.2a0ee907.js"),__inject_styles(["client-0275e36e.css","createOctokit-865318f3.css","index-e08df70b.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./rate-limit-exceeded.6c58b859.js"),__inject_styles(["client-0275e36e.css","rate-limit-exceeded-ec20dc01.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./_number_.3908a5cd.js"),__inject_styles(["client-0275e36e.css","createOctokit-865318f3.css","_number_-a58f5d99.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./_number_.b4665589.js"),__inject_styles(["client-0275e36e.css","createOctokit-865318f3.css","_number_-9a5d58bf.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./error.5b4e863f.js"),__inject_styles(["client-0275e36e.css","error-64ad0d96.css"])]).then((function(t){return t[0]}))}],le=(ue=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/rate-limit-exceeded\/?$/,parts:[{i:1}]},{pattern:/^\/incident\/([^/]+?)\/?$/,parts:[null,{i:2,params:t=>({number:ue(t[1])})}]},{pattern:/^\/history\/([^/]+?)\/?$/,parts:[null,{i:3,params:t=>({number:ue(t[1])})}]},{pattern:/^\/error\/?$/,parts:[{i:4}]}]);var ue;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function fe(t,e,n,r){return new(n||(n=Promise))((function(s,o){function i(t){try{c(r.next(t))}catch(t){o(t)}}function a(t){try{c(r.throw(t))}catch(t){o(t)}}function c(t){var e;t.done?s(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,a)}c((r=r.apply(t,e||[])).next())}))}function de(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}let he,pe=1;const me="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},ge={};let be,_e;const $e=t=>"undefined"!=typeof URLSearchParams?[...new URLSearchParams(t).entries()]:t.slice(1).split("&").map((t=>{const[,e,n=""]=/([^=]*)(?:=([\S\s]*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));return[e,n]}));function ve(t){const e=Object.create(null);return t.length?$e(t).reduce(((t,[e,n])=>("string"==typeof t[e]&&(t[e]=[t[e]]),"object"==typeof t[e]?t[e].push(n):t[e]=n,t)),e):e}function we(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(be))return null;let e=t.pathname.slice(be.length);if(""===e&&(e="/"),!ae.some((t=>t.test(e))))for(let n=0;n<le.length;n+=1){const r=le[n],s=r.pattern.exec(e);if(s){const n=ve(t.search),o=r.parts[r.parts.length-1],i=o.params?o.params(s):{},a={host:location.host,path:e,query:n,params:i};return{href:t.href,route:r,match:s,page:a}}}}function ye(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;if(t.defaultPrevented)return;const e=de(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const s=new URL(r);if(s.pathname===location.pathname&&s.search===location.search)return;const o=we(s);if(o){Te(o,null,e.hasAttribute("sapper:noscroll"),s.hash),t.preventDefault(),me.pushState({id:he},"",s.href)}}function Ee(){return{x:pageXOffset,y:pageYOffset}}function xe(t){if(ge[he]=Ee(),t.state){const e=we(new URL(location.href));e?Te(e,t.state.id):location.href=location.href}else!function(t){pe=t}(pe+1),function(t){he=t}(pe),me.replaceState({id:he},"",location.href)}function Te(t,e,n,r){return fe(this,void 0,void 0,(function*(){const s=!!e;if(s)he=e;else{const t=Ee();ge[he]=t,he=e=++pe,ge[he]=n?t:{x:0,y:0}}if(yield _e(t),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let t,n=ge[e];r&&(t=document.getElementById(r.slice(1)),t&&(n={x:0,y:t.getBoundingClientRect().top+scrollY})),ge[he]=n,n&&(s||t)?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function Se(t){let e=t.baseURI;if(!e){const n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}let Ne,Ae=null;function Pe(t){const e=de(t.target);e&&e.hasAttribute("sapper:prefetch")&&function(t){const e=we(new URL(t,Se(document)));if(e)Ae&&t===Ae.href||(Ae={href:t,promise:Ke(e)}),Ae.promise}(e.href)}function Re(t){clearTimeout(Ne),Ne=setTimeout((()=>{Pe(t)}),20)}function Ie(t,e={noscroll:!1,replaceState:!1}){const n=we(new URL(t,Se(document)));if(n){const r=Te(n,null,e.noscroll);return me[e.replaceState?"replaceState":"pushState"]({id:he},"",t),r}return location.href=t,new Promise((()=>{}))}const Le="undefined"!=typeof __SAPPER__&&__SAPPER__;let He,ke,Oe,Ue=!1,Ce=[],je="{}";const Me={page:function(t){const e=Nt(t);let n=!0;return{notify:function(){n=!0,e.update((t=>t))},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe((e=>{(void 0===r||n&&e!==r)&&t(r=e)}))}}}({}),preloading:Nt(null),session:Nt(Le&&Le.session)};let Ge,De,Be;function qe(t,e){const{error:n}=t;return Object.assign({error:n},e)}function ze(t){return fe(this,void 0,void 0,(function*(){He&&Me.preloading.set(!0);const e=function(t){return Ae&&Ae.href===t.href?Ae.promise:Ke(t)}(t),n=ke={},r=yield e,{redirect:s}=r;if(n===ke)if(s)yield Ie(s.location,{replaceState:!0});else{const{props:e,branch:n}=r;yield We(n,e,qe(e,t.page))}}))}function We(t,e,n){return fe(this,void 0,void 0,(function*(){Me.page.set(n),Me.preloading.set(!1),He?He.$set(e):(e.stores={page:{subscribe:Me.page.subscribe},preloading:{subscribe:Me.preloading.subscribe},session:Me.session},e.level0={props:yield Oe},e.notify=Me.page.notify,He=new ie({target:Be,props:e,hydrate:!0})),Ce=t,je=JSON.stringify(n.query),Ue=!0,De=!1}))}function Ke(t){return fe(this,void 0,void 0,(function*(){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let s=null;const o={error:null,status:200,segments:[r[0]]},i={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(s&&(s.statusCode!==t||s.location!==e))throw new Error("Conflicting redirects");s={statusCode:t,location:e}},error:(t,e)=>{o.error="string"==typeof e?new Error(e):e,o.status=t}};if(!Oe){const t=()=>({});Oe=Le.preloaded[0]||t.call(i,{host:n.host,path:n.path,query:n.query,params:{}},Ge)}let a,c=1;try{const s=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;a=yield Promise.all(e.parts.map(((e,a)=>fe(this,void 0,void 0,(function*(){const f=r[a];if(function(t,e,n,r){if(r!==je)return!0;const s=Ce[t];return!!s&&(e!==s.segment||!(!s.match||JSON.stringify(s.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(a,f,l,s)&&(u=!0),o.segments[c]=r[a+1],!e)return{segment:f};const d=c++;let h;if(De||u||!Ce[a]||Ce[a].part!==e.i){u=!1;const{default:r,preload:s}=yield ce[e.i].js();let o;o=Ue||!Le.preloaded[a+1]?s?yield s.call(i,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},Ge):{}:Le.preloaded[a+1],h={component:r,props:o,segment:f,match:l,part:e.i}}else h=Ce[a];return o[`level${d}`]=h})))))}catch(t){o.error=t,o.status=500,a=[]}return{redirect:s,props:o,branch:a}}))}var Je,Ve,Fe;Me.session.subscribe((t=>fe(void 0,void 0,void 0,(function*(){if(Ge=t,!Ue)return;De=!0;const e=we(new URL(location.href)),n=ke={},{redirect:r,props:s,branch:o}=yield Ke(e);n===ke&&(r?yield Ie(r.location,{replaceState:!0}):yield We(o,s,qe(s,e.page)))})))),Je={target:document.querySelector("#sapper")},Ve=Je.target,Be=Ve,Fe=Le.baseUrl,be=Fe,_e=ze,"scrollRestoration"in me&&(me.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{me.scrollRestoration="auto"})),addEventListener("load",(()=>{me.scrollRestoration="manual"})),addEventListener("click",ye),addEventListener("popstate",xe),addEventListener("touchstart",Pe),addEventListener("mousemove",Re),Le.error?Promise.resolve().then((()=>function(){const{host:t,pathname:e,search:n}=location,{session:r,preloaded:s,status:o,error:i}=Le;Oe||(Oe=s&&s[0]);const a={error:i,status:o,session:r,level0:{props:Oe},level1:{props:{status:o,error:i},component:te},segments:s},c=ve(n);We([],a,{host:t,path:e,query:c,params:{},error:i})}())):Promise.resolve().then((()=>{const{hash:t,href:e}=location;me.replaceState({id:pe},"",e);const n=we(new URL(location.href));if(n)return Te(n,pe,!0,t)}));export{G as A,S as B,s as C,et as D,M as E,c as F,f as G,J as H,B as I,W as J,Mt as K,y as L,O as M,Ie as N,D as O,N as P,e as Q,P as R,Tt as S,bt as T,Q as U,Z as V,u as W,_t as X,it as Y,z as Z,x as a,k as b,C as c,R as d,w as e,$ as f,A as g,_ as h,xt as i,ht as j,pt as k,mt as l,E as m,U as n,X as o,g as p,t as q,Pt as r,i as s,gt as t,T as u,v,$t as w,vt as x,wt as y,yt as z};

import __inject_styles from './inject_styles.803b7e80.js';