const reg = document.getElementById("reg")
const frgt = document.getElementById("frgtpass")


function rotat(pathSite) {

     document.location.href= `${pathSite}`
};

frgt.addEventListener("click", () => {
     rotat(frgt.value)
})


reg.addEventListener('click', ()=>{
     rotat(reg.value)
})

