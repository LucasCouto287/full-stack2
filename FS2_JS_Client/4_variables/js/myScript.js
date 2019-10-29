var words = ["bitcoin", "ether", "bat"];
var numbers = ["1", "2", "3"];
try {
    document.getElementById("num").innerHTML = numbers;
    document.getElementById("array").innerHTML = words;
}
catch(err) {
    document.getElementById("error").innerHTML = err.message;
}



