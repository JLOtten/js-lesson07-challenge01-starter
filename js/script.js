var button = document.querySelector(".got-this"); //selects the css class .got-this, saves it ot button variable
var modal = document.querySelector(".modal"); //selects .modal class, saves it to modal variable
var modalX = document.querySelector(".modal-x"); //selects .modal-x CSS class, saves it to modalX varialbe

var closeModal = function () { //function declaration, called closeModal
  modal.classList.remove("show-modal"); //function removes the css class show-modal using the classList method on the .modal class
  button.innerText = "Who's got this?"; //makes text on button say "who's got this?"
};

// Bonus Step
 var openModal = function () { //function declaration called openModal
   modal.classList.add("show-modal"); //adds the show-modal css class for the .modal class
   button.innerText = "You've got this!!!"; //button text says "you've got this!!!"
 };

button.addEventListener("click", function () { //upon clicking button, this callback function will:
  modal.classList.add("show-modal"); //add the show-modal class to the .modal class
  button.innerText = "You've got this!!!";//button test will read "You've got this!!!"

  // Bonus Step
   openModal(); //calling openModal function
});

modalX.addEventListener("click", function () { //upon click event, callback funtion will call:
  closeModal(); //closeModal function (removes the modal)
});

document.addEventListener("keydown", function (e) { //upon pressing a key, 
  // console.log(e.key);
  if (e.key === "Escape") {//if the key pressed is escape,
    if (modal.classList.contains("show-modal")) {//if the key pressed is escape and the modal is open,
      closeModal(); //close the modal
    }
  }
});