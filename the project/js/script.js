
let svg =document.querySelectorAll("header .svg svg")
let list =document.querySelector("header ul")

function toggleActivClass(clickEle) {
    let svgActiv=document.querySelectorAll("header .svg svg.activ")
    svgActiv.forEach((ele) =>{
        ele.classList.remove("activ")
        list.classList.toggle("activ")
    })
    clickEle.classList.add("activ")
}
let arrow=document.querySelectorAll(".Questions .boxs .box svg")
let box=document.querySelectorAll(".Questions .boxs .box ")
arrow.forEach(function(ele) {

    ele.addEventListener("click" , function () {
        ele.classList.toggle("activ")
        ele.parentElement.parentElement.classList.toggle('activ')
    })
}  
)



const listItems = document.querySelectorAll('.Features .tow .List li');
const featureImg = document.querySelector('.Features .tow .info img');
const featureTitle = document.querySelector('.Features .tow .info h1');
const featureText = document.querySelector('.Features .tow .info p');

listItems.forEach(function (item) {

    
    item.addEventListener("click",function () {
        listItems.forEach(function (item) {
            item.classList.remove("activ")
        })
        item.classList.add("activ")
        const title = item.getAttribute('data-title');
        const text = item.getAttribute('data-text');
        const imgSrc = item.getAttribute('data-img');

        featureTitle.textContent = title;
        featureText.textContent = text;
        featureImg.src = imgSrc;
    })
})

