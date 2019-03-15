

// Set varibles for objects to call

var fetchResults = {};
var menu1 = {};
var menu2 = {};
var menu3 = {};
var menu4 = {};

document.onreadystatechange = function () {
    init();
}

// async this function to settle data at one time. Await allows this funtion to stop with out blocking the other promises until init
// getMenu(8) pulls the first 8 stings from the array "https://entree-f18.herokuapp.com/v1/menu", and logs it to menu1 this repeats for each varible
async function init(){        
    var menu1 = await getMenu(8);
    updateMenu("menu1_output", menu1);

    var menu2 = await getMenu(4);
    updateMenu("menu2_output", menu2);

    var menu3 = await getMenu(2);
    updateMenu("menu3_output", menu3);

    var menu4 = await getMenu(3);
    updateMenu("menu4_output", menu4);
}

// this  function pulls our Array data  from our API  and converts it into a string and then saves it to data and sets it to 
// fetchResults then we return fetchResults to end the function
async function getMenu(id) {
    let url = 'https://entree-f18.herokuapp.com/v1/menu/' + id; 
    var id = await fetch(url)
    .then(status)
    .then(json)
    .then(function(data) {
      console.log('Request succeeded with JSON response', data); 
      fetchResults = data;    
    }).catch(function(error) {
      console.log('Request failed', error);
    });

    return fetchResults;
}

//This function is what creates the list effect on my tabs in the menu.
function updateMenu (menu_holder, menu){
    var output = document.getElementById(menu_holder);
    output.style.display = 'block';
    var str = "<ul>";
    // for(var i = 0; i < menu.menu_items.length; i++){        <--- this for loop starts at 0 in the Array for menu_holder, and loops for the length of the menu items until 
    //   var menu_item = menu.menu_items[i];                      we land at the end of the four loop. 
      str += "<li>" + menu_item.description + "</li>";
    }
    str += "</ul>";
    output.innerHTML = str;
  }
  
  
  //This function checks the response time for our fetch function. If the time takes between 200ms-300ms the fetch function isn't working fast enough

  function status(response) {
      if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response)
      } else {
        return Promise.reject(new Error(response.statusText))
      }
    }
    
    function json(response) {
      return response.json()
    }



