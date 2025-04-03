"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiErrorHandle = ApiErrorHandle;
function ApiErrorHandle(error) {
    if (typeof error === "string")
        return ({ message: error, success: false, data: null });
    else if (typeof error === "object")
        return ({ message: "UnKnown error Object", success: false, data: null, ...error });
    else
        return ({ message: "UnKnown error Object", success: false, data: null });
}
//# sourceMappingURL=ApiErrorHandle.js.map