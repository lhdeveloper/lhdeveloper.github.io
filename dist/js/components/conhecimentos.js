(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Vue.component("app-conhecimentos", {
  data: function data() {
    return {
      infos: {
        Title: "Conhecimentos",
        Subtitle: ""
      },
      conhecimentos: [{
        Title: "HTML5",
        Icon: "fa-html5"
      }, {
        Title: "CSS3",
        Icon: "fa-css3-alt"
      }, {
        Title: "SASS",
        Icon: "fa-sass"
      }, {
        Title: "Gulp",
        Icon: "fa-gulp"
      }, {
        Title: "ReactJS",
        Icon: "fa-react"
      }, {
        Title: "NodeJS",
        Icon: "fa-node-js"
      }, {
        Title: "Git",
        Icon: "fa-git"
      }]
    };
  },
  template: "\n    <h3 class=\"text-center\">{{ infos.Title }}</h3>\n    <small class=\"d-block text-center\" v-if=\"infos.Subtitle\">{{ infos.Subtitle }}</small>\n    <ul class=\"d-flex skills justify-content-center py-4\">\n        <li class=\"rounded-circle p-3\" v-for=\"item in conhecimentos\">\n            <i :class=\"'fab' + item.Icon\" :alt=\"item.Title\"></i>\n        </li>\n    </ul>\n    "
});
var app = new Vue({
  el: "#app-conhecimentos",
  template: "<app-conhecimentos />"
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvY29tcG9uZW50cy9jb25oZWNpbWVudG9zLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxHQUFHLENBQUMsU0FBSixzQkFBbUM7QUFDL0IsRUFBQSxJQUQrQixrQkFDeEI7QUFDSCxXQUFPO0FBQ0gsTUFBQSxLQUFLLEVBQUU7QUFDSCxRQUFBLEtBQUssaUJBREY7QUFFSCxRQUFBLFFBQVE7QUFGTCxPQURKO0FBS0gsTUFBQSxhQUFhLEVBQUMsQ0FDVjtBQUNJLFFBQUEsS0FBSyxTQURUO0FBRUksUUFBQSxJQUFJO0FBRlIsT0FEVSxFQUtWO0FBQ0ksUUFBQSxLQUFLLFFBRFQ7QUFFSSxRQUFBLElBQUk7QUFGUixPQUxVLEVBU1Y7QUFDSSxRQUFBLEtBQUssUUFEVDtBQUVJLFFBQUEsSUFBSTtBQUZSLE9BVFUsRUFhVjtBQUNJLFFBQUEsS0FBSyxRQURUO0FBRUksUUFBQSxJQUFJO0FBRlIsT0FiVSxFQWlCVjtBQUNJLFFBQUEsS0FBSyxXQURUO0FBRUksUUFBQSxJQUFJO0FBRlIsT0FqQlUsRUFxQlY7QUFDSSxRQUFBLEtBQUssVUFEVDtBQUVJLFFBQUEsSUFBSTtBQUZSLE9BckJVLEVBeUJWO0FBQ0ksUUFBQSxLQUFLLE9BRFQ7QUFFSSxRQUFBLElBQUk7QUFGUixPQXpCVTtBQUxYLEtBQVA7QUFvQ0gsR0F0QzhCO0FBdUMvQixFQUFBLFFBQVE7QUF2Q3VCLENBQW5DO0FBa0RBLElBQUksR0FBRyxHQUFHLElBQUksR0FBSixDQUFRO0FBQ2QsRUFBQSxFQUFFLHNCQURZO0FBRWQsRUFBQSxRQUFRO0FBRk0sQ0FBUixDQUFWIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiVnVlLmNvbXBvbmVudChgYXBwLWNvbmhlY2ltZW50b3NgLCB7XG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGluZm9zOiB7XG4gICAgICAgICAgICAgICAgVGl0bGU6IGBDb25oZWNpbWVudG9zYCxcbiAgICAgICAgICAgICAgICBTdWJ0aXRsZTogYGBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb25oZWNpbWVudG9zOltcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFRpdGxlOiBgSFRNTDVgLFxuICAgICAgICAgICAgICAgICAgICBJY29uOmBmYS1odG1sNWAsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFRpdGxlOiBgQ1NTM2AsXG4gICAgICAgICAgICAgICAgICAgIEljb246YGZhLWNzczMtYWx0YFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBUaXRsZTogYFNBU1NgLFxuICAgICAgICAgICAgICAgICAgICBJY29uOiBgZmEtc2Fzc2BcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgVGl0bGU6IGBHdWxwYCxcbiAgICAgICAgICAgICAgICAgICAgSWNvbjogYGZhLWd1bHBgXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFRpdGxlOiBgUmVhY3RKU2AsXG4gICAgICAgICAgICAgICAgICAgIEljb246IGBmYS1yZWFjdGBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgVGl0bGU6IGBOb2RlSlNgLFxuICAgICAgICAgICAgICAgICAgICBJY29uOiBgZmEtbm9kZS1qc2BcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgVGl0bGU6IGBHaXRgLFxuICAgICAgICAgICAgICAgICAgICBJY29uOiBgZmEtZ2l0YFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgdGVtcGxhdGU6YFxuICAgIDxoMyBjbGFzcz1cInRleHQtY2VudGVyXCI+e3sgaW5mb3MuVGl0bGUgfX08L2gzPlxuICAgIDxzbWFsbCBjbGFzcz1cImQtYmxvY2sgdGV4dC1jZW50ZXJcIiB2LWlmPVwiaW5mb3MuU3VidGl0bGVcIj57eyBpbmZvcy5TdWJ0aXRsZSB9fTwvc21hbGw+XG4gICAgPHVsIGNsYXNzPVwiZC1mbGV4IHNraWxscyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHB5LTRcIj5cbiAgICAgICAgPGxpIGNsYXNzPVwicm91bmRlZC1jaXJjbGUgcC0zXCIgdi1mb3I9XCJpdGVtIGluIGNvbmhlY2ltZW50b3NcIj5cbiAgICAgICAgICAgIDxpIDpjbGFzcz1cIidmYWInICsgaXRlbS5JY29uXCIgOmFsdD1cIml0ZW0uVGl0bGVcIj48L2k+XG4gICAgICAgIDwvbGk+XG4gICAgPC91bD5cbiAgICBgXG59KTtcblxudmFyIGFwcCA9IG5ldyBWdWUoe1xuICAgIGVsOiBgI2FwcC1jb25oZWNpbWVudG9zYCxcbiAgICB0ZW1wbGF0ZTogYDxhcHAtY29uaGVjaW1lbnRvcyAvPmBcbn0pIl19
