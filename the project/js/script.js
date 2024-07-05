let svg =document.querySelector(".page-header .svg svg")
console.log(document.querySelector(".page-header .svg "))
let list =document.querySelector(".page-header nav > div")
function toggleActivClass(clickEle) {
    let svgActiv=document.querySelectorAll("nav .svg svg.activ")
    svgActiv.forEach((ele) =>{
        ele.classList.remove("activ")
        list.classList.toggle("activ")
    })
    clickEle.classList.add("activ")
}




