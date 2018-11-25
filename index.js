var titulo = d3.select("h1")
                .style("color", "#2F4F4F")
                .text("Acidentes de trânsito em Belo Horizonte")        

var dataAnos = ["Selecione o ano aqui",2011, 2012, 2013, 2014, 2015]; 

var seleciona = d3.select('body')
    //.append('center')
    .append('select')
    .attr('class', 'select')
    .on('change', onchange)

var options = seleciona
    .selectAll('option')
    .data(dataAnos).enter()
    .append('option')
        .text(function (d) {return d;});

function onchange(){
    selectValue = d3.select('select').property('value')
    //var ano = selectValue;
    d3.select("svg").remove();
    if(selectValue == 2011) {
        rodar("dados/2011.csv");
    }else if(selectValue == 2012){
        rodar("dados/2012.csv");
    }else if(selectValue == 2013){ 
        rodar("dados/2013.csv");
    }else if(selectValue == 2014){
        rodar("dados/2014.csv");
    }else if(selectValue == 2015){
        rodar("dados/databh.csv");
    }else {
        carroimage();
    }
};

function carroimage(){

    var width = "2000";
    var height = "1000";
    var canvas = d3.select("body")
                    .append("svg")
                    .attr("width", width)
                    .attr("height", height)

    // Adicionando a imagem SVG
    var mapa = canvas.append("image")
                        //.attr("x", "500")
                        .attr("y", "150")
                        .attr("dx", "50px")
                        .attr("dy", ".30em")
                        .attr("xlink:href", "preocupacao-carro.jpg")


};
 
carroimage();

