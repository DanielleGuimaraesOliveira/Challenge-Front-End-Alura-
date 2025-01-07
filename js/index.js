function exibeMenu(){
    const NAV_DROPDOWN = document.getElementById("nav-dropdown");

    NAV_DROPDOWN.innerHTML = `<li role="menuitem" class="nav-link-dropdown border-bottom">
    <a href="index.html">Home</a>
</li>
<li role="menuitem" class="nav-link-dropdown border-bottom">
    <a href="">Nossas Lojas</a>
</li>
<li role="menuitem" class="nav-link-dropdown border-bottom">
    <a href="" >Novidades</a>
</li>
<li role="menuitem" class="nav-link-dropdown">
    <a href="" >Promoções</a>
</li>`

}


window.addEventListener("load", ()=>{
    const BTN_NAVEGACAO_TOGGLE = document.getElementById("botao-menu-dropdown");
    const DIV_NAVEGACAO_MENU = document.getElementById("menu-dropdown");
    
    BTN_NAVEGACAO_TOGGLE.addEventListener ('click', ()=>{
        atualizaEstadoBotaoToggle();

    })

    function atualizaEstadoBotaoToggle(){
        let estaExpandido = BTN_NAVEGACAO_TOGGLE.getAttribute('aria-expanded') === 'true';
        const IMG_BOTAO_MENU_TOGGLE = document.getElementById("icone-menu-dropdown");
        
            BTN_NAVEGACAO_TOGGLE.ariaExpanded = !estaExpandido;
            DIV_NAVEGACAO_MENU.classList.toggle('ativo', !estaExpandido);
            IMG_BOTAO_MENU_TOGGLE.src = estaExpandido ? "assets/Mobile/Ícones/icone-menu-verde.png": "assets/Mobile/Ícones/icone-sair-menu.png"
            exibeMenu();

    }   
})