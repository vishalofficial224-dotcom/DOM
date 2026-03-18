//what is DOM?
/**
 * the document object mode (DOM) is an application programming interface (API) for manipulating HTML documents.
 * 
 * it provides functions that allow you to add, remove, and modify parts of the document effectively.
 * 
 * the DOM represents an HTML document as a tree of nodes.
 */

// node relationships

/**
 * any node has relationships to other nodes in the DOM tree, and it is same as described in the traditional family tree.
 * 
 * parent, child, sibling relationship.
 */


//getElement
let id = document.getElementById("message");

let name = document.getElementsByName("nameAttribute");    //this returns one list of nodes

//getElementsByTagName
/**
 * the getElementsByTagName() method accepts a tag name and returns a live HTML collection of elements
 */

let tagName = document.getElementsByTagName("h1");


//getElementsByClassName()

let className = document.getElementsByClassName("className");


/**
 * to get elements from inside a dive with same class name but not the outside elements with same class name so we will use the div id
 * and create a variable then use that variable using variable.getElementsByClassNmae("access elements inside that div")
 */


//querySelector("add the css selector") method allows you to select the first element that matches one or more css selectors.

let querySltor = document.querySelector(".className");

//traversing elemnts
/**
 * how to get the parent elements, child elements and sibling elements.
 */

//to get the parent node of a specidied node in the DOM tree, we can use the parentNode property.

let txt = document.querySelector(".text");

//getting child elements of a node in js, first child elements, last child elements and all children of the specified elements.
//space is also one empty text node.

let parent = document.querySelector(".title");

// console.log(parent.firstChild); //give space node
// console.log(parent.firstElementChild); //gives first element of child
// console.log(parent.lastElementChild);
// console.log(parent.lastChild);
// console.log(parent.childNodes);

/**
 * select the next siblings, previous siblings of an element.
 */


let txt2 = document.querySelector(".text4");
// console.log(txt2.previousElementSibling);
// console.log(txt2.nextElementSibling);

//how to manipulate html elements.

//create element.

/**
 * to create an html element, we use the create element method.
 * 
 * the document.createElement() accepts an HTML tag name and returns a new node with the element type.
 */

let div = document.createElement("div");
div.innerHTML = "<p>welcome</p>";

document.body.appendChild(div);


// let div2 = document.querySelector(".title");
// let newElement = document.createElement("p");
//like this we can add any attribute.
// newElement.id = "newElement"
// div2.append(newElement)
// newElement.innerHTML = "hello world i am the new element that you appended using variables and append method";

// console.log(document.querySelector("#newElement"));



//append child method.

/**
 * method to add a node to the end of the list of chld nodes of a specified parent node.
 * can be used to move an existing child node to the new position within the document.
 */

let menu = document.getElementById("menu");
let menu2 = document.querySelector("#menu")
let newElement2 = document.createElement("li");

menu.append(newElement2);

newElement2.innerHTML = "i am new li"

let list = document.createElement("li");

list.innerHTML = "new li again";

menu.appendChild(list);


//textConetent:to get the text content of a node and its descendants, you use the textContent property.


console.log(menu.textContent);
//returns only visible text
console.log(menu.innerText);


//after method: insert one or more nodes after the element.
//element.after(node);

// menu.after(str1, str2, ...strn);
//menu.after(node1, node2...noden);

//apend method: we can add multiple elements.
//prepend method: add new node as first child.
//insertadjacenthtml

//element.insertAdjacentHTML(positionName, text);

//parentNode.replaceChild(newChild, oldChild);

//used to replace the child with the new one


//clonenode method.
//element.cloneNode();
//removeChild(childNode);

//inertBefore() method to insert a new node before an existing node as a child node of a parent node.

//parentNode.insertBefore(newNode, existingNode);


//attributes method


