var app = new Vue({
  el: '#app',
  data: {
    titulo: "Livros de suspense e fantasia ",
    usuarioDado: "",
    usuarioDadoConvertido: "",
    textoBotao: "Buscar",
    listaFantasia: false,
    listaSuspense: false,
    mostrarBotao: false,
    nomeObra: "Título:",
    autorObra: "Autor(a):",
    listaLivrosFantasia: 
    [
      {"nome": "O aprendiz de assassino", "autor": "Robin Hobb", url: "https://m.media-amazon.com/images/I/81v7bQqoSEL.jpg"},
      {"nome": "Os garotos corvos", "autor": "Maggie Stiefvater", url: "https://cdn.record.com.br/wp-content/uploads/2019/07/25183756/9788576862543-600x887.jpg"}
    ],

    listaLivrosSuspense: 
    [
      {"nome": "O vilarejo", "autor": "Raphael Montes", url: "https://m.media-amazon.com/images/I/512KctaS-3L.jpg"},
      {"nome": "O quarto dia", "autor": "Sarah Lotz", url: "https://m.media-amazon.com/images/I/41kY91e1aJL._AC_SY780_.jpg"}
    ],
    
  },
  methods:{

    exibirLista: function(){
      this.converterDadoUsuario();
      this.limparLista();
      this.exibirBotao();

      if(this.usuarioDadoConvertido == "suspense"){
        this.listaSuspenseTrue();
      }else if(this.usuarioDadoConvertido == "fantasia"){
        this.listaFantasiaTrue();
      }else{
        alert("Gêneros aceitos para pesquisa: suspense ou fantasia.");
      }
    },

    converterDadoUsuario: function(){
      this.usuarioDadoConvertido = this.usuarioDado.toLowerCase();
    },

    exibirBotao: function(){
      if(this.usuarioDado != ""){
         this.botaoAparecerTrue(); 
      }

      if(this.usuarioDado == ""){
        this.botaoSumirFalse();
      }
    },

    botaoAparecerTrue: function(){
      this.mostrarBotao = true;
    },

    botaoSumirFalse: function(){
      this.mostrarBotao = false;
    },

    listaSuspenseTrue: function(){
      this.listaSuspense = true;
    },

    listaFantasiaTrue: function(){
      this.listaFantasia = true;
    },

    limparLista: function(){
      if(this.listaSuspense == true){
        this.ocultarListaSuspenseExistente();
      }else if(this.listaFantasia == true){
        this.ocultarListaFantasiaExistente();
      }
    },

    ocultarListaSuspenseExistente: function(){
      this.listaSuspense = false;
    },

    ocultarListaFantasiaExistente: function(){
      this.listaFantasia = false;
    },

    limparConteudo: function(){
      if(this.usuarioDado != ""){
        this.apagarDadoUsuario();
      }

      if(this.listaSuspense == true){
        this.apagarListaSuspense();
      }else if(this.listaFantasia == true){
        this.apagarListaFantasia();
      }
    },

    apagarDadoUsuario: function(){
      this.usuarioDado = "";
    },

    apagarListaSuspense: function(){
      this.listaSuspense = false;
    },

    apagarListaFantasia: function(){
      this.listaFantasia = false;
    },
    
    
  },
  mounted: function () {
		
	},
  template :
  `
  <div>

    <div id="principal">
      <h1 id="title">{{ titulo }}</h1>

      <div class="container">
        <label for="user-txt" class="txt-label">Pesquise com os termos "fantasia" ou "suspense" para ver o catálogo correspondente:</label>
      
        <input type="text" id="user-txt" v-model="usuarioDado">

        <div class="botoes">
          <button @click="exibirLista()" class="botao-default">{{ textoBotao }}</button>

          <button @click="limparConteudo(), exibirBotao()" class="botao-default" v-if="mostrarBotao == true">Limpar</button>
        </div>
      </div>

      <ul v-if="listaFantasia == true" class="lista-livros">

        <li v-for="livro in listaLivrosFantasia" class="lista-livros-item">
          <img class="img-livro" :src="livro.url" alt="">
          <p> {{ nomeObra }} {{ livro.nome }}, {{ autorObra }} {{ livro.autor }} </p>
        </li> 

      </ul>

      <ul v-if="listaSuspense == true" class="lista-livros">

        <li v-for="livro in listaLivrosSuspense" class="lista-livros-item">
          <img class="img-livro" :src="livro.url" alt="">
          <p> {{ nomeObra }} {{ livro.nome }}, {{ autorObra }} {{ livro.autor }} </p>
        </li> 

      </ul>

    </div>

  </div>
  `
});