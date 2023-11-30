const opcoes=[...document.querySelectorAll(".barra-opc")]

opcoes.map((el)=>{
    el.addEventListener("click",(evt)=>{
        const el=evt.target
        el.classList.toggle("selecionado")
    })

})
