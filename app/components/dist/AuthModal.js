"use client";
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
var Box_1 = require("@mui/material/Box");
var Modal_1 = require("@mui/material/Modal");
var AuthModalInputs_1 = require("./AuthModalInputs");
var useAuth_1 = require("../../hooks/useAuth");
var AuthContext_1 = require("../context/AuthContext");
var material_1 = require("@mui/material");
var style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4
};
function AuthModal(_a) {
    var isSignin = _a.isSignin;
    var _b = react_1.useState(false), open = _b[0], setOpen = _b[1];
    var handleOpen = function () { return setOpen(true); };
    var handleClose = function () { return setOpen(false); };
    var _c = useAuth_1["default"](), signin = _c.signin, signup = _c.signup;
    var _d = react_1.useContext(AuthContext_1.AuthenticationContext), loading = _d.loading, data = _d.data, error = _d.error;
    var renderContent = function (signinContent, signupContent) {
        return isSignin ? signinContent : signupContent;
    };
    var handleChangeInput = function (e) {
        var _a;
        setInputs(__assign(__assign({}, inputs), (_a = {}, _a[e.target.name] = e.target.value, _a)));
    };
    var _e = react_1.useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        city: "",
        password: ""
    }), inputs = _e[0], setInputs = _e[1];
    var _f = react_1.useState(true), disabled = _f[0], setDisabled = _f[1];
    react_1.useEffect(function () {
        if (isSignin) {
            if (inputs.password && inputs.email) {
                return setDisabled(false);
            }
        }
        else {
            if (inputs.firstName &&
                inputs.lastName &&
                inputs.email &&
                inputs.password &&
                inputs.city &&
                inputs.phone) {
                return setDisabled(false);
            }
        }
        setDisabled(true);
    }, [inputs]);
    var handleClick = function () {
        if (isSignin) {
            signin({ email: inputs.email, password: inputs.password }, handleClose);
        }
        else {
            signup(inputs, handleClose);
        }
    };
    return (React.createElement("div", null,
        React.createElement("button", { className: renderContent("bg-yellow-400 text-black hover:bg-yellow-300", "") + " border p-1 px-4 rounded mr-3", onClick: handleOpen }, renderContent("Sign in", "Sign up")),
        React.createElement(Modal_1["default"], { open: open, onClose: handleClose, "aria-labelledby": "modal-modal-title", "aria-describedby": "modal-modal-description" },
            React.createElement(Box_1["default"], { sx: style }, loading ? (React.createElement("div", { className: "py-24 px-2 h-[600px] flex justify-center" },
                React.createElement(material_1.CircularProgress, null))) : (React.createElement("div", { className: "p-2 h-[600px]" },
                error ? (React.createElement(material_1.Alert, { severity: "error", className: "mb-4" }, error)) : null,
                React.createElement("div", { className: "uppercase font-bold text-center pb-2 border-b mb-2" },
                    React.createElement("p", { className: "text-sm" }, renderContent("Sign In", "Create Account"))),
                React.createElement("div", { className: "m-auto" },
                    React.createElement("h2", { className: "text-2xl font-light text-center" }, renderContent("Log Into Your Account", "Create Your OpenTable Account")),
                    React.createElement(AuthModalInputs_1["default"], { inputs: inputs, handleChangeInput: handleChangeInput, isSignin: isSignin }),
                    React.createElement("button", { className: "uppercase bg-yellow-400 hover:bg-yellow-300 w-full p-3 rounded text-sm mb-5 disabled:bg-gray-400", disabled: disabled, onClick: handleClick }, renderContent("Sign In", "Create Account")))))))));
}
exports["default"] = AuthModal;
