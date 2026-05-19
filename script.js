function hl(seletor, classe, duracao = 2500, atraso = 0) {
    const lista = typeof seletor === 'string'
        ? Array.from(document.querySelectorAll(seletor))
        : [seletor];
    lista.forEach((el, i) => {
        if (!el) return;
        setTimeout(() => {
            el.classList.add(classe);
            setTimeout(() => el.classList.remove(classe), duracao);
        }, atraso + i * 200);
    });
}

// função 1 -  get elementebyid()

function selecionarPorId (){
    const elemento = document.getElementById("titulo-filme")

    console.log(elemento);
    console.log(elemento.tagName);
    console.log(elemento.textContent);
    console.log(elemento.id);
    
    hl("#titulo-filme","elemento-selecionado");
    hl("#filme-principal","elemento-selecionado");
}

// função 2 -  get elementebyclassName()
function selecionarPorClasse(){
    const elementos = document.getElementsByClassName("genero-acao");
    console.log("quantidade:",elementos.length);

    for (let i = 0; i < elementos.length; i++) {
        console.log(i,elementos[i].textContent.trim())
        
    }
    
    hl(".genero-acao","highlight-acao",2500);
    hl(".genero-drama","highlight-acao",2500);
}

// função  3 - queryselector()
function selecionarPorQuery(){
    const elemento = document.querySelector(".filme-mini");

    console.log(elemento);
    hl(elemento,"elemento-selecionado");
}

// função  4 - queryselectorAll()
function selecionarTodos(){
    const elementos = document.querySelectorAll(".filme-mini");

    console.log("quantidade:",elementos.length);

    elementos.forEach((el,indice)=>{
        console.log(indice,el.textContent.trim())

    });

    elementos.forEach((el,i)=>hl(el,"elemento-selecionado",2500, i * 300))
}

// função 1 - textcontent
function mudarTexto(){
    const titulo = document.getElementById("titulo-destaque")

    titulo.textContent ="lobo branco"
    console.log("novo texto :",titulo.textContent);

    titulo.classList.add("texto-animado");
    setTimeout(()=>titulo.classList.remove("texto-animado"),1500);
    hl("#titulo-destaque","elemento-selecionado",2000)
    
}
 
//função 2 - createElement
function adicionarBadge(){
    const badge =document.createElement("span");

    badge.className = "badge";

    badge.textContent = "⭐ em alta";

    const container = document.getElementById("badge-container");

    container.innerHTML = "";

    container.appendChild(badge)

    console.log("badge criado:",badge)

    hl("#badge-container","elemento-selecionado",2000);

}

 function mudarPoster(){
    const poster =document.getElementById("poster-destaque");

    const titulo = document.getElementById("titulo-destaque");

     const opcoes = [

        {
            url: 'https://image.tmdb.org/t/p/w500/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg',
            nome: 'The Last of Us'
        },

        {
            url: 'https://image.tmdb.org/t/p/w500/qZtAf4Z1lazGQoYVXiHOrvLr5lI.jpg',
            nome: 'Wednesday'
        },

        {
            url: 'https://image.tmdb.org/t/p/w500/ztkUQFLlC19CCMYHW9o1zWhJRNq.jpg',
            nome: 'Breaking Bad'
        },

        {
            url: 'https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg',
            nome: 'Round 6'
        },

        {
            url: 'https://image.tmdb.org/t/p/w500/twfKp60THrcOIep9sjHODOOfO8d.jpg',
            nome: 'Stranger Things'
        },
    ];

    const sorteado = opcoes[Math.floor(Math.random()* opcoes.length)];

    poster.src = sorteado.url;

    poster.alt = sorteado.nome;

    titulo.textContent =sorteado.nome;

    console.log("poster trocado para :",sorteado.nome);

    poster.style.opacity = "0";
    poster.style.transition = "opacity  0.3s";

    setTimeout(()=>{
        poster.style.opacity =  "1"

        poster.classList.add("poster-fade-in")

        setTimeout(()=>{

            poster.classList.remove("poster-fade-in")

        },600)
    },300)
 }
 function adicionarDestaque(){
    const card = document.getElementById("filme-destaque");

    card.classList.add("destaque");

    console.log("classes atuais:",card.className);

    setTimeout(()=>{
        card.classList.remove("destaque");

    },600)
 }
 function lerInput(){
    const input =document.getElementById("input-busca")

    console.log(input)

    const texto =input.value.trim();

    if (texto === "") {
        alert("digite algo no campo primeiro !");
        return;
    }

    const titulo =  document.getElementById("titulo-destaque");

    titulo.textContent = texto ;

    console.log("valor lido :", texto);

    titulo.classList.add("texto-animado")

    setTimeout(()=>{
        titulo.classList.remove("texto-animado")

    },1500)
 }
function resetarDemo2 (){

    document.getElementById("titulo-destaque").textContent ="the witcher";

    document.getElementById("poster-destaque").src ="https://image.tmdb.org/t/p/w500/7vjaCdMw15FEbXyLQTVa04URsPm.jpg"

    document.getElementById("poster-destaque").alt = "the witcher";

    document.getElementById("poster-destaque").style.opacity = "1";

    document.getElementById("badge-container").innerHTML = "" ;

    document.getElementById("input-busca").value = "";

    document.getElementById("filme-destaque").classList.remove("destaque");

}

