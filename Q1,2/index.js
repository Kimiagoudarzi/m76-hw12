let submitButton = document.getElementById('submit');
submitButton.addEventListener('click', function (e) {
    e.preventDefault();    
})


let emailInput = document.getElementById("Email");
emailInput .addEventListener('change', function () {
    let e = document.getElementById('newEmail');
    e.textContent = this.value;
});


let userName = document.getElementById("username");
userName.addEventListener('change', function () {
    if (this.value.length == 0 || Number(this.value)) {
        alert("please enter your name :(");
    }else {
        alert("data entered ;)")
        return "false";}
})
