const requestUrl = 'https://crash4star-tester.github.io/data.json';

function sendRequest(method, url, body = null) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.open(method, url);

        xhr.responseType = 'json';
        xhr.setRequestHeader('Content-type', 'application/json');

        xhr.onload = () => {
            if(xhr.status >= 400) {
                reject(xhr.response);
            } else {
                resolve(xhr.response);
            }
        }

        xhr.onerror = () => {
            reject(xhr.response);
        }

        xhr.send(JSON.stringify(body));
    })
}


const btn = document.querySelector('#send'),
      input = document.querySelector('#user');


btn.onclick = function(e) {
    e.preventDefault();

    let userName = {};

    userName.name = input.value;
    input.value = '';

    console.log(userName);

    sendRequest('POST', requestUrl, userName)
    .then(data => console.log(data))
    .catch(err => console.log(err))
};

