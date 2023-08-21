//function cap elements
function capElements(element) {
    return document.getElementById(element);
};
//function for onload page
function onloadPage() {
    window.addEventListener("load", (event) => {
        setTimeout(()=>{
            let main=capElements("main");
            main.style.display="flex";
        },2000);
    }); 
};
onloadPage();

//function viwer img-person
let personName =capElements("title_name");
personName.addEventListener('pointermove', ()=>{
    let divPhoto=capElements('div_profile_img')
    divPhoto.style.display='flex';
});
//display none for img profile
personName.addEventListener('pointerout', ()=>{
    let divPhoto=capElements('div_profile_img')
    divPhoto.style.display='none'
})
//efect cursor
