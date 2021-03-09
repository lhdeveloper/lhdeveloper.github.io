(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Vue.component("app-formacao", {
  data: function data() {
    return {
      infos: {
        Title: "Forma\xE7\xE3o / Cursos",
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
  template: "\n    <div class=\"mx-auto w-50\">\n        <h3 class=\"text-center\">{{ infos.Title }}</h3>\n        <ul class=\"list-group list-group-flush formacao\">\n            <li class=\"list-group-item text-uppercase wow fadeInUp\" \n                v-for=\"(item, index) in formacao\" \n                :data-wow-delay=\"'.' + index + 's'\" :class=\"index == 0 ? 'oneline' : ''\"\n            >\n                <i class=\"fas fa-award\"></i> {{ item.Title }}\n                <small class=\"d-block\">{{ item.LocalAno }}</small>\n            </li>\n        </ul>\n    </div>\n    "
});
var app = new Vue({
  el: "#app-formacao",
  template: "<app-formacao />"
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvY29tcG9uZW50cy9mb3JtYWNhby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsR0FBRyxDQUFDLFNBQUosaUJBQThCO0FBQzFCLEVBQUEsSUFEMEIsa0JBQ25CO0FBQ0gsV0FBTztBQUNILE1BQUEsS0FBSyxFQUFFO0FBQ0gsUUFBQSxLQUFLLDJCQURGO0FBRUgsUUFBQSxRQUFRO0FBRkwsT0FESjtBQUtILE1BQUEsUUFBUSxFQUFFLENBQ047QUFDSSxRQUFBLEtBQUs7QUFEVCxPQURNLEVBSU47QUFDSSxRQUFBLEtBQUssOERBRFQ7QUFFSSxRQUFBLFFBQVE7QUFGWixPQUpNLEVBUU47QUFDSSxRQUFBLEtBQUssOENBRFQ7QUFFSSxRQUFBLFFBQVE7QUFGWixPQVJNLEVBWU47QUFDSSxRQUFBLEtBQUssWUFEVDtBQUVJLFFBQUEsUUFBUTtBQUZaLE9BWk0sRUFnQk47QUFDSSxRQUFBLEtBQUssbUJBRFQ7QUFFSSxRQUFBLFFBQVE7QUFGWixPQWhCTSxFQW9CTjtBQUNJLFFBQUEsS0FBSyx1REFEVDtBQUVJLFFBQUEsUUFBUTtBQUZaLE9BcEJNLEVBd0JOO0FBQ0ksUUFBQSxLQUFLLHFCQURUO0FBRUksUUFBQSxRQUFRO0FBRlosT0F4Qk07QUFMUCxLQUFQO0FBbUNILEdBckN5QjtBQXNDMUIsRUFBQSxRQUFRO0FBdENrQixDQUE5QjtBQXNEQSxJQUFJLEdBQUcsR0FBRyxJQUFJLEdBQUosQ0FBUTtBQUNkLEVBQUEsRUFBRSxpQkFEWTtBQUVkLEVBQUEsUUFBUTtBQUZNLENBQVIsQ0FBViIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIlZ1ZS5jb21wb25lbnQoYGFwcC1mb3JtYWNhb2AsIHtcbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaW5mb3M6IHtcbiAgICAgICAgICAgICAgICBUaXRsZTogYEZvcm1hw6fDo28gLyBDdXJzb3NgLFxuICAgICAgICAgICAgICAgIFN1YnRpdGxlOiBgYFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZvcm1hY2FvOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBUaXRsZTogYEVuc2lubyBNw6lkaW8gQ29tcGxldG9gLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBUaXRsZTogYEFjZXNzaWJpbGlkYWRlIFdlYiAtIEludHJvZHXDp8OjbyBhIERlc2lnbnMgSW5jbHVzaXZvc2AsXG4gICAgICAgICAgICAgICAgICAgIExvY2FsQW5vOiBgQWx1cmEgLSBBYnJpbC8yMDE4YFxuICAgICAgICAgICAgICAgIH0sIFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgVGl0bGU6IGBQZXJmb3JtYW5jZSBXZWIgSSAtIE90aW1pemFuZG8gbyBGcm9udC1lbmRgLFxuICAgICAgICAgICAgICAgICAgICBMb2NhbEFubzogYEFsdXJhIC0gQWJyaWwvMjAxOGBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgVGl0bGU6IGBMZXNzIENTU2AsXG4gICAgICAgICAgICAgICAgICAgIExvY2FsQW5vOiBgQWx1cmEgLSBBYnJpbC8yMDE4YFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBUaXRsZTogYEhUTUw1IGUgQ1NTMyBJSWAsXG4gICAgICAgICAgICAgICAgICAgIExvY2FsQW5vOiBgQWx1cmEgLSBNYXLDp28vMjAxOGBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgVGl0bGU6IGBQcm9ncmFtYcOnw6NvIEZyb250LWVuZCBjb20gSmF2YXNjcmlwdCBlIGpRdWVyeWAsXG4gICAgICAgICAgICAgICAgICAgIExvY2FsQW5vOiBgQ2FlbHVtIC0gU2V0ZW1icm8vMjAxM2BcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgVGl0bGU6IGBYSFRNTCAvIFRhYmxlbGVzc2AsXG4gICAgICAgICAgICAgICAgICAgIExvY2FsQW5vOiBgSW1wYWN0YSAtIEFnb3N0by8yMDEyYFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgdGVtcGxhdGU6YFxuICAgIDxkaXYgY2xhc3M9XCJteC1hdXRvIHctNTBcIj5cbiAgICAgICAgPGgzIGNsYXNzPVwidGV4dC1jZW50ZXJcIj57eyBpbmZvcy5UaXRsZSB9fTwvaDM+XG4gICAgICAgIDx1bCBjbGFzcz1cImxpc3QtZ3JvdXAgbGlzdC1ncm91cC1mbHVzaCBmb3JtYWNhb1wiPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIHRleHQtdXBwZXJjYXNlIHdvdyBmYWRlSW5VcFwiIFxuICAgICAgICAgICAgICAgIHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiBmb3JtYWNhb1wiIFxuICAgICAgICAgICAgICAgIDpkYXRhLXdvdy1kZWxheT1cIicuJyArIGluZGV4ICsgJ3MnXCIgOmNsYXNzPVwiaW5kZXggPT0gMCA/ICdvbmVsaW5lJyA6ICcnXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1hd2FyZFwiPjwvaT4ge3sgaXRlbS5UaXRsZSB9fVxuICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cImQtYmxvY2tcIj57eyBpdGVtLkxvY2FsQW5vIH19PC9zbWFsbD5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICAgYCxcbn0pO1xuXG52YXIgYXBwID0gbmV3IFZ1ZSh7XG4gICAgZWw6IGAjYXBwLWZvcm1hY2FvYCxcbiAgICB0ZW1wbGF0ZTogYDxhcHAtZm9ybWFjYW8gLz5gXG59KSJdfQ==
