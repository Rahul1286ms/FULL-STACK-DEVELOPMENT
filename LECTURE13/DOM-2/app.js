const h1 = document.querySelector('h1');

//------------Adding class ---------------
// h1.setAttribute('class', 'heading');
// h1.setAttribute('class', 'heading two');
// h1.setAttribute('class', 'two')

//------------Easier way to add and remove class------
h1.classList.add('heading');
h1.classList.add('two');
h1.classList.remove('two');

//----------to toggle a class----------------------
// const list = document.querySelector('#list');
// list.classList.toggle('hide');

//-------------to select parent Element of a tag and apply style to it
const child = document.querySelector('li');
child.parentElement.style.color = 'aqua';


//----------to select child element of a tag and apply style to it
const para = document.querySelector('p');
for (let p of para.children) {
    p.style.color = 'lightgreen';
    p.style.fontWeight = 'bold';
}

//------to select siblings--------
const h2 = document.querySelector('h2');
h2.nextSibling
h2.previousSibling
h2.nextElementSibling
h2.previousElementSibling

//-------to add some element after and before a tag element----
// const heading = document.querySelector('h1');
//creating element of img
const img = document.createElement('img');
//adding src attribute value to img
img.src = "https://media.istockphoto.com/photos/freedom-chains-that-transform-into-birds-charge-concept-picture-id1322104312?b=1&k=20&m=1322104312&s=170667a&w=0&h=VQyPkFkMKmo0e4ixjhiOLjiRs_ZiyKR_4SAsagQQdkk=";
//adding to page:-
// h1.append(img);
// h1.prepend(img);
// h1.after(img);
h1.before(img);


//-----------to remove element from the html
const li = document.querySelector('#list li:last-child');
const ul = document.querySelector('#list');
ul.removeChild(li);

const firstli = document.querySelector('#list li:first-child');
firstli.remove();
