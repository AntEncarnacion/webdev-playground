// const promise = new Promise((resolve, reject) => {
//     if (true) {
//         resolve('Stuff Worked');       
//     } else {
//         reject('Error');
//     }
// })

// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 100, 'HIIII')
// })

// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 1000, 'POKI')
// })

// const promise4 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 3000, 'MANE')
// })

// Promise.all([promise, promise2, promise3, promise4])
// .then(values => {
//     console.log(values);
// })
// //WAITS THE TIMEOUT ON ALL
// //prints array of promises


// promise
// .then(result => result + '!')
// .then(result2 => result2 + '?')
// .catch(() => console.log('error'))
// .then(result3 => {
//     console.log(result3 + '!')
// });
// //Stuff worked!?!


// // promise
// // .then(result => console.log(result + '!'))
// // .then(result2 => {
// //     throw Error
// //     console.log(result2)
// // }).catch(() => console.log('error'));
// //error

// // promise.then(result => console.log(result));
// //Stuff Worked

const urls = [
    'https://jsonplaceholder.typicode.com/users', 
'https://jsonplaceholder.typicode.com/posts', 
'https://jsonplaceholder.typicode.com/albums'
]

Promise.all(urls.map(url => {
    return fetch(url).then(resp => resp.json())
})).then(results => {
    console.log(results[0])
    console.log(results[1])
    console.log(results[2])
}).catch(() => console.log('error'))

//prints out 3 arrays of the information