const form = document.querySelector("form")

form.addEventListener("submit",function(event){
    event.preventDefault()

    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const results = document.querySelector("#results")
    const display = document.querySelector("#display")

    if( height ==="" || height < 0 || isNaN(height)){
        results.innerHTML = "Please give me a valid height"
    } 
    else if( weight ==="" || weight < 0 || isNaN(weight)){
        results.innerHTML = "Please give me a valid weight"
    }
    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)
        results.innerHTML = `${bmi}`
        if(bmi < 18.6){
            display.innerHTML = `You are Under Weight`
        }
        else if( bmi > 18.6 &&  bmi < 24.9){
            display.innerHTML = `You are Fit`
        }
        else{
            display.innerHTML = `You are Overweight`
        }
    }
})












