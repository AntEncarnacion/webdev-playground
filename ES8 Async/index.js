//ASYNC AWAIT

//old method
movePlayer(100, 'Left')
    .then(() => movePlayer(400, 'Left'))
    .then(() => movePlayer(10, 'Right'))
    .then(() => movePlayer(330, 'Left'))

async function playerStart() {
    const firstMove = await movePlayer(100, 'Left');
    await movePlayer(400, 'Left');
    await movePlayer(10, 'Right');
    await movePlayer(330, 'Left');
}
//same thing but prettier/better practice

//##############
//old method
fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(console.log);
    //prints array of users

async function fetchUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json();
    console.log(data);
}
//same thing but more uniform looking


//#############################
//old method
const urls = [
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/comments',
    'https://jsonplaceholder.typicode.com/photos'
];

Promise.all(urls.map(url => 
    fetch(url).then(resp => resp.json())
    )).fetch(array => {
        console.log('posts', array[0])
        console.log('comments', array[1])
        console.log('photos', array[2])
    }).catch('ooooops');


//async function
const getData = async function() {
    try {
        const [posts, comments, photos] = await Promise.all(urls.map(url =>
        fetch(url).then(resp => resp.json())
        ))
        console.log('posts', posts)
        console.log('comments', comments)
        console.log('photos', photos)
    } catch {
        console.log('ooops');
    }
    
}
