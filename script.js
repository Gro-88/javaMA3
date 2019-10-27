function checkForBlank() {
   
    if (document.getElementById('fname').value == "") {
        alert('Please enter your first name');
        return false;
    }
    if (document.getElementById('lname').value == "") {
        alert('Please enter your last name');
        return false;
    }
}

function validate(form_id, number) {
    var RegExp = ("^(0047|\+47|47)?[2-9]\d{7}$");
}

function validate(form_id, email)
{
    var RegExp = /^([A-Za-z0-9_\-\.]){1,}\@([A-Za-z0-9_\-\.]){1, }\.([A-Za-z]{2,4})$/;
    
    var address = document.forms[form_id].elements[email].value;
    
    if (RegExp.test(address) == false)
        {
    alert('Invalid Email address');
    document.forms[form_id].elements[email].focus();
            
    return false;
        }
}


    
}
    
//Use RegEx to validate form
