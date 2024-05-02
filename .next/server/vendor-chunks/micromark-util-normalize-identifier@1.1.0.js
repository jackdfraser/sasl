"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/micromark-util-normalize-identifier@1.1.0";
exports.ids = ["vendor-chunks/micromark-util-normalize-identifier@1.1.0"];
exports.modules = {

/***/ "./node_modules/.pnpm/micromark-util-normalize-identifier@1.1.0/node_modules/micromark-util-normalize-identifier/dev/index.js":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/micromark-util-normalize-identifier@1.1.0/node_modules/micromark-util-normalize-identifier/dev/index.js ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   normalizeIdentifier: () => (/* binding */ normalizeIdentifier)\n/* harmony export */ });\n/* harmony import */ var micromark_util_symbol_values_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromark-util-symbol/values.js */ \"./node_modules/.pnpm/micromark-util-symbol@1.1.0/node_modules/micromark-util-symbol/values.js\");\n\n\n/**\n * Normalize an identifier (as found in references, definitions).\n *\n * Collapses markdown whitespace, trim, and then lower- and uppercase.\n *\n * Some characters are considered “uppercase”, such as U+03F4 (`ϴ`), but if their\n * lowercase counterpart (U+03B8 (`θ`)) is uppercased will result in a different\n * uppercase character (U+0398 (`Θ`)).\n * So, to get a canonical form, we perform both lower- and uppercase.\n *\n * Using uppercase last makes sure keys will never interact with default\n * prototypal values (such as `constructor`): nothing in the prototype of\n * `Object` is uppercase.\n *\n * @param {string} value\n *   Identifier to normalize.\n * @returns {string}\n *   Normalized identifier.\n */\nfunction normalizeIdentifier(value) {\n  return (\n    value\n      // Collapse markdown whitespace.\n      .replace(/[\\t\\n\\r ]+/g, micromark_util_symbol_values_js__WEBPACK_IMPORTED_MODULE_0__.values.space)\n      // Trim.\n      .replace(/^ | $/g, '')\n      // Some characters are considered “uppercase”, but if their lowercase\n      // counterpart is uppercased will result in a different uppercase\n      // character.\n      // Hence, to get that form, we perform both lower- and uppercase.\n      // Upper case makes sure keys will not interact with default prototypal\n      // methods: no method is uppercase.\n      .toLowerCase()\n      .toUpperCase()\n  )\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvLnBucG0vbWljcm9tYXJrLXV0aWwtbm9ybWFsaXplLWlkZW50aWZpZXJAMS4xLjAvbm9kZV9tb2R1bGVzL21pY3JvbWFyay11dGlsLW5vcm1hbGl6ZS1pZGVudGlmaWVyL2Rldi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsbUVBQU07QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzLy5wbnBtL21pY3JvbWFyay11dGlsLW5vcm1hbGl6ZS1pZGVudGlmaWVyQDEuMS4wL25vZGVfbW9kdWxlcy9taWNyb21hcmstdXRpbC1ub3JtYWxpemUtaWRlbnRpZmllci9kZXYvaW5kZXguanM/YmMzOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3ZhbHVlc30gZnJvbSAnbWljcm9tYXJrLXV0aWwtc3ltYm9sL3ZhbHVlcy5qcydcblxuLyoqXG4gKiBOb3JtYWxpemUgYW4gaWRlbnRpZmllciAoYXMgZm91bmQgaW4gcmVmZXJlbmNlcywgZGVmaW5pdGlvbnMpLlxuICpcbiAqIENvbGxhcHNlcyBtYXJrZG93biB3aGl0ZXNwYWNlLCB0cmltLCBhbmQgdGhlbiBsb3dlci0gYW5kIHVwcGVyY2FzZS5cbiAqXG4gKiBTb21lIGNoYXJhY3RlcnMgYXJlIGNvbnNpZGVyZWQg4oCcdXBwZXJjYXNl4oCdLCBzdWNoIGFzIFUrMDNGNCAoYM+0YCksIGJ1dCBpZiB0aGVpclxuICogbG93ZXJjYXNlIGNvdW50ZXJwYXJ0IChVKzAzQjggKGDOuGApKSBpcyB1cHBlcmNhc2VkIHdpbGwgcmVzdWx0IGluIGEgZGlmZmVyZW50XG4gKiB1cHBlcmNhc2UgY2hhcmFjdGVyIChVKzAzOTggKGDOmGApKS5cbiAqIFNvLCB0byBnZXQgYSBjYW5vbmljYWwgZm9ybSwgd2UgcGVyZm9ybSBib3RoIGxvd2VyLSBhbmQgdXBwZXJjYXNlLlxuICpcbiAqIFVzaW5nIHVwcGVyY2FzZSBsYXN0IG1ha2VzIHN1cmUga2V5cyB3aWxsIG5ldmVyIGludGVyYWN0IHdpdGggZGVmYXVsdFxuICogcHJvdG90eXBhbCB2YWx1ZXMgKHN1Y2ggYXMgYGNvbnN0cnVjdG9yYCk6IG5vdGhpbmcgaW4gdGhlIHByb3RvdHlwZSBvZlxuICogYE9iamVjdGAgaXMgdXBwZXJjYXNlLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogICBJZGVudGlmaWVyIHRvIG5vcm1hbGl6ZS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKiAgIE5vcm1hbGl6ZWQgaWRlbnRpZmllci5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZUlkZW50aWZpZXIodmFsdWUpIHtcbiAgcmV0dXJuIChcbiAgICB2YWx1ZVxuICAgICAgLy8gQ29sbGFwc2UgbWFya2Rvd24gd2hpdGVzcGFjZS5cbiAgICAgIC5yZXBsYWNlKC9bXFx0XFxuXFxyIF0rL2csIHZhbHVlcy5zcGFjZSlcbiAgICAgIC8vIFRyaW0uXG4gICAgICAucmVwbGFjZSgvXiB8ICQvZywgJycpXG4gICAgICAvLyBTb21lIGNoYXJhY3RlcnMgYXJlIGNvbnNpZGVyZWQg4oCcdXBwZXJjYXNl4oCdLCBidXQgaWYgdGhlaXIgbG93ZXJjYXNlXG4gICAgICAvLyBjb3VudGVycGFydCBpcyB1cHBlcmNhc2VkIHdpbGwgcmVzdWx0IGluIGEgZGlmZmVyZW50IHVwcGVyY2FzZVxuICAgICAgLy8gY2hhcmFjdGVyLlxuICAgICAgLy8gSGVuY2UsIHRvIGdldCB0aGF0IGZvcm0sIHdlIHBlcmZvcm0gYm90aCBsb3dlci0gYW5kIHVwcGVyY2FzZS5cbiAgICAgIC8vIFVwcGVyIGNhc2UgbWFrZXMgc3VyZSBrZXlzIHdpbGwgbm90IGludGVyYWN0IHdpdGggZGVmYXVsdCBwcm90b3R5cGFsXG4gICAgICAvLyBtZXRob2RzOiBubyBtZXRob2QgaXMgdXBwZXJjYXNlLlxuICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgIC50b1VwcGVyQ2FzZSgpXG4gIClcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/.pnpm/micromark-util-normalize-identifier@1.1.0/node_modules/micromark-util-normalize-identifier/dev/index.js\n");

/***/ })

};
;