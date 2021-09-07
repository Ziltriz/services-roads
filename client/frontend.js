const signIn = document.getElementById("signIn")
const signUp = document.getElementById("signUp")
const featured = document.getElementById("featured")


 function rotat(pathSite) {

        document.location.href= `${pathSite}`
};


headingOne.addEventListener('click', () => {
     const collaspseOne = document.getElementById("collapseOne")
     collaspseOne.classList.toggle('show')
     
    
      
})

headingTwo.addEventListener('click', ()=>{
     const collaspseTwo = document.getElementById("collapseTwo")
     collaspseTwo.classList.toggle('show')
     })

headingThree.addEventListener('click', ()=>{
     const collaspseThree = document.getElementById("collapseThree")
     collaspseThree.classList.toggle('show')
})

signIn.addEventListener("click", ()=>{
     rotat(signIn.value)
     console.log(rotat)
})


signUp.addEventListener("click", ()=>{
     rotat(signUp.value)
})





