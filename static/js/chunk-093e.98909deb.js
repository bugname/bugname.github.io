(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-093e"],{MyC3:function(t,e,o){"use strict";var n={components:{BackToTop:o("T+we").a},props:{data:{type:Object,default:null},nomore:{type:Boolean,default:!1},hidetoken:{type:Boolean,default:!1},who:{type:String,default:""}},data:function(){return{firstPage:1,loadNext:!0,color:[],domainList:[],collectList:[],id:"",filter:null,busy:!1,loading:!1,fields:{idLabel:{label:"ID"},domain:{label:"Domain"},statusLabel:{label:"Status"},dictionary:{label:"Search"},action:{label:"Action"}}}},watch:{hidetoken:function(t){this.filter=!0===t?"Available":null},name:function(t){t&&this.loadMore()},data:function(t){var e=this;1===t.currentPage&&(e.domainList=[]),t.currentPage%e.safe_page==0?e.loadNext=!1:e.loadNext=!0,t.currentPage%e.safe_page==1&&(e.domainList=[],document.body.scrollTop=0,document.documentElement.scrollTop=0),t.data.map(function(o,n){o.page=e.data.currentPage,o.key=n+1,o.status="",o.statusLabel="Loading",t.currentPage>e.safe_page?(o.id=(t.currentPage-1)%e.safe_page*20+n+1,e.domainList[o.id]=o):(o.id=20*(t.currentPage-1)+n+1,e.domainList[o.id]=o),e.domainList.push(),e.checkDomain(o.domain,o.id)}),e.firstPage=e.domainList[1].page}},sockets:{connect:function(){},checkDomain:function(t){try{if(this.domainList[t[1]]){var e;e="1"===t[0]?'<span style="color:green">Available</span>':"0"===t[0]?'<span style="color:red">Unavailable</span>':'<span style="color:grey">Failed</span>',this.domainList[t[1]].status=t[0],this.domainList[t[1]].statusLabel=e,this.domainList.push(),"-1"===t[0]&&this.checkDomain(this.domainList[t[1]].domain,this.domainList[t[1]].id)}}catch(t){this.$ga.event("error","socket",{exDescription:t.message,exFatal:!1})}}},mounted:function(){var t=this;t.data.data.map(function(e,o){e.page=t.data.currentPage,e.key=o+1,e.status="",e.statusLabel="Loading",e.id=o+1,t.domainList[e.id]=e,t.domainList.push(),t.checkDomain(e.domain,e.id),t.firstPage=t.domainList[1].page})},methods:{loadNextConfirm:function(){this.loadNext=!0,this.loadMore()},register:function(t){window.open("https://api.minongbang.zhainanfuli.com/v1/forward/domain-register/"+this.who+"/"+t,"_blank")},goGoogle:function(t){window.open("https://www.google.com/search?q="+t,"_blank")},checkDomain:function(t,e){this.$socket.emit("checkDomain",t,""+e)},loadMore:function(){var t=this;this.name&&"needLogin"===this.domainStop&&(this.domainStop=""),!1===this.nomore&&!0===this.loadNext&&(this.loading=!0,this.busy=!0,setTimeout(function(){t.$parent.loadMore(),t.busy=!1,t.loading=!1},500))}}},i=(o("RxZ2"),o("ZrdR")),a=Object(i.a)(n,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.loadMore,expression:"loadMore"}],attrs:{id:"list","infinite-scroll-immediate-check":"false","infinite-scroll-disabled":"busy","infinite-scroll-distance":"10"}},[t.domainList.length>0?o("b-table",{attrs:{items:t.domainList,fields:t.fields,filter:t.filter,hover:""},scopedSlots:t._u([{key:"idLabel",fn:function(e){return[t._v("\n      "+t._s(e.item.page)+"."+t._s(e.item.key)+"\n    ")]}},{key:"domain",fn:function(e){return[o("span",{class:{"text-success":"1"===e.item.status,"text-danger":"0"===e.item.status,"text-black-50":"-1"===e.item.status}},[t._v(t._s(e.value))])]}},{key:"statusLabel",fn:function(e){return o("span",{domProps:{innerHTML:t._s(e.value)}})}},{key:"dictionary",fn:function(e){return[o("a",{on:{click:function(o){o.stopPropagation(),t.goGoogle(e.item.domain)}}},[t._v("Google")])]}},{key:"action",fn:function(e){return["1"===e.item.status?o("a",{on:{click:function(o){o.stopPropagation(),t.register(e.item.domain)}}},[t._v("Go to register")]):t._e()]}}])}):t._e(),t._v(" "),o("div",{staticClass:"text-muted",staticStyle:{height:"40px",display:"block","margin-bottom":"30px"}},[!0===t.loading&&t.domainList.length>0?o("p",[t._v("Loading")]):t._e(),t._v(" "),!0===t.nomore?o("p",[t._v("No more")]):t._e()]),t._v(" "),o("back-to-top",{attrs:{bottom:"50px",right:"50px"}},[o("b-button",{directives:[{name:"b-popover",rawName:"v-b-popover.hover.top",value:"Back to top",expression:"'Back to top'",modifiers:{hover:!0,top:!0}}],staticClass:"btn btn-info btn-to-top",attrs:{variant:"outline-secondary"}},[t._v(t._s(t.firstPage)+" - "+t._s(t.data.currentPage)+" / "+t._s(t.data.pageCount)+" Page, "+t._s(t.data.count))])],1)],1)},[],!1,null,null,null);a.options.__file="SearchList.vue";e.a=a.exports},Px2N:function(t,e,o){"use strict";var n=o("lkx2");o.n(n).a},RxZ2:function(t,e,o){"use strict";var n=o("W7wY");o.n(n).a},W7wY:function(t,e,o){},WRkR:function(t,e,o){"use strict";var n=o("Asgo"),i=o.n(n),a=o("f0Pt"),s=o.n(a),r=o("i7/w"),d=o.n(r),c=o("oYx3"),m=s.a.create({baseURL:"https://api.minongbang.zhainanfuli.com/v1",timeout:5e3});m.interceptors.request.use(function(t){return t.headers.lang="en-US",t},function(t){console.log(t),i.a.reject(t)}),m.interceptors.response.use(function(t){var e=t.data;return 200===e.code?(null!==e.message&&d.a.notify({group:"foo",type:"success",title:"",text:e.message}),t.data):i.a.reject("error")},function(t){var e=t.response.status;return 401===e?(d.a.prototype.$login.show(),e):404!==e?(d.a.notify({group:"foo",type:"error",title:"",text:t.response.data.message}),e):(console.log("404"),c.a.push({path:"/404"}),i.a.reject(t))});var l=m;function v(t){return l({url:"/search/fast",method:"get",params:t})}function u(t){return l({url:"/search/dict",method:"get",params:t})}function h(){return l({url:"/search/dict-tld",method:"get"})}o.d(e,"c",function(){return v}),o.d(e,"a",function(){return u}),o.d(e,"b",function(){return h})},X4fA:function(t,e,o){"use strict";o.d(e,"a",function(){return s}),o.d(e,"b",function(){return r});var n=o("jJIE"),i=o.n(n),a="who";function s(){return i.a.get(a)}function r(t){return i.a.set(a,t,{expires:365})}},Yfch:function(t,e,o){"use strict";function n(t){return/^(?!-)(?:[a-zA-Z\d-]{0,62}[a-zA-Z\d]\.){1,126}(?!\d+)[a-zA-Z\d]{1,63}$/.test(t)}function i(t){var e=0;return t.split(" ").forEach(function(t){-1!==t.indexOf("*")&&e++}),/(^[\*0-9A-Za-z-]+\s[\*0-9A-Za-z-]+\s[\*0-9A-Za-z-]+$)|(^[\*0-9A-Za-z-]+\s[\*0-9A-Za-z-]+$)|(^[\*0-9A-Za-z-]+$)/.test(t)&&e<3}function a(t){return/^[0-9A-Za-z-]+$/.test(t)}o.d(e,"b",function(){return n}),o.d(e,"c",function(){return i}),o.d(e,"a",function(){return a})},"jyl/":function(t,e,o){"use strict";o.r(e);var n=o("WRkR"),i=o("MyC3"),a=o("Yfch"),s=o("X4fA"),r={components:{SearchList:i.a},data:function(){return{who:"name.com",data:{},form:{keyword:"",length:9,tld:0,page:null},submitColor:"outline-success",hideToken:!1,selected:0,noMore:!1,tlds:[{text:"com",value:"0"},{text:"net",value:"1"},{text:"cc",value:"2"}]}},mounted:function(){Object(s.a)()&&(this.who=Object(s.a)())},methods:{selectRegistrar:function(t){this.who=t,Object(s.b)(t)},egSearch:function(t){this.form.keyword=t,this.form.page=1,this.noMore=!1,this.submitColor="outline-success",this.loadMore()},checkForm:function(t){this.noMore=!1,t.preventDefault(),(this.form.length<1||this.form.length>63)&&(this.form.length=9),Object(a.c)(this.form.keyword)?(this.form.page=1,this.submitColor="outline-success",this.loadMore()):this.submitColor="outline-danger"},loadMore:function(){var t=this;!1===this.noMore&&(this.$ga.event("search","fast",this.form),this.name&&this.$ga.event("search","username",this.name||""),Object(n.c)(this.form).then(function(e){e.data&&(t.data=e.data,null!==t.data.nextPage?(t.form.page=t.data.nextPage,t.noMore=!1):t.noMore=!0)}).catch(function(t){}))}}},d=(o("Px2N"),o("ZrdR")),c=Object(d.a)(r,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("b-form",{ref:"fast",on:{submit:t.checkForm}},[o("b-row",[o("b-col",{attrs:{cols:"8"}},[o("b-input-group",[o("b-form-input",{attrs:{size:"lg",autofocus:""},model:{value:t.form.keyword,callback:function(e){t.$set(t.form,"keyword","string"==typeof e?e.trim():e)},expression:"form.keyword"}}),t._v(" "),o("b-input-group-append",[o("b-btn",{attrs:{variant:t.submitColor,type:"submit",size:"lg"}},[t._v("GO")])],1)],1),t._v(" "),o("b-form-text",{staticClass:"mb-2"},[t._v("\n            eg.\n            "),o("a",{directives:[{name:"b-popover",rawName:"v-b-popover.hover.bottom",value:"how + Common words，Common words + how",expression:"'how + Common words，Common words + how'",modifiers:{hover:!0,bottom:!0}}],staticClass:"pr-1",on:{click:function(e){t.egSearch("how")}}},[t._v("how")]),t._v(",\n            "),o("a",{directives:[{name:"b-popover",rawName:"v-b-popover.hover.bottom",value:"Common words(4 digits)",expression:"'Common words(4 digits)'",modifiers:{hover:!0,bottom:!0}}],staticClass:"pr-1",on:{click:function(e){t.egSearch("****")}}},[t._v("****")]),t._v(",\n            "),o("a",{directives:[{name:"b-popover",rawName:"v-b-popover.hover.bottom",value:"how + Common words(2 digits)",expression:"'how + Common words(2 digits)'",modifiers:{hover:!0,bottom:!0}}],staticClass:"pr-1",on:{click:function(e){t.egSearch("how **")}}},[t._v("how **")]),t._v(",\n            "),o("a",{directives:[{name:"b-popover",rawName:"v-b-popover.hover.bottom",value:"Words starting with wh (5 digits)",expression:"'Words starting with wh (5 digits)'",modifiers:{hover:!0,bottom:!0}}],staticClass:"pr-1",on:{click:function(e){t.egSearch("wh***")}}},[t._v("wh***")]),t._v(",\n            "),o("a",{directives:[{name:"b-popover",rawName:"v-b-popover.hover.bottom",value:"Common words(1 digits) + password",expression:"'Common words(1 digits) + password'",modifiers:{hover:!0,bottom:!0}}],staticClass:"pr-1",on:{click:function(e){t.egSearch("* password")}}},[t._v("* password")]),t._v(",\n            "),o("a",{directives:[{name:"b-popover",rawName:"v-b-popover.hover.bottom",value:"Common words(3 digits) + Common words(starting with f, End with k, 4 digits)",expression:"'Common words(3 digits) + Common words(starting with f, End with k, 4 digits)'",modifiers:{hover:!0,bottom:!0}}],staticClass:"pr-1",on:{click:function(e){t.egSearch("*** f**k")}}},[t._v("*** f**k")]),t._v(",\n            "),o("a",{directives:[{name:"b-popover",rawName:"v-b-popover.hover.bottom",value:"how + Common words(2 digits) + Common words(3 digits)",expression:"'how + Common words(2 digits) + Common words(3 digits)'",modifiers:{hover:!0,bottom:!0}}],staticClass:"pr-1",on:{click:function(e){t.egSearch("how ** ***")}}},[t._v("how ** ***")]),t._v(",\n            "),o("a",{directives:[{name:"b-popover",rawName:"v-b-popover.hover.bottom",value:"Common words(2 digits) + Common words(3 digits) + hub",expression:"'Common words(2 digits) + Common words(3 digits) + hub'",modifiers:{hover:!0,bottom:!0}}],staticClass:"pr-1",on:{click:function(e){t.egSearch("** *** bao")}}},[t._v("** *** hub")])])],1),t._v(" "),o("b-col",{attrs:{cols:"4"}},[o("b-form-radio-group",{attrs:{options:t.tlds,"button-variant":"outline-secondary",size:"sm",buttons:""},model:{value:t.form.tld,callback:function(e){t.$set(t.form,"tld",e)},expression:"form.tld"}}),t._v(" "),o("b-form-checkbox",{model:{value:t.hideToken,callback:function(e){t.hideToken=e},expression:"hideToken"}},[t._v("\n            Hide Registered\n          ")]),t._v(" "),o("label",[t._v("Max Length: "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.length,expression:"form.length"}],staticClass:"length",attrs:{name:"length",type:"text"},domProps:{value:t.form.length},on:{input:function(e){e.target.composing||t.$set(t.form,"length",e.target.value)}}}),t._v(" characters")]),t._v(" "),o("b-dropdown",{staticClass:"m-md-2",attrs:{size:"sm",variant:"outline-secondary",text:"Registrar"}},[o("b-dropdown-item",{attrs:{active:"name.com"===t.who},on:{click:function(e){t.selectRegistrar("name.com")}}},[t._v("name.com")]),t._v(" "),o("b-dropdown-item",{attrs:{active:"GoDaddy"===t.who},on:{click:function(e){t.selectRegistrar("GoDaddy")}}},[t._v("GoDaddy")]),t._v(" "),o("b-dropdown-item",{attrs:{active:"namesilo"===t.who},on:{click:function(e){t.selectRegistrar("namesilo")}}},[t._v("namesilo")]),t._v(" "),o("b-dropdown-item",{attrs:{active:"NameCheap"===t.who},on:{click:function(e){t.selectRegistrar("NameCheap")}}},[t._v("NameCheap")]),t._v(" "),o("b-dropdown-item",{attrs:{active:"iwantmyname"===t.who},on:{click:function(e){t.selectRegistrar("iwantmyname")}}},[t._v("iwantmyname")]),t._v(" "),o("b-dropdown-item",{attrs:{active:"1and1"===t.who},on:{click:function(e){t.selectRegistrar("1and1")}}},[t._v("1and1")]),t._v(" "),o("b-dropdown-item",{attrs:{active:"101domain"===t.who},on:{click:function(e){t.selectRegistrar("101domain")}}},[t._v("101domain")]),t._v(" "),o("b-dropdown-item",{attrs:{active:"123-reg"===t.who},on:{click:function(e){t.selectRegistrar("123-reg")}}},[t._v("123-reg")])],1)],1)],1)],1),t._v(" "),o("hr"),t._v(" "),t.data.count>0?o("searchList",{ref:"searchList",attrs:{who:t.who,data:t.data,nomore:t.noMore,hidetoken:t.hideToken}}):o("div",[o("div",{staticClass:"row"},[o("div",{staticClass:"col-sm"},[o("div",{staticClass:"card"},[o("div",{staticClass:"card-header"},[t._v("\n              1. Other suffixes\n            ")]),t._v(" "),o("div",{staticClass:"card-body"},[o("p",[t._v("Suitable for sweeping domain names with other suffixes.")]),t._v(" "),o("p",[t._v("Enter: "),o("b",[t._v("bugname")]),t._v(" "),o("br"),t._v("The suffix of the sweep is as follows:"),o("br"),t._v("\n                com,"),o("br"),t._v("net,"),o("br"),t._v("org,"),o("br"),t._v("cn,"),o("br"),t._v("app,"),o("br"),t._v("me,"),o("br"),t._v("\n                info,"),o("br"),t._v("name,"),o("br"),t._v("mobi,"),o("br"),t._v("cc,"),o("br"),t._v("tv,"),o("br"),t._v("ly,"),o("br"),t._v("\n                sb,"),o("br"),t._v("link,"),o("br"),t._v("blog\n              ")]),t._v(" "),o("p",[t._v("When you enter a "),o("b",[t._v("key length less than")]),t._v(" you set the "),o("b",[t._v("longest number of digits")]),t._v(", the dictionary will be automatically retrieved to combine the domain names. See: 2. Domain name ideas")])])])]),t._v(" "),o("div",{staticClass:"col-sm"},[o("div",{staticClass:"card"},[o("div",{staticClass:"card-header"},[t._v("\n              2. Domain name ideas\n            ")]),t._v(" "),o("div",{staticClass:"card-body"},[o("p",[t._v("It is suitable for those who want to find a product in their industry. The domain name that can quickly sweep out the names can also be registered.")]),t._v(" "),o("p",[t._v("Enter: "),o("b",[t._v("yuming")]),t._v(" "),o("br"),t._v("The domain name of the sweep is as follows:"),o("br"),t._v("\n                1. Other suffixes,\n                "),o("br"),t._v(" 2. according to the longest number of domain names you set, select all the words of all the dictionary in the system (can group hundreds of different domain name combinations).\n              ")]),t._v(" "),o("p",[t._v("eg."),o("br"),t._v("\n                Add some common words you might not think before (after) the keyword, "),o("br"),t._v("\n                domain"),o("b",[t._v("4u")]),t._v(","),o("br"),t._v("\n                domain"),o("b",[t._v("ol")]),t._v(","),o("br"),t._v(" "),o("b",[t._v("i")]),t._v("domain,"),o("br"),t._v("\n                domain"),o("b",[t._v("tools")]),t._v(","),o("br"),t._v(" "),o("b",[t._v("get")]),t._v("domain,"),o("br"),t._v(" "),o("b",[t._v("1")]),t._v("domain"),o("br"),t._v("\n                domain"),o("b",[t._v("hub")]),o("br"),t._v("\n                domain"),o("b",[t._v("best")]),o("br")])])])]),t._v(" "),o("div",{staticClass:"col-sm"},[o("div",{staticClass:"card"},[o("div",{staticClass:"card-header"},[t._v("\n              3、Single word\n            ")]),t._v(" "),o("div",{staticClass:"card-body"},[o("p",[t._v("It is suitable for rice farmers to sweep rice, and it can quickly sweep out all registered domain names according to the number of digits. ")]),t._v(" "),o("p",[t._v("Enter: "),o("b",[t._v("***")]),t._v(" "),o("br"),t._v("Sweeping all 3-digit domain names\n              ")]),t._v(" "),o("p",[t._v("Enter: "),o("b",[t._v("****")]),t._v(" "),o("br"),t._v("Sweeping all 4-digit domain names\n              ")]),t._v(" "),o("p",[t._v("Enter: "),o("b",[t._v("*****")]),t._v(" "),o("br"),t._v("Sweeping all 5-digit domain names\n              ")]),t._v(" "),o("p",[t._v("Enter: "),o("b",[t._v("******")]),t._v(" "),o("br"),t._v("Sweeping all 6-digit domain names\n              ")]),t._v(" "),o("p",[t._v("Enter: "),o("b",[t._v("w****")]),t._v(" "),o("br"),t._v("Sweeping is the 5-digit domain name at the beginning of "),o("b",[t._v("w")])]),t._v(" "),o("p",[t._v("Enter: "),o("b",[t._v("******g")]),t._v(" "),o("br"),t._v("Sweeping is the 7-digit domain name at the end of "),o("b",[t._v("g")])]),t._v(" "),o("p",[t._v("Enter: "),o("b",[t._v("***b***")]),t._v(" "),o("br"),t._v("Sweeping all 7-digit domain names containing b (4th)\n              ")]),t._v(" "),o("p",[t._v("\n                And so on. "),o("br"),t._v("Note: The above domain name combinations are all from the words in the domain name dictionary.\n              ")])])])]),t._v(" "),o("div",{staticClass:"col-sm"},[o("div",{staticClass:"card"},[o("div",{staticClass:"card-header"},[t._v("\n              4、Keyword + wildcard\n            ")]),t._v(" "),o("div",{staticClass:"card-body"},[o("p",[t._v("It is suitable for those who want to find a product in their industry. The domain name that can quickly sweep out the names can also be registered.")]),t._v(" "),o("p",[t._v("Enter: "),o("b",[t._v("domain *")]),t._v(" "),o("br"),t._v("domain+ combination of words of length 1。\n              ")]),t._v(" "),o("p",[t._v("Enter: "),o("b",[t._v("* domain ")]),t._v(" "),o("br"),t._v("Word with a length of 1+domain\n              ")]),t._v(" "),o("p",[t._v("Enter: "),o("b",[t._v("domain b*")]),t._v(" "),o("br"),t._v("domain+ is a combination of words of length 2 (starting with "),o("b",[t._v("b")]),t._v(").\n              ")]),t._v(" "),o("p",[t._v("Enter: "),o("b",[t._v("domain * w*")]),t._v(" "),o("br"),t._v("domain+ is a combination of a word with a length of 1 digit and a length of 2 digits (starting with "),o("b",[t._v("w")]),t._v(").\n              ")]),t._v(" "),o("p",[t._v("\n                By analogy, the above "),o("b",[t._v("words with asterisks can only be at most two ")]),t._v(", freely spliced before and after, and can be freely combined with the keyword format mentioned in 1-3.")]),t._v(" "),o("p",[t._v("Note: "),o("b",[t._v(" is separated by a space between multiple words, otherwise it will be recognized as a word")]),t._v(".\n              ")])])])])])])],1)},[],!1,null,null,null);c.options.__file="index.vue";e.default=c.exports},lkx2:function(t,e,o){}}]);