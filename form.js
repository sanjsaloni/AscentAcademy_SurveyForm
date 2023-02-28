
function validate(){
    var fname=document.myform.fname.value
    var lname=document.myform.lname.value
    var number=document.myform.number.value
    var email=document.myform.email.value
    var f1=document.getElementById("f")
    var x=email.indexOF("@")
    var d=email.indexOF('.')

    if(fname==null || fname==""){
        f1.innerText("Enter the first name")
        alert("Enter the first name");
        return false;
    }
    if(lname==null || lname==""){
        alert("Enter the first name");
        lname.focus();
        return false;
    }
    if(x<1 ||d<x+2 || d+2>x.length){
        alert("Enter a valid email")
        email.focus()
        return false;
    }
    if(number==""||isNaN(number)|| Number.length<10){
        alert("Enter a valid Contact Number");
        number.focus();
        return false;
    }
    
    


}

const form=document.querySelector(".container");
const fname=document.querySelector("#fname");
const lname=document.querySelector("#lname");
const email=document.querySelector("#email");
const num=document.querySelector("#number");

const isRequired =value =>value===''?false:true;
const isBetween=(length,min,max) =>(length<min||length>max)?false:true;
const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

const checkfname=()=>{
    let valid=false;
    const min=3;
    max=15;
    const fname1=fname.value.trim();

    if(!isRequired(fname1)){
        showError(fname,'First name cannot be blank.');
    }
    else if(!isBetween(fname1.length,min,max)){
        showError(fname,`First name should be between ${min} and ${max} character`)
    }
    else{
        showSuccess(fname);
        valid=true;
    }
    return valid;
};

const checklname=()=>{
    let valid=false;
    const min=3,
    max=15;
    const lname1=lname.value.trim();

    if(!isRequired(lname1)){
        showError(lname,'First name cannot be blank.');
    }
    else if(!isBetween(lname1.length,min,max)){
        showError(lname,`First name should be between ${min} and ${max} character`)
    }
    else{
        showSuccess(lname);
        valid=true;
    }
    return valid;
};

const checkEmail = () => {
    let valid = false;
    const emailid = email.value.trim();
    if (!isRequired(emailid)) {
        showError(email, 'Email cannot be blank.');
    } else if (!isEmailValid(emailid)) {
        showError(email, 'Email is not valid.')
    } else {
        showSuccess(email);
        valid = true;
    }
    return valid;
}

const checkNumber=()=>{
    let valid=false;
    const number=num.value.trim();
    min=max=10;

    if(!isRequired(number)){
        showError(num,"Number cannot be blank.");
    }
    else if(!isNaN(number)){
        showError(num, 'Type only numbers');
    }
    else if(!isBetween(number.length,min,max)){
        showError(num, 'Don\'t write the country code.');
    }
    else{
        showSuccess(num);
        valid=true;
    }
    return valid;
}

form.addEventListener('input', debounce(function(e){
    switch(e.target.id){
        case 'fname':
            checkfname();
            break;
        case 'lname':
            checklname();
            break;
        case 'email':
            checkEmail();
            break;
        case 'number':
            checkNumber();
            break;
    }
}));

const debounce =(fn,delay=500) => {
    let timeoutId;
    return(...args)=>{
        if(timeoutId){
            clearTimeout(timeoutId);
        }
        timeoutId=setTimeout(()=>{
            fn.apply(null,args)
        },delay);
        
    };
};

const showError=(input,message)=>{
    const formField=input.parentElement;
    formField.classList.remove('success');
    formField.classList.add('error');

    const error=formField.querySelector('#alert');
    error.textcontent=message;
};

const showSuccess=(input,message)=>{
    const formField=input.parentElement;
    formField.classList.add('success');
    formField.classList.remove('error');

    const error=formField.querySelector('#alert');
    error.textcontent='';
};


form.addEventListener('submit',function(e){
    e.preventDefault();

    let fnameavalid=checkfname(),
        emailvalid=checkEmail(),
        lnamevalid=checklname(),
        numbervalid=checkNumber();

    let isFormValid=fnameavalid && emailvalid && numbervalid && lnamevalid;

    if(isFormValid){

    }
})