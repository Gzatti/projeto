function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //if(html.classList.contains('light')) {
  //html.classList.remove('light')
  //}else {
  //  html.classList.add('light')
  //-- Acima representa a lógica de que se (if) conter o light, ao apertar o SWITCH, ele remove o LIGHT, Senão (Else) add o LIGTH --

  //Selecionar imagem
  const img = document.querySelector("#profile img")
  //substituir imagem
  if (html.classList.contains("light")) {
    //Se tiver light mode, trocar imagem
    img.setAttribute("src", "./Minhas fots/GabrielZattiLight.JPG")
  } else {
    //Se não tiver light mode, trocar imagem
    img.setAttribute("src", "./Minhas fots/GabrielKZatti.JPG")
  }

  //substituir texto alternativo no light
  if (html.classList.contains("light")) {
    //Se tiver light mode, trocar imagem
    img.setAttribute("alt", "profile_image_light")
  } else {
    //Se não tiver light mode, trocar imagem
    img.setAttribute("alt", "profile_image")
  }
}
