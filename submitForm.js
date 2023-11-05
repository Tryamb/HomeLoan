document.getElementById("myForm").addEventListener("submit", function (event) {
    var submitButton = document.querySelector("#myForm button[type='submit']")
    event.preventDefault();
    var nameField = document.getElementById("name").value;
    var mobField = document.getElementById("mob").value;
    var pinCodeField = document.getElementById("pinCode").value;
    var amountField = document.getElementById("loanAmount").value;

var formData = {
    name: nameField,
    mob: mobField,
    pinCode: pinCodeField,
    loanAmount: amountField
};

console.log("Form Data:", formData);
const AppUrl='https://script.google.com/macros/s/AKfycbx1dM3URGyVqvKmOvXWSFAHpY_-jlSG9u4zJzeYI-sX82ek-cjP4nZsfjfGfG0kmM_A/exec'

if(validInput()){
    submitButton.disabled=true
    fetch(AppUrl, {
        method: "POST",
        body: JSON.stringify(formData)
    })
    .then((response) => response.json())
    .then((data) => {
        document.getElementById("myForm").reset()
        submitButton.disabled = false
        window.location.href = "success.html"
    }).catch((error) => {
        console.error("Error:", error)
        submitButton.disabled = false
    })
  }
})

function validInput(){
    var mobField = document.getElementById("mob").value;
    var pinCodeField = document.getElementById("pinCode").value;
    const mobRegex = /^\d{10}$/;
    const pincodePattern = /^\d{6}$/;

    if (!mobRegex.test(mobField)) {
        alert("Mobile number must have 10 digits");
        return false;
    }

    if (!pincodePattern.test(pinCodeField)) {
        alert("Pin code number must have 6 digits");
        return false;
    }

    return true
}
