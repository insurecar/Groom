export function compose(...funcs) {
    return function (value) {
        return funcs.reduce((acc, func) => func(acc), value);
    };
};