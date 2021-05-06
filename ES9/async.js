//finally feature

const urls = [
    'https://swapi.co/api/people/1',
    'https://swapi.co/api/people/2',
    'https://swapi.co/api/people/3',
    'https://swapi.co/api/people/4'
  ]
  
  Promise.all(urls.map(url => fetch(url).then(people => people.json())))
    .then(array => {
      throw Error
      console.log('1', array[0])
      console.log('2', array[1])
      console.log('3', array[2])
      console.log('4', array[3])
    })
    .catch(err => console.log('ughhhh fix it!', err))
    .finally(() => console.log('extra'));

//finally code always runs even if the promise throws an exception or not

//  for await of feature

//old method
const getData = async function() {
    try {
      const [ users, posts, albums ] = await Promise.all(urls.map(async function(url) {
          const response = await fetch(url);
          return response.json();
      }));
      console.log('users', users);
      console.log('posts', posts);
      console.log('albums', albums);
    } catch (err) {
      console.log('ooooooops', err);
    }
  }

//the new method is kind of like this:
//   const loopThroughUrls = url => {
//       for(url of urls) {
//           console.log(url)
//       }
//   }

  //loops through urls

//  new ES9 method
const getData2 = async function() {
    const arrayOfPromises = urls.map(url => fetch(url))
    for await (let request of arrayOfPromises) {
        const data = await request.json();
        console.loog(data);
    }
}
  //gets and prints all the data