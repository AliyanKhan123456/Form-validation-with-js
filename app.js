function clearErrors(){

    error = document.getElementsByClassName('formerror')
    for(let item of errors)
    {
        item.innerhtml = "";
    }

}

function seterror(id , error){
    //sets error inside tag of id
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerhtml = error;
}

function ValidationForm(){
    var returnval = true;
    //perfome validation ;
    var name = document.forms['myForm']["fname"].value;
    if (name.length<5){
        seterror("name","*Length of name is to short");
        returnval = false;

    }

    if (name.length == 0){
        seterror("name","*Length of name cannot be zero!");
        returnval = false;

    }

    var email = document.forms['myForm']["femail"].value;
    if (email.length<15){
        seterror("email"," *Email Length of name is to long");
        returnval = false;

    }

    var phone = document.forms['myForm']["fphone"].value;
    if (phone.length !=11){
        seterror("phone","*Phone number should be of 11 digit");
        returnval = false;

    }
    
    var password = document.forms['myForm']["fpass"].value;
    if (password.length < 6){

        //Quiz: create a logic to allow only those passwords which contain atleast one letter, one number and one speacial charachter and one uppercase letter

        seterror("pass","*Password should be atleast 6 character long");
        returnval = false;

    }
    
    var cpassword = document.forms['myForm']["fcpass"].value;
    if (cpassword.length < 6){

        //Quiz: create a logic to allow only those passwords which contain atleast one letter, one number and one speacial charachter and one uppercase letter

        seterror("cpass","*Password and confirm password should be match! ");
        returnval = false;

    }

    return returnval;
}




