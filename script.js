var username, password

document.getElementById("login-btn").addEventListener("click", function() {
   username = (document.getElementById('exampleInputEmail1').value)
   password = (document.getElementById('exampleInputPassword1').value)
   console.log(username, password)
})
