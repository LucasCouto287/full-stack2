var words = ["bitcoin", "ether", "bat"];
var numbers = ["12", "32", "29"];
var num = 2;
var letter = "e";
var fistLetter = 0;

try {
    for(var i = 0; i<words.length; i++){
        if(words[i][fistLetter] == letter) {
            document.getElementById("array").innerHTML = words[i];
        }
    }

    for(var i = 0; i<numbers.length; i++){
        if(numbers[i] > num || numbers[i] < num) {
            document.getElementById("number").innerHTML = numbers[i];
        }
    }

}
catch(err) {
    document.getElementById("error").innerHTML = err.message;
}



