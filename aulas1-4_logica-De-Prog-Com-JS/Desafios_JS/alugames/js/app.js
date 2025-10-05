function alterarStatus(id){
    let idJogo = document.querySelector(`#game-${id}`);
    let imagemJogo = idJogo.querySelector('.dashboard__item__img');
    let botaoAD = idJogo.querySelector('.dashboard__item__button');

    if (imagemJogo.classList.contains('dashboard__item__img--rented')) {
        imagemJogo.classList.remove('dashboard__item__img--rented');
        // imagemJogo.classList.add('dashboard__item__button');
        
        botaoAD.classList.remove('dashboard__item__button--return');
        // botaoAD.classList.add('dashboard__item__button');
        botaoAD.textContent = 'Alugar';
    } else {
        imagemJogo.classList.add('dashboard__item__img--rented');
        // imagemJogo.classList.remove('dashboard__item__botton');
        botaoAD.classList.add('dashboard__item__button--return');
        // botaoAD.classList.remove('dashboard__item__button');
        botaoAD.textContent = 'Devolver';
    }
    
}
