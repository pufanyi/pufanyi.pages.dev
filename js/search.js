// build time:Wed Jun 16 2021 17:57:55 GMT+0800 (GMT+08:00)
var SearchService="";(function(e){SearchService=function(t){var o=this;o.config=e.extend({per_page:10,selectors:{body:"body",form:".u-search-form",input:".u-search-input",container:"#u-search",modal:"#u-search .modal",modal_body:"#u-search .modal-body",modal_footer:"#u-search .modal-footer",modal_overlay:"#u-search .modal-overlay",modal_results:"#u-search .modal-results",modal_metadata:"#u-search .modal-metadata",modal_error:"#u-search .modal-error",modal_loading_bar:"#u-search .modal-loading-bar",modal_ajax_content:"#u-search .modal-ajax-content",modal_logo:"#u-search .modal-footer .logo",btn_close:"#u-search .btn-close",btn_next:"#u-search .btn-next",btn_prev:"#u-search .btn-prev"},brands:{hexo:{logo:"",url:""},google:{logo:"google.svg",url:"https://cse.google.com"},algolia:{logo:"algolia.svg",url:"https://www.algolia.com"},baidu:{logo:"baidu.svg",url:"http://zn.baidu.com/cse/home/index"},azure:{logo:"azure.svg",url:"https://azure.microsoft.com/en-us/services/search/"}},imagePath:ROOT+"img/"},t);o.dom={};o.percentLoaded=0;o.open=false;o.queryText="";o.nav={next:-1,prev:-1,total:0,current:1};o.parseSelectors=function(){for(var a in o.config.selectors){o.dom[a]=e(o.config.selectors[a])}};o.beforeQuery=function(){if(!o.open){o.dom.container.fadeIn();o.dom.body.addClass("modal-active")}o.dom.input.each(function(a,t){e(t).val(o.queryText)});document.activeElement.blur();o.dom.modal_error.hide();o.dom.modal_ajax_content.removeClass("loaded");o.startLoading()};o.afterQuery=function(){o.dom.modal_body.scrollTop(0);o.dom.modal_ajax_content.addClass("loaded");o.stopLoading()};o.search=function(e,a){o.beforeQuery();if(o.search instanceof Function){o.query(o.queryText,e,function(){o.afterQuery()})}else{console.log("query() does not exist.");o.onQueryError(o.queryText,"");o.afterQuery()}};o.onQueryError=function(e,a){var t="";if(a==="success")t='No result found for "'+e+'".';else if(a==="timeout")t="Unfortunate timeout.";else t="Mysterious failure.";o.dom.modal_results.html("");o.dom.modal_error.html(t);o.dom.modal_error.show()};o.nextPage=function(){if(o.nav.next!==-1){o.search(o.nav.next)}};o.prevPage=function(){if(o.nav.prev!==-1){o.search(o.nav.prev)}};o.buildResult=function(e,a,t,o){var n="";n="<li>";n+="<a class='result' href='"+e+"'>";n+="<span class='title'>"+a+"</span>";if(t!=="")n+="<span class='digest'>"+t+"</span>";n+="</a>";n+="</li>";return n};o.close=function(){o.open=false;o.dom.container.fadeOut();o.dom.body.removeClass("modal-active")};o.onSubmit=function(a){a.preventDefault();o.queryText=e(this).find(".u-search-input").val();if(o.queryText){o.search(1)}};o.startLoading=function(){o.dom.modal_loading_bar.show();o.loadingTimer=setInterval(function(){o.percentLoaded=Math.min(o.percentLoaded+5,95);o.dom.modal_loading_bar.css("width",o.percentLoaded+"%")},100)};o.stopLoading=function(){clearInterval(o.loadingTimer);o.dom.modal_loading_bar.css("width","100%");o.dom.modal_loading_bar.fadeOut();setTimeout(function(){o.percentLoaded=0;o.dom.modal_loading_bar.css("width","0%")},300)};o.addLogo=function(e){var a="";if(o.config.brands[e]&&o.config.brands[e].logo){a+="<a href='"+o.config.brands[e].url+"' class='"+e+"'>";a+='<img src="'+o.config.imagePath+o.config.brands[e].logo+'" />';a+="</a>";o.dom.modal_logo.html(a)}};o.destroy=function(){o.dom.form.each(function(a,t){e(t).off("submit")});o.dom.modal_overlay.off("click");o.dom.btn_close.off("click");o.dom.btn_next.off("click");o.dom.btn_prev.off("click");o.dom.container.remove()};o.init=function(){e("body").append(a);o.parseSelectors();o.dom.modal_footer.show();o.dom.form.each(function(a,t){e(t).on("submit",o.onSubmit)});o.dom.modal_overlay.on("click",o.close);o.dom.btn_close.on("click",o.close);o.dom.btn_next.on("click",o.nextPage);o.dom.btn_prev.on("click",o.prevPage)};o.init()};var a='<div id="u-search"><div class="modal"> <header class="modal-header" class="clearfix"><form id="u-search-modal-form" class="u-search-form" name="uSearchModalForm"> <input type="text" id="u-search-modal-input" class="u-search-input" /> <button type="submit" id="u-search-modal-btn-submit" class="u-search-btn-submit"> <span class="fas fa-search"></span> </button></form> <a class="btn-close"> <span class="fas fa-times"></span> </a><div class="modal-loading"><div class="modal-loading-bar"></div></div> </header> <main class="modal-body"><ul class="modal-results modal-ajax-content"></ul> </main> <footer class="modal-footer clearfix"><div class="modal-metadata modal-ajax-content"> <strong class="range"></strong> of <strong class="total"></strong></div><div class="modal-error"></div> <div class="logo"></div> <a class="nav btn-next modal-ajax-content"> <span class="text">NEXT</span> <span class="fas fa-chevron-right"></span> </a> <a class="nav btn-prev modal-ajax-content"> <span class="fas fa-chevron-left"></span> <span class="text">PREV</span> </a> </footer></div><div class="modal-overlay"></div></div>'})(jQuery);var AlgoliaSearch;(function(e){"use strict";AlgoliaSearch=function(a){SearchService.apply(this,arguments);var t=this;var o="https://"+t.config.appId+"-dsn.algolia.net/1/indexes/"+t.config.indexName;t.addLogo("algolia");t.buildResultList=function(a){var o="";e.each(a,function(e,a){var n=a.permalink||a.path||"";if(!a.permalink&&a.path){n=ROOT+n}var r=a.title;var i="";o+=t.buildResult(n,r,i,e+1)});return o};t.buildMetadata=function(e){t.nav.current=e.page*e.hitsPerPage+1;t.nav.currentCount=e.hits.length;t.nav.total=parseInt(e.nbHits);t.dom.modal_metadata.children(".total").html(t.nav.total);t.dom.modal_metadata.children(".range").html(t.nav.current+"-"+(t.nav.current+t.nav.currentCount-1));if(t.nav.total>0){t.dom.modal_metadata.show()}else{t.dom.modal_metadata.hide()}if(e.page<e.nbPages-1){t.nav.next=e.page+1+1;t.dom.btn_next.show()}else{t.nav.next=-1;t.dom.btn_next.hide()}if(e.page>0){t.nav.prev=e.page+1-1;t.dom.btn_prev.show()}else{t.nav.prev=-1;t.dom.btn_prev.hide()}};t.query=function(a,n,r){e.get(o,{query:a,page:n-1,hitsPerPage:t.config.per_page,"x-algolia-application-id":t.config.appId,"x-algolia-api-key":t.config.apiKey},function(e,o){if(o==="success"&&e.hits&&e.hits.length>0){var n=t.buildResultList(e.hits);t.dom.modal_results.html(n)}else{t.onQueryError(a,o)}t.buildMetadata(e);if(r){r(e)}})};return t}})(jQuery);var AzureSearch;(function(e){"use strict";AzureSearch=function(a){SearchService.apply(this,arguments);var t=this;var o="https://"+t.config.serviceName+".search.windows.net/indexes/"+t.config.indexName+"/docs?api-version=2015-02-28";t.nav.current=1;t.addLogo("azure");t.buildResultList=function(a){var o="";e.each(a,function(e,a){var n=a.permalink||a.path||"";if(!a.permalink&&a.path){n="/"+n}var r=a.title;var i=a.excerpt||"";o+=t.buildResult(n,r,i)});return o};t.buildMetadata=function(e,a){t.nav.current=a;t.nav.currentCount=e.value.length;t.nav.total=parseInt(e["@odata.count"]);t.dom.modal_metadata.children(".total").html(t.nav.total);t.dom.modal_metadata.children(".range").html(t.nav.current+"-"+(t.nav.current+t.nav.currentCount-1));if(t.nav.total>0){t.dom.modal_metadata.show()}else{t.dom.modal_metadata.hide()}if(t.nav.current+t.nav.currentCount<=t.nav.total){t.nav.next=t.nav.current+t.nav.currentCount;t.dom.btn_next.show()}else{t.nav.next=-1;t.dom.btn_next.hide()}if(t.nav.current>1){t.nav.prev=t.nav.current-t.config.per_page;t.dom.btn_prev.show()}else{t.nav.prev=-1;t.dom.btn_prev.hide()}};t.query=function(a,n,r){e.ajax({url:o,headers:{Accept:"application/json","api-key":t.config.queryKey},data:{search:a,$orderby:"date desc",$skip:n-1,$top:t.config.per_page,$count:true},type:"GET",success:function(e,o){if(o==="success"&&e.value&&e.value.length>0){var i=t.buildResultList(e.value);t.dom.modal_results.html(i)}else{t.onQueryError(a,o)}t.buildMetadata(e,n);if(r){r(e)}}})};return t}})(jQuery);var BaiduSearch;(function(e){"use strict";BaiduSearch=function(a){SearchService.apply(this,arguments);var t=this;var o="";t.addLogo("baidu");t.buildResultList=function(a,o){var n=[],r="";e.each(a,function(e,a){if(t.contentSearch(a,o))r+=t.buildResult(a.linkUrl,a.title,a.abstract)});return r};t.buildMetadata=function(e){};t.loadScript=function(){t.dom.input.each(function(a,t){e(t).attr("disabled",true)});var a="<script src='http://zhannei.baidu.com/api/customsearch/apiaccept?sid="+t.config.apiId+"&v=2.0&callback=customSearch.initBaidu' type='text/javascript' charset='utf-8'></script>";t.dom.body.append(a)};t.initBaidu=function(){t.cse=new BCse.Search(t.config.apiId);t.dom.input.each(function(a,t){e(t).attr("disabled",false)})};t.query=function(e,a,o){t.cse.getResult(e,function(a){console.log("Searching: "+e);t.cse.getError(function(e){console.log(e)});if(a.length>0){t.buildResultList(a,e);t.cse.getSearchInfo(e,function(e){console.log(e);t.buildMetadata(e)})}else{t.nav.total=0;t.nav.next=-1;t.nav.prev=-1;t.dom.modal_metadata.hide();t.dom.btn_next.hide();t.dom.btn_prev.hide();t.onQueryError(e,"success")}if(o instanceof Function){o()}})};t.loadScript();return t}})(jQuery);var GoogleCustomSearch="";(function(e){"use strict";GoogleCustomSearch=function(a){SearchService.apply(this,arguments);var t=this;var o="https://www.googleapis.com/customsearch/v1";t.addLogo("google");t.buildResultList=function(a){var o="";e.each(a,function(e,a){var n=a.link;var r=a.title;var i=(a.htmlSnippet||"").replace("<br>","");o+=t.buildResult(n,r,i)});return o};t.buildMetadata=function(e){if(e.queries&&e.queries.request&&e.queries.request[0].totalResults!=="0"){t.nav.current=e.queries.request[0].startIndex;t.nav.currentCount=e.queries.request[0].count;t.nav.total=parseInt(e.queries.request[0].totalResults);t.dom.modal_metadata.children(".total").html(t.nav.total);t.dom.modal_metadata.children(".range").html(t.nav.current+"-"+(t.nav.current+t.nav.currentCount-1));t.dom.modal_metadata.show()}else{t.dom.modal_metadata.hide()}if(e.queries&&e.queries.nextPage){t.nav.next=e.queries.nextPage[0].startIndex;t.dom.btn_next.show()}else{t.nav.next=-1;t.dom.btn_next.hide()}if(e.queries&&e.queries.previousPage){t.nav.prev=e.queries.previousPage[0].startIndex;t.dom.btn_prev.show()}else{t.nav.prev=-1;t.dom.btn_prev.hide()}};t.query=function(a,n,r){e.get(o,{key:t.config.apiKey,cx:t.config.engineId,q:a,start:n,num:t.config.per_page},function(e,o){if(o==="success"&&e.items&&e.items.length>0){var n=t.buildResultList(e.items);t.dom.modal_results.html(n)}else{t.onQueryError(a,o)}t.buildMetadata(e);if(r){r()}})};return t}})(jQuery);var HexoSearch;(function(e){"use strict";HexoSearch=function(a){SearchService.apply(this,arguments);var t=this;t.config.endpoint=ROOT+((a||{}).endpoint||"content.json");t.config.endpoint=t.config.endpoint.replace("//","/");t.cache="";t.contentSearch=function(a,t){var o=a.title.trim().toLowerCase(),n=a.text.trim().toLowerCase(),r=t.trim().toLowerCase().split(" "),i=false,s=-1,l=-1,c=-1;if(o!==""&&n!==""){e.each(r,function(e,t){s=o.indexOf(t);l=n.indexOf(t);if(s<0&&l<0){i=false}else{i=true;if(l<0){l=0}if(e===0){c=l}}if(i){n=a.text.trim();var d=0,u=0;if(c>=0){d=Math.max(c-40,0);u=d===0?Math.min(200,n.length):Math.min(c+120,n.length);var m=n.substring(d,u);r.forEach(function(e){var a=new RegExp(e,"gi");m=m.replace(a,"<b mark>"+e+"</b>")});a.digest=m+"......"}else{u=Math.min(200,n.length);a.digest=n.trim().substring(0,u)}}})}return i};t.buildResultList=function(a,o){var n=[],r="";var i=1;e.each(a,function(e,a){if(t.contentSearch(a,o))r+=t.buildResult(a.permalink,a.title,a.digest,i++)});return r};t.buildMetadata=function(e){t.dom.modal_footer.hide()};t.query=function(a,o,n){if(!t.cache){e.get(t.config.endpoint,{key:t.config.apiKey,cx:t.config.engineId,q:a,start:o,num:t.config.per_page},function(e,o){if(o!=="success"||!e||!e.posts&&!e.pages||e.posts.length<1&&e.pages.length<1){t.onQueryError(a,o)}else{t.cache=e;var r="";r+=t.buildResultList(e.pages,a);r+=t.buildResultList(e.posts,a);t.dom.modal_results.html(r)}t.buildMetadata(e);if(n){n(e)}})}else{var r="";r+=t.buildResultList(t.cache.pages,a);r+=t.buildResultList(t.cache.posts,a);t.dom.modal_results.html(r);t.buildMetadata(t.cache);if(n){n(t.cache)}}};return t}})(jQuery);
//rebuild by neat 