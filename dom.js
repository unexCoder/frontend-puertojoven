console.log('DOM');

// update text or html inner content
// const title = document.getElementById('title');
// title.textContent = 'Hello, Coder!';
// title.innerHTML = '<a href="https://coder.com">Coder</a>';

// ///////////////////////////////////////////////
// select DOM elements by different query methods
// const el = document.getElementById('title');
// console.log(el);
// console.log(el.textContent);
// console.log(el.innerHTML);

// // collection of elements by class name
// const container = document.getElementsByClassName('container');
// console.log(container);
// console.log(container[0]);

// const list = document.querySelector('.container');
// console.log(list);

// const items = document.getElementsByTagName('li');
// console.log(items);
// console.log(items[0]);

// const item = document.querySelector('li');
// console.log(item);

// const items2 = document.querySelectorAll('li');
// console.log(items2);
// console.log(items2[0]);


// ///////////////////////////////////////////////
// add or modify styles
// const title = document.getElementById('title');

// // inline style
// title.style.color = 'magenta';
// title.style.backgroundColor = 'lightgray';
// title.style.padding = '10px';
// title.style.borderRadius = '8px';

// // class style
// title.classList.add('main-title');
// // title.classList.remove('main-title');
// // title.classList.toggle('main-title');
// console.log(title.classList.contains('main-title')); // true or false

// ///////////////////////////////////////////////
// add / remove and manage event listeners on elements

// const btn = document.getElementById('button');

// btn.addEventListener('click', function() {
//     document.body.classList.toggle('dark-mode');
//     console.log(document.body.classList);
// });

// btn.onclick = () => {
//     console.log('click');
// };

// btn.addEventListener('click', () => {
//     console.log('another click');
//     alert('Button clicked!');
// });

// const handler = () => {
//     console.log('third click');
// };
// btn.addEventListener('click', handler);

// remove event listener
// btn.removeEventListener('click', handler);

// btn.onclick = null; // remove onclick event

// ///////////////////////////////////////////////
// dinamically create new DOM elements and add them to the document

// const newDiv = document.createElement('div');
// newDiv.textContent = 'New Div Element';
// newDiv.style.backgroundColor = 'lightblue';
// newDiv.style.padding = '10px';
// newDiv.style.marginTop = '10px';

// const container = document.querySelector('.container');
// container.appendChild(newDiv);

// const parent = document.querySelector('.container');
// const newParagraph = document.createElement('p');
// newParagraph.textContent = 'This is a new paragraph.';
// parent.appendChild(newParagraph);

// const firstChild = parent.firstElementChild;
// parent.insertBefore(newParagraph, firstChild);
// ///////////////////////////////////////////////  

// ///////////////////////////////////////////////
// remove DOM elements
// parent.removeChild(newParagraph);
// parent.removeChild(newDiv);

// newDiv.remove();


// ///////////////////////////////////////////////
// get, set and remove attributes on DOM elements

// const link = document.querySelector('a');
// console.log(link.getAttribute('href'));
// link.setAttribute('href', 'https://coder.com');
// link.setAttribute('target', '_blank');
// // link.removeAttribute('target');
// console.log(link.attributes);
