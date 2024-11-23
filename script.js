function nascondi_scopri(tag){
    console.log("avviato")
    let element= document.querySelector(tag)
    element.classList.toggle("open")
    element.classList.toggle("close")
}

    // codice senza l'utillizzo del toggle
                            // if(about_extra.classList.contains("close")){
                            //     about_extra.classList.remove("close")
                            //     about_extra.classList.add("open")
                            // }else{
                            //     about_extra.classList.remove("open")
                            //     about_extra.classList.add("close")
                            // }
function menu(){
  console.log("avviato")
  let element= document.querySelector('.tenda')
  document.body.classList.toggle('Mopen')
}
                            
