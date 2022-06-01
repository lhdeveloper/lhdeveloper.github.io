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
        Title: "TypeScript 1",
        LocalAno: "Alura - Maio/2022"
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
  template: "\n    <div class=\"mx-auto w-50\">\n        <h3 class=\"text-center\">{{ infos.Title }}</h3>\n        <ul class=\"list-group list-group-flush formacao\">\n            <li class=\"list-group-item text-uppercase wow fadeInUp\" \n                v-for=\"(item, index) in formacao\" \n                :data-wow-delay=\"'.' + index + 's'\" :class=\"index == 0 ? 'oneline' : ''\"\n            >\n                <i class=\"fas fa-graduation-cap text-warning\"></i> {{ item.Title }}\n                <small class=\"d-block\">{{ item.LocalAno }}</small>\n            </li>\n        </ul>\n    </div>\n    "
});
var app = new Vue({
  el: "#app-formacao",
  template: "<app-formacao />"
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvY29tcG9uZW50cy9mb3JtYWNhby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsR0FBRyxDQUFDLFNBQUosaUJBQThCO0FBQzFCLEVBQUEsSUFEMEIsa0JBQ25CO0FBQ0gsV0FBTztBQUNILE1BQUEsS0FBSyxFQUFFO0FBQ0gsUUFBQSxLQUFLLDJCQURGO0FBRUgsUUFBQSxRQUFRO0FBRkwsT0FESjtBQUtILE1BQUEsUUFBUSxFQUFFLENBQ047QUFDSSxRQUFBLEtBQUs7QUFEVCxPQURNLEVBSU47QUFDSSxRQUFBLEtBQUssZ0JBRFQ7QUFFSSxRQUFBLFFBQVE7QUFGWixPQUpNLEVBUU47QUFDSSxRQUFBLEtBQUssOERBRFQ7QUFFSSxRQUFBLFFBQVE7QUFGWixPQVJNLEVBWU47QUFDSSxRQUFBLEtBQUssOENBRFQ7QUFFSSxRQUFBLFFBQVE7QUFGWixPQVpNLEVBZ0JOO0FBQ0ksUUFBQSxLQUFLLFlBRFQ7QUFFSSxRQUFBLFFBQVE7QUFGWixPQWhCTSxFQW9CTjtBQUNJLFFBQUEsS0FBSyxtQkFEVDtBQUVJLFFBQUEsUUFBUTtBQUZaLE9BcEJNLEVBd0JOO0FBQ0ksUUFBQSxLQUFLLHVEQURUO0FBRUksUUFBQSxRQUFRO0FBRlosT0F4Qk0sRUE0Qk47QUFDSSxRQUFBLEtBQUsscUJBRFQ7QUFFSSxRQUFBLFFBQVE7QUFGWixPQTVCTTtBQUxQLEtBQVA7QUF1Q0gsR0F6Q3lCO0FBMEMxQixFQUFBLFFBQVE7QUExQ2tCLENBQTlCO0FBMERBLElBQUksR0FBRyxHQUFHLElBQUksR0FBSixDQUFRO0FBQ2QsRUFBQSxFQUFFLGlCQURZO0FBRWQsRUFBQSxRQUFRO0FBRk0sQ0FBUixDQUFWIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiVnVlLmNvbXBvbmVudChgYXBwLWZvcm1hY2FvYCwge1xuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpbmZvczoge1xuICAgICAgICAgICAgICAgIFRpdGxlOiBgRm9ybWHDp8OjbyAvIEN1cnNvc2AsXG4gICAgICAgICAgICAgICAgU3VidGl0bGU6IGBgXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZm9ybWFjYW86IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFRpdGxlOiBgRW5zaW5vIE3DqWRpbyBDb21wbGV0b2AsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFRpdGxlOiBgVHlwZVNjcmlwdCAxYCxcbiAgICAgICAgICAgICAgICAgICAgTG9jYWxBbm86IGBBbHVyYSAtIE1haW8vMjAyMmBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgVGl0bGU6IGBBY2Vzc2liaWxpZGFkZSBXZWIgLSBJbnRyb2R1w6fDo28gYSBEZXNpZ25zIEluY2x1c2l2b3NgLFxuICAgICAgICAgICAgICAgICAgICBMb2NhbEFubzogYEFsdXJhIC0gQWJyaWwvMjAxOGBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgVGl0bGU6IGBQZXJmb3JtYW5jZSBXZWIgSSAtIE90aW1pemFuZG8gbyBGcm9udC1lbmRgLFxuICAgICAgICAgICAgICAgICAgICBMb2NhbEFubzogYEFsdXJhIC0gQWJyaWwvMjAxOGBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgVGl0bGU6IGBMZXNzIENTU2AsXG4gICAgICAgICAgICAgICAgICAgIExvY2FsQW5vOiBgQWx1cmEgLSBBYnJpbC8yMDE4YFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBUaXRsZTogYEhUTUw1IGUgQ1NTMyBJSWAsXG4gICAgICAgICAgICAgICAgICAgIExvY2FsQW5vOiBgQWx1cmEgLSBNYXLDp28vMjAxOGBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgVGl0bGU6IGBQcm9ncmFtYcOnw6NvIEZyb250LWVuZCBjb20gSmF2YXNjcmlwdCBlIGpRdWVyeWAsXG4gICAgICAgICAgICAgICAgICAgIExvY2FsQW5vOiBgQ2FlbHVtIC0gU2V0ZW1icm8vMjAxM2BcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgVGl0bGU6IGBYSFRNTCAvIFRhYmxlbGVzc2AsXG4gICAgICAgICAgICAgICAgICAgIExvY2FsQW5vOiBgSW1wYWN0YSAtIEFnb3N0by8yMDEyYFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cIm14LWF1dG8gdy01MFwiPlxuICAgICAgICA8aDMgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPnt7IGluZm9zLlRpdGxlIH19PC9oMz5cbiAgICAgICAgPHVsIGNsYXNzPVwibGlzdC1ncm91cCBsaXN0LWdyb3VwLWZsdXNoIGZvcm1hY2FvXCI+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0gdGV4dC11cHBlcmNhc2Ugd293IGZhZGVJblVwXCIgXG4gICAgICAgICAgICAgICAgdi1mb3I9XCIoaXRlbSwgaW5kZXgpIGluIGZvcm1hY2FvXCIgXG4gICAgICAgICAgICAgICAgOmRhdGEtd293LWRlbGF5PVwiJy4nICsgaW5kZXggKyAncydcIiA6Y2xhc3M9XCJpbmRleCA9PSAwID8gJ29uZWxpbmUnIDogJydcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWdyYWR1YXRpb24tY2FwIHRleHQtd2FybmluZ1wiPjwvaT4ge3sgaXRlbS5UaXRsZSB9fVxuICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cImQtYmxvY2tcIj57eyBpdGVtLkxvY2FsQW5vIH19PC9zbWFsbD5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICAgYCxcbn0pO1xuXG52YXIgYXBwID0gbmV3IFZ1ZSh7XG4gICAgZWw6IGAjYXBwLWZvcm1hY2FvYCxcbiAgICB0ZW1wbGF0ZTogYDxhcHAtZm9ybWFjYW8gLz5gXG59KSJdfQ==
