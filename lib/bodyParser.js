module.exports = request => {

    return new Promise((resolve, reject) => {
        let body = '';
        request.on('data', chunk => {
            body += chunk;
        });
        request.on('end', () => {
            resolve(JSON.parse(body));
        });
        request.on('error', () => {
            reject();
        });
    });
};

