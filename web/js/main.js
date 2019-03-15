//pull information from api and call it.










function populateMenu() {
    getApp();
    getFood();
    getmCourse();
    getSides();
}


function getFood() {
    fetch('https://entree-f18.herokuapp.com/v1/menu')
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {

            for (let i = 0; i < 8; i++) {

                let food = JSON.stringify(myJson.menu_items[i].description);
                food = food.slice(1, -1);

                food += " $" + Math.round(Math.random() * 10000) / 100;
                console.log(food);
                if (food.charAt(food.length - 2) == ".") {
                    food += "0";
                }
                document.getElementById("foods" + i).innerHTML = food;
            }

        }
        ).catch(function (error) {
            console.log(error);

        });
}


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


