//ACCESS CSS PROPERTIES VIA JS

//EVENTS: onmouseover, onmouseout, onmousedown, onmouseup

let changeBackground=function(){
    let box1=document.getElementById("block1");
    let box2=document.getElementById("block2");
    let box3=document.getElementById("block3");

    box1.style.backgroundColor="green";
    box2.style.backgroundColor="blue";
    box3.style.backgroundColor="yellow";

    box1.innerText="HI";
    box2.innerText="MY NAME IS";
    box3.innerText="INDIGO MONTOYA";
}

let setOriginal=function(){
    let box1=document.getElementById("block1");
    let box2=document.getElementById("block2");
    let box3=document.getElementById("block3");

    box1.style.backgroundColor="red";
    box2.style.backgroundColor="red";
    box3.style.backgroundColor="red";

    box1.innerText="OVER";
    box2.innerText="DOWN";
    box3.innerText="DOWN";
};

let showHidden=function(){
    document.getElementById("hidden").innerText="We know where you hid the coke, Tony. Just fess up now and your family can stay unharmed, it's just you we wanna have a little talk with.";
};

let mouseOver=function(id){
    id.style.backgroundColor="yellow";
    id.innerText="HELLO";
};

let mouseOut=function(id){
    id.style.backgroundColor="red";
    if(id===document.getElementById('block1')){
        id.innerText="OVER"
    }else if(id===document.getElementById("block2")){
        id.innerText="ENTER";
    }else
        id.innerText="DOWN";
};

let addClass=function(id){
    id.classList.add("blueBigBold");
};

let removeClass=function(id){
    id.classList.remove("blueBigBold");
};

let toggleClass=function(id){
    id.classList.toggle("blueBigBold");
}