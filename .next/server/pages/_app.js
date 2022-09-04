(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 8702:
/***/ ((module) => {

// Exports
module.exports = {
	"item": "contact_item__LrhE0",
	"title": "contact_title__gmI_f",
	"left": "contact_left__XfsNp",
	"label": "contact_label__Imioq",
	"shortcut": "contact_shortcut__j_wx8",
	"shortcutText": "contact_shortcutText__FOTe9",
	"icon": "contact_icon__u1EfI",
	"overlay": "contact_overlay__n4V4r",
	"content": "contact_content__4Ok0c",
	"overlay-show": "contact_overlay-show__RrDxg",
	"overlay-out": "contact_overlay-out__CJhsO",
	"content-show": "contact_content-show__33aqF",
	"content-out": "contact_content-out__X_V8c"
};


/***/ }),

/***/ 4319:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "menu_container__WuRmy",
	"divider": "menu_divider__I9QkJ",
	"upper": "menu_upper__4PJ2t",
	"nav": "menu_nav__8PhBa"
};


/***/ }),

/***/ 4995:
/***/ ((module) => {

// Exports
module.exports = {
	"item": "navLink_item__stJzr",
	"left": "navLink_left__T4qoy",
	"label": "navLink_label__k8Pkz",
	"shortcut": "navLink_shortcut__Jvh7x",
	"shortcutText": "navLink_shortcutText__mBbef",
	"logoIcon": "navLink_logoIcon__c30tN",
	"externalIcon": "navLink_externalIcon__jLC84",
	"desktopOnly": "navLink_desktopOnly__e1Adk"
};


/***/ }),

/***/ 7568:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "theme_container__ecAHa",
	"tabs": "theme_tabs__UL32C",
	"input": "theme_input__U6vZw",
	"tab": "theme_tab__fWFXE",
	"glider": "theme_glider__N3_qu"
};


/***/ }),

/***/ 2123:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Background)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1162);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_2__);



function Background() {
    //   const { theme, setTheme } = useTheme();
    const { resolvedTheme  } = (0,next_themes__WEBPACK_IMPORTED_MODULE_2__.useTheme)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const canvas = document.getElementById("canvas");
        const context = canvas.getContext("2d");
        let time = 0;
        let baseNum = resolvedTheme == "dark" ? 50 : 150;
        const color = function(x, y, r, g, b) {
            context.fillStyle = `rgb(${r}, ${g}, ${b})`;
            context.fillRect(x, y, 10, 10);
        };
        const B = function(x, y, time) {
            return Math.floor(baseNum + 48 * Math.cos((x * x - y * y) / 200 + time));
        };
        const G = function(x, y, time) {
            return Math.floor(baseNum + 50 * Math.sin((x * x * Math.cos(time / 4) + y * y * Math.sin(time / 3)) / 300));
        };
        // const R = "209";
        // //function (x, y, time) {
        // // return (Math.floor(192 + 64 * Math.sin(5 * Math.sin(time / 9) + ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100)));
        // //}
        const R = function(x, y, time) {
            return Math.floor(baseNum + 64 * Math.sin(5 * Math.sin(time / 9) + ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100));
        };
        const startAnimation = function() {
            for(let x = 0; x <= 30; x++){
                for(let y = 0; y <= 30; y++){
                    color(x, y, R(x, y, time), G(x, y, time), B(x, y, time));
                }
            }
            time = time + 0.015;
            window.requestAnimationFrame(startAnimation);
        };
        startAnimation();
    }, [
        resolvedTheme
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("canvas", {
            id: "canvas",
            width: "32px",
            height: "20px",
            className: "bg"
        })
    });
};


/***/ }),

/***/ 6600:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Contact)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_contact_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8702);
/* harmony import */ var _components_contact_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_components_contact_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3363);
/* harmony import */ var _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_util_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8948);
/* harmony import */ var _styles_util_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_util_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _contactContent_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3844);
/* harmony import */ var _radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(999);
/* harmony import */ var _radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_contactContent_component__WEBPACK_IMPORTED_MODULE_4__]);
_contactContent_component__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








