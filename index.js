function calculateBMI() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value) / 100; // Convert height to meters
    const bmi = weight / (height * height);

    if (isNaN(bmi)) {
        document.getElementById("result").textContent = "Please enter valid values.";
    } else {
        document.getElementById("result").textContent = `Your BMI is: ${bmi.toFixed(2)}`;
    }

    if(bmi<18.5){
        document.getElementById("res").textContent = " you are underweight";
    }
    else if(bmi > 18.5 && bmi < 24.9){
        document.getElementById("res").textContent = "Helathy weight";
    }
    else if(bmi > 25 && bmi < 29.9){
        document.getElementById("res").textContent = "You are overweight";
    }
    else if(bmi > 30 && bmi < 40){
        document.getElementById("res").textContent = "Obesse";
    }
    else{
        document.getElementById("res").textContent = "Not a Human";
    }
}
