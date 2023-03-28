

const submitClick = () => { 
    
    const firstName = document.querySelector("#firstname").value; 
    console.log(firstName);
    if(firstName === "") { 
        document.querySelector("#firstname").style.border = "red solid "; 
    } else {
     document.querySelector("#firstname").style.border = "green solid "; 
    } 

    const lastName = document.querySelector("#lastname").value; 
    console.log(lastName);
    if(lastName === "") {
        document.querySelector("#lastname").style.border = "red solid "; 
    } else {
        document.querySelector("#lastname").style.border = "green solid "; 
    }
    
       const genderMale = document.querySelector("#male").checked;
       const genderFemale = document.querySelector("#female").checked;
       console.log(genderMale || genderFemale);
    if(genderMale == true ||  genderFemale == true ) {
        document.querySelector("#gender").style.border = "green solid ";
    } else {
        document.querySelector("#gender").style.border = "red solid ";
    }

    
    const message = document.querySelector("#message").value;
    console.log(message);
    if(message === "") {
        document.querySelector("#message").style.border = "red solid "; 
    } else {
        document.querySelector("#message").style.border = "green solid "; 
    }

     if (message === "" || lastName === "" || firstName === "" || genderMale == false && genderFemale == false ) {
        document.querySelector("#confirmation-banner").style.display= "none";
    } else {
        document.querySelector("#confirmation-banner").style.display= "block";
        document.querySelector("#submittedname").innerHTML = firstName ;
        document.querySelector(".container-form").style.display="none";
       
        
        
    }
};


 const validateForms = (e) => {
    document.querySelector("#submit").addEventListener("click", submitClick)
    

 };
 
 window.addEventListener ("load", validateForms);







