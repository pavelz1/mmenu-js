Mmenu.addons.pageScroll=function(){var i,r=this,e=this.opts.pageScroll,l=this.conf.pageScroll;function o(e){i&&i.length&&i.is(":visible")&&jQuery("html, body").animate({scrollTop:i.offset().top+e}),i=jQuery()}function s(e){try{return!("#"==e||"#"!=e.slice(0,1)||!Mmenu.node.$page.find(e).length)}catch(e){return!1}}if("boolean"==typeof e&&(e={scroll:e}),this.opts.pageScroll=Mmenu.extend(e,Mmenu.options.pageScroll),e.scroll&&this.bind("close:finish",function(){o(l.scrollOffset)}),this.opts.offCanvas&&e.scroll&&this.clck.push(function(e,n){if(i=jQuery(),n.inMenu&&n.inListview){var t=e.attr("href");if(s(t)){if(i=jQuery(t),!this.node.$menu.is(".mm-menu_sidebar-expanded")||!jQuery("html").is(".mm-wrapper_sidebar-expanded"))return{close:!0};o(this.conf.pageScroll.scrollOffset)}}}),e.update){var f=[],c=[];this.bind("initListview:after",function(e){Mmenu.filterListItemAnchors(e.find(".mm-listview").children("li")).each(function(e,n){var t=jQuery(n).attr("href");s(t)&&f.push(t)}),c=f.reverse()});var a=-1;jQuery(window).on("scroll.mm-pageScroll",function(e){for(var n=jQuery(window).scrollTop(),t=0;t<c.length;t++)if(jQuery(c[t]).offset().top<n+l.updateOffset){a!==t&&(a=t,r.setSelected(Mmenu.filterListItemAnchors(r.node.$pnls.children(".mm-panel_opened").find(".mm-listview").children("li")).filter('[href="'+c[t]+'"]').parent()));break}})}},Mmenu.options.pageScroll={scroll:!1,update:!1},Mmenu.configs.pageScroll={scrollOffset:0,updateOffset:50};