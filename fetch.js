// const requestUrl = 'https://crash4star-tester.github.io/data.json';

// function sendRequest(method, url, body = null) {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();

//         xhr.open(method, url);

//         xhr.responseType = 'json';
//         xhr.setRequestHeader('Content-type', 'application/json');

//         xhr.onload = () => {
//             if(xhr.status >= 400) {
//                 reject(xhr.response);
//             } else {
//                 resolve(xhr.response);
//             }
//         }

//         xhr.onerror = () => {
//             reject(xhr.response);
//         }

//         xhr.send(JSON.stringify(body));
//     })
// }




//Fetch
const requestUrl = 'https://crash4star-tester.github.io/data.json';

function sendRequest(method, url, body = null) {
    const headers = {
        'Content-type': 'application/json'
    };

    return fetch(url, {
        method: method,
        body: JSON.stringify(body),
        headers: headers
    }).then(response => {
        return response.json();
    });
}




const btn = document.querySelector('#send'),
    input = document.querySelector('#user');

let userName = {};


btn.onclick = function (e) {
    e.preventDefault();

    userName.nickname = input.value;
    console.log(userName)

    sendRequest('POST', requestUrl, userName)
        .then(data => console.log(data))
        .catch(err => console.log(err));
};


// sendRequest('GET', requestUrl, userName)
//         .then(data => console.log(data))
//         .catch(err => console.log(err));
