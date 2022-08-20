function mouseOver(){
    document.getElementById('btn_Onmouseover').style.backgroundColor='blue';
}

function mouseOut(){
    document.getElementById('btn_Onmouseout').style.backgroundColor='green';
}
function onClick(){
    document.getElementById('btn_Onclick').style.backgroundColor='red';
}
function onDblclick(){
    document.getElementById('btn_Ondblclick').style.backgroundColor='yellow';
}
function onFocus(){
    document.getElementById('btn_Onfocus').style.backgroundColor='grey';
}
function onBlur(){
    var text = document.getElementById('btn_Onblur').value;
    var result = text.toUpperCase();
    document.getElementById('btn_Onblur').value = result;
}