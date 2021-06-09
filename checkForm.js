function checkForm() {
    var areFormErrors = false;
    var errorMessages = "";
 
    errorMessages += "<ul>";
 
    var fullNameElement = document.getElementById("fullname");
    if (fullNameElement.value.length === 0) {
       errorMessages += "<li>Missing full name.</li>";
       fullNameElement.classList.add("error");
       areFormErrors = true;
    }
    else {
       fullNameElement.classList.remove("error");
    }

    var addressElement= document.getElementById('address');
    if (addressElement.value.length === 0){
        errorMessages +='<li>Missing Address</li>';
        addressElement.classList.add("error");
        areFormErrors = true;
    }
    else{
        addressElement.classList.remove('error')
    }


    var phoneElement = document.getElementById('phone');
    var phonePt= /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    if (phoneElement.value.length===0 ||  !phonePt.test(phoneElement.value)){
        errorMessages+='<li>Invalid Phone Number</li>';
        phoneElement.classList.add('error');
        areFormErrors=true;
    }
    else{
        phoneElement.classList.remove('error');
    }
 
    
 
    errorMessages += "</ul>";
 
    if (areFormErrors) {
       document.getElementById("error").innerHTML = errorMessages;
       
    }
    else {
       document.getElementById("error").style.display = "none";
    }
 }
 
 document.getElementById("submit").addEventListener("click", function(event) {
    checkForm();
    
 
    event.preventDefault();
 });
 