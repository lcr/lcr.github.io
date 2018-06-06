var Header=document.querySelector(".js-headroom"),headroom=new Headroom(Header,{offset:100,tolerance:10,classes:{initial:"js-headroom",pinned:"js-headroom--pinned",unpinned:"js-headroom--unpinned"}});headroom.init();var searchOpen=document.querySelectorAll("#headerSearch,#footerSearch"),searchPage=document.querySelector("#search"),searchInput=document.querySelector("#searchInput"),searchReset=document.querySelector("#searchReset"),searchNav=document.querySelector("#searchNav");
for(i=0;i<searchOpen.length;i++)searchOpen[i].addEventListener("click",function(a){a.preventDefault();searchPage.style.transform="translateY(100vh)";searchInput.focus();setTimeout(function(){document.body.style.overflowY="hidden"},500)});document.querySelector("#searchClose").addEventListener("click",function(a){a.preventDefault();searchPage.style.transform="translateY(-100vh)";document.body.style.overflowY="visible"});
searchPage.addEventListener("keyup",function(a){a.preventDefault();27===a.keyCode&&(searchPage.style.transform="translateY(-100vh)",document.body.style.overflowY="visible")});searchReset.addEventListener("click",function(){this.style.display="none";searchInput.focus();myAutocomplete.autocomplete.setVal("");searchNav.style.display=0<searchInput.value.length?"none":"block"});
searchInput.addEventListener("keyup",function(){0<searchInput.value.length?(searchNav.style.display="none",searchReset.style.display="block"):(searchNav.style.display="block",searchReset.style.display="none")});
var client=algoliasearch("4X0L5EZUHF","2c3e03751f5b259ae833fe039896ad2e"),index=client.initIndex("jekyll"),myAutocomplete=autocomplete("#searchInput",{hint:!1},[{source:autocomplete.sources.hits(index,{hitsPerPage:100}),displayKey:"title",templates:{suggestion:function(a){return"<h2>"+a._highlightResult.title.value+"</h2><p>"+a._highlightResult.content.value+"</p>"||"<h2>"+a._highlightResult.title.value+"</h2><p>"+a._highlightResult.headings.value+"</p>"},empty:function(a){return'No results for "'+
      a.query + '"'
    }
  }
}]).on("autocomplete:selected", function (a, b, c) {
  location.href = b.url
}), urlHash = window.location.hash;
if (0 < urlHash.length) {
  var inputCheck = document.getElementById(urlHash);
  inputCheck.checked = !0
}
window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;ga('create', '{{ site.google_analytics }}', 'auto');ga('send', 'pageview');