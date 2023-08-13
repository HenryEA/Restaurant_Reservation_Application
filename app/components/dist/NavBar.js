"use client";
"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var AuthModal_1 = require("./AuthModal");
var react_1 = require("react");
var AuthContext_1 = require("../context/AuthContext");
var useAuth_1 = require("../../hooks/useAuth");
function NavBar() {
    var _a = react_1.useContext(AuthContext_1.AuthenticationContext), data = _a.data, loading = _a.loading;
    var signout = useAuth_1["default"]().signout;
    return (React.createElement("nav", { className: "bg-white p-2 flex justify-between" },
        React.createElement(link_1["default"], { href: "/", className: "font-bold text-[#ce2203] text-2xl" }, "OpenTable"),
        React.createElement("div", null, loading ? null : (React.createElement("div", { className: "flex" }, data ? (React.createElement("button", { className: "from-[#f5a700] to-[#ffee00] hover:bg-yellow-300 text-black border p-1 px-4 rounded mr-3", onClick: signout }, "Sign out")) : (React.createElement(React.Fragment, null,
            React.createElement(AuthModal_1["default"], { isSignin: true }),
            React.createElement(AuthModal_1["default"], { isSignin: false }))))))));
}
exports["default"] = NavBar;
