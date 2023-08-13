"use strict";
exports.__esModule = true;
var SearchBar_1 = require("./SearchBar");
function Header() {
    return (React.createElement("div", { className: "h-64 bg-gradient-to-r from-[#f5a700] to-[#ff3300] p-2" },
        React.createElement("div", { className: "text-center mt-10" },
            React.createElement("h1", { className: "text-white text-5xl font-bold mb-2" }, "Find your table for any occasion"),
            React.createElement(SearchBar_1["default"], null))));
}
exports["default"] = Header;
