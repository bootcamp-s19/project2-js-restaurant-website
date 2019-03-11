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
                app += "<div class='col-sm-3'><div class='card' id='item-" + i + "'><div class='card-body'>";
                app += myJson.menu_items[i].description + "</div></div></div>";
            }
            console.log(output);
            document.getElementById(whereTo).innerHTML = app;
        });
        
}
