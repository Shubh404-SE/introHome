// console.log("working")

// let a = document.getElementsByClassName("dropdown-btn");

// console.log(a);
// Array.from(a).forEach((btn)=>{
//     console.log(btn);
//     btn.addEventListener("mouseover", (event)=>{
//         console.log(btn.firstChild);
//     })
// })

let a = document.getElementsByClassName("mpsvg");
console.log(a);
Array.from(a).forEach((obj)=>{
    obj.setAttribute("path", "http://www.w3.org/2000/svg");
    console.log(obj)
})