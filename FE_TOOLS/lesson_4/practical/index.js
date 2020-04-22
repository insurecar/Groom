const store = (function () {
    let storage = {};
    return {
        addItem: function (key, value) {
            Object.assign(storage, { [key]: value })
        },
        clear: function () {
            storage = {};
        }
    }
})();


console.log(store);

