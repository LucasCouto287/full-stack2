try {
    alert("welcome to my site");
    console.log('ok')
}
catch(err) {
    document.getElementById("error").innerHTML = err.message;
}
finally {
// If needed, you can do something here regardless of what happens in try/catch
}
