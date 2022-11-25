let result = document.getElementById("screen");

let calculate=(number) => {
    result.value = result.value + number
}

let equal=() => {
        try {
            result.value = eval(result.value)
        }
        catch(err) {
            alert("Error Input")
            result.value = ""
        }

}

function clearr() {
    result.value = "";
}

function deletelastitem() {
    result.value = result.value.slice(0,-1)
}



