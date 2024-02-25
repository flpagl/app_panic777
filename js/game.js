
function notifica(msg){
    $.notify({
    	title: '',
    	message: msg,
        icon: 'glyphicon glyphicon-ok',
    },{
    	// settings
    	element: 'body',
    	//position: null,
    	type: "success",
    	allow_dismiss: true,
    	newest_on_top: false,
    	showProgressbar: false,
    	placement: {
    		from: "top",
    		align: "right"
    	},
    	offset: {
    	   x: 10,
    	   y: 30
    	},
    	spacing: 10,
    	z_index: 1031,
    	delay: 1000,
    	timer: 800,
    	mouse_over: null,
    	animate: {
    		enter: 'animated bounce',
	        exit: 'animated bounce'
    	},
    	onShow: null,
    	onShown: null,
    	onClose: null,
    	onClosed: null,
    	icon_type: 'class',
    });
}
function alertaPendente(jogo){
    if(jogo == 'slots'){
        var texto = 'Para desbloquear o APP HACKER, faça seu primeiro deposito de R$20,00 na Plataforma MMABET <a href="https://go.aff.arvore.club/gerador_app?afp1=gerador_app" target="_blank">Clique aqui para depositar</a> Se você ja efetuou seu depósito aguarde a pagina irá atualizar mantenha ela aberta.';
    } else if(jogo == 'aviator'){
        var texto = 'Os jogos são liberados após seu primeiro depósito de R$50,00 na <a href="https://go.aff.arvore.club/gerador_app?afp1=gerador_app" target="_blank">MMABET</a>';
    } else if(jogo == 'roleta'){
        var texto = 'Os jogos são liberados após seu primeiro depósito de R$50,00 na <a href="https://go.aff.arvore.club/gerador_app?afp1=gerador_app" target="_blank">MMABET</a>';
    }
    Swal.fire({ icon: 'error', title: 'Oopss!', html: texto });
}
function alertaPendente2(jogo){
    if(jogo == 'app'){
        var texto = ' Abra o aplicativo no Safari<br>Clique no icone de "compartilhamento" no canto inferior do smartphone <br>Clique em "Adicionar á tela de inicio" ou "Add to Home Screen"<br>Clique em "Adicionar" no canto superior direito<br>PRONTINHO, use e abuse do nosso APP';
    } else if(jogo == 'aviator'){
        var texto = 'Os jogos são liberados após seu primeiro depósito de R$50,00 na <a href="https://go.aff.arvore.club/gerador_app?afp1=gerador_app" target="_blank">MMABET</a>';
    } else if(jogo == 'roleta'){
        var texto = 'Os jogos são liberados após seu primeiro depósito de R$50,00 na <a href="https://go.aff.arvore.club/gerador_app?afp1=gerador_app" target="_blank">MMABET</a>';
    }
    Swal.fire({ icon: '' , title: '', html: texto });
}