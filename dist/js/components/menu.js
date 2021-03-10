(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Vue.component("app-menu", {
  data: function data() {
    return {
      menu: [{
        Title: "In\xEDcio",
        URL: "#inicio"
      }, {
        Title: "Sobre Mim",
        URL: "#about-me"
      }, {
        Title: "Projetos",
        URL: "#projects"
      } // {
      //     Title: `Contato`,
      //     URL: `#contact`
      // }
      ]
    };
  },
  template: "\n    <nav class=\"navbar navbar-expand-lg navbar-dark bg-transparent\">\n        <a class=\"navbar-brand\" href=\"#\">&lt;LH/&gt;</a>\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n            <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n            <ul class=\"navbar-nav\">\n                <li class=\"nav-item\" v-for=\"item in menu\">\n                    <a :href=\"item.URL\" :title=\"item.Title\" class=\"nav-link\">{{ item.Title }}</a>\n                </li>\n            </ul>\n        </div>\n    </nav>\n    "
});
var app = new Vue({
  el: "#app-menu",
  template: "<app-menu />"
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvY29tcG9uZW50cy9tZW51LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxHQUFHLENBQUMsU0FBSixhQUEwQjtBQUN0QixFQUFBLElBRHNCLGtCQUNmO0FBQ0gsV0FBTztBQUNILE1BQUEsSUFBSSxFQUFFLENBQ0Y7QUFDSSxRQUFBLEtBQUssYUFEVDtBQUVJLFFBQUEsR0FBRztBQUZQLE9BREUsRUFLRjtBQUNJLFFBQUEsS0FBSyxhQURUO0FBRUksUUFBQSxHQUFHO0FBRlAsT0FMRSxFQVNGO0FBQ0ksUUFBQSxLQUFLLFlBRFQ7QUFFSSxRQUFBLEdBQUc7QUFGUCxPQVRFLENBYUY7QUFDQTtBQUNBO0FBQ0E7QUFoQkU7QUFESCxLQUFQO0FBb0JILEdBdEJxQjtBQXVCdEIsRUFBQSxRQUFRO0FBdkJjLENBQTFCO0FBd0NBLElBQUksR0FBRyxHQUFHLElBQUksR0FBSixDQUFRO0FBQ2QsRUFBQSxFQUFFLGFBRFk7QUFFZCxFQUFBLFFBQVE7QUFGTSxDQUFSLENBQVYiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJWdWUuY29tcG9uZW50KGBhcHAtbWVudWAsIHtcbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbWVudTogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgVGl0bGU6IGBJbsOtY2lvYCxcbiAgICAgICAgICAgICAgICAgICAgVVJMOiBgI2luaWNpb2BcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgVGl0bGU6IGBTb2JyZSBNaW1gLFxuICAgICAgICAgICAgICAgICAgICBVUkw6IGAjYWJvdXQtbWVgXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFRpdGxlOiBgUHJvamV0b3NgLFxuICAgICAgICAgICAgICAgICAgICBVUkw6IGAjcHJvamVjdHNgXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgLy8gICAgIFRpdGxlOiBgQ29udGF0b2AsXG4gICAgICAgICAgICAgICAgLy8gICAgIFVSTDogYCNjb250YWN0YFxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgdGVtcGxhdGU6IGBcbiAgICA8bmF2IGNsYXNzPVwibmF2YmFyIG5hdmJhci1leHBhbmQtbGcgbmF2YmFyLWRhcmsgYmctdHJhbnNwYXJlbnRcIj5cbiAgICAgICAgPGEgY2xhc3M9XCJuYXZiYXItYnJhbmRcIiBocmVmPVwiI1wiPiZsdDtMSC8mZ3Q7PC9hPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwibmF2YmFyLXRvZ2dsZXJcIiB0eXBlPVwiYnV0dG9uXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtdGFyZ2V0PVwiI25hdmJhck5hdlwiIGFyaWEtY29udHJvbHM9XCJuYXZiYXJOYXZcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIiBhcmlhLWxhYmVsPVwiVG9nZ2xlIG5hdmlnYXRpb25cIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibmF2YmFyLXRvZ2dsZXItaWNvblwiPjwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcIiBpZD1cIm5hdmJhck5hdlwiPlxuICAgICAgICAgICAgPHVsIGNsYXNzPVwibmF2YmFyLW5hdlwiPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm5hdi1pdGVtXCIgdi1mb3I9XCJpdGVtIGluIG1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgOmhyZWY9XCJpdGVtLlVSTFwiIDp0aXRsZT1cIml0ZW0uVGl0bGVcIiBjbGFzcz1cIm5hdi1saW5rXCI+e3sgaXRlbS5UaXRsZSB9fTwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9uYXY+XG4gICAgYCxcbn0pO1xuXG52YXIgYXBwID0gbmV3IFZ1ZSh7XG4gICAgZWw6IGAjYXBwLW1lbnVgLFxuICAgIHRlbXBsYXRlOiBgPGFwcC1tZW51IC8+YFxufSkiXX0=
