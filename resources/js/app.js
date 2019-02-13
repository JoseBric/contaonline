require('./bootstrap');
require('./containers/App');

document.addEventListener("click", e=>{
    const opens = document.querySelectorAll(".open")
    if(opens.length > 0) {
        opens.forEach(el=>{
            el.classList.remove("open")
        })
    }
})