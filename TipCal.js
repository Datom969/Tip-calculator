const billform = document.querySelector(".Tipform")
billform.addEventListener("submit", e=>{
    e.preventDefault()
})
const amount =document.querySelector(".amount")
const noOfPeople = document.querySelector(".persons")

const tipPercent = document.querySelectorAll(".tip")
const customButton =document.querySelector(".custom")

const tipPerPerson = document.querySelector(".perperson")
const totalTip = document.querySelector(".total")

const billError = document.querySelector("#billerror")
const peopleError = document.querySelector("#peopleerror")

const reset = document.getElementById("reset")

let isValid = false;

function calculateTip(){
    isValid = true;
    
    if (amount.value <=0 || amount.value =="") {
        billError.textContent ="Enter valid amount"
        amount.style.borderColor= "tomato"
        isValid= false;

    }
    else{
        billError.textContent =""
        amount.style.borderColor= "" 

    }
    if (noOfPeople.value <=0 || noOfPeople.value =="") {
        peopleError.textContent ="Enter valid number"
        noOfPeople.style.borderColor= "tomato"
        isValid= false;

    }
    else{
        peopleError.textContent =""
        noOfPeople.style.borderColor= ""
}
return isValid
}

tipPercent.forEach(button => {
    button.addEventListener("click", function(){
        if(calculateTip()){
            const findTip = button.getAttribute("data-action");
            const percentage = parseFloat(findTip);
            const unitTip = ((amount.value)/parseInt(noOfPeople.value)) * percentage;
            const collectiveTip = unitTip + ((amount.value)/parseInt(noOfPeople.value))
            tipPerPerson.textContent = "$" + unitTip.toFixed(2);
            totalTip.textContent = "$" + collectiveTip.toFixed(2);
        }
    })
})

function custom(){
    if(calculateTip){
    const customTip = parseFloat(customButton.value)/100
    const customUnitTip = (amount.value/parseFloat(noOfPeople.value))* customTip
    const TotalCustomTip = customUnitTip + ((amount.value)/parseInt(noOfPeople.value))
    tipPerPerson.textContent = "$" + customUnitTip.toFixed(2)
    totalTip.textContent = "$" + TotalCustomTip.toFixed(2);
    
    }
}
customButton.addEventListener("input", custom)

function reload(){
    amount.value = ""
    noOfPeople.value = ""
    customButton.value =""
    if(amount.value=="" && noOfPeople.value ==""){
        tipPerPerson.textContent="$0.00"
        totalTip.textContent = "$0.00"
    }
}

reset.addEventListener("click", reload)

 