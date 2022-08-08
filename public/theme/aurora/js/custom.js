window.onload = function(){
  let accordion = document.getElementsByClassName("accrodion");
  accordion[0].classList.add('active');

  accordion.addEventListener('click', function () {
    accordion[0].classList.remove('active');
    for(var index = 0; index < accordion.length; index++) {
      accordion[index].addEventListener('click', function() {
        accordion[index].classList.add('active');
      })
    }
  })
}
