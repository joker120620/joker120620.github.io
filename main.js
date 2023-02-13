
function deselecionar(){
  document.getElementById("nav1").setAttribute("class", "item_nav")
  document.getElementById("nav2").setAttribute("class", "item_nav")
  document.getElementById("nav3").setAttribute("class", "item_nav")
  document.querySelector("#section1").setAttribute("class", "ocultar")
  document.querySelector("#section2").setAttribute("class", "ocultar")
  document.querySelector("#section3").setAttribute("class", "ocultar")
}
function seleccionar(n){
  deselecionar()
  let btn_nav= document.getElementById(`nav${n}`).setAttribute("class", "item_nav_act")
  document.getElementById(`section${n}`).setAttribute("class", "section_act")
}