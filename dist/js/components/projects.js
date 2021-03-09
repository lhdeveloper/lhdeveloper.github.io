(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Vue.component("app-projects", {
  data: function data() {
    var distPatch = "./dist/images/projects";
    return {
      infos: {
        Title: "Projetos",
        Subtitle: "Alguns projetos realizados ao longo dos anos."
      },
      projetos: [{
        Title: "Pinheiro Neto Advogados",
        Description: "Website desenvolvido em SharePoint pela SimbioX, atrav\xE9s de um \"site pronto\" em html enviado pelo cliente feito por outra empresa.",
        URL: "https://pinheironeto.com.br",
        Screenshot: distPatch + "/pna.jpeg",
        Category: 'SharePoint',
        Year: "2014",
        OtherInfos: {
          Platform: "SharePoint",
          Languages: ['HTML', 'CSS3', 'PNP', 'REST', 'JS', 'jQuery']
        }
      }, {
        Title: "BMA Advogados",
        Description: "Website desenvolvido em SharePoint pela SimbioX, segunda vers\xE3o do site atualizado em 2018.",
        URL: "https://bmalaw.com.br",
        Screenshot: distPatch + "/bma.jpeg",
        Category: 'SharePoint',
        Year: "2018",
        OtherInfos: {
          Platform: "SharePoint",
          Languages: ['HTML5', 'SASS', 'PNP', 'VueJS', 'JS', 'jQuery']
        }
      }, {
        Title: "Gueller Advogados (Em dev)",
        Description: "Website desenvolvido em Wordpress para a SimbioX, atualizando o site antigo que estava defasado.",
        URL: "https://wp.simbiox.com.br/gueller",
        Screenshot: distPatch + "/bma.jpeg",
        Category: 'Wordpress',
        Year: "2018",
        OtherInfos: {
          Platform: "SharePoint",
          Languages: ['HTML5', 'SASS', 'PNP', 'VueJS', 'JS', 'jQuery']
        }
      }]
    };
  },
  template: "\n    <element>\n        <h3 class=\"text-center text-secondary\">{{ infos.Title }}</h3>\n        <small class=\"d-block text-center\" v-if=\"infos.Subtitle\">{{ infos.Subtitle }}</small>\n\n        <div class=\"row projetos mt-4\">\n            <div class=\"col-sm-3 projeto wow fadeIn\" v-for=\"(item, index) in projetos\" :data-wow-delay=\"'.' + index + 's'\">\n                <div class=\"card\">\n                    <img :src=\"item.Screenshot\" class=\"card-img-top\" :alt=\"item.Title\">\n                    <div class=\"card-body\">\n                        <div class=\"badgs mb-1\">\n                            <span class=\"badge badge-secondary mr-1\" v-for=\"lang in item.OtherInfos.Languages\">{{ lang }}</span>\n                        </div>\n                        <h5 class=\"card-title\">{{ item.Title }}</h5>\n                        <p class=\"card-text\">{{ item.Description }}</p>\n                        <a :href=\"item.URL\" class=\"btn btn-secondary btn-sm\" target=\"_blank\">Visitar</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </element>\n    "
});
var app = new Vue({
  el: "#app-projects",
  template: "<app-projects />"
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvY29tcG9uZW50cy9wcm9qZWN0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsR0FBRyxDQUFDLFNBQUosaUJBQThCO0FBQzFCLEVBQUEsSUFEMEIsa0JBQ25CO0FBQ0gsUUFBSSxTQUFTLDJCQUFiO0FBQ0EsV0FBTztBQUNILE1BQUEsS0FBSyxFQUFFO0FBQ0gsUUFBQSxLQUFLLFlBREY7QUFFSCxRQUFBLFFBQVE7QUFGTCxPQURKO0FBS0gsTUFBQSxRQUFRLEVBQUUsQ0FDTjtBQUNJLFFBQUEsS0FBSywyQkFEVDtBQUVJLFFBQUEsV0FBVywySUFGZjtBQUdJLFFBQUEsR0FBRywrQkFIUDtBQUlJLFFBQUEsVUFBVSxFQUFLLFNBQUwsY0FKZDtBQUtJLFFBQUEsUUFBUSxFQUFFLFlBTGQ7QUFNSSxRQUFBLElBQUksUUFOUjtBQU9JLFFBQUEsVUFBVSxFQUFFO0FBQ1IsVUFBQSxRQUFRLGNBREE7QUFFUixVQUFBLFNBQVMsRUFBRSxDQUFDLE1BQUQsRUFBUyxNQUFULEVBQWlCLEtBQWpCLEVBQXdCLE1BQXhCLEVBQWdDLElBQWhDLEVBQXNDLFFBQXRDO0FBRkg7QUFQaEIsT0FETSxFQWFOO0FBQ0ksUUFBQSxLQUFLLGlCQURUO0FBRUksUUFBQSxXQUFXLGtHQUZmO0FBR0ksUUFBQSxHQUFHLHlCQUhQO0FBSUksUUFBQSxVQUFVLEVBQUssU0FBTCxjQUpkO0FBS0ksUUFBQSxRQUFRLEVBQUUsWUFMZDtBQU1JLFFBQUEsSUFBSSxRQU5SO0FBT0ksUUFBQSxVQUFVLEVBQUU7QUFDUixVQUFBLFFBQVEsY0FEQTtBQUVSLFVBQUEsU0FBUyxFQUFFLENBQUMsT0FBRCxFQUFVLE1BQVYsRUFBa0IsS0FBbEIsRUFBeUIsT0FBekIsRUFBa0MsSUFBbEMsRUFBd0MsUUFBeEM7QUFGSDtBQVBoQixPQWJNLEVBeUJOO0FBQ0ksUUFBQSxLQUFLLDhCQURUO0FBRUksUUFBQSxXQUFXLG9HQUZmO0FBR0ksUUFBQSxHQUFHLHFDQUhQO0FBSUksUUFBQSxVQUFVLEVBQUssU0FBTCxjQUpkO0FBS0ksUUFBQSxRQUFRLEVBQUUsV0FMZDtBQU1JLFFBQUEsSUFBSSxRQU5SO0FBT0ksUUFBQSxVQUFVLEVBQUU7QUFDUixVQUFBLFFBQVEsY0FEQTtBQUVSLFVBQUEsU0FBUyxFQUFFLENBQUMsT0FBRCxFQUFVLE1BQVYsRUFBa0IsS0FBbEIsRUFBeUIsT0FBekIsRUFBa0MsSUFBbEMsRUFBd0MsUUFBeEM7QUFGSDtBQVBoQixPQXpCTTtBQUxQLEtBQVA7QUE0Q0gsR0EvQ3lCO0FBZ0QxQixFQUFBLFFBQVE7QUFoRGtCLENBQTlCO0FBd0VBLElBQUksR0FBRyxHQUFHLElBQUksR0FBSixDQUFRO0FBQ2QsRUFBQSxFQUFFLGlCQURZO0FBRWQsRUFBQSxRQUFRO0FBRk0sQ0FBUixDQUFWIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiVnVlLmNvbXBvbmVudChgYXBwLXByb2plY3RzYCwge1xuICAgIGRhdGEoKSB7XG4gICAgICAgIHZhciBkaXN0UGF0Y2ggPSBgLi9kaXN0L2ltYWdlcy9wcm9qZWN0c2A7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpbmZvczoge1xuICAgICAgICAgICAgICAgIFRpdGxlOiBgUHJvamV0b3NgLFxuICAgICAgICAgICAgICAgIFN1YnRpdGxlOiBgQWxndW5zIHByb2pldG9zIHJlYWxpemFkb3MgYW8gbG9uZ28gZG9zIGFub3MuYFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByb2pldG9zOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBUaXRsZTogYFBpbmhlaXJvIE5ldG8gQWR2b2dhZG9zYCxcbiAgICAgICAgICAgICAgICAgICAgRGVzY3JpcHRpb246IGBXZWJzaXRlIGRlc2Vudm9sdmlkbyBlbSBTaGFyZVBvaW50IHBlbGEgU2ltYmlvWCwgYXRyYXbDqXMgZGUgdW0gXCJzaXRlIHByb250b1wiIGVtIGh0bWwgZW52aWFkbyBwZWxvIGNsaWVudGUgZmVpdG8gcG9yIG91dHJhIGVtcHJlc2EuYCxcbiAgICAgICAgICAgICAgICAgICAgVVJMOiBgaHR0cHM6Ly9waW5oZWlyb25ldG8uY29tLmJyYCxcbiAgICAgICAgICAgICAgICAgICAgU2NyZWVuc2hvdDogYCR7ZGlzdFBhdGNofS9wbmEuanBlZ2AsXG4gICAgICAgICAgICAgICAgICAgIENhdGVnb3J5OiAnU2hhcmVQb2ludCcsXG4gICAgICAgICAgICAgICAgICAgIFllYXI6IGAyMDE0YCxcbiAgICAgICAgICAgICAgICAgICAgT3RoZXJJbmZvczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgUGxhdGZvcm06IGBTaGFyZVBvaW50YCxcbiAgICAgICAgICAgICAgICAgICAgICAgIExhbmd1YWdlczogWydIVE1MJywgJ0NTUzMnLCAnUE5QJywgJ1JFU1QnLCAnSlMnLCAnalF1ZXJ5J10sXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgVGl0bGU6IGBCTUEgQWR2b2dhZG9zYCxcbiAgICAgICAgICAgICAgICAgICAgRGVzY3JpcHRpb246IGBXZWJzaXRlIGRlc2Vudm9sdmlkbyBlbSBTaGFyZVBvaW50IHBlbGEgU2ltYmlvWCwgc2VndW5kYSB2ZXJzw6NvIGRvIHNpdGUgYXR1YWxpemFkbyBlbSAyMDE4LmAsXG4gICAgICAgICAgICAgICAgICAgIFVSTDogYGh0dHBzOi8vYm1hbGF3LmNvbS5icmAsXG4gICAgICAgICAgICAgICAgICAgIFNjcmVlbnNob3Q6IGAke2Rpc3RQYXRjaH0vYm1hLmpwZWdgLFxuICAgICAgICAgICAgICAgICAgICBDYXRlZ29yeTogJ1NoYXJlUG9pbnQnLFxuICAgICAgICAgICAgICAgICAgICBZZWFyOiBgMjAxOGAsXG4gICAgICAgICAgICAgICAgICAgIE90aGVySW5mb3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFBsYXRmb3JtOiBgU2hhcmVQb2ludGAsXG4gICAgICAgICAgICAgICAgICAgICAgICBMYW5ndWFnZXM6IFsnSFRNTDUnLCAnU0FTUycsICdQTlAnLCAnVnVlSlMnLCAnSlMnLCAnalF1ZXJ5J10sXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgVGl0bGU6IGBHdWVsbGVyIEFkdm9nYWRvcyAoRW0gZGV2KWAsXG4gICAgICAgICAgICAgICAgICAgIERlc2NyaXB0aW9uOiBgV2Vic2l0ZSBkZXNlbnZvbHZpZG8gZW0gV29yZHByZXNzIHBhcmEgYSBTaW1iaW9YLCBhdHVhbGl6YW5kbyBvIHNpdGUgYW50aWdvIHF1ZSBlc3RhdmEgZGVmYXNhZG8uYCxcbiAgICAgICAgICAgICAgICAgICAgVVJMOiBgaHR0cHM6Ly93cC5zaW1iaW94LmNvbS5ici9ndWVsbGVyYCxcbiAgICAgICAgICAgICAgICAgICAgU2NyZWVuc2hvdDogYCR7ZGlzdFBhdGNofS9ibWEuanBlZ2AsXG4gICAgICAgICAgICAgICAgICAgIENhdGVnb3J5OiAnV29yZHByZXNzJyxcbiAgICAgICAgICAgICAgICAgICAgWWVhcjogYDIwMThgLFxuICAgICAgICAgICAgICAgICAgICBPdGhlckluZm9zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBQbGF0Zm9ybTogYFNoYXJlUG9pbnRgLFxuICAgICAgICAgICAgICAgICAgICAgICAgTGFuZ3VhZ2VzOiBbJ0hUTUw1JywgJ1NBU1MnLCAnUE5QJywgJ1Z1ZUpTJywgJ0pTJywgJ2pRdWVyeSddLFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9XG4gICAgfSxcbiAgICB0ZW1wbGF0ZTogYFxuICAgIDxlbGVtZW50PlxuICAgICAgICA8aDMgY2xhc3M9XCJ0ZXh0LWNlbnRlciB0ZXh0LXNlY29uZGFyeVwiPnt7IGluZm9zLlRpdGxlIH19PC9oMz5cbiAgICAgICAgPHNtYWxsIGNsYXNzPVwiZC1ibG9jayB0ZXh0LWNlbnRlclwiIHYtaWY9XCJpbmZvcy5TdWJ0aXRsZVwiPnt7IGluZm9zLlN1YnRpdGxlIH19PC9zbWFsbD5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHByb2pldG9zIG10LTRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMyBwcm9qZXRvIHdvdyBmYWRlSW5cIiB2LWZvcj1cIihpdGVtLCBpbmRleCkgaW4gcHJvamV0b3NcIiA6ZGF0YS13b3ctZGVsYXk9XCInLicgKyBpbmRleCArICdzJ1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgOnNyYz1cIml0ZW0uU2NyZWVuc2hvdFwiIGNsYXNzPVwiY2FyZC1pbWctdG9wXCIgOmFsdD1cIml0ZW0uVGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJhZGdzIG1iLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlIGJhZGdlLXNlY29uZGFyeSBtci0xXCIgdi1mb3I9XCJsYW5nIGluIGl0ZW0uT3RoZXJJbmZvcy5MYW5ndWFnZXNcIj57eyBsYW5nIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJjYXJkLXRpdGxlXCI+e3sgaXRlbS5UaXRsZSB9fTwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImNhcmQtdGV4dFwiPnt7IGl0ZW0uRGVzY3JpcHRpb24gfX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSA6aHJlZj1cIml0ZW0uVVJMXCIgY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeSBidG4tc21cIiB0YXJnZXQ9XCJfYmxhbmtcIj5WaXNpdGFyPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2VsZW1lbnQ+XG4gICAgYFxufSk7XG5cbnZhciBhcHAgPSBuZXcgVnVlKHtcbiAgICBlbDogYCNhcHAtcHJvamVjdHNgLFxuICAgIHRlbXBsYXRlOiBgPGFwcC1wcm9qZWN0cyAvPmBcbn0pIl19
