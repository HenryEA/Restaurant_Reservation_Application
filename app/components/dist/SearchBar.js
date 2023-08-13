"use client";
"use strict";
exports.__esModule = true;
var navigation_1 = require("next/navigation");
var react_1 = require("react");
function SearchBar() {
    var router = navigation_1.useRouter();
    var _a = react_1.useState(""), location = _a[0], setLocation = _a[1];
    return (React.createElement("div", { className: "text-left text-lg py-3 m-auto flex justify-center" },
        React.createElement("input", { className: "rounded  mr-3 p-2 w-[450px]", type: "text", placeholder: "State, city or town", value: location, onChange: function (e) { return setLocation(e.target.value); } }),
        React.createElement("button", { className: "rounded bg-gradient-to-r from-[#f5a700] to-[#ffee00] px-9 py-2 text-black", onClick: function () {
                if (location === "")
                    return;
                router.push("/search?city=" + location);
                setLocation("");
            } }, "Let's go")));
}
exports["default"] = SearchBar;
