const request = require('superagent');

request
    .get('https://rickandmortyapi.com/api/character/')
    .then(res => {
        return res.body.results
            .map(ele => ele.origin.url)
            .filter(url => url !== '');
    })
    .then(url => {
        return Promise.all(url.map(ele => {
            return request.get(ele);
        }));
    })
    .then(originRess => originRess.map(originRes => originRes.body))
    .then(origins => console.log(origins));



