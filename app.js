// Dom manipulation

/*
to manipulate elements in the dom tree you first have to select that particular element. and there are 
many ways to do that but five major ways are.
 */


//GetElementById()

/*
selecting elements by there id.
easiet way to find an element inside dom tree
 */

// const title = document.getElementById('main-heading');
/*
so now with selecting id now we gonna place it inside a variable so we can manipulate it.
after this using this variable we can add styles to the element, manipulate its attributes, traverse the element.
*/

// console.log(title)

//GetElementById()

// ---------------------------------------------------------------------------



//getElementsByClassName()

/**
 * returns the collection of all the element with that specified class name.
 */

// const listItem = document.getElementsByClassName('list-items');

// console.log(listItem);

//getElementsByClassName()

// -----------------------------------------------------------------------------


//GetElementsByTagName()

/**
 * pretty similar to getElementsByClassName.
 * it accepts a tag name and returns all of the elements of that specified tag name.
 * in the order in which they appear in a document so again return an array like object for all the child elements.
 * with the given tag name.
 */


// const listItems2 = document.getElementsByTagName('li');

// console.log(listItems2);

//GetElementsByTagName()


//-------------------------------------------------------------------------------


//querySelector()

/*
 *querySelect() here used to select one item or the first item that matches the selector is given so if you have multiple items with same class name.
 *or the same id or even the same tag it will select first one it comes across. it can accept all css style selectors again allowing it to select.
 * it by its tag or its clas or even its id so we can actually use this method to actually grab any element in our html file.  
 * 
 * 
 * querySelector is a JavaScript DOM method that lets you select an element from the HTML using CSS selectors.
 * it returns the first element that matches the selector.
 */


//  const container = document.querySelector('.container')

//  console.log(container)

//it selects the first element that matches the selector but to select all elements we use. querySelectorAll();

//--------------------------------------------------------------------------------------------------


//how we can change the styling of an element.we can access css styling properties in js.

// const title = document.querySelector('#main-heading');
//this is basically inline styling. and there are other methods to style in js but this is probably the most direct method.
//its inline styling because it works for only single element.

// ----------------------------------------------------code--------------------------------------------------------
// title.style.color = 'red';
// title.style.background = 'blue'

// const listItems = document.querySelectorAll('.list-items');


// for (i = 0; i< listItems.length; i++) {
//     listItems[i].style.fontSize = '50px'
// }



// ----------------------------------------------------------------------------------------------------------------

//we can also create elements using js.

//creating elements.

// const ul = document.querySelector('ul');

// const li = document.createElement('li');

// const li2 = document.createElement('li')
// //adding elements

// ul.append(li);
// ul.append(li2)


//modifying the text.
/**
 * we can do this in several ways.
 */


// const firstListItem = document.querySelector('.list-items');

// console.log(firstListItem.innerText);
// console.log(firstListItem.textContent);
// console.log(firstListItem.innerHTML)


// li.innerText = 'X-men'
// li2.innerText = 'Saktiman'


////////////////////////////////////////////////
/**
 * select.
 * create.
 * append.
 * addText
 */
///////////////////////////////////////////////

// modifying attributes and classes


// const title = document.querySelector('#main-heading');

// console.log(title.getAttribute('id'));


// li.classList.add('list-items');
// li2.classList.add('list-items');

// li.classList.remove('list-items');
// li2.classList.remove('list-items');
// -----------------------------------------------------------------------------------------------------------------------------------------

//remove elements.

// li.remove();
// li2.remove();


//dom object is the property of window object which is the global top level object representing the tab in the browser the window object.
//has access to so much information such as the toolbar the height the widht the window even things like the prompts and alerts.
//dom object which is inside of the inner window and the stuff that we want to manipulate.

//-------------------------------------------------------------------------------------------------------------------------------------------


//traverse the dom



// parent node traversal

// let Ul = document.querySelector('ul');


// console.log(Ul.parentNode.parentNode);
// console.log(Ul.parentElement.parentElement);


//child node traversal


// console.log(ul.childNodes);
// console.log(ul.firstChild);
// console.log(ul.lastChild);


// ul.childNodes[1].style.backgroundColor= 'blue';


// console.log(ul.children);


// -------------------------------------------------------------------------------------------------------------------------------------------

//sibling node traversal


// const div = document.querySelector('div')
// console.log(ul.previousSibling)
// console.log(ul.nextSibling);
// console.log(div.childNodes);
// console.log(ul.previousElementSibling);
// console.log(ul.nextElementSibling);





function add(a) {
    var a = a;

    return function (b) {
        var b = b;
        var private = 0;        
        console.log(a + b);


    }
}

let apple = 2;

if (true) {
    let orange = 3;
    
    nsole.log(apple)
}

console.log(orange)






