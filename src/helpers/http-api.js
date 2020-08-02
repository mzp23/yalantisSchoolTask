export const fetchOptions = {
    headers: {
        'content-type': 'application/json; charset=UTF-8;',
        Accept: 'application/json, text/javascript'
    }
};

export const httpGet = (url, options = {}) => {
    return fetch(url, {...fetchOptions, ...options});
};