module.exports = maybeAPromise => {
    return typeof maybeAPromise === 'object' &&
    typeof maybeAPromise.then === 'function';
};
