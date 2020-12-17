function adicionarTarefa(){
    const campoTarefa = document.getElementById('tarefa')
    const seletorDia = document.getElementById('dias-semana')
    
    if(campoTarefa.value !== ""){
    const novaTarefa = document.getElementById(seletorDia.value)
    novaTarefa.innerHTML += `<p>${campoTarefa.value}</p>`
    
    campoTarefa.value = ""
    }else{
        alert("Nenhuma tarefa inserida.")
    }
}
