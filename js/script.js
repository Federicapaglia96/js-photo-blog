const picturesApi= "https://lanciweb.github.io/demo/api/pictures/";
axios.get(picturesApi).then((resp)=>{
const pictures=resp.data;
let picturesTemplate="";
pictures.forEach(singlePhotos=>{
const{title,date}=singlePhotos
console.log(title,date);
picturesTemplate += ` <div class="card">
                 <h3>${title}</h3>
                 <p>${date}</p>
                </div>`
})

});


