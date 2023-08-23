
// let userEmail = document.querySelector(".email");
// let submit = document.querySelector(".submit");
// submit.addEventListener("click", function(){
    
//     var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
//     if (!emailPattern.test(submit.value)) {
//         console.log("here");
//         return false;
//       }
//       return true;
//   });

function validate() {
    const wrapper = document.querySelector(".email-container");
    const email = document.querySelector(".email");
    const paragraph = document.getElementById("error-text");
    const errorLogo = document.querySelector("#err");
  
    
  
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email.value)) {
      paragraph.innerHTML="Please provide a valid email";
      console.log("here");
      errorLogo.classList.remove("error");
      email.value="";
      setTimeout(()=>{
        email.value="";
        paragraph.innerHTML="";
        errorLogo.classList.add("error");
      }, 1000);
      return false;
    }
    else{
      paragraph.innerHTML="";
      paragraph.innerHTML= "Thank you"
        errorLogo.classList.add("error");
        setTimeout(function(){
          paragraph.innerHTML="";
          email.value="";
        }, 1000);

    }
    return true;
  }
  