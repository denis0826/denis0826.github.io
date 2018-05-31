

var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function validateForm() {
  if (document.myForm.name.value == "") {
    document.myForm.name.focus();
    document.getElementById('name').style.borderColor = "red";    
    return false;
  }
  if (document.myForm.email.value == "") {
    document.myForm.email.focus();
    document.getElementById('email').style.borderColor = "red";
    return false;
  }
  return true;
}
