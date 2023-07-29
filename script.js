function otp4(){ 
    let otp = Math.floor(1000 + (10000 - 1000) * Math.random())
    let sotp = otp.toString()
    let otpArray = sotp.split("") 

    let nodeToshow=  document.querySelectorAll(".otp-4-box")
    for (let i = 0; i < nodeToshow.length; i++) {
     nodeToshow[i].innerHTML = otpArray[i]
   } 

   let nodeToHide=  document.querySelectorAll(".otp-6-box")
   for (let i = 0; i < nodeToHide.length; i++) {
    nodeToHide[i].setAttribute("style","display:none")
}
}


function otp6(){
    let otp = Math.floor(100000 + (10000000 - 1000) * Math.random())
    let sotp = otp.toString()
    let otpArray = sotp.split("") 

    let nodeToshow=  document.querySelectorAll(".otp-box")
    for (let i = 0; i < nodeToshow.length; i++) {
     nodeToshow[i].innerHTML = otpArray[i]
   }

   let nodeToHide=  document.querySelectorAll(".otp-6-box")
   for (let i = 0; i < nodeToHide.length; i++) {
    nodeToHide[i].setAttribute("style","display:normal")
}

    
}


 