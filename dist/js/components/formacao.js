(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Vue.component("app-formacao", {
  data: function data() {
    return {
      infos: {
        Title: "Forma\xE7\xE3o / Conhecimentos",
        Subtitle: ""
      },
      formacao: [{
        Title: "Ensino M\xE9dio Completo"
      }, {
        Title: "Acessibilidade Web - Introdu\xE7\xE3o a Designs Inclusivos",
        LocalAno: "Alura - Abril/2018"
      }, {
        Title: "Performance Web I - Otimizando o Front-end",
        LocalAno: "Alura - Abril/2018"
      }, {
        Title: "Less CSS",
        LocalAno: "Alura - Abril/2018"
      }, {
        Title: "HTML5 e CSS3 II",
        LocalAno: "Alura - Mar\xE7o/2018"
      }, {
        Title: "Programa\xE7\xE3o Front-end com Javascript e jQuery",
        LocalAno: "Caelum - Setembro/2013"
      }, {
        Title: "XHTML / Tableless",
        LocalAno: "Impacta - Agosto/2012"
      }]
    };
  },
  template: "\n    <div class=\"mx-auto w-50\">\n        <h3 class=\"text-center\">{{ infos.Title }}</h3>\n        <ul class=\"list-group list-group-flush formacao\">\n            <li class=\"list-group-item text-uppercase wow fadeInUp\" v-for=\"(item, index) in formacao\" :data-wow-delay=\"'.' + index + 's'\">\n                <i class=\"fas fa-award\"></i> {{ item.Title }}\n                <small class=\"d-block\">{{ item.LocalAno }}</small>\n            </li>\n        </ul>\n    </div>\n    "
});
var app = new Vue({
  el: "#app-formacao",
  template: "<app-formacao />"
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvY29tcG9uZW50cy9mb3JtYWNhby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsR0FBRyxDQUFDLFNBQUosaUJBQThCO0FBQzFCLEVBQUEsSUFEMEIsa0JBQ25CO0FBQ0gsV0FBTztBQUNILE1BQUEsS0FBSyxFQUFFO0FBQ0gsUUFBQSxLQUFLLGtDQURGO0FBRUgsUUFBQSxRQUFRO0FBRkwsT0FESjtBQUtILE1BQUEsUUFBUSxFQUFFLENBQ047QUFDSSxRQUFBLEtBQUs7QUFEVCxPQURNLEVBSU47QUFDSSxRQUFBLEtBQUssOERBRFQ7QUFFSSxRQUFBLFFBQVE7QUFGWixPQUpNLEVBUU47QUFDSSxRQUFBLEtBQUssOENBRFQ7QUFFSSxRQUFBLFFBQVE7QUFGWixPQVJNLEVBWU47QUFDSSxRQUFBLEtBQUssWUFEVDtBQUVJLFFBQUEsUUFBUTtBQUZaLE9BWk0sRUFnQk47QUFDSSxRQUFBLEtBQUssbUJBRFQ7QUFFSSxRQUFBLFFBQVE7QUFGWixPQWhCTSxFQW9CTjtBQUNJLFFBQUEsS0FBSyx1REFEVDtBQUVJLFFBQUEsUUFBUTtBQUZaLE9BcEJNLEVBd0JOO0FBQ0ksUUFBQSxLQUFLLHFCQURUO0FBRUksUUFBQSxRQUFRO0FBRlosT0F4Qk07QUFMUCxLQUFQO0FBbUNILEdBckN5QjtBQXNDMUIsRUFBQSxRQUFRO0FBdENrQixDQUE5QjtBQW1EQSxJQUFJLEdBQUcsR0FBRyxJQUFJLEdBQUosQ0FBUTtBQUNkLEVBQUEsRUFBRSxpQkFEWTtBQUVkLEVBQUEsUUFBUTtBQUZNLENBQVIsQ0FBViIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIlZ1ZS5jb21wb25lbnQoYGFwcC1mb3JtYWNhb2AsIHtcbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaW5mb3M6IHtcbiAgICAgICAgICAgICAgICBUaXRsZTogYEZvcm1hw6fDo28gLyBDb25oZWNpbWVudG9zYCxcbiAgICAgICAgICAgICAgICBTdWJ0aXRsZTogYGBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmb3JtYWNhbzogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgVGl0bGU6IGBFbnNpbm8gTcOpZGlvIENvbXBsZXRvYCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgVGl0bGU6IGBBY2Vzc2liaWxpZGFkZSBXZWIgLSBJbnRyb2R1w6fDo28gYSBEZXNpZ25zIEluY2x1c2l2b3NgLFxuICAgICAgICAgICAgICAgICAgICBMb2NhbEFubzogYEFsdXJhIC0gQWJyaWwvMjAxOGBcbiAgICAgICAgICAgICAgICB9LCBcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFRpdGxlOiBgUGVyZm9ybWFuY2UgV2ViIEkgLSBPdGltaXphbmRvIG8gRnJvbnQtZW5kYCxcbiAgICAgICAgICAgICAgICAgICAgTG9jYWxBbm86IGBBbHVyYSAtIEFicmlsLzIwMThgXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFRpdGxlOiBgTGVzcyBDU1NgLFxuICAgICAgICAgICAgICAgICAgICBMb2NhbEFubzogYEFsdXJhIC0gQWJyaWwvMjAxOGBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgVGl0bGU6IGBIVE1MNSBlIENTUzMgSUlgLFxuICAgICAgICAgICAgICAgICAgICBMb2NhbEFubzogYEFsdXJhIC0gTWFyw6dvLzIwMThgXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFRpdGxlOiBgUHJvZ3JhbWHDp8OjbyBGcm9udC1lbmQgY29tIEphdmFzY3JpcHQgZSBqUXVlcnlgLFxuICAgICAgICAgICAgICAgICAgICBMb2NhbEFubzogYENhZWx1bSAtIFNldGVtYnJvLzIwMTNgXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFRpdGxlOiBgWEhUTUwgLyBUYWJsZWxlc3NgLFxuICAgICAgICAgICAgICAgICAgICBMb2NhbEFubzogYEltcGFjdGEgLSBBZ29zdG8vMjAxMmBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHRlbXBsYXRlOmBcbiAgICA8ZGl2IGNsYXNzPVwibXgtYXV0byB3LTUwXCI+XG4gICAgICAgIDxoMyBjbGFzcz1cInRleHQtY2VudGVyXCI+e3sgaW5mb3MuVGl0bGUgfX08L2gzPlxuICAgICAgICA8dWwgY2xhc3M9XCJsaXN0LWdyb3VwIGxpc3QtZ3JvdXAtZmx1c2ggZm9ybWFjYW9cIj5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSB0ZXh0LXVwcGVyY2FzZSB3b3cgZmFkZUluVXBcIiB2LWZvcj1cIihpdGVtLCBpbmRleCkgaW4gZm9ybWFjYW9cIiA6ZGF0YS13b3ctZGVsYXk9XCInLicgKyBpbmRleCArICdzJ1wiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWF3YXJkXCI+PC9pPiB7eyBpdGVtLlRpdGxlIH19XG4gICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwiZC1ibG9ja1wiPnt7IGl0ZW0uTG9jYWxBbm8gfX08L3NtYWxsPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgICBgLFxufSk7XG5cbnZhciBhcHAgPSBuZXcgVnVlKHtcbiAgICBlbDogYCNhcHAtZm9ybWFjYW9gLFxuICAgIHRlbXBsYXRlOiBgPGFwcC1mb3JtYWNhbyAvPmBcbn0pIl19
