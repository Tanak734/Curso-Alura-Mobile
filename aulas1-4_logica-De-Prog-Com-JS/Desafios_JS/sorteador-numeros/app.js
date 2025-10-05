function randNum (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function changStButton (){
    let cssDesativado = document.querySelector('#btn-reiniciar');
    if (cssDesativado.classList.contains("container__botao-desabilitado")){
        cssDesativado.classList.remove('container__botao-desabilitado');
        cssDesativado.classList.add("container__botao")
    } else {
        cssDesativado.classList.remove("container__botao")
        cssDesativado.classList.add("container__botao-desabilitado")
    }
}

function sortear(){
    let quantidade = document.querySelector("#quantidade").value;
    let de = document.querySelector("#de").value;
    let ate = document.querySelector("#ate").value;
    if ((quantidade && de && ate) == (null || 0)){
        alert('digite valores maiores que 0 nos campos');
    } else if (ate < de) {
        alert('O numero de inicio deve ser menor que o final')
    } else {
        let numsSorteados = [];
        alert(`quantidade de numeros: ${quantidade}`);
        alert(`de: ${de}`);
        alert(`ate: ${ate}`);
        for (let i = 0; i < quantidade; i++){
            let numero = randNum(de, ate);

            while(numsSorteados.includes(numero)){
                numero = randNum(de, ate);
            }

            numsSorteados.push(numero);
        }

        let mudarQuantidade = document.querySelector('#resultado');
        mudarQuantidade.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${numsSorteados}</label>`;
        changStButton();
    }
    
}

function reiniciar(){
    let quantidade = document.querySelector("#quantidade");
    quantidade.innerHTML = 1;
    let de = document.querySelector("#de");
    de.innerHTML = 1;
    let ate = document.querySelector("#ate");
    ate.innerHTML = 1;

}