function adicionarFilme (){

    const input = document.getElementById("input-filme");

    const nomeFilme = input.value.trim();

    if (nomeFilme === "") {
        alert("digite o nome do filme !")
        return;
    }

    const li = document.createElement("li");

    const span = document.createElement("span");

    span.textContent = "🎬"+ nomeFilme ;

    const btnRemover = document.createElement("button");

    btnRemover.textContent = " 🚮 remover"

    btnRemover.onclick = function(){
        this.parentElement.remove();

    }
    li.appendChild(span);

    li.appendChild(btnRemover);

    const lista =document.getElementById("minha-lista");

    lista.appendChild(li);

    input.value = "";

    input.focus();

    console.log("adicioando:", nomeFilme , "total",lista.children.length);

    li.classList.add("item-novo");
}

document.addEventListener("DOMContentLoaded",function (){

    const cardFavorito = document.getElementById("card-favorito");
    const statusFavorito = document.getElementById("status-favorito")

    let favoritado = false

    cardFavorito.addEventListener("click",function(){
        favoritado = !favoritado;

         if (favoritado ) {

            statusFavorito.textContent = "💖 favoritado!";

            statusFavorito.style.color ="#e50914";

            cardFavorito.style.borderColor = "#e50914";

            cardFavorito.style.boxShadow = " 0 0 20px rgba(229,9,20,0.5)";


         } else {
            statusFavorito.textContent = " 🤍 clique para favoritar";

            statusFavorito.style.color= "#8b949e";

            cardFavorito.style.borderColor = "#2a2a2a";

            cardFavorito.style.boxShadow = "none";

         }
         console.log("favoritado ",favoritado)
    });

    const cardDetalhes = document.getElementById("card-detalhes");
    const statusDetalhes = document.getElementById("status-detalhes");

    cardDetalhes.addEventListener("dblclick",function (){

        statusDetalhes.textContent = " ⏳carregando ..."

        statusDetalhes.style.color = "#ffd700"

        setTimeout(function () {
            statusDetalhes.textContent = "Detalhes carregando !"

            statusDetalhes.style.color = "#3dhoverb950"


        },1000);

        console.log("double click");

    });

    const cardHover =  document.getElementById("card-hover");
    const statusHover =  document.getElementById("status-hover");

    cardHover.addEventListener("mouseover",function (){

        statusHover.textContent = " mouse esta aqui !! ";
        statusHover.style.color = "#e50914";
        cardHover.style.backgroundcolor = "#2a2a2a";


        console.log("mouse aqui ! ");
        
    });

    cardHover.addEventListener("mouseout",function(){

        statusHover.textContent = "aguardando ..."
        statusHover.style.color = "#4ade80";
        cardHover.style.backgroundcolor = "#1a1a1a";

        console.log("mouse saiu ");

    });

    const  inputTempoReal = document.getElementById("input-busca-tempo-real");

    const contadorDitit = document.getElementById("contador-digitacao");

    inputTempoReal.addEventListener("input",function (){

        const texto = this.value;

        const quantidade = texto.length;

        contadorDitit.textContent = quantidade > 0 ? `voce digitou:${quantidade}caractere(s) - "${texto}"`:"voce digitou 0 caracteres";

        console.log("digitando :",texto)
    });

    const inputFilme =document.getElementById("input-filme");
    if(inputFilme){

        inputFilme.addEventListener("kaydown",function(event){

            if (event.kay === "Enter") {
                adicionarFilme();
                
            }

        });
    }

    inicializarGaleria();

    const inputFiltro = document.getElementById("input-filtro");

        if (inputFiltro) {

            inputFiltro.addEventListener("input",function (){

                filtraFilmes(this.value);
            });
 
        }
    
});

const todosFilmes = [
    { nome: 'Stranger Things',      tipo: 'Série',  img: 'https://image.tmdb.org/t/p/w500/twfKp60THrcOIep9sjHODOOfO8d.jpg' },
    { nome: 'Breaking Bad',         tipo: 'Série',  img: 'https://image.tmdb.org/t/p/w500/ztkUQFLlC19CCMYHW9o1zWhJRNq.jpg' },
    { nome: 'The Witcher',          tipo: 'Série',  img: 'https://image.tmdb.org/t/p/w500/7vjaCdMw15FEbXyLQTVa04URsPm.jpg' },
    { nome: 'La Casa de Papel',     tipo: 'Série',  img: 'https://image.tmdb.org/t/p/w500/MoEKaPFHABtA1xKoOteirGaHl1.jpg' },
    { nome: 'Round 6',              tipo: 'Série',  img: 'https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg' },
    { nome: 'Peaky Blinders',       tipo: 'Série',  img: 'https://image.tmdb.org/t/p/w500/i0uajcHH9yogXMfDHpOXexIukG9.jpg' },
    { nome: 'Wednesday',            tipo: 'Série',  img: 'https://image.tmdb.org/t/p/w500/qZtAf4Z1lazGQoYVXiHOrvLr5lI.jpg' },
    { nome: 'The Last of Us',       tipo: 'Série',  img: 'https://image.tmdb.org/t/p/w500/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg' },
    { nome: 'Oppenheimer',          tipo: 'Filme',  img: 'https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg' },
    { nome: 'Barbie',               tipo: 'Filme',  img: 'https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg' },
    { nome: 'Duna',                 tipo: 'Filme',  img: 'https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg' },
    { nome: 'Coringa',              tipo: 'Filme',  img: 'https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg' },
    { nome: 'A Origem',             tipo: 'Filme',  img: 'https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg' },
    { nome: 'Interestelar',         tipo: 'Filme',  img: 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg' },
    { nome: 'Parasita',             tipo: 'Filme',  img: 'https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg' },
    { nome: 'Vingadores: Ultimato', tipo: 'Filme',  img: 'https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg' },
];

function inicializarGaleria (){
    const galeria = document.getElementById("galeria-filmes");

    if (!galeria) return ;

    todosFilmes.forEach(function(filme){
        const card = document.createElement("div");
        card.classList = "card-galeria";

    })
        
    
}