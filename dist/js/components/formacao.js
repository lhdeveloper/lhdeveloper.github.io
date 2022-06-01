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
      }, {
        Title: "TypeScript 1",
        LocalAno: "Alura - Maio/2022"
      }]
    };
  },
  template: "\n    <div class=\"mx-auto w-50\">\n        <h3 class=\"text-center\">{{ infos.Title }}</h3>\n        <ul class=\"list-group list-group-flush formacao\">\n            <li class=\"list-group-item text-uppercase wow fadeInUp\" \n                v-for=\"(item, index) in formacao\" \n                :data-wow-delay=\"'.' + index + 's'\" :class=\"index == 0 ? 'oneline' : ''\"\n            >\n                <i class=\"fas fa-graduation-cap text-warning\"></i> {{ item.Title }}\n                <small class=\"d-block\">{{ item.LocalAno }}</small>\n            </li>\n        </ul>\n    </div>\n    "
});
var app = new Vue({
  el: "#app-formacao",
  template: "<app-formacao />"
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvY29tcG9uZW50cy9mb3JtYWNhby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsR0FBRyxDQUFDLFNBQUosaUJBQThCO0FBQzFCLEVBQUEsSUFEMEIsa0JBQ25CO0FBQ0gsV0FBTztBQUNILE1BQUEsS0FBSyxFQUFFO0FBQ0gsUUFBQSxLQUFLLDJCQURGO0FBRUgsUUFBQSxRQUFRO0FBRkwsT0FESjtBQUtILE1BQUEsUUFBUSxFQUFFLENBQ047QUFDSSxRQUFBLEtBQUs7QUFEVCxPQURNLEVBSU47QUFDSSxRQUFBLEtBQUssOERBRFQ7QUFFSSxRQUFBLFFBQVE7QUFGWixPQUpNLEVBUU47QUFDSSxRQUFBLEtBQUssOENBRFQ7QUFFSSxRQUFBLFFBQVE7QUFGWixPQVJNLEVBWU47QUFDSSxRQUFBLEtBQUssWUFEVDtBQUVJLFFBQUEsUUFBUTtBQUZaLE9BWk0sRUFnQk47QUFDSSxRQUFBLEtBQUssbUJBRFQ7QUFFSSxRQUFBLFFBQVE7QUFGWixPQWhCTSxFQW9CTjtBQUNJLFFBQUEsS0FBSyx1REFEVDtBQUVJLFFBQUEsUUFBUTtBQUZaLE9BcEJNLEVBd0JOO0FBQ0ksUUFBQSxLQUFLLHFCQURUO0FBRUksUUFBQSxRQUFRO0FBRlosT0F4Qk0sRUE0Qk47QUFDSSxRQUFBLEtBQUssZ0JBRFQ7QUFFSSxRQUFBLFFBQVE7QUFGWixPQTVCTTtBQUxQLEtBQVA7QUF1Q0gsR0F6Q3lCO0FBMEMxQixFQUFBLFFBQVE7QUExQ2tCLENBQTlCO0FBMERBLElBQUksR0FBRyxHQUFHLElBQUksR0FBSixDQUFRO0FBQ2QsRUFBQSxFQUFFLGlCQURZO0FBRWQsRUFBQSxRQUFRO0FBRk0sQ0FBUixDQUFWIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiVnVlLmNvbXBvbmVudChgYXBwLWZvcm1hY2FvYCwge1xuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpbmZvczoge1xuICAgICAgICAgICAgICAgIFRpdGxlOiBgRm9ybWHDp8OjbyAvIEN1cnNvc2AsXG4gICAgICAgICAgICAgICAgU3VidGl0bGU6IGBgXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZm9ybWFjYW86IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFRpdGxlOiBgRW5zaW5vIE3DqWRpbyBDb21wbGV0b2AsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFRpdGxlOiBgQWNlc3NpYmlsaWRhZGUgV2ViIC0gSW50cm9kdcOnw6NvIGEgRGVzaWducyBJbmNsdXNpdm9zYCxcbiAgICAgICAgICAgICAgICAgICAgTG9jYWxBbm86IGBBbHVyYSAtIEFicmlsLzIwMThgXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFRpdGxlOiBgUGVyZm9ybWFuY2UgV2ViIEkgLSBPdGltaXphbmRvIG8gRnJvbnQtZW5kYCxcbiAgICAgICAgICAgICAgICAgICAgTG9jYWxBbm86IGBBbHVyYSAtIEFicmlsLzIwMThgXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFRpdGxlOiBgTGVzcyBDU1NgLFxuICAgICAgICAgICAgICAgICAgICBMb2NhbEFubzogYEFsdXJhIC0gQWJyaWwvMjAxOGBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgVGl0bGU6IGBIVE1MNSBlIENTUzMgSUlgLFxuICAgICAgICAgICAgICAgICAgICBMb2NhbEFubzogYEFsdXJhIC0gTWFyw6dvLzIwMThgXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFRpdGxlOiBgUHJvZ3JhbWHDp8OjbyBGcm9udC1lbmQgY29tIEphdmFzY3JpcHQgZSBqUXVlcnlgLFxuICAgICAgICAgICAgICAgICAgICBMb2NhbEFubzogYENhZWx1bSAtIFNldGVtYnJvLzIwMTNgXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFRpdGxlOiBgWEhUTUwgLyBUYWJsZWxlc3NgLFxuICAgICAgICAgICAgICAgICAgICBMb2NhbEFubzogYEltcGFjdGEgLSBBZ29zdG8vMjAxMmBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgVGl0bGU6IGBUeXBlU2NyaXB0IDFgLFxuICAgICAgICAgICAgICAgICAgICBMb2NhbEFubzogYEFsdXJhIC0gTWFpby8yMDIyYFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwibXgtYXV0byB3LTUwXCI+XG4gICAgICAgIDxoMyBjbGFzcz1cInRleHQtY2VudGVyXCI+e3sgaW5mb3MuVGl0bGUgfX08L2gzPlxuICAgICAgICA8dWwgY2xhc3M9XCJsaXN0LWdyb3VwIGxpc3QtZ3JvdXAtZmx1c2ggZm9ybWFjYW9cIj5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSB0ZXh0LXVwcGVyY2FzZSB3b3cgZmFkZUluVXBcIiBcbiAgICAgICAgICAgICAgICB2LWZvcj1cIihpdGVtLCBpbmRleCkgaW4gZm9ybWFjYW9cIiBcbiAgICAgICAgICAgICAgICA6ZGF0YS13b3ctZGVsYXk9XCInLicgKyBpbmRleCArICdzJ1wiIDpjbGFzcz1cImluZGV4ID09IDAgPyAnb25lbGluZScgOiAnJ1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtZ3JhZHVhdGlvbi1jYXAgdGV4dC13YXJuaW5nXCI+PC9pPiB7eyBpdGVtLlRpdGxlIH19XG4gICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwiZC1ibG9ja1wiPnt7IGl0ZW0uTG9jYWxBbm8gfX08L3NtYWxsPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgICBgLFxufSk7XG5cbnZhciBhcHAgPSBuZXcgVnVlKHtcbiAgICBlbDogYCNhcHAtZm9ybWFjYW9gLFxuICAgIHRlbXBsYXRlOiBgPGFwcC1mb3JtYWNhbyAvPmBcbn0pIl19
