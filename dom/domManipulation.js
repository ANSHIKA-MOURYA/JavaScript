/*
 Change text (textContent, innerHTML)

 Change styles (style.color)

 Add elements (createElement, appendChild)

 Remove elements (remove)

 Change attributes (setAttribute)

 Add interactivity (addEventListener)
*/



//! <h1 id="heading">Hello</h1>

const h1 = document.getElementById("heading");
h1.textContent = "Welcome, Anshika!";      // plain text
h1.innerHTML = "<i>Welcome, <b>Anshika!</b></i>"; // allows HTML

//Changing CSS / Styles
h1.style.color = "blue";
h1.style.fontSize = "30px";
h1.style.backgroundColor = "lightyellow";

//Creating New Elements
const newPara = document.createElement("p");
newPara.textContent = "This is a new paragraph!";
document.body.appendChild(newPara); // adds to the end of body

//Removing Elements
const oldPara = document.querySelector("p");
if (oldPara) {
    oldPara.remove(); // removes the first paragraph found
}

//Changing Attributes
<img id="pic" src="default.jpg" />

const img = document.getElementById("pic");
img.setAttribute("src", "new.jpg");
img.setAttribute("alt", "Profile picture");


// Replacing Elements / Inner HTML
<div id="box">Hello!</div>

const box = document.getElementById("box");
box.innerHTML = "<p>Replaced with a <strong>paragraph</strong></p>";



/*
// Adding Interactivity| Method                        | Purpose                   |
| ----------------------------- | ------------------------- |
| `getElementById()`            | Select element by ID      |
| `querySelector()`             | Select by CSS selector    |
| `textContent`, `innerHTML`    | Change text or HTML       |
| `style.property`              | Change inline CSS         |
| `createElement()`             | Create new DOM node       |
| `appendChild()`               | Insert into DOM           |
| `remove()`                    | Remove element            |
| `setAttribute()`              | Set/change HTML attribute |
| `classList.add/remove/toggle` | CSS class manipulation    |
| `addEventListener()`          | Attach event handlers     |

*/ 

