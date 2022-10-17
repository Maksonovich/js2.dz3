const inp = document.querySelector("#input")
const btn = document.querySelector("#btn")

// let age = 16;

// btn.addEventListener('click',() => {
//     let time = new Promise( (resolve,reject) => {
//         if (age == inp.value) {
//             resolve("True")
//         }else {
//             reject("False")
//         }
//     }).then((resolve) => console.log(resolve))
//     .catch((reject) => console.log(reject))
// })


let word = "JavaScript"

btn.addEventListener('click',() => {
    let check = new Promise((resolve,reject) => {
        if (inp.value == 10) {
            alert("Вы угадали")
        }else {
            alert("Не правильно")
        }
    })
})