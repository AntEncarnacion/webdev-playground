
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const p = document.createElement('p');
p.textContent = "Hey I'm red!";
p.style['color'] = 'red';

container.appendChild(p);

const h3 = document.createElement('h3');
h3.textContent = "I’m a blue h3!";
h3.style['color'] = 'blue';

container.appendChild(h3);

const div = document.createElement('div');

div.style['border'] = '1px solid black';
div.style['background-color'] = 'pink';

const h1 = document.createElement('h1');
h1.textContent = "I’m a div";
const pp = document.createElement('p');
pp.textContent = "Me too!";

div.appendChild(h1);
div.appendChild(pp);
container.appendChild(div);