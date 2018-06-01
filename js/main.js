
(function() {

  var modal = document.getElementById('myModal');
  var btn = document.getElementById("myBtn");
  var span = document.getElementsByClassName("close")[0];
  var content = document.getElementsByClassName("modal-content")[0];

  btn.onclick = function() {
    modal.style.display = "block";
  }

  span.onclick = function() {
    bounceOut();
  }

  window.addEventListener('click', function() {
    if (event.target == modal) {
      bounceOut();
    }
  });
  
  async function bounceOut() {
    var promise1 = Promise.resolve(content.classList.add('bounceOut'));
    var promise2 = new Promise(function(resolve, reject) {
      setTimeout(function () {
        content.classList.remove('bounceOut');
      }, 20);
    });
    var promise3 = new Promise(function(resolve, reject) {
      setTimeout(function () {
        modal.style.display = "none";
      }, 400);
    });

    Promise.all([promise1, promise2, promise3]);
  }

  window.addEventListener('load', function() {
    if(modal.style.display != "block"){
      setTimeout(function () {
        modal.style.display = "block";
      }, 2000);
    }
  });
})();

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function validateForm() {
  var name = document.myForm.name;
  var email = document.myForm.email;
  var borderName = document.getElementById('name').style;
  var borderEmail = document.getElementById('email').style;

  console.log(!validateEmail(email.value));

  if (name.value == "" && email.value == "" && !validateEmail(email.value)) {
    name.focus();
    borderName.borderColor = "red";   
    borderEmail.borderColor = "red"; 
    return false;
  }else if(name.value == "") {
    name.focus();
    borderName.borderColor = "red";    
    return false;
  }else if (email.value == "" || !validateEmail(email.value)) {
    email.focus();
    borderEmail.borderColor = "red"; 
    return false;
  }
  return true;
}

