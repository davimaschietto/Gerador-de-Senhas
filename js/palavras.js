// js/palavras.js - Banco de dados de palavras para senhas memoráveis

const bancosPalavras = {
    cotidiano: [
        'café', 'pão', 'leite', 'chuva', 'sol', 'lua', 'estrela', 'flor', 'árvore', 'nuvem',
        'casa', 'porta', 'janela', 'mesa', 'cadeira', 'sofá', 'cama', 'espelho', 'tapete', 'almofada',
        'livro', 'caneta', 'papel', 'caderno', 'revista', 'jornal', 'computador', 'teclado', 'mouse', 'tela',
        'rua', 'carro', 'ônibus', 'bicicleta', 'moto', 'táxi', 'metro', 'trem', 'avião', 'barco',
        'parque', 'praça', 'praia', 'rio', 'mar', 'montanha', 'floresta', 'jardim', 'campo', 'lago',
        'amigo', 'família', 'filho', 'filha', 'pai', 'mãe', 'irmão', 'irmã', 'avo', 'primo',
        'trabalho', 'escola', 'faculdade', 'universidade', 'professor', 'médico', 'engenheiro', 'aluno', 'estudante', 'colega',
        'tempo', 'relógio', 'calendário', 'horas', 'minutos', 'segundos', 'manhã', 'tarde', 'noite', 'madrugada',
        'cidade', 'bairro', 'rua', 'avenida', 'praça', 'parque', 'shopping', 'mercado', 'farmácia', 'padaria'
    ],
    
    comidas: [
        'feijoada', 'churrasco', 'pizza', 'hambúrguer', 'sorvete', 'bolo', 'pudim', 'brigadeiro', 'beijinho', 'cajuzinho',
        'café', 'suco', 'refrigerante', 'água', 'cerveja', 'vinho', 'whisky', 'vodka', 'rum', 'tequila',
        'queijo', 'pão', 'presunto', 'mortadela', 'salame', 'azeitona', 'patê', 'torrada', 'biscoito', 'bolacha',
        'arroz', 'feijão', 'batata', 'cenoura', 'alface', 'tomate', 'cebola', 'alho', 'pimentão', 'abobrinha',
        'banana', 'maçã', 'laranja', 'uva', 'morango', 'abacaxi', 'mamão', 'melancia', 'kiwi', 'manga',
        'chocolate', 'balas', 'pirulito', 'gomas', 'jujuba', 'caramelo', 'geleia', 'mel', 'açúcar', 'adoçante',
        'salada', 'macarrão', 'lasanha', 'estrogonofe', 'moqueca', 'acarajé', 'tacacá', 'vatapá', 'caruru', 'sarapatel',
        'ovo', 'leite', 'manteiga', 'margarina', 'óleo', 'azeite', 'vinagre', 'molho', 'tempero', 'condimento'
    ],
    
    animais: [
        'cachorro', 'gato', 'pássaro', 'peixe', 'cavalo', 'vaca', 'galinha', 'pato', 'peru', 'ganso',
        'elefante', 'leão', 'tigre', 'urso', 'lobo', 'raposa', 'zebra', 'girafa', 'hipopótamo', 'rinoceronte',
        'macaco', 'gorila', 'chimpanzé', 'orangotango', 'lemure', 'esquilo', 'rato', 'camundongo', 'hamster', 'porquinho',
        'coruja', 'águia', 'falcão', 'gavião', 'urubu', 'pomba', 'pardal', 'canário', 'calopsita', 'arara',
        'borboleta', 'abelha', 'formiga', 'aranha', 'escorpião', 'besouro', 'joaninha', 'grilo', 'gafanhoto', 'libélula',
        'cobra', 'jacaré', 'crocodilo', 'tartaruga', 'lagarto', 'camaleão', 'iguana', 'salamandra', 'sapo', 'rã',
        'golfinho', 'baleia', 'tubarão', 'polvo', 'lula', 'siri', 'caranguejo', 'lagosta', 'camarão', 'ostra',
        'pinguim', 'foca', 'leão-marinho', 'urso-polar', 'rena', 'alce', 'veado', 'canguru', 'coala', 'ornitorrinco'
    ],
    
    profissoes: [
        'médico', 'enfermeiro', 'dentista', 'psicólogo', 'psiquiatra', 'fisioterapeuta', 'nutricionista', 'farmacêutico', 'biomédico', 'veterinário',
        'professor', 'educador', 'pedagogo', 'reitor', 'coordenador', 'orientador', 'instrutor', 'treinador', 'tutor', 'mentor',
        'engenheiro', 'arquiteto', 'urbanista', 'designer', 'desenhista', 'projetista', 'calculista', 'estrutural', 'elétrico', 'civil',
        'advogado', 'juiz', 'promotor', 'delegado', 'policial', 'detetive', 'perito', 'escrivão', 'oficial', 'soldado',
        'bombeiro', 'paramédico', 'socorrista', 'resgatista', 'salvavidas', 'segurança', 'vigia', 'guardinha', 'porteiro', 'controlador',
        'programador', 'analista', 'desenvolvedor', 'cientista', 'pesquisador', 'tecnólogo', 'técnico', 'suporte', 'administrador', 'gerente',
        'jornalista', 'escritor', 'poeta', 'crítico', 'editor', 'revisor', 'redator', 'repórter', 'apresentador', 'locutor',
        'artista', 'músico', 'cantor', 'ator', 'dançarino', 'pintor', 'escultor', 'fotógrafo', 'cineasta', 'produtor',
        'chef', 'cozinheiro', 'padeiro', 'confeiteiro', 'bartender', 'garçom', 'mesário', 'atendente', 'vendedor', 'consultor'
    ],
    
    cidades: [
        'São Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Salvador', 'Fortaleza', 'Brasília', 'Curitiba', 'Manaus', 'Recife', 'Porto Alegre',
        'Belém', 'Goiânia', 'Santos', 'Campinas', 'Florianópolis', 'Vitória', 'Natal', 'Maceió', 'João Pessoa', 'Teresina',
        'Cuiabá', 'Campo Grande', 'Palmas', 'Porto Velho', 'Rio Branco', 'Macapá', 'Boa Vista', 'São Luís', 'Aracaju', 'Rio Grande',
        'Blumenau', 'Joinville', 'Uberlândia', 'Ribeirão Preto', 'São José dos Campos', 'Sorocaba', 'Londrina', 'Maringá', 'Caxias do Sul', 'Pelotas',
        'Niterói', 'Duque de Caxias', 'São Bernardo', 'Osasco', 'Guarulhos', 'Campo Grande', 'Santo André', 'São José', 'Contagem', 'Juiz de Fora',
        'Aracaju', 'Feira de Santana', 'Anápolis', 'São Vicente', 'Caucaia', 'Vitória da Conquista', 'Petrolina', 'Cariacica', 'Itaquaquecetuba', 'Mauá'
    ],
    
    adjetivos: [
        'feliz', 'triste', 'alegre', 'contente', 'animado', 'empolgado', 'entusiasmado', 'eufórico', 'radiante', 'jubiloso',
        'bravo', 'nervoso', 'irritado', 'furioso', 'raivoso', 'indignado', 'revoltado', 'exasperado', 'colérico', 'irado',
        'calmo', 'tranquilo', 'sereno', 'pacífico', 'plácido', 'sossegado', 'quieto', 'repousante', 'ameno', 'suave',
        'ansioso', 'preocupado', 'agitado', 'inquieto', 'nervoso', 'tenso', 'apreensivo', 'receoso', 'atemorizado', 'assustado',
        'inteligente', 'sábio', 'esperto', 'astuto', 'perspicaz', 'genial', 'brilhante', 'lúcido', 'agudo', 'penetrante',
        'criativo', 'inovador', 'original', 'imaginativo', 'inventivo', 'talentoso', 'habilidoso', 'engenhoso', 'artístico', 'inspirado',
        'forte', 'robusto', 'resistente', 'vigoroso', 'poderoso', 'potente', 'musculoso', 'athético', 'sólido', 'firme',
        'fraco', 'delicado', 'frágil', 'sensível', 'vulnerável', 'débil', 'frouxo', 'mole', 'fofo', 'suave',
        'rápido', 'veloz', 'ligeiro', 'ágil', 'lesto', 'acelerado', 'apressado', 'imediato', 'instantâneo', 'pronto',
        'lento', 'devagar', 'tardio', 'demorado', 'prolongado', 'estendido', 'dilatado', 'pausado', 'gradual', 'passo'
    ],
    
    verbos: [
        'correr', 'pular', 'saltar', 'pular', 'pular', 'pular', 'pular', 'pular', 'pular', 'pular',
        'nadar', 'mergulhar', 'flutuar', 'boiar', 'navegar', 'surfar', 'remar', 'velejar', 'pescar', 'molhar',
        'voar', 'planar', 'pairar', 'elevar', 'subir', 'ascender', 'decolar', 'aterrissar', 'pousar', 'sobrevoar',
        'dormir', 'descansar', 'repousar', 'cochilar', 'sonecar', 'adormecer', 'despertar', 'acordar', 'levantar', 'despertar',
        'comer', 'beber', 'almoçar', 'jantar', 'lanchar', 'ceiar', 'degustar', 'saborear', 'devorar', 'ingerir',
        'estudar', 'aprender', 'ensinar', 'educar', 'instruir', 'treinar', 'praticar', 'exercitar', 'revisar', 'memorizar',
        'trabalhar', 'laborar', 'produzir', 'fabricar', 'construir', 'criar', 'desenvolver', 'elaborar', 'executar', 'realizar',
        'ler', 'escrever', 'publicar', 'editar', 'revisar', 'traduzir', 'interpretar', 'decifrar', 'analisar', 'compreender',
        'desenhar', 'pintar', 'rabiscar', 'esboçar', 'ilustrar', 'colorir', 'decorar', 'ornamentar', 'embelezar', 'adornar',
        'cantar', 'dançar', 'tocar', 'compor', 'ensaiar', 'apresentar', 'performar', 'atuar', 'representar', 'encenar'
    ],
    
    esportes: [
        'futebol', 'basquete', 'vôlei', 'tênis', 'natação', 'atletismo', 'ciclismo', 'judô', 'boxe', 'karatê',
        'surfe', 'skate', 'patins', 'esqui', 'snowboard', 'alpinismo', 'montanhismo', 'caminhada', 'corrida', 'maratona',
        'golfe', 'hipismo', 'automobilismo', 'motociclismo', 'vela', 'remo', 'canoagem', 'triatlo', 'pentatlo', 'heptatlo',
        'ginástica', 'acrobacia', 'malabarismo', 'parkour', 'crossfit', 'musculação', 'yoga', 'pilates', 'meditação', 'alongamento',
        'xadrez', 'damas', 'poker', 'sinuca', 'bilhar', 'dominó', 'carta', 'tabuleiro', 'estrategia', 'competição'
    ],
    
    tecnologia: [
        'computador', 'notebook', 'tablet', 'smartphone', 'celular', 'telefone', 'internet', 'wi-fi', 'bluetooth', 'nuvem',
        'software', 'hardware', 'aplicativo', 'programa', 'sistema', 'plataforma', 'interface', 'usuario', 'senha', 'login',
        'email', 'mensagem', 'chat', 'video', 'audio', 'foto', 'imagem', 'filme', 'musica', 'podcast',
        'rede', 'servidor', 'dados', 'informação', 'conhecimento', 'sabedoria', 'inteligencia', 'artificial', 'machine', 'learning',
        'robô', 'drone', 'impressora', 'scanner', 'projetor', 'monitor', 'teclado', 'mouse', 'webcam', 'microfone',
        'codigo', 'algoritmo', 'função', 'variável', 'constante', 'objeto', 'classe', 'método', 'propriedade', 'atributo',
        'desenvolver', 'programar', 'codificar', 'testar', 'debuggar', 'implementar', 'integrar', 'publicar', 'atualizar', 'manter'
    ],
    
    natureza: [
        'floresta', 'selva', 'matagal', 'bosque', 'arbusto', 'plantação', 'jardim', 'horta', 'viveiro', 'estufa',
        'oceano', 'mar', 'lago', 'rio', 'cachoeira', 'nascente', 'fonte', 'poço', 'açude', 'represa',
        'montanha', 'colina', 'vale', 'planície', 'deserto', 'duna', 'praia', 'penhasco', 'rochedo', 'pedra',
        'céu', 'nuvem', 'estrela', 'planeta', 'lua', 'sol', 'cometa', 'meteoro', 'galáxia', 'universo',
        'vento', 'tempestade', 'tornado', 'furacão', 'chuva', 'neve', 'granizo', 'geada', 'orvalho', 'nevoeiro',
        'animal', 'planta', 'fungo', 'bactéria', 'vírus', 'ecossistema', 'biodiversidade', 'evolução', 'adaptação', 'sobrevivência'
    ]
};

// Função para obter uma palavra aleatória de uma categoria específica
function obterPalavraAleatoria(categoria) {
    const palavras = bancosPalavras[categoria];
    return palavras[Math.floor(Math.random() * palavras.length)];
}

// Função para obter várias palavras aleatórias
function obterPalavrasAleatorias(quantidade, categoria = 'cotidiano') {
    const palavras = [];
    for (let i = 0; i < quantidade; i++) {
        palavras.push(obterPalavraAleatoria(categoria));
    }
    return palavras;
}