function Contact({ svg , label , shortcut  }) {
    var time = 0;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setInterval(function() {
            time++;
        }, 200);
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        document.addEventListener("keypress", function(event) {
            if (event.key === shortcut && time > 1) {
                document.getElementById("contactTrigger").click();
                time = 0;
            }
        });
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_3__.Root, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_3__.Trigger, {
                asChild: true,
                id: "contactTrigger",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_components_contact_module_css__WEBPACK_IMPORTED_MODULE_6___default().item),
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_components_contact_module_css__WEBPACK_IMPORTED_MODULE_6___default().left),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_styles_util_module_css__WEBPACK_IMPORTED_MODULE_7___default().icon),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        className: "iconInvert",
                                        priority: true,
                                        src: "/feather/" + svg + ".svg",
                                        height: 66,
                                        width: 66,
                                        alt: label
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: (_components_contact_module_css__WEBPACK_IMPORTED_MODULE_6___default().label),
                                    children: label
                                })
                            ]
                        }),
                        shortcut ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_5__.Provider, {
                            delayDuration: 500,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_5__.Root, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_5__.Trigger, {
                                        asChild: true,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_components_contact_module_css__WEBPACK_IMPORTED_MODULE_6___default().shortcut),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: (_components_contact_module_css__WEBPACK_IMPORTED_MODULE_6___default().shortcutText),
                                                children: shortcut
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_5__.Content, {
                                        className: (_styles_util_module_css__WEBPACK_IMPORTED_MODULE_7___default().tooltip),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                style: {
                                                    marginRight: "4px"
                                                },
                                                children: "Press"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: (_components_contact_module_css__WEBPACK_IMPORTED_MODULE_6___default().shortcut),
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: (_components_contact_module_css__WEBPACK_IMPORTED_MODULE_6___default().shortcutText),
                                                    children: shortcut
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_5__.Arrow, {
                                                className: (_components_contact_module_css__WEBPACK_IMPORTED_MODULE_6___default().arrow)
                                            })
                                        ]
                                    })
                                ]
                            })
                        }) : null
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_3__.Portal, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_3__.Overlay, {
                        className: (_components_contact_module_css__WEBPACK_IMPORTED_MODULE_6___default().overlay)
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_3__.Content, {
                        className: (_components_contact_module_css__WEBPACK_IMPORTED_MODULE_6___default().content),
                        onOpenAutoFocus: (e)=>e.preventDefault(),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_3__.Title, {
                                className: (_components_contact_module_css__WEBPACK_IMPORTED_MODULE_6___default().title),
                                children: "Contact"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_contactContent_component__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                inModal: "true"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9219:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Menu)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_menu_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4319);
/* harmony import */ var _components_menu_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_components_menu_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _theme_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1440);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _navLink_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3179);
/* harmony import */ var _contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6600);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_util_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8948);
/* harmony import */ var _styles_util_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_util_module_css__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_contact_component__WEBPACK_IMPORTED_MODULE_4__]);
_contact_component__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








function Menu() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_components_menu_module_css__WEBPACK_IMPORTED_MODULE_6___default().container),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_components_menu_module_css__WEBPACK_IMPORTED_MODULE_6___default().upper),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                        className: (_styles_util_module_css__WEBPACK_IMPORTED_MODULE_7___default().siteTitle),
                        children: "Kim"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
                        className: (_components_menu_module_css__WEBPACK_IMPORTED_MODULE_6___default().nav),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_navLink_component__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                svg: "recents",
                                href: "/",
                                label: "Home",
                                shortcut: "1"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_navLink_component__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                svg: "about",
                                href: "/about",
                                label: "About",
                                shortcut: "2"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_navLink_component__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                svg: "projects",
                                href: "/projects",
                                label: "Projects",
                                shortcut: "3"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (_components_menu_module_css__WEBPACK_IMPORTED_MODULE_6___default().divider),
                                children: "Resources"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_navLink_component__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                svg: "newsletters",
                                href: "/blogs",
                                label: "Writings",
                                shortcut: "4"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_navLink_component__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                svg: "reading",
                                href: "/reading-list",
                                label: "Reading List",
                                shortcut: "5"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (_components_menu_module_css__WEBPACK_IMPORTED_MODULE_6___default().divider),
                                children: "Stay in touch"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_contact_component__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                svg: "chat",
                                label: "Contact",
                                shortcut: "6"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_navLink_component__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                svg: "twitter",
                                href: "https://twitter.com/sykim_99",
                                label: "Twitter",
                                external: "true"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_theme_module__WEBPACK_IMPORTED_MODULE_1__/* .ThemeChanger */ .g, {})
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3179:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ NavLink)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_navLink_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4995);
/* harmony import */ var _components_navLink_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_components_navLink_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_util_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8948);
/* harmony import */ var _styles_util_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_util_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(999);
/* harmony import */ var _radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_5__);








