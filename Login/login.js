function logar(){
    var codename = document .getElementById('codename').value;
    var password = document .getElementById('password').value;

    if (codename == "tangobyebye" && password == "19071999"){
        location.href = "../index.html";
    } else{
        alert ('Usuário ou senha incorretos');
    }
}
function pwgenerate(){
    
}