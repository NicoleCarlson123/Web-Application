
    /*var username = document.forms["RegForm"]["username"].value
    var password = document.forms["RegForm"]["password"].value;
    var email = document.forms["RegForm"]["email"].value;*/
const password = document.getElementsByName('password');
const username = document.getElementsByName('username');
const form = document.getElementById('form');
const errorElement = document.getElementsByName('error')


form.addEventListener('submit', (e)=>{

   let messages =[]
    
    if (password.value.length < 8){
        alert('Password must be longer than 8 characters');
        password.focus();
      
     
    }
    re = [A-Z];
    if(!re.test(password.value)){
        alert("Password must contain at least one uppercase letter");
        password.focus();
       
    }
    re = [0-9];
    if(!re.test(password.value)){
        alert("password must contain at least one number");
        password.focus();
       
    }
    
    if(password.value != "/ * - + ! @ # $ ^ & * "){
        alert("password must contain / * - + ! @ # $ ^ & * ");
        password.focus();
        
    }
    
    if(messages.length > 0){
        e.preventDefault();
        errorElement.innerText =messages.join(', ')
    }

    
    
})
