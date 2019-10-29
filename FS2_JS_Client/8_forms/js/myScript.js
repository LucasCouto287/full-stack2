console.log('javascript');
function doSomething() {
    var theNumber = document.getElementById("aNumber");
    if (!theNumber.checkValidity()) {
        document.getElementById("resultMessage").innerHTML =
            theNumber.validationMessage;
    }
}
