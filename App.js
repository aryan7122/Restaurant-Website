let left = document.getElementsByClassName('bi-caret-left-fill')[0];
let right = document.getElementsByClassName('bi-caret-right-fill')[0];
let cards = document.getElementsByClassName('cards')[0];

left.addEventListener('click', () => {
    cards.scrollLeft -= 100;
})
right.addEventListener('click', () => {
    cards.scrollLeft += 100;
})

let Poster = document.getElementById('poster');
let title = document.getElementById('title');
let price_cont = document.getElementById('price_cont');

Array.from(document.getElementsByClassName('card')).forEach((ele, i)=>{
    // console.log(ele)
    ele.addEventListener('click', () => {
        Poster.src = ele.getElementsByTagName('img')[0].src;
        title.innerText = ele.getElementsByTagName('h5')[0].innerText;
        price_cont.innerText = ele.getElementsByTagName('h4')[0].innerText;
    })
})