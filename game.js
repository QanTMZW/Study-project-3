
  let randomCode = Math.floor(Math.random() * 100) + 1;//this is our random number line with our range. Reason why we have +1 is to inclusively add 100 to this range
  var scoreText;
  var score =10;
  let codeCount = 1;
  let resetButton;
  const codeField = document.querySelector('.codeField');
  const codes = document.querySelector('.codes');
  const hints = document.querySelector('.hints');
  const lastCode = document.querySelector('.lastCode');
  const codeSubmit = document.querySelector('.codeSubmit');


  //function refresh(){
        //  window.location.reload("reset(");
      //  }
  //this snipet of code was from includehelp.com
  //this enables the reset button to refresh the page and restart everything
  function refreshPage() {
    if (confirm("Are you sure you want to reset?")) {
        location.reload();
        }
    }
  //verifies if what the user inputed is the correct answer from the RNG and determines what to do
  function code() {
    const userInput = Number(codeField.value);
    if (codeCount === 1) {
      //this prints out the previous codes here as a history
      codes.textContent = 'Previous codes: ';
    }
//compares the input of the user to the random code
    codes.textContent += userInput + ' ';

    //our input scenarios. This snipet of code was taken from class.
      if (userInput === randomCode) {
        //for if the user guessed the code number right
            lastCode.textContent = 'Congratulations! You broke the code! The code is: 01100011 01101001 01110100 01100101 00100000 01111001 01101111 01110101 01110010 00100000 01100011 01101111 01100100 01100101';
            //background of text becomes yellow for above
            lastCode.style.backgroundColor = 'yellow';
            hints.textContent = '';
            //need this function to prevent other features from being influenced
            setGameOver();
            //new highscore function is being called here so that we verify if the high score is higher than what is currently on local storage.
            newHiScore();

          } else if (codeCount === 10) {
            //for if the user inputed 10 wrong number codes and ran out of mistakes
            lastCode.textContent = 'Oh no, your log was found out! Restart!';
            //red background for text above
            lastCode.style.backgroundColor = 'red';
            hints.textContent = '';
            //makes sure that the submit functions and other stuff is not interactable
            setGameOver();
          } else {
            //in case they put a code that is outside of range 1-100
            lastCode.textContent = 'Wrong Code!';
            //background color is red here for the text above
            lastCode.style.backgroundColor = 'red';

            if(userInput < randomCode) {
              //this is a hint for inputting a code too low compared to the RNG code
              hints.textContent = 'Last code was too low!' ;
              //background color for text above
              hints.style.backgroundColor = 'lightblue';

            } else if(userInput > randomCode) {
              //this is a hint for inputting a code that is higher than the RNG code
              hints.textContent = 'Last code was too high!';
              //background color for the text above
              hints.style.backgroundColor = 'orange';
            }
                }
                //this is to count the codes
    codeCount++;
    codeField.value = '';
    codeField.focus();
  }
  //
  document.getElementById('codes').InnerHTML += "Insert text here <br/>"
//this allows user input code to be read by the script
  codeSubmit.addEventListener('click', code);


//game over function. makes different parts uninteractable and makes a brand new reset button appear.
  function setGameOver() {
    //we don't want this to be interactable
    codeField.disabled = true;
    //we don't want this to be interactable
    codeSubmit.disabled = true;
    //makes reset button appear
    resetButton = document.createElement('button');
    //adds the text to the button
    resetButton.textContent = 'Reset';
    document.body.appendChild(resetButton);
    //adds the functionality of the reset function
    resetButton.addEventListener('click', resetGame);
  }
  //this function clears the history
    function clearlog(){
      document.getElementById("log").value = ''
    }
  //function for resetting game.
  function resetGame() {
    codeCount = 1;
    //this resets the history log of code
    const resetParas = document.querySelectorAll('.logParas p');
    for (const resetPara of resetParas) {
      //makes it blank
      resetPara.textContent = '';
    }


  //these are supposed to be the parameters that get set after resetButton is pushed. All interactable features become active again.
    resetButton.parentNode.removeChild(resetButton);
    randomCode = Math.floor(Math.random() * 100) + 1;
    codeField.disabled = false;
    codeSubmit.disabled = false;
    codeField.value = '';
    codeField.focus();
    lastCode.style.backgroundColor = 'white';
  }

  //snipet of code taken from w3schools.com
  // Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
