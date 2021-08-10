
var employee = ["102666", "102631"]


document.getElementById("loginButton1").onclick = function(){
var entEmployee = document.getElementById("employeeNumber").value;


if(entEmployee == employee[0]){
    window.location.href = "certifications.html";
}
else if(entEmployee == employee[1]){
    window.location.href = "certifications1.html";
}
else{
    alert("wrong user or pasword")
}

}



