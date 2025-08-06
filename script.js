const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado:"Quem foi o 1 campeão mundial de surfe?",
        alternativas:[
            {
                texto:"Gabriel Medina",
                afirmação:"Resposta correta",
                pontos:1
            },
            {
                texto:"Ítalo Ferreira",
                afirmação:"Resposta errada",
                pontos:0
            }
        ]
    },
       {
        enunciado:"Quem foi o 1 campeão mundial de surfe?",
        alternativas:[
            {
                texto:"Gabriel Medina",
                afirmação:"Resposta correta",
                pontos:1
            },
            {
                texto:"Ítalo Ferreira",
                afirmação:"Resposta errada",
                pontos:0
            }
        ]
    },
]


