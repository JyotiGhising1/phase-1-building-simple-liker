// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener('DOMContentLoaded', function() {
  const likeButton = document.querySelectorAll('.like')

  likeButton.forEach(function(button){
    button.addEventListener('click', function(){
      toggleButton(button)
    })
  })
})

function toggleButton(button){
  const glyph = button.querySelector('.like-glyph')

  if(glyph.textContent === EMPTY_HEART){
    mimicServerCall()
    .then(()=>{
      glyph.textContent = FULL_HEART
      glyph.classList.add('activated-heart')
    })
    .catch((error) =>{
      displayError(error)
    })
  }
  else {
    glyph.textContent = EMPTY_HEART
    glyph.classList.add('activated-heart')
  }
}
function displayError(error){
  const modalMessage = document.getElementById('modal-message')
  modalMessage.textContent = error

  const modal = document.getElementById('modal')
  modal.classList.remove('hidden')
  setTimeout(() =>{
    modal.classList.add('hidden')
  }, 3000)
}


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}


