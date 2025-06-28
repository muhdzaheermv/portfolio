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




 // Define categories you want as buttons

var categories = ["All", "React", "HTML/CSS", "JavaScript", "Tailwind CSS", "Figma"];

var Projects = function Projects() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("All"),
      activeCategory = _useState[0],
      setActiveCategory = _useState[1]; // Filtering logic


  var filteredProjects = _constants_constants__WEBPACK_IMPORTED_MODULE_4__.projects.filter(function (project) {
    if (activeCategory === "All") return true;
    if (activeCategory === "HTML/CSS") return project.tags.includes("HTML") && project.tags.includes("CSS");
    return project.tags.includes(activeCategory);
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.Section, {
    nopadding: true,
    id: "projects",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionDivider, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionTitle, {
      main: true,
      children: "Projects"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
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
            return setActiveCategory(category);
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
          lineNumber: 51,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.GridContainer, {
      children: filteredProjects.map(function (_ref) {
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
            lineNumber: 73,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.TitleContent, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.HeaderThree, {
              title: true,
              children: title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.Hr, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.CardInfo, {
            children: description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.TitleContent, {
              children: "Tags"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.TagList, {
              children: tags.map(function (tag, i) {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.Tag, {
                  children: tag
                }, i, false, {
                  fileName: _jsxFileName,
                  lineNumber: 83,
                  columnNumber: 19
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.UtilityList, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.ExternalLinks, {
              href: visit,
              children: "Code"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.ExternalLinks, {
              href: source,
              children: "Visit"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 13
          }, _this)]
        }, id, true, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 5
  }, _this);
};

_s(Projects, "dXg2LpGdJ7VQ6CNKcLAC25AcxBc=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvamVjdHMvUHJvamVjdHMuanMiXSwibmFtZXMiOlsiY2F0ZWdvcmllcyIsIlByb2plY3RzIiwidXNlU3RhdGUiLCJhY3RpdmVDYXRlZ29yeSIsInNldEFjdGl2ZUNhdGVnb3J5IiwiZmlsdGVyZWRQcm9qZWN0cyIsInByb2plY3RzIiwicHJvamVjdCIsInRhZ3MiLCJpbmNsdWRlcyIsImRpc3BsYXkiLCJmbGV4V3JhcCIsImdhcCIsIm1hcmdpbkJvdHRvbSIsIm1hcCIsImNhdGVnb3J5IiwicGFkZGluZyIsImJhY2tncm91bmQiLCJjb2xvciIsImJvcmRlciIsImJvcmRlclJhZGl1cyIsImN1cnNvciIsImZvbnRXZWlnaHQiLCJpZCIsImltYWdlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInNvdXJjZSIsInZpc2l0IiwidGFnIiwiaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQWFBO0NBT0E7O0FBQ0EsSUFBTUEsVUFBVSxHQUFHLENBQ2pCLEtBRGlCLEVBRWpCLE9BRmlCLEVBR2pCLFVBSGlCLEVBSWpCLFlBSmlCLEVBS2pCLGNBTGlCLEVBTWpCLE9BTmlCLENBQW5COztBQVNBLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFBQTs7QUFBQSxrQkFDdUJDLCtDQUFRLENBQUMsS0FBRCxDQUQvQjtBQUFBLE1BQ2RDLGNBRGM7QUFBQSxNQUNFQyxpQkFERixpQkFHckI7OztBQUNBLE1BQU1DLGdCQUFnQixHQUFHQyxpRUFBQSxDQUFnQixVQUFDQyxPQUFELEVBQWE7QUFDcEQsUUFBSUosY0FBYyxLQUFLLEtBQXZCLEVBQThCLE9BQU8sSUFBUDtBQUM5QixRQUFJQSxjQUFjLEtBQUssVUFBdkIsRUFDRSxPQUFPSSxPQUFPLENBQUNDLElBQVIsQ0FBYUMsUUFBYixDQUFzQixNQUF0QixLQUFpQ0YsT0FBTyxDQUFDQyxJQUFSLENBQWFDLFFB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QUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBRUUsOERBQUMsMERBQUQ7QUFBZSxrQkFBSSxFQUFFRCxNQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBZkY7QUFBQSxXQUFlSixFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRG9CO0FBQUEsT0FBckI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBMUJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBcURELENBaEVEOztHQUFNdEIsUTs7S0FBQUEsUTtBQWtFTiwrREFBZUEsUUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40NGIyZjI0YzZlMTBlYjljMWY1Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgQmxvZ0NhcmQsXHJcbiAgQ2FyZEluZm8sXHJcbiAgRXh0ZXJuYWxMaW5rcyxcclxuICBHcmlkQ29udGFpbmVyLFxyXG4gIEhlYWRlclRocmVlLFxyXG4gIEhyLFxyXG4gIFRhZyxcclxuICBUYWdMaXN0LFxyXG4gIFRpdGxlQ29udGVudCxcclxuICBVdGlsaXR5TGlzdCxcclxuICBJbWcsXHJcbn0gZnJvbSBcIi4vUHJvamVjdHNTdHlsZXNcIjtcclxuaW1wb3J0IHtcclxuICBTZWN0aW9uLFxyXG4gIFNlY3Rpb25EaXZpZGVyLFxyXG4gIFNlY3Rpb25UaXRsZSxcclxufSBmcm9tIFwiLi4vLi4vc3R5bGVzL0dsb2JhbENvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzL2NvbnN0YW50c1wiO1xyXG5cclxuLy8gRGVmaW5lIGNhdGVnb3JpZXMgeW91IHdhbnQgYXMgYnV0dG9uc1xyXG5jb25zdCBjYXRlZ29yaWVzID0gW1xyXG4gIFwiQWxsXCIsXHJcbiAgXCJSZWFjdFwiLFxyXG4gIFwiSFRNTC9DU1NcIixcclxuICBcIkphdmFTY3JpcHRcIixcclxuICBcIlRhaWx3aW5kIENTU1wiLFxyXG4gIFwiRmlnbWFcIixcclxuXTtcclxuXHJcbmNvbnN0IFByb2plY3RzID0gKCkgPT4ge1xyXG4gIGNvbnN0IFthY3RpdmVDYXRlZ29yeSwgc2V0QWN0aXZlQ2F0ZWdvcnldID0gdXNlU3RhdGUoXCJBbGxcIik7XHJcblxyXG4gIC8vIEZpbHRlcmluZyBsb2dpY1xyXG4gIGNvbnN0IGZpbHRlcmVkUHJvamVjdHMgPSBwcm9qZWN0cy5maWx0ZXIoKHByb2plY3QpID0+IHtcclxuICAgIGlmIChhY3RpdmVDYXRlZ29yeSA9PT0gXCJBbGxcIikgcmV0dXJuIHRydWU7XHJcbiAgICBpZiAoYWN0aXZlQ2F0ZWdvcnkgPT09IFwiSFRNTC9DU1NcIilcclxuICAgICAgcmV0dXJuIHByb2plY3QudGFncy5pbmNsdWRlcyhcIkhUTUxcIikgJiYgcHJvamVjdC50YWdzLmluY2x1ZGVzKFwiQ1NTXCIpO1xyXG4gICAgcmV0dXJuIHByb2plY3QudGFncy5pbmNsdWRlcyhhY3RpdmVDYXRlZ29yeSk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8U2VjdGlvbiBub3BhZGRpbmcgaWQ9XCJwcm9qZWN0c1wiPlxyXG4gICAgICA8U2VjdGlvbkRpdmlkZXIgLz5cclxuICAgICAgPFNlY3Rpb25UaXRsZSBtYWluPlByb2plY3RzPC9TZWN0aW9uVGl0bGU+XHJcblxyXG4gICAgICB7LyogQ2F0ZWdvcnkgRmlsdGVyIEJ1dHRvbnMgKi99XHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGZsZXhXcmFwOiBcIndyYXBcIiwgZ2FwOiBcIjEwcHhcIiwgbWFyZ2luQm90dG9tOiBcIjJyZW1cIiB9fT5cclxuICAgICAgICB7Y2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5KSA9PiAoXHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIGtleT17Y2F0ZWdvcnl9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZUNhdGVnb3J5KGNhdGVnb3J5KX1cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBwYWRkaW5nOiBcIjhweCAxNnB4XCIsXHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogYWN0aXZlQ2F0ZWdvcnkgPT09IGNhdGVnb3J5ID8gXCIjMGYwZjBmXCIgOiBcIiNlYWVhZWFcIixcclxuICAgICAgICAgICAgICBjb2xvcjogYWN0aXZlQ2F0ZWdvcnkgPT09IGNhdGVnb3J5ID8gXCIjZmZmXCIgOiBcIiMwMDBcIixcclxuICAgICAgICAgICAgICBib3JkZXI6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI4cHhcIixcclxuICAgICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7Y2F0ZWdvcnl9XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB7LyogRmlsdGVyZWQgUHJvamVjdCBDYXJkcyAqL31cclxuICAgICAgPEdyaWRDb250YWluZXI+XHJcbiAgICAgICAge2ZpbHRlcmVkUHJvamVjdHMubWFwKCh7IGlkLCBpbWFnZSwgdGl0bGUsIGRlc2NyaXB0aW9uLCB0YWdzLCBzb3VyY2UsIHZpc2l0IH0pID0+IChcclxuICAgICAgICAgIDxCbG9nQ2FyZCBrZXk9e2lkfT5cclxuICAgICAgICAgICAgPEltZyBzcmM9e2ltYWdlfSAvPlxyXG4gICAgICAgICAgICA8VGl0bGVDb250ZW50PlxyXG4gICAgICAgICAgICAgIDxIZWFkZXJUaHJlZSB0aXRsZT57dGl0bGV9PC9IZWFkZXJUaHJlZT5cclxuICAgICAgICAgICAgICA8SHIgLz5cclxuICAgICAgICAgICAgPC9UaXRsZUNvbnRlbnQ+XHJcbiAgICAgICAgICAgIDxDYXJkSW5mbz57ZGVzY3JpcHRpb259PC9DYXJkSW5mbz5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8VGl0bGVDb250ZW50PlRhZ3M8L1RpdGxlQ29udGVudD5cclxuICAgICAgICAgICAgICA8VGFnTGlzdD5cclxuICAgICAgICAgICAgICAgIHt0YWdzLm1hcCgodGFnLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxUYWcga2V5PXtpfT57dGFnfTwvVGFnPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC9UYWdMaXN0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPFV0aWxpdHlMaXN0PlxyXG4gICAgICAgICAgICAgIDxFeHRlcm5hbExpbmtzIGhyZWY9e3Zpc2l0fT5Db2RlPC9FeHRlcm5hbExpbmtzPlxyXG4gICAgICAgICAgICAgIDxFeHRlcm5hbExpbmtzIGhyZWY9e3NvdXJjZX0+VmlzaXQ8L0V4dGVybmFsTGlua3M+XHJcbiAgICAgICAgICAgIDwvVXRpbGl0eUxpc3Q+XHJcbiAgICAgICAgICA8L0Jsb2dDYXJkPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L0dyaWRDb250YWluZXI+XHJcbiAgICA8L1NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2plY3RzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9