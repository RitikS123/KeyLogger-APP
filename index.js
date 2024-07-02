const startbtn = document.getElementById("start-btn");
const stopbtn = document.getElementById("stop-btn");
const keycontainer = document.getElementById("log");
const nokeycontainer = document.getElementById("state");

startbtn.addEventListener("click",()=>{
    document.addEventListener("keydown",handleDown);
    document.addEventListener("keyup",handleUp);
    startbtn.disabled = true;
    stopbtn.disabled = false;
});

stopbtn.addEventListener("click",()=>{
    document.removeEventListener("keydown",handleDown);
    document.removeEventListener("keyup",handleUp);
    startbtn.disabled = false;
    stopbtn.disabled = true;
    keycontainer.textContent = "";
    nokeycontainer.textContent = "";
});

function handleDown(e){
    keycontainer.textContent = `key ${e.key} is down`;
    nokeycontainer.textContent = `key is down`;
}

function handleUp(e){
    keycontainer.textContent = `key ${e.key} is up`;
    nokeycontainer.textContent = `key is up`;
}