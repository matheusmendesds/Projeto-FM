const opcoes=[...document.querySelectorAll(".barra-opc")]
const notic=[...document.querySelectorAll(".inbox-item")]
const tirarSelecao=()=>{
    const itensSelecionados=[...document.querySelectorAll(".selecionado")]
    itensSelecionados.map((el)=>{
        el.classList.remove("selecionado")
        el.classList.add("teste")
    
    })
}
const mudarNoticia=()=>{
    const itensSelecionados=[...document.querySelectorAll(".noticaSelecionada")]
    itensSelecionados.map((el)=>{
        el.classList.remove("noticaSelecionada")
    })
}
opcoes.map((el)=>{
    el.addEventListener("click",(evt)=>{
        tirarSelecao()
        const el=evt.target
        el.style.cursor="grab"
        el.classList.remove("teste")
        el.classList.toggle("selecionado")
       
        
    })

})

notic.map((el)=>{
    el.addEventListener("click",(evt)=>{
        mudarNoticia()
        el.classList.toggle("noticaSelecionada")
        let tela=document.getElementById("tela-info")
        tela.innerHTML="teste"
    })
})
console.log(notic)
