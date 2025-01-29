function DisplayManu() {
    const menu = document.getElementById("MoreContaines");
    const mancross = document.querySelector("#manue")
    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}


const toggleLogout = () => {
    let logval = document.querySelector("#logout");
    if (logval.style.display === "none" || logval.style.display === "") {
        logval.style.display = "block"; 
    } else {
        logval.style.display = "none"; 
    }
}


const ClosePage=()=>{
    clearInterval();
    location.href = "../index.html"
}
VANTA.BIRDS({
    el: "#",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    backgroundColor: 0xe8c2a0,
    color2: 0x6bbed9,
    colorMode: "variance",
    backgroundAlpha: 0.63
})
// VANTA.FOG({
//     el: "#type_mainDiv",
//     mouseControls: true,
//     touchControls: true,
//     gyroControls: false,
//     minHeight: 200.00,
//     minWidth: 200.00,
//     midtoneColor: 0xe67373,
//     lowlightColor: 0xff96,
//     baseColor: 0xe1e096
//   })