function rodar(arquivo_dados) {
    d3.csv(arquivo_dados).then(function(data){  // Abre o arquivo
        
        // Quantidade de acidente por regiao:
        var total0 = 0; // OESTE
        var total1 = 0; // VENDA NOVA
        var total2 = 0; // PAMPULHA
        var total3 = 0; // CENTRO-SUL
        var total4 = 0; // LESTE
        var total5 = 0; // BARREIRO
        var total6 = 0; // NOROESTE
        var total7 = 0; // NORDESTE
        var total8 = 0; // NORTE
        
        // Tipos de acidente por regiao:
        var oeste0 = 0; // CHOQUE MECANICO COM VITIMA
        var oeste1 = 0; // ABALROAMENTO COM VITIMA
        var oeste2 = 0; // ATROPELAMENTO DE PESSOA SEM VITIMA FATAL
        var oeste3 = 0; // QUEDA DE PESSOA DE VEICULO
        var oeste4 = 0; // COLISAO DE VEICULOS COM VITIMA
        var oeste5 = 0; // CAPOTAMENTO/TOMBAMENTO COM VITIMA
        var oeste6 = 0; // OUTROS COM VITIMA

        var vendanova0 = 0; // CHOQUE MECANICO COM VITIMA
        var vendanova1 = 0; // ABALROAMENTO COM VITIMA
        var vendanova2 = 0; // ATROPELAMENTO DE PESSOA SEM VITIMA FATAL
        var vendanova3 = 0; // QUEDA DE PESSOA DE VEICULO
        var vendanova4 = 0; // COLISAO DE VEICULOS COM VITIMA
        var vendanova5 = 0; // CAPOTAMENTO/TOMBAMENTO COM VITIMA
        var vendanova6 = 0; // OUTROS COM VITIMA

        var pampulha0 = 0; // CHOQUE MECANICO COM VITIMA
        var pampulha1 = 0; // ABALROAMENTO COM VITIMA
        var pampulha2 = 0; // ATROPELAMENTO DE PESSOA SEM VITIMA FATAL
        var pampulha3 = 0; // QUEDA DE PESSOA DE VEICULO
        var pampulha4 = 0; // COLISAO DE VEICULOS COM VITIMA
        var pampulha5 = 0; // CAPOTAMENTO/TOMBAMENTO COM VITIMA
        var pampulha6 = 0; // OUTROS COM VITIMA

        var centrosul0 = 0; // CHOQUE MECANICO COM VITIMA
        var centrosul1 = 0; // ABALROAMENTO COM VITIMA
        var centrosul2 = 0; // ATROPELAMENTO DE PESSOA SEM VITIMA FATAL
        var centrosul3 = 0; // QUEDA DE PESSOA DE VEICULO
        var centrosul4 = 0; // COLISAO DE VEICULOS COM VITIMA
        var centrosul5 = 0; // CAPOTAMENTO/TOMBAMENTO COM VITIMA
        var centrosul6 = 0; // OUTROS COM VITIMA

        var leste0 = 0; // CHOQUE MECANICO COM VITIMA
        var leste1 = 0; // ABALROAMENTO COM VITIMA
        var leste2 = 0; // ATROPELAMENTO DE PESSOA SEM VITIMA FATAL
        var leste3 = 0; // QUEDA DE PESSOA DE VEICULO
        var leste4 = 0; // COLISAO DE VEICULOS COM VITIMA
        var leste5 = 0; // CAPOTAMENTO/TOMBAMENTO COM VITIMA
        var leste6 = 0; // OUTROS COM VITIMA

        var barreiro0 = 0; // CHOQUE MECANICO COM VITIMA
        var barreiro1 = 0; // ABALROAMENTO COM VITIMA
        var barreiro2 = 0; // ATROPELAMENTO DE PESSOA SEM VITIMA FATAL
        var barreiro3 = 0; // QUEDA DE PESSOA DE VEICULO
        var barreiro4 = 0; // COLISAO DE VEICULOS COM VITIMA
        var barreiro5 = 0; // CAPOTAMENTO/TOMBAMENTO COM VITIMA
        var barreiro6 = 0; // OUTROS COM VITIMA

        var noroeste0 = 0; // CHOQUE MECANICO COM VITIMA
        var noroeste1 = 0; // ABALROAMENTO COM VITIMA
        var noroeste2 = 0; // ATROPELAMENTO DE PESSOA SEM VITIMA FATAL
        var noroeste3 = 0; // QUEDA DE PESSOA DE VEICULO
        var noroeste4 = 0; // COLISAO DE VEICULOS COM VITIMA
        var noroeste5 = 0; // CAPOTAMENTO/TOMBAMENTO COM VITIMA
        var noroeste6 = 0; // OUTROS COM VITIMA

        var nordeste0 = 0; // CHOQUE MECANICO COM VITIMA
        var nordeste1 = 0; // ABALROAMENTO COM VITIMA
        var nordeste2 = 0; // ATROPELAMENTO DE PESSOA SEM VITIMA FATAL
        var nordeste3 = 0; // QUEDA DE PESSOA DE VEICULO
        var nordeste4 = 0; // COLISAO DE VEICULOS COM VITIMA
        var nordeste5 = 0; // CAPOTAMENTO/TOMBAMENTO COM VITIMA
        var nordeste6 = 0; // OUTROS COM VITIMA

        var norte0 = 0; // CHOQUE MECANICO COM VITIMA
        var norte1 = 0; // ABALROAMENTO COM VITIMA
        var norte2 = 0; // ATROPELAMENTO DE PESSOA SEM VITIMA FATAL
        var norte3 = 0; // QUEDA DE PESSOA DE VEICULO
        var norte4 = 0; // COLISAO DE VEICULOS COM VITIMA
        var norte5 = 0; // CAPOTAMENTO/TOMBAMENTO COM VITIMA
        var norte6 = 0; // OUTROS COM VITIMA


        // Conta quantos tipos de acidente houve em cada regiao
        for(var counter = 0; counter < data.length; counter++) { 
            if(data[counter].desc_regional == "OESTE" && data[counter].desc_tipo_acidente == "CHOQUEMECANICOCOMVITIMA"){                   // OESTE
                oeste0 += 1;
            } else if(data[counter].desc_regional == "OESTE" && data[counter].desc_tipo_acidente == "ABALROAMENTOCOMVITIMA") {
                oeste1 += 1;
            } else if(data[counter].desc_regional == "OESTE" && data[counter].desc_tipo_acidente == "ATROPELAMENTODEPESSOASEMVITIMAFATAL") {
                oeste2 +=1;
            } else if(data[counter].desc_regional == "OESTE" && data[counter].desc_tipo_acidente == "QUEDADEPESSOADEVEICULO") {
                oeste3 += 1;
            } else if(data[counter].desc_regional == "OESTE" && data[counter].desc_tipo_acidente == "COLISAODEVEICULOSCOMVITIMA") {
                oeste4 += 1;
            } else if(data[counter].desc_regional == "OESTE" && data[counter].desc_tipo_acidente == "CAPOTAMENTO/TOMBAMENTOCOMVITIMA") {
                oeste5 += 1;
            } else if(data[counter].desc_regional == "OESTE" && data[counter].desc_tipo_acidente == "OUTROSCOMVITIMA") {
                oeste6 += 1;
            } else if(data[counter].desc_regional == "VENDANOVA" && data[counter].desc_tipo_acidente == "CHOQUEMECANICOCOMVITIMA"){        // VENDA NOVA
                vendanova0 += 1;
            } else if(data[counter].desc_regional == "VENDANOVA" && data[counter].desc_tipo_acidente == "ABALROAMENTOCOMVITIMA") {
                vendanova1 += 1;
            } else if(data[counter].desc_regional == "VENDANOVA" && data[counter].desc_tipo_acidente == "ATROPELAMENTODEPESSOASEMVITIMAFATAL") {
                vendanova2 +=1;
            } else if(data[counter].desc_regional == "VENDANOVA" && data[counter].desc_tipo_acidente == "QUEDADEPESSOADEVEICULO") {
                vendanova3 += 1;
            } else if(data[counter].desc_regional == "VENDANOVA" && data[counter].desc_tipo_acidente == "COLISAODEVEICULOSCOMVITIMA") {
                vendanova4 += 1;
            } else if(data[counter].desc_regional == "VENDANOVA" && data[counter].desc_tipo_acidente == "CAPOTAMENTO/TOMBAMENTOCOMVITIMA") {
                vendanova5 += 1;
            } else if(data[counter].desc_regional == "VENDANOVA" && data[counter].desc_tipo_acidente == "OUTROSCOMVITIMA") {
                vendanova6 += 1;
            } else if(data[counter].desc_regional == "PAMPULHA" && data[counter].desc_tipo_acidente == "CHOQUEMECANICOCOMVITIMA"){         // PAMPULHA
                pampulha0 += 1;
            } else if(data[counter].desc_regional == "PAMPULHA" && data[counter].desc_tipo_acidente == "ABALROAMENTOCOMVITIMA") {
                pampulha1 += 1;
            } else if(data[counter].desc_regional == "PAMPULHA" && data[counter].desc_tipo_acidente == "ATROPELAMENTODEPESSOASEMVITIMAFATAL") {
                pampulha2 +=1;
            } else if(data[counter].desc_regional == "PAMPULHA" && data[counter].desc_tipo_acidente == "QUEDADEPESSOADEVEICULO") {
                pampulha3 += 1;
            } else if(data[counter].desc_regional == "PAMPULHA" && data[counter].desc_tipo_acidente == "COLISAODEVEICULOSCOMVITIMA") {
                pampulha4 += 1;
            } else if(data[counter].desc_regional == "PAMPULHA" && data[counter].desc_tipo_acidente == "CAPOTAMENTO/TOMBAMENTOCOMVITIMA") {
                pampulha5 += 1;
            } else if(data[counter].desc_regional == "PAMPULHA" && data[counter].desc_tipo_acidente == "OUTROSCOMVITIMA") {
                pampulha6 += 1;
            } else if(data[counter].desc_regional == "CENTRO-SUL" && data[counter].desc_tipo_acidente == "CHOQUEMECANICOCOMVITIMA"){        // CENTRO-SUL
                centrosul0 += 1;
            } else if(data[counter].desc_regional == "CENTRO-SUL" && data[counter].desc_tipo_acidente == "ABALROAMENTOCOMVITIMA") {
                centrosul1 += 1;
            } else if(data[counter].desc_regional == "CENTRO-SUL" && data[counter].desc_tipo_acidente == "ATROPELAMENTODEPESSOASEMVITIMAFATAL") {
                centrosul2 +=1;
            } else if(data[counter].desc_regional == "CENTRO-SUL" && data[counter].desc_tipo_acidente == "QUEDADEPESSOADEVEICULO") {
                centrosul3 += 1;
            } else if(data[counter].desc_regional == "CENTRO-SUL" && data[counter].desc_tipo_acidente == "COLISAODEVEICULOSCOMVITIMA") {
                centrosul4 += 1;
            } else if(data[counter].desc_regional == "CENTRO-SUL" && data[counter].desc_tipo_acidente == "CAPOTAMENTO/TOMBAMENTOCOMVITIMA") {
                centrosul5 += 1;
            } else if(data[counter].desc_regional == "CENTRO-SUL" && data[counter].desc_tipo_acidente == "OUTROSCOMVITIMA") {
                centrosul6 += 1;
            } else if(data[counter].desc_regional == "LESTE" && data[counter].desc_tipo_acidente == "CHOQUEMECANICOCOMVITIMA"){             // LESTE
                leste0 += 1;
            } else if(data[counter].desc_regional == "LESTE" && data[counter].desc_tipo_acidente == "ABALROAMENTOCOMVITIMA") {
                leste1 += 1;
            } else if(data[counter].desc_regional == "LESTE" && data[counter].desc_tipo_acidente == "ATROPELAMENTODEPESSOASEMVITIMAFATAL") {
                leste2 +=1;
            } else if(data[counter].desc_regional == "LESTE" && data[counter].desc_tipo_acidente == "QUEDADEPESSOADEVEICULO") {
                leste3 += 1;
            } else if(data[counter].desc_regional == "LESTE" && data[counter].desc_tipo_acidente == "COLISAODEVEICULOSCOMVITIMA") {
                leste4 += 1;
            } else if(data[counter].desc_regional == "LESTE" && data[counter].desc_tipo_acidente == "CAPOTAMENTO/TOMBAMENTOCOMVITIMA") {
                leste5 += 1;
            } else if(data[counter].desc_regional == "LESTE" && data[counter].desc_tipo_acidente == "OUTROSCOMVITIMA") {
                leste6 += 1;
            } else if(data[counter].desc_regional == "BARREIRO" && data[counter].desc_tipo_acidente == "CHOQUEMECANICOCOMVITIMA"){          // BARREIRO
                barreiro0 += 1;
            } else if(data[counter].desc_regional == "BARREIRO" && data[counter].desc_tipo_acidente == "ABALROAMENTOCOMVITIMA") {
                barreiro1 += 1;
            } else if(data[counter].desc_regional == "BARREIRO" && data[counter].desc_tipo_acidente == "ATROPELAMENTODEPESSOASEMVITIMAFATAL") {
                barreiro2 +=1;
            } else if(data[counter].desc_regional == "BARREIRO" && data[counter].desc_tipo_acidente == "QUEDADEPESSOADEVEICULO") {
                barreiro3 += 1;
            } else if(data[counter].desc_regional == "BARREIRO" && data[counter].desc_tipo_acidente == "COLISAODEVEICULOSCOMVITIMA") {
                barreiro4 += 1;
            } else if(data[counter].desc_regional == "BARREIRO" && data[counter].desc_tipo_acidente == "CAPOTAMENTO/TOMBAMENTOCOMVITIMA") {
                barreiro5 += 1;
            } else if(data[counter].desc_regional == "BARREIRO" && data[counter].desc_tipo_acidente == "OUTROSCOMVITIMA") {
                barreiro6 += 1;
            } else if(data[counter].desc_regional == "NOROESTE" && data[counter].desc_tipo_acidente == "CHOQUEMECANICOCOMVITIMA"){          // NOROESTE
                noroeste0 += 1;
            } else if(data[counter].desc_regional == "NOROESTE" && data[counter].desc_tipo_acidente == "ABALROAMENTOCOMVITIMA") {
                noroeste1 += 1;
            } else if(data[counter].desc_regional == "NOROESTE" && data[counter].desc_tipo_acidente == "ATROPELAMENTODEPESSOASEMVITIMAFATAL") {
                noroeste2 +=1;
            } else if(data[counter].desc_regional == "NOROESTE" && data[counter].desc_tipo_acidente == "QUEDADEPESSOADEVEICULO") {
                noroeste3 += 1;
            } else if(data[counter].desc_regional == "NOROESTE" && data[counter].desc_tipo_acidente == "COLISAODEVEICULOSCOMVITIMA") {
                noroeste4 += 1;
            } else if(data[counter].desc_regional == "NOROESTE" && data[counter].desc_tipo_acidente == "CAPOTAMENTO/TOMBAMENTOCOMVITIMA") {
                noroeste5 += 1;
            } else if(data[counter].desc_regional == "NOROESTE" && data[counter].desc_tipo_acidente == "OUTROSCOMVITIMA") {
                noroeste6 += 1;
            } else if(data[counter].desc_regional == "NORDESTE" && data[counter].desc_tipo_acidente == "CHOQUEMECANICOCOMVITIMA"){          // NORDESTE
                nordeste0 += 1;
            } else if(data[counter].desc_regional == "NORDESTE" && data[counter].desc_tipo_acidente == "ABALROAMENTOCOMVITIMA") {
                nordeste1 += 1;
            } else if(data[counter].desc_regional == "NORDESTE" && data[counter].desc_tipo_acidente == "ATROPELAMENTODEPESSOASEMVITIMAFATAL") {
                nordeste2 += 1;
            } else if(data[counter].desc_regional == "NORDESTE" && data[counter].desc_tipo_acidente == "QUEDADEPESSOADEVEICULO") {
                nordeste3 += 1;
            } else if(data[counter].desc_regional == "NORDESTE" && data[counter].desc_tipo_acidente == "COLISAODEVEICULOSCOMVITIMA") {
                nordeste4 += 1;
            } else if(data[counter].desc_regional == "NORDESTE" && data[counter].desc_tipo_acidente == "CAPOTAMENTO/TOMBAMENTOCOMVITIMA") {
                nordeste5 += 1;
            } else if(data[counter].desc_regional == "NORDESTE" && data[counter].desc_tipo_acidente == "OUTROSCOMVITIMA") {
                nordeste6 += 1;
            } else if(data[counter].desc_regional == "NORTE" && data[counter].desc_tipo_acidente == "CHOQUEMECANICOCOMVITIMA"){              // NORTE
                norte0 += 1;
            } else if(data[counter].desc_regional == "NORTE" && data[counter].desc_tipo_acidente == "ABALROAMENTOCOMVITIMA") {
                norte1 += 1;
            } else if(data[counter].desc_regional == "NORTE" && data[counter].desc_tipo_acidente == "ATROPELAMENTODEPESSOASEMVITIMAFATAL") {
                norte2 +=1;
            } else if(data[counter].desc_regional == "NORTE" && data[counter].desc_tipo_acidente == "QUEDADEPESSOADEVEICULO") {
                norte3 += 1;
            } else if(data[counter].desc_regional == "NORTE" && data[counter].desc_tipo_acidente == "COLISAODEVEICULOSCOMVITIMA") {
                norte4 += 1;
            } else if(data[counter].desc_regional == "NORTE" && data[counter].desc_tipo_acidente == "CAPOTAMENTO/TOMBAMENTOCOMVITIMA") {
                norte5 += 1;
            } else if(data[counter].desc_regional == "NORTE" && data[counter].desc_tipo_acidente == "OUTROSCOMVITIMA") {
                norte6 += 1;
            }
        }
        
        // Somando os tipos de acidente por regiao
        total0 = oeste0 + oeste1 + oeste2 + oeste3 + oeste4 + oeste5 + oeste6;
        total1 = vendanova0 + vendanova1 + vendanova2 + vendanova3 + vendanova4 + vendanova5 + vendanova6;
        total2 = pampulha0 + pampulha1 + pampulha2 + pampulha3 + pampulha4 + pampulha5 + pampulha6;
        total3 = centrosul0 + centrosul1 + centrosul2 + centrosul3 + centrosul4 + centrosul5 + centrosul6;
        total4 = leste0 + leste1 + leste2 + leste3 + leste4 + leste5 + leste6;
        total5 = barreiro0 + barreiro1 + barreiro2 + barreiro3 + barreiro4 + barreiro5 + barreiro6;
        total6 = noroeste0 + noroeste1 + noroeste2 + noroeste3 + nordeste4 + nordeste5 + nordeste6;
        total7 = nordeste0 + nordeste1 + nordeste2 + nordeste3 + nordeste4 + nordeste5 + nordeste6;
        total8 = norte0 + norte1 + norte2 + norte3 + norte4 + norte5 + norte6;
        
        // Vetor das somas que sera utilizado na funcao
        var totaisvec = [total0, total1, total2, total3, total4, total5, total6, total7, total8];    
        
        // Vetor tipos de acidente por regiao
        var oeste = [parseInt(oeste0), parseInt(oeste1), parseInt(oeste2), parseInt(oeste3), parseInt(oeste4), parseInt(oeste5), parseInt(oeste6)];
        var vendanova = [parseInt(vendanova0), parseInt(vendanova1), parseInt(vendanova2), parseInt(vendanova3), parseInt(vendanova4), parseInt(vendanova5), parseInt(vendanova6)];
        var pampulha = [parseInt(pampulha0), parseInt(pampulha1), parseInt(pampulha2), parseInt(pampulha3), parseInt(pampulha4), parseInt(pampulha5), parseInt(pampulha6)];
        var centrosul = [parseInt(centrosul0), parseInt(centrosul1), parseInt(centrosul2), parseInt(centrosul3), parseInt(centrosul4), parseInt(centrosul5), parseInt(centrosul6)];
        var leste = [parseInt(leste0), parseInt(leste1), parseInt(leste2), parseInt(leste3), parseInt(leste4), parseInt(leste5), parseInt(leste6)];
        var barreiro = [parseInt(barreiro0), parseInt(barreiro1), parseInt(barreiro2), parseInt(barreiro3), parseInt(barreiro4), parseInt(barreiro5), parseInt(barreiro6)];
        var noroeste = [parseInt(noroeste0), parseInt(noroeste1), parseInt(noroeste2), parseInt(noroeste3), parseInt(noroeste4), parseInt(noroeste5), parseInt(noroeste6)];
        var nordeste = [parseInt(nordeste0), parseInt(nordeste1), parseInt(nordeste2), parseInt(nordeste3), parseInt(nordeste4), parseInt(nordeste5), parseInt(nordeste6)];
        var norte = [parseInt(norte0), parseInt(norte1), parseInt(norte2), parseInt(norte3), parseInt(norte4), parseInt(norte5), parseInt(norte6)];

        //criando um svg, área na qual o gráfico será feito
        var width = "2000";
        var height = "2000";
        var canvas = d3.select("body")
                        .append("svg")
                        .attr("class", "one")
                        .attr("background-color", "cyan")
                        .attr("margin-left", "auto")
                        .attr("width", width)
                        .attr("height", height);

        // Adicionando a imagem SVG
        var mapa = canvas.append("image")
                            .attr("xlink:href", "bh.svg")
                            .style("opacity", .8)
                            .attr("height","500")
                            .attr("width","600")
                            .attr("x","-120")
                            .attr("y","100")
                            .attr("fill", "blue");
    
        //geralGrafico(totaisvec);
        
        // Nomes das regioes nos mapas:
        var line9 = canvas.append("text")
                            .attr("class", "geral")
                            .attr("x", "80")
                            .attr("y", "650")
                            .attr("fill", "#1C1C1C")
                            .text("Todas as Regiões")
                            .on("mouseenter", function(d) {
                                d3.select(this).attr("fill","#8B7500");
                                deletatudo();
                                deletageral();
                            })
                            .on("mouseout", function() {
                                d3.select(this).attr("fill", "#1C1C1C");
                                geralGrafico(totaisvec);
                            });
        
        
        // Atribuindo os nomes das regioes no mapa:
        var line1 = canvas.append("text")
                            .attr("class", "vendanova")
                            .attr("x", "115")
                            .attr("y", "160")
                            .attr("fill", "#E8E8E8")
                            .text("Venda Nova")
                            .on("mouseenter", function(d) {
                                d3.select(this).attr("fill","#FFD700");
                                deletatudo();
                                deletageral();
                            })
                            .on("mouseout", function() {
                                d3.select(this).attr("fill","#E8E8E8");
                                tiposAcidente(vendanova, "Venda Nova");
                            });
    
        var line2 = canvas.append("text")
                            .attr("class", "pampulha")
                            .attr("x", "110")
                            .attr("y", "260")
                            .attr("fill", "#E8E8E8")
                            .text("Pampulha")
                            .on("mouseenter", function(d) {
                                d3.select(this).attr("fill","#FFD700");
                                deletatudo();
                                deletageral();
                            })
                            .on("mouseout", function() {
                                d3.select(this).attr("fill", "#E8E8E8");
                                d3.select("text.desc").remove();
                                tiposAcidente(pampulha, "Pampulha");
                            });
                        
        var line3 = canvas.append("text")
                            .attr("class", "noroeste")
                            .attr("x", "100")
                            .attr("y", "350")
                            .attr("fill", "#E8E8E8")
                            .text("Noroeste")
                            .on("mouseenter", function(d) {
                                d3.select(this).attr("fill","#FFD700");
                                deletatudo();
                                deletageral();
                            })
                            .on("mouseout", function() {
                                d3.select(this).attr("fill", "#E8E8E8");
                                tiposAcidente(noroeste, "Noroeste");
                            });

        var line4 = canvas.append("text")
                            .attr("class", "oeste")
                            .attr("x", "130")
                            .attr("y", "430")
                            .attr("fill", "#E8E8E8")
                            .text("Oeste")
                            .on("mouseenter", function(d) {
                                d3.select(this).attr("fill","#FFD700");
                                deletatudo();
                                deletageral();
                            })
                            .on("mouseout", function() {
                                d3.select(this).attr("fill", "#E8E8E8");
                                tiposAcidente(oeste, "Oeste");
                            });
                            
        var line5 = canvas.append("text")
                            .attr("class", "barreiro")
                            .attr("x", "70")
                            .attr("y", "500")
                            .attr("fill", "#E8E8E8")
                            .text("Barreiro")
                            .on("mouseenter", function(d) {
                                d3.select(this).attr("fill","#FFD700");
                                deletatudo();
                                deletageral();
                            })
                            .on("mouseout", function() {
                                d3.select(this).attr("fill", "#E8E8E8");
                                tiposAcidente(barreiro, "Barreiro");
                            });

        var line6 = canvas.append("text")
                            .attr("class", "centrosul")
                            .attr("x", "190")
                            .attr("y", "410")
                            .attr("fill", "#E8E8E8")
                            .text("Centro-Sul")
                            .on("mouseenter", function(d) {
                                d3.select(this).attr("fill","#FFD700");
                                deletatudo();
                                deletageral();
                            })
                            .on("mouseout", function() {
                                d3.select(this).attr("fill", "#E8E8E8");
                                tiposAcidente(centrosul, "Centro-Sul");
                            });

        var line7 = canvas.append("text")
                            .attr("class", "leste")
                            .attr("x", "260")
                            .attr("y", "340")
                            .attr("fill", "#E8E8E8")
                            .text("Leste").on("mouseenter", function(d) {
                                d3.select(this).attr("fill","#FFD700");
                                deletatudo();
                                deletageral();
                            })
                            .on("mouseout", function() {
                                d3.select(this).attr("fill", "#E8E8E8");
                                tiposAcidente(leste, "Leste");
                            });

        var line8 = canvas.append("text")
                            .attr("class", "norte")
                            .attr("x", "220")
                            .attr("y", "190")
                            .attr("fill", "#E8E8E8")
                            .text("Norte")
                            .on("mouseenter", function(d) {
                                d3.select(this).attr("fill","#FFD700");
                                deletatudo();
                                deletageral();
                            })
                            .on("mouseout", function() {
                                d3.select(this).attr("fill", "#E8E8E8");
                                tiposAcidente(norte, "Norte");
                            });

        var line9 = canvas.append("text")
                            .attr("class", "nordeste")
                            .attr("x", "270")
                            .attr("y", "240")
                            .attr("fill", "#E8E8E8")
                            .text("Nordeste")
                            .on("mouseenter", function(d) {
                                d3.select(this).attr("fill","#FFD700");
                                deletatudo();
                                deletageral();
                            })
                            .on("mouseout", function() {
                                d3.select(this).attr("fill", "#E8E8E8");
                                tiposAcidente(nordeste, "Nordeste");
                            });

        
        // Função que renderiza o gráfico geral na tela
        geralGrafico(totaisvec)

        // Função delete do gráfico de região (deleta o gráfico que está renderizado na tela)
        function deletatudo() {
            d3.selectAll("rect").remove();
            d3.selectAll("g").remove();
            d3.select("text.um").remove();
            d3.select("text.dois").remove();
            d3.select("text.tres").remove();
            d3.select("text.quatro").remove();
            d3.select("text.cinco").remove();
            d3.select("text.seis").remove();
            d3.select("text.sete").remove();
            d3.select("text.titulo").remove();
            d3.select("text.vertical").remove();
        }

        // Função delete do gráfico geral
        function deletageral() {
            d3.selectAll("rect.bargeral").remove();
            d3.selectAll("g.um").remove();
            d3.selectAll("g.dois").remove();
            d3.selectAll("g.tres").remove();
            d3.selectAll("text.tum").remove();
            d3.selectAll("text.tdois").remove();
        }
        
        // Grafico total de acientes (geral) por regiao:
        function geralGrafico(total){
            // Escala do gráfico
            var widthScale = d3.scaleLinear()
                                .domain([0, 4000])
                                .range([0, 500]);

            // Gráfico geral
            var graficoGeral = canvas.selectAll("rect")
                                        .data(total)
                                        .enter().append("rect")
                                            .attr("class", "bargeral")
                                            .attr("height", function(d, i) {return widthScale(d)})
                                            .attr("width","50")
                                            .attr("x", function(d, i) {return (i * 100) + 455})
                                            .attr("y", function(d, i) {return 600 - widthScale(d)})
                                            .attr("fill", "#9C9C9C")
                                            .on("mouseenter", function(d) {
                                                d3.select(this).attr("fill","#4F4F4F");
                                                //poeLinha();
                                                canvas.append("line")
                                                    .attr("x1", 430)
                                                    .attr("y1", 600 - widthScale(d))
                                                    .attr("x2", 1305)
                                                    .attr("y2", 600 - widthScale(d))
                                                    .attr("stroke", "#1C1C1C");                        
                                            })
                                            .on("mouseout", function() {
                                                d3.select(this).attr("fill", "#9C9C9C");
                                                d3.selectAll("line").remove();
                                            })

            var chart = canvas.append('g')
                            .attr('transform', "translate(430, 100)")
                            .attr("class", "gum");

            // Aplicando escala
            var yScale = d3.scaleLinear()
                            .range([500, 0])
                            .domain([0, 4000]);

            var callY = chart.append('g')
                                .attr("class", "gdois")
                                .call(d3.axisLeft(yScale));

            // Nomes no eixo x
            var xScale = d3.scaleBand()
                            .range([0, 900])
                            .domain(["Oeste", "Venda Nova","Pampulha", "Centro-Sul", "Leste", "Barreiro", "Noroeste", "Nordeste", "Norte"])      
                
            var callX = chart.append('g')
                                .attr("class", "gtres")
                                .attr('transform', "translate(0, 500)")
                                .call(d3.axisBottom(xScale));

            var textoVertical = canvas.append("text")
                                        .attr("class", "tum")
                                        .attr("x", -340)
                                        .attr("y", 380)
                                        .attr("transform", "rotate(-90)")
                                        .attr("text-anchor", "middle")
                                        .text("Número de acidentes")

            var titulo = canvas.append("text")
                                .attr("class", "tdois")
                                .attr("x", 900)
                                .attr("y", 70)
                                .attr("text-anchor", "middle")
                                .text("Acidentes com vítimas em BH (Todas as Regiões)")
                
        }

        // Tipos de acidente por regiao
        function tiposAcidente(regiaobh, nome) {
            var widthScale = d3.scaleLinear()
                                .domain([0, 1600])
                                .range([0, 500]);

            var graficoGeral = canvas.selectAll("rect")
                                        .data(regiaobh)
                                        .enter().append("rect")
                                            .attr("class", "bar")
                                            .attr("height", function(d, i) {return widthScale(d)})
                                            .attr("width","80")
                                            .attr("x", function(d, i) {return (i * 120) + 455})
                                            .attr("y", function(d, i) {return 600 - widthScale(d)})
                                            .attr("fill", "#9C9C9C")
                                            .on("mouseenter", function(d, i) {
                                                d3.select(this).attr("fill","#4F4F4F")

                                                canvas.append("line")
                                                    .attr("x1", 430)
                                                    .attr("y1", 600 - widthScale(d))
                                                    .attr("x2", 1255)
                                                    .attr("y2", 600 - widthScale(d))
                                                    .attr("stroke", "#1C1C1C");

                                                if(i == 0) {
                                                    d3.select("text.um").attr("fill", "#1C1C1C")
                                                                        .style("opacity", 1);
                                                }else if(i == 1){
                                                    d3.select("text.dois").attr("fill", "#1C1C1C")
                                                                        .style("opacity", 1);
                                                }else if(i == 2) {
                                                    d3.select("text.tres").attr("fill", "#1C1C1C")
                                                                            .style("opacity", 1);
                                                }else if(i == 3) {
                                                    d3.select("text.quatro").attr("fill", "#1C1C1C")
                                                                            .style("opacity", 1);
                                                }else if(i == 4) {
                                                    d3.select("text.cinco").attr("fill", "#1C1C1C")
                                                                            .style("opacity", 1);
                                                }else if(i == 5) {
                                                    d3.select("text.seis").attr("fill", "#1C1C1C")
                                                                            .style("opacity", 1);
                                                }else if(i==6) {
                                                    d3.select("text.sete").attr("fill", "#1C1C1C")
                                                                            .style("opacity", 1);
                                                }
                                            })
                                            .on("mouseout", function(d, i) {
                                                d3.select(this).attr("fill", "#9C9C9C")

                                                if(i == 0) {
                                                    d3.select("text.um").attr("fill", "#363636")
                                                                        .style("opacity", .5);
                                                }else if(i == 1){
                                                    d3.select("text.dois").attr("fill", "#363636")
                                                                        .style("opacity", .5);
                                                }else if(i == 2) {
                                                    d3.select("text.tres").attr("fill", "#363636")
                                                                            .style("opacity", .5);
                                                }else if(i == 3) {
                                                    d3.select("text.quatro").attr("fill", "#363636")
                                                                            .style("opacity", .5);
                                                }else if(i == 4) {
                                                    d3.select("text.cinco").attr("fill", "#363636")
                                                                            .style("opacity", .5);
                                                }else if(i == 5) {
                                                    d3.select("text.seis").attr("fill", "#363636")
                                                                            .style("opacity", .5);
                                                }else if(i==6) {
                                                    d3.select("text.sete").attr("fill", "#363636")
                                                                            .style("opacity", .5);
                                                }  

                                                d3.selectAll("line").remove();
                                            })
        
            var chart = canvas.append('g')
                            .attr('transform', "translate(430, 100)");

            var yScale = d3.scaleLinear()
                            .range([500, 0])
                            .domain([0, 1600]);

            var callY = chart.append('g')
                                .call(d3.axisLeft(yScale));

            var xScale = d3.scaleBand()
                            .range([0, 850])
                            .domain(["Tipo 1", "Tipo 2", "Tipo 3", "Tipo 4", "Tipo 5", "Tipo 6", "Tipo 7"]);
                            
                                
            var callX = chart.append('g')
                                .attr('transform', "translate(0, 500)")
                                .call(d3.axisBottom(xScale));
                                

            var textoVertical = canvas.append("text")
                                        .attr("class", "vertical")
                                        .attr("x", -340)
                                        .attr("y", 380)
                                        .attr("transform", "rotate(-90)")
                                        .attr("text-anchor", "middle")
                                        .text("Número de acidentes")

            var titulo = canvas.append("text")
                                .attr("class", "titulo")
                                .attr("x", 900)
                                .attr("y", 70)
                                .attr("text-anchor", "middle")
                                .text("Tipos de acidente " + nome)
                                            
            graficoGeralElements = graficoGeral.nodes();

            var tipo1 = canvas.append("text")
                                .attr("class", "um")
                                .attr("x", "400")
                                .attr("y", "660")
                                .attr("fill", "#363636")
                                .text("Tipo 1 = CHOQUE MECANICO COM VÍTIMA")
                                .style("opacity", .5)
                                .on("mouseenter", function(d, i) {
                                    d3.select(this).attr("fill","#1C1C1C")
                                    .text("Tipo 1 = CHOQUE MECANICO COM VÍTIMA" + ": " + regiaobh[0] + " ACIDENTES")
                                    .style("opacity", 1);
                                    d3.select(graficoGeralElements[0]).attr("fill", "#1C1C1C");
                                })
                                .on("mouseout", function(d, i) {
                                    d3.select(this).attr("fill", "#363636")
                                    .text("Tipo 1 = CHOQUE MECANICO COM VÍTIMA")
                                    .style("opacity", .5);
                                    d3.select(graficoGeralElements[0]).attr("fill", "#9C9C9C");
                                })
            
            var tipo2 = canvas.append("text")
                                .attr("class", "dois")
                                .attr("x", "400")
                                .attr("y", "690")
                                .attr("fill", "#363636")
                                .text("Tipo 2 = ABALROAMENTO COM VÍTIMA")
                                .style("opacity", .5)
                                .on("mouseenter", function(d, i) {
                                    d3.select(this).attr("fill","#1C1C1C")
                                    .text("Tipo 2 = ABALROAMENTO COM VÍTIMA" + ": " + regiaobh[1] + " ACIDENTES")
                                    .style("opacity", 1);
                                    d3.select(graficoGeralElements[1]).attr("fill", "#1C1C1C");
                                })
                                .on("mouseout", function(d, i) {
                                    d3.select(this).attr("fill", "#363636")
                                    .text("Tipo 2 = ABALROAMENTO COM VÍTIMA")
                                    .style("opacity", .5);
                                    d3.select(graficoGeralElements[1]).attr("fill", "#9C9C9C");
                                })

            var tipo3 = canvas.append("text")
                                .attr("class", "tres")
                                .attr("x", "400")
                                .attr("y", "720")
                                .attr("fill", "#363636")
                                .text("Tipo 3 = ATROPELAMENTO DE PESSOA SEM VÍTIMA FATAL")
                                .style("opacity", .5)
                                .on("mouseenter", function(d) {
                                    d3.select(this).attr("fill","#1C1C1C")
                                    .text("Tipo 3 = ATROPELAMENTO DE PESSOA SEM VÍTIMA FATAL" + ": " + regiaobh[2] + " ACIDENTES")
                                    .style("opacity", 1);
                                    d3.select(graficoGeralElements[2]).attr("fill", "#1C1C1C");
                                })
                                .on("mouseout", function() {
                                    d3.select(this).attr("fill", "#363636")
                                    .text("Tipo 3 = ATROPELAMENTO DE PESSOA SEM VÍTIMA FATAL")
                                    .style("opacity", .5);
                                    d3.select(graficoGeralElements[2]).attr("fill", "#9C9C9C");
                                })
            
            var tipo4 = canvas.append("text")
                                .attr("class", "quatro")
                                .attr("x", "400")
                                .attr("y", "750")
                                .attr("fill", "#363636")
                                .text("Tipo 4 = QUEDA DE PESSOA DE VEICULO")
                                .style("opacity", .5)
                                .on("mouseenter", function(d) {
                                    d3.select(this).attr("fill","#1C1C1C")
                                    .text("Tipo 4 = QUEDA DE PESSOA DE VEICULO" + ": " + regiaobh[3] + " ACIDENTES")
                                    .style("opacity", 1);
                                    d3.select(graficoGeralElements[3]).attr("fill", "#1C1C1C");
                                })
                                .on("mouseout", function() {
                                    d3.select(this).attr("fill", "#363636")
                                    .text("Tipo 4 = QUEDA DE PESSOA DE VEICULO")
                                    .style("opacity", .5);
                                    d3.select(graficoGeralElements[3]).attr("fill", "#9C9C9C");
                                })

            var tipo5 = canvas.append("text")
                                .attr("class", "cinco")
                                .attr("x", "1000")
                                .attr("y", "660")
                                .attr("fill", "#363636")
                                .text("Tipo 5 = COLISAO DE VEICULOS COM VÍTIMA")
                                .style("opacity", .5)
                                .on("mouseenter", function(d) {
                                    d3.select(this).attr("fill","#1C1C1C")
                                    .text("Tipo 5 = COLISAO DE VEICULOS COM VÍTIMA" + ": " + regiaobh[4] + " ACIDENTES")
                                    .style("opacity", 1);
                                    d3.select(graficoGeralElements[4]).attr("fill", "#1C1C1C");
                                })
                                .on("mouseout", function() {
                                    d3.select(this).attr("fill", "#363636")
                                    .text("Tipo 5 = COLISAO DE VEICULOS COM VÍTIMA")
                                    .style("opacity", .5);
                                    d3.select(graficoGeralElements[4]).attr("fill", "#9C9C9C");
                                })

            var tipo6 = canvas.append("text")
                                .attr("class", "seis")
                                .attr("x", "1000")
                                .attr("y", "690")
                                .attr("fill", "#363636")
                                .text("Tipo 6 = CAPOTAMENTO/TOMBAMENTO COM VÍTIMA")
                                .style("opacity", .5)
                                .on("mouseenter", function(d) {
                                    d3.select(this).attr("fill","#1C1C1C")
                                    .text("Tipo 6 = CAPOTAMENTO/TOMBAMENTO COM VÍTIMA" + ": " + regiaobh[5] + " ACIDENTES")
                                    .style("opacity", 1);
                                    d3.select(graficoGeralElements[5]).attr("fill", "#363636");
                                })
                                .on("mouseout", function() {
                                    d3.select(this).attr("fill", "#363636")
                                    .text("Tipo 6 = CAPOTAMENTO/TOMBAMENTO COM VÍTIMA")
                                    .style("opacity", .5);
                                    d3.select(graficoGeralElements[5]).attr("fill", "#9C9C9C");
                                })

            var tipo7 = canvas.append("text")
                                .attr("class", "sete")
                                .attr("x", "1000")
                                .attr("y", "720")
                                .attr("fill", "#363636")
                                .text("Tipo 7 = OUTROS COM VÍTIMA")
                                .style("opacity", .5)
                                .on("mouseenter", function(d) {
                                    d3.select(this).attr("fill","#1C1C1C")
                                    .text("Tipo 7 = OUTROS COM VÍTIMA" + ": " + regiaobh[6] + " ACIDENTES")
                                    .style("opacity", 1);
                                    d3.select(graficoGeralElements[6]).attr("fill", "#363636");
                                })
                                .on("mouseout", function() {
                                    d3.select(this).attr("fill", "#363636")
                                    .text("Tipo 7 = OUTROS COM VÍTIMA")
                                    .style("opacity", .5);
                                    d3.select(graficoGeralElements[6]).attr("fill", "#9C9C9C");
                                })
        }    
    })
};// Fim da funcao