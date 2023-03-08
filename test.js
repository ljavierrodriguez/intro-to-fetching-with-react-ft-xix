/* 
fetch(url: string, options: object)

options = {
    method: 'GET', --> GET, POST, PUT, DELETE
    body: '', --> POST PUT,
    headers: {
        'Content-Type': 'application/json'
    } 
}
*/
let url = 'https://jsonplaceholder.typicode.com/users';
let options = {
    method: 'GET', // GET, POST, PUT, DELETE
    body: '', // POST y PUT,
    headers: {
        'Content-Type': 'application/json'
    }
}
fetch(url, options)



fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'GET', // GET, POST, PUT, DELETE
    body: '', // POST y PUT,
    headers: {
        'Content-Type': 'application/json'
    }
}) // GET