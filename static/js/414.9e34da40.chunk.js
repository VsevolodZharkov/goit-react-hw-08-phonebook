/*! For license information please see 414.9e34da40.chunk.js.LICENSE.txt */
(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[414],{9414:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return at}});var a=n(885),r=n(2791),o=n(2982),i=n(1413),s=n(1694),u=n.n(s),l=n(6871),c=n(9085),d=n(5861),m=n(7757),h=n.n(m),f=n(8383),g={limit:8},v=function(){var t=(0,d.Z)(h().mark((function t(e,n){var a,r;return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.dJ.post("/posts/".concat(e,"/comments"),n);case 2:return a=t.sent,r=a.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),p=function(){var t=(0,d.Z)(h().mark((function t(e){var n,a,r,o=arguments;return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=o.length>1&&void 0!==o[1]?o[1]:{},t.next=3,f.dJ.get("/posts/".concat(e,"/comments"),{params:(0,i.Z)((0,i.Z)({},g),n)});case 3:return a=t.sent,r=a.data,t.abrupt("return",r);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),b=function(){var t=(0,d.Z)(h().mark((function t(e){return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",f.dJ.delete("/comments/".concat(e)));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),y=n(3329),w=function(t){var e=t.setComments,n=(0,l.UO)().postId,s=(0,r.useState)(!1),d=(0,a.Z)(s,2),m=d[0],h=d[1],f=(0,r.useState)(""),g=(0,a.Z)(f,2),p=g[0],b=g[1];return(0,y.jsxs)("form",{action:"#",className:"my-5",onSubmit:function(t){t.preventDefault(),p.trim()?(h(!0),v(n,{content:p}).then((function(t){c.Am.success("You have successfully created a new comment!"),e((function(e){return(0,i.Z)((0,i.Z)({},e),{},{data:[t].concat((0,o.Z)(e.data))})})),b("")})).catch((function(){c.Am.error("Something went wrong!")})).finally((function(){return h(!1)}))):c.Am.error("Fill all required fields!")},children:[(0,y.jsxs)("label",{className:"d-block form-label",children:[(0,y.jsx)("p",{children:"Post content"}),(0,y.jsx)("textarea",{rows:"5",value:p,onChange:function(t){return b(t.target.value)},className:"form-control",placeholder:"Write your feedback"})]}),(0,y.jsxs)("button",{type:"submit",className:u()("btn btn-primary my-2",m?"disabled":""),children:[m&&(0,y.jsx)("span",{className:"spinner-grow spinner-grow-sm mr-2"}),"Submit"]})]})},M={};function x(){return M}function j(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function S(t){j(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"===typeof t&&"[object Date]"===e?new Date(t.getTime()):"number"===typeof t||"[object Number]"===e?new Date(t):("string"!==typeof t&&"[object String]"!==e||"undefined"===typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function D(t,e){j(2,arguments);var n=S(t),a=S(e),r=n.getTime()-a.getTime();return r<0?-1:r>0?1:r}function k(t,e){j(2,arguments);var n=S(t),a=S(e),r=n.getFullYear()-a.getFullYear(),o=n.getMonth()-a.getMonth();return 12*r+o}function W(t){j(1,arguments);var e=S(t);return e.setHours(23,59,59,999),e}function P(t){j(1,arguments);var e=S(t),n=e.getMonth();return e.setFullYear(e.getFullYear(),n+1,0),e.setHours(23,59,59,999),e}function N(t){j(1,arguments);var e=S(t);return W(e).getTime()===P(e).getTime()}function T(t,e){j(2,arguments);var n,a=S(t),r=S(e),o=D(a,r),i=Math.abs(k(a,r));if(i<1)n=0;else{1===a.getMonth()&&a.getDate()>27&&a.setDate(30),a.setMonth(a.getMonth()-o*i);var s=D(a,r)===-o;N(S(t))&&1===i&&1===D(t,r)&&(s=!1),n=o*(i-Number(s))}return 0===n?0:n}function C(t,e){return j(2,arguments),S(t).getTime()-S(e).getTime()}var A={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(t){return t<0?Math.ceil(t):Math.floor(t)}};function F(t){return t?A[t]:A.trunc}function X(t,e,n){j(2,arguments);var a=C(t,e)/1e3;return F(null===n||void 0===n?void 0:n.roundingMethod)(a)}var Y={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Z=function(t,e,n){var a,r=Y[t];return a="string"===typeof r?r:1===e?r.one:r.other.replace("{{count}}",e.toString()),null!==n&&void 0!==n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+a:a+" ago":a};function O(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth,a=t.formats[n]||t.formats[t.defaultWidth];return a}}var J={date:O({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:O({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:O({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},q={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},E=function(t,e,n,a){return q[t]};function _(t){return function(e,n){var a;if("formatting"===(null!==n&&void 0!==n&&n.context?String(n.context):"standalone")&&t.formattingValues){var r=t.defaultFormattingWidth||t.defaultWidth,o=null!==n&&void 0!==n&&n.width?String(n.width):r;a=t.formattingValues[o]||t.formattingValues[r]}else{var i=t.defaultWidth,s=null!==n&&void 0!==n&&n.width?String(n.width):t.defaultWidth;a=t.values[s]||t.values[i]}return a[t.argumentCallback?t.argumentCallback(e):e]}}var H={ordinalNumber:function(t,e){var n=Number(t),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:_({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:_({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:_({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:_({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:_({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function z(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=n.width,r=a&&t.matchPatterns[a]||t.matchPatterns[t.defaultMatchWidth],o=e.match(r);if(!o)return null;var i,s=o[0],u=a&&t.parsePatterns[a]||t.parsePatterns[t.defaultParseWidth],l=Array.isArray(u)?U(u,(function(t){return t.test(s)})):I(u,(function(t){return t.test(s)}));i=t.valueCallback?t.valueCallback(l):l,i=n.valueCallback?n.valueCallback(i):i;var c=e.slice(s.length);return{value:i,rest:c}}}function I(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}function U(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}var B,L={ordinalNumber:(B={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(B.matchPattern);if(!n)return null;var a=n[0],r=t.match(B.parsePattern);if(!r)return null;var o=B.valueCallback?B.valueCallback(r[0]):r[0];o=e.valueCallback?e.valueCallback(o):o;var i=t.slice(a.length);return{value:o,rest:i}}),era:z({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:z({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:z({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:z({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:z({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},Q={code:"en-US",formatDistance:Z,formatLong:J,formatRelative:E,localize:H,match:L,options:{weekStartsOn:0,firstWeekContainsDate:1}};function V(t,e){if(null==t)throw new TypeError("assign requires that input parameter not be null or undefined");for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}function R(t){return V({},t)}function G(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}var K=1440,$=43200;function tt(t,e,n){var a,r;j(2,arguments);var o=x(),i=null!==(a=null!==(r=null===n||void 0===n?void 0:n.locale)&&void 0!==r?r:o.locale)&&void 0!==a?a:Q;if(!i.formatDistance)throw new RangeError("locale must contain formatDistance property");var s=D(t,e);if(isNaN(s))throw new RangeError("Invalid time value");var u,l,c=V(R(n),{addSuffix:Boolean(null===n||void 0===n?void 0:n.addSuffix),comparison:s});s>0?(u=S(e),l=S(t)):(u=S(t),l=S(e));var d,m=X(l,u),h=(G(l)-G(u))/1e3,f=Math.round((m-h)/60);if(f<2)return null!==n&&void 0!==n&&n.includeSeconds?m<5?i.formatDistance("lessThanXSeconds",5,c):m<10?i.formatDistance("lessThanXSeconds",10,c):m<20?i.formatDistance("lessThanXSeconds",20,c):m<40?i.formatDistance("halfAMinute",0,c):m<60?i.formatDistance("lessThanXMinutes",1,c):i.formatDistance("xMinutes",1,c):0===f?i.formatDistance("lessThanXMinutes",1,c):i.formatDistance("xMinutes",f,c);if(f<45)return i.formatDistance("xMinutes",f,c);if(f<90)return i.formatDistance("aboutXHours",1,c);if(f<K){var g=Math.round(f/60);return i.formatDistance("aboutXHours",g,c)}if(f<2520)return i.formatDistance("xDays",1,c);if(f<$){var v=Math.round(f/K);return i.formatDistance("xDays",v,c)}if(f<86400)return d=Math.round(f/$),i.formatDistance("aboutXMonths",d,c);if((d=T(l,u))<12){var p=Math.round(f/$);return i.formatDistance("xMonths",p,c)}var b=d%12,y=Math.floor(d/12);return b<3?i.formatDistance("aboutXYears",y,c):b<9?i.formatDistance("overXYears",y,c):i.formatDistance("almostXYears",y+1,c)}var et=n(501),nt=function(t){var e,n=t.comments,o=t.setComments,s=(0,l.UO)().postId,u=(0,r.useState)(!0),d=(0,a.Z)(u,2),m=d[0],h=d[1],f=(0,r.useCallback)((function(){return p(s).then(o).catch((function(){c.Am.error("Something went wrong!")}))}),[s,o]);(0,r.useEffect)((function(){h(!0),f().finally((function(){return h(!1)}))}),[f]);return m?(0,y.jsx)("div",{className:"spinner-border text-primary",children:(0,y.jsx)("span",{className:"visually-hidden",children:"Loading..."})}):null!==n&&void 0!==n&&null!==(e=n.data)&&void 0!==e&&e.length?(0,y.jsx)(y.Fragment,{children:(0,y.jsx)("ul",{className:"list-group",children:n.data.map((function(t){return(0,y.jsxs)("li",{className:"list-group-item list-group-item-action d-flex gap-3 py-3",children:[(0,y.jsx)("img",{width:"32",height:"32",alt:t.first_name,src:t.avatar||"/user.png",className:"rounded-circle flex-shrink-0"}),(0,y.jsxs)("div",{className:"d-flex gap-2 w-100 justify-content-between",children:[(0,y.jsxs)("div",{children:[(0,y.jsx)("h6",{className:"mb-0",children:(0,y.jsxs)(et.rU,{to:"/account/".concat(t.user_id),children:[t.first_name," ",t.last_name]})}),(0,y.jsx)("div",{className:"mb-4 mt-3",dangerouslySetInnerHTML:{__html:t.content.replace(/\n/g,"<br/>")}}),(0,y.jsxs)("div",{className:"d-flex",style:{marginLeft:"-13px"},children:[(0,y.jsx)("button",{type:"button",className:"btn btn-link text-secondary btn-sm",onClick:function(){return e=t.id,void b(e).then((function(){o((function(t){return(0,i.Z)((0,i.Z)({},t),{},{data:t.data.filter((function(t){return t.id!==e}))})})),c.Am.success("You have successfully deleted your comment!")})).catch((function(){c.Am.error("Something went wrong!")}));var e},children:"Delete comment"}),(0,y.jsx)("button",{type:"button",className:"btn btn-link text-secondary btn-sm",children:"Edit comment"})]})]}),(0,y.jsx)("small",{className:"opacity-50 text-nowrap",children:tt(new Date(t.created_at),new Date,{addSuffix:!0})})]})]},t.id)}))})}):(0,y.jsx)("p",{children:"No comments yet!"})},at=function(){var t=(0,r.useState)(null),e=(0,a.Z)(t,2),n=e[0],o=e[1];return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(w,{setComments:o}),(0,y.jsx)(nt,{comments:n,setComments:o})]})}},1694:function(t,e){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var t=[],e=0;e<arguments.length;e++){var n=arguments[e];if(n){var o=typeof n;if("string"===o||"number"===o)t.push(n);else if(Array.isArray(n)){if(n.length){var i=r.apply(null,n);i&&t.push(i)}}else if("object"===o)if(n.toString===Object.prototype.toString)for(var s in n)a.call(n,s)&&n[s]&&t.push(s);else t.push(n.toString())}}return t.join(" ")}t.exports?(r.default=r,t.exports=r):void 0===(n=function(){return r}.apply(e,[]))||(t.exports=n)}()}}]);
//# sourceMappingURL=414.9e34da40.chunk.js.map