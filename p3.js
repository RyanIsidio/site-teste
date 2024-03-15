let numeroPerguntaAtual = 1; // Inicia na primeira pergunta

function proximaPergunta() {
    let perguntaAtual = document.getElementById('pergunta' + numeroPerguntaAtual);
    let proximaPergunta = document.getElementById('pergunta' + (numeroPerguntaAtual + 1));

    if (perguntaAtual && proximaPergunta) {
        perguntaAtual.style.display = 'none'; // Esconde a pergunta atual
        proximaPergunta.style.display = 'block'; // Mostra a próxima pergunta
        numeroPerguntaAtual++; // Atualiza o número da pergunta atual
    }
}

function Respostas() {
    let r1 = document.getElementById('rp1').value.toLowerCase();
    let r2 = document.getElementById('rp2').value.toLowerCase();
    let r3 = document.getElementById('rp3').value.toLowerCase();
    let r4 = document.getElementById('rp4').value.toLowerCase();
    let r5 = document.getElementById('rp5').value.toLowerCase();
    let pontos = 0;

    if (r1 === "relógio" || r1 === "relogio") {
        pontos += 20; // Se a resposta estiver correta, ganha 10 pontos
    }

    if (r2 === "nome") {
        pontos += 20;
    }

    if (r3 === "recorde") {
        pontos += 20;
    }

    if (r4 === "garrafa") {
        pontos += 20;
    }

    if (r5 === "ponte") {
        pontos += 20;
    }

    var data = new Date ()
    var ano = data.getFullYear()
    var fano = document.getElementById ('txtano') 

    if (fano.value.lenght == 0 || Number(fano.value) > ano) {
        window.alert ("[ERRO] Verifique os dados e tente novamente")
    }

    let fsex = document.getElementsByName('rsex') 
    let idade = ano - Number(fano.value)
    let genero = ''
    
    if (fsex[0].checked) {
        genero = "Homem";
    } else if (fsex[1].checked) {
        genero = "Mulher";
    }
    
    // Cria e define a imagem de acordo com o gênero
    let img = document.createElement('img');
    img.setAttribute('id', 'foto');
    img.style.width = '500px';
    img.style.height = 'auto';
    
    if (genero === "Homem") {
        if (idade >= 0 && idade <= 16) {
            img.setAttribute('src', 'cria.webp');
        } else if (idade <= 27) {
            img.setAttribute('src', 'calvao.webp');
        } else if (idade <= 80) {
            img.setAttribute('src', 'idosocalvo.jpg');
        } else {
            // Define a imagem para "Bald ancião" ou algo semelhante
        }
    } else if (genero === "Mulher") {
        // Define a imagem específica para mulheres
        img.setAttribute('src', 'calvona.jpg');
    }
    
        
    document.getElementById('res').innerHTML = `Idade: ${idade}<br>QI: ${pontos}<br>Gênero: ${genero}<br>`;
    document.getElementById('res').appendChild(img);
}

