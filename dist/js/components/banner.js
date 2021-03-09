(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Vue.component("app-banner", {
  data: function data() {
    return {
      item: {
        ImageURL: "./dist/images/banner.jpg",
        Title: "<LHDEVELOPER/>",
        Subtitle: "Desenvolvimento Front-end"
      }
    };
  },
  template: "\n    <element>\n        <img :src=\"item.ImageURL\" alt=\"LHDEVELOPER\" />\n        <div class=\"text-banner\">\n            <div class=\"container text-center\">\n                <h1 class=\"text-white wow fadeIn\" data-wow-delay=\".5s\">{{ item.Title }}</h1>\n                <p class=\"text-secondary wow fadeInUp\" data-wow-delay=\".7s\">{{ item.Subtitle }}</p>\n            </div>\n        </div>\n    </element>\n    "
});
var app = new Vue({
  el: "#app-banner",
  template: "<app-banner />"
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvY29tcG9uZW50cy9iYW5uZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLEdBQUcsQ0FBQyxTQUFKLGVBQTRCO0FBQ3hCLEVBQUEsSUFEd0Isa0JBQ2pCO0FBQ0gsV0FBTztBQUNILE1BQUEsSUFBSSxFQUFFO0FBQ0YsUUFBQSxRQUFRLDRCQUROO0FBRUYsUUFBQSxLQUFLLGtCQUZIO0FBR0YsUUFBQSxRQUFRO0FBSE47QUFESCxLQUFQO0FBT0gsR0FUdUI7QUFVeEIsRUFBQSxRQUFRO0FBVmdCLENBQTVCO0FBdUJBLElBQUksR0FBRyxHQUFHLElBQUksR0FBSixDQUFRO0FBQ2QsRUFBQSxFQUFFLGVBRFk7QUFFZCxFQUFBLFFBQVE7QUFGTSxDQUFSLENBQVYiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJWdWUuY29tcG9uZW50KGBhcHAtYmFubmVyYCwge1xuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpdGVtOiB7XG4gICAgICAgICAgICAgICAgSW1hZ2VVUkw6YC4vZGlzdC9pbWFnZXMvYmFubmVyLmpwZ2AsXG4gICAgICAgICAgICAgICAgVGl0bGU6IGA8TEhERVZFTE9QRVIvPmAsXG4gICAgICAgICAgICAgICAgU3VidGl0bGU6IGBEZXNlbnZvbHZpbWVudG8gRnJvbnQtZW5kYFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICB0ZW1wbGF0ZTpgXG4gICAgPGVsZW1lbnQ+XG4gICAgICAgIDxpbWcgOnNyYz1cIml0ZW0uSW1hZ2VVUkxcIiBhbHQ9XCJMSERFVkVMT1BFUlwiIC8+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWJhbm5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzcz1cInRleHQtd2hpdGUgd293IGZhZGVJblwiIGRhdGEtd293LWRlbGF5PVwiLjVzXCI+e3sgaXRlbS5UaXRsZSB9fTwvaDE+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LXNlY29uZGFyeSB3b3cgZmFkZUluVXBcIiBkYXRhLXdvdy1kZWxheT1cIi43c1wiPnt7IGl0ZW0uU3VidGl0bGUgfX08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9lbGVtZW50PlxuICAgIGBcbn0pO1xuXG52YXIgYXBwID0gbmV3IFZ1ZSh7XG4gICAgZWw6IGAjYXBwLWJhbm5lcmAsXG4gICAgdGVtcGxhdGU6IGA8YXBwLWJhbm5lciAvPmBcbn0pIl19
