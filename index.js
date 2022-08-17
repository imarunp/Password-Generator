const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let firstPass=document.getElementById("passOne")
let secondPass=document.getElementById("passTwo")

function getRandomChar(){
    let rand=Math.floor(Math.random()*characters.length)

    return characters[rand]
}

function generatePass(){
    let finalPass=""
    for(let i=0; i<15; i++){
        finalPass+=getRandomChar()
    }
    return finalPass;
}
function fillPass(){
firstPass.textContent=generatePass()
secondPass.textContent=generatePass()
}
