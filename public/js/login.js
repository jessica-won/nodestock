//Checks to see if email matches
function validate(){
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  if ( email == "jane.doe@gmail.com" && password == "janedoe"){
    window.location = "dashboard.html"; // Redirecting to other page.
    return false;
  }
  else {
    //Makes red boxes around the form, outputs red text saying incorrect password, and shakes form
    let div = document.querySelector('#email');
    div.classList.remove('forminput');
    div.classList.add('forminputred');
    let div2 = document.querySelector('#password');
    div2.classList.remove('forminput');
    div2.classList.add('forminputred');
    let div4 = document.querySelector('#incorrect');
    div4.classList.remove('invis');
    div4.classList.add('incorrect');
    let div3 = document.querySelector('#formbox');
    div3.classList.add('shake');
    div3.addEventListener('animationend', function() {
    		div3.classList.remove('shake');
    });
    return false;
  }

}
