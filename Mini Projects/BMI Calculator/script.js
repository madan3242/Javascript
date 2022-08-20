function calculateBmi(){
    let weight = document.getElementById('inputWeight').value;
    let height = document.getElementById('inputHeight').value;

    let bmi = weight / (height * height);
    // alert(bmi);
    document.getElementById('displayBmi').innerHTML = bmi;

}