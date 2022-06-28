const selectVagas = document.querySelector("#vaga");
/* Ajax
Tecnico de comunicação e transmissão de dados */

/* Etapa 1)
Acessando a URL (Endpoint) da API (Servidor de dados) */
fetch("http://localhost:3000/vagas")
/* -----------------------------*/
/* Etapa 2)
...E então (then) capture a resposta da API no formato json*/
.then(resposta => resposta.json())
/*----------------------------------------- */
/* Etapa 3)
... E então, capture os dados da resposta
e faça o que quiser com eles (console,colocar no HTML etc...) */
.then( dados =>{
    console.log(dados);

    // Definindo um Option
    selectVagas.innerHTML = "<option></option>";

    for(let vaga of dados ){
        let opcao = document.createElement("option");
        opcao.textContent = vaga.titulo ;
        opcao.value = vaga.id;
        selectVagas.appendChild(opcao); 
    }
    // final do fetch/then/them

});