
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
    const paragraph = document.createElement("p");
    const errorMessage = document.createTextNode("This is not a valid email");
    const errorLogo = document.querySelector("#err");
  
    paragraph.appendChild(errorMessage);
  
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email.value)) {
      wrapper.appendChild(paragraph);
      console.log("here");
      errorLogo.classList.remove("error");
      return false;
    }
    else{
        errorLogo.classList.add("error");
    }
    return true;
  }
  