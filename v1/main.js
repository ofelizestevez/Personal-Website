const navSlide = () => {
    const burger = document.getElementById("burger");
    const nav = document.querySelector("nav");

    burger.onclick = function(){
        console.log(nav.classList);

        if ("nav-show" == nav.classList){
            nav.classList.remove("nav-show");
        }
        else {
            nav.classList.add("nav-show")
        }

    }
}

navSlide()
console.log("Testing")