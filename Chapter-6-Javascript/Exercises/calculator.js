function getInputValue() {
    let inputValue = document.getElementById("petrol_cost").value;
    document.getElementById("output").innerHTML = inputValue + " litres will cost: " + inputValue*1.72 + "$";
}