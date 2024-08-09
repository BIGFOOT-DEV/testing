

const name = document.getElementById('username');
const password = document.getElementById('password');
const form = document.getElementById('form');

const name_error = document.getElementById('name_error');
const password_error = document.getElementById('password_error');


form.addEventListener('submit',(e)=> 
{
    if(name.value === '' || name.value == null)
    {
        e.preventDefault();
        name_error.innerHTML = "Name is required";
    }

    else{
        name_error.innerHTML = "";
    }

    if(password.value.length <= 5)
        {
            e.preventDefault();
            password_error.innerHTML = "Password is required";

        }

    else if(password.value === "password"){
       
        password_error.innerHTML = "Password cannot be password";

    }

    else if(password.value.length >= 20){
       
        password_error.innerHTML = "Password can't be more than 20 characters";

    }

    else{
        password_error.innerHTML = "";
    }
})
