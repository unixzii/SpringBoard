"use strict";define(["jquery"],function(t){var n;return{load:function(e){t.get({url:"bookmark.json",success:function(t){n=t,e()}})},getCategories:function(){return n?n.map(function(t){return{title:t.title,count:t.items.length}}):[]},getData:function(){return n}}});