// validasi password harus 8 minimal
// validasi password harus ada kapital
// validasi confirm password harus sama kayak password
// umur harus lebih tua dari 18 tahun
// gender harus diisi
// tnc harus dicentang

function capitalPasswordValidator(password){
    return /[A-Z]/.test(password)
}

document.querySelector(".signup-button-form").addEventListener("click", (e) => {
    e.preventDefault();
    
    var password
    var conPassword
    var dob
    var year
    var currYear
    var gender
    var tnc
    
    password = document.getElementById("password-box").value 
    conPassword = document.getElementById("confirm-password-box").value
    dob = new Date(document.getElementById("dob-box").value)
    year = dob.getFullYear()
    currYear = new Date().getFullYear()
    gender = document.getElementById("gender-box").value
    tnc = document.getElementById("tnc-box").checked
    
    // password
    if(password == ""){
        document.getElementById("error-message").innerHTML = "Password must be filled!"
    }
    else if(password.length < 8){
        document.getElementById("error-message").innerHTML = "Password must be 8 characters!"
    }
    else if(capitalPasswordValidator(password) == false){
        document.getElementById("error-message").innerHTML = "Password must contain at least 1 uppercased character!"
    }
    else if(conPassword != password){
        document.getElementById("error-message").innerHTML = "Password do not match"
    }

    // dob
    else if(dob == "Invalid Date"){
        document.getElementById("error-message").innerHTML = "Date of birth must be filled"
    }
    else if(currYear - year < 18){
        document.getElementById("error-message").innerHTML = "Age must be 18 or older"
    }

    // gender
    else if(gender == "placeholder-gender"){
        document.getElementById("error-message").innerHTML = "Pick a gender!"
    }

    //tnc
    else if (!tnc) {
        document.getElementById("error-message").innerHTML = "Terms and conditions must be checked!";
    }
    else{
        window.location.href = "../Movies/movies.html"
    }
});
