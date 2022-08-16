// step-1 add button click  your text 
document.getElementById('btn-submit') .addEventListener('click', function(){
    //console.log('open  your email')
    //step-2 get the email adders inside the input field
    // always remember to use .value to get from an input field
    const emailField=document.getElementById('user-email')
    const email=emailField.value;
    console.log(email)
    //step-3 get password
    //step-4 set id an the html element
    //5 get the element
    // get the value from element

    const passwordField=document.getElementById('user-password');
    const password= passwordField.value;
    console.log( password)  ; 

    //Danger:do not verify email password on the client side
    if(email === 'sontan@gmail.com' && password ==='user'){
        window.location.href='bank.html';
    }
    else{
         alert('toke ami tejio shontab krlam');
    }
})





 