function NavLink({ svg , label , href , shortcut , external  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const ariaCurrent = router.asPath.includes(href) && href !== "/" ? "page" : router.pathname === href ? "page" : undefined;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        document.addEventListener("keypress", function(event) {
            if (event.key === shortcut) {
                router.push(href);
            }
        });
    });
    return external ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
        target: "_blank",
        className: (_components_navLink_module_css__WEBPACK_IMPORTED_MODULE_6___default().item),
        href: href,
        rel: "noopener noreferrer",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_components_navLink_module_css__WEBPACK_IMPORTED_MODULE_6___default().left),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_components_navLink_module_css__WEBPACK_IMPORTED_MODULE_6___default().logoIcon),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                            priority: true,
                            src: "/icons/" + svg + ".svg",
                            height: 66,
                            width: 66,
                            alt: label
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: (_components_navLink_module_css__WEBPACK_IMPORTED_MODULE_6___default().label),
                        children: label
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_components_navLink_module_css__WEBPACK_IMPORTED_MODULE_6___default().desktopOnly),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_components_navLink_module_css__WEBPACK_IMPORTED_MODULE_6___default().externalIcon),
                    children: "↗"
                })
            })
        ]
    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: href,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
            className: (_components_navLink_module_css__WEBPACK_IMPORTED_MODULE_6___default().item),
            "aria-current": ariaCurrent,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_components_navLink_module_css__WEBPACK_IMPORTED_MODULE_6___default().left),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_styles_util_module_css__WEBPACK_IMPORTED_MODULE_7___default().icon),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                className: "iconInvert",
                                priority: true,
                                src: "/feather/" + svg + ".svg",
                                height: 66,
                                width: 66,
                                alt: label
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: (_components_navLink_module_css__WEBPACK_IMPORTED_MODULE_6___default().label),
                            children: label
                        })
                    ]
                }),
                shortcut ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_5__.Provider, {
                    delayDuration: 500,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_5__.Root, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_5__.Trigger, {
                                asChild: true,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_components_navLink_module_css__WEBPACK_IMPORTED_MODULE_6___default().shortcut),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: (_components_navLink_module_css__WEBPACK_IMPORTED_MODULE_6___default().shortcutText),
                                        children: shortcut
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_5__.Content, {
                                className: (_styles_util_module_css__WEBPACK_IMPORTED_MODULE_7___default().tooltip),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        style: {
                                            marginRight: "4px"
                                        },
                                        children: "Press"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_components_navLink_module_css__WEBPACK_IMPORTED_MODULE_6___default().shortcut),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: (_components_navLink_module_css__WEBPACK_IMPORTED_MODULE_6___default().shortcutText),
                                            children: shortcut
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_5__.Arrow, {
                                        className: (_components_navLink_module_css__WEBPACK_IMPORTED_MODULE_6___default().arrow)
                                    })
                                ]
                            })
                        ]
                    })
                }) : null
            ]
        })
    });
};


/***/ }),

/***/ 1440:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ ThemeChanger)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1162);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_theme_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7568);
/* harmony import */ var _components_theme_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_theme_module_css__WEBPACK_IMPORTED_MODULE_3__);




const ThemeChanger = ()=>{
    const { theme , setTheme  } = (0,next_themes__WEBPACK_IMPORTED_MODULE_1__.useTheme)();
    let isLightChecked = theme == "light" ? "checked" : null;
    let isDarkChecked = theme == "dark" ? "checked" : null;
    let isAutoChecked = theme == "system" ? "checked" : null;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_components_theme_module_css__WEBPACK_IMPORTED_MODULE_3___default().tabs),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    className: (_components_theme_module_css__WEBPACK_IMPORTED_MODULE_3___default().input),
                    type: "radio",
                    id: "radio-1",
                    name: "tabs",
                    onChange: ()=>setTheme("light"),
                    checked: isLightChecked
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                    className: (_components_theme_module_css__WEBPACK_IMPORTED_MODULE_3___default().tab),
                    htmlFor: "radio-1",
                    children: "Light"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    className: (_components_theme_module_css__WEBPACK_IMPORTED_MODULE_3___default().input),
                    type: "radio",
                    id: "radio-2",
                    name: "tabs",
                    onChange: ()=>setTheme("dark"),
                    checked: isDarkChecked
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                    className: (_components_theme_module_css__WEBPACK_IMPORTED_MODULE_3___default().tab),
                    htmlFor: "radio-2",
                    children: "Dark"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    className: (_components_theme_module_css__WEBPACK_IMPORTED_MODULE_3___default().input),
                    type: "radio",
                    id: "radio-3",
                    name: "tabs",
                    onChange: ()=>setTheme("system"),
                    checked: isAutoChecked
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                    className: (_components_theme_module_css__WEBPACK_IMPORTED_MODULE_3___default().tab),
                    htmlFor: "radio-3",
                    children: "Auto"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: (_components_theme_module_css__WEBPACK_IMPORTED_MODULE_3___default().glider)
                })
            ]
        })
    });
};


/***/ }),

/***/ 8510:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1162);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_background_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2123);
/* harmony import */ var _components_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9219);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6201);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_menu_component__WEBPACK_IMPORTED_MODULE_3__, react_hot_toast__WEBPACK_IMPORTED_MODULE_4__]);
([_components_menu_component__WEBPACK_IMPORTED_MODULE_3__, react_hot_toast__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_themes__WEBPACK_IMPORTED_MODULE_1__.ThemeProvider, {
        attribute: "class",
        value: {
            dark: "dark-theme"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hot_toast__WEBPACK_IMPORTED_MODULE_4__.Toaster, {
                toastOptions: {
                    duration: 1500,
                    style: {
                        padding: "3px",
                        borderRadius: "6px",
                        fontSize: "14px"
                    }
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_background_component__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_menu_component__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                ...pageProps
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3363:
/***/ ((module) => {

"use strict";
module.exports = require("@radix-ui/react-dialog");

/***/ }),

/***/ 999:
/***/ ((module) => {

"use strict";
module.exports = require("@radix-ui/react-tooltip");

/***/ }),

/***/ 1162:
/***/ ((module) => {

"use strict";
module.exports = require("next-themes");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6201:
/***/ ((module) => {

"use strict";
module.exports = import("react-hot-toast");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [699,964,676,664,675,948,844], () => (__webpack_exec__(8510)));
module.exports = __webpack_exports__;

})();