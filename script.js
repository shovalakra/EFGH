// document.getElementById('heading').style.color = 'red';

function changeStyle(){
    document.getElementById('heading').style.color = 'red';
    document.getElementById('heading').style.fontFamily = 'sans-serif';
    document.getElementById('heading').style.fontSize = '50px';
    document.getElementById('heading').style.marginLeft = '100px';
    document.getElementById('heading').style.display = 'none';
}

function showText(){
    document.getElementById('heading').style.display = 'block';
}
function hideText(){
    document.getElementById('heading').style.display = 'none';
}
function showResult(){
    document.getElementById('result').innerHTML = (5+5+5);
} 
function clearResult(){
    document.getElementById('result').style.display = 'none';
}
function multiply(){
    document.getElementById('multiply').innerHTML = (5*5);
} 


