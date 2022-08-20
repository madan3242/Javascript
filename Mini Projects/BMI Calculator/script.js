function calculateBmi(){
    let weight = document.getElementById('inputWeight').value;
    let height = document.getElementById('inputHeight').value;

    let bmi = weight / (height * height);
    // alert(bmi);
    document.getElementById('displayBmi').innerText = bmi;
    // return bmi;
    
}

// let displayBmi = calculateBmi();
// alert('he');
// document.getElementById('displayBmi').innerHTML = displayBmi;