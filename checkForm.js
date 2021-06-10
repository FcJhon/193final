var phoneEl= document.getElementById('phone');
var message = '';
var phonePt= /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
var error= false;

document.getElementById('submit').addEventListener('click', check);

function check(event){
   if(phoneEl.value.length===0 || !phonePt.test(phoneEl.value)){
      message= 'Invalid phone Number!';
      document.getElementById('error').innerHTML= message;
      error=true;
   }
   else{
      error=false;
      document.getElementById('error').style.display='none';
      
   }
   
   if(error){
      event.preventDefault();
   }
}