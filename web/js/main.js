const url = 'https://entree-f18.herokuapp.com/v1/menu/';

async function loadMenu(){
    //loadApps();
    loadMenuItems(8, "appetizers");
    //loadSmalls();
    loadMenuItems(8, "smallplates");
    //loadMains();
    loadMenuItems(8, "mains");
    // desserts
    loadMenuItems(8, "desserts");
    // gallery
    loadGallery(8, "gallery");
}



async function loadMenuItems(num, whereTo) {
    var app = "";
    var uri = url + num;
        var output = await fetch(uri).then(function (response) {
            return response.json();
        })
        .then(function (myJson) {

            for (var i = 0; i < myJson.menu_items.length; i++) {
                var title1 = myJson.menu_items[i].description;
                // splitting first 2 indexes(words) off of the menu description and turning them into the card title
                var arr = title1.split(" ");
                // creating a random number whole number between 8 and 19 for price in card sub title
                var p = Math.floor(Math.random() * 12) + 8;
                app += "<div class='col-sm-6 col-md-4 col-lg-3'>";
                app += "<div class='card' id='item-" + i + "'>";
                app += "<div class='card-body'>";
                app += "<h5 class='card-title'>" + arr[0] + " " + arr[1] + "</h5>";
                app += "<h6 id='price' class='card-subtitle'>" + "$" + p + "</h6>";
                app += "<p class='centered'>" + title1 + "</p>" + "</div></div></div>";
            }
            console.log(output);
            document.getElementById(whereTo).innerHTML = app;
        });
        
}

function getUrl(i){
    return "https://source.unsplash.com/collection/271352/25" + i + "x25" + i;
}

function loadGallery(num, whereTo) {
    var pic = "";
    for (var i = 0; i < num; i++){
        pic += "<div class='col-sm-6 col-md-4 col-lg-3'>";
        pic += "<img id='gallery-imgs' class='img-fluid' src='" + getUrl(i) + "'>";
       pic += "</div>";
    }
    console.log(pic);
    document.getElementById(whereTo).innerHTML = pic;
}
