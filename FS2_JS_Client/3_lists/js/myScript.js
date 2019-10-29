var lis = document.querySelectorAll("#my-list li");
var i, l, alertMessage = '';
l = lis.length;


for (i = 0; i < l; i++) {
    alertMessage += i + ". " + lis[i].textContent + "\n";
}

console.log(alertMessage);
