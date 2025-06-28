self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Projects/ProjectsStyles.js":
/*!***************************************************!*\
  !*** ./src/components/Projects/ProjectsStyles.js ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Img": function() { return /* binding */ Img; },
/* harmony export */   "GridContainer": function() { return /* binding */ GridContainer; },
/* harmony export */   "BlogCard": function() { return /* binding */ BlogCard; },
/* harmony export */   "TitleContent": function() { return /* binding */ TitleContent; },
/* harmony export */   "HeaderThree": function() { return /* binding */ HeaderThree; },
/* harmony export */   "Hr": function() { return /* binding */ Hr; },
/* harmony export */   "CardInfo": function() { return /* binding */ CardInfo; },
/* harmony export */   "UtilityList": function() { return /* binding */ UtilityList; },
/* harmony export */   "ExternalLinks": function() { return /* binding */ ExternalLinks; },
/* harmony export */   "TagList": function() { return /* binding */ TagList; },
/* harmony export */   "Tag": function() { return /* binding */ Tag; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var Img = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.img.withConfig({
  displayName: "ProjectsStyles__Img",
  componentId: "sc-l76idc-0"
})(["width:100%;height:220px;object-fit:cover;border-top-left-radius:10px;border-top-right-radius:10px;"]);
var GridContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.section.withConfig({
  displayName: "ProjectsStyles__GridContainer",
  componentId: "sc-l76idc-1"
})(["display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:2rem;padding:2.5rem;@media ", "{grid-template-columns:repeat(2,1fr);padding:2rem;}@media ", "{grid-template-columns:1fr;padding:1.5rem 1rem;}"], function (props) {
  return props.theme.breakpoints.md;
}, function (props) {
  return props.theme.breakpoints.sm;
});
var BlogCard = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "ProjectsStyles__BlogCard",
  componentId: "sc-l76idc-2"
})(["background-color:#0f1624;border-radius:10px;box-shadow:0 4px 12px rgba(80,78,78,0.3);width:100%;max-width:340px;display:flex;flex-direction:column;overflow:hidden;"]);
var TitleContent = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "ProjectsStyles__TitleContent",
  componentId: "sc-l76idc-3"
})(["text-align:center;padding:1rem;"]);
var HeaderThree = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.h3.withConfig({
  displayName: "ProjectsStyles__HeaderThree",
  componentId: "sc-l76idc-4"
})(["font-weight:500;letter-spacing:1px;color:#9cc9e3;font-size:", ";margin:0.5rem 0;"], function (props) {
  return props.title ? '2.2rem' : '1.8rem';
});
var Hr = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.hr.withConfig({
  displayName: "ProjectsStyles__Hr",
  componentId: "sc-l76idc-5"
})(["width:40px;height:3px;margin:10px auto;border:0;background:#d0bb57;"]);
var CardInfo = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.p.withConfig({
  displayName: "ProjectsStyles__CardInfo",
  componentId: "sc-l76idc-6"
})(["padding:0 1.5rem;color:#e4e6e7;font-size:1.4rem;line-height:1.6;text-align:justify;@media ", "{padding:0 1rem;}"], function (props) {
  return props.theme.breakpoints.sm;
});
var UtilityList = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.ul.withConfig({
  displayName: "ProjectsStyles__UtilityList",
  componentId: "sc-l76idc-7"
})(["list-style:none;display:flex;justify-content:space-around;margin:1.5rem 0;padding:0 1rem;"]);
var ExternalLinks = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.a.withConfig({
  displayName: "ProjectsStyles__ExternalLinks",
  componentId: "sc-l76idc-8"
})(["color:#d4c0c0;font-size:1.4rem;padding:0.8rem 1.2rem;background:#6b3030;border-radius:12px;transition:0.3s ease;&:hover{background:#801414;}"]);
var TagList = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.ul.withConfig({
  displayName: "ProjectsStyles__TagList",
  componentId: "sc-l76idc-9"
})(["display:flex;justify-content:center;flex-wrap:wrap;gap:0.8rem;padding:1rem 1.5rem;"]);
var Tag = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.li.withConfig({
  displayName: "ProjectsStyles__Tag",
  componentId: "sc-l76idc-10"
})(["background:#1e1e1e;color:#d8bfbf;font-size:1.2rem;padding:0.4rem 0.8rem;border-radius:10px;"]);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvamVjdHMvUHJvamVjdHNTdHlsZXMuanMiXSwibmFtZXMiOlsiSW1nIiwic3R5bGVkIiwiR3JpZENvbnRhaW5lciIsInByb3BzIiwidGhlbWUiLCJicmVha3BvaW50cyIsIm1kIiwic20iLCJCbG9nQ2FyZCIsIlRpdGxlQ29udGVudCIsIkhlYWRlclRocmVlIiwidGl0bGUiLCJIciIsIkNhcmRJbmZvIiwiVXRpbGl0eUxpc3QiLCJFeHRlcm5hbExpbmtzIiwiVGFnTGlzdCIsIlRhZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRU8sSUFBTUEsR0FBRyxHQUFHQyxxRUFBSDtBQUFBO0FBQUE7QUFBQSwwR0FBVDtBQVFBLElBQU1DLGFBQWEsR0FBR0QseUVBQUg7QUFBQTtBQUFBO0FBQUEsaU9BTWYsVUFBQ0UsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCQyxFQUFuQztBQUFBLENBTmUsRUFXZixVQUFDSCxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JFLEVBQW5DO0FBQUEsQ0FYZSxDQUFuQjtBQWlCQSxJQUFNQyxRQUFRLEdBQUdQLHFFQUFIO0FBQUE7QUFBQTtBQUFBLDJLQUFkO0FBV0EsSUFBTVEsWUFBWSxHQUFHUixxRUFBSDtBQUFBO0FBQUE7QUFBQSx1Q0FBbEI7QUFLQSxJQUFNUyxXQUFXLEdBQUdULG9FQUFIO0FBQUE7QUFBQTtBQUFBLHlGQUlULFVBQUNFLEtBQUQ7QUFBQSxTQUFZQSxLQUFLLENBQUNRLEtBQU4sR0FBYyxRQUFkLEdBQXlCLFFBQXJDO0FBQUEsQ0FKUyxDQUFqQjtBQVFBLElBQU1DLEVBQUUsR0FBR1gsb0VBQUg7QUFBQTtBQUFBO0FBQUEsMkVBQVI7QUFRQSxJQUFNWSxRQUFRLEdBQUdaLG1FQUFIO0FBQUE7QUFBQTtBQUFBLHdIQU9WLFVBQUNFLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkUsRUFBbkM7QUFBQSxDQVBVLENBQWQ7QUFZQSxJQUFNTyxXQUFXLEdBQUdiLG9FQUFIO0FBQUE7QUFBQTtBQUFBLGlHQUFqQjtBQVFBLElBQU1jLGFBQWEsR0FBR2QsbUVBQUg7QUFBQTtBQUFBO0FBQUEsb0pBQW5CO0FBWUEsSUFBTWUsT0FBTyxHQUFHZixvRUFBSDtBQUFBO0FBQUE7QUFBQSwwRkFBYjtBQVFBLElBQU1nQixHQUFHLEdBQUdoQixvRUFBSDtBQUFBO0FBQUE7QUFBQSxtR0FBVCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wZWNkMjM1MzQzM2ZjYTA5ZDYzYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgSW1nID0gc3R5bGVkLmltZ2BcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDIyMHB4O1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgR3JpZENvbnRhaW5lciA9IHN0eWxlZC5zZWN0aW9uYFxyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMjgwcHgsIDFmcikpO1xyXG4gIGdhcDogMnJlbTtcclxuICBwYWRkaW5nOiAyLjVyZW07XHJcblxyXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICBwYWRkaW5nOiAxLjVyZW0gMXJlbTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQmxvZ0NhcmQgPSBzdHlsZWQuZGl2YFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwZjE2MjQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoODAsIDc4LCA3OCwgMC4zKTtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDM0MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRpdGxlQ29udGVudCA9IHN0eWxlZC5kaXZgXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgSGVhZGVyVGhyZWUgPSBzdHlsZWQuaDNgXHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIGNvbG9yOiAjOWNjOWUzO1xyXG4gIGZvbnQtc2l6ZTogJHsocHJvcHMpID0+IChwcm9wcy50aXRsZSA/ICcyLjJyZW0nIDogJzEuOHJlbScpfTtcclxuICBtYXJnaW46IDAuNXJlbSAwO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEhyID0gc3R5bGVkLmhyYFxyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGhlaWdodDogM3B4O1xyXG4gIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gIGJvcmRlcjogMDtcclxuICBiYWNrZ3JvdW5kOiAjZDBiYjU3O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IENhcmRJbmZvID0gc3R5bGVkLnBgXHJcbiAgcGFkZGluZzogMCAxLjVyZW07XHJcbiAgY29sb3I6ICNlNGU2ZTc7XHJcbiAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDEuNjtcclxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG5cclxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XHJcbiAgICBwYWRkaW5nOiAwIDFyZW07XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFV0aWxpdHlMaXN0ID0gc3R5bGVkLnVsYFxyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBtYXJnaW46IDEuNXJlbSAwO1xyXG4gIHBhZGRpbmc6IDAgMXJlbTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBFeHRlcm5hbExpbmtzID0gc3R5bGVkLmFgXHJcbiAgY29sb3I6ICNkNGMwYzA7XHJcbiAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgcGFkZGluZzogMC44cmVtIDEuMnJlbTtcclxuICBiYWNrZ3JvdW5kOiAjNmIzMDMwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzgwMTQxNDtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgVGFnTGlzdCA9IHN0eWxlZC51bGBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBnYXA6IDAuOHJlbTtcclxuICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBUYWcgPSBzdHlsZWQubGlgXHJcbiAgYmFja2dyb3VuZDogIzFlMWUxZTtcclxuICBjb2xvcjogI2Q4YmZiZjtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICBwYWRkaW5nOiAwLjRyZW0gMC44cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbmA7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=