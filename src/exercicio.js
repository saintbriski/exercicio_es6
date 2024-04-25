//classe construtora (obejto)
class alunos {
    constructor(nomeAluno, notaAluno) {
        this.nome = nomeAluno;
        this.nota = notaAluno;
    }
};

//instância da classe pai e array dos objetos
const alunoENota = [
    new alunos("Paula", 5.5),
    new alunos("Jeferson", 8),
    new alunos("Leticia", 6),
    new alunos("Lucas", 8.9),
    new alunos("Aline", 5.7),
    new alunos("Pedro", 9),
];

//declarando função que retorna alunos com nota >=6
function alunosAprovados(alunoENota) {
    return alunoENota.filter(alunos => alunos.nota >= 6)
};

//chamando a função
const aprovados = alunosAprovados(alunoENota);
aprovados.forEach(alunos => {
    console.log(`Aluno: ${alunos.nome}, Nota: ${alunos.nota}`)
});