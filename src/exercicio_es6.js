const alunos = ["Pedro"];

const alunos2 = alunos.map(function(aluno) {
    return {
        nome: aluno,
        nota: 5
    }
})

alunos2.push({
    nome: "Maria",
    nota: 8
})

alunos2.push({
    nome: "Jose",
    nota: 7
})

alunos2.push({
    nome: "Julia",
    nota: 6
})

alunos2.push({
    nome: "Joao",
    nota: 4
})

console.log(alunos2);

const alunosAcimaDaMedia = alunos2.filter(function(item) {
    return item.nota >= 6
})

console.log(alunosAcimaDaMedia);