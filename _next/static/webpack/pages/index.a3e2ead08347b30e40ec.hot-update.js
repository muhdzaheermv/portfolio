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





var categories = ["All", "React", "HTML/CSS", "JavaScript", "Tailwind CSS", "Figma"];

var Projects = function Projects() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("All"),
      activeCategory = _useState[0],
      setActiveCategory = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      showAll = _useState2[0],
      setShowAll = _useState2[1];

  var filteredProjects = _constants_constants__WEBPACK_IMPORTED_MODULE_4__.projects.filter(function (project) {
    if (activeCategory === "All") return true;
    if (activeCategory === "HTML/CSS") return project.tags.includes("HTML") && project.tags.includes("CSS");
    return project.tags.includes(activeCategory);
  });
  var visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.Section, {
    nopadding: true,
    id: "projects",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionDivider, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionTitle, {
      main: true,
      children: "Projects"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
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
            setShowAll(false);
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
          lineNumber: 52,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.GridContainer, {
      style: {
        display: "grid",
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
            lineNumber: 77,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.TitleContent, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.HeaderThree, {
              title: true,
              children: title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.Hr, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.CardInfo, {
            children: description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.TitleContent, {
              children: "Tags"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.TagList, {
              children: tags.map(function (tag, i) {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.Tag, {
                  children: tag
                }, i, false, {
                  fileName: _jsxFileName,
                  lineNumber: 87,
                  columnNumber: 19
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.UtilityList, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.ExternalLinks, {
              href: visit,
              children: "Code"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.ExternalLinks, {
              href: source,
              children: "Visit"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 13
          }, _this)]
        }, id, true, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
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
        lineNumber: 102,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 45,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvamVjdHMvUHJvamVjdHMuanMiXSwibmFtZXMiOlsiY2F0ZWdvcmllcyIsIlByb2plY3RzIiwidXNlU3RhdGUiLCJhY3RpdmVDYXRlZ29yeSIsInNldEFjdGl2ZUNhdGVnb3J5Iiwic2hvd0FsbCIsInNldFNob3dBbGwiLCJmaWx0ZXJlZFByb2plY3RzIiwicHJvamVjdHMiLCJwcm9qZWN0IiwidGFncyIsImluY2x1ZGVzIiwidmlzaWJsZVByb2plY3RzIiwic2xpY2UiLCJkaXNwbGF5IiwiZmxleFdyYXAiLCJnYXAiLCJtYXJnaW5Cb3R0b20iLCJtYXAiLCJjYXRlZ29yeSIsInBhZGRpbmciLCJiYWNrZ3JvdW5kIiwiY29sb3IiLCJib3JkZXIiLCJib3JkZXJSYWRpdXMiLCJjdXJzb3IiLCJmb250V2VpZ2h0IiwiaWQiLCJpbWFnZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJzb3VyY2UiLCJ2aXNpdCIsInRhZyIsImkiLCJsZW5ndGgiLCJ0ZXh0QWxpZ24iLCJtYXJnaW5Ub3AiLCJwcmV2IiwiZm9udFNpemUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFhQTtBQUtBO0FBRUEsSUFBTUEsVUFBVSxHQUFHLENBQ2pCLEtBRGlCLEVBRWpCLE9BRmlCLEVBR2pCLFVBSGlCLEVBSWpCLFlBSmlCLEVBS2pCLGNBTGlCLEVBTWpCLE9BTmlCLENBQW5COztBQVNBLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFBQTs7QUFBQSxrQkFDdUJDLCtDQUFRLENBQUMsS0FBRCxDQUQvQjtBQUFBLE1BQ2RDLGNBRGM7QUFBQSxNQUNFQyxpQkFERjs7QUFBQSxtQkFFU0YsK0NBQVEsQ0FBQyxLQUFELENBRmpCO0FBQUEsTUFFZEcsT0FGYztBQUFBLE1BRUxDLFVBRks7O0FBSXJCLE1BQU1DLGdCQUFnQixHQUFHQyxpRUFBQSxDQUFnQixVQUFDQyxPQUFE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QkFBWSxFQUFFLEtBTFQ7QUFNTGUsa0JBQVEsRUFBRSxNQU5MO0FBT0xkLGdCQUFNLEVBQUU7QUFQSCxTQUZUO0FBQUEsa0JBWUdwQixPQUFPLEdBQUcsV0FBSCxHQUFpQjtBQVozQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXhESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTRFRCxDQXpGRDs7R0FBTUosUTs7S0FBQUEsUTtBQTJGTiwrREFBZUEsUUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hM2UyZWFkMDgzNDdiMzBlNDBlYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgQmxvZ0NhcmQsXHJcbiAgQ2FyZEluZm8sXHJcbiAgRXh0ZXJuYWxMaW5rcyxcclxuICBHcmlkQ29udGFpbmVyLFxyXG4gIEhlYWRlclRocmVlLFxyXG4gIEhyLFxyXG4gIFRhZyxcclxuICBUYWdMaXN0LFxyXG4gIFRpdGxlQ29udGVudCxcclxuICBVdGlsaXR5TGlzdCxcclxuICBJbWcsXHJcbn0gZnJvbSBcIi4vUHJvamVjdHNTdHlsZXNcIjtcclxuaW1wb3J0IHtcclxuICBTZWN0aW9uLFxyXG4gIFNlY3Rpb25EaXZpZGVyLFxyXG4gIFNlY3Rpb25UaXRsZSxcclxufSBmcm9tIFwiLi4vLi4vc3R5bGVzL0dsb2JhbENvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzL2NvbnN0YW50c1wiO1xyXG5cclxuY29uc3QgY2F0ZWdvcmllcyA9IFtcclxuICBcIkFsbFwiLFxyXG4gIFwiUmVhY3RcIixcclxuICBcIkhUTUwvQ1NTXCIsXHJcbiAgXCJKYXZhU2NyaXB0XCIsXHJcbiAgXCJUYWlsd2luZCBDU1NcIixcclxuICBcIkZpZ21hXCIsXHJcbl07XHJcblxyXG5jb25zdCBQcm9qZWN0cyA9ICgpID0+IHtcclxuICBjb25zdCBbYWN0aXZlQ2F0ZWdvcnksIHNldEFjdGl2ZUNhdGVnb3J5XSA9IHVzZVN0YXRlKFwiQWxsXCIpO1xyXG4gIGNvbnN0IFtzaG93QWxsLCBzZXRTaG93QWxsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgZmlsdGVyZWRQcm9qZWN0cyA9IHByb2plY3RzLmZpbHRlcigocHJvamVjdCkgPT4ge1xyXG4gICAgaWYgKGFjdGl2ZUNhdGVnb3J5ID09PSBcIkFsbFwiKSByZXR1cm4gdHJ1ZTtcclxuICAgIGlmIChhY3RpdmVDYXRlZ29yeSA9PT0gXCJIVE1ML0NTU1wiKVxyXG4gICAgICByZXR1cm4gcHJvamVjdC50YWdzLmluY2x1ZGVzKFwiSFRNTFwiKSAmJiBwcm9qZWN0LnRhZ3MuaW5jbHVkZXMoXCJDU1NcIik7XHJcbiAgICByZXR1cm4gcHJvamVjdC50YWdzLmluY2x1ZGVzKGFjdGl2ZUNhdGVnb3J5KTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgdmlzaWJsZVByb2plY3RzID0gc2hvd0FsbCA/IGZpbHRlcmVkUHJvamVjdHMgOiBmaWx0ZXJlZFByb2plY3RzLnNsaWNlKDAsIDYpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFNlY3Rpb24gbm9wYWRkaW5nIGlkPVwicHJvamVjdHNcIj5cclxuICAgICAgPFNlY3Rpb25EaXZpZGVyIC8+XHJcbiAgICAgIDxTZWN0aW9uVGl0bGUgbWFpbj5Qcm9qZWN0czwvU2VjdGlvblRpdGxlPlxyXG5cclxuICAgICAgey8qIENhdGVnb3J5IEJ1dHRvbnMgKi99XHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGZsZXhXcmFwOiBcIndyYXBcIiwgZ2FwOiBcIjEwcHhcIiwgbWFyZ2luQm90dG9tOiBcIjJyZW1cIiB9fT5cclxuICAgICAgICB7Y2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5KSA9PiAoXHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIGtleT17Y2F0ZWdvcnl9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICBzZXRBY3RpdmVDYXRlZ29yeShjYXRlZ29yeSk7XHJcbiAgICAgICAgICAgICAgc2V0U2hvd0FsbChmYWxzZSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogXCI4cHggMTZweFwiLFxyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IGFjdGl2ZUNhdGVnb3J5ID09PSBjYXRlZ29yeSA/IFwiIzBmMGYwZlwiIDogXCIjZWFlYWVhXCIsXHJcbiAgICAgICAgICAgICAgY29sb3I6IGFjdGl2ZUNhdGVnb3J5ID09PSBjYXRlZ29yeSA/IFwiI2ZmZlwiIDogXCIjMDAwXCIsXHJcbiAgICAgICAgICAgICAgYm9yZGVyOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiOHB4XCIsXHJcbiAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2NhdGVnb3J5fVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgey8qIFJlc3BvbnNpdmUgR3JpZCB3aXRoIG9yaWdpbmFsIHNwYWNpbmcgdXNpbmcgbWVkaWEgcXVlcmllcyAqL31cclxuICAgICAgPEdyaWRDb250YWluZXIgc3R5bGU9e3sgZGlzcGxheTogXCJncmlkXCIsIGdhcDogXCIycmVtXCIgfX0+XHJcbiAgICAgICAge3Zpc2libGVQcm9qZWN0cy5tYXAoKHsgaWQsIGltYWdlLCB0aXRsZSwgZGVzY3JpcHRpb24sIHRhZ3MsIHNvdXJjZSwgdmlzaXQgfSkgPT4gKFxyXG4gICAgICAgICAgPEJsb2dDYXJkIGtleT17aWR9PlxyXG4gICAgICAgICAgICA8SW1nIHNyYz17aW1hZ2V9IC8+XHJcbiAgICAgICAgICAgIDxUaXRsZUNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgPEhlYWRlclRocmVlIHRpdGxlPnt0aXRsZX08L0hlYWRlclRocmVlPlxyXG4gICAgICAgICAgICAgIDxIciAvPlxyXG4gICAgICAgICAgICA8L1RpdGxlQ29udGVudD5cclxuICAgICAgICAgICAgPENhcmRJbmZvPntkZXNjcmlwdGlvbn08L0NhcmRJbmZvPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxUaXRsZUNvbnRlbnQ+VGFnczwvVGl0bGVDb250ZW50PlxyXG4gICAgICAgICAgICAgIDxUYWdMaXN0PlxyXG4gICAgICAgICAgICAgICAge3RhZ3MubWFwKCh0YWcsIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgPFRhZyBrZXk9e2l9Pnt0YWd9PC9UYWc+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L1RhZ0xpc3Q+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8VXRpbGl0eUxpc3Q+XHJcbiAgICAgICAgICAgICAgPEV4dGVybmFsTGlua3MgaHJlZj17dmlzaXR9PkNvZGU8L0V4dGVybmFsTGlua3M+XHJcbiAgICAgICAgICAgICAgPEV4dGVybmFsTGlua3MgaHJlZj17c291cmNlfT5WaXNpdDwvRXh0ZXJuYWxMaW5rcz5cclxuICAgICAgICAgICAgPC9VdGlsaXR5TGlzdD5cclxuICAgICAgICAgIDwvQmxvZ0NhcmQ+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvR3JpZENvbnRhaW5lcj5cclxuXHJcbiAgICAgIHsvKiBTaG93IE1vcmUgLyBTaG93IExlc3MgKi99XHJcbiAgICAgIHtmaWx0ZXJlZFByb2plY3RzLmxlbmd0aCA+IDYgJiYgKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiLCBtYXJnaW5Ub3A6IFwiMnJlbVwiIH19PlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93QWxsKChwcmV2KSA9PiAhcHJldil9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogXCIxMHB4IDIwcHhcIixcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBcIiMwMDcwZjNcIixcclxuICAgICAgICAgICAgICBjb2xvcjogXCIjZmZmXCIsXHJcbiAgICAgICAgICAgICAgYm9yZGVyOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiOHB4XCIsXHJcbiAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTZweFwiLFxyXG4gICAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtzaG93QWxsID8gXCJTaG93IExlc3NcIiA6IFwiU2hvdyBNb3JlXCJ9XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvU2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=