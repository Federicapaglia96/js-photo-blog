//prelevo overlay dall'HTML
const rowElem = document.querySelector(".row");
const overlayElem = document.getElementById("overlay");

const picturesApi = "https://lanciweb.github.io/demo/api/pictures/"; // risorsa => output (JSON) => leggibile 
axios.get(picturesApi).then((resp) => {
  const pictures = resp.data;
  let picturesTemplate = "";
  pictures.forEach(singlePhotos => {
    const { title, date, url } = singlePhotos
    console.log(title, date, url);
    //al click sul div invoco la funzione
    picturesTemplate += `
              <div class="col" onclick="clickZoom('${url}')" > 
              <img class = "point" src="css/img/pin.svg"/>
              <img src="${url}">
                 <h4>${title}</h4>
                 <p>${date}</p>
                </div>`
  })
  rowElem.innerHTML = picturesTemplate;

});


// dichiaro funzione per aprire l'immagine

function clickZoom(url) {
  overlayElem.innerHTML = `
  <img class="overlayimg" src="${url}"/>
  <button class= "btn" onclick="chiudiImg()">Chiudi</button>`;// creo il bottone di chiusura
   overlayElem.style.display = "flex";// abbiamo reso visibile l'img e bottone
}
//creo la funzione per chiudere l'immagine
function chiudiImg(){
overlayElem.style.display = "none"; // abbiamo nascosto img e bottone

}
