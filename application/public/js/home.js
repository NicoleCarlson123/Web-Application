document.getElementById("getphotos").onclick = fetch();
function fadeOut(event){
    

}
function createPhotoCard(data, containerDiv){
   
        let div = document.createElement('div');
        let img = document.createElement('img');
        img.src = containerDiv;
        img.width = "200";
        img.height = "200";
        div.appendChild(img);
        return div;

       
    }

 var options = {
            "method": 'GET',
            "headers": { 
                contenttype:"image/x-icon"

            }
        }

let mainDiv = document.getElementById("container");

if(mainDiv){
    let fetchURL = "https://jsonplaceholder.typicode.com/albums/2/photos"
    fetch(fetchURL, options)
    .then((data) => data.json())
    .then((photos) => {
        let innerHTML = "";
        photos.forEach((photo) => {
            createPhotoCard(photo, mainDiv);
        });
        document.getElementById('items-count').innerHTML= `There are ${photos.legth} photo(s) being shown`;
    })
}