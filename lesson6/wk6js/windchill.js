function calcWind(){
    let temp = parseFloat(document.getElementById("temp").value);
    let wind = parseFloat(document.getElementById("wind").value);
    let result = windChill(temp,wind);

    document.getElementById("chillWind").innerHTML = result;
    
}
function windChill(tempF,speed){
    let f = 35.74 + 0.6215 * tempF - 35.75 * Math.pow(speed,0.16) + 0.4275 * tempF * Math.pow(speed,0.16);	
    return f;  
}