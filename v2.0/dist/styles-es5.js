(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"], {
        /***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css": 
        /*!*****************************************************************************************************************************************************************!*\
          !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
          \*****************************************************************************************************************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            module.exports = [[module.i, "/* Importamos los estilos basicos del proyecto */\r\n\r\n* {\r\n    box-sizing: border-box;\r\n}\r\n\r\n/* Style the body */\r\n\r\nbody {\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    margin: 0;\r\n}\r\n\r\n/* Header/logo Title */\r\n\r\n.header {\r\n    padding: 80px;\r\n    text-align: center;\r\n    background: #1abc9c;\r\n    color: white;\r\n}\r\n\r\n/* Increase the font size of the heading */\r\n\r\n.header h1 {\r\n    font-size: 40px;\r\n}\r\n\r\n/* Sticky navbar - toggles between relative and fixed, depending on the scroll position. It is positioned relative until a given offset position is met in the viewport - then it \"sticks\" in place (like position:fixed). The sticky value is not supported in IE or Edge 15 and earlier versions. However, for these versions the navbar will inherit default position */\r\n\r\n.navbar {\r\n    overflow: hidden;\r\n    background-color: #333;\r\n    position: sticky;\r\n    position: -webkit-sticky;\r\n    top: 0;\r\n}\r\n\r\n/* Style the navigation bar links */\r\n\r\n.navbar a {\r\n    float: left;\r\n    display: block;\r\n    color: white;\r\n    text-align: center;\r\n    padding: 14px 20px;\r\n    text-decoration: none;\r\n}\r\n\r\n/* Right-aligned link */\r\n\r\n.navbar a.right {\r\n    float: right;\r\n}\r\n\r\n/* Change color on hover */\r\n\r\n.navbar a:hover {\r\n    color: black;\r\n}\r\n\r\n/* Active/current link */\r\n\r\n.navbar a.active {\r\n    background-color: #666;\r\n    color: white;\r\n}\r\n\r\n.navbar i {\r\n    font-size: 45px;\r\n}\r\n\r\n/* Column container */\r\n\r\n.row {\r\n    /* IE10 */\r\n    display: flex;\r\n    /* IE10 */\r\n    flex-wrap: wrap;\r\n}\r\n\r\n/* Create two unequal columns that sits next to each other */\r\n\r\n/* Sidebar/left column */\r\n\r\n.side {\r\n    /* IE10 */\r\n    flex: 30%;\r\n    background-color: #f1f1f1;\r\n    padding: 20px;\r\n}\r\n\r\n/* Main column */\r\n\r\n.main {\r\n    /* IE10 */\r\n    flex: 70%;\r\n    background-color: white;\r\n    padding: 20px;\r\n}\r\n\r\n/* Fake image, just for this example */\r\n\r\n.fakeimg {\r\n    background-color: HoneyDew;\r\n    width: 100%;\r\n    padding: 20px;\r\n    border: 5px outset HoneyDew;\r\n    /* Grosor del Borde */\r\n    /* Color del Borde */\r\n    border-radius: 8px;\r\n    color: white;\r\n    /* Color del texto */\r\n    text-align: center;\r\n    /* Alineación del texto */\r\n    text-shadow: -1px -1px rgba(0, 0, 0, .2);\r\n}\r\n\r\n.fakeimg input {\r\n    margin: 20px;\r\n}\r\n\r\n/* Footer */\r\n\r\n.footer {\r\n    position: fixed;\r\n    left: 0;\r\n    bottom: 0;\r\n    width: 100%;\r\n    color: white;\r\n}\r\n\r\n.footer p {\r\n    margin: 5px;\r\n}\r\n\r\n/* Responsive layout - when the screen is less than 700px wide, make the two columns stack on top of each other instead of next to each other */\r\n\r\n@media screen and (max-width: 700px) {\r\n    .row {\r\n        flex-direction: column;\r\n    }\r\n}\r\n\r\n/* Responsive layout - when the screen is less than 400px wide, make the navigation links stack on top of each other instead of next to each other */\r\n\r\n@media screen and (max-width: 400px) {\r\n    .navbar a {\r\n        float: none;\r\n        width: 100%;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdEQUFnRDs7QUFFaEQ7SUFDSSxzQkFBc0I7QUFDMUI7O0FBR0EsbUJBQW1COztBQUVuQjtJQUNJLHlDQUF5QztJQUN6QyxTQUFTO0FBQ2I7O0FBR0Esc0JBQXNCOztBQUV0QjtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBR0EsMENBQTBDOztBQUUxQztJQUNJLGVBQWU7QUFDbkI7O0FBR0EsMFdBQTBXOztBQUUxVztJQUNJLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLHdCQUF3QjtJQUN4QixNQUFNO0FBQ1Y7O0FBR0EsbUNBQW1DOztBQUVuQztJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2QsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIscUJBQXFCO0FBQ3pCOztBQUdBLHVCQUF1Qjs7QUFFdkI7SUFDSSxZQUFZO0FBQ2hCOztBQUdBLDBCQUEwQjs7QUFFMUI7SUFDSSxZQUFZO0FBQ2hCOztBQUdBLHdCQUF3Qjs7QUFFeEI7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBR0EscUJBQXFCOztBQUVyQjtJQUVJLFNBQVM7SUFDVCxhQUFhO0lBRWIsU0FBUztJQUNULGVBQWU7QUFDbkI7O0FBR0EsNERBQTREOztBQUc1RCx3QkFBd0I7O0FBRXhCO0lBRUksU0FBUztJQUNULFNBQVM7SUFDVCx5QkFBeUI7SUFDekIsYUFBYTtBQUNqQjs7QUFHQSxnQkFBZ0I7O0FBRWhCO0lBRUksU0FBUztJQUNULFNBQVM7SUFDVCx1QkFBdUI7SUFDdkIsYUFBYTtBQUNqQjs7QUFHQSxzQ0FBc0M7O0FBRXRDO0lBQ0ksMEJBQTBCO0lBQzFCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6Qix3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUdBLFdBQVc7O0FBRVg7SUFDSSxlQUFlO0lBQ2YsT0FBTztJQUNQLFNBQVM7SUFDVCxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFHQSwrSUFBK0k7O0FBRS9JO0lBQ0k7UUFDSSxzQkFBc0I7SUFDMUI7QUFDSjs7QUFHQSxvSkFBb0o7O0FBRXBKO0lBQ0k7UUFDSSxXQUFXO1FBQ1gsV0FBVztJQUNmO0FBQ0oiLCJmaWxlIjoic3JjL3N0eWxlcy5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBJbXBvcnRhbW9zIGxvcyBlc3RpbG9zIGJhc2ljb3MgZGVsIHByb3llY3RvICovXHJcblxyXG4qIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcblxyXG4vKiBTdHlsZSB0aGUgYm9keSAqL1xyXG5cclxuYm9keSB7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuXHJcbi8qIEhlYWRlci9sb2dvIFRpdGxlICovXHJcblxyXG4uaGVhZGVyIHtcclxuICAgIHBhZGRpbmc6IDgwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMWFiYzljO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5cclxuLyogSW5jcmVhc2UgdGhlIGZvbnQgc2l6ZSBvZiB0aGUgaGVhZGluZyAqL1xyXG5cclxuLmhlYWRlciBoMSB7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbn1cclxuXHJcblxyXG4vKiBTdGlja3kgbmF2YmFyIC0gdG9nZ2xlcyBiZXR3ZWVuIHJlbGF0aXZlIGFuZCBmaXhlZCwgZGVwZW5kaW5nIG9uIHRoZSBzY3JvbGwgcG9zaXRpb24uIEl0IGlzIHBvc2l0aW9uZWQgcmVsYXRpdmUgdW50aWwgYSBnaXZlbiBvZmZzZXQgcG9zaXRpb24gaXMgbWV0IGluIHRoZSB2aWV3cG9ydCAtIHRoZW4gaXQgXCJzdGlja3NcIiBpbiBwbGFjZSAobGlrZSBwb3NpdGlvbjpmaXhlZCkuIFRoZSBzdGlja3kgdmFsdWUgaXMgbm90IHN1cHBvcnRlZCBpbiBJRSBvciBFZGdlIDE1IGFuZCBlYXJsaWVyIHZlcnNpb25zLiBIb3dldmVyLCBmb3IgdGhlc2UgdmVyc2lvbnMgdGhlIG5hdmJhciB3aWxsIGluaGVyaXQgZGVmYXVsdCBwb3NpdGlvbiAqL1xyXG5cclxuLm5hdmJhciB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxuICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XHJcbiAgICB0b3A6IDA7XHJcbn1cclxuXHJcblxyXG4vKiBTdHlsZSB0aGUgbmF2aWdhdGlvbiBiYXIgbGlua3MgKi9cclxuXHJcbi5uYXZiYXIgYSB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTRweCAyMHB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5cclxuLyogUmlnaHQtYWxpZ25lZCBsaW5rICovXHJcblxyXG4ubmF2YmFyIGEucmlnaHQge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG5cclxuLyogQ2hhbmdlIGNvbG9yIG9uIGhvdmVyICovXHJcblxyXG4ubmF2YmFyIGE6aG92ZXIge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG5cclxuLyogQWN0aXZlL2N1cnJlbnQgbGluayAqL1xyXG5cclxuLm5hdmJhciBhLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY2O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubmF2YmFyIGkge1xyXG4gICAgZm9udC1zaXplOiA0NXB4O1xyXG59XHJcblxyXG5cclxuLyogQ29sdW1uIGNvbnRhaW5lciAqL1xyXG5cclxuLnJvdyB7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIC8qIElFMTAgKi9cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAtbXMtZmxleC13cmFwOiB3cmFwO1xyXG4gICAgLyogSUUxMCAqL1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG5cclxuLyogQ3JlYXRlIHR3byB1bmVxdWFsIGNvbHVtbnMgdGhhdCBzaXRzIG5leHQgdG8gZWFjaCBvdGhlciAqL1xyXG5cclxuXHJcbi8qIFNpZGViYXIvbGVmdCBjb2x1bW4gKi9cclxuXHJcbi5zaWRlIHtcclxuICAgIC1tcy1mbGV4OiAzMCU7XHJcbiAgICAvKiBJRTEwICovXHJcbiAgICBmbGV4OiAzMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuXHJcbi8qIE1haW4gY29sdW1uICovXHJcblxyXG4ubWFpbiB7XHJcbiAgICAtbXMtZmxleDogNzAlO1xyXG4gICAgLyogSUUxMCAqL1xyXG4gICAgZmxleDogNzAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG5cclxuLyogRmFrZSBpbWFnZSwganVzdCBmb3IgdGhpcyBleGFtcGxlICovXHJcblxyXG4uZmFrZWltZyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBIb25leURldztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJvcmRlcjogNXB4IG91dHNldCBIb25leURldztcclxuICAgIC8qIEdyb3NvciBkZWwgQm9yZGUgKi9cclxuICAgIC8qIENvbG9yIGRlbCBCb3JkZSAqL1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgLyogQ29sb3IgZGVsIHRleHRvICovXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAvKiBBbGluZWFjacOzbiBkZWwgdGV4dG8gKi9cclxuICAgIHRleHQtc2hhZG93OiAtMXB4IC0xcHggcmdiYSgwLCAwLCAwLCAuMik7XHJcbn1cclxuXHJcbi5mYWtlaW1nIGlucHV0IHtcclxuICAgIG1hcmdpbjogMjBweDtcclxufVxyXG5cclxuXHJcbi8qIEZvb3RlciAqL1xyXG5cclxuLmZvb3RlciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5mb290ZXIgcCB7XHJcbiAgICBtYXJnaW46IDVweDtcclxufVxyXG5cclxuXHJcbi8qIFJlc3BvbnNpdmUgbGF5b3V0IC0gd2hlbiB0aGUgc2NyZWVuIGlzIGxlc3MgdGhhbiA3MDBweCB3aWRlLCBtYWtlIHRoZSB0d28gY29sdW1ucyBzdGFjayBvbiB0b3Agb2YgZWFjaCBvdGhlciBpbnN0ZWFkIG9mIG5leHQgdG8gZWFjaCBvdGhlciAqL1xyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcclxuICAgIC5yb3cge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vKiBSZXNwb25zaXZlIGxheW91dCAtIHdoZW4gdGhlIHNjcmVlbiBpcyBsZXNzIHRoYW4gNDAwcHggd2lkZSwgbWFrZSB0aGUgbmF2aWdhdGlvbiBsaW5rcyBzdGFjayBvbiB0b3Agb2YgZWFjaCBvdGhlciBpbnN0ZWFkIG9mIG5leHQgdG8gZWFjaCBvdGhlciAqL1xyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcclxuICAgIC5uYXZiYXIgYSB7XHJcbiAgICAgICAgZmxvYXQ6IG5vbmU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbn0iXX0= */", '', '']];
            /***/ 
        }),
        /***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js": 
        /*!****************************************************************************!*\
          !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
          \****************************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            "use strict";
            var stylesInDom = {};
            var isOldIE = function isOldIE() {
                var memo;
                return function memorize() {
                    if (typeof memo === 'undefined') {
                        // Test for IE <= 9 as proposed by Browserhacks
                        // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
                        // Tests for existence of standard globals is to allow style-loader
                        // to operate correctly into non-standard environments
                        // @see https://github.com/webpack-contrib/style-loader/issues/177
                        memo = Boolean(window && document && document.all && !window.atob);
                    }
                    return memo;
                };
            }();
            var getTarget = function getTarget() {
                var memo = {};
                return function memorize(target) {
                    if (typeof memo[target] === 'undefined') {
                        var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself
                        if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
                            try {
                                // This will throw an exception if access to iframe is blocked
                                // due to cross-origin restrictions
                                styleTarget = styleTarget.contentDocument.head;
                            }
                            catch (e) {
                                // istanbul ignore next
                                styleTarget = null;
                            }
                        }
                        memo[target] = styleTarget;
                    }
                    return memo[target];
                };
            }();
            function listToStyles(list, options) {
                var styles = [];
                var newStyles = {};
                for (var i = 0; i < list.length; i++) {
                    var item = list[i];
                    var id = options.base ? item[0] + options.base : item[0];
                    var css = item[1];
                    var media = item[2];
                    var sourceMap = item[3];
                    var part = {
                        css: css,
                        media: media,
                        sourceMap: sourceMap
                    };
                    if (!newStyles[id]) {
                        styles.push(newStyles[id] = {
                            id: id,
                            parts: [part]
                        });
                    }
                    else {
                        newStyles[id].parts.push(part);
                    }
                }
                return styles;
            }
            function addStylesToDom(styles, options) {
                for (var i = 0; i < styles.length; i++) {
                    var item = styles[i];
                    var domStyle = stylesInDom[item.id];
                    var j = 0;
                    if (domStyle) {
                        domStyle.refs++;
                        for (; j < domStyle.parts.length; j++) {
                            domStyle.parts[j](item.parts[j]);
                        }
                        for (; j < item.parts.length; j++) {
                            domStyle.parts.push(addStyle(item.parts[j], options));
                        }
                    }
                    else {
                        var parts = [];
                        for (; j < item.parts.length; j++) {
                            parts.push(addStyle(item.parts[j], options));
                        }
                        stylesInDom[item.id] = {
                            id: item.id,
                            refs: 1,
                            parts: parts
                        };
                    }
                }
            }
            function insertStyleElement(options) {
                var style = document.createElement('style');
                if (typeof options.attributes.nonce === 'undefined') {
                    var nonce = true ? __webpack_require__.nc : undefined;
                    if (nonce) {
                        options.attributes.nonce = nonce;
                    }
                }
                Object.keys(options.attributes).forEach(function (key) {
                    style.setAttribute(key, options.attributes[key]);
                });
                if (typeof options.insert === 'function') {
                    options.insert(style);
                }
                else {
                    var target = getTarget(options.insert || 'head');
                    if (!target) {
                        throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                    }
                    target.appendChild(style);
                }
                return style;
            }
            function removeStyleElement(style) {
                // istanbul ignore if
                if (style.parentNode === null) {
                    return false;
                }
                style.parentNode.removeChild(style);
            }
            /* istanbul ignore next  */
            var replaceText = function replaceText() {
                var textStore = [];
                return function replace(index, replacement) {
                    textStore[index] = replacement;
                    return textStore.filter(Boolean).join('\n');
                };
            }();
            function applyToSingletonTag(style, index, remove, obj) {
                var css = remove ? '' : obj.css; // For old IE
                /* istanbul ignore if  */
                if (style.styleSheet) {
                    style.styleSheet.cssText = replaceText(index, css);
                }
                else {
                    var cssNode = document.createTextNode(css);
                    var childNodes = style.childNodes;
                    if (childNodes[index]) {
                        style.removeChild(childNodes[index]);
                    }
                    if (childNodes.length) {
                        style.insertBefore(cssNode, childNodes[index]);
                    }
                    else {
                        style.appendChild(cssNode);
                    }
                }
            }
            function applyToTag(style, options, obj) {
                var css = obj.css;
                var media = obj.media;
                var sourceMap = obj.sourceMap;
                if (media) {
                    style.setAttribute('media', media);
                }
                if (sourceMap && btoa) {
                    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
                } // For old IE
                /* istanbul ignore if  */
                if (style.styleSheet) {
                    style.styleSheet.cssText = css;
                }
                else {
                    while (style.firstChild) {
                        style.removeChild(style.firstChild);
                    }
                    style.appendChild(document.createTextNode(css));
                }
            }
            var singleton = null;
            var singletonCounter = 0;
            function addStyle(obj, options) {
                var style;
                var update;
                var remove;
                if (options.singleton) {
                    var styleIndex = singletonCounter++;
                    style = singleton || (singleton = insertStyleElement(options));
                    update = applyToSingletonTag.bind(null, style, styleIndex, false);
                    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
                }
                else {
                    style = insertStyleElement(options);
                    update = applyToTag.bind(null, style, options);
                    remove = function remove() {
                        removeStyleElement(style);
                    };
                }
                update(obj);
                return function updateStyle(newObj) {
                    if (newObj) {
                        if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
                            return;
                        }
                        update(obj = newObj);
                    }
                    else {
                        remove();
                    }
                };
            }
            module.exports = function (list, options) {
                options = options || {};
                options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
                // tags it will allow on a page
                if (!options.singleton && typeof options.singleton !== 'boolean') {
                    options.singleton = isOldIE();
                }
                var styles = listToStyles(list, options);
                addStylesToDom(styles, options);
                return function update(newList) {
                    var mayRemove = [];
                    for (var i = 0; i < styles.length; i++) {
                        var item = styles[i];
                        var domStyle = stylesInDom[item.id];
                        if (domStyle) {
                            domStyle.refs--;
                            mayRemove.push(domStyle);
                        }
                    }
                    if (newList) {
                        var newStyles = listToStyles(newList, options);
                        addStylesToDom(newStyles, options);
                    }
                    for (var _i = 0; _i < mayRemove.length; _i++) {
                        var _domStyle = mayRemove[_i];
                        if (_domStyle.refs === 0) {
                            for (var j = 0; j < _domStyle.parts.length; j++) {
                                _domStyle.parts[j]();
                            }
                            delete stylesInDom[_domStyle.id];
                        }
                    }
                };
            };
            /***/ 
        }),
        /***/ "./src/styles.css": 
        /*!************************!*\
          !*** ./src/styles.css ***!
          \************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");
            if (typeof content === 'string') {
                content = [[module.i, content, '']];
            }
            var options = {};
            options.insert = "head";
            options.singleton = false;
            var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);
            if (content.locals) {
                module.exports = content.locals;
            }
            /***/ 
        }),
        /***/ 3: 
        /*!******************************!*\
          !*** multi ./src/styles.css ***!
          \******************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! C:\Users\cme022es\Documents\Carlos Mur\visual-code\angular\angular-firestore\src\styles.css */ "./src/styles.css");
            /***/ 
        })
    }, [[3, "runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map
//# sourceMappingURL=styles-es5.js.map
//# sourceMappingURL=styles-es5.js.map