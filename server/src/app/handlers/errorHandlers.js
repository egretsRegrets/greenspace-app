

 // error wrapper to pass our async await through
exports.catchErrors = (fn) => {
    return function(req, res, next) {
        return fn(req, res, next).catch(next);
    };
};

// route not found error
exports.notFound = (req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
};

// log rich error messages for dev
exports.devError = (err, req, res, next) => {
    err.stack = err.stack || '';
    const errorDetails = {
        message: err.message,
        status: err.status
    };
    res.status(err.status || 500);
    res.send('error details:', errorDetails, 'raw error:', err);
};

// production error, no rich messages surfaced
