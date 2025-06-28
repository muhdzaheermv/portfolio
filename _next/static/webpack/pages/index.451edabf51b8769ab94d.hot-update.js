self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Projects/Projects.js":
/*!*********************************************!*\
  !*** ./src/components/Projects/Projects.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProjectsStyles */ "./src/components/Projects/ProjectsStyles.js");
/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/GlobalComponents */ "./src/styles/GlobalComponents/index.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/constants */ "./src/constants/constants.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\muham\\OneDrive\\Documents\\nextjs\\portfolio\\src\\components\\Projects\\Projects.js",
    _this = undefined,
    _s = $RefreshSig$();




 // Define category buttons

var categories = ["All", "React", "HTML/CSS", "JavaScript", "Tailwind CSS", "Figma"];

var Projects = function Projects() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("All"),
      activeCategory = _useState[0],
      setActiveCategory = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      showAll = _useState2[0],
      setShowAll = _useState2[1]; // Filter based on category


  var filteredProjects = _constants_constants__WEBPACK_IMPORTED_MODULE_4__.projects.filter(function (project) {
    if (activeCategory === "All") return true;
    if (activeCategory === "HTML/CSS") return project.tags.includes("HTML") && project.tags.includes("CSS");
    return project.tags.includes(activeCategory);
  }); // Limit projects to first 6 (2 rows * 3 columns)

  var visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.Section, {
    nopadding: true,
    id: "projects",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionDivider, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionTitle, {
      main: true,
      children: "Projects"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      style: {
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        marginBottom: "2rem"
      },
      children: categories.map(function (category) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: function onClick() {
            setActiveCategory(category);
            setShowAll(false); // Reset show more when category changes
          },
          style: {
            padding: "8px 16px",
            background: activeCategory === category ? "#0f0f0f" : "#eaeaea",
            color: activeCategory === category ? "#fff" : "#000",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold"
          },
          children: category
        }, category, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "2rem"
      },
      children: visibleProjects.map(function (_ref) {
        var id = _ref.id,
            image = _ref.image,
            title = _ref.title,
            description = _ref.description,
            tags = _ref.tags,
            source = _ref.source,
            visit = _ref.visit;
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.BlogCard, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.Img, {
            src: image
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.TitleContent, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.HeaderThree, {
              title: true,
              children: title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.Hr, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.CardInfo, {
            children: description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.TitleContent, {
              children: "Tags"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.TagList, {
              children: tags.map(function (tag, i) {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.Tag, {
                  children: tag
                }, i, false, {
                  fileName: _jsxFileName,
                  lineNumber: 96,
                  columnNumber: 19
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.UtilityList, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.ExternalLinks, {
              href: visit,
              children: "Code"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.ExternalLinks, {
              href: source,
              children: "Visit"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 13
          }, _this)]
        }, id, true, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }, _this), filteredProjects.length > 6 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      style: {
        textAlign: "center",
        marginTop: "2rem"
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        onClick: function onClick() {
          return setShowAll(function (prev) {
            return !prev;
          });
        },
        style: {
          padding: "10px 20px",
          background: "#0070f3",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          fontSize: "16px",
          cursor: "pointer"
        },
        children: showAll ? "Show Less" : "Show More"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 5
  }, _this);
};

_s(Projects, "REguQgpfl+tHyZGS8X/XPdRkyig=");

_c = Projects;
/* harmony default export */ __webpack_exports__["default"] = (Projects);

var _c;

$RefreshReg$(_c, "Projects");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvamVjdHMvUHJvamVjdHMuanMiXSwibmFtZXMiOlsiY2F0ZWdvcmllcyIsIlByb2plY3RzIiwidXNlU3RhdGUiLCJhY3RpdmVDYXRlZ29yeSIsInNldEFjdGl2ZUNhdGVnb3J5Iiwic2hvd0FsbCIsInNldFNob3dBbGwiLCJmaWx0ZXJlZFByb2plY3RzIiwicHJvamVjdHMiLCJwcm9qZWN0IiwidGFncyIsImluY2x1ZGVzIiwidmlzaWJsZVByb2plY3RzIiwic2xpY2UiLCJkaXNwbGF5IiwiZmxleFdyYXAiLCJnYXAiLCJtYXJnaW5Cb3R0b20iLCJtYXAiLCJjYXRlZ29yeSIsInBhZGRpbmciLCJiYWNrZ3JvdW5kIiwiY29sb3IiLCJib3JkZXIiLCJib3JkZXJSYWRpdXMiLCJjdXJzb3IiLCJmb250V2VpZ2h0IiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsImlkIiwiaW1hZ2UiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwic291cmNlIiwidmlzaXQiLCJ0YWciLCJpIiwibGVuZ3RoIiwidGV4dEFsaWduIiwibWFyZ2luVG9wIiwicHJldiIsImZvbnRTaXplIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBYUE7Q0FPQTs7QUFDQSxJQUFNQSxVQUFVLEdBQUcsQ0FDakIsS0FEaUIsRUFFakIsT0FGaUIsRUFHakIsVUFIaUIsRUFJakIsWUFKaUIsRUFLakIsY0FMaUIsRUFNakIsT0FOaUIsQ0FBbkI7O0FBU0EsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUFBLGtCQUN1QkMsK0NBQVEsQ0FBQyxLQUFELENBRC9CO0FBQUEsTUFDZEMsY0FEYztBQUFBLE1BQ0VDLGlCQURGOztBQUFBLG1CQUVTRiwrQ0FBUSxDQUFDLEtBQUQsQ0FGakI7QUFBQSxNQUVkRyxPQUZjO0FBQUEsTUFFTEMsVUFGSyxrQkFJckI7OztBQUNBLE1BQU1DLGdCQUFn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QkFBVSxFQUFFLFNBRlA7QUFHTEMsZUFBSyxFQUFFLE1BSEY7QUFJTEMsZ0JBQU0sRUFBRSxNQUpIO0FBS0xDLHNCQUFZLEVBQUUsS0FMVDtBQU1MZ0Isa0JBQVEsRUFBRSxNQU5MO0FBT0xmLGdCQUFNLEVBQUU7QUFQSCxTQUZUO0FBQUEsa0JBWUdwQixPQUFPLEdBQUcsV0FBSCxHQUFpQjtBQVozQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTlESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWtGRCxDQWpHRDs7R0FBTUosUTs7S0FBQUEsUTtBQW1HTiwrREFBZUEsUUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40NTFlZGFiZjUxYjg3NjlhYjk0ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgQmxvZ0NhcmQsXHJcbiAgQ2FyZEluZm8sXHJcbiAgRXh0ZXJuYWxMaW5rcyxcclxuICBHcmlkQ29udGFpbmVyLFxyXG4gIEhlYWRlclRocmVlLFxyXG4gIEhyLFxyXG4gIFRhZyxcclxuICBUYWdMaXN0LFxyXG4gIFRpdGxlQ29udGVudCxcclxuICBVdGlsaXR5TGlzdCxcclxuICBJbWcsXHJcbn0gZnJvbSBcIi4vUHJvamVjdHNTdHlsZXNcIjtcclxuaW1wb3J0IHtcclxuICBTZWN0aW9uLFxyXG4gIFNlY3Rpb25EaXZpZGVyLFxyXG4gIFNlY3Rpb25UaXRsZSxcclxufSBmcm9tIFwiLi4vLi4vc3R5bGVzL0dsb2JhbENvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzL2NvbnN0YW50c1wiO1xyXG5cclxuLy8gRGVmaW5lIGNhdGVnb3J5IGJ1dHRvbnNcclxuY29uc3QgY2F0ZWdvcmllcyA9IFtcclxuICBcIkFsbFwiLFxyXG4gIFwiUmVhY3RcIixcclxuICBcIkhUTUwvQ1NTXCIsXHJcbiAgXCJKYXZhU2NyaXB0XCIsXHJcbiAgXCJUYWlsd2luZCBDU1NcIixcclxuICBcIkZpZ21hXCIsXHJcbl07XHJcblxyXG5jb25zdCBQcm9qZWN0cyA9ICgpID0+IHtcclxuICBjb25zdCBbYWN0aXZlQ2F0ZWdvcnksIHNldEFjdGl2ZUNhdGVnb3J5XSA9IHVzZVN0YXRlKFwiQWxsXCIpO1xyXG4gIGNvbnN0IFtzaG93QWxsLCBzZXRTaG93QWxsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgLy8gRmlsdGVyIGJhc2VkIG9uIGNhdGVnb3J5XHJcbiAgY29uc3QgZmlsdGVyZWRQcm9qZWN0cyA9IHByb2plY3RzLmZpbHRlcigocHJvamVjdCkgPT4ge1xyXG4gICAgaWYgKGFjdGl2ZUNhdGVnb3J5ID09PSBcIkFsbFwiKSByZXR1cm4gdHJ1ZTtcclxuICAgIGlmIChhY3RpdmVDYXRlZ29yeSA9PT0gXCJIVE1ML0NTU1wiKVxyXG4gICAgICByZXR1cm4gcHJvamVjdC50YWdzLmluY2x1ZGVzKFwiSFRNTFwiKSAmJiBwcm9qZWN0LnRhZ3MuaW5jbHVkZXMoXCJDU1NcIik7XHJcbiAgICByZXR1cm4gcHJvamVjdC50YWdzLmluY2x1ZGVzKGFjdGl2ZUNhdGVnb3J5KTtcclxuICB9KTtcclxuXHJcbiAgLy8gTGltaXQgcHJvamVjdHMgdG8gZmlyc3QgNiAoMiByb3dzICogMyBjb2x1bW5zKVxyXG4gIGNvbnN0IHZpc2libGVQcm9qZWN0cyA9IHNob3dBbGwgPyBmaWx0ZXJlZFByb2plY3RzIDogZmlsdGVyZWRQcm9qZWN0cy5zbGljZSgwLCA2KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTZWN0aW9uIG5vcGFkZGluZyBpZD1cInByb2plY3RzXCI+XHJcbiAgICAgIDxTZWN0aW9uRGl2aWRlciAvPlxyXG4gICAgICA8U2VjdGlvblRpdGxlIG1haW4+UHJvamVjdHM8L1NlY3Rpb25UaXRsZT5cclxuXHJcbiAgICAgIHsvKiBDYXRlZ29yeSBCdXR0b25zICovfVxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBmbGV4V3JhcDogXCJ3cmFwXCIsIGdhcDogXCIxMHB4XCIsIG1hcmdpbkJvdHRvbTogXCIycmVtXCIgfX0+XHJcbiAgICAgICAge2NhdGVnb3JpZXMubWFwKChjYXRlZ29yeSkgPT4gKFxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBrZXk9e2NhdGVnb3J5fVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0QWN0aXZlQ2F0ZWdvcnkoY2F0ZWdvcnkpO1xyXG4gICAgICAgICAgICAgIHNldFNob3dBbGwoZmFsc2UpOyAvLyBSZXNldCBzaG93IG1vcmUgd2hlbiBjYXRlZ29yeSBjaGFuZ2VzXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogXCI4cHggMTZweFwiLFxyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IGFjdGl2ZUNhdGVnb3J5ID09PSBjYXRlZ29yeSA/IFwiIzBmMGYwZlwiIDogXCIjZWFlYWVhXCIsXHJcbiAgICAgICAgICAgICAgY29sb3I6IGFjdGl2ZUNhdGVnb3J5ID09PSBjYXRlZ29yeSA/IFwiI2ZmZlwiIDogXCIjMDAwXCIsXHJcbiAgICAgICAgICAgICAgYm9yZGVyOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiOHB4XCIsXHJcbiAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2NhdGVnb3J5fVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgey8qIFJlc3BvbnNpdmUgUHJvamVjdCBHcmlkICovfVxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGRpc3BsYXk6IFwiZ3JpZFwiLFxyXG4gICAgICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogXCJyZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMDBweCwgMWZyKSlcIixcclxuICAgICAgICAgIGdhcDogXCIycmVtXCIsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIHt2aXNpYmxlUHJvamVjdHMubWFwKCh7IGlkLCBpbWFnZSwgdGl0bGUsIGRlc2NyaXB0aW9uLCB0YWdzLCBzb3VyY2UsIHZpc2l0IH0pID0+IChcclxuICAgICAgICAgIDxCbG9nQ2FyZCBrZXk9e2lkfT5cclxuICAgICAgICAgICAgPEltZyBzcmM9e2ltYWdlfSAvPlxyXG4gICAgICAgICAgICA8VGl0bGVDb250ZW50PlxyXG4gICAgICAgICAgICAgIDxIZWFkZXJUaHJlZSB0aXRsZT57dGl0bGV9PC9IZWFkZXJUaHJlZT5cclxuICAgICAgICAgICAgICA8SHIgLz5cclxuICAgICAgICAgICAgPC9UaXRsZUNvbnRlbnQ+XHJcbiAgICAgICAgICAgIDxDYXJkSW5mbz57ZGVzY3JpcHRpb259PC9DYXJkSW5mbz5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8VGl0bGVDb250ZW50PlRhZ3M8L1RpdGxlQ29udGVudD5cclxuICAgICAgICAgICAgICA8VGFnTGlzdD5cclxuICAgICAgICAgICAgICAgIHt0YWdzLm1hcCgodGFnLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxUYWcga2V5PXtpfT57dGFnfTwvVGFnPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC9UYWdMaXN0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPFV0aWxpdHlMaXN0PlxyXG4gICAgICAgICAgICAgIDxFeHRlcm5hbExpbmtzIGhyZWY9e3Zpc2l0fT5Db2RlPC9FeHRlcm5hbExpbmtzPlxyXG4gICAgICAgICAgICAgIDxFeHRlcm5hbExpbmtzIGhyZWY9e3NvdXJjZX0+VmlzaXQ8L0V4dGVybmFsTGlua3M+XHJcbiAgICAgICAgICAgIDwvVXRpbGl0eUxpc3Q+XHJcbiAgICAgICAgICA8L0Jsb2dDYXJkPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIHsvKiBTaG93IE1vcmUgLyBTaG93IExlc3MgQnV0dG9uICovfVxyXG4gICAgICB7ZmlsdGVyZWRQcm9qZWN0cy5sZW5ndGggPiA2ICYmIChcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiwgbWFyZ2luVG9wOiBcIjJyZW1cIiB9fT5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd0FsbCgocHJldikgPT4gIXByZXYpfVxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IFwiMTBweCAyMHB4XCIsXHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogXCIjMDA3MGYzXCIsXHJcbiAgICAgICAgICAgICAgY29sb3I6IFwiI2ZmZlwiLFxyXG4gICAgICAgICAgICAgIGJvcmRlcjogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjhweFwiLFxyXG4gICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE2cHhcIixcclxuICAgICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7c2hvd0FsbCA/IFwiU2hvdyBMZXNzXCIgOiBcIlNob3cgTW9yZVwifVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8L1NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2plY3RzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9