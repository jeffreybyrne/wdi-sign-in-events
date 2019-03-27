document.addEventListener('DOMContentLoaded', function() {
  const myModal = document.querySelector('.modal');
  const signInButton = document.querySelector('.signin')
  const closeButton = document.querySelector('.close');
  signInButton.addEventListener('click', function() {
    myModal.style.display = 'inline'
  })

  closeButton.addEventListener('click', function() {
    if (myModal.style.display != 'none') {
      myModal.style.display = 'none'
    }
  })
});
