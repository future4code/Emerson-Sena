const postagem = {
    titulo: "",
    autor: "",
    conteudo: ""
}
const titulo = document.getElementById("titulo-post")
const autor = document.getElementById("autor-post")
const conteudo = document.getElementById("conteudo-post")

const postagens = []


function criarPost(){
    postagem.titulo = titulo.value
    postagem.autor = autor.value
    postagem.conteudo = conteudo.value

    postagens.push(postagem)
    console.log(postagens)

    titulo.value = ""
    autor.value = ""
    conteudo.value = ""
}