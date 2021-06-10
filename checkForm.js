var phoneEl= document.getElementById('phone');
var message = '';
var phonePt= /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
var nerror= false;
var perror = false;
var aerror=false;

var nameEl = document.getElementById('fullname');
var addressEl = document.getElementById('address');

document.getElementById('submit').addEventListener('click', check);

function check(event){
   if(phoneEl.value.length===0 || !phonePt.test(phoneEl.value)){
      message= 'Invalid Input!';
      document.getElementById('error').innerHTML= message;
      document.getElementById('phone').classList.add('error');
      document.getElementById('error').style.display='block';
      perror=true;
     
   }else{
      document.getElementById('phone').classList.remove('error');
      perror=false;
   }

   if(nameEl.value.length===0){
      message= 'Invalid Input!';
      document.getElementById('error').innerHTML= message;
      document.getElementById('fullname').classList.add('error');
      document.getElementById('error').style.display='block';
      nerror=true;
   }else{
      document.getElementById('fullname').classList.remove('error');
      nerror=false;
   }

   if(addressEl.value.length===0){
      message= 'Invalid Input!';
      document.getElementById('error').innerHTML= message;
      document.getElementById('address').classList.add('error');
      document.getElementById('error').style.display='block';
      aerror=true;
   }else{
      document.getElementById('address').classList.remove('error');
      aerror=false;
   }
   

   if(!nerror && !perror && !aerror){
      
      document.getElementById('error').style.display='none';
      

   }
   
   if(nerror || perror || aerror){
      event.preventDefault();
   }
}

