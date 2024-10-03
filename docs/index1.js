let mainNavLinks = document.querySelectorAll("main aside nav section ul li a");
/*let mainNavLinks = document.querySelectorAll("main div nav section ul li a");*/

let mainDivs = document.querySelectorAll("main section div[id]");
/*let mainDivs = document.querySelectorAll("main aside div"[id]);*/

let lastId;
let cur = [1];

// Add scroll event listener
window.addEventListener("scroll", event => {
    let windowTop = window.scrollY;

    mainNavLinks.forEach(navLink => {
        let mainDiv = document.querySelector(navLink.hash);
        if ( mainDiv.offsetTop <= windowTop && mainDiv.offsetTop + mainDiv.offsetHeight > windowTop) {
            navLink.classList.add("active");
        }else {
            navLink.classList.remove("active");
        }
    });
});