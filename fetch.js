const requestUrl = 'https://crash4star-tester.github.io/data.json';

function sendRequest(method, url, body = null) {
    let headers = {
        'Content-type': 'application/json'
    };

    return fetch(url, {
    }).then(response => {
        if (response.ok) {
            return response.json();
        } else {
            return response.json().then(error => {
                const e = new Error('Something wrong!');
                e.data = error;
                throw e;
            });
        }

    });
}

sendRequest('GET', requestUrl)
    .then(data => console.log(data))
    .catch(err => console.log(err))

// let main = {
//     name: 'Crash4star',
//     age: 24
// }

// sendRequest('POST', requestUrl, main)
//     .then(data => console.log(data))
//     .catch(err => console.log(err))
