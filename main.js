let bill = 0
let tipPercentage = 0
let numberOfPeople = 0
let buttonSelected = null

let billInput = document.querySelector("#bill")
billInput.addEventListener("input", receiveBillValue)

let numberOfPeopleInput = document.querySelector("#people")
numberOfPeopleInput.addEventListener("input" ,receiveNumberOfPeopleValue)

function receiveBillValue() {
    bill = billInput.valueAsNumber
    calculate()

}

function receiveNumberOfPeopleValue(){
numberOfPeople = numberOfPeopleInput.valueAsNumber
calculate()
}

function receiveTipPercentageValue (value){
   
    tipPercentage = value / 100
    
removeClassButtonSelected()

    buttonSelected = document.querySelector(`#button-${value}`)
    buttonSelected.classList.add("button-selected")
}

function removeClassButtonSelected(){
    if(buttonSelected !== null){
        buttonSelected.classList.remove("button-selected")
        buttonSelected = null
    }
}

function calculate(){
    if (bill !== 0 && tipPercentage !== 0 && numberOfPeople !== 0){
        console.log("é possivel calcular")}
else {
    console.log("Ainda não dá! Preencha tudo!")
}
}