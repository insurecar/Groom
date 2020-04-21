export function mult(a) {
    return function (b) {
        return a * b;
    };
};

export function twice(a) {
    return mult(2)(a);
};

export function triple(a) {
    return mult(3)(a);
};
