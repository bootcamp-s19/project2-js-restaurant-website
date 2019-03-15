

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
// getMenu(#) pulls the first 8 stings from the array "https://entree-f18.herokuapp.com/v1/menu", and logs it to menu1 this repeats for each varible
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




// function getFood() {
//     fetch('https://entree-f18.herokuapp.com/v1/menu')
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (myJson) {

//             for (let i = 0; i < 8; i++) {

//                 let food = JSON.stringify(myJson.menu_items[i].description);
//                 food = food.slice(1, -1);

//                 food += " $" + Math.round(Math.random() * 10000) / 100;
//                 console.log(food);
//                 if (food.charAt(food.length - 2) == ".") {
//                     food += "0";
//                 }
//                 document.getElementById("foods" + i).innerHTML = food;
//             }

//         }
//         ).catch(function (error) {
//             console.log(error);

//         });
// }


// function getApp() {
//     fetch('https://entree-f18.herokuapp.com/v1/menu')
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (myJson) {

//             for (let i = 0; i < 8; i++) {

//                 let app = JSON.stringify(myJson.menu_items[i].description);
//                 app = app.slice(1, -1);

//                 app += " $" + Math.round(Math.random() * 10000) / 100;
//                 console.log(app);
//                 if (app.charAt(app.length - 2) == ".") {
//                     app += "0";
//                 }
//                 document.getElementById("Apps" + i).innerHTML = app;
//             }

//         }
//         ).catch(function (error) {
//             console.log(error);

//         });
// }


// // function getmCourse() {
// //     fetch('https://entree-f18.herokuapp.com/v1/menu')
// //         .then(function (response) {
// //             return response.json();
// //         })
// //         .then(function (myJson) {

// //             for (let i = 0; i < 8; i++) {

// //                 let mCourse = JSON.stringify(myJson.menu_items[i].description);
// //                 mCourse = mCourse.slice(1, -1);

// //                 mCourse += " $" + Math.round(Math.random() * 10000) / 100;
// //                 console.log(mCourse);
// //                 if (mCourse.charAt(mCourse.length - 2) == ".") {
// //                     mCourse += "0";
// //                 }
// //                 document.getElementById("mCourses" + i).innerHTML = mCourse;
// //             }

// //         }
// //         ).catch(function (error) {
// //             console.log(error);

// //         });
// // }


