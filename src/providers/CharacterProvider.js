const URL = process.env.REACT_APP_API_URL;

export function providerSearchPage(nextPage) {
    return new Promise((resolve, reject) => {
        fetch(URL + `?page=${nextPage}`)
            .then(response => response.json()).then(data => {
                if (typeof data.results !== "undefined" && data.results !== null) {
                    resolve(data.results);
                } else {
                    resolve([])
                }
            }).catch((err) => {
                reject(err);
            });
    });
}

export function providerSearchCharacterInfo(id) {
    return new Promise((resolve, reject) => {
        fetch(URL + `/${id}`)
            .then(response => response.json())
            .then(data => {
                resolve(data);
            })
            .catch((err) => {
                reject(err);
            });
    });
}