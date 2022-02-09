(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Vue.component("app-menu", {
  data: function data() {
    return {
      menu: [{
        Title: "Sobre Mim",
        URL: "#about-me"
      }, {
        Title: "Projetos",
        URL: "#projects"
      }, {
        Title: "Contato",
        URL: "#contact"
      }]
    };
  },
  template: "\n    <nav class=\"navbar navbar-expand-lg navbar-dark bg-transparent\">\n        <a class=\"navbar-brand\" href=\"#inicio\">&lt;LH/&gt;</a>\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n            <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n            <ul class=\"navbar-nav\">\n                <li></li>\n                <li class=\"nav-item\" v-for=\"item in menu\">\n                    <a :href=\"item.URL\" :title=\"item.Title\" class=\"nav-link\">{{ item.Title }}</a>\n                </li>\n            </ul>\n        </div>\n    </nav>\n    "
});
var app = new Vue({
  el: "#app-menu",
  template: "<app-menu />"
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvY29tcG9uZW50cy9tZW51LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxHQUFHLENBQUMsU0FBSixhQUEwQjtBQUN0QixFQUFBLElBRHNCLGtCQUNmO0FBQ0gsV0FBTztBQUNILE1BQUEsSUFBSSxFQUFFLENBQ0Y7QUFDSSxRQUFBLEtBQUssYUFEVDtBQUVJLFFBQUEsR0FBRztBQUZQLE9BREUsRUFLRjtBQUNJLFFBQUEsS0FBSyxZQURUO0FBRUksUUFBQSxHQUFHO0FBRlAsT0FMRSxFQVNGO0FBQ0ksUUFBQSxLQUFLLFdBRFQ7QUFFSSxRQUFBLEdBQUc7QUFGUCxPQVRFO0FBREgsS0FBUDtBQWdCSCxHQWxCcUI7QUFtQnRCLEVBQUEsUUFBUTtBQW5CYyxDQUExQjtBQXFDQSxJQUFJLEdBQUcsR0FBRyxJQUFJLEdBQUosQ0FBUTtBQUNkLEVBQUEsRUFBRSxhQURZO0FBRWQsRUFBQSxRQUFRO0FBRk0sQ0FBUixDQUFWIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiVnVlLmNvbXBvbmVudChgYXBwLW1lbnVgLCB7XG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1lbnU6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFRpdGxlOiBgU29icmUgTWltYCxcbiAgICAgICAgICAgICAgICAgICAgVVJMOiBgI2Fib3V0LW1lYFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBUaXRsZTogYFByb2pldG9zYCxcbiAgICAgICAgICAgICAgICAgICAgVVJMOiBgI3Byb2plY3RzYFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBUaXRsZTogYENvbnRhdG9gLFxuICAgICAgICAgICAgICAgICAgICBVUkw6IGAjY29udGFjdGBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHRlbXBsYXRlOiBgXG4gICAgPG5hdiBjbGFzcz1cIm5hdmJhciBuYXZiYXItZXhwYW5kLWxnIG5hdmJhci1kYXJrIGJnLXRyYW5zcGFyZW50XCI+XG4gICAgICAgIDxhIGNsYXNzPVwibmF2YmFyLWJyYW5kXCIgaHJlZj1cIiNpbmljaW9cIj4mbHQ7TEgvJmd0OzwvYT5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm5hdmJhci10b2dnbGVyXCIgdHlwZT1cImJ1dHRvblwiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLXRhcmdldD1cIiNuYXZiYXJOYXZcIiBhcmlhLWNvbnRyb2xzPVwibmF2YmFyTmF2XCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgYXJpYS1sYWJlbD1cIlRvZ2dsZSBuYXZpZ2F0aW9uXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5hdmJhci10b2dnbGVyLWljb25cIj48L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlXCIgaWQ9XCJuYXZiYXJOYXZcIj5cbiAgICAgICAgICAgIDx1bCBjbGFzcz1cIm5hdmJhci1uYXZcIj5cbiAgICAgICAgICAgICAgICA8bGk+PC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJuYXYtaXRlbVwiIHYtZm9yPVwiaXRlbSBpbiBtZW51XCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIDpocmVmPVwiaXRlbS5VUkxcIiA6dGl0bGU9XCJpdGVtLlRpdGxlXCIgY2xhc3M9XCJuYXYtbGlua1wiPnt7IGl0ZW0uVGl0bGUgfX08L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvbmF2PlxuICAgIGAsXG59KTtcblxudmFyIGFwcCA9IG5ldyBWdWUoe1xuICAgIGVsOiBgI2FwcC1tZW51YCxcbiAgICB0ZW1wbGF0ZTogYDxhcHAtbWVudSAvPmBcbn0pIl19
