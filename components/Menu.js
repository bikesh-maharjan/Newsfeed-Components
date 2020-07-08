/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  "Students",
  "Faculty",
  "What's New",
  "Tech Trends",
  "Music",
  "Log Out",
];

/* 
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The 'menuMaker' takes an array as its only argument.

  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return your div with a 'menu' class.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
*/
// Step : 1 function menu is create here

function menuMaker(arr) {
  const div = document.createElement("div"); //creating a variable
  div.classList.add("menu"); // adding menu here
  // console.log(div);
  const ul = document.createElement("ul"); // creating a unorderlist variable

  // Step: 2 looping each items on the list
  arr.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li); // here appending from li
    div.appendChild(ul); // here appending from ul
  });
  // Step: 3 selecting from DOM
  const menuButton = document.querySelector(".menu-button");
  // Step: 4 adding eventlistener here for to toggle when you click on hamburger menu
  menuButton.addEventListener("click", () =>
    div.classList.toggle("menu--open")
  );
  // Step 5 --- returning the div
  return div;
}

// Step 6: given menu-items here we are appending to the child menuMaker

const menuDropdown = document.querySelector(".header"); // this is for the menu dropdown
menuDropdown.appendChild(menuMaker(menuItems));
