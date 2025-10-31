// =============================================
// GERADOR DE SENHAS SEGURAS 
// =============================================

document.getElementById('senhaForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // COLETA DE VALORES DO FORMULÁRIO
    const quantidade = parseInt(document.getElementById('quantidadeCaracteres').value) || 12;
    const prefixo = document.getElementById('prefixo').value;
    const usarMaiusculas = document.getElementById('letraMaiuscula').checked;
    const usarMinusculas = document.getElementById('letraMinuscula').checked;
    const usarNumeros = document.getElementById('incluirNumeros').checked;
    const usarEspeciais = document.getElementById('caracterEspecial').checked;

    // VALIDAÇÃO DAS SELEÇÕES DO USUÁRIO
    if (!usarMaiusculas && !usarMinusculas && !usarNumeros && !usarEspeciais) {
        alert('Por favor, selecione pelo menos um tipo de caractere!');
        return;
    }

    // GERAÇÃO E EXIBIÇÃO DA SENHA
    const senha = gerarSenha(quantidade, prefixo, usarMaiusculas, usarMinusculas, usarNumeros, usarEspeciais);
    document.getElementById('senhaGerada').textContent = senha;
});

/**
 * FUNÇÃO GERAR SENHA
 * Gera uma senha aleatória baseada nas preferências do usuário
 */
function gerarSenha(quantidade, prefixo, maiusculas, minusculas, numeros, especiais) {
    // CONJUNTOS DE CARACTERES DISPONÍVEIS
    const maiusculasChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const minusculasChars = 'abcdefghijklmnopqrstuvwxyz';
    const numerosChars = '0123456789';
    const especiaisChars = '!@#$%&*';

    // CRIAÇÃO DO POOL DE CARACTERES PERMITIDOS
    let pool = '';
    if (maiusculas) pool += maiusculasChars;
    if (minusculas) pool += minusculasChars;
    if (numeros) pool += numerosChars;
    if (especiais) pool += especiaisChars;

    // CONSTRUÇÃO DA SENHA
    let senha = '';

    // Adiciona o prefixo no início da senha
    if (prefixo) {
        senha += prefixo;
    }

    // Gera caracteres aleatórios restantes
    const caracteresRestantes = quantidade - senha.length;
    
    for (let i = 0; i < caracteresRestantes; i++) {
        const randomIndex = Math.floor(Math.random() * pool.length);
        senha += pool[randomIndex];
    }

    return senha;
}

// =============================================
// FUNÇÕES PARA SENHAS MEMORÁVEIS
// =============================================

/**
 * GERA SENHA BASEADA EM FRASE COM SEPARADORES
 */
function gerarSenhaFrase() {
    const palavra1 = obterPalavraAleatoria('cotidiano');
    const palavra2 = obterPalavraAleatoria('adjetivos');
    const palavra3 = obterPalavraAleatoria('verbos');
    
    const separadores = ['@', '#', '$', '&', '*', '!', '-', '_', '+', '='];
    const separador1 = separadores[Math.floor(Math.random() * separadores.length)];
    const separador2 = separadores[Math.floor(Math.random() * separadores.length)];
    
    const numero = Math.floor(Math.random() * 9000 + 1000);
    
    const senha = 
        capitalizar(palavra1) + 
        separador1 + 
        capitalizar(palavra2) + 
        separador2 + 
        numero;
    
    document.getElementById('senhaGerada').textContent = senha;
}

/**
 * GERA SENHA COMBINANDO MÚLTIPLAS PALAVRAS
 */
function gerarSenhaCombinacao() {
    const palavras = obterPalavrasAleatorias(2 + Math.floor(Math.random() * 2));
    const palavrasCapitalizadas = palavras.map(palavra => capitalizar(palavra));
    
    const separadores = ['', '@', '#', '$', '&', ''];
    const separador = separadores[Math.floor(Math.random() * separadores.length)];
    
    const numero = Math.floor(Math.random() * 90 + 10);
    
    let senha = palavrasCapitalizadas.join(separador);
    senha += numero;
    
    document.getElementById('senhaGerada').textContent = senha;
}

/**
 * GERA SENHA BASEADA EM CATEGORIA ESPECÍFICA
 */
function gerarSenhaCategoria() {
    const categoriaSelect = document.getElementById('categoriaPalavras');
    const categoria = categoriaSelect.value;
    
    // USA APENAS CATEGORIA ESPECÍFICA (SEM MISTURADO)
    const palavras = obterPalavrasAleatorias(2 + Math.floor(Math.random() * 2), categoria);
    
    const palavrasCapitalizadas = palavras.map(palavra => capitalizar(palavra));
    
    const separadores = ['', '@', '#', '$', '&', '-', '_', '+', '=', '~', '.', '!'];
    const separador = separadores[Math.floor(Math.random() * separadores.length)];
    
    const numero = Math.floor(Math.random() * 9900 + 100);
    
    let senha = palavrasCapitalizadas.join(separador);
    senha += separador + numero;
    
    document.getElementById('senhaGerada').textContent = senha;
}

/**
 * FUNÇÃO AUXILIAR: CAPITALIZA PALAVRAS
 * Converte primeira letra para maiúscula
 */
function capitalizar(palavra) {
    return palavra.charAt(0).toUpperCase() + palavra.slice(1);
}

/**
 * FUNÇÃO DE COPIAR SENHA PARA ÁREA DE TRANSFERÊNCIA
 */
document.getElementById('senhaGerada').addEventListener('click', function() {
    const senha = this.textContent;
    
    if (senha && senha !== 'Clique em "Gerar Senha" para criar uma senha') {
        navigator.clipboard.writeText(senha).then(() => {
            const originalText = this.textContent;
            this.textContent = '✅ Senha copiada!';
            this.style.color = '#00ff88';
            
            setTimeout(() => {
                this.textContent = originalText;
                this.style.color = '#00ff88';
            }, 2000);
        });
    }
});