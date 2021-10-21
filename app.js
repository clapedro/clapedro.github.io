function MostrarCampoPesquisar(){
    let campo = document.querySelector("#campo")
    if(campo.style.display == "inline"){
        campo.style.display = "none"
    }else{
        campo.style.display = "inline"
    }
    
}

// array

// let projetos = ['Calculadora','Conversor','Mentalista','Gutoflix']
// let projetoDescricao = ['Descrição do projeto calculadora','Descrição do projeto do conversar','Descrição do projeto mentalista','Descrição do projeto Gutoflix']

//objetos + array

projeto1 = {

    titulo: 'Calculadora',
    descricao: 'Descrição do projeto da calculadora',
    foto: 'calculadora.png'

}

projeto2 = {
    titulo: 'Conversor',
    descricao: 'Descricao do conversor',
    foto: 'conversor.png'
}

projeto3 = {
    titulo: 'Mentalista',
    descricao: 'Descricao do mentalista',
    foto: 'mentalista.png'
}

projeto4 = {
    titulo: 'Netflix',
    descricao: 'Descricao do netflix',
    foto: 'netflix.png'
}

let projetos = [projeto1 , projeto2, projeto3, projeto4]

    


let projetoAtual = 0

function ProximoProjeto(){

    if(projetoAtual < 3){

        projetoAtual++


    }

    else{

        projetoAtual = 0
       


    }
        
        titulo = document.querySelector(".titulo-projeto")
        titulo.innerHTML = projetos[projetoAtual].titulo

        descricao = document.querySelector(".texto-corpo")
        descricao.innerHTML = projetos[projetoAtual].descricao

        imagem = document.querySelector(".foto-perfil")
        imagem.src= "images/" + projetos[projetoAtual].foto


}

