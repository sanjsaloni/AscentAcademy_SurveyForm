const submit=document.getElementById("submit");

submit.addEventListener('click',validate);

function validate(e){
    e.preventDefault();

    const firstname=document.getElementById("firstname");
    const lastname=document.getElementById("lastname");
    let valid=true;

    if(firstname.value==""){
        alert("Enter your first name.");
        return false;
    }
    if(lastname.value==""){
        alert("Enter your last name.");
        return false;
    }
}