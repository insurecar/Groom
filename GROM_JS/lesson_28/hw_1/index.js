function shmoment(date) {
    const result = new Date(date);

    const functions = {
        years: (value) => result.setFullYear(result.getFullYear() + value),
        months: (value) => result.setMonth(result.getMonth() + value),
        days: (value) => result.setDate(result.getDate() + value),
        minutes: (value) => result.setMinutes(result.getMinutes() + value),
        hours: (value) => result.setHours(result.getHours() + value),
        seconds: (value) => result.setSeconds(result.getSeconds() + value),
        milliseconds: (value) => result.setMilliseconds(result.getMilliseconds() + value),
    };

    return {
        add(period, value) {
            functions[period](value);
            return this;
        },
        subtract(period, value) {
            functions[period](-value);
            return this;
        },
        result() {
            return new Date(result);
        },
    };
};

export { shmoment };