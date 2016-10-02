/**
 * Created by JENN on 10/1/2016.
 */
"use strict";
var myError = document.getElementById("errorMsg");

function checkFirst() {
    var fname = document.getElementById("first").value;
    var testName = new RegExp("^[a-zA-Z]+$");
    if (!testName.test(fname))
    {
        myError.innerHTML = "Names should only include letters and no spaces";
        document.getElementById("first").value = "";
    }
    else {
        myError.innerHTML = "First name accepted";
    }
}

function checkLast() {
    var lname = document.getElementById("last").value;
    var testName = new RegExp("^[a-zA-Z]+$");
    if (!testName.test(lname)){
    myError.innerHTML = "Names should only include letters and no spaces";
    document.getElementById("last").value = "";
}
else {
    myError.innerHTML = "Last name accepted";
}
}

function checkAddress() {
    var address = document.getElementById("address").value;
    var testName = /^(\d{3,})\s?(\w{0,5})\s([a-zA-Z]{2,30})\s([a-zA-Z]{2,15})\.?\s?(\w{0,5})$/g;
    if (!testName.test(address)){
        myError.innerHTML = "Please use the format 123 Main St";
        document.getElementById("address").value = "";
    }
    else {
        myError.innerHTML = "Address accepted";
    }
}

function checkCity() {
    var city = document.getElementById("city").value;
    var testName = new RegExp("^[a-zA-Z]+$");
    if (!testName.test(city)){
        myError.innerHTML = "Cities should only include letters";
        document.getElementById("city").value = "";
    }
    else {
        myError.innerHTML = "City accepted";
    }
}

function checkState() {
    var state = document.getElementById("state").value;
    var testName = new RegExp("^^((AL)|(AK)|(AS)|(AZ)|(AR)|(CA)|(CO)|(CT)|(DE)|(DC)|(FM)|(FL)|(GA)|(GU)|(HI)|(ID)|(IL)|(IN)|(IA)|(KS)|(KY)|(LA)|(ME)|(MH)|(MD)|(MA)|(MI)|(MN)|(MS)|(MO)|(MT)|(NE)|(NV)|(NH)|(NJ)|(NM)|(NY)|(NC)|(ND)|(MP)|(OH)|(OK)|(OR)|(PW)|(PA)|(PR)|(RI)|(SC)|(SD)|(TN)|(TX)|(UT)|(VT)|(VI)|(VA)|(WA)|(WV)|(WI)|(WY))$");
    if (!testName.test(state)){
        myError.innerHTML = "Please follow the format IL";
        document.getElementById("state").value = "";
    }
    else {
        myError.innerHTML = "State accepted";
    }
}

function checkZip() {
    var zip = document.getElementById("zip").value;
    var testName = /^\d{5}$/g;
    if (!testName.test(zip)){
        myError.innerHTML = "Please follow the 5 digit format";
        document.getElementById("zip").value = "";
    }
    else {
        myError.innerHTML = "Zip accepted";
    }
}

function checkPhone() {
    var phone = document.getElementById("phone").value;
    var testName = new RegExp("^([\(]{1}[0-9]{3}[\)]{1}[ ]{1}[0-9]{3}[\-]{1}[0-9]{4})$");
    if (!testName.test(phone)) {
        myError.innerHTML = "Please use the format (555) 555-5555";
        document.getElementById("phone").value = "";
    }
    else {
        myError.innerHTML = "Phone number accepted";
    }
}

function checkCell() {
    var cell = document.getElementById("cell").value;
    var testName = new RegExp("^([\(]{1}[0-9]{3}[\)]{1}[ ]{1}[0-9]{3}[\-]{1}[0-9]{4})$");
    if (!testName.test(cell)) {
        myError.innerHTML = "Please use the format (555) 555-5555";
        document.getElementById("cell").value = "";
    }
    else {
        myError.innerHTML = "Cell number accepted";
    }
}

function checkEmail(){
    var email = document.getElementById("email").value;
    var testEmail = new RegExp(".+\@.+\..+");
    if(!testEmail.test(email)){
        myError.innerHTML = "That is not a proper email, it needs an @ and a domain";
        document.getElementById("email").value = "";
    }
    else{
        myError.innerHTML = "Email meets requirements";
    }
}

//Calling functions
window.onload = function () {
    checkFirst();
    checkLast();
    checkAddress();
    checkState();
    checkZip();
    checkCity();
    checkPhone();
    checkCell();
    checkEmail();
}