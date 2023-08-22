const celsius=document.querySelector("#celsius-no");
const farenhiet=document.querySelector("#farenhiet-no");

window.addEventListener("load", ()=>celsius.foucs());

celsius.addEventListener("input", ()=>{
    farenhiet.value=((celsius.value*9)/5+32).toFixed(2);
    if(!celsius.value) farenhiet.value="";
});

window.addEventListener("load", ()=>farenhiet.foucs());

farenhiet.addEventListener("input", ()=>{
    celsius.value=((farenhiet.value-32)*5/9).toFixed(2);
    if(!farenhiet.value) celsius.value="";
});