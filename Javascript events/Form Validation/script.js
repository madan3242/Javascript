function formValidate(){
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;

    if(name == "" && name.length <= 5){
        document.getElementById('name_message').innerHTML = "Please Enter User Name"
    }
    if(email == "" ){
        document.getElementById('email_message').innerHTML = "Please Enter Email"
    }
    if(phone == "" && phone.length !== 10){
        document.getElementById('phone_message').innerHTML = "Please Enter Proper Number"
    }
}