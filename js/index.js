function exibeMenu(){}

window.addEventListener("load", ()=>{
    const BTN_NAVEGACAO_TOGGLE = document.getElementById("botao-menu-dropdown");
    const DIV_NAVEGACAO_MENU = document.getElementById("menu-dropdown");
    
    BTN_NAVEGACAO_TOGGLE.addEventListener ('click', ()=>{
        atualizaEstadoBotaoToggle();
        exibeMenu();
    })

    function atualizaEstadoBotaoToggle(){
        const estaExpandido = BTN_NAVEGACAO_TOGGLE.getAttribute('aria-expanded') === 'true';

       
            BTN_NAVEGACAO_TOGGLE.ariaExpanded = !estaExpandido;
            DIV_NAVEGACAO_MENU.classList.toggle('ativo', !estaExpandido);

    }
})