var user = "ghiberti";
var pass = "1234";


document.getElementById("loginButton").onclick = function(){
var entUser = document.getElementById("user").value;
var entPass = document.getElementById("pass").value;
if(entPass == pass && entUser == user){
    
    window.location.href="certifications.html";
}
else{
    alert("invalid user or password");
}
}