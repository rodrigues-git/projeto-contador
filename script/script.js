function contar(){
    let txtinicio = document.getElementById('txtinicio')
    let txtfim = document.getElementById('txtfim')
    let txtpasso = document.getElementById('txtpasso')
    let msg = document.getElementById('msg')

    if(txtinicio.value.length == 0 || txtfim.value.length == 0 || txtpasso.value.length == 0){
        window.alert("[ERROR] DADOS INCOMPLETOS!")
        msg.innerHTML = 'Impossível realizar contagem!'
    }

    else if(txtpasso.value <= 0){
        window.alert("[ERROR] PASSO INVÁLIDO!")
        msg.innerHTML = 'Impossível realizar contagem!'
    }

    else{

        let inicio = Number((txtinicio.value))
        let fim = Number((txtfim.value))
        let passo = Number((txtpasso.value))

        msg.innerHTML = 'Contagem: '

        if(inicio < fim){
            for(let i = inicio; i <= fim; i+=passo){
                msg.innerHTML += `${i} \u{1F449}`
            }
        }

        if(inicio > fim){
            for(let i = inicio; i >=fim; i-=passo){
                msg.innerHTML += `${i} \u{1F449}`
            }
        }

        msg.innerHTML += `\u{1F3C1}`
    
    }
            
}









