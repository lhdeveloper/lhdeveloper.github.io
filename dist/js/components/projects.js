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
      }]
    };
  },
  template: "\n    <element>\n        <h3 class=\"text-center text-secondary\">{{ infos.Title }}</h3>\n        <small class=\"d-block text-center\" v-if=\"infos.Subtitle\">{{ infos.Subtitle }}</small>\n\n        <ul class=\"nav nav-tabs justify-content-center\" role=\"tablist\">\n            <li class=\"nav-item\">\n                <a class=\"nav-link active\" href=\"#sharepoint\">SharePoint</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"#wordpress\">Wordpress</a>\n            </li>\n        </ul>\n\n        <div class=\"tab-content\" id=\"myTabContent\">\n            <!-- sharepoint category -->\n            <div class=\"tab-pane fade show active\" id=\"sharepoint\" role=\"tabpanel\" aria-labelledby=\"sharepoint-tab\">\n                <div class=\"row projetos mt-4\">\n                    <div class=\"col-sm-3 projeto wow fadeIn\" v-for=\"(item, index) in projetos\" v-if=\"item.Category == 'SharePoint'\" :data-wow-delay=\"'.' + index + 's'\">\n                        <div class=\"card\">\n                            <img :src=\"item.Screenshot\" class=\"card-img-top\" :alt=\"item.Title\">\n                            <div class=\"card-body\">\n                                <div class=\"badgs mb-1\">\n                                    <span class=\"badge badge-secondary mr-1\" v-for=\"lang in item.OtherInfos.Languages\">{{ lang }}</span>\n                                </div>\n                                <h5 class=\"card-title\">{{ item.Title }}</h5>\n                                <p class=\"card-text\">{{ item.Description }}</p>\n                                <a :href=\"item.URL\" class=\"btn btn-secondary btn-sm\" target=\"_blank\">Visitar</a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <!-- wordpress category -->\n            <div class=\"tab-pane fade\" id=\"wordpress\" role=\"tabpanel\" aria-labelledby=\"wordpress-tab\">\n                <div class=\"row projetos mt-4\">\n                    <div class=\"col-sm-3 projeto wow fadeIn\" v-for=\"(item, index) in projetos\" v-if=\"item.Category == 'Wordpress'\" :data-wow-delay=\"'.' + index + 's'\">\n                        <div class=\"card\">\n                            <img :src=\"item.Screenshot\" class=\"card-img-top\" :alt=\"item.Title\">\n                            <div class=\"card-body\">\n                                <div class=\"badgs mb-1\">\n                                    <span class=\"badge badge-secondary mr-1\" v-for=\"lang in item.OtherInfos.Languages\">{{ lang }}</span>\n                                </div>\n                                <h5 class=\"card-title\">{{ item.Title }}</h5>\n                                <p class=\"card-text\">{{ item.Description }}</p>\n                                <a :href=\"item.URL\" class=\"btn btn-secondary btn-sm\" target=\"_blank\">Visitar</a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        \n    </element>\n    "
});
var app = new Vue({
  el: "#app-projects",
  template: "<app-projects />"
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvY29tcG9uZW50cy9wcm9qZWN0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsR0FBRyxDQUFDLFNBQUosaUJBQThCO0FBQzFCLEVBQUEsSUFEMEIsa0JBQ25CO0FBQ0gsUUFBSSxTQUFTLDJCQUFiO0FBQ0EsV0FBTztBQUNILE1BQUEsS0FBSyxFQUFFO0FBQ0gsUUFBQSxLQUFLLFlBREY7QUFFSCxRQUFBLFFBQVE7QUFGTCxPQURKO0FBS0gsTUFBQSxRQUFRLEVBQUUsQ0FDTjtBQUNJLFFBQUEsS0FBSywyQkFEVDtBQUVJLFFBQUEsV0FBVywySUFGZjtBQUdJLFFBQUEsR0FBRywrQkFIUDtBQUlJLFFBQUEsVUFBVSxFQUFLLFNBQUwsY0FKZDtBQUtJLFFBQUEsUUFBUSxFQUFFLFlBTGQ7QUFNSSxRQUFBLElBQUksUUFOUjtBQU9JLFFBQUEsVUFBVSxFQUFFO0FBQ1IsVUFBQSxRQUFRLGNBREE7QUFFUixVQUFBLFNBQVMsRUFBRSxDQUFDLE1BQUQsRUFBUyxNQUFULEVBQWlCLEtBQWpCLEVBQXdCLE1BQXhCLEVBQWdDLElBQWhDLEVBQXNDLFFBQXRDO0FBRkg7QUFQaEIsT0FETTtBQUxQLEtBQVA7QUFvQkgsR0F2QnlCO0FBd0IxQixFQUFBLFFBQVE7QUF4QmtCLENBQTlCO0FBbUZBLElBQUksR0FBRyxHQUFHLElBQUksR0FBSixDQUFRO0FBQ2QsRUFBQSxFQUFFLGlCQURZO0FBRWQsRUFBQSxRQUFRO0FBRk0sQ0FBUixDQUFWIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiVnVlLmNvbXBvbmVudChgYXBwLXByb2plY3RzYCwge1xuICAgIGRhdGEoKSB7XG4gICAgICAgIHZhciBkaXN0UGF0Y2ggPSBgLi9kaXN0L2ltYWdlcy9wcm9qZWN0c2A7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpbmZvczoge1xuICAgICAgICAgICAgICAgIFRpdGxlOiBgUHJvamV0b3NgLFxuICAgICAgICAgICAgICAgIFN1YnRpdGxlOiBgQWxndW5zIHByb2pldG9zIHJlYWxpemFkb3MgYW8gbG9uZ28gZG9zIGFub3MuYFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByb2pldG9zOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBUaXRsZTogYFBpbmhlaXJvIE5ldG8gQWR2b2dhZG9zYCxcbiAgICAgICAgICAgICAgICAgICAgRGVzY3JpcHRpb246IGBXZWJzaXRlIGRlc2Vudm9sdmlkbyBlbSBTaGFyZVBvaW50IHBlbGEgU2ltYmlvWCwgYXRyYXbDqXMgZGUgdW0gXCJzaXRlIHByb250b1wiIGVtIGh0bWwgZW52aWFkbyBwZWxvIGNsaWVudGUgZmVpdG8gcG9yIG91dHJhIGVtcHJlc2EuYCxcbiAgICAgICAgICAgICAgICAgICAgVVJMOiBgaHR0cHM6Ly9waW5oZWlyb25ldG8uY29tLmJyYCxcbiAgICAgICAgICAgICAgICAgICAgU2NyZWVuc2hvdDogYCR7ZGlzdFBhdGNofS9wbmEuanBlZ2AsXG4gICAgICAgICAgICAgICAgICAgIENhdGVnb3J5OiAnU2hhcmVQb2ludCcsXG4gICAgICAgICAgICAgICAgICAgIFllYXI6IGAyMDE0YCxcbiAgICAgICAgICAgICAgICAgICAgT3RoZXJJbmZvczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgUGxhdGZvcm06IGBTaGFyZVBvaW50YCxcbiAgICAgICAgICAgICAgICAgICAgICAgIExhbmd1YWdlczogWydIVE1MJywgJ0NTUzMnLCAnUE5QJywgJ1JFU1QnLCAnSlMnLCAnalF1ZXJ5J10sXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHRlbXBsYXRlOiBgXG4gICAgPGVsZW1lbnQ+XG4gICAgICAgIDxoMyBjbGFzcz1cInRleHQtY2VudGVyIHRleHQtc2Vjb25kYXJ5XCI+e3sgaW5mb3MuVGl0bGUgfX08L2gzPlxuICAgICAgICA8c21hbGwgY2xhc3M9XCJkLWJsb2NrIHRleHQtY2VudGVyXCIgdi1pZj1cImluZm9zLlN1YnRpdGxlXCI+e3sgaW5mb3MuU3VidGl0bGUgfX08L3NtYWxsPlxuXG4gICAgICAgIDx1bCBjbGFzcz1cIm5hdiBuYXYtdGFicyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCIgcm9sZT1cInRhYmxpc3RcIj5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJuYXYtbGluayBhY3RpdmVcIiBocmVmPVwiI3NoYXJlcG9pbnRcIj5TaGFyZVBvaW50PC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJuYXYtbGlua1wiIGhyZWY9XCIjd29yZHByZXNzXCI+V29yZHByZXNzPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFiLWNvbnRlbnRcIiBpZD1cIm15VGFiQ29udGVudFwiPlxuICAgICAgICAgICAgPCEtLSBzaGFyZXBvaW50IGNhdGVnb3J5IC0tPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYi1wYW5lIGZhZGUgc2hvdyBhY3RpdmVcIiBpZD1cInNoYXJlcG9pbnRcIiByb2xlPVwidGFicGFuZWxcIiBhcmlhLWxhYmVsbGVkYnk9XCJzaGFyZXBvaW50LXRhYlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgcHJvamV0b3MgbXQtNFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTMgcHJvamV0byB3b3cgZmFkZUluXCIgdi1mb3I9XCIoaXRlbSwgaW5kZXgpIGluIHByb2pldG9zXCIgdi1pZj1cIml0ZW0uQ2F0ZWdvcnkgPT0gJ1NoYXJlUG9pbnQnXCIgOmRhdGEtd293LWRlbGF5PVwiJy4nICsgaW5kZXggKyAncydcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyA6c3JjPVwiaXRlbS5TY3JlZW5zaG90XCIgY2xhc3M9XCJjYXJkLWltZy10b3BcIiA6YWx0PVwiaXRlbS5UaXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJhZGdzIG1iLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmFkZ2UgYmFkZ2Utc2Vjb25kYXJ5IG1yLTFcIiB2LWZvcj1cImxhbmcgaW4gaXRlbS5PdGhlckluZm9zLkxhbmd1YWdlc1wiPnt7IGxhbmcgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJjYXJkLXRpdGxlXCI+e3sgaXRlbS5UaXRsZSB9fTwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiY2FyZC10ZXh0XCI+e3sgaXRlbS5EZXNjcmlwdGlvbiB9fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgOmhyZWY9XCJpdGVtLlVSTFwiIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLXNtXCIgdGFyZ2V0PVwiX2JsYW5rXCI+VmlzaXRhcjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8IS0tIHdvcmRwcmVzcyBjYXRlZ29yeSAtLT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWItcGFuZSBmYWRlXCIgaWQ9XCJ3b3JkcHJlc3NcIiByb2xlPVwidGFicGFuZWxcIiBhcmlhLWxhYmVsbGVkYnk9XCJ3b3JkcHJlc3MtdGFiXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBwcm9qZXRvcyBtdC00XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMyBwcm9qZXRvIHdvdyBmYWRlSW5cIiB2LWZvcj1cIihpdGVtLCBpbmRleCkgaW4gcHJvamV0b3NcIiB2LWlmPVwiaXRlbS5DYXRlZ29yeSA9PSAnV29yZHByZXNzJ1wiIDpkYXRhLXdvdy1kZWxheT1cIicuJyArIGluZGV4ICsgJ3MnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgOnNyYz1cIml0ZW0uU2NyZWVuc2hvdFwiIGNsYXNzPVwiY2FyZC1pbWctdG9wXCIgOmFsdD1cIml0ZW0uVGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJiYWRncyBtYi0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlIGJhZGdlLXNlY29uZGFyeSBtci0xXCIgdi1mb3I9XCJsYW5nIGluIGl0ZW0uT3RoZXJJbmZvcy5MYW5ndWFnZXNcIj57eyBsYW5nIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVwiY2FyZC10aXRsZVwiPnt7IGl0ZW0uVGl0bGUgfX08L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImNhcmQtdGV4dFwiPnt7IGl0ZW0uRGVzY3JpcHRpb24gfX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIDpocmVmPVwiaXRlbS5VUkxcIiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5IGJ0bi1zbVwiIHRhcmdldD1cIl9ibGFua1wiPlZpc2l0YXI8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgXG4gICAgPC9lbGVtZW50PlxuICAgIGBcbn0pO1xuXG52YXIgYXBwID0gbmV3IFZ1ZSh7XG4gICAgZWw6IGAjYXBwLXByb2plY3RzYCxcbiAgICB0ZW1wbGF0ZTogYDxhcHAtcHJvamVjdHMgLz5gXG59KSJdfQ==
