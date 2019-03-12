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
                var arr = title1.split(" ");
                var p = Math.floor(Math.random() * 12) + 8;
                app += "<div class='col-sm-3'>